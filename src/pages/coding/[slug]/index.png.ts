import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { PostsCollection } from "@types";
import { generatePostOgImages } from "@utils/generateOgImages";
import { slug as slugify } from "github-slugger";

export async function getStaticPaths() {
  const posts = await getCollection("coding").then((p) => p.filter(({ data }) => !data.draft && !data.staticOgImg));

  return posts.map((post) => ({
    params: { slug: slugify(post.data.title) },
    props: post
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generatePostOgImages(props as PostsCollection), {
    headers: { "Content-Type": "image/png" }
  });
