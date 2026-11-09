import { siteConfig } from "@/config/site";
import { companyValues, strengths } from "@/data/company";
import { getServicesByCategory } from "@/data/services";
import { leaders } from "@/data/team";
import { buildMetadata } from "@/lib/seo";
import { stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ProseSplit } from "@/components/sections/prose-split";
import { ContentGrid } from "@/components/sections/content-grid";
import { LeaderCard } from "@/components/team/leader-card";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "About Keshar Tech — Technology Built Around Your Business",
  description:
    "Keshar Tech is a technology company helping businesses build, modernise, automate and grow with websites, software, CRM, ERP, AI and digital marketing.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="We build technology around the way you do business."
        highlight={["way"]}
        description={`${siteConfig.name} helps businesses build, modernise, automate and grow — with software and digital systems designed around how they actually work.`}
        breadcrumbs={[{ name: "About", path: "/about" }]}
        actions={
          <>
            <ButtonLink href="/contact" size="lg" arrow>
              Work with us
            </ButtonLink>
            <ButtonLink href="/team" size="lg" variant="secondary">
              Meet the team
            </ButtonLink>
          </>
        }
      />

      <Section labelledBy="who-we-are">
        <ProseSplit
          id="who-we-are"
          eyebrow="Who we are"
          title="A technology partner, not a template shop."
          paragraphs={[
            "Most businesses don't need more software. They need the right software — shaped around their customers, their team and the way they make decisions. That conviction is behind our tagline: technology built around your business.",
            `${siteConfig.name} designs and engineers websites, web applications, custom software, SaaS products, CRM and ERP systems, mobile apps, AI and automation. We also help businesses grow, through search engine optimisation, Google and Meta advertising and digital marketing.`,
            `Our founders lead every engagement directly. Around them is an extended network of ${siteConfig.networkSize}+ independent specialists, so each project gets the depth of expertise it needs — without the overhead of a large agency.`,
          ]}
        />
      </Section>

      <Section tone="dark" labelledBy="values">
        <SectionHeader id="values" eyebrow="What we value" title="Principles that shape every project." />
        <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {companyValues.map((v, i) => (
            <li key={v.title} data-reveal="fade" style={stagger(i)} className="bg-bg p-8">
              <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-h3 text-fg">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-fg-muted">{v.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section labelledBy="what-we-do">
        <SectionHeader
          id="what-we-do"
          eyebrow="What we do"
          title="Five ways we help businesses move forward."
          action={
            <ButtonLink href="/services" variant="secondary" arrow>
              All services
            </ButtonLink>
          }
        />
        <ol className="border-t border-line">
          {getServicesByCategory().map((g, i) => (
            <li key={g.key} data-reveal style={stagger(i)} className="grid gap-4 border-b border-line py-8 md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-sm text-accent-text md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-h3 text-fg md:col-span-3">{g.label}</h3>
              <p className="text-fg-muted md:col-span-8">{g.services.map((s) => s.title).join(" · ")}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="muted" labelledBy="leadership">
        <SectionHeader
          id="leadership"
          eyebrow="Leadership"
          title="Led by the people you'll actually work with."
          action={
            <ButtonLink href="/team" variant="secondary" arrow>
              Leadership & network
            </ButtonLink>
          }
        />
        <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
          {leaders.map((l, i) => (
            <LeaderCard key={l.slug} leader={l} index={i} />
          ))}
        </div>
      </Section>

      <Section labelledBy="why">
        <SectionHeader id="why" eyebrow={`Why ${siteConfig.name}`} title="What working with us looks like." />
        <ContentGrid items={strengths} variant="check" />
      </Section>

      <CtaBanner />
    </>
  );
}
