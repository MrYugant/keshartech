import type { TechCategory, Technology } from "@/types/content";

/**
 * Technologies Keshar Tech works with. Service and project data reference
 * these by `name`; `getTechnologies()` resolves and validates the references.
 * Review this list periodically so it reflects the team's current practice.
 */
export const technologies: Technology[] = [
  // Frontend
  { name: "Next.js", category: "Frontend", note: "Server-rendered React framework for fast, SEO-friendly sites and apps." },
  { name: "React", category: "Frontend", note: "Component-based UI library behind most of our interfaces." },
  { name: "TypeScript", category: "Frontend", note: "Typed JavaScript that catches mistakes before they reach users." },
  { name: "Tailwind CSS", category: "Frontend", note: "Utility-first styling for consistent, maintainable design systems." },
  { name: "Motion", category: "Frontend", note: "Purposeful interface animation that respects reduced-motion settings." },

  // Backend
  { name: "Node.js", category: "Backend", note: "JavaScript runtime for APIs, background jobs and integrations." },
  { name: "Python", category: "Backend", note: "Server-side language for Odoo modules, data work and automation." },
  { name: "REST APIs", category: "Backend", note: "Well-documented interfaces that let your systems talk to each other." },
  { name: "Webhooks", category: "Backend", note: "Event-driven connections that react the moment something changes." },

  // Data
  { name: "PostgreSQL", category: "Data", note: "Reliable relational database for business-critical records." },
  { name: "Supabase", category: "Data", note: "Managed Postgres with authentication, storage and row-level security." },

  // Mobile
  { name: "React Native", category: "Mobile", note: "One codebase for native iOS and Android applications." },
  { name: "Expo", category: "Mobile", note: "Tooling for building, testing and shipping React Native apps." },

  // Business systems
  { name: "Odoo", category: "Business Systems", note: "Open-source ERP platform we configure and extend with custom modules." },
  { name: "WordPress", category: "Business Systems", note: "Content management for teams that want to edit pages themselves." },

  // AI & automation
  { name: "OpenAI API", category: "AI & Automation", note: "Large language models for assistants, extraction and content workflows." },
  { name: "Claude API", category: "AI & Automation", note: "Anthropic models for reasoning-heavy and document-heavy tasks." },
  { name: "n8n", category: "AI & Automation", note: "Workflow automation that connects apps without fragile glue code." },

  // Cloud & DevOps
  { name: "Vercel", category: "Cloud & DevOps", note: "Global edge hosting and preview deployments for Next.js projects." },
  { name: "GitHub", category: "Cloud & DevOps", note: "Version control, code review and CI/CD pipelines." },
  { name: "Docker", category: "Cloud & DevOps", note: "Containerised services that run the same everywhere." },
  { name: "Linux Servers", category: "Cloud & DevOps", note: "Hardened VPS hosting for ERP and long-running services." },
  { name: "Cloudflare", category: "Cloud & DevOps", note: "DNS, caching and protection at the network edge." },

  // Design
  { name: "Figma", category: "Design", note: "Collaborative wireframes, prototypes and design systems." },
  { name: "Adobe Illustrator", category: "Design", note: "Vector logo design and brand artwork." },
  { name: "Adobe Photoshop", category: "Design", note: "Image editing and social creative." },

  // Growth
  { name: "Google Search Console", category: "Growth", note: "Indexing, search performance and technical health monitoring." },
  { name: "Google Analytics 4", category: "Growth", note: "Behaviour and conversion measurement." },
  { name: "Google Tag Manager", category: "Growth", note: "Clean, auditable tracking without code changes." },
  { name: "Google Ads", category: "Growth", note: "Search, display and performance campaigns." },
  { name: "Meta Ads Manager", category: "Growth", note: "Facebook and Instagram campaigns and audiences." },
];

export const techCategories: TechCategory[] = [
  "Frontend",
  "Backend",
  "Data",
  "Mobile",
  "Business Systems",
  "AI & Automation",
  "Cloud & DevOps",
  "Design",
  "Growth",
];

const byName = new Map(technologies.map((t) => [t.name, t]));

export function getTechnologies(names: string[]): Technology[] {
  return names.map((name) => {
    const tech = byName.get(name);
    if (!tech) throw new Error(`Unknown technology "${name}" — add it to data/technologies.ts`);
    return tech;
  });
}

export function getTechnologiesByCategory(category: TechCategory) {
  return technologies.filter((t) => t.category === category);
}
