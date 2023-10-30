---
title: Site updates 2.1
description: New features and updates for the blog.
pubDatetime: 2023-10-30T04:00:00.746Z
directory: blog
featured: true
tags:
  - astro
  - site
  - update
staticOgImg: "/site-og.png"
---

Since I'm straying more from [the original template](https://github.com/satnaing/astro-paper) I'll give an update on new features for this app and intentions for future posts.

## Table of contents

## Content subdirectories

[The `content` directory for the website](https://github.com/greg-zometa/me/tree/bdf20aa6caff989dc0d31a2f52f3f76074dcfb0d/src/content) has been updated to host several subdirectories for topics that I've been thinking about exploring. The template was originally set up to read only a single `blog` directory that, IMO, is not as easy to manage, organize, and scale.

Updating the code in order to read multiple directories in `content` wasn't difficult, as the documentation provided [a very helpful snippet](https://docs.astro.build/en/guides/content-collections/#defining-multiple-collections). However, the build process to output the endpoint from which directory the post came from was a technical challenge.

This was solved by breaking up the `pages` directory and setting up a required `directory` field in the content schema for all posts.

### Breaking up pages

While I could have generated pages using a single [dynamic route](https://docs.astro.build/en/core-concepts/routing/#dynamic-routes) for all subdirectories in the `content` directory, I believe this would not be a scalable solution in the long run and would have resulted in poor performance.

Pages were broken up for two reasons:

1. **Faster build times** — While I am still doing dynamic routing, the pages have been broken up to target an individual subdirectory which should require less computation time versus a catch all solution.
2. **Easier maintenance** — While the code for the pages are the same and breaks [the DRY rule](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) the long term is that each page is fully customizable, and I wouldn't have to write weird edge cases that abstracts individual subdirectories from all of them.

While this is able to generate posts for each individual subdirectory I still wanted to show **all posts**. This would be handled with the `posts` directory in `pages`, but also came with another challenge.

### The `directory` field

The addition of the `directory` field in the content schema is needed to identify which subdirectory the post is coming from in `content`. While this was not needed for all the broken up `pages`, it was only necessary for `posts`.

The code for the dynamic routes is nearly identical; using a `<Posts />` component that generates the list of posts. The component has been updated from the original template to accept a `dir` prop which lists all the directories in `pages`.

<!-- prettier-ignore-start -->
```ts
// @types
export const directories = [
  "blog",
  "coding",
  "comptia",
  "cybersecurity",
  "ethical-hacking"
] as const;

export type PostsCollection = CollectionEntry<(typeof directories)[number]>;

// @layouts/Posts.astro
export interface Props {
  dir: (typeof directories)[number] | "posts";
  pageNum: number;
  totalPages: number;
  posts: PostsCollection[];
}
```
<!-- prettier-ignore-end -->

The `dir` prop will be used in various aspects of the `<Posts />` component, specifically for meta data. While we can use `dir` to link to a dynamically generated post in the broken up `pages`, it will not be able to link correctly for `posts`.

The code in the dynamic route for `posts` is different in that it fetches all posts from the subdirectories in `content` and it cannot accurately determine which subdirectory the post is coming from.

<!-- prettier-ignore-start -->
```ts
// @pages/posts/[slug].astro
export async function getStaticPaths() {
  const posts = await Promise.all([
    await getCollection("blog", ({ data }) => import.meta.env.MODE === "development" || !data.draft),
    await getCollection("coding", ({ data }) => import.meta.env.MODE === "development" || !data.draft),
    await getCollection("comptia", ({ data }) => import.meta.env.MODE === "development" || !data.draft),
    await getCollection("cybersecurity", ({ data }) => import.meta.env.MODE === "development" || !data.draft),
    await getCollection("ethical-hacking", ({ data }) => import.meta.env.MODE === "development" || !data.draft)
  ].flat());

  return [
    ...getPageNumbers(posts.length).map((pageNum) => ({
      params: { slug: String(pageNum) }
    }))
  ];
}
```
<!-- prettier-ignore-end -->

Even if there is a way to mutate the data in `getStaticPaths` we have to deal with other areas in the code where **we need to correctly link** where the post is coming from. Specifically for `<Card />` components and areas where links are necessary.

Thus, adding a `directory` field in the content schema for every post helps identify where a post is coming from.

<!-- prettier-ignore-start -->
```ts
// @content/config.ts
const postSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    title: z.string(),
    description: z.string(),
    directory: z.enum(directories) // "blog" | "coding" | "comptia" | "cybersecurity" | "ethical-hacking" | "posts"
    // ...
  });
```
<!-- prettier-ignore-end -->

## Future posts

For the past couple of months I have been too focused on writing articles related to Comptia certification. Going forward, I'll continue to write about Comptia, but that is not the sole focus of this website. It is to share my personal experiences and insights on cybersecurity and ethical hacking. I hope to educate visitors, such as my writing with Comptia, but also give tutorials and guides on programming languages, and tools for cybersecurity and ethical hacking. I want to give updates on what I'm working on and opinions about current events and issues where the presence of hackers are effecting the world. And every now and then, I'll shitsplain these topics.

I hope this helps!
