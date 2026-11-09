import type { Solution } from "@/types/content";

export const solutions: Solution[] = [
  {
    slug: "business-websites",
    title: "Business Websites",
    icon: "appWindow",
    excerpt: "A credible, fast, search-ready website that explains your offer and generates enquiries.",
    headline: "Business websites that work as hard as your sales team",
    lede: "For companies that need a professional online presence that builds trust, ranks on Google and turns visitors into qualified enquiries.",
    seo: {
      title: "Business Website Solutions | Professional Websites for Growing Companies",
      description:
        "Professional business website solutions from Keshar Tech — strategy, design, development, SEO foundations and enquiry capture for growing companies.",
    },
    overview: [
      "A business website solution is more than a set of pages. It combines clear positioning, service pages written for real search intent, credibility signals, fast performance and a dependable way for customers to get in touch — then supports it with analytics so you can see what is working.",
      "We bring strategy, design, development and search together in one engagement, so you do not have to coordinate separate freelancers for each piece.",
    ],
    audiences: [
      { title: "Manufacturers and industrial suppliers", text: "Product catalogues, specifications and enquiry forms that help buyers shortlist you." },
      { title: "Professional services firms", text: "Advisory, financial, legal and consulting firms that need to communicate expertise and trust." },
      { title: "Local and regional businesses", text: "Service businesses that want to be found by nearby customers and convert calls and enquiries." },
      { title: "Growing companies rebranding", text: "Businesses whose current site no longer reflects their scale or offering." },
    ],
    modules: [
      { title: "Positioning and content structure", text: "A sitemap and messaging built around what customers need to know." },
      { title: "Custom responsive design", text: "A distinctive design system across all devices." },
      { title: "Service and product pages", text: "Detailed pages that answer questions and support search visibility." },
      { title: "Enquiry capture", text: "Validated forms delivered to email or your CRM." },
      { title: "SEO and analytics", text: "Technical SEO, Search Console and analytics configured at launch." },
      { title: "Content management", text: "Easy editing for your team where it is needed." },
    ],
    useCases: [
      "Product catalogue with enquiry-per-product",
      "Service firm website with team and expertise pages",
      "Landing pages for advertising campaigns",
      "Website redesign and migration without losing search visibility",
    ],
    services: ["web-development", "ui-ux-design", "seo-services", "website-maintenance-support"],
    projects: ["krupa-sales", "panchal-sk-associates"],
    faqs: [
      { question: "Do you redesign existing websites?", answer: "Yes. We audit your current site, preserve what works — including search rankings through proper redirects — and rebuild the rest." },
      { question: "Can the website connect to our CRM?", answer: "Yes. Enquiry forms can create leads directly in a CRM so your sales team can follow up immediately." },
    ],
  },
  {
    slug: "crm-sales-systems",
    title: "CRM & Sales Systems",
    icon: "users",
    excerpt: "Lead capture, assignment, follow-ups and pipeline reporting in a system designed around your sales process.",
    headline: "CRM and sales systems that keep every opportunity moving",
    lede: "For sales-driven businesses that receive leads from many channels and need every enquiry captured, assigned, followed up and reported.",
    seo: {
      title: "CRM & Sales System Solutions | Lead Management Software",
      description:
        "Custom CRM and sales system solutions from Keshar Tech — multi-channel lead capture, assignment, follow-ups, site visits and pipeline reporting.",
    },
    overview: [
      "Sales teams handling a high volume of enquiries need structure: a single place where every lead arrives, a clear owner for each one, reminders for the next step and visibility for managers. Without it, revenue leaks quietly through missed follow-ups.",
      "Our CRM solutions are built around the way your sales actually happen — your stages, your roles, your branches and your reports — and connect to the channels your leads come from.",
    ],
    audiences: [
      { title: "Real estate developers and brokers", text: "Lead management, site visits, bookings and branch-wise teams." },
      { title: "Education and training providers", text: "Enquiry tracking, counselling follow-ups and admissions pipelines." },
      { title: "B2B distributors and manufacturers", text: "Dealer and customer enquiries, quotations and repeat-order follow-ups." },
      { title: "Service businesses", text: "Appointment-led sales with reminders and conversion tracking." },
    ],
    modules: [
      { title: "Multi-channel lead capture", text: "Website, ad platforms, imports and manual entry in one inbox." },
      { title: "Assignment and ownership", text: "Rules that route each lead to the right person or branch." },
      { title: "Follow-ups and calendar", text: "Scheduled actions, reminders and overdue alerts." },
      { title: "Pipeline stages", text: "Custom stages that match your sales journey." },
      { title: "Teams, branches and roles", text: "Permissions and hierarchies for managers and staff." },
      { title: "Reports and exports", text: "Pipeline, activity and conversion reporting." },
    ],
    useCases: [
      "Real estate lead-to-booking pipeline",
      "Duplicate lead detection across channels",
      "Branch-wise sales dashboards for management",
      "Automatic lead import from ad campaigns",
    ],
    services: ["crm-development", "business-automation", "api-integrations", "web-application-development"],
    projects: ["prime-homes-crm"],
    faqs: [
      { question: "How is this different from an off-the-shelf CRM?", answer: "It is shaped around your stages, roles and reports rather than generic defaults, and avoids paying for unused features or per-seat licences that grow with your team." },
      { question: "Can sales staff use it on their phones?", answer: "Yes. Interfaces are responsive, so field teams can update leads and log visits from their phones." },
    ],
  },
  {
    slug: "erp-operations",
    title: "Business ERP & Operations",
    icon: "blocks",
    excerpt: "Inventory, purchasing, sales, accounting and HR connected on one platform — with Odoo or custom ERP.",
    headline: "ERP and operations systems that connect every department",
    lede: "For businesses whose departments run on separate tools and spreadsheets, and who need one connected platform for day-to-day operations.",
    seo: {
      title: "Business ERP & Operations Solutions | Odoo ERP Implementation",
      description:
        "ERP and operations solutions from Keshar Tech — Odoo implementation, custom modules and integrations connecting inventory, sales, purchasing and accounting.",
    },
    overview: [
      "Operations become harder to control as a business grows. Inventory, purchasing, sales, invoicing and HR each develop their own records, and reconciling them takes time that should be spent running the business.",
      "We implement ERP systems — most often Odoo, extended with custom Python modules — so departments share live data, documents flow automatically from order to invoice, and management reports come from one reliable source.",
    ],
    audiences: [
      { title: "Manufacturers", text: "Bills of materials, production planning, inventory and purchasing." },
      { title: "Traders and distributors", text: "Multi-location stock, sales orders, dispatch and receivables." },
      { title: "Cooperatives and member organisations", text: "Member records, transactions and structured reporting." },
      { title: "Multi-department SMEs", text: "Shared data across sales, accounts, HR and operations." },
    ],
    modules: [
      { title: "Sales and purchasing", text: "Quotations, orders, vendors and approvals." },
      { title: "Inventory and warehouse", text: "Stock levels, movements, locations and valuation." },
      { title: "Invoicing and accounting", text: "Invoices, payments and financial reporting." },
      { title: "HR and employees", text: "Employee records, leave and attendance." },
      { title: "Custom modules", text: "Industry-specific workflows developed in Python." },
      { title: "Dashboards", text: "Management views across all departments." },
    ],
    useCases: [
      "Replacing spreadsheets with a single operations platform",
      "Custom approval workflows for purchases",
      "Industry-specific document formats and reports",
      "Integration of ERP with an e-commerce or CRM system",
    ],
    services: ["erp-development", "custom-software-development", "api-integrations", "cloud-devops"],
    projects: ["custom-erp-solutions"],
    faqs: [
      { question: "Is Odoo suitable for small and mid-sized businesses?", answer: "Yes. Odoo's modular structure lets smaller businesses start with a few modules and grow into more as they need them." },
      { question: "Can you build an ERP without Odoo?", answer: "Yes. Where Odoo is not the right fit, we design custom operations software using the same principles." },
    ],
  },
  {
    slug: "custom-business-software",
    title: "Custom Business Software",
    icon: "code",
    excerpt: "Portals, dashboards and internal tools built for workflows that packaged software cannot handle.",
    headline: "Custom business software for processes that make you different",
    lede: "For businesses with workflows that packaged software cannot support without costly workarounds — and that want to own the system they depend on.",
    seo: {
      title: "Custom Business Software Solutions | Portals, Dashboards & Tools",
      description:
        "Custom business software solutions from Keshar Tech — client portals, operations dashboards, booking systems and internal tools built for your workflows.",
    },
    overview: [
      "Every business has processes that are uniquely its own — the way it prices, approves, schedules or serves customers. When those processes are forced into generic software, teams create workarounds that are slow and error-prone.",
      "Custom software turns your process into a system: one that reflects your rules, connects to your other tools and grows with you. We build it in phases so you see value early and can steer the roadmap with real feedback.",
    ],
    audiences: [
      { title: "Operations-heavy businesses", text: "Scheduling, dispatch, job tracking and field service." },
      { title: "Service providers with clients", text: "Client portals for documents, requests, status and communication." },
      { title: "Founders with a product idea", text: "A first version of a new software product or SaaS." },
      { title: "Teams replacing spreadsheets", text: "Structured tools that replace fragile, shared spreadsheets." },
    ],
    modules: [
      { title: "User roles and permissions", text: "Access designed around your organisation." },
      { title: "Workflow engine", text: "Statuses, approvals, assignments and notifications." },
      { title: "Dashboards", text: "Live operational views and reports." },
      { title: "Client portal", text: "A secure space for customers to self-serve." },
      { title: "Integrations", text: "Payments, messaging, accounting and existing tools." },
      { title: "Admin controls", text: "Settings and master data managed without developers." },
    ],
    useCases: [
      "Client portal for document collection and status updates",
      "Internal operations dashboard",
      "Booking and scheduling system",
      "SaaS product MVP",
    ],
    services: ["custom-software-development", "web-application-development", "saas-development", "ui-ux-design"],
    projects: ["prime-homes-crm", "custom-erp-solutions"],
    faqs: [
      { question: "How do we know if custom software is worth it?", answer: "We look at the time and cost of current workarounds, licence spend and growth plans. If an existing product is a better fit, we will say so." },
      { question: "Do we own the software?", answer: "Yes. Intellectual property and code ownership terms are defined clearly in the project agreement." },
    ],
  },
  {
    slug: "automation-ai",
    title: "Automation & AI",
    icon: "sparkles",
    excerpt: "Workflow automation and practical AI that remove repetitive work across your existing tools.",
    headline: "Automation and AI that give your team hours back every week",
    lede: "For businesses where people spend too much time moving data, sending reminders and answering the same questions — and want practical, low-risk automation.",
    seo: {
      title: "Automation & AI Solutions for Business | Workflow Automation & AI",
      description:
        "Automation and AI solutions from Keshar Tech — workflow automation, AI assistants, document processing and smart routing built around your existing tools.",
    },
    overview: [
      "Automation handles the predictable: moving data between systems, sending reminders, generating documents. AI handles the slightly less predictable: reading documents, understanding requests, drafting replies and answering questions from your own information.",
      "Together they remove a large share of repetitive work. We start with the tasks that consume the most time, prove the value on a small scale and then extend — always with monitoring and human review where accuracy matters.",
    ],
    audiences: [
      { title: "Sales and support teams", text: "Lead routing, instant acknowledgements and suggested replies." },
      { title: "Finance and admin teams", text: "Invoice extraction, reconciliation prompts and scheduled reports." },
      { title: "Operations teams", text: "Status updates, notifications and hand-offs between departments." },
      { title: "Leadership", text: "Automated summaries of the numbers that matter." },
    ],
    modules: [
      { title: "Workflow automation", text: "Event- and schedule-driven flows across your apps." },
      { title: "AI assistants", text: "Answers grounded in your documents and data." },
      { title: "Document processing", text: "Structured data from PDFs, forms and emails." },
      { title: "Smart routing", text: "Classify and assign incoming requests automatically." },
      { title: "Notifications", text: "Timely alerts by email or messaging." },
      { title: "Monitoring and review", text: "Logs, alerts and human approval steps." },
    ],
    useCases: [
      "Website enquiry → CRM → instant acknowledgement → sales alert",
      "Invoice PDF → extracted fields → accounting entry for review",
      "Internal knowledge assistant for staff policies and product data",
      "Weekly management report generated automatically",
    ],
    services: ["business-automation", "ai-solutions", "api-integrations", "crm-development"],
    projects: ["prime-homes-crm"],
    faqs: [
      { question: "Where should we start with automation?", answer: "With a task that is frequent, rule-based and time-consuming. A process audit quickly identifies the best candidates." },
      { question: "Do we need AI, or just automation?", answer: "Many workflows only need rule-based automation. AI adds value when tasks involve reading, understanding or writing language. We recommend the simplest approach that works." },
    ],
  },
];

const bySlug = new Map(solutions.map((s) => [s.slug, s]));
export const getSolution = (slug: string) => bySlug.get(slug);

/** The four solutions highlighted on the homepage. */
export const featuredSolutionSlugs = ["business-websites", "crm-sales-systems", "custom-business-software", "automation-ai"];
export const getSolutions = (slugs: string[]) =>
  slugs.map((s) => bySlug.get(s)).filter((s): s is Solution => Boolean(s));
