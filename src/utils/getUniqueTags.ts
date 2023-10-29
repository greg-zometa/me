import type { PostsCollection } from "@types";
import { slug as slugify } from "github-slugger";

const getUniqueTags = (posts: PostsCollection[]) => {
  const filteredPosts = posts.filter(({ data }) => import.meta.env.MODE === "development" || !data.draft);
  const tags: string[] = filteredPosts
    .flatMap((post) => post.data.tags)
    .map((tag) => slugify(tag))
    .filter((value: string, index: number, self: string[]) => self.indexOf(value) === index)
    .sort((tagA: string, tagB: string) => tagA.localeCompare(tagB));
  return tags;
};

export default getUniqueTags;
