import Image from "next/image";
import type { Leader } from "@/types/content";
import { cn, stagger } from "@/lib/utils";

/** Leadership profile with the official portrait. */
export function LeaderCard({ leader, index = 0, detailed = false, headingLevel = "h3" }: { leader: Leader; index?: number; detailed?: boolean; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  return (
    <article data-reveal style={stagger(index)} className="group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-panel)] border border-line bg-[var(--kt-black)]">
        <Image
          src={leader.image}
          alt={leader.imageAlt}
          fill
          sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-1000 ease-[var(--ease-out)] group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-orange">{leader.roleShort}</p>
            <Heading className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{leader.name}</Heading>
            <p className="mt-1 text-sm text-white/75">{leader.role}</p>
          </div>
        </div>
      </div>
      <div className={cn("mt-6", detailed && "mt-8")}>
        {detailed && <p className="max-w-lg text-lead text-fg-muted">{leader.summary}</p>}
        <ul className={cn("flex flex-wrap gap-2", detailed && "mt-6")} aria-label={`${leader.name}'s focus areas`}>
          {leader.focus.map((f) => (
            <li key={f} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-fg-muted transition-colors group-hover:border-line-strong">
              {f}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
