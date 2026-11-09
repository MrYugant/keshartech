import { getTechnologiesByCategory } from "@/data/technologies";
import type { TechCategory } from "@/types/content";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { TechExplorer } from "@/components/sections/tech-explorer";

const featured: TechCategory[] = ["Frontend", "Backend", "Data", "Business Systems", "AI & Automation", "Cloud & DevOps"];

export function TechPreview() {
  const groups = featured.map((category) => ({ category, items: getTechnologiesByCategory(category) }));
  return (
    <Section tone="muted" labelledBy="tech-title">
      <SectionHeader
        id="tech-title"
        eyebrow="Technology"
        title="A modern stack, chosen for longevity."
        description="Proven, well-supported technologies that keep your software fast, secure and easy to maintain."
        action={
          <ButtonLink href="/technologies" variant="secondary" arrow>
            Explore technologies
          </ButtonLink>
        }
      />
      <TechExplorer groups={groups} />
    </Section>
  );
}
