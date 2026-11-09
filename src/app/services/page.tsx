import { getServicesByCategory, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceRow } from "@/components/services/service-row";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Services — Web, Software, CRM, ERP, AI & Digital Marketing",
  description:
    "Explore Keshar Tech services: website and web app development, custom software, SaaS, CRM and ERP, mobile apps, UI/UX, branding, AI, automation, SEO, ads and cloud.",
  path: "/services",
});

export default function ServicesPage() {
  let counter = 0;
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every capability your business needs, under one roof."
        highlight={["roof."]}
        description={`${services.length} services across building, systems, design, growth and operations — delivered by one accountable team that understands how they fit together.`}
        breadcrumbs={[{ name: "Services", path: "/services" }]}
        actions={
          <ButtonLink href="/contact" size="lg" arrow>
            Start a Project
          </ButtonLink>
        }
      />

      {getServicesByCategory().map((group, gi) => (
        <Section key={group.key} tone={gi % 2 ? "muted" : "default"} labelledBy={`cat-${group.key}`} className="py-[clamp(4rem,8vw,7rem)]">
          <div className="grid gap-10 lg:grid-cols-12">
            <header className="lg:col-span-3">
              <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
                <p data-reveal className="font-mono text-sm text-accent-text">
                  {String(gi + 1).padStart(2, "0")}
                </p>
                <h2 id={`cat-${group.key}`} data-reveal style={stagger(1)} className="mt-4 text-h2 text-fg">
                  {group.label}
                </h2>
                <p data-reveal style={stagger(2)} className="mt-3 text-fg-muted">
                  {group.description}
                </p>
              </div>
            </header>
            <ul className="border-t border-line lg:col-span-9">
              {group.services.map((s) => (
                <ServiceRow key={s.slug} service={s} index={counter++} />
              ))}
            </ul>
          </div>
        </Section>
      ))}

      <CtaBanner
        eyebrow="Not sure what you need?"
        title="Tell us the problem. We'll map the solution."
        text="Many projects combine several services. Share what you're trying to achieve and we'll recommend the simplest effective approach."
      />
    </>
  );
}
