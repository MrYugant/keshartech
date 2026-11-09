import { featuredSolutionSlugs, getSolutions } from "@/data/solutions";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { LinkCard } from "@/components/services/service-card";

export function SolutionsPreview() {
  return (
    <Section labelledBy="solutions-title">
      <SectionHeader
        id="solutions-title"
        eyebrow="Solutions"
        title="Start from the outcome you need."
        description="Packaged around common business goals — each combines the right services into one clear engagement."
        action={
          <ButtonLink href="/solutions" variant="secondary" arrow>
            All solutions
          </ButtonLink>
        }
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {getSolutions(featuredSolutionSlugs).map((s, i) => (
          <LinkCard key={s.slug} href={`/solutions/${s.slug}`} icon={s.icon} title={s.title} text={s.excerpt} index={i} eyebrow={`0${i + 1}`} />
        ))}
      </div>
    </Section>
  );
}
