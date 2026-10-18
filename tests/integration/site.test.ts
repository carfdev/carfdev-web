import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";
import { parseHTML, DOMParser } from "linkedom";
import { beforeAll, expect, inject, it } from "vitest";

interface Entry {
  id: string;
  title: string;
  description: string;
  order: number;
  kind: "backend" | "frontend";
}

const root = inject("integrationRoot");
const output = join(root, "dist");
const page = async (path: string) =>
  parseHTML(await readFile(join(output, path, "index.html"), "utf8")).document;
let entries: Entry[];

beforeAll(async () => {
  entries = JSON.parse(
    await readFile(join(output, "test-collection-manifest.json"), "utf8"),
  );
  expect(entries.length).toBeGreaterThan(0);
});

it("publishes every validated collection entry as a discoverable detail route", async () => {
  const listing = await page("projects");
  const destinations = [...listing.querySelectorAll("main article a")].map(
    (link) => link.getAttribute("href"),
  );
  expect(destinations.sort()).toEqual(
    entries.map(({ id }) => `/projects/${id}`).sort(),
  );
  for (const { id } of entries) {
    expect(
      (await page(`projects/${id}`)).querySelector("main h1"),
    ).not.toBeNull();
  }
});

it("connects generated next-project props into the complete detail navigation sequence", async () => {
  const ordered = [...entries].sort((a, b) => a.order - b.order);
  const destinations = await Promise.all(
    ordered.map(async ({ id }) => {
      const document = await page(`projects/${id}`);
      return document.querySelector("main nav a")!.getAttribute("href");
    }),
  );
  expect(destinations).toEqual([
    ...ordered.slice(1).map(({ id }) => `/projects/${id}/`),
    "/projects",
  ]);
});

it("selects the detail composition from the validated content discriminant", async () => {
  expect(new Set(entries.map(({ kind }) => kind))).toEqual(
    new Set(["backend", "frontend"]),
  );
  for (const { id, kind } of entries) {
    const document = await page(`projects/${id}`);
    const sections = [
      ...document.querySelectorAll(
        'section[aria-labelledby="architecture-title"], section[aria-labelledby="preview-title"]',
      ),
    ];
    expect(
      sections.map((section) => section.getAttribute("aria-labelledby")),
    ).toEqual([kind === "backend" ? "architecture-title" : "preview-title"]);
  }
});

it("resolves frontend content images through Astro to emitted assets", async () => {
  const frontend = entries.filter(({ kind }) => kind === "frontend");
  expect(frontend.length).toBeGreaterThan(0);
  for (const { id } of frontend) {
    const document = await page(`projects/${id}`);
    const image = document.querySelector(
      'section[aria-labelledby="preview-title"] img',
    )!;
    const pathname = new URL(
      image.getAttribute("src")!,
      "https://fixture.example",
    ).pathname;
    expect((await stat(join(output, pathname))).isFile()).toBe(true);
  }
});

it("passes collection titles through the detail hero and Layout metadata", async () => {
  for (const { id, title } of entries) {
    const document = await page(`projects/${id}`);
    expect(document.querySelector("h1")!.textContent.trim()).toBe(title);
    expect(document.title).toContain(title);
    expect(
      document
        .querySelector('meta[property="og:title"]')!
        .getAttribute("content"),
    ).toBe(document.title);
  }
});

it("passes collection descriptions through Layout to both description tags", async () => {
  for (const { id, description } of entries) {
    const document = await page(`projects/${id}`);
    const descriptions = [
      ...document.querySelectorAll(
        'meta[name="description"], meta[property="og:description"]',
      ),
    ];
    expect(descriptions.map((meta) => meta.getAttribute("content"))).toEqual([
      description,
      description,
    ]);
  }
});

it("connects generated canonical detail URLs with the sitemap integration", async () => {
  const parser = new DOMParser();
  const index = parser.parseFromString(
    await readFile(join(output, "sitemap-index.xml"), "utf8"),
    "text/xml",
  );
  const locations: string[] = [];
  for (const sitemap of index.querySelectorAll("sitemap > loc")) {
    const path = new URL(sitemap.textContent).pathname;
    const document = parser.parseFromString(
      await readFile(join(output, path), "utf8"),
      "text/xml",
    );
    locations.push(
      ...[...document.querySelectorAll("url > loc")].map(
        (node) => node.textContent,
      ),
    );
  }
  for (const { id } of entries) {
    const document = await page(`projects/${id}`);
    const canonical = document
      .querySelector('link[rel="canonical"]')!
      .getAttribute("href")!;
    expect(new URL(canonical).pathname).toBe(`/projects/${id}/`);
    expect(
      document
        .querySelector('meta[property="og:url"]')!
        .getAttribute("content"),
    ).toBe(canonical);
    expect(locations).toContain(canonical);
  }
});
