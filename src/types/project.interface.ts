import type { TablerIconName } from "@/components/ui/tabler-icon";
import type { ImageMetadata } from "astro";

export interface ProjectUI {
  [key: string]: ProjectID;
}

export interface ProjectID {
  [key: string]: Project;
}
export interface Project {
  name: string;
  breadcrumb: Breadcrumb;
  hero: Hero;
  overview: Overview;
}

type Breadcrumb = string[];

export interface Hero {
  title: string;
  imageAlt: string;
  image: ImageMetadata;
}

export interface Overview {
  images: Image[];
  challenge: Explanation;
  solution: Explanation;
  technologies: Technologies;
  card: Card;
}

export interface Explanation {
  title: string;
  description: string[];
}

export interface Card {
  services: CardItem;
  industry: CardItem;
  timeline: CardItem;
  scale: CardItem;
  btn: {
    href: string;
    text: string;
  };
}

export interface CardItem {
  title: string;
  items: string[];
}

export interface Image {
  image: ImageMetadata;
  alt: string;
}

export interface TechnologiesItems {
  name: string;
  link: string;
  icon: TablerIconName;
}

export interface Technologies {
  title: string;
  items: TechnologiesItems[];
}
