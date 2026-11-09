import { solutions } from "@/data/solutions";
import { buildMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { LinkCard } from "@/components/services/service-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Business Solutions — Websites, CRM, ERP, Custom Software & AI",
  description:
    "Keshar Tech solutions for business websites, CRM and sales systems, ERP and operations, custom business software, and automation and AI.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Solutions shaped around business outcomes."
        highlight={["outcomes."]}
        description="Start with the result you need — more enquiries, a tighter sales process, connected operations or less manual work. We combine the right services to get you there."
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
        actions={
          <ButtonLink href="/contact" size="lg" arrow>
            Discuss your goals
          </ButtonLink>
        }
      />
      <Section tone="muted" labelledBy="solutions-list">
        <h2 id="solutions-list" className="sr-only">
          All solutions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <LinkCard
              key={s.slug}
              href={`/solutions/${s.slug}`}
              icon={s.icon}
              title={s.title}
              text={s.lede}
              eyebrow={`Solution ${String(i + 1).padStart(2, "0")}`}
              index={i}
              className={i === 0 ? "lg:col-span-2" : undefined}
            />
          ))}
        </div>
      </Section>
      <CtaBanner />
    </>
  );
}
