import { Check } from "lucide-react";
import type { ProcessPhase } from "@/types/content";
import { stagger } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

/** Compact four-phase overview (homepage). A connecting trace runs through the phases. */
export function ProcessOverview({ phases }: { phases: ProcessPhase[] }) {
  return (
    <ol className="relative grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <span aria-hidden="true" className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent lg:block" />
      {phases.map((p, i) => (
        <li
          key={p.number}
          data-reveal
          style={stagger(i)}
          className="spotlight group relative rounded-[var(--radius-card)] border border-line bg-surface p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-line-strong"
        >
          <div className="flex items-center justify-between">
            <span className="relative grid size-12 place-items-center rounded-full border border-line bg-bg text-accent-text transition-colors duration-500 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
              <Icon name={p.icon} className="size-5" />
            </span>
            <span className="font-mono text-sm text-fg-subtle">{p.number}</span>
          </div>
          <h3 className="mt-10 text-h3 text-fg">{p.title}</h3>
          <p className="mt-3 leading-relaxed text-fg-muted">{p.summary}</p>
        </li>
      ))}
    </ol>
  );
}

/** Full phase breakdown for /process and service delivery sections. */
export function ProcessDetail({ phases }: { phases: ProcessPhase[] }) {
  return (
    <ol className="grid gap-6">
      {phases.map((p) => (
        <li key={p.number} data-reveal className="grid gap-8 rounded-[var(--radius-panel)] border border-line bg-surface p-7 md:p-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4">
              <span className="grid size-12 place-items-center rounded-full bg-accent text-accent-fg">
                <Icon name={p.icon} className="size-5" />
              </span>
              <span className="font-mono text-sm text-fg-subtle">Phase {p.number}</span>
            </div>
            <h3 className="mt-8 text-h2 text-fg">{p.title}</h3>
            <p className="mt-4 text-lead text-fg-muted">{p.summary}</p>
          </div>
          <div className="lg:col-span-5">
            <h4 className="text-eyebrow text-fg-subtle">What happens</h4>
            <ul className="mt-5 grid gap-4">
              {p.activities.map((a) => (
                <li key={a} className="flex gap-3 leading-relaxed text-fg">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent-text" strokeWidth={2.5} />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid content-start gap-8 lg:col-span-3">
            <div>
              <h4 className="text-eyebrow text-fg-subtle">You receive</h4>
              <ul className="mt-5 grid gap-2">
                {p.deliverables.map((d) => (
                  <li key={d} className="rounded-xl bg-bg-muted px-4 py-2.5 text-sm font-medium text-fg">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-eyebrow text-fg-subtle">Your role</h4>
              <p className="mt-3 text-sm leading-relaxed text-fg-muted">{p.yourRole}</p>
            </div>
          </div>
        </li>
      ))}
    </ol>
  );
}
