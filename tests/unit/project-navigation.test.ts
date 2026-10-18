import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it, vi } from "vitest";
import ProjectNavigation from "../../src/components/project-detail/ProjectNavigation.astro";

vi.mock(
  "../../src/components/shared/ActionLink.astro",
  async () => import("../fixtures/ActionLink.astro"),
);

async function destination(
  nextProject: { title: string; href: string } | null,
) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(ProjectNavigation, {
    props: { nextProject },
  });
  return parseHTML(html).document.querySelector("nav a")!.getAttribute("href");
}

it("links to the supplied next project", async () => {
  expect(
    await destination({ title: "Arbitrary title", href: "/projects/fixture" }),
  ).toBe("/projects/fixture");
});
it("falls back to the collection when there is no next project", async () => {
  expect(await destination(null)).toBe("/projects");
});
