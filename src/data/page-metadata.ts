import { site } from "./site";

export const pageMetadata = {
  home: {
    title: "Fullstack Web Developer",
    description: `${site.location.city}-based fullstack developer building web interfaces, backend systems, and infrastructure.`,
  },
  about: {
    title: "About",
    description: `Learn about carfdev, a Stockholm-based fullstack developer exploring web interfaces, backend APIs, and software architecture through personal projects.`,
  },
  projects: {
    title: "Projects",
    description: `Explore personal projects by carfdev, from Rust APIs and Go microservices to frontend applications and software architecture.`,
  },
  contact: {
    title: "Contact",
    description: `Get in touch with carfdev, a Stockholm-based fullstack developer open to junior developer opportunities, project discussions, and conversations about code.`,
  },
  "404": {
    title: "Page not found",
    description: `The page you were looking for could not be found. Explore carfdev's projects or return to the homepage.`,
  },
} as const;
