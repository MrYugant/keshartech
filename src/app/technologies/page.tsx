import { techCategories, getTechnologiesByCategory } from "@/data/technologies";
import { buildMetadata } from "@/lib/seo";
import { stagger } from "@/lib/utils";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContentGrid } from "@/components/sections/content-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Technologies — Next.js, React, Supabase, Odoo, AI & Cloud",
  description:
    "The technologies Keshar Tech uses to build fast, secure, maintainable software: Next.js, React, TypeScript, PostgreSQL, Supabase, Odoo, Python, AI APIs and more.",
  path: "/technologies",
});

const principles = [
  { title: "Proven over trendy", text: "We choose mature, well-supported technologies with strong communities and long-term futures." },
  { title: "Right tool for the job", text: "A marketing website, a CRM and an ERP have different needs. We match the stack to the problem." },
  { title: "Built to hand over", text: "Typed, documented code on mainstream tools means you are never locked into a single developer." },
  { title: "Performance and security first", text: "Server rendering, optimised assets and secure defaults are part of every build." },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A modern stack, chosen for the long run."
        highlight={["long", "run."]}
        description="The frameworks, platforms and tools we use to build software that is fast, secure and easy to maintain — and how we decide what to use."
        breadcrumbs={[{ name: "Technologies", path: "/technologies" }]}
      />

      <Section className="pt-0!" labelledBy="principles">
        <SectionHeader id="principles" eyebrow="How we choose" title="Technology decisions, made deliberately." />
        <ContentGrid items={principles} variant="numbered" columns={2} />
      </Section>

      <Section tone="muted" labelledBy="stack">
        <SectionHeader id="stack" eyebrow="The stack" title="What we build with" />
        <div className="grid gap-16">
          {techCategories.map((cat, ci) => (
            <section key={cat} aria-labelledby={`tech-${ci}`} className="grid gap-6 border-t border-line pt-8 lg:grid-cols-12">
              <h3 id={`tech-${ci}`} data-reveal className="text-h3 text-fg lg:col-span-3">
                {cat}
              </h3>
              <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-9 xl:grid-cols-3">
                {getTechnologiesByCategory(cat).map((t, i) => (
                  <li key={t.name} data-reveal style={stagger(i)} className="spotlight rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
                    <p className="text-lg font-semibold tracking-tight text-fg">{t.name}</p>
                    <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <CtaBanner eyebrow="Have a stack already?" title="We'll work with what you have." text="Whether you're starting fresh or extending an existing system, we'll recommend the approach that fits your goals and constraints." />
    </>
  );
}
