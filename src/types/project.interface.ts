import type { TablerIconName } from "@/components/ui/tabler-icon";
import type { ImageMetadata } from "astro";

export interface ProjectUI {
  [key: string]: ProjectID;
}

export interface ProjectID {
  [key: string]: Project;
}
export interface Project {
  meta: Meta;
  name: string;
  breadcrumb: Breadcrumb;
  hero: Hero;
  overview: Overview;
  process: Process;
  cta: CTA;
  learned: Learned;
  testimonial: Testimonial;
}

export interface Meta {
  title: string;
  description: string;
}

export interface Testimonial {
  img: ImageMetadata;
  imgAlt: string;
  testimonial: string;
  name: string;
  job: string;
}

export interface Learned {
  title: string;
  items: LearnedItem[];
}

export interface LearnedItem {
  title: string;
  description: string;
}

export interface CTA {
  title: string;
  subtitle: string;
  btn: Btn;
}

export interface Process {
  items: ProcessItem[];
}

export interface ProcessItem {
  title: string;
  description: string;
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
  btn: Btn;
}

export interface Btn {
  href?: string;
  text: string;
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
