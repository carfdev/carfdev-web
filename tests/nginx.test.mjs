import assert from "node:assert/strict";
import test from "node:test";
import { parseHTML } from "linkedom";
import { createServer } from "node:http";
import { once } from "node:events";
import { chromium } from "@playwright/test";

const origin = process.env.NGINX_TEST_URL;
assert.ok(origin, "Set NGINX_TEST_URL to the local nginx runtime URL");

test("nginx preserves routes and sends security headers on HTML, assets and errors", async () => {
  const home = await fetch(new URL("/", origin));
  const { document } = parseHTML(await home.text());
  const css = document
    .querySelector('link[rel="stylesheet"]')
    .getAttribute("href");
  for (const [path, status] of [
    ["/", 200],
    ["/contact", 200],
    [css, 200],
    ["/security-missing-page", 404],
    ["/404.html", 404],
  ]) {
    const response = await fetch(new URL(path, origin));
    assert.equal(response.status, status, path);
    for (const [name, value] of Object.entries({
      "content-security-policy":
        "frame-ancestors 'none'; script-src 'self'; object-src 'none'; base-uri 'none'",
      "x-frame-options": "DENY",
      "referrer-policy": "strict-origin-when-cross-origin",
      "permissions-policy": "camera=(), microphone=(), geolocation=()",
    })) {
      assert.equal(response.headers.get(name), value, `${path}: ${name}`);
    }
  }
});

test("nginx prevents another origin from embedding the portfolio", async () => {
  const server = createServer((_request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.end(`<iframe src="${new URL("/contact", origin)}"></iframe>`);
  });
  server.listen(0, "127.0.0.1");
  await once(server, "listening");
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    const blocked = page.waitForEvent("console", {
      predicate: (message) => message.text().includes("frame-ancestors"),
      timeout: 10_000,
    });
    await page.goto(`http://127.0.0.1:${server.address().port}`);
    await blocked;
    assert.ok(
      !page
        .frames()
        .some((frame) => frame.url() === new URL("/contact", origin).href),
    );
  } finally {
    await browser.close();
    await new Promise((resolve) => server.close(resolve));
  }
});

test("HTTP script restrictions preserve Astro font hashes and same-origin scripts", async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.addInitScript(() => {
      window.cspViolations = [];
      document.addEventListener("securitypolicyviolation", (event) => {
        window.cspViolations.push(event.blockedURI);
      });
    });
    await page.goto(new URL("/projects", origin).href);
    const details = await page
      .locator("main article a")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    for (const path of [
      "/",
      "/about",
      "/contact",
      "/projects",
      ...details,
      "/security-missing-page",
    ]) {
      await page.goto(new URL(path, origin).href);
      assert.ok(
        await page
          .locator('meta[http-equiv="content-security-policy"]')
          .getAttribute("content"),
      );
      const fontsLoaded = await page.evaluate(async () => {
        const fonts = [...document.fonts].filter(
          (font) => !font.family.includes("fallback:"),
        );
        await Promise.all(fonts.map((font) => font.load()));
        return (
          fonts.length >= 2 && fonts.every((font) => font.status === "loaded")
        );
      });
      assert.ok(fontsLoaded, path);
      assert.deepEqual(
        await page.evaluate(() => window.cspViolations),
        [],
        path,
      );
    }
    const scriptPath =
      "/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js";
    await page.route(`**${scriptPath}`, (route) =>
      route.fulfill({
        contentType: "application/javascript",
        body: "window.emailScriptAllowed = true;",
      }),
    );
    await page.route("https://untrusted.example/security.js", (route) =>
      route.fulfill({
        contentType: "application/javascript",
        body: "window.untrustedScriptRan = true;",
      }),
    );
    await page.evaluate(async (path) => {
      const allowed = document.createElement("script");
      allowed.src = path;
      await new Promise((resolve, reject) => {
        allowed.onload = resolve;
        allowed.onerror = reject;
        document.body.append(allowed);
      });
      const inline = document.createElement("script");
      inline.textContent = "window.untrustedScriptRan = true;";
      document.body.append(inline);
      const external = document.createElement("script");
      external.src = "https://untrusted.example/security.js";
      await new Promise((resolve) => {
        external.onerror = resolve;
        external.onload = resolve;
        document.body.append(external);
      });
    }, scriptPath);
    assert.equal(await page.evaluate(() => window.emailScriptAllowed), true);
    assert.equal(
      await page.evaluate(() => "untrustedScriptRan" in window),
      false,
    );
    const violations = await page.evaluate(() => window.cspViolations);
    assert.ok(violations.includes("inline"));
    assert.ok(violations.includes("https://untrusted.example/security.js"));
  } finally {
    await browser.close();
  }
});
