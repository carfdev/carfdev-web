import { getCollection } from "astro:content";
import { sortProjects } from "./project-data";

export async function getProjects() {
  return sortProjects(await getCollection("projects"));
}
