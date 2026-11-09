import { Check } from "lucide-react";
import type { ContentPoint } from "@/types/content";
import { cn, stagger } from "@/lib/utils";

interface ContentGridProps {
  items: ContentPoint[];
  variant?: "cards" | "numbered" | "check";
  columns?: 2 | 3;
  className?: string;
}

const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3" };

/** Renders any list of title/text points in one of three consistent styles. */
export function ContentGrid({ items, variant = "cards", columns = 3, className }: ContentGridProps) {
  if (variant === "numbered") {
    return (
      <ol className={cn("grid gap-x-10 border-t border-line", cols[columns], className)}>
        {items.map((item, i) => (
          <li key={item.title} data-reveal style={stagger(i)} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-8">
            <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-fg-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    );
  }

  if (variant === "check") {
    return (
      <ul className={cn("grid gap-x-10 gap-y-8", cols[columns], className)}>
        {items.map((item, i) => (
          <li key={item.title} data-reveal style={stagger(i)} className="flex gap-4">
            <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-accent text-accent-fg">
              <Check aria-hidden="true" className="size-4" strokeWidth={2.5} />
            </span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-fg">{item.title}</h3>
              <p className="mt-1.5 leading-relaxed text-fg-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className={cn("grid gap-4", cols[columns], className)}>
      {items.map((item, i) => (
        <li
          key={item.title}
          data-reveal
          style={stagger(i)}
          className="spotlight group rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-[border-color,transform] duration-500 ease-[var(--ease-out)] hover:-translate-y-1 hover:border-line-strong md:p-8"
        >
          <span aria-hidden="true" className="block h-px w-10 bg-orange transition-all duration-500 ease-[var(--ease-out)] group-hover:w-20" />
          <h3 className="mt-8 text-xl font-semibold tracking-tight text-fg">{item.title}</h3>
          <p className="mt-3 leading-relaxed text-fg-muted">{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
