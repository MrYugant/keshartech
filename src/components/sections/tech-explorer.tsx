"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { TechCategory, Technology } from "@/types/content";
import { easeOut, springSnappy } from "@/lib/animations";
import { cn } from "@/lib/utils";

/** Tabbed, keyboard-accessible explorer of the technology stack. */
export function TechExplorer({ groups }: { groups: { category: TechCategory; items: Technology[] }[] }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const current = groups[active]!;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : -1) + groups.length) % groups.length;
    setActive(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div role="tablist" aria-label="Technology categories" aria-orientation="horizontal" onKeyDown={onKeyDown} className="-mx-1 flex gap-1 overflow-x-auto px-1 pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0">
        {groups.map((g, i) => {
          const selected = i === active;
          return (
            <button
              key={g.category}
              id={`${id}-tab-${i}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls={`${id}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex shrink-0 items-center justify-between gap-6 rounded-full px-5 py-3 text-left text-sm font-medium transition-colors lg:rounded-2xl lg:py-4 lg:text-base",
                selected ? "text-accent-fg" : "text-fg-muted hover:text-fg",
              )}
            >
              {selected && <motion.span layoutId={`${id}-pill`} transition={springSnappy} className="absolute inset-0 rounded-[inherit] bg-accent" />}
              <span className="relative">{g.category}</span>
              <span className={cn("relative hidden font-mono text-xs lg:inline", selected ? "text-accent-fg/70" : "text-fg-subtle")}>
                {String(g.items.length).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="min-h-[22rem] lg:col-span-8">
        <AnimatePresence mode="wait">
          <motion.ul
            key={current.category}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } }, exit: { opacity: 0, transition: { duration: 0.15 } } }}
            className="grid gap-3 sm:grid-cols-2"
          >
            {current.items.map((t) => (
              <motion.li
                key={t.name}
                variants={{ hidden: { opacity: 0, y: 14 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } } }}
                className="spotlight rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-line-strong"
              >
                <p className="text-lg font-semibold tracking-tight text-fg">{t.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{t.note}</p>
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
}
