import { cp, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { build, preview } from "astro";

const source = fileURLToPath(new URL("../../", import.meta.url));
const root = await mkdtemp(join(tmpdir(), "carfdev-e2e-"));
let server;
let stopping = false;

async function cleanup() {
  await server?.stop();
  await rm(root, { recursive: true, force: true });
}

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.once(signal, async () => {
    if (stopping) return;
    stopping = true;
    try {
      await cleanup();
      process.exit(0);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });
}

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
  await build({ root, logLevel: "error" });
  server = await preview({
    root,
    server: { host: "127.0.0.1", port: 4174 },
    logLevel: "error",
  });
} catch (error) {
  await cleanup();
  throw error;
}
