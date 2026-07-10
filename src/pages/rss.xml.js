import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { postUrl } from "../lib/content";

export async function GET(context) {
  const posts = (await getCollection("blog", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: "Aakash Bakhle",
    description: "Thoughts, learnings, and field notes.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: postUrl(post),
    })),
  });
}
