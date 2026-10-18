import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it, vi } from "vitest";
import ProjectHero from "../../src/components/project-detail/ProjectHero.astro";

vi.mock(
  "../../src/components/shared/ActionLink.astro",
  async () => import("../fixtures/ActionLink.astro"),
);
vi.mock("../../src/data/site", () => ({
  site: { github: { href: "https://fixture.example/profile" } },
}));

async function destinations(extra: Record<string, unknown> = {}) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(ProjectHero, {
    props: {
      project: {
        title: "Fixture",
        category: "Fixture",
        description: "Fixture",
        ...extra,
      },
    },
  });
  return [...parseHTML(html).document.querySelectorAll("a")].map((link) =>
    link.getAttribute("href"),
  );
}

it("uses an explicit repository destination", async () => {
  expect(
    await destinations({ repository: "https://fixture.example/repo" }),
  ).toContain("https://fixture.example/repo");
});
it("falls back to the configured profile without a repository", async () => {
  expect(await destinations()).toContain("https://fixture.example/profile");
});
it("includes a supplied demo destination", async () => {
  expect(
    await destinations({ demo: "https://fixture.example/demo" }),
  ).toContain("https://fixture.example/demo");
});
it("omits the demo link when none is supplied", async () => {
  expect(await destinations()).toEqual([
    "/projects",
    "https://fixture.example/profile",
  ]);
});
