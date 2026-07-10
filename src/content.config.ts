import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const toList = (value: unknown) => {
  if (Array.isArray(value)) return value;
  if (typeof value === "string") return value.split(",").map((item) => item.trim());
  return [];
};

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.preprocess(toList, z.array(z.string())).default([]),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    img: z.string(),
    category: z.string().default("build"),
    importance: z.coerce.number().default(2),
    status: z.enum(["live", "experiment", "archived", "decommissioned"]).default("live"),
    featured: z.boolean().default(false),
    live_url: z.url().optional(),
    source_url: z.url().optional(),
  }),
});

export const collections = { blog, projects };
