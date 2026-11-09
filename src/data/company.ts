import type { ContentPoint, ProcessPhase } from "@/types/content";

/** How every engagement runs. Used on the homepage and /process. */
export const processPhases: ProcessPhase[] = [
  {
    number: "01",
    title: "Discover",
    icon: "compass",
    summary: "We learn how your business works, what is slowing it down and what success looks like.",
    activities: [
      "Conversations with the people who will use and pay for the solution",
      "Mapping of current workflows, tools and data",
      "Goals, constraints, risks and priorities agreed in writing",
      "Recommendation of the simplest approach that achieves the goal",
    ],
    deliverables: ["Requirements summary", "Scope and phasing", "Estimate and timeline"],
    yourRole: "Share how things work today, introduce key people and confirm priorities.",
  },
  {
    number: "02",
    title: "Design",
    icon: "design",
    summary: "We shape the experience and the architecture before writing production code.",
    activities: [
      "Information architecture, user flows and wireframes",
      "Visual design aligned with your brand",
      "Interactive prototypes for review",
      "Technical architecture and data model planning",
    ],
    deliverables: ["Approved designs", "Clickable prototype", "Technical plan"],
    yourRole: "Review designs, give feedback and approve before development begins.",
  },
  {
    number: "03",
    title: "Build",
    icon: "code",
    summary: "We engineer in reviewable milestones, with quality checks built into every step.",
    activities: [
      "Development in milestones on a staging environment",
      "Regular demos so you see progress as it happens",
      "Testing for functionality, responsiveness, accessibility and performance",
      "Data migration, content loading and launch preparation",
    ],
    deliverables: ["Working software on staging", "Test results", "Launch checklist"],
    yourRole: "Test milestones, provide content and confirm readiness for launch.",
  },
  {
    number: "04",
    title: "Grow",
    icon: "growth",
    summary: "Launch is the start. We support, measure and improve what we build.",
    activities: [
      "Production launch with monitoring",
      "Team onboarding and documentation",
      "Analytics, SEO and campaign support where relevant",
      "Maintenance and a roadmap of improvements",
    ],
    deliverables: ["Live product", "Documentation", "Support plan and roadmap"],
    yourRole: "Use it, tell us what you learn, and decide what comes next together.",
  },
];

export const processPrinciples: ContentPoint[] = [
  { title: "Written scope before work starts", text: "You know what will be delivered, in what order and at what cost." },
  { title: "Visible progress", text: "Staging environments and demos mean nothing is hidden until the end." },
  { title: "Leadership involvement", text: "Our CEO and CTO stay directly involved in direction and technical decisions." },
  { title: "Honest recommendations", text: "If a simpler or existing tool will do the job, we will say so." },
];

/**
 * Genuine strengths — written as commitments, not unverifiable claims.
 */
export const strengths: ContentPoint[] = [
  {
    title: "Built around your business",
    text: "We start with how you operate and design the technology to fit — not the other way round. No templates forced onto your process.",
  },
  {
    title: "Leaders who stay hands-on",
    text: "Your project is directed by our CEO and CTO, so business goals and technical decisions stay aligned from first call to launch.",
  },
  {
    title: "One partner, full spectrum",
    text: "Websites, software, CRM, ERP, AI, automation and growth marketing under one roof — no juggling separate vendors.",
  },
  {
    title: "The right specialist for each job",
    text: `An extended network of independent specialists lets us bring in deep expertise exactly when your project needs it.`,
  },
  {
    title: "Modern, maintainable engineering",
    text: "Typed, documented code on a proven modern stack — software that other engineers can understand and extend.",
  },
  {
    title: "Support after launch",
    text: "We maintain, monitor and improve what we build, so your investment keeps paying off.",
  },
];

export const companyValues: ContentPoint[] = [
  { title: "Clarity", text: "Plain language, written scopes and honest timelines. You always know where your project stands." },
  { title: "Craft", text: "Details matter — in interfaces people use every day and in code that must run reliably for years." },
  { title: "Ownership", text: "We treat your outcomes as our own and stay accountable long after launch." },
  { title: "Pragmatism", text: "The best solution is often the simplest one that works. We build what moves your business forward." },
];
