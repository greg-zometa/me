import { defineConfig } from "astro/config";
import serviceWorker from "astrojs-service-worker";
import tailwind from "@astrojs/tailwind";
import { toString } from "mdast-util-to-string";
import getReadingTime from "reading-time";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import { SITE } from "./src/config";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    serviceWorker(),
    sitemap(),
    svelte()
  ],
  markdown: {
    remarkPlugins: [
      [
        remarkCollapse,
        {
          test: "Table of contents"
        }
      ],
      () =>
        // https://docs.astro.build/en/recipes/reading-time/
        (tree, { data }) => {
          const textOnPage = toString(tree);
          const readingTime = getReadingTime(textOnPage);
          data.astro.frontmatter.readingTime = readingTime.text;
        },
      remarkToc
    ],
    shikiConfig: {
      theme: "github-dark",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"]
    }
  }
});
