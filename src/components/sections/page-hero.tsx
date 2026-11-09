import type { ReactNode } from "react";
import type { Crumb } from "@/lib/seo";
import { cn, stagger } from "@/lib/utils";
import { AnimatedHeading } from "@/components/animations/animated-heading";
import { Breadcrumbs } from "@/components/navigation/breadcrumbs";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlockCluster } from "@/components/sections/block-cluster";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  highlight?: string[];
  description: ReactNode;
  breadcrumbs?: Crumb[];
  actions?: ReactNode;
  /** Optional content in the right column (desktop) — stats, links, an image. */
  aside?: ReactNode;
  className?: string;
}

/** Shared hero for every inner page: breadcrumbs, animated H1, lede and actions. */
export function PageHero({ eyebrow, title, highlight, description, breadcrumbs, actions, aside, className }: PageHeroProps) {
  return (
    <section className={cn("relative overflow-hidden bg-bg pb-16 pt-[calc(var(--header-h)+3rem)] md:pb-24 md:pt-[calc(var(--header-h)+5rem)]", className)}>
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_70%_0%,black,transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-[var(--glow)] opacity-60 blur-3xl" />
      <BlockCluster className="pointer-events-none absolute right-[6%] top-[calc(var(--header-h)+2rem)] hidden w-40 opacity-80 lg:block" />

      <div className="shell relative">
        {breadcrumbs && (
          <div className="fade-up mb-10" style={stagger(0)}>
            <Breadcrumbs items={breadcrumbs} />
          </div>
        )}
        <div className={cn("grid gap-12", aside && "lg:grid-cols-12 lg:items-end")}>
          <div className={cn(aside ? "lg:col-span-8" : "max-w-5xl")}>
            <div className="fade-up mb-7" style={stagger(0)}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
            <AnimatedHeading text={title} highlight={highlight} className="text-h1 text-fg" />
            <div className="fade-up mt-8 max-w-2xl text-lead text-fg-muted" style={stagger(3)}>
              {description}
            </div>
            {actions && (
              <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={stagger(4)}>
                {actions}
              </div>
            )}
          </div>
          {aside && (
            <div className="fade-up lg:col-span-4" style={stagger(5)}>
              {aside}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
