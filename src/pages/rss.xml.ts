import rss from "@astrojs/rss";
import { SITE } from "@config";
import getSortedPosts from "@utils/getSortedPosts";
import slugify from "@utils/slugify";
import { getCollection } from "astro:content";

export async function GET() {
  const posts = await Promise.all(
    [
      await getCollection("blog"),
      await getCollection("coding"),
      await getCollection("comptia"),
      await getCollection("cybersecurity"),
      await getCollection("ethical-hacking")
    ].flat()
  );
  const sortedPosts = await getSortedPosts(posts);

  return rss({
    title: SITE.title,
    description: SITE.desc,
    site: SITE.website,
    items: sortedPosts.map(({ data }) => ({
      link: `${data.directory}/${slugify(data)}`,
      title: data.title,
      description: data.description,
      pubDate: new Date(data.pubDatetime)
    }))
  });
}
