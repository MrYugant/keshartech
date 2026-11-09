import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/types/content";
import { getRelatedProjects } from "@/data/projects";
import { getServices } from "@/data/services";
import { displayUrl, stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ContentGrid } from "@/components/sections/content-grid";
import { RelatedServices } from "@/components/sections/related-links";
import { ProjectCard } from "@/components/projects/project-card";
import { CtaBanner } from "@/components/sections/cta-banner";


function MetaRow({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4 text-sm">
      <dt className="text-fg-subtle">{label}</dt>
      <dd className="text-fg">{children}</dd>
    </div>
  );
}

/** Shared template for every /work/[slug] case study. */
export function ProjectDetail({ project }: { project: Project }) {
  const services = getServices(project.services);
  const related = getRelatedProjects(project.slug);

  return (
    <>
      <PageHero
        eyebrow={`Case study ${project.index} · ${project.category}`}
        title={project.title}
        description={project.excerpt}
        breadcrumbs={[
          { name: "Work", path: "/work" },
          { name: project.title, path: `/work/${project.slug}` },
        ]}
        actions={
          project.url ? (
            <ButtonLink href={project.url} size="lg" arrow>
              Visit live project
            </ButtonLink>
          ) : (
            <ButtonLink href="/contact" size="lg" arrow>
              Discuss a similar project
            </ButtonLink>
          )
        }
        aside={
          <dl className="border-t border-line">
            <MetaRow label="Client">{project.client}</MetaRow>
            <MetaRow label="Category">{project.category}</MetaRow>
            <MetaRow label="Services">
              <ul className="grid gap-1">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="hover:text-accent-text">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </MetaRow>
            {project.technologies.length > 0 && <MetaRow label="Stack">{project.technologies.join(", ")}</MetaRow>}
            {project.url && (
              <MetaRow label="Live">
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-accent-text">
                  {displayUrl(project.url)} ↗
                </a>
              </MetaRow>
            )}
          </dl>
        }
      />

      <div className="shell">
        <div data-reveal="mask" className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-panel)] border border-line bg-bg-muted">
          <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1440px) 1340px, 100vw" className="object-cover" />
        </div>
      </div>

      <Section labelledBy="brief">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p data-reveal className="text-eyebrow text-accent-text">The requirement</p>
            <h2 id="brief" data-reveal style={stagger(1)} className="mt-5 text-h3 text-fg">
              What the business needed
            </h2>
            {project.requirement.map((p, i) => (
              <p key={i} data-reveal style={stagger(i + 2)} className="mt-5 text-lg leading-relaxed text-fg-muted">
                {p}
              </p>
            ))}
          </div>
          <div>
            <p data-reveal className="text-eyebrow text-accent-text">The solution</p>
            <h2 data-reveal style={stagger(1)} className="mt-5 text-h3 text-fg">
              What we built
            </h2>
            {project.solution.map((p, i) => (
              <p key={i} data-reveal style={stagger(i + 2)} className="mt-5 text-lg leading-relaxed text-fg-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted" labelledBy="features">
        <SectionHeader id="features" eyebrow="Features" title="Key capabilities" />
        <ContentGrid items={project.features} />
      </Section>

      <RelatedServices slugs={project.services} title="Services used on this project" />

      <Section tone="alt" labelledBy="more-work">
        <SectionHeader
          id="more-work"
          eyebrow="More work"
          title="Related projects"
          action={
            <ButtonLink href="/work" variant="secondary" arrow>
              All projects
            </ButtonLink>
          }
        />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          {related.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </Section>

      <CtaBanner title="Want something similar? Let's build it." />
    </>
  );
}
