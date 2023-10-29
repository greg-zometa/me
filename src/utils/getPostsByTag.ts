import type { PostsCollection } from "@types";
import { slug as slugify } from "github-slugger";

const getPostsByTag = (posts: PostsCollection[], tag: string) =>
  posts.filter((post) => post.data.tags.map((str) => slugify(str)).includes(tag));

export default getPostsByTag;
