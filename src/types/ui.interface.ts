import type { LucideIconName } from "@/components/ui/lucide-icon";
import type { TablerIconName } from "@/components/ui/tabler-icon";

export interface UI {
  [key: string]: Locale;
}

export interface Locale {
  meta: Meta;
  nav: Nav;
  hero: Hero;
  valueProposition: Section;
  services: Section;
  portfolio: Portfolio;
  process: Process;
  techStack: TechStack;
  about: About;
  cta: Cta;
  contact: Contact;
  footer: Footer;
}

export interface About {
  title: string;
  description1: string;
  description2: string;
  btnTextPrimary: string;
  btnTextSecondary: string;
}

export interface Contact {
  title: string;
  subtitle: string;
  form: Form;
  submitButton: string;
}

export interface Form {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
}

export interface Cta {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface Footer {
  copyright: string;
  location: string;
  socialLinks: SocialLinks;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface Hero {
  title: string;
  subtitle: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface Meta {
  title: string;
  description: string;
}

export interface Nav {
  links: Link[];
  ctaButton: string;
  logoLabel: string;
  title: string;
  description: string;
}

export interface Link {
  text: string;
  href: string;
}

export interface Portfolio {
  title: string;
  subtitle: string;
  btn: string;
  items: PortfolioItem[];
}

export interface PortfolioItem {
  title: string;
  description: string;
  techStack: string[];
  url: string;
  imageAlt: string;
}

export interface Process {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Section {
  title: string;
  subtitle: string;
  items: SectionItem[];
}

export interface SectionItem {
  icon: LucideIconName;
  title: string;
  description: string;
  checks?: string[];
}

export interface TechStack {
  title: string;
  subtitle: string;
  items: TechStackItem[];
}

export interface TechStackItem {
  name: string;
  description: string;
  icon: TablerIconName;
}
