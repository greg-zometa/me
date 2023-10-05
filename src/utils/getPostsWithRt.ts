import type { MarkdownInstance } from "astro";
import type { CollectionEntry } from "astro:content";
import slugify from "./slugify";

export const getReadingTime = async () => {
  // Get all posts using glob. This is to get the updated frontmatter
  const globPosts = import.meta.glob<MarkdownInstance<CollectionEntry<"blog">["data"]>>("../content/blog/**/*.md");

  // Then, set those frontmatter value in a JS Map with key value pair
  const mapFrontmatter = new Map();
  const globPostsValues = Object.values(globPosts);
  await Promise.all(
    globPostsValues.map(async (globPost) => {
      const { frontmatter } = await globPost();
      mapFrontmatter.set(slugify(frontmatter), frontmatter.readingTime);
    })
  );

  return mapFrontmatter;
};

const getPostsWithRt = async (posts: CollectionEntry<"blog">[]) => {
  const mapFrontmatter = await getReadingTime();
  return posts.map((post) => {
    post.data.readingTime = mapFrontmatter.get(slugify(post.data));
    return post;
  });
};

export default getPostsWithRt;
