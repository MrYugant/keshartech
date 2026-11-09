import { siteConfig } from "@/config/site";
import { leaders, networkDisciplines } from "@/data/team";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { LeaderCard } from "@/components/team/leader-card";
import { NetworkGrid } from "@/components/team/network-grid";

export function TeamPreview() {
  return (
    <Section tone="dark" labelledBy="team-title">
      <SectionHeader
        id="team-title"
        eyebrow="Leadership"
        title="The people accountable for your project."
        description={`Our CEO and CTO lead every engagement directly, supported by an extended network of ${siteConfig.networkSize}+ independent specialists brought in for the skills your project needs.`}
        action={
          <ButtonLink href="/team" variant="secondary" arrow>
            Meet the team
          </ButtonLink>
        }
      />
      <div className="grid gap-10 sm:grid-cols-2 lg:gap-16">
        {leaders.map((l, i) => (
          <LeaderCard key={l.slug} leader={l} index={i} />
        ))}
      </div>
      <div className="mt-20 grid gap-10 lg:grid-cols-12 lg:items-start">
        <div data-reveal className="lg:col-span-4">
          <p className="text-display text-orange">{siteConfig.networkSize}+</p>
          <p className="mt-4 max-w-xs text-fg-muted">
            independent specialists across engineering, design, marketing, infrastructure and automation.
          </p>
        </div>
        <div className="lg:col-span-8">
          <NetworkGrid disciplines={networkDisciplines} compact />
        </div>
      </div>
    </Section>
  );
}
