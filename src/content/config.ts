import { defineCollection, z, type ImageFunction } from "astro:content";
import { SITE } from "@config";

const postSchema = ({ image }: { image: ImageFunction }) =>
  z.object({
    author: z.string().default(SITE.author),
    pubDatetime: z.date(),
    title: z.string(),
    readingTime: z.string().optional(),
    postSlug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().optional(),
    tags: z.array(z.string()).default(["others"]),
    ogImage: image()
      .refine((img) => img.width >= 1200 && img.height >= 630, {
        message: "OpenGraph image must be at least 1200 X 630 pixels!"
      })
      .or(z.string())
      .optional(),
    description: z.string(),
    canonicalURL: z.string().optional()
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
