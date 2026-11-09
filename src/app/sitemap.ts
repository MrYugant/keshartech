import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";
import { projects } from "@/data/projects";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";

type Entry = MetadataRoute.Sitemap[number];

const page = (path: string, priority: number, changeFrequency: Entry["changeFrequency"] = "monthly"): Entry => ({
  url: absoluteUrl(path),
  lastModified: new Date(siteConfig.contentUpdated),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9),
    page("/solutions", 0.9),
    page("/work", 0.8),
    page("/about", 0.7),
    page("/team", 0.6),
    page("/process", 0.6),
    page("/technologies", 0.6),
    page("/contact", 0.8),
    ...services.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...solutions.map((s) => page(`/solutions/${s.slug}`, 0.8)),
    ...projects.map((p) => page(`/work/${p.slug}`, 0.7)),
    page("/privacy-policy", 0.2, "yearly"),
    page("/terms-and-conditions", 0.2, "yearly"),
  ];
}
