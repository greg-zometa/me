import { generateSiteOgImages } from "@utils/generateOgImages";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () =>
  new Response(await generateSiteOgImages(), {
    headers: { "Content-Type": "image/png" }
  });
