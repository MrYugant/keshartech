import type { ReactNode } from "react";
import { cn, stagger } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

export type Tone = "default" | "muted" | "alt" | "dark";

const tones: Record<Tone, string> = {
  default: "bg-bg",
  muted: "bg-bg-muted",
  alt: "bg-bg-alt",
  dark: "tone-dark",
};

interface SectionProps {
  children: ReactNode;
  tone?: Tone;
  id?: string;
  className?: string;
  /** Inner width wrapper; disable for full-bleed content. */
  contained?: boolean;
  labelledBy?: string;
}

export function Section({ children, tone = "default", id, className, contained = true, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative section-y", tones[tone], className)}>
      {contained ? <div className="shell">{children}</div> : children}
    </section>
  );
}

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  id?: string;
  align?: "split" | "stack" | "center";
  as?: "h1" | "h2";
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, action, id, align = "split", as: Heading = "h2", className }: SectionHeaderProps) {
  return (
    <header
      className={cn(
        "mb-14 grid gap-8 md:mb-20",
        align === "split" && "lg:grid-cols-12 lg:items-end",
        align === "center" && "mx-auto max-w-3xl justify-items-center text-center",
        className,
      )}
    >
      <div className={cn(align === "split" && "lg:col-span-7")}>
        {eyebrow && (
          <div data-reveal className="mb-6">
            <Eyebrow className={align === "center" ? "justify-center" : undefined}>{eyebrow}</Eyebrow>
          </div>
        )}
        <Heading id={id} data-reveal style={stagger(1)} className="text-h2 text-fg">
          {title}
        </Heading>
      </div>
      {(description || action) && (
        <div className={cn("grid gap-6", align === "split" && "lg:col-span-5 lg:justify-self-end lg:pb-2")}>
          {description && (
            <p data-reveal style={stagger(2)} className="max-w-xl text-lead text-fg-muted">
              {description}
            </p>
          )}
          {action && (
            <div data-reveal style={stagger(3)}>
              {action}
            </div>
          )}
        </div>
      )}
    </header>
  );
}
