import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const metadataItem = z.object({
  label: z.string(),
  value: z.string(),
});

const implementationItem = z.object({
  title: z.string(),
  description: z.string(),
});

const common = z.object({
  title: z.string(),
  description: z.string(),
  category: z.string(),
  order: z.number().int().nonnegative(),
  card: z.object({
    subtitle: z.string(),
    description: z.string(),
    technologies: z.array(z.string()).min(1),
  }),
  // No fake repo/demo URLs: when unset the interface provides a GitHub profile fallback.
  repository: z.url().optional(),
  demo: z.url().optional(),
  metadata: z.array(metadataItem).min(1),
  details: z.array(implementationItem).min(1),
  scope: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.discriminatedUnion("kind", [
      common.extend({
        kind: z.literal("backend"),
        architecture: z.object({
          title: z.string(),
          nodes: z
            .array(
              z.object({
                title: z.string(),
                description: z.string(),
                // Connection TO the next node; omitted for the last node.
                connection: z.string().optional(),
              }),
            )
            .min(2),
          note: z.string().optional(),
        }),
      }),
      common.extend({
        kind: z.literal("frontend"),
        preview: z.object({
          label: z.string(),
          title: z.string(),
          description: z.string(),
          attribution: z.string().optional(),
          image: image(),
          alt: z.string(),
        }),
      }),
    ]),
});

export const collections = { projects };
