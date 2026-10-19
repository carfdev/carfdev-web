import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it, vi } from "vitest";
import FrontendPreview from "../../src/components/project-detail/FrontendPreview.astro";

vi.mock("astro:assets", async () => ({
  Image: (await import("../fixtures/Image.astro")).default,
}));
vi.mock(
  "../../src/components/shared/ActionLink.astro",
  async () => import("../fixtures/ActionLink.astro"),
);
vi.mock("../../src/data/site", () => ({
  site: { github: { href: "https://fixture.example/profile" } },
}));

async function render(repository?: string) {
  const container = await AstroContainer.create();
  const html = await container.renderToString(FrontendPreview, {
    props: {
      repository,
      preview: {
        label: "Fixture preview",
        title: "Fixture title",
        description: "Fixture description",
        image: { src: "/fixture.webp", width: 10, height: 10, format: "webp" },
        alt: "Fixture image",
      },
    },
  });
  return parseHTML(html).document.querySelector("a")!;
}

it("uses the supplied repository for the implementation link", async () => {
  const link = await render("https://fixture.example/repository");
  expect(link.getAttribute("href")).toBe("https://fixture.example/repository");
  expect(link.textContent.trim()).toBe("Browse the implementation");
});

it("keeps the profile fallback when no repository is available", async () => {
  const link = await render();
  expect(link.getAttribute("href")).toBe("https://fixture.example/profile");
  expect(link.textContent.trim()).toBe("Explore repositories");
});
