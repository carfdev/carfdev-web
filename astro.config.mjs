// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        weights: [400, 700],
        styles: ["normal"],
        subsets: ["latin"],
      },
    ],
  },
  i18n: {
    locales: ["es", "en", "sv"],
    defaultLocale: "en",
  },
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [react()],
});
