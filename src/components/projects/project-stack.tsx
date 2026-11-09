"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export interface StackProject {
  slug: string;
  index: string;
  title: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

function StackCard({ project, i, total, progress }: { project: StackProject; i: number; total: number; progress: MotionValue<number> }) {
  const reduce = useReducedMotion();
  const start = i / total;
  const scale = useTransform(progress, [start, 1], [1, reduce ? 1 : 1 - (total - 1 - i) * 0.045]);
  const imageScale = useTransform(progress, [start - 0.25, start + 0.25], reduce ? [1, 1] : [1.1, 1]);

  return (
    <div className="sticky h-[min(86svh,40rem)] pb-6" style={{ top: `calc(var(--header-h) + 1.5rem + ${i * 1.25}rem)` }}>
      <motion.article
        style={{ scale, transformOrigin: "50% 0%" }}
        className="tone-dark group relative grid h-full grid-rows-[auto_minmax(0,1fr)] overflow-hidden md:grid-rows-1 rounded-[var(--radius-panel)] border border-line shadow-[0_-20px_60px_-30px_rgb(0_0_0/0.5)] md:grid-cols-12"
      >
        <div className="relative z-10 flex flex-col justify-between gap-6 p-7 sm:p-10 md:col-span-5 lg:p-12">
          <div>
            <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.14em] text-fg-subtle">
              <span className="text-accent-text">{project.index}</span>
              <span aria-hidden="true" className="h-px w-8 bg-line-strong" />
              <span>{project.category}</span>
            </div>
            <h3 className="mt-5 text-h2 text-fg md:mt-6">{project.title}</h3>
            <p className="mt-5 line-clamp-3 max-w-md leading-relaxed text-fg-muted md:line-clamp-none">{project.excerpt}</p>
          </div>
          <div className="grid gap-6">
            {project.tags.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t} className="rounded-full border border-line px-3 py-1 text-xs text-fg-muted">
                    {t}
                  </li>
                ))}
              </ul>
            )}
            <Link
              href={`/work/${project.slug}`}
              className="inline-flex items-center gap-2 self-start font-medium text-fg after:absolute after:inset-0 after:content-[''] hover:text-accent-text"
            >
              View case study
              <span className="grid size-9 place-items-center rounded-full bg-accent text-accent-fg transition-transform duration-500 ease-[var(--ease-out)] group-hover:rotate-45">
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative min-h-48 overflow-hidden bg-[var(--kt-white)] md:col-span-7 md:m-4 md:ml-0 md:rounded-[1.5rem]">
          <motion.div style={{ scale: imageScale }} className="absolute inset-0">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-contain object-center transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.03]"
            />
          </motion.div>
        </div>
      </motion.article>
    </div>
  );
}

/** Portfolio cards that pin and stack while the next one scrolls over. */
export function ProjectStack({ projects }: { projects: StackProject[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  return (
    <div ref={ref} className="relative">
      {projects.map((p, i) => (
        <StackCard key={p.slug} project={p} i={i} total={projects.length} progress={scrollYProgress} />
      ))}
    </div>
  );
}
