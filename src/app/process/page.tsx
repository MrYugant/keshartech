import { processPhases, processPrinciples } from "@/data/company";
import { buildMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/button";
import { FaqList } from "@/components/ui/faq-list";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContentGrid } from "@/components/sections/content-grid";
import { ProcessDetail, ProcessOverview } from "@/components/sections/process-steps";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Our Process — Discover, Design, Build, Grow",
  description:
    "How Keshar Tech delivers software and digital projects: discovery, design, milestone-based development, launch and ongoing growth support.",
  path: "/process",
});

const faqs = [
  { question: "How do projects start?", answer: "With a conversation. We learn about your business and goals, then share a written scope, phasing and estimate before any work begins." },
  { question: "How involved do we need to be?", answer: "Most involvement happens during discovery and design reviews. During development we ask for milestone feedback and content, and we keep you updated throughout." },
  { question: "Can we change requirements during the project?", answer: "Yes. Changes are normal. We assess the impact on scope, cost and timeline and agree adjustments with you before proceeding." },
  { question: "What happens after launch?", answer: "We provide onboarding and documentation, and offer maintenance and support plans covering updates, monitoring and improvements." },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="From first conversation to long after launch."
        highlight={["launch."]}
        description="A clear, four-phase process that keeps you informed, keeps risk low and makes sure what we build is what your business needs."
        breadcrumbs={[{ name: "Process", path: "/process" }]}
        actions={
          <ButtonLink href="/contact" size="lg" arrow>
            Start with discovery
          </ButtonLink>
        }
      />

      <Section className="pt-0!" labelledBy="phases-overview">
        <h2 id="phases-overview" className="sr-only">
          Process overview
        </h2>
        <ProcessOverview phases={processPhases} />
      </Section>

      <Section tone="muted" labelledBy="phases">
        <SectionHeader id="phases" eyebrow="In detail" title="What happens in each phase" />
        <ProcessDetail phases={processPhases} />
      </Section>

      <Section labelledBy="principles">
        <SectionHeader id="principles" eyebrow="Principles" title="How we keep projects on track" />
        <ContentGrid items={processPrinciples} variant="check" columns={2} />
      </Section>

      <Section tone="muted" labelledBy="faq">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader id="faq" eyebrow="FAQ" title="Process questions" align="stack" />
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
