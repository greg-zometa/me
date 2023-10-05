import type { APIRoute } from "astro";
import { generateSiteOgImages } from "@utils/generateOgImages";

export const GET: APIRoute = async () =>
  new Response(await generateSiteOgImages(), {
    headers: { "Content-Type": "image/png" }
  });
