import type { PostsCollection } from "@types";
import { slugifyStr } from "./slugify";

const getPostsByTag = (posts: PostsCollection[], tag: string) =>
  posts.filter((post) => post.data.tags.map((str) => slugifyStr(str)).includes(tag));

export default getPostsByTag;
