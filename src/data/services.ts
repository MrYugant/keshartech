import type { Service, ServiceCategory } from "@/types/content";

export const serviceCategories: Record<ServiceCategory, { label: string; description: string }> = {
  build: { label: "Build", description: "Websites, applications and products" },
  systems: { label: "Systems", description: "CRM, ERP, AI and integrations" },
  design: { label: "Design", description: "Interfaces and brand identity" },
  grow: { label: "Grow", description: "Search and paid acquisition" },
  run: { label: "Run", description: "Infrastructure and long-term care" },
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Website Development",
    shortTitle: "Websites",
    category: "build",
    icon: "appWindow",
    excerpt: "Fast, search-ready business websites that explain what you do and turn visitors into enquiries.",
    headline: "Website development that turns visitors into conversations",
    lede: "We design and build business websites that load quickly, rank properly and make it easy for the right customers to contact you.",
    seo: {
      title: "Website Development Company | Fast, SEO-Ready Business Websites",
      description:
        "Keshar Tech builds fast, responsive, SEO-ready business websites with Next.js — clear messaging, strong performance and enquiry flows that work.",
    },
    overview: [
      "Your website is usually the first serious conversation a customer has with your business. If it is slow, unclear or hard to use on a phone, that conversation ends before it begins. We build websites that do the opposite: they load fast, explain your offer in plain language and guide people toward a call, a quote request or a purchase.",
      "Every site we deliver is custom-designed around your services and your customers — not squeezed into a template. We write clean, server-rendered code, structure pages for search engines from day one and hand over a site your team can actually maintain.",
    ],
    problems: [
      { title: "An outdated site that undersells you", text: "Visitors judge credibility in seconds. A dated design or broken layout on mobile quietly sends good leads to competitors." },
      { title: "Traffic that never becomes enquiries", text: "Pages without a clear structure, proof or call-to-action leave visitors unsure what to do next." },
      { title: "Invisible on Google", text: "Template sites often ship with slow pages, duplicate titles and missing metadata that hold rankings back." },
    ],
    capabilities: [
      { title: "Custom design", text: "Layouts, typography and visuals built around your brand and the decisions your customers need to make." },
      { title: "Responsive by default", text: "Designed for small phones through to ultrawide monitors, with touch-friendly navigation." },
      { title: "Technical SEO foundations", text: "Semantic HTML, metadata, sitemaps, structured data and clean URLs built in — not bolted on." },
      { title: "Performance engineering", text: "Optimised images, fonts and rendering for strong Core Web Vitals." },
      { title: "Enquiry and lead capture", text: "Validated forms with spam protection that deliver submissions where your team will see them." },
      { title: "Editable content", text: "A CMS or structured content files so updates do not require a developer for every change." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "WordPress", "Vercel", "Google Search Console"],
    benefits: [
      { title: "Credibility at first glance", text: "A polished, consistent site signals that you are an established, trustworthy business." },
      { title: "More qualified enquiries", text: "Clear service pages and calls-to-action help the right people reach out with the right questions." },
      { title: "A foundation for growth", text: "Search-friendly structure means SEO and advertising spend work harder from the start." },
    ],
    delivery: [
      { title: "Content and sitemap", text: "We map your services, audiences and key pages before any visual design begins." },
      { title: "Design direction", text: "Homepage and key templates designed for review, then refined with your feedback." },
      { title: "Build and optimise", text: "Development with performance, accessibility and SEO checks throughout." },
      { title: "Launch and handover", text: "Domain, analytics and Search Console set up, plus a walkthrough for your team." },
    ],
    relatedServices: ["ui-ux-design", "seo-services", "website-maintenance-support"],
    relatedProjects: ["krupa-sales", "panchal-sk-associates"],
    faqs: [
      { question: "How long does a business website take to build?", answer: "It depends on the number of pages, content readiness and integrations. After a short discovery call we share a written scope and timeline before work begins." },
      { question: "Will I be able to update the website myself?", answer: "Yes. Depending on your needs we set up a content management system or structured content that lets your team edit text, images and pages without touching code." },
      { question: "Do you write the website content?", answer: "We can. We help structure and write service copy, or refine content you already have so it reads clearly and supports search visibility." },
      { question: "Is SEO included in website development?", answer: "Technical SEO foundations — metadata, sitemaps, structured data, page speed and clean URLs — are included. Ongoing SEO campaigns are a separate service." },
    ],
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    shortTitle: "Web Apps",
    category: "build",
    icon: "dashboard",
    excerpt: "Secure, browser-based applications — portals, dashboards and internal tools your team uses every day.",
    headline: "Web application development for teams that have outgrown spreadsheets",
    lede: "Portals, dashboards and internal tools that run in any browser, keep data in one place and fit the way your team already works.",
    seo: {
      title: "Web Application Development | Custom Portals, Dashboards & Tools",
      description:
        "Custom web application development by Keshar Tech — secure portals, dashboards and internal tools built with Next.js, TypeScript and PostgreSQL.",
    },
    overview: [
      "A web application is software your team or customers use through a browser — a client portal, a booking system, an operations dashboard or an internal tool that replaces a tangle of spreadsheets and WhatsApp groups. Because it runs on the web, there is nothing to install and everyone sees the same, current data.",
      "We build web applications with role-based access, real-time data and interfaces that feel as considered as consumer software. The goal is simple: fewer manual steps, fewer errors and a single, reliable place where work happens.",
    ],
    problems: [
      { title: "Work scattered across tools", text: "Spreadsheets, chats and email threads make it hard to know what is current or who is responsible." },
      { title: "Manual, repetitive data entry", text: "Copying information between systems wastes hours and introduces avoidable mistakes." },
      { title: "No visibility for managers", text: "Without a live view of activity, decisions are made on outdated or incomplete information." },
    ],
    capabilities: [
      { title: "Role-based access", text: "Admins, managers, staff and customers each see exactly what they need — and nothing they should not." },
      { title: "Dashboards and reporting", text: "Live summaries, filters and exports for the numbers that matter to your business." },
      { title: "Workflow logic", text: "Statuses, assignments, approvals and reminders that mirror your real processes." },
      { title: "Secure authentication", text: "Modern sign-in, session handling and database-level access rules." },
      { title: "Integrations", text: "Connections to payment gateways, messaging, email and your existing software." },
      { title: "Responsive interfaces", text: "Usable on a desktop in the office or a phone on site." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    benefits: [
      { title: "One source of truth", text: "Everyone works from the same live data instead of competing copies." },
      { title: "Time back for your team", text: "Automated steps and better interfaces remove repetitive admin work." },
      { title: "Room to grow", text: "A modular codebase lets you add features as your operations evolve." },
    ],
    delivery: [
      { title: "Workflow mapping", text: "We document how work flows today, where it breaks and what the app must handle." },
      { title: "Prototype", text: "Clickable screens let you validate the experience before development." },
      { title: "Iterative build", text: "Features delivered in reviewable increments on a staging environment." },
      { title: "Rollout and training", text: "Data migration, user onboarding and support through the first weeks of use." },
    ],
    relatedServices: ["custom-software-development", "crm-development", "api-integrations"],
    relatedProjects: ["prime-homes-crm"],
    faqs: [
      { question: "What is the difference between a website and a web application?", answer: "A website mainly presents information. A web application lets users do things — log in, manage records, process requests and collaborate — with data stored securely in a database." },
      { question: "Can the application work on mobile phones?", answer: "Yes. We design responsive interfaces so the application is usable on phones and tablets, and can extend it into a native mobile app later if needed." },
      { question: "Who owns the code and data?", answer: "You do. Ownership terms are written into the project agreement, and data is stored in infrastructure under your account wherever practical." },
    ],
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortTitle: "Custom Software",
    category: "build",
    icon: "code",
    excerpt: "Software designed around your exact processes, when off-the-shelf tools force too many compromises.",
    headline: "Custom software development built around how your business really works",
    lede: "When off-the-shelf tools force workarounds, we build software that fits your processes, your data and your growth plans.",
    seo: {
      title: "Custom Software Development Company | Bespoke Business Software",
      description:
        "Keshar Tech designs and develops custom business software — tailored workflows, integrations and dashboards built for your processes, not generic ones.",
    },
    overview: [
      "Packaged software is built for the average business. If your workflows, pricing rules, approvals or reporting are even slightly different, you end up paying for features you do not use while working around the ones you need. Custom software removes that compromise.",
      "We start with your process, not a product catalogue. Then we design and engineer software that encodes your rules, connects with the tools you already rely on and can be extended as you grow — with clean architecture so it remains maintainable for years.",
    ],
    problems: [
      { title: "Paying for software that almost fits", text: "Licences add up while your team still relies on spreadsheets to fill the gaps." },
      { title: "Processes that live in people's heads", text: "When rules are not captured in a system, quality depends on who happens to be working that day." },
      { title: "Tools that do not talk to each other", text: "Disconnected systems mean double entry and conflicting numbers." },
    ],
    capabilities: [
      { title: "Process analysis", text: "We document your current workflow and design the improved version before writing code." },
      { title: "Bespoke business logic", text: "Pricing, approvals, scheduling and calculations implemented exactly as your business needs them." },
      { title: "Admin panels", text: "Easy controls for managing users, settings and master data." },
      { title: "Reporting", text: "Operational reports and exports designed around the decisions you make." },
      { title: "Integrations", text: "APIs and data syncs with accounting, messaging, payment and legacy systems." },
      { title: "Maintainable architecture", text: "Typed, documented, modular code that other engineers can pick up." },
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "Python", "PostgreSQL", "REST APIs", "Docker"],
    benefits: [
      { title: "No more workarounds", text: "The software adapts to your process rather than the other way round." },
      { title: "A genuine advantage", text: "Your way of operating becomes a system competitors cannot simply buy." },
      { title: "Predictable long-term cost", text: "You own the software and decide when and how it evolves." },
    ],
    delivery: [
      { title: "Discovery workshop", text: "Stakeholder sessions to capture requirements, edge cases and priorities." },
      { title: "Architecture and scope", text: "A technical plan and phased scope so value arrives early." },
      { title: "Build in milestones", text: "Working software demonstrated regularly, with your feedback built into each cycle." },
      { title: "Launch and evolve", text: "Deployment, documentation and a roadmap for the next round of improvements." },
    ],
    relatedServices: ["web-application-development", "erp-development", "business-automation"],
    relatedProjects: ["custom-erp-solutions", "prime-homes-crm"],
    faqs: [
      { question: "When does custom software make more sense than an off-the-shelf product?", answer: "When your processes are a source of advantage, when you are combining several tools to get one job done, or when licence costs grow faster than the value you get. We will tell you honestly if an existing product is the better choice." },
      { question: "Can you build in phases?", answer: "Yes — we recommend it. A focused first release solves the most expensive problem quickly, and later phases build on real usage." },
      { question: "What happens after launch?", answer: "We offer maintenance and support plans covering fixes, updates, monitoring and new features." },
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS",
    category: "build",
    icon: "layers",
    excerpt: "Multi-tenant software products with subscriptions, onboarding and an architecture ready to scale.",
    headline: "SaaS development from first version to scalable product",
    lede: "We help founders and businesses turn a software idea into a multi-tenant product with accounts, billing and an architecture that can grow.",
    seo: {
      title: "SaaS Development Company | MVP to Scalable SaaS Products",
      description:
        "SaaS product development by Keshar Tech — multi-tenant architecture, authentication, subscriptions and polished product design, from MVP to scale.",
    },
    overview: [
      "Building a software-as-a-service product is different from building a one-off tool. You need accounts and organisations, secure data separation between customers, onboarding that sells the product on its own, billing that handles upgrades and cancellations, and an architecture that does not need rebuilding when usage grows.",
      "We work with you from product definition to launch: shaping a focused first version, designing the experience, engineering the multi-tenant foundation and putting the release process in place so you can ship improvements confidently.",
    ],
    problems: [
      { title: "An idea without a clear first version", text: "Trying to build everything at once delays launch and burns budget before you learn from users." },
      { title: "Fragile foundations", text: "Shortcuts in authentication, tenancy or data modelling become expensive rewrites later." },
      { title: "A product that is hard to sell", text: "Confusing onboarding and generic design make it difficult for customers to see the value quickly." },
    ],
    capabilities: [
      { title: "MVP scoping", text: "We separate must-haves from nice-to-haves to get a usable product into customers' hands sooner." },
      { title: "Multi-tenant architecture", text: "Organisations, workspaces, roles and strict data isolation at the database level." },
      { title: "Subscriptions and billing", text: "Plans, trials, upgrades and invoices integrated with a payment provider." },
      { title: "Product design", text: "Onboarding, empty states and core flows designed to demonstrate value fast." },
      { title: "Admin and analytics", text: "Internal tools to support customers and understand how the product is used." },
      { title: "Release pipeline", text: "Preview environments, automated checks and safe deployments." },
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel", "GitHub"],
    benefits: [
      { title: "Faster time to market", text: "A disciplined first release means real feedback sooner." },
      { title: "Scale without rewrites", text: "Tenancy and data modelling done properly from the start." },
      { title: "A product that feels premium", text: "Thoughtful design builds trust with paying customers." },
    ],
    delivery: [
      { title: "Product definition", text: "Users, jobs-to-be-done, pricing assumptions and MVP scope." },
      { title: "Experience design", text: "Core flows prototyped and tested before development." },
      { title: "Foundation and features", text: "Auth, tenancy, billing and core features built in milestones." },
      { title: "Launch and iterate", text: "Production launch, monitoring and a prioritised improvement backlog." },
    ],
    relatedServices: ["ui-ux-design", "cloud-devops", "api-integrations"],
    relatedProjects: ["prime-homes-crm"],
    faqs: [
      { question: "What is an MVP and do I need one?", answer: "A minimum viable product is the smallest version that solves a real problem for real users. It lets you validate demand and priorities before investing in the full feature set." },
      { question: "Can you work with an existing SaaS codebase?", answer: "Yes. We start with a code and architecture review, then agree on whether to extend, refactor or rebuild specific parts." },
      { question: "How do you keep customer data separate?", answer: "We enforce tenant isolation at the database layer using row-level security policies, in addition to application-level checks." },
    ],
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    shortTitle: "CRM",
    category: "systems",
    icon: "users",
    excerpt: "Custom CRMs that capture every lead, automate follow-ups and give managers a live view of the pipeline.",
    headline: "Custom CRM development that never lets a lead go cold",
    lede: "A CRM designed around your sales process — lead capture, assignment, follow-ups and pipeline reporting in one place.",
    seo: {
      title: "Custom CRM Development | Lead Management & Sales Pipeline Software",
      description:
        "Keshar Tech builds custom CRM software for lead management, follow-ups, team assignment and sales pipeline reporting — tailored to your industry.",
    },
    overview: [
      "Most sales teams do not lose deals because of a lack of leads — they lose them in the gaps: an enquiry nobody was assigned, a follow-up that slipped, a site visit that was never logged. A CRM built around your process closes those gaps.",
      "We have built CRM software for real estate sales with branches, teams, site visits and follow-up tracking. We apply the same thinking to your industry: capture every lead automatically, route it to the right person, prompt the next action and show managers exactly where each opportunity stands.",
    ],
    problems: [
      { title: "Leads lost between channels", text: "Enquiries from ads, websites, calls and walk-ins end up in different places — or nowhere." },
      { title: "Missed follow-ups", text: "Without reminders and accountability, warm prospects go cold." },
      { title: "Generic CRMs that do not fit", text: "Off-the-shelf CRMs need heavy customisation and still miss industry-specific stages." },
    ],
    capabilities: [
      { title: "Lead capture", text: "Automatic import from website forms, ad platforms and spreadsheets, with duplicate detection." },
      { title: "Assignment rules", text: "Round-robin, branch-based or manual assignment so every lead has an owner." },
      { title: "Follow-up management", text: "Scheduled tasks, reminders and overdue alerts for every opportunity." },
      { title: "Custom pipeline stages", text: "Stages that match your sales journey — from first contact to closed deal." },
      { title: "Teams and branches", text: "Hierarchies, permissions and reporting by team, branch or individual." },
      { title: "Sales reporting", text: "Dashboards for pipeline health, conversion and team activity." },
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Webhooks"],
    benefits: [
      { title: "Every lead accounted for", text: "Nothing slips through because every enquiry is captured and owned." },
      { title: "Accountable teams", text: "Clear tasks and activity history make performance visible." },
      { title: "Better forecasting", text: "A live pipeline gives leadership numbers they can trust." },
    ],
    delivery: [
      { title: "Sales process mapping", text: "We document lead sources, stages, roles and reporting needs." },
      { title: "Data model and screens", text: "Pipeline, lead and dashboard screens designed with your sales team." },
      { title: "Build and migrate", text: "Development plus import of existing leads and contacts." },
      { title: "Adoption", text: "Team onboarding and refinements based on early usage." },
    ],
    relatedServices: ["business-automation", "api-integrations", "web-application-development"],
    relatedProjects: ["prime-homes-crm"],
    faqs: [
      { question: "Why build a custom CRM instead of using an existing one?", answer: "Custom CRMs fit your stages, roles and reports exactly, avoid per-user licence costs that grow with your team, and can integrate tightly with your other systems." },
      { question: "Can the CRM import leads from Facebook, Google and our website?", answer: "Yes. Lead sources can be connected through APIs, webhooks or scheduled imports, depending on what each platform supports." },
      { question: "Can we move our existing leads into the new CRM?", answer: "Yes. We clean, de-duplicate and import existing data from spreadsheets or your current CRM as part of the project." },
    ],
  },
  {
    slug: "erp-development",
    title: "ERP Development",
    shortTitle: "ERP",
    category: "systems",
    icon: "blocks",
    excerpt: "Odoo and custom ERP systems that connect inventory, sales, purchasing, accounting and people.",
    headline: "ERP development and Odoo customisation for connected operations",
    lede: "We implement and extend ERP systems — including Odoo — so inventory, sales, purchasing, accounting and HR share one source of truth.",
    seo: {
      title: "ERP Development & Odoo Customisation | Custom ERP Solutions",
      description:
        "Keshar Tech delivers ERP development, Odoo implementation and custom Odoo modules in Python — connecting inventory, sales, accounting and operations.",
    },
    overview: [
      "As a business grows, departments tend to adopt their own tools. Sales has one system, the warehouse another, accounts a third — and someone spends their week reconciling them. An ERP brings those operations onto a single platform with shared data.",
      "We work with Odoo, a flexible open-source ERP, configuring standard modules and developing custom ones in Python where your business needs something different. Where Odoo is not the right fit, we design custom ERP functionality instead.",
    ],
    problems: [
      { title: "Departments working in silos", text: "Separate systems for sales, stock and accounts create delays and disagreement over numbers." },
      { title: "Stock and order errors", text: "Manual updates lead to overselling, stockouts and dispatch mistakes." },
      { title: "Slow month-end", text: "Reconciling data from several sources makes reporting late and unreliable." },
    ],
    capabilities: [
      { title: "Odoo implementation", text: "Configuration of sales, purchase, inventory, invoicing, accounting and HR modules." },
      { title: "Custom Odoo modules", text: "Python development for workflows, fields, reports and rules unique to you." },
      { title: "Data migration", text: "Clean transfer of products, customers, vendors and opening balances." },
      { title: "Reports and dashboards", text: "Operational and management reports built around your KPIs." },
      { title: "Integrations", text: "Connections with e-commerce, payment, shipping and third-party tools." },
      { title: "Hosting and upgrades", text: "Secure deployment, backups and version upgrades." },
    ],
    technologies: ["Odoo", "Python", "PostgreSQL", "Docker", "Linux Servers", "REST APIs"],
    benefits: [
      { title: "One version of the truth", text: "Every department works from the same live data." },
      { title: "Fewer manual errors", text: "Automated flows from order to invoice reduce rework." },
      { title: "Clearer decisions", text: "Up-to-date reports make it easier to plan purchasing, staffing and cash flow." },
    ],
    delivery: [
      { title: "Operations audit", text: "We map each department's processes and the gaps between them." },
      { title: "Fit-gap analysis", text: "What standard modules cover, and what needs customisation." },
      { title: "Configure and develop", text: "Module setup, custom development and data migration in a test environment." },
      { title: "Go-live", text: "User training, cut-over planning and hands-on support after launch." },
    ],
    relatedServices: ["custom-software-development", "business-automation", "cloud-devops"],
    relatedProjects: ["custom-erp-solutions"],
    faqs: [
      { question: "What is Odoo?", answer: "Odoo is an open-source business application suite covering sales, CRM, inventory, purchasing, accounting, HR and more. Its modular design means you can start with what you need and add modules later." },
      { question: "Can Odoo be customised for our industry?", answer: "Yes. Odoo can be extended with custom modules written in Python to support industry-specific workflows, fields, documents and reports." },
      { question: "Do you migrate data from our existing systems?", answer: "Yes. Migration of masters and opening data is part of a typical implementation, with validation before go-live." },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    category: "build",
    icon: "smartphone",
    excerpt: "iOS and Android apps for customers and field teams, built from a single, maintainable codebase.",
    headline: "Mobile app development for iOS and Android",
    lede: "Customer-facing and field-team apps built cross-platform, so you reach iPhone and Android users without maintaining two separate products.",
    seo: {
      title: "Mobile App Development | iOS & Android Apps with React Native",
      description:
        "Cross-platform mobile app development by Keshar Tech — iOS and Android apps with React Native, connected to your website, CRM or business systems.",
    },
    overview: [
      "Some interactions belong on a phone: booking a service, checking an order, logging a site visit, scanning stock or receiving a notification at the right moment. A well-designed mobile app puts those actions one tap away.",
      "We build mobile apps with React Native, which allows one codebase to target both iOS and Android while still feeling native. Apps connect securely to the same backend as your website or business system, so data stays consistent everywhere.",
    ],
    problems: [
      { title: "Field teams working on paper", text: "Notes and photos captured on site often never make it into the system accurately." },
      { title: "Customers who want self-service", text: "Calls and messages for simple requests take up your team's time." },
      { title: "Two apps, double the cost", text: "Separate native builds for iOS and Android are expensive to build and maintain." },
    ],
    capabilities: [
      { title: "Cross-platform apps", text: "A single React Native codebase for iOS and Android." },
      { title: "Native device features", text: "Camera, location, push notifications and offline-friendly behaviour where needed." },
      { title: "Secure sign-in", text: "Account systems shared with your web platform." },
      { title: "Backend and APIs", text: "APIs and databases that keep app and web data in sync." },
      { title: "Store submission", text: "Preparation and publishing for the App Store and Google Play." },
      { title: "Updates and analytics", text: "Release management and usage insight after launch." },
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Supabase", "REST APIs"],
    benefits: [
      { title: "Reach both platforms", text: "Launch on iOS and Android together." },
      { title: "Faster field work", text: "Data captured once, on the spot, straight into your system." },
      { title: "Closer customer relationships", text: "Notifications and self-service keep customers engaged." },
    ],
    delivery: [
      { title: "App strategy", text: "Who uses the app, which tasks matter most and what belongs on mobile versus web." },
      { title: "Mobile UX design", text: "Thumb-friendly flows prototyped and tested on real devices." },
      { title: "Development and testing", text: "Builds tested across device sizes and OS versions." },
      { title: "Store launch", text: "Listing assets, submission and post-launch monitoring." },
    ],
    relatedServices: ["ui-ux-design", "web-application-development", "api-integrations"],
    relatedProjects: [],
    faqs: [
      { question: "Should I build a mobile app or a web application first?", answer: "If your users mainly work at desks or arrive through search, a web application is often the better first step. If they need notifications, device features or frequent on-the-go access, a mobile app makes sense. We help you decide based on usage, not trends." },
      { question: "Will the app work offline?", answer: "Offline support can be designed for specific tasks, with data syncing once a connection is available." },
      { question: "Do you publish the app to the stores?", answer: "Yes. We prepare store listings and handle submission to the Apple App Store and Google Play under your developer accounts." },
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX",
    category: "design",
    icon: "design",
    excerpt: "Research-led interface design that makes complex products feel simple and websites feel premium.",
    headline: "UI/UX design that makes complex software feel effortless",
    lede: "User research, wireframes, prototypes and polished interface design for websites, web apps, dashboards and mobile apps.",
    seo: {
      title: "UI/UX Design Services | Product, Web App & Website Design",
      description:
        "UI/UX design by Keshar Tech — user flows, wireframes, interactive prototypes and design systems for websites, SaaS products, dashboards and mobile apps.",
    },
    overview: [
      "Good design is not decoration. It is the reason a customer completes a booking instead of abandoning it, or a salesperson logs a call instead of skipping it. User experience design shapes how something works; interface design shapes how it looks and feels.",
      "We design with real tasks in mind. We map the journeys that matter, test structure with wireframes and prototypes, then craft a visual system that is consistent, accessible and ready for developers to build accurately.",
    ],
    problems: [
      { title: "Users get lost or give up", text: "Confusing navigation and cluttered screens increase drop-offs and support requests." },
      { title: "Inconsistent product interfaces", text: "Screens designed one at a time drift apart and feel unprofessional." },
      { title: "Expensive rework in development", text: "Building before validating the experience leads to costly changes later." },
    ],
    capabilities: [
      { title: "User flows", text: "The paths people take to complete key tasks, mapped and simplified." },
      { title: "Wireframes", text: "Low-fidelity layouts to agree structure and content priorities." },
      { title: "Interactive prototypes", text: "Clickable flows to test and refine before development." },
      { title: "Visual interface design", text: "Typography, colour, iconography and layout with a premium finish." },
      { title: "Design systems", text: "Reusable components and tokens that keep every screen consistent." },
      { title: "Accessibility", text: "Contrast, focus states and readable layouts aligned with WCAG guidance." },
    ],
    technologies: ["Figma", "Adobe Illustrator", "Tailwind CSS", "Motion"],
    benefits: [
      { title: "Higher completion rates", text: "Clear flows help users finish what they started." },
      { title: "Faster development", text: "Developers build from a validated, componentised design." },
      { title: "A consistent brand experience", text: "Every page and screen feels like part of one product." },
    ],
    delivery: [
      { title: "Research and goals", text: "Users, tasks, constraints and success criteria." },
      { title: "Structure", text: "Sitemaps, flows and wireframes for agreement on what goes where." },
      { title: "Visual design", text: "High-fidelity screens and prototypes for review." },
      { title: "Developer handoff", text: "Specs, components and support during build." },
    ],
    relatedServices: ["graphic-design-branding", "web-development", "saas-development"],
    relatedProjects: ["prime-homes-crm", "panchal-sk-associates"],
    faqs: [
      { question: "What is the difference between UI and UX design?", answer: "UX (user experience) design focuses on how a product works — structure, flows and usability. UI (user interface) design focuses on the visual layer — layout, typography, colour and components. We handle both together." },
      { question: "Can you redesign an existing product without rebuilding it?", answer: "Often, yes. We can introduce a design system and redesign screens incrementally so improvements ship without a full rebuild." },
      { question: "Do you design for accessibility?", answer: "Yes. We follow WCAG 2.2 AA principles for contrast, focus visibility, target sizes and semantic structure." },
    ],
  },
  {
    slug: "graphic-design-branding",
    title: "Graphic Design & Branding",
    shortTitle: "Branding",
    category: "design",
    icon: "palette",
    excerpt: "Logos, identity systems and marketing creative that make your business recognisable and consistent.",
    headline: "Graphic design and branding that makes your business unmistakable",
    lede: "Logo design, visual identity systems, brand guidelines and marketing creative — consistent across your website, social media and print.",
    seo: {
      title: "Graphic Design & Branding Services | Logo & Brand Identity Design",
      description:
        "Keshar Tech creates logos, brand identity systems, brand guidelines and marketing creative that keep your business consistent and recognisable everywhere.",
    },
    overview: [
      "A brand is the impression people carry about your business. Visual identity — your logo, colours, typography and imagery — is how that impression becomes recognisable. When it is inconsistent, even good businesses look smaller than they are.",
      "We design identities as systems, not single files: a logo with clear variations, a defined palette, typography rules and templates your team can use. That system then carries through to your website, social media, presentations and print.",
    ],
    problems: [
      { title: "A brand that looks inconsistent", text: "Different colours, fonts and logo versions across channels weaken recognition." },
      { title: "An identity you have outgrown", text: "A logo created in a hurry no longer reflects the business you have become." },
      { title: "Slow marketing production", text: "Without templates, every post or brochure starts from scratch." },
    ],
    capabilities: [
      { title: "Logo design", text: "Distinctive marks with primary, secondary and icon variations." },
      { title: "Visual identity", text: "Colour palette, typography and graphic elements that work together." },
      { title: "Brand guidelines", text: "Clear rules for using your identity correctly." },
      { title: "Marketing collateral", text: "Brochures, presentations, business cards and signage." },
      { title: "Social media creative", text: "Post and campaign templates aligned with your brand." },
      { title: "Brand refresh", text: "Modernising an existing identity while keeping recognition." },
    ],
    technologies: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    benefits: [
      { title: "Instant recognition", text: "A consistent identity makes your business memorable." },
      { title: "Perceived quality", text: "Professional design signals a professional business." },
      { title: "Faster content creation", text: "Templates and rules speed up everyday marketing." },
    ],
    delivery: [
      { title: "Brand discovery", text: "Your positioning, audience, competitors and personality." },
      { title: "Concepts", text: "Distinct creative directions presented with rationale." },
      { title: "Refinement", text: "The chosen direction developed into a complete system." },
      { title: "Brand kit", text: "Final files, guidelines and templates delivered." },
    ],
    relatedServices: ["ui-ux-design", "web-development", "google-meta-ads"],
    relatedProjects: [],
    faqs: [
      { question: "What do I receive at the end of a branding project?", answer: "Typically logo files in vector and raster formats for light and dark backgrounds, colour and typography specifications, brand guidelines and agreed templates." },
      { question: "Can you refresh our logo without changing it completely?", answer: "Yes. A refresh modernises proportions, colour and typography while preserving the recognition you have already built." },
      { question: "Do you design social media posts?", answer: "Yes. We design campaign creative and reusable templates so your team can produce on-brand posts quickly." },
    ],
  },
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    shortTitle: "AI",
    category: "systems",
    icon: "brain",
    excerpt: "Practical AI — assistants, document processing and smart workflows grounded in your own data.",
    headline: "AI solutions that solve real business problems",
    lede: "Practical applications of AI — assistants, document processing, classification and content workflows — built safely around your data and processes.",
    seo: {
      title: "AI Solutions for Business | AI Assistants, Chatbots & Automation",
      description:
        "Keshar Tech builds practical AI solutions — business assistants, document extraction, smart classification and AI-powered workflows using leading LLM APIs.",
    },
    overview: [
      "AI is most valuable when it is pointed at a specific, repetitive task: answering common customer questions, extracting fields from invoices, summarising long documents, drafting replies or sorting incoming requests. Used this way it saves hours each week without asking your team to change everything.",
      "We start by identifying where AI genuinely helps and where simpler automation is enough. Then we build solutions with clear boundaries — grounded in your own information, with human review where accuracy matters and with sensible handling of your data.",
    ],
    problems: [
      { title: "Repetitive questions consume your team", text: "Staff spend hours answering the same enquiries across channels." },
      { title: "Documents processed by hand", text: "Invoices, forms and PDFs are read and re-typed manually." },
      { title: "Unclear where AI fits", text: "Hype makes it hard to tell which uses will deliver real value." },
    ],
    capabilities: [
      { title: "AI assistants", text: "Assistants that answer questions from your documents, policies and product data." },
      { title: "Document extraction", text: "Turn invoices, forms and PDFs into structured data." },
      { title: "Classification and routing", text: "Automatically tag and route emails, tickets and leads." },
      { title: "Content workflows", text: "Drafting and summarisation with human approval steps." },
      { title: "AI inside your software", text: "LLM features added to existing CRMs, portals and tools." },
      { title: "Guardrails", text: "Prompt design, evaluation and review flows for reliable output." },
    ],
    technologies: ["OpenAI API", "Claude API", "Python", "Node.js", "Supabase", "n8n"],
    benefits: [
      { title: "Hours back every week", text: "Routine reading, typing and replying handled automatically." },
      { title: "Faster responses", text: "Customers get accurate answers sooner." },
      { title: "Low-risk adoption", text: "Start with one focused use case and expand once it proves itself." },
    ],
    delivery: [
      { title: "Opportunity mapping", text: "Identify the tasks where AI delivers measurable value." },
      { title: "Proof of concept", text: "A focused prototype tested on your real data." },
      { title: "Production build", text: "Integration, guardrails, logging and review flows." },
      { title: "Monitor and improve", text: "Quality reviews and refinements based on usage." },
    ],
    relatedServices: ["business-automation", "api-integrations", "custom-software-development"],
    relatedProjects: [],
    faqs: [
      { question: "Is our business data safe when using AI?", answer: "We design solutions to send only what is necessary, use providers' business API terms, and keep sensitive processing within your own systems wherever possible. We discuss data handling with you before building." },
      { question: "Will AI replace our staff?", answer: "Our focus is removing repetitive work so your team can spend time on judgement, relationships and growth." },
      { question: "How do we start?", answer: "With one well-defined task. A short proof of concept shows whether AI improves it before you invest further." },
    ],
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    shortTitle: "Automation",
    category: "systems",
    icon: "workflow",
    excerpt: "Automated workflows that move data, send reminders and trigger actions so your team stops copy-pasting.",
    headline: "Business process automation that removes repetitive work",
    lede: "We automate the hand-offs, reminders, data entry and notifications that slow your team down — connecting the tools you already use.",
    seo: {
      title: "Business Process Automation Services | Workflow Automation",
      description:
        "Business automation by Keshar Tech — workflow automation that connects your apps, removes manual data entry and sends the right notification at the right time.",
    },
    overview: [
      "In most businesses, a surprising amount of time goes into moving information from one place to another: copying a lead from a form into a sheet, sending the same reminder email, updating a status in two systems, compiling a weekly report. Each task is small. Together they cost days every month.",
      "We find these repetitive steps and automate them — using workflow tools where they are sufficient and custom code where reliability and flexibility matter more. Every automation is documented and monitored, so it does not become a mystery when something changes.",
    ],
    problems: [
      { title: "Copy-paste between systems", text: "Manual transfers waste time and create inconsistencies." },
      { title: "Forgotten reminders", text: "Follow-ups and renewals depend on someone remembering." },
      { title: "Reports assembled by hand", text: "Weekly numbers take hours to compile from several sources." },
    ],
    capabilities: [
      { title: "Workflow automation", text: "Multi-step flows triggered by forms, events or schedules." },
      { title: "Notifications", text: "Email and messaging alerts to the right person at the right time." },
      { title: "Data synchronisation", text: "Keep CRM, accounting, sheets and databases in sync." },
      { title: "Automated reporting", text: "Scheduled summaries delivered to inboxes or dashboards." },
      { title: "Document generation", text: "Quotes, invoices and confirmations created from templates." },
      { title: "Monitoring", text: "Error alerts and logs so failures are noticed and fixed quickly." },
    ],
    technologies: ["n8n", "Webhooks", "REST APIs", "Node.js", "Python", "Supabase"],
    benefits: [
      { title: "Reclaimed time", text: "Teams focus on customers instead of admin." },
      { title: "Consistency", text: "Automated steps happen the same way every time." },
      { title: "Faster response", text: "Leads and requests are acted on immediately." },
    ],
    delivery: [
      { title: "Process audit", text: "List repetitive tasks and estimate the effort each one consumes." },
      { title: "Prioritise", text: "Start with automations that save the most time with the least risk." },
      { title: "Build and test", text: "Implement with error handling and test against real scenarios." },
      { title: "Document and monitor", text: "Hand over clear documentation and alerting." },
    ],
    relatedServices: ["ai-solutions", "api-integrations", "crm-development"],
    relatedProjects: ["prime-homes-crm"],
    faqs: [
      { question: "What kinds of tasks can be automated?", answer: "Anything rule-based and repetitive: moving form submissions into a CRM, sending reminders, syncing records between systems, generating documents and compiling reports." },
      { question: "Do we need to replace our current software?", answer: "Usually not. Automation connects the tools you already use, provided they offer APIs, webhooks or exports." },
      { question: "What happens if an automation fails?", answer: "We build in error handling and alerts so failures are visible, and document each workflow so it can be fixed quickly." },
    ],
  },
  {
    slug: "api-integrations",
    title: "API Integrations",
    shortTitle: "Integrations",
    category: "systems",
    icon: "plug",
    excerpt: "Reliable connections between your software, payment gateways, messaging platforms and third-party services.",
    headline: "API integration services that make your systems work as one",
    lede: "We connect websites, CRMs, ERPs, payment gateways, messaging and third-party platforms so data flows automatically and reliably.",
    seo: {
      title: "API Integration Services | Connect CRM, ERP, Payments & Apps",
      description:
        "Keshar Tech builds secure API integrations between your website, CRM, ERP, payment gateways and third-party services — reliable, documented and monitored.",
    },
    overview: [
      "Modern businesses run on several platforms at once. When they are not connected, people become the integration layer — exporting, re-typing and reconciling. API integrations let those systems exchange data directly and in real time.",
      "We design integrations that handle the unglamorous details properly: authentication, rate limits, retries, data mapping, validation and logging. The result is a connection you can rely on rather than one that quietly breaks.",
    ],
    problems: [
      { title: "Systems that do not share data", text: "Customer, order and payment information lives in separate silos." },
      { title: "Unreliable connections", text: "Quick plugins and scripts fail silently and leave data out of sync." },
      { title: "No API for what you need", text: "Some workflows need a custom API before anything else can connect." },
    ],
    capabilities: [
      { title: "Third-party integrations", text: "Payment gateways, messaging, email, maps, ad platforms and more." },
      { title: "Custom API development", text: "Secure, documented APIs for your own systems." },
      { title: "Webhooks and events", text: "Real-time reactions to changes in connected platforms." },
      { title: "Data mapping", text: "Transform and validate data between different formats." },
      { title: "Retries and error handling", text: "Graceful recovery from timeouts and rate limits." },
      { title: "Monitoring and logs", text: "Visibility into every request and failure." },
    ],
    technologies: ["REST APIs", "Webhooks", "Node.js", "Python", "TypeScript", "PostgreSQL"],
    benefits: [
      { title: "Real-time data", text: "Information appears where it is needed without waiting for manual updates." },
      { title: "Fewer errors", text: "Validation stops bad data spreading between systems." },
      { title: "Flexibility", text: "Choose the best tool for each job and still keep everything connected." },
    ],
    delivery: [
      { title: "Integration design", text: "Systems, data flows, frequency and failure scenarios documented." },
      { title: "Sandbox build", text: "Development and testing against provider sandboxes." },
      { title: "Production rollout", text: "Gradual rollout with monitoring and fallback plans." },
      { title: "Maintenance", text: "Updates when providers change their APIs." },
    ],
    relatedServices: ["business-automation", "custom-software-development", "erp-development"],
    relatedProjects: ["prime-homes-crm", "custom-erp-solutions"],
    faqs: [
      { question: "Can you integrate with software that has no public API?", answer: "Sometimes. Options include file-based imports, database-level connections or webhooks. We assess feasibility and reliability before recommending an approach." },
      { question: "Are integrations secure?", answer: "Yes. Credentials are stored server-side, traffic is encrypted, and each integration has only the permissions it needs." },
      { question: "Will integrations break when a provider updates its API?", answer: "Providers do change APIs. Monitoring and maintenance plans mean we detect and adapt to those changes quickly." },
    ],
  },
  {
    slug: "seo-services",
    title: "Search Engine Optimisation",
    shortTitle: "SEO",
    category: "grow",
    icon: "search",
    excerpt: "Technical, on-page and content SEO that helps the right customers find you on Google.",
    headline: "SEO services that build lasting search visibility",
    lede: "Technical SEO, on-page optimisation and content strategy that help customers searching for your services find your business first.",
    seo: {
      title: "SEO Services | Technical SEO, On-Page SEO & Content Strategy",
      description:
        "SEO services from Keshar Tech — technical audits, on-page optimisation, local SEO and content strategy to grow organic visibility and qualified enquiries.",
    },
    overview: [
      "Search engine optimisation helps your business appear when people search for what you offer. Unlike ads, organic visibility keeps working after the effort is made — but it requires a technically sound website, content that genuinely answers searchers' questions, and patience.",
      "Because we are also developers, we can fix technical issues directly rather than just reporting them. We pair that with keyword research, on-page improvements and a realistic content plan focused on the searches most likely to bring you business.",
    ],
    problems: [
      { title: "Competitors outrank you", text: "Businesses with weaker offers appear above you because their sites are better optimised." },
      { title: "Technical issues holding you back", text: "Slow pages, indexing problems and duplicate content limit visibility." },
      { title: "Traffic that does not convert", text: "Ranking for the wrong terms brings visitors who never enquire." },
    ],
    capabilities: [
      { title: "Technical SEO audit", text: "Crawlability, indexing, speed, structured data and site architecture." },
      { title: "Keyword research", text: "Search terms mapped to services and buyer intent." },
      { title: "On-page optimisation", text: "Titles, headings, content and internal links improved page by page." },
      { title: "Local SEO", text: "Google Business Profile and local signals for service-area visibility." },
      { title: "Content strategy", text: "Useful pages and articles planned around real questions." },
      { title: "Reporting", text: "Search Console and analytics reporting on visibility and enquiries." },
    ],
    technologies: ["Google Search Console", "Google Analytics 4", "Google Tag Manager", "Next.js"],
    benefits: [
      { title: "Compounding visibility", text: "Organic rankings keep delivering visitors over time." },
      { title: "High-intent visitors", text: "People searching for your service are already looking to buy." },
      { title: "Lower acquisition cost", text: "Organic traffic reduces reliance on paid advertising." },
    ],
    delivery: [
      { title: "Audit and baseline", text: "Technical audit and measurement of current visibility." },
      { title: "Fix foundations", text: "Resolve technical issues and site structure first." },
      { title: "Optimise and create", text: "On-page improvements and new content each month." },
      { title: "Measure and adjust", text: "Monthly reporting and refined priorities." },
    ],
    relatedServices: ["web-development", "google-meta-ads", "website-maintenance-support"],
    relatedProjects: ["krupa-sales", "panchal-sk-associates"],
    faqs: [
      { question: "How long does SEO take to show results?", answer: "SEO is a long-term channel. Technical fixes can help quickly, but meaningful ranking improvements typically build over several months depending on competition and your site's starting point." },
      { question: "Can you guarantee first position on Google?", answer: "No honest provider can guarantee rankings, because search engines control their own results. We focus on the factors within our control and report transparently." },
      { question: "Do you offer local SEO?", answer: "Yes. We optimise your Google Business Profile, local landing pages with genuinely useful content, and consistent business information." },
    ],
  },
  {
    slug: "google-meta-ads",
    title: "Google Ads & Meta Ads",
    shortTitle: "Paid Ads",
    category: "grow",
    icon: "megaphone",
    excerpt: "Performance campaigns on Google, Facebook and Instagram with clean tracking and landing pages that convert.",
    headline: "Google Ads and Meta Ads management focused on real enquiries",
    lede: "Search, social and retargeting campaigns on Google, Facebook and Instagram — with proper conversion tracking and landing pages built to convert.",
    seo: {
      title: "Google Ads & Meta Ads Management | PPC & Social Advertising",
      description:
        "Keshar Tech plans and manages Google Ads, Facebook and Instagram ad campaigns with conversion tracking, landing pages and transparent reporting.",
    },
    overview: [
      "Paid advertising can put your business in front of customers immediately — but only if the targeting, message, landing page and tracking all work together. Many campaigns lose money because one of those links is weak: clicks arrive on a generic homepage, or conversions are not measured at all.",
      "We connect the whole chain. We set up accurate conversion tracking, structure campaigns around intent, write and design creative, build dedicated landing pages where needed and report on enquiries rather than vanity metrics. This is also where our wider digital marketing support begins.",
    ],
    problems: [
      { title: "Ad spend without clear results", text: "Clicks and impressions are reported, but enquiries are not." },
      { title: "Weak landing experiences", text: "Paid traffic arrives on pages that were never designed to convert." },
      { title: "Broken or missing tracking", text: "Without accurate conversion data, budgets cannot be optimised." },
    ],
    capabilities: [
      { title: "Google Search campaigns", text: "Keyword-led campaigns targeting people actively searching." },
      { title: "Meta campaigns", text: "Facebook and Instagram campaigns for awareness, leads and retargeting." },
      { title: "Conversion tracking", text: "Analytics, tag manager and platform pixels configured correctly." },
      { title: "Landing pages", text: "Fast, focused pages designed for each campaign." },
      { title: "Creative and copy", text: "Ad copy and visuals aligned with your brand." },
      { title: "Optimisation and reporting", text: "Ongoing bid, audience and creative refinement with clear reporting." },
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Google Analytics 4"],
    benefits: [
      { title: "Immediate visibility", text: "Reach customers while organic visibility is still building." },
      { title: "Measurable spend", text: "Know what each campaign contributes in enquiries." },
      { title: "Better use of budget", text: "Continuous optimisation moves spend to what works." },
    ],
    delivery: [
      { title: "Goals and tracking", text: "Define conversions and set up measurement first." },
      { title: "Campaign build", text: "Structure, audiences, keywords and creative." },
      { title: "Launch and learn", text: "Monitor early performance and refine quickly." },
      { title: "Scale what works", text: "Monthly optimisation and reporting." },
    ],
    relatedServices: ["seo-services", "graphic-design-branding", "web-development"],
    relatedProjects: ["krupa-sales"],
    faqs: [
      { question: "How much should we spend on ads?", answer: "It depends on your market, competition and goals. We recommend a test budget first, then scaling based on cost per enquiry." },
      { question: "Is ad spend included in your fee?", answer: "No. Ad spend is paid directly to Google or Meta from your account; our management fee is separate and transparent." },
      { question: "Can you connect ad leads to our CRM?", answer: "Yes. Lead forms and landing page submissions can flow straight into your CRM so follow-up starts immediately." },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    category: "run",
    icon: "cloud",
    excerpt: "Secure hosting, automated deployments, backups and monitoring for applications that need to stay online.",
    headline: "Cloud infrastructure and DevOps for reliable, secure applications",
    lede: "Hosting architecture, CI/CD pipelines, backups, monitoring and security hardening so your applications stay fast, available and safe.",
    seo: {
      title: "Cloud & DevOps Services | Hosting, CI/CD, Deployment & Monitoring",
      description:
        "Cloud infrastructure and DevOps by Keshar Tech — secure hosting, automated deployments, backups, monitoring and performance for web apps and ERPs.",
    },
    overview: [
      "Good software still fails if it is deployed by hand, hosted on an unmonitored server or never backed up. Cloud and DevOps work is the discipline that keeps applications reliable: repeatable deployments, sensible infrastructure, security updates and early warning when something goes wrong.",
      "We choose infrastructure to suit the application — managed platforms for modern web apps, containerised services or dedicated Linux servers for ERP and long-running workloads — and automate the path from code to production.",
    ],
    problems: [
      { title: "Risky manual deployments", text: "Updates done by hand are slow and easily break production." },
      { title: "No backups or monitoring", text: "Outages and data loss are discovered by customers first." },
      { title: "Rising hosting costs", text: "Over-provisioned or poorly configured infrastructure wastes money." },
    ],
    capabilities: [
      { title: "Hosting architecture", text: "The right platform for each workload, from edge hosting to VPS." },
      { title: "CI/CD pipelines", text: "Automated checks and deployments from version control." },
      { title: "Containerisation", text: "Docker-based services that behave the same everywhere." },
      { title: "Backups and recovery", text: "Scheduled backups with tested restore procedures." },
      { title: "Monitoring and alerts", text: "Uptime, error and performance monitoring." },
      { title: "Security hardening", text: "SSL, firewalls, access control and update policies." },
    ],
    technologies: ["Vercel", "GitHub", "Docker", "Linux Servers", "Cloudflare", "Supabase"],
    benefits: [
      { title: "Confident releases", text: "Ship updates without fear of breaking production." },
      { title: "Peace of mind", text: "Backups and monitoring protect your business." },
      { title: "Right-sized costs", text: "Pay for the infrastructure you actually need." },
    ],
    delivery: [
      { title: "Infrastructure review", text: "Assess current hosting, risks and costs." },
      { title: "Design", text: "Target architecture, environments and pipelines." },
      { title: "Migrate and automate", text: "Move workloads and set up CI/CD with minimal downtime." },
      { title: "Operate", text: "Monitoring, patching and incident response." },
    ],
    relatedServices: ["website-maintenance-support", "saas-development", "erp-development"],
    relatedProjects: ["prime-homes-crm", "custom-erp-solutions"],
    faqs: [
      { question: "Which cloud provider do you recommend?", answer: "It depends on the application. Next.js apps often suit managed platforms such as Vercel, while ERPs and long-running services may be better on containers or dedicated servers. We recommend based on workload, budget and compliance needs." },
      { question: "Can you migrate our existing application?", answer: "Yes. We plan migrations carefully, test in staging and schedule cut-over to minimise downtime." },
      { question: "Do you provide ongoing infrastructure support?", answer: "Yes, as part of our maintenance and support plans." },
    ],
  },
  {
    slug: "website-maintenance-support",
    title: "Website Maintenance & Support",
    shortTitle: "Maintenance",
    category: "run",
    icon: "support",
    excerpt: "Updates, security patches, backups, fixes and improvements so your website and software keep performing.",
    headline: "Website maintenance and support that keeps everything running",
    lede: "Ongoing updates, security, backups, monitoring, fixes and small improvements for websites and applications — handled by the people who understand the code.",
    seo: {
      title: "Website Maintenance & Support Services | Updates, Security & Fixes",
      description:
        "Website and application maintenance from Keshar Tech — security updates, backups, uptime monitoring, bug fixes, content changes and performance care.",
    },
    overview: [
      "Websites and applications are not finished at launch. Dependencies need updating, security patches appear, content changes, browsers evolve and new ideas come up. Without regular care, performance slips and risk accumulates quietly.",
      "Our maintenance plans give you a dependable technical partner: proactive updates and monitoring, a clear way to request changes, and engineers who know your system — whether we built it or are taking it over.",
    ],
    problems: [
      { title: "Nobody looking after the site", text: "The original developer has moved on and updates have stopped." },
      { title: "Security and stability risks", text: "Outdated software is vulnerable and prone to breaking." },
      { title: "Small changes take weeks", text: "Without a support arrangement, simple updates get stuck." },
    ],
    capabilities: [
      { title: "Software updates", text: "Framework, plugin and dependency updates tested before release." },
      { title: "Security monitoring", text: "Patches, SSL and vulnerability checks." },
      { title: "Backups", text: "Regular automated backups with restore capability." },
      { title: "Uptime monitoring", text: "Alerts when the site or app becomes unavailable." },
      { title: "Fixes and content changes", text: "A simple way to request updates and get them done." },
      { title: "Performance care", text: "Periodic speed and SEO health checks." },
    ],
    technologies: ["Next.js", "WordPress", "GitHub", "Vercel", "Cloudflare", "Google Search Console"],
    benefits: [
      { title: "Reduced risk", text: "Proactive updates prevent many problems before they start." },
      { title: "Predictable support", text: "A clear process and a team that knows your system." },
      { title: "Continuous improvement", text: "Your website keeps getting better instead of ageing." },
    ],
    delivery: [
      { title: "Onboarding audit", text: "Review code, hosting, access and current issues." },
      { title: "Stabilise", text: "Fix urgent issues and set up backups and monitoring." },
      { title: "Maintain", text: "Scheduled updates, checks and requested changes." },
      { title: "Report", text: "Regular summaries of work done and recommendations." },
    ],
    relatedServices: ["cloud-devops", "web-development", "seo-services"],
    relatedProjects: ["krupa-sales", "panchal-sk-associates"],
    faqs: [
      { question: "Can you maintain a website you did not build?", answer: "Yes. We start with an onboarding audit to understand the code, hosting and risks, then agree on a plan." },
      { question: "What does a maintenance plan include?", answer: "Typically updates, security monitoring, backups, uptime checks and an allowance for fixes and small changes. Plans are tailored to your system." },
      { question: "How do we request changes?", answer: "Through an agreed channel such as email or a ticketing board, with priorities and response expectations defined in your plan." },
    ],
  },
];

const bySlug = new Map(services.map((s) => [s.slug, s]));

export const getService = (slug: string) => bySlug.get(slug);

export function getServices(slugs: string[]): Service[] {
  return slugs.map((slug) => bySlug.get(slug)).filter((s): s is Service => Boolean(s));
}

export function getServicesByCategory() {
  return (Object.keys(serviceCategories) as ServiceCategory[]).map((key) => ({
    key,
    ...serviceCategories[key],
    services: services.filter((s) => s.category === key),
  }));
}

/** The six services highlighted on the homepage. */
export const featuredServiceSlugs = [
  "web-development",
  "custom-software-development",
  "crm-development",
  "erp-development",
  "ai-solutions",
  "seo-services",
];

/** Options for the contact form's "Service required" field. */
export const serviceOptions = [...services.map((s) => s.title), "Something else"];
