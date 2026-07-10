import type { CollectionEntry } from "astro:content";

export function postSlug(post: CollectionEntry<"blog">) {
  return post.id.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.(md|mdx)$/, "");
}

export function postUrl(post: CollectionEntry<"blog">) {
  return `/blog/${post.data.date.getUTCFullYear()}/${postSlug(post)}/`;
}

export function projectSlug(project: CollectionEntry<"projects">) {
  return project.id.replace(/\.(md|mdx)$/, "");
}

export function projectUrl(project: CollectionEntry<"projects">) {
  return `/projects/${projectSlug(project)}/`;
}

export function assetUrl(path: string) {
  return `/${path.replace(/^\/?(?:assets\/)?/, "")}`;
}

export const formatDate = (date: Date) =>
  new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
