import type { Project } from "@/types/content";

/**
 * Real Keshar Tech projects. Only confirmed facts are listed — no invented
 * metrics, testimonials or outcomes. Leave `technologies` empty when the
 * stack has not been confirmed; the UI hides empty sections.
 */
export const projects: Project[] = [
  {
    slug: "prime-homes-crm",
    index: "01",
    title: "Prime Homes CRM",
    client: "Prime Homes",
    category: "Real Estate CRM",
    url: "https://ph.keshartech.com",
    image: "/images/projects/prime-homes-crm.png",
    imageAlt: "Prime Homes CRM dashboard showing lead volume, follow-up alerts and the sales pipeline from contact to closure",
    excerpt:
      "A custom real estate CRM for lead management, follow-ups, team and branch management, site visits and sales workflows.",
    seo: {
      title: "Prime Homes CRM — Custom Real Estate CRM Case Study",
      description:
        "How Keshar Tech built Prime Homes CRM, a custom real estate CRM for lead management, follow-ups, branches, site visits and sales pipeline workflows.",
    },
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS"],
    services: ["crm-development", "web-application-development", "ui-ux-design"],
    requirement: [
      "A real estate sales organisation needed one system to manage a high volume of property enquiries across multiple branches and sales teams.",
      "Leads were arriving from several channels, follow-ups needed to be tracked reliably, and management needed a clear view of where every opportunity stood — from first contact through site visits to booking.",
    ],
    solution: [
      "We designed and built Prime Homes CRM as a custom web application around the company's real sales journey. Every lead is captured in one place, assigned to an owner and moved through clearly defined pipeline stages.",
      "Managers get dashboards for lead volume, missed follow-ups, unassigned and lost leads, and a progression funnel covering contact, face-to-face meetings, site visits, bookings and agreements — filterable by branch.",
    ],
    features: [
      { title: "Lead management", text: "Centralised lead records with search across leads, properties and people." },
      { title: "Follow-up tracking", text: "Scheduled follow-ups with alerts for missed and overdue actions." },
      { title: "Teams and branches", text: "Branch-wise views, team management and user administration." },
      { title: "Site visit workflow", text: "Planning and logging of site visits as distinct pipeline stages." },
      { title: "Auto-assignment", text: "Rules to distribute incoming leads across the sales team." },
      { title: "Reports and exports", text: "Pipeline reports, calendar views, security logs and lead exports." },
    ],
  },
  {
    slug: "krupa-sales",
    index: "02",
    title: "Krupa Sales",
    client: "Krupa Sales",
    category: "Industrial Business Website",
    url: "https://krupasales.com",
    image: "/images/projects/krupa-sales.png",
    imageAlt: "Krupa Sales website homepage presenting cable drag chains for CNC machines, robotics and industrial automation",
    excerpt:
      "An industrial business website presenting products and catalogues, capturing customer enquiries and strengthening digital visibility.",
    seo: {
      title: "Krupa Sales — Industrial Business Website Case Study",
      description:
        "Keshar Tech built the Krupa Sales website — an industrial products website with catalogues, customer enquiries and a foundation for digital visibility.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    services: ["web-development", "ui-ux-design", "seo-services"],
    requirement: [
      "Krupa Sales, a supplier of industrial products including cable drag chains for CNC machines and automation, needed a professional website to present its range clearly and make it easy for buyers to enquire.",
      "The site also needed to build credibility with business customers and give the company a stronger presence when buyers search online.",
    ],
    solution: [
      "We created a structured, responsive website organised around product categories and catalogues, with clear paths from browsing to enquiry.",
      "Pages were built with search-friendly structure and metadata so the business can be found more easily, and the design presents the company as an established, dependable supplier.",
    ],
    features: [
      { title: "Product presentation", text: "Products organised into clear categories for quick browsing." },
      { title: "Catalogues", text: "Catalogue content that buyers can review before getting in touch." },
      { title: "Customer enquiries", text: "Enquiry flows that make it simple to request information." },
      { title: "Responsive design", text: "A consistent experience on desktop, tablet and mobile." },
      { title: "Search-friendly structure", text: "Semantic pages and metadata supporting digital visibility." },
    ],
  },
  {
    slug: "panchal-sk-associates",
    index: "03",
    title: "Panchal SK & Associates",
    client: "Panchal SK & Associates",
    category: "Professional Services Website",
    url: "https://panchalsk.com",
    image: "/images/projects/panchal-sk-associates.png",
    imageAlt: "Panchal SK & Associates website homepage presenting NBFC compliance, registration and licensing services",
    excerpt: "A professional website for a firm offering financial, business advisory and compliance services.",
    seo: {
      title: "Panchal SK & Associates — Professional Services Website Case Study",
      description:
        "Keshar Tech designed and developed a professional website for Panchal SK & Associates, presenting financial, advisory and compliance services clearly.",
    },
    technologies: [],
    services: ["web-development", "ui-ux-design", "seo-services"],
    requirement: [
      "Panchal SK & Associates, a chartered accountancy firm, needed a website that reflects the professionalism of its financial, business advisory and compliance practice — including NBFC registration and regulatory services.",
      "Prospective clients needed to understand the range of services quickly and feel confident reaching out.",
    ],
    solution: [
      "We designed a clean, trustworthy website that organises the firm's services into clear sections, with straightforward contact paths throughout.",
      "The layout prioritises readability and credibility, works smoothly on mobile devices and is structured to support search visibility.",
    ],
    features: [
      { title: "Service presentation", text: "Financial, advisory and compliance services explained clearly." },
      { title: "Professional design", text: "A restrained, credible visual style suited to the profession." },
      { title: "Contact paths", text: "Easy ways for prospective clients to get in touch." },
      { title: "Responsive layout", text: "Readable and usable on every screen size." },
    ],
  },
  {
    slug: "custom-erp-solutions",
    index: "04",
    title: "Custom ERP Solutions",
    client: "Business ERP implementations",
    category: "ERP & Odoo Development",
    image: "/images/projects/custom-erp.png",
    imageAlt: "Odoo ERP application menu with CRM, sales, purchase, inventory, manufacturing, accounting and HR modules",
    excerpt: "Custom business ERP development using Odoo, Python and supporting technologies.",
    seo: {
      title: "Custom ERP Solutions — Odoo & Python ERP Development",
      description:
        "Keshar Tech develops custom business ERP solutions on Odoo with Python — configuring modules and building custom workflows for connected operations.",
    },
    technologies: ["Odoo", "Python", "PostgreSQL"],
    services: ["erp-development", "custom-software-development", "api-integrations"],
    requirement: [
      "Growing businesses often run sales, purchasing, inventory, accounting and HR on separate tools, which leads to duplicated work and inconsistent numbers.",
      "They need a single platform that adapts to their specific workflows instead of forcing them into generic ones.",
    ],
    solution: [
      "We implement Odoo as the core ERP platform, configuring standard applications such as CRM, sales, purchase, inventory, invoicing and HR.",
      "Where a business needs something Odoo does not provide out of the box, we develop custom modules in Python — adding workflows, fields, documents and reports specific to that business.",
    ],
    features: [
      { title: "Module configuration", text: "Sales, purchase, inventory, accounting, HR and more set up to match each business." },
      { title: "Custom Python modules", text: "Business-specific workflows and rules built on Odoo's framework." },
      { title: "Custom reports", text: "Documents and reports tailored to each organisation." },
      { title: "Data migration", text: "Structured transfer of existing records into the ERP." },
    ],
  },
];

const bySlug = new Map(projects.map((p) => [p.slug, p]));
export const getProject = (slug: string) => bySlug.get(slug);
export const getProjects = (slugs: string[]) =>
  slugs.map((s) => bySlug.get(s)).filter((p): p is Project => Boolean(p));

/** Other projects to recommend from a given project page. */
export const getRelatedProjects = (slug: string, count = 2) =>
  projects.filter((p) => p.slug !== slug).slice(0, count);
