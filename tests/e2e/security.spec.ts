import { expect, test } from "@playwright/test";

test("CSP blocks unapproved inline and external scripts", async ({ page }) => {
  await page.goto("/");
  await page.route("https://untrusted.example/security.js", (route) =>
    route.fulfill({
      contentType: "application/javascript",
      body: "window.untrustedScriptRan = true;",
    }),
  );
  const violations = await page.evaluate(
    () =>
      new Promise<string[]>((resolve) => {
        const blocked: string[] = [];
        document.addEventListener("securitypolicyviolation", (event) => {
          blocked.push(event.blockedURI);
          if (blocked.length === 2) resolve(blocked);
        });
        const inline = document.createElement("script");
        inline.textContent = "window.untrustedScriptRan = true;";
        document.body.append(inline);
        const external = document.createElement("script");
        external.src = "https://untrusted.example/security.js";
        document.body.append(external);
      }),
  );
  expect(violations).toContain("inline");
  expect(violations).toContain("https://untrusted.example/security.js");
  expect(await page.evaluate(() => "untrustedScriptRan" in window)).toBe(false);
});

test("CSP permits page assets and the same-origin email script without violations", async ({
  page,
}) => {
  // Inspect fresh responses rather than Firefox's conditional cache responses.
  await page.route("**/*", (route) => route.continue());
  await page.addInitScript(() => {
    const violations: string[] = [];
    Object.assign(window, { cspViolations: violations });
    document.addEventListener("securitypolicyviolation", (event) => {
      violations.push(`${event.effectiveDirective}: ${event.blockedURI}`);
    });
  });
  await page.goto("/projects");
  const details = await page
    .locator("main article a")
    .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
  for (const route of [
    "/",
    "/about",
    "/contact",
    "/projects",
    ...details,
    "/security-missing-page",
  ]) {
    const response = await page.goto(route);
    expect(response!.status()).toBe(
      route === "/security-missing-page" ? 404 : 200,
    );
    await expect(
      page.locator('meta[http-equiv="content-security-policy"]'),
    ).toHaveCount(1);
    await page.evaluate(() => document.fonts.ready);
    expect(
      await page.evaluate(async () => {
        // Astro also declares optional local Arial fallbacks, absent on some hosts.
        const fonts = [...document.fonts].filter(
          (font) => !font.family.includes("fallback:"),
        );
        await Promise.all(fonts.map((font) => font.load()));
        return (
          fonts.length > 0 && fonts.every((font) => font.status === "loaded")
        );
      }),
    ).toBe(true);
    for (const image of await page.locator("img").all()) {
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() =>
          image.evaluate(
            (element) =>
              element instanceof HTMLImageElement &&
              element.complete &&
              element.naturalWidth > 0,
          ),
        )
        .toBe(true);
    }
    expect(
      await page.evaluate(
        () => (window as unknown as { cspViolations: string[] }).cspViolations,
      ),
    ).toEqual([]);
  }

  await page.goto("/contact");
  const email = page.locator('main a[href^="mailto:"]').first();
  await expect(email).toBeVisible();
  const href = await email.getAttribute("href");
  // Local output has no Cloudflare transformation; simulate a same-origin decoder.
  const scriptPath =
    "/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js";
  await page.route(`**${scriptPath}`, (route) =>
    route.fulfill({
      contentType: "application/javascript",
      body: `document.querySelector('[data-email-fixture]').setAttribute('href', ${JSON.stringify(href)});`,
    }),
  );
  await email.evaluate((element) => {
    element.setAttribute("data-email-fixture", "");
    element.setAttribute("href", "/cdn-cgi/l/email-protection");
  });
  await page.evaluate(
    (src) =>
      new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error("Same-origin email script blocked"));
        document.body.append(script);
      }),
    scriptPath,
  );
  await expect(email).toHaveAttribute("href", href!);
  expect(
    await page.evaluate(
      () => (window as unknown as { cspViolations: string[] }).cspViolations,
    ),
  ).toEqual([]);
});
