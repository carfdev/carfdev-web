import { expect, test } from "@playwright/test";

test("skip navigation moves sequential keyboard focus past the header", async ({
  page,
}) => {
  await page.goto("/projects");
  await page.keyboard.press("Tab");
  await expect(page.locator('a[href="#main-content"]')).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/#main-content$/);
  await page.keyboard.press("Tab");
  await expect(page.locator("main a:focus")).toBeFocused();
});

test("keyboard navigation exposes a visible focus indicator", async ({
  page,
}) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  const link = page.locator('header a[href="/"]');
  await expect(link).toBeFocused();
  await expect
    .poll(() =>
      link.evaluate((element) => {
        const style = getComputedStyle(element);
        return (
          element.matches(":focus-visible") &&
          style.outlineStyle !== "none" &&
          parseFloat(style.outlineWidth) > 0 &&
          style.outlineColor !== "rgba(0, 0, 0, 0)"
        );
      }),
    )
    .toBe(true);
});

test("pages fit the viewport after fonts and layout settle", async ({
  page,
}) => {
  await page.goto("/projects");
  const detail = await page
    .locator("main article a")
    .first()
    .getAttribute("href");
  expect(detail).not.toBeNull();
  for (const route of ["/", "/about", "/contact", "/projects", detail!]) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    await expect
      .poll(
        () =>
          page.evaluate(
            () =>
              document.documentElement.scrollWidth -
              document.documentElement.clientWidth,
          ),
        { message: `Horizontal overflow on ${route}` },
      )
      .toBeLessThanOrEqual(1);
  }
});

test("project navigation supports browser Back and Forward", async ({
  page,
}) => {
  await page.goto("/projects");
  const listing = page.url();
  await page.locator("main article a").first().click();
  await expect(page).toHaveURL(/\/projects\/[^/]+\/?$/);
  const detail = page.url();
  await page.goBack();
  await expect(page).toHaveURL(listing);
  await page.goForward();
  await expect(page).toHaveURL(detail);
});

test("reduced motion removes the browser's link transitions", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await page.goto("/");
  const link = page.locator('header nav a[href="/projects"]');
  const duration = () =>
    link.evaluate((element) =>
      [getComputedStyle(element), getComputedStyle(element, "::after")].map(
        (style) =>
          style.transitionProperty === "none"
            ? 0
            : Math.max(...style.transitionDuration.split(",").map(parseFloat)),
      ),
    );
  await expect
    .poll(async () => (await duration()).every((value) => value > 0))
    .toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect.poll(duration).toEqual([0, 0]);
});
