import { cp, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import type { TestProject } from "vitest/node";

declare module "vitest" {
  export interface ProvidedContext {
    integrationRoot: string;
  }
}

export default async function setup(project: TestProject) {
  const source = fileURLToPath(new URL("../../", import.meta.url));
  const root = await mkdtemp(join(tmpdir(), "carfdev-integration-"));
  const cleanup = () => rm(root, { recursive: true, force: true });
  try {
    for (const path of [
      "src",
      "public",
      "astro.config.mjs",
      "tsconfig.json",
      "package.json",
    ]) {
      await cp(join(source, path), join(root, path), { recursive: true });
    }
    await symlink(
      join(source, "node_modules"),
      join(root, "node_modules"),
      "dir",
    );
    await cp(
      join(source, "tests/fixtures/collection-manifest.ts"),
      join(root, "src/pages/test-collection-manifest.json.ts"),
    );
    await promisify(execFile)(
      process.execPath,
      [
        join(source, "node_modules/astro/bin/astro.mjs"),
        "build",
        "--root",
        root,
      ],
      { cwd: root, timeout: 120_000 },
    );
    project.provide("integrationRoot", root);
    return cleanup;
  } catch (error) {
    await cleanup();
    throw error;
  }
}
