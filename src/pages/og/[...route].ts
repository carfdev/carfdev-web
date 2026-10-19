import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { OGImageRoute } from "astro-og-canvas";
import { pageMetadata } from "@/data/page-metadata";

const projects = await getCollection("projects");
const pages = {
  ...Object.fromEntries(
    Object.entries(pageMetadata).map(([path, data]) => [
      path,
      { ...data, category: "FULLSTACK WEB DEVELOPMENT" },
    ]),
  ),
  ...Object.fromEntries(
    projects.map(({ id, data }) => [
      `projects/${id}`,
      {
        title: data.title,
        description: data.description,
        category: data.category,
      },
    ]),
  ),
};

const imageRoute = await OGImageRoute({
  pages,
  getSlug: (path) => `${path}.png`,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: `carf.dev · ${page.category}\n\n${page.description}`,
    logo: { path: "./public/favicon-192.png", size: [56] },
    bgGradient: [[247, 248, 250]],
    border: { color: [45, 100, 76], width: 12, side: "inline-start" },
    padding: 72,
    font: {
      title: {
        families: ["Geist"],
        size: 68,
        weight: "Medium",
        color: [25, 36, 32],
        lineHeight: 1.1,
      },
      description: {
        families: ["Geist"],
        size: 27,
        color: [64, 87, 76],
        lineHeight: 1.35,
      },
    },
    fonts: [
      "./src/assets/fonts/Geist-Regular.ttf",
      "./src/assets/fonts/Geist-Medium.ttf",
    ],
    format: "PNG",
  }),
});

export const getStaticPaths = imageRoute.getStaticPaths;
export const GET: APIRoute = async (context) => {
  const response = await imageRoute.GET(context);
  response.headers.set("Content-Type", "image/png");
  return response;
};
