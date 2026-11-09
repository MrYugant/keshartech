import type { Leader, NetworkDiscipline } from "@/types/content";

/**
 * Leadership. Summaries restate confirmed responsibilities only —
 * no invented biographies, credentials or years of experience.
 */
export const leaders: Leader[] = [
  {
    slug: "yugant-patel",
    name: "Yugant Patel",
    role: "Chief Executive Officer",
    roleShort: "CEO",
    image: "/images/team/yugant-patel.png",
    imageAlt: "Portrait of Yugant Patel, Chief Executive Officer of Keshar Tech",
    summary:
      "Yugant leads the business side of Keshar Tech — setting the company's direction, building client relationships and making sure every project is steered toward the outcome the client actually needs.",
    focus: ["Business strategy", "Company vision", "Business development", "Client relationships", "Project direction", "Operations"],
  },
  {
    slug: "kevin-patel",
    name: "Kevin Patel",
    role: "Chief Technology Officer",
    roleShort: "CTO",
    image: "/images/team/kevin-patel.png",
    imageAlt: "Portrait of Kevin Patel, Chief Technology Officer of Keshar Tech",
    summary:
      "Kevin leads technology at Keshar Tech — shaping software architecture, making technology decisions and holding engineering work to a consistent standard of quality.",
    focus: ["Software architecture", "Technology decisions", "Engineering leadership", "Technical strategy", "Development quality"],
  },
];

/** Disciplines covered by the independent specialist network. */
export const networkDisciplines: NetworkDiscipline[] = [
  {
    title: "Frontend Development",
    icon: "devices",
    text: "Interface engineers who turn designs into fast, accessible, responsive experiences.",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Software Engineering",
    icon: "server",
    text: "Engineers who design data models, APIs, business logic and integrations.",
    skills: ["Node.js", "Python", "PostgreSQL", "APIs"],
  },
  {
    title: "UI/UX & Creative Design",
    icon: "design",
    text: "Designers for product interfaces, brand identity and marketing creative.",
    skills: ["Product design", "Prototyping", "Branding", "Illustration"],
  },
  {
    title: "SEO & Digital Marketing",
    icon: "growth",
    text: "Specialists in search visibility, paid campaigns, analytics and content.",
    skills: ["Technical SEO", "Google Ads", "Meta Ads", "Analytics"],
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    text: "Infrastructure specialists for hosting, deployment pipelines, security and monitoring.",
    skills: ["CI/CD", "Docker", "Linux", "Monitoring"],
  },
  {
    title: "AI & Automation",
    icon: "bot",
    text: "Builders of AI-assisted features and automated workflows across business tools.",
    skills: ["LLM APIs", "Workflow automation", "Document AI", "Integrations"],
  },
];
