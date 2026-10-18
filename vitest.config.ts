/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config";

export default getViteConfig(
  {
    test: {
      include: ["tests/unit/**/*.test.ts"],
      clearMocks: true,
      coverage: {
        provider: "v8",
        include: ["src/lib/**/*.ts", "src/pages/robots.txt.ts"],
      },
    },
  },
  { configFile: false },
);
