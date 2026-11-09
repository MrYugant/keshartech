import { getServices } from "@/data/services";
import { getProjects } from "@/data/projects";
import { Section, SectionHeader, type Tone } from "@/components/ui/section";
import { LinkCard } from "@/components/services/service-card";
import { ProjectCard } from "@/components/projects/project-card";

/** Related services as cards — internal linking between service pages. */
export function RelatedServices({ slugs, title = "Related services", tone = "default" }: { slugs: string[]; title?: string; tone?: Tone }) {
  const items = getServices(slugs);
  if (items.length === 0) return null;
  return (
    <Section tone={tone} labelledBy="related-services">
      <SectionHeader id="related-services" eyebrow="Keep exploring" title={title} />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => (
          <LinkCard key={s.slug} href={`/services/${s.slug}`} icon={s.icon} title={s.title} text={s.excerpt} index={i} />
        ))}
      </div>
    </Section>
  );
}

/** Relevant portfolio projects. Renders nothing when none are linked. */
export function RelatedProjects({ slugs, title = "Related work", tone = "default" }: { slugs: string[]; title?: string; tone?: Tone }) {
  const items = getProjects(slugs);
  if (items.length === 0) return null;
  return (
    <Section tone={tone} labelledBy="related-projects">
      <SectionHeader id="related-projects" eyebrow="Case studies" title={title} />
      <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
        {items.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
