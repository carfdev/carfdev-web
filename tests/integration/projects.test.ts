import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it, vi } from "vitest";
import { getCollection } from "astro:content";
import Projects from "../../src/components/projects/Projects.astro";

vi.mock("astro:content", () => ({ getCollection: vi.fn() }));

it("connects collection identities through ordered cards to real action links", async () => {
  const entries = [
    { id: "beta", order: 20 },
    { id: "alpha", order: 10 },
  ].map(({ id, order }) => ({
    id,
    data: {
      title: `Fixture ${id}`,
      order,
      card: {
        subtitle: "Fixture",
        description: "Fixture",
        technologies: ["Fixture"],
      },
    },
  }));
  vi.mocked(getCollection).mockResolvedValueOnce(entries as never);
  const container = await AstroContainer.create();
  const document = parseHTML(await container.renderToString(Projects)).document;
  expect(
    [...document.querySelectorAll("ol > li > article a")].map((link) =>
      link.getAttribute("href"),
    ),
  ).toEqual(["/projects/alpha", "/projects/beta"]);
});
