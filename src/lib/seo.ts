import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import type { Faq, Project, Service } from "@/types/content";

interface PageSeo {
  title: string;
  description: string;
  /** Route path, e.g. "/services/web-development". Used for the canonical URL. */
  path: string;
  /** Use the title as-is instead of appending the brand template. */
  absoluteTitle?: boolean;
  image?: { url: string; alt: string };
  type?: "website" | "article";
  noIndex?: boolean;
}

/** One function builds every page's metadata, so canonical/OG/Twitter stay consistent. */
export function buildMetadata({
  title,
  description,
  path,
  absoluteTitle,
  image,
  type = "website",
  noIndex,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const images = image ? [{ url: image.url, alt: image.alt, width: 1200, height: 630 }] : undefined;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title: fullTitle,
      description,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      ...(images && { images: images.map((i) => i.url) }),
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

/* ------------------------------------------------------------------ */
/*  JSON-LD builders — only verified facts are emitted                 */
/* ------------------------------------------------------------------ */

const ORG_ID = `${siteConfig.url}/#organization`;

function sameAs() {
  return Object.values(siteConfig.social).filter(Boolean);
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl("/images/brand/logo-light.svg"),
    image: absoluteUrl("/opengraph-image"),
    slogan: siteConfig.tagline,
    description: siteConfig.description,
    email: siteConfig.email,
    ...(siteConfig.phone && { telephone: siteConfig.phone }),
    ...(sameAs().length > 0 && { sameAs: sameAs() }),
    founder: [
      { "@type": "Person", name: "Yugant Patel", jobTitle: "Chief Executive Officer" },
      { "@type": "Person", name: "Kevin Patel", jobTitle: "Chief Technology Officer" },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: { "@id": ORG_ID },
    inLanguage: "en",
  };
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absoluteUrl(c.path),
    })),
  };
}

export function serviceSchema(service: Pick<Service, "title" | "seo" | "slug">, basePath = "/services") {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    description: service.seo.description,
    url: absoluteUrl(`${basePath}/${service.slug}`),
    provider: { "@id": ORG_ID },
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seo.description,
    url: absoluteUrl(`/work/${project.slug}`),
    image: absoluteUrl(project.image),
    creator: { "@id": ORG_ID },
    ...(project.url && { sameAs: project.url }),
  };
}

/**
 * FAQPage markup reflects visible on-page FAQs. Google limits FAQ rich results
 * to certain site types, so this is descriptive markup, not a rich-result promise.
 */
export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
