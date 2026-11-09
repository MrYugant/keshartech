import { siteConfig } from "@/config/site";
import { leaders, networkDisciplines } from "@/data/team";
import { buildMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContentGrid } from "@/components/sections/content-grid";
import { LeaderCard } from "@/components/team/leader-card";
import { NetworkGrid } from "@/components/team/network-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Team — Leadership & Specialist Network",
  description: `Meet Keshar Tech's leadership — Yugant Patel (CEO) and Kevin Patel (CTO) — and our extended network of ${siteConfig.networkSize}+ independent specialists.`,
  path: "/team",
});

const model = [
  { title: "Leadership-led", text: "Our CEO and CTO set direction and remain directly involved in business and technical decisions." },
  { title: "Specialists matched to the work", text: "Independent specialists join a project when their expertise is needed, so you get depth without paying for idle capacity." },
  { title: "One accountable team", text: "However many people contribute, you have one point of contact and one team responsible for the result." },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Team"
        title="Hands-on leadership. Specialist depth."
        highlight={["depth."]}
        description={`Keshar Tech is led by its founders and supported by an extended network of ${siteConfig.networkSize}+ independent specialists across engineering, design, marketing, infrastructure and automation.`}
        breadcrumbs={[{ name: "Team", path: "/team" }]}
      />

      <Section labelledBy="leadership" className="pt-0!">
        <h2 id="leadership" className="sr-only">
          Leadership
        </h2>
        <div className="grid gap-14 md:grid-cols-2 lg:gap-20">
          {leaders.map((l, i) => (
            <LeaderCard key={l.slug} leader={l} index={i} detailed />
          ))}
        </div>
      </Section>

      <Section tone="dark" labelledBy="network">
        <SectionHeader
          id="network"
          eyebrow="Extended network"
          title={`${siteConfig.networkSize}+ independent specialists.`}
          description="These are independent professionals we collaborate with on a project basis — not permanent employees. Each is engaged for the specific skills a project requires and works under our leadership and quality standards."
        />
        <NetworkGrid disciplines={networkDisciplines} />
      </Section>

      <Section labelledBy="model">
        <SectionHeader
          id="model"
          eyebrow="How we're organised"
          title="Built to scale with your project."
          action={
            <ButtonLink href="/process" variant="secondary" arrow>
              See our process
            </ButtonLink>
          }
        />
        <ContentGrid items={model} variant="numbered" />
      </Section>

      <CtaBanner eyebrow="Work with us" title="Let's put the right team on your project." />
    </>
  );
}
