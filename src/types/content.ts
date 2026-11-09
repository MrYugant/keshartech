import type { IconName } from "@/components/ui/icon";

/** A titled block of copy — the most common content atom on the site. */
export interface ContentPoint {
  title: string;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export type ServiceCategory = "build" | "systems" | "design" | "grow" | "run";

export interface Service {
  slug: string;
  title: string;
  /** Short label for menus and chips. */
  shortTitle: string;
  category: ServiceCategory;
  icon: IconName;
  /** One-line summary used on cards and in menus. */
  excerpt: string;
  /** Page H1 (keyword-led) and the supporting hero line. */
  headline: string;
  lede: string;
  seo: { title: string; description: string };
  /** Explanation of the service — rendered as paragraphs. */
  overview: string[];
  problems: ContentPoint[];
  capabilities: ContentPoint[];
  /** Names that must exist in data/technologies.ts */
  technologies: string[];
  benefits: ContentPoint[];
  /** Service-specific delivery steps. */
  delivery: ContentPoint[];
  relatedServices: string[];
  relatedProjects: string[];
  faqs: Faq[];
}

export interface Solution {
  slug: string;
  title: string;
  icon: IconName;
  excerpt: string;
  headline: string;
  lede: string;
  seo: { title: string; description: string };
  overview: string[];
  /** Kinds of businesses and how the solution fits them. */
  audiences: ContentPoint[];
  /** What a typical build includes. */
  modules: ContentPoint[];
  useCases: string[];
  services: string[];
  projects: string[];
  faqs: Faq[];
}

export interface Project {
  slug: string;
  index: string;
  title: string;
  client: string;
  category: string;
  url?: string;
  image: string;
  imageAlt: string;
  excerpt: string;
  seo: { title: string; description: string };
  /** Technologies confirmed for this project. */
  technologies: string[];
  services: string[];
  requirement: string[];
  solution: string[];
  features: ContentPoint[];
}

export interface Leader {
  slug: string;
  name: string;
  role: string;
  roleShort: string;
  image: string;
  imageAlt: string;
  summary: string;
  focus: string[];
}

export interface NetworkDiscipline {
  title: string;
  icon: IconName;
  text: string;
  skills: string[];
}

export type TechCategory = "Frontend" | "Backend" | "Data" | "Mobile" | "Business Systems" | "AI & Automation" | "Cloud & DevOps" | "Design" | "Growth";

export interface Technology {
  name: string;
  category: TechCategory;
  note: string;
}

export interface ProcessPhase {
  number: string;
  title: string;
  icon: IconName;
  summary: string;
  activities: string[];
  deliverables: string[];
  yourRole: string;
}
