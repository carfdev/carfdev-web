import type { APIContext } from "astro";
import { expect, it } from "vitest";
import { GET } from "../../src/pages/robots.txt";

const response = () =>
  GET({ site: new URL("https://fixture.example/") } as APIContext);

it("serves a successful response", async () => {
  expect((await response()).status).toBe(200);
});
it("allows all crawlers", async () => {
  expect(await (await response()).text()).toMatch(/^User-agent: \*$/m);
});
it("permits crawling the root", async () => {
  expect(await (await response()).text()).toMatch(/^Allow: \/$/m);
});
it("uses the configured site for the sitemap destination", async () => {
  expect(await (await response()).text()).toMatch(
    /^Sitemap: https:\/\/fixture.example\/sitemap-index.xml$/m,
  );
});
