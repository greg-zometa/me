import type { APIRoute } from "astro";
import generateOgImages from "@utils/generateOgImages";

export const GET: APIRoute = async () => new Response(await generateOgImages());

export const getStaticPaths = () => [{ params: { ogImage: "generating images with " } }];
