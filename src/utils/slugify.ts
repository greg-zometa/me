import type { PostsCollection } from "@types";
import { slug as slugger } from "github-slugger";

export const slugifyStr = (str: string) => slugger(str);

const slugify = (post: PostsCollection["data"]) => (post.postSlug ? slugger(post.postSlug) : slugger(post.title));

export default slugify;
