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
  details: ContactDetails;
  card: ContactCard;
}

export interface ContactCard {
  title: string;
  items: string[];
}

export interface ContactDetails {
  title: string;
  items: ContactDetailsItems[];
}

export interface ContactDetailsItems {
  label: string;
  value: string;
  note: string;
  icon: LucideIconName;
}

export interface Form {
  firstNameLabel: string;
  firstNamePlaceholder: string;
  firstNameErrorMessage: string;
  lastNameLabel: string;
  lastNamePlaceholder: string;
  lastNameErrorMessage: string;
  companyNameLabel: string;
  companyNamePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  emailErrorMessage: string;
  projectTypeLabel: string;
  projectTypePlaceholder: string;
  projectTypeOptions: string[];
  projectTypeErrorMessage: string;
  budgetLabel: string;
  budgetPlaceholder: string;
  budgetOptions: string[];
  budgetErrorMessage: string;
  messageLabel: string;
  messagePlaceholder: string;
  messageErrorMessage: string;
  submitButton: string;
  successMessage: {
    title: string;
    description: string;
  };
}

export interface Cta {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface Footer {
  copyright: string;
  title: string;
  services: {
    name: string;
    links: Link[];
  };
  company: {
    name: string;
    links: Link[];
  };
  legal: Link[];
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
  link: string;
}
