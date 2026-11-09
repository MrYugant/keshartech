import type { NetworkDiscipline } from "@/types/content";
import { stagger } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

/** Disciplines covered by the independent specialist network. */
export function NetworkGrid({ disciplines, compact = false }: { disciplines: NetworkDiscipline[]; compact?: boolean }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {disciplines.map((d, i) => (
        <li key={d.title} data-reveal="fade" style={stagger(i)} className="spotlight group bg-bg p-7 md:p-8">
          <Icon name={d.icon} className="size-6 text-accent-text transition-transform duration-500 group-hover:-translate-y-1" />
          <h3 className="mt-8 text-lg font-semibold tracking-tight text-fg">{d.title}</h3>
          {!compact && (
            <>
              <p className="mt-2 leading-relaxed text-fg-muted">{d.text}</p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-fg-subtle">{d.skills.join(" · ")}</p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
