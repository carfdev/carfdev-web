import type { ImageMetadata } from "astro";

export interface ProjectUI {
  [key: string]: ProjectID;
}

export interface ProjectID {
  [key: string]: Project;
}
export interface Project {
  hero: Hero;
}

export interface Hero {
  title: string;
  imageAlt: string;
  image: ImageMetadata;
}
