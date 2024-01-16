import type { PostsCollection } from "@types";
import { generatePostOgImages } from "@utils/generateOgImages";
import { slugifyStr } from "@utils/slugify";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export async function getStaticPaths() {
  const posts = await getCollection("comptia").then((p) => p.filter(({ data }) => !data.draft && !data.staticOgImg));

  return posts.map((post) => ({
    params: { slug: slugifyStr(post.data.title) },
    props: post
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generatePostOgImages(props as PostsCollection), {
    headers: { "Content-Type": "image/png" }
  });
