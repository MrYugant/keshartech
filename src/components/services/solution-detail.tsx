import { ArrowRight } from "lucide-react";
import type { Solution } from "@/types/content";
import { stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ProseSplit } from "@/components/sections/prose-split";
import { ContentGrid } from "@/components/sections/content-grid";
import { RelatedProjects, RelatedServices } from "@/components/sections/related-links";
import { CtaBanner } from "@/components/sections/cta-banner";

/** Shared template for every /solutions/[slug] page. */
export function SolutionDetail({ solution }: { solution: Solution }) {
  return (
    <>
      <PageHero
        eyebrow={`Solution · ${solution.title}`}
        title={solution.headline}
        description={solution.lede}
        breadcrumbs={[
          { name: "Solutions", path: "/solutions" },
          { name: solution.title, path: `/solutions/${solution.slug}` },
        ]}
        actions={
          <>
            <ButtonLink href="/contact" size="lg" arrow>
              Discuss this solution
            </ButtonLink>
            <ButtonLink href="#modules" size="lg" variant="secondary">
              What&apos;s included
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="overview">
        <ProseSplit id="overview" eyebrow="Overview" title="How this solution helps" paragraphs={solution.overview} />
      </Section>

      <Section tone="muted" labelledBy="audiences">
        <SectionHeader id="audiences" eyebrow="Who it's for" title="Built for businesses like yours" description="How this solution adapts to different kinds of organisations." />
        <ContentGrid items={solution.audiences} columns={2} />
      </Section>

      <Section id="modules" labelledBy="modules-title">
        <SectionHeader id="modules-title" eyebrow="What's included" title="The building blocks" description="A typical engagement includes the following — scoped to your needs during discovery." />
        <ContentGrid items={solution.modules} variant="numbered" columns={2} />
      </Section>

      <Section tone="dark" labelledBy="use-cases">
        <SectionHeader id="use-cases" eyebrow="Use cases" title="Where it makes a difference" align="stack" />
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2">
          {solution.useCases.map((u, i) => (
            <li key={u} data-reveal="fade" style={stagger(i)} className="flex items-start gap-4 bg-bg p-7 md:p-8">
              <ArrowRight aria-hidden="true" className="mt-1 size-5 shrink-0 text-accent-text" />
              <span className="text-lg text-fg">{u}</span>
            </li>
          ))}
        </ul>
      </Section>

      <RelatedServices slugs={solution.services} title="Services behind this solution" />
      <RelatedProjects slugs={solution.projects} tone="alt" />

      <Section tone="muted" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq" eyebrow="FAQ" title="Questions, answered" align="stack" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={solution.faqs} />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
