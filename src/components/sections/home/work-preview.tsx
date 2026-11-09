import { projects } from "@/data/projects";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProjectStack, type StackProject } from "@/components/projects/project-stack";

export function toStackProjects(): StackProject[] {
  return projects.map((p) => ({
    slug: p.slug,
    index: p.index,
    title: p.title,
    category: p.category,
    excerpt: p.excerpt,
    image: p.image,
    imageAlt: p.imageAlt,
    tags: p.technologies.length > 0 ? p.technologies.slice(0, 4) : ["Website", "UI/UX", "SEO-ready"],
  }));
}

export function WorkPreview() {
  return (
    <Section tone="alt" labelledBy="work-title">
      <SectionHeader
        id="work-title"
        eyebrow="Selected work"
        title="Real systems, running real businesses."
        description="A selection of platforms and websites we have designed and built for our clients."
        action={
          <ButtonLink href="/work" arrow>
            View all projects
          </ButtonLink>
        }
      />
      <ProjectStack projects={toStackProjects()} />
    </Section>
  );
}
