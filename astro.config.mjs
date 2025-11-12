// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      API_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
    },
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontshare(),
        name: "Switzer",
        cssVariable: "--font-switzer",
        weights: [400],
        styles: ["normal"],
        subsets: ["latin"],
      },
      {
        provider: fontProviders.fontshare(),
        name: "Plein",
        cssVariable: "--font-plein",
        weights: [700],
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
