import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types/content";
import { cn, stagger } from "@/lib/utils";

/** Image-led portfolio card for grids and related-project sections. */
export function ProjectCard({ project, index = 0, size = "md" }: { project: Project; index?: number; size?: "md" | "lg" }) {
  return (
    <article data-reveal style={stagger(index)} className="group relative">
      <div
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-panel)] border border-line bg-bg-muted",
          size === "lg" ? "aspect-[16/10]" : "aspect-[16/11]",
        )}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes={size === "lg" ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.05]"
        />
        <span className="absolute right-5 top-5 grid size-12 place-items-center rounded-full bg-accent text-accent-fg opacity-0 transition-all duration-500 ease-[var(--ease-out)] group-hover:rotate-45 group-hover:opacity-100 max-md:opacity-100">
          <ArrowUpRight aria-hidden="true" className="size-5" />
        </span>
      </div>
      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
            <span className="text-accent-text">{project.index}</span> · {project.category}
          </p>
          <h3 className="mt-3 text-h3 text-fg">
            <Link href={`/work/${project.slug}`} className="after:absolute after:inset-0 after:content-['']">
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 max-w-lg leading-relaxed text-fg-muted">{project.excerpt}</p>
        </div>
      </div>
    </article>
  );
}
