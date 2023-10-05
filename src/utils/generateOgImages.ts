import type { CollectionEntry } from "astro:content";
import { Resvg } from "@resvg/resvg-js";
import satori, { type SatoriOptions } from "satori";
import { postOgImg, siteOgImg } from "./og-img-templates";

const fetchFonts = async () => {
  // Regular Font
  const fontFileRegular = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.regular.ttf");
  const fontRegular = await fontFileRegular.arrayBuffer();

  // Bold Font
  const fontFileBold = await fetch("https://www.1001fonts.com/download/font/ibm-plex-mono.bold.ttf");
  const fontBold = await fontFileBold.arrayBuffer();

  return { fontRegular, fontBold };
};

const { fontRegular, fontBold } = await fetchFonts();

const SATORI_OPTIONS: SatoriOptions = {
  width: 1200,
  height: 630,
  embedFont: true,
  fonts: [
    {
      name: "IBM Plex Mono",
      data: fontRegular,
      weight: 400,
      style: "normal"
    },
    {
      name: "IBM Plex Mono",
      data: fontBold,
      weight: 600,
      style: "normal"
    }
  ]
};

// * Will need to keep an eye on base.css
// src\styles\base.css
const COLOR_OPTIONS = {
  accent: "rgb(129, 140, 248)",
  border: "rgb(238, 242, 255)",
  fill: "rgb(13, 13, 13)",
  textBase: "rgb(242, 242, 242)"
};

const svgBufferToPngBuffer = (svg: string) => {
  const resvg = new Resvg(svg);
  const pngData = resvg.render();
  return pngData.asPng();
};

export const generatePostOgImages = async (post: CollectionEntry<"blog">) => {
  const svg = await satori(postOgImg(post, COLOR_OPTIONS), SATORI_OPTIONS);
  return svgBufferToPngBuffer(svg);
};

export const generateSiteOgImages = async () => {
  const svg = await satori(siteOgImg(true, COLOR_OPTIONS), SATORI_OPTIONS);
  return svgBufferToPngBuffer(svg);
};
