import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import type { PostsCollection } from "@types";
import { generatePostOgImages } from "@utils/generateOgImages";
import { slugify } from "@utils/slugify";

export async function getStaticPaths() {
  const posts = await getCollection("ethical-hacking").then((p) =>
    p.filter(({ data }) => !data.draft && !data.staticOgImg)
  );

  return posts.map((post) => ({
    params: { slug: slugify(post.data) },
    props: post
  }));
}

export const GET: APIRoute = async ({ props }) =>
  new Response(await generatePostOgImages(props as PostsCollection), {
    headers: { "Content-Type": "image/png" }
  });
