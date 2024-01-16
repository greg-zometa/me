import { SITE } from "@config";
import { directories } from "@types";
import { type ImageFunction, defineCollection, z } from "astro:content";

const postSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    title: z.string(),
    description: z.string(),
    directory: z.enum(directories),
    tags: z.array(z.string()).default(["others"]),
    canonicalURL: z.string().optional(),
    readingTime: z.string().optional(),
    featured: z.boolean().optional(),
    postSlug: z.string().optional(),
    draft: z.boolean().optional(),
    staticOgImg: image()
      .refine((img) => img.width >= 1200 && img.height >= 630, {
        message: "OpenGraph image must be at least 1200 X 630 pixels!"
      })
      .or(z.string())
      .optional(),
    dynamicOgImg: image()
      .refine((img) => img.width >= 1200 && img.height >= 630, {
        message: "OpenGraph image must be at least 1200 X 630 pixels!"
      })
      .or(z.string())
      .optional()
  });

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: postSchema
  }),
  coding: defineCollection({
    type: "content",
    schema: postSchema
  }),
  comptia: defineCollection({
    type: "content",
    schema: postSchema
  }),
  cybersecurity: defineCollection({
    type: "content",
    schema: postSchema
  }),
  "ethical-hacking": defineCollection({
    type: "content",
    schema: postSchema
  })
};
