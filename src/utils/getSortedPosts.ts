import type { PostsCollection } from "@types";
import getPostsWithRt from "./getPostsWithRt";

const getSortedPosts = async (posts: PostsCollection[]) => {
  const postsWithRt = await getPostsWithRt(posts);

  return postsWithRt
    .filter(({ data }) => import.meta.env.MODE === "development" || !data.draft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.pubDatetime).getTime() / 1000) -
        Math.floor(new Date(a.data.pubDatetime).getTime() / 1000)
    );
};

export default getSortedPosts;
