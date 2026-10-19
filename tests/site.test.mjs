import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { parseHTML } from "linkedom";
import sharp from "sharp";
import { pageSnapshot } from "./site-snapshot.mjs";

const baseline = JSON.parse(
  await readFile(new URL("./site-baseline.json", import.meta.url)),
);
const dist = new URL("../dist/", import.meta.url);

test("every page publishes matching social metadata and a distinct generated PNG", async () => {
  const images = new Set();
  for (const path of Object.keys(baseline)) {
    const document = parseHTML(
      await readFile(new URL(path, dist), "utf8"),
    ).document;
    const meta = (attribute, name) =>
      document
        .querySelector(`meta[${attribute}="${name}"]`)
        ?.getAttribute("content");
    const slug =
      path === "index.html"
        ? "home"
        : path.replace(/\/index\.html$|\.html$/g, "");
    const imageURL = `https://carf.dev/og/${slug}.png`;
    assert.equal(meta("property", "og:image"), imageURL);
    assert.equal(meta("property", "og:image:type"), "image/png");
    assert.equal(meta("property", "og:image:width"), "1200");
    assert.equal(meta("property", "og:image:height"), "630");
    assert.equal(
      meta("property", "og:image:alt"),
      `${document.title} — social preview`,
    );
    assert.equal(meta("name", "twitter:card"), "summary_large_image");
    assert.equal(meta("name", "twitter:title"), document.title);
    assert.equal(
      meta("name", "twitter:description"),
      meta("name", "description"),
    );
    assert.equal(meta("name", "twitter:image"), imageURL);
    assert.equal(
      meta("name", "twitter:image:alt"),
      meta("property", "og:image:alt"),
    );
    const bytes = await readFile(
      new URL(`.${new URL(imageURL).pathname}`, dist),
    );
    const image = await sharp(bytes).metadata();
    assert.deepEqual(
      [image.format, image.width, image.height],
      ["png", 1200, 630],
    );
    assert.ok(
      (await sharp(bytes).stats()).channels.some(({ stdev }) => stdev > 10),
      "card must contain visible artwork",
    );
    images.add(bytes.toString("base64"));
  }
  assert.equal(images.size, Object.keys(baseline).length);
});

for (const [path, expected] of Object.entries(baseline)) {
  test(`${path} preserves text, ordered links, navigation attributes and headings`, async () => {
    const html = await readFile(new URL(path, dist), "utf8");
    assert.equal(pageSnapshot(html), expected);
    assert.doesNotMatch(html, /[↗→]/u);
  });
}

test("shared arrow animations only run when motion is allowed", async () => {
  const files = await readdir(new URL("_astro/", dist));
  const css = (
    await Promise.all(
      files
        .filter((name) => name.endsWith(".css"))
        .map((name) => readFile(new URL(`_astro/${name}`, dist), "utf8")),
    )
  ).join("");
  assert.match(
    css,
    /@media\s*\(prefers-reduced-motion:\s*no-preference\)\{[^{}]*\.action-link-arrow/,
  );
});
