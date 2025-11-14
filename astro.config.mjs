// @ts-check
import { defineConfig, envField, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import { loadEnv } from "vite";

const { PUBLIC_WEB_URL } = loadEnv(
  // eslint-disable-next-line no-undef
  process.env.PUBLIC_WEB_URL ?? "http://localhost:4321",
  // eslint-disable-next-line no-undef
  process.cwd(),
  "",
);

// https://astro.build/config
export default defineConfig({
  site: PUBLIC_WEB_URL,
  env: {
    schema: {
      API_URL: envField.string({
        context: "client",
        access: "public",
        optional: false,
      }),
      PUBLIC_WEB_URL: envField.string({
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

  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          es: "es-ES",
          sv: "sv-SE",
        },
      },
    }),
  ],
});
