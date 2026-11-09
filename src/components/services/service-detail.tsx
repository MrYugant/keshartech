import type { Service } from "@/types/content";
import { serviceCategories } from "@/data/services";
import { getTechnologies } from "@/data/technologies";
import { inSentence, stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import { Icon } from "@/components/ui/icon";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ProseSplit } from "@/components/sections/prose-split";
import { ContentGrid } from "@/components/sections/content-grid";
import { RelatedProjects, RelatedServices } from "@/components/sections/related-links";
import { CtaBanner } from "@/components/sections/cta-banner";

/** Shared template for every /services/[slug] page — all content comes from data/services.ts. */
export function ServiceDetail({ service }: { service: Service }) {
  const techs = getTechnologies(service.technologies);
  const category = serviceCategories[service.category];

  return (
    <>
      <PageHero
        eyebrow={`${category.label} · ${service.title}`}
        title={service.headline}
        description={service.lede}
        breadcrumbs={[
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
        actions={
          <>
            <ButtonLink href={`/contact?service=${service.slug}`} size="lg" arrow>
              Discuss your project
            </ButtonLink>
            <ButtonLink href="#capabilities" size="lg" variant="secondary">
              What&apos;s included
            </ButtonLink>
          </>
        }
        aside={
          <div className="rounded-[var(--radius-card)] border border-line bg-surface/80 p-7 backdrop-blur">
            <span className="grid size-14 place-items-center rounded-2xl bg-accent text-accent-fg">
              <Icon name={service.icon} className="size-6" />
            </span>
            <p className="mt-8 text-eyebrow text-fg-subtle">Built with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {techs.slice(0, 6).map((t) => (
                <li key={t.name} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-fg-muted">
                  {t.name}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <Section labelledBy="overview">
        <ProseSplit id="overview" eyebrow="Overview" title={`What ${inSentence(service.title)} means for your business`} paragraphs={service.overview} />
      </Section>

      <Section tone="muted" labelledBy="problems">
        <SectionHeader id="problems" eyebrow="Problems we solve" title="Sound familiar?" description={`The challenges that usually bring businesses to us for ${inSentence(service.title)}.`} />
        <ContentGrid items={service.problems} variant="numbered" />
      </Section>

      <Section id="capabilities" labelledBy="capabilities-title">
        <SectionHeader id="capabilities-title" eyebrow="Capabilities" title="What's included" description="Core capabilities we bring to every engagement, scoped to what your business actually needs." />
        <ContentGrid items={service.capabilities} />
      </Section>

      <Section tone="dark" labelledBy="benefits">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <SectionHeader id="benefits" eyebrow="Business benefits" title="Why it's worth doing properly" align="stack" />
            <ContentGrid items={service.benefits} variant="check" columns={2} className="md:grid-cols-1" />
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p data-reveal className="text-eyebrow text-fg-subtle">Relevant technologies</p>
            <ul className="mt-6 border-t border-line">
              {techs.map((t, i) => (
                <li key={t.name} data-reveal style={stagger(i)} className="border-b border-line py-4">
                  <p className="font-semibold text-fg">{t.name}</p>
                  <p className="mt-1 text-sm text-fg-muted">{t.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section labelledBy="delivery">
        <SectionHeader
          id="delivery"
          eyebrow="Delivery"
          title={`How we deliver ${inSentence(service.shortTitle)}`}
          description="Every project follows our Discover → Design → Build → Grow process. Here is how that looks for this service."
          action={
            <ButtonLink href="/process" variant="secondary" arrow>
              Our process
            </ButtonLink>
          }
        />
        <ol className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {service.delivery.map((step, i) => (
            <li key={step.title} data-reveal="fade" style={stagger(i)} className="bg-bg p-7 md:p-8">
              <span className="font-mono text-sm text-accent-text">Step {String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-xl font-semibold tracking-tight text-fg">{step.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Section>

      <RelatedProjects slugs={service.relatedProjects} tone="alt" />
      <RelatedServices slugs={service.relatedServices} />

      <Section tone="muted" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq" eyebrow="FAQ" title="Common questions" align="stack" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </Section>

      <CtaBanner title={`Let's talk about your ${inSentence(service.shortTitle)} project.`} />
    </>
  );
}
