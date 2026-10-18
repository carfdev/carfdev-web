import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it, vi } from "vitest";
import Header from "../../src/components/Header.astro";

vi.mock("../../src/data/site", () => ({ site: { name: "Fixture" } }));

async function link(path: string, href: string) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Header, {
    request: new Request(`https://fixture.example${path}`),
  });
  return parseHTML(html).document.querySelector(`a[href="${href}"]`)!;
}

it("marks an exact route as the current page", async () => {
  expect(
    (await link("/projects", "/projects")).getAttribute("aria-current"),
  ).toBe("page");
});
it("normalizes trailing slashes", async () => {
  expect(
    (await link("/projects/", "/projects")).getAttribute("aria-current"),
  ).toBe("page");
});
it("highlights the parent of a nested route", async () => {
  expect(
    (await link("/projects/fixture", "/projects")).classList.contains(
      "nav-link-active",
    ),
  ).toBe(true);
});
it("does not mark a parent route as the current page", async () => {
  expect(
    (await link("/projects/fixture", "/projects")).hasAttribute("aria-current"),
  ).toBe(false);
});
it("does not highlight a route with only a shared prefix", async () => {
  expect(
    (await link("/projects-other", "/projects")).classList.contains(
      "nav-link-active",
    ),
  ).toBe(false);
});
it("marks the home link on the root route", async () => {
  expect((await link("/", "/")).getAttribute("aria-current")).toBe("page");
});
