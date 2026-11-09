/**
 * Single source of truth for company information.
 * Anything about Keshar Tech that appears on more than one page lives here.
 *
 * EDITABLE PLACEHOLDERS: `phone` and `social` are intentionally empty until
 * confirmed. Components hide them automatically while they are empty.
 */
export const siteConfig = {
  name: "Keshar Tech",
  legalName: "Keshar Tech",
  tagline: "Technology Built Around Your Business.",
  url: "https://keshartech.com",
  locale: "en_IN",
  description:
    "Keshar Tech is a technology company that designs and builds websites, web applications, custom software, SaaS, CRM and ERP systems, mobile apps, AI and automation — and helps businesses grow with SEO and digital marketing.",
  shortDescription:
    "Websites, software, CRM, ERP, AI and digital growth — engineered around how your business actually works.",
  email: "hello@keshartech.com",
  /** E.164 format, e.g. "+919800000000". Leave empty until confirmed. */
  phone: "" as string,
  /** Full URLs. Leave empty until confirmed. */
  social: {
    linkedin: "" as string,
    instagram: "" as string,
    x: "" as string,
  },
  /** Size of the independent specialist network. */
  networkSize: 15,
  keywords: [
    "Keshar Tech",
    "website development company",
    "web application development",
    "custom software development",
    "SaaS development",
    "CRM development",
    "ERP development",
    "Odoo development",
    "mobile app development",
    "AI solutions",
    "business automation",
    "SEO services",
  ],
  legalUpdated: "2026-11-09",
  /** Bump when site content changes meaningfully; used for sitemap lastModified. */
  contentUpdated: "2026-11-09",
} as const;

export type SiteConfig = typeof siteConfig;

export const absoluteUrl = (path = "/") => new URL(path, siteConfig.url).toString();

export const mailto = (subject?: string) =>
  `mailto:${siteConfig.email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`;
