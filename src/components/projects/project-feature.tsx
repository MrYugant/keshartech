import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { getServices } from "@/data/services";
import { cn, displayUrl, stagger } from "@/lib/utils";
import { PillList } from "@/components/ui/pill";

/** Large alternating portfolio row used on /work. */
export function ProjectFeature({ project, reverse }: { project: Project; reverse?: boolean }) {
  const services = getServices(project.services).map((s) => s.shortTitle);
  return (
    <article className="group grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <Link
        href={`/work/${project.slug}`}
        aria-label={`${project.title} case study`}
        data-reveal="mask"
        className={cn("relative block aspect-[16/10] overflow-hidden rounded-[var(--radius-panel)] border border-line bg-bg-muted lg:col-span-7", reverse && "lg:order-2")}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="object-cover transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.04]"
        />
      </Link>
      <div className="lg:col-span-5">
        <p data-reveal className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
          <span className="text-accent-text">{project.index}</span> · {project.category}
        </p>
        <h2 data-reveal style={stagger(1)} className="mt-5 text-h2 text-fg">
          <Link href={`/work/${project.slug}`} className="transition-colors hover:text-accent-text">
            {project.title}
          </Link>
        </h2>
        <p data-reveal style={stagger(2)} className="mt-5 text-lead text-fg-muted">
          {project.excerpt}
        </p>
        <div data-reveal style={stagger(3)} className="mt-8">
          <PillList items={project.technologies.length ? project.technologies : services} />
        </div>
        <div data-reveal style={stagger(4)} className="mt-10 flex flex-wrap items-center gap-6">
          <Link href={`/work/${project.slug}`} className="group/cta inline-flex items-center gap-3 font-medium text-fg hover:text-accent-text">
            View case study
            <span className="grid size-10 place-items-center rounded-full bg-accent text-accent-fg transition-transform duration-500 group-hover/cta:rotate-45">
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </span>
          </Link>
          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted underline-offset-4 hover:text-fg hover:underline">
              {displayUrl(project.url)} ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
