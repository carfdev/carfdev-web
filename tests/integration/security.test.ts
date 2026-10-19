import { createHash } from "node:crypto";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { parseHTML } from "linkedom";
import { expect, inject, it } from "vitest";

it("protects every generated HTML page while authorizing its exact inline styles", async () => {
  const output = join(inject("integrationRoot"), "dist");
  const files = (await readdir(output, { recursive: true })).filter((file) =>
    file.endsWith(".html"),
  );
  expect(files).toContain("404.html");
  for (const file of files) {
    const { document } = parseHTML(await readFile(join(output, file), "utf8"));
    const meta = document.querySelector(
      'meta[http-equiv="content-security-policy"]',
    );
    expect(meta, file).not.toBeNull();
    const policy = meta!.getAttribute("content")!;
    const directives = new Map(
      policy
        .split(";")
        .filter(Boolean)
        .map((part) => {
          const [name, ...values] = part.trim().split(/\s+/);
          return [name, values];
        }),
    );
    expect(directives.get("script-src"), file).toContain("'self'");
    expect(policy).not.toMatch(/'unsafe-inline'|'unsafe-eval'/);
    for (const name of ["default-src", "font-src", "img-src", "connect-src"]) {
      expect(directives.get(name), file).toEqual(["'self'"]);
    }
    for (const name of ["object-src", "base-uri", "form-action"]) {
      expect(directives.get(name), file).toEqual(["'none'"]);
    }
    expect(directives.get("style-src"), file).toContain("'self'");
    for (const style of document.querySelectorAll("style")) {
      const hash = createHash("sha256")
        .update(style.textContent)
        .digest("base64");
      expect(directives.get("style-src"), file).toContain(`'sha256-${hash}'`);
    }
  }
});
