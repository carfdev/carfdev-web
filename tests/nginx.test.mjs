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
      "content-security-policy": "frame-ancestors 'none'",
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
