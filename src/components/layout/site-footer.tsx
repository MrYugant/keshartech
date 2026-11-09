import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companyLinks, legalLinks } from "@/config/navigation";
import { mailto, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { solutions } from "@/data/solutions";
import { Logo } from "@/components/ui/logo";

const columns = [
  { title: "Services", links: services.slice(0, 8).map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}` })).concat({ label: "All services →", href: "/services" }) },
  { title: "Solutions", links: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}` })) },
  { title: "Company", links: [...companyLinks.map(({ label, href }) => ({ label, href })), { label: "Work", href: "/work" }, { label: "Contact", href: "/contact" }] },
];

const socialLinks = (Object.entries(siteConfig.social) as [string, string][]).filter(([, url]) => url);

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="tone-dark relative overflow-hidden border-t border-line">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-[var(--glow)] blur-3xl" />
      <div className="shell relative pb-10 pt-20 md:pt-28">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo variant="dark" withTagline className="h-20 sm:h-24" />
            <p className="mt-8 max-w-sm text-fg-muted">{siteConfig.shortDescription}</p>
            <a
              href={mailto()}
              className="group mt-8 inline-flex items-center gap-2 text-xl font-medium tracking-tight text-fg transition-colors hover:text-accent-text"
            >
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            {siteConfig.phone && (
              <a href={`tel:${siteConfig.phone}`} className="mt-3 block text-fg-muted hover:text-fg">
                {siteConfig.phone}
              </a>
            )}
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8 lg:pl-12">
            {columns.map((col) => (
              <div key={col.title}>
                <h2 className="mb-5 text-eyebrow text-fg-subtle">{col.title}</h2>
                <ul className="grid gap-3">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.95rem] text-fg-muted transition-colors hover:text-fg">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <p aria-hidden="true" className="mt-20 select-none whitespace-nowrap text-center text-[clamp(3rem,13.5vw,13rem)] font-bold leading-none tracking-[-0.06em] text-fg/[0.06]">
          KESHAR TECH
        </p>

        <div className="mt-8 flex flex-col gap-6 border-t border-line pt-8 text-sm text-fg-subtle md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.legalName}. {siteConfig.tagline}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {socialLinks.map(([name, url]) => (
              <li key={name}>
                <a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-fg">
                  {name}
                </a>
              </li>
            ))}
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-fg">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/sitemap.xml" className="hover:text-fg" prefetch={false}>
                Sitemap
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
