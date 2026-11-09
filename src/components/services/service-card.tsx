import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { IconName } from "@/components/ui/icon";
import { cn, stagger } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

interface LinkCardProps {
  href: string;
  icon: IconName;
  title: string;
  text: string;
  index?: number;
  eyebrow?: string;
  className?: string;
}

/** Bordered card used for services and solutions grids and related-content links. */
export function LinkCard({ href, icon, title, text, index = 0, eyebrow, className }: LinkCardProps) {
  return (
    <Link
      href={href}
      data-reveal
      style={stagger(index)}
      className={cn(
        "spotlight group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-[border-color,transform,box-shadow] duration-500 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_30px_60px_-30px_var(--shadow-color)] md:p-8",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-12 place-items-center rounded-2xl border border-line bg-bg-muted text-accent-text transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
          <Icon name={icon} className="size-[22px]" />
        </span>
        <ArrowUpRight aria-hidden="true" className="size-5 text-fg-subtle transition-all duration-500 ease-[var(--ease-out)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text" />
      </div>
      {eyebrow && <p className="mt-10 text-eyebrow text-fg-subtle">{eyebrow}</p>}
      <h3 className={cn("text-xl font-semibold tracking-tight text-fg md:text-[1.375rem]", eyebrow ? "mt-3" : "mt-10")}>{title}</h3>
      <p className="mt-3 leading-relaxed text-fg-muted">{text}</p>
    </Link>
  );
}
