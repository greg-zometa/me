import type { PostsCollection } from "@types";
import { slugifyAll } from "./slugify";

const getPostsByTag = (posts: PostsCollection[], tag: string) =>
  posts.filter((post) => slugifyAll(post.data.tags).includes(tag));

export default getPostsByTag;
