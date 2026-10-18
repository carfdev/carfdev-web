import { getCollection } from "astro:content";

// Copied into the disposable build only; never exposed by the portfolio.
export async function GET() {
  const projects = await getCollection("projects");
  return Response.json(projects.map(({ id, data }) => ({ id, ...data })));
}
