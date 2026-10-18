import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { pageSnapshot } from "./site-snapshot.mjs";

const baseline = JSON.parse(
  await readFile(new URL("./site-baseline.json", import.meta.url)),
);
const dist = new URL("../dist/", import.meta.url);

for (const [path, expected] of Object.entries(baseline)) {
  test(`${path} preserves text, ordered links, navigation attributes and headings`, async () => {
    const html = await readFile(new URL(path, dist), "utf8");
    assert.equal(pageSnapshot(html), expected);
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
