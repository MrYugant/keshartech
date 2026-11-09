import Image from "next/image";
import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * "Technology built around your business": capabilities orbit a core that
 * represents the client's business. CSS-only animation (paused for reduced motion).
 */
const rings = [
  { size: 46, duration: 38, reverse: false, nodes: ["Web", "CRM", "AI"] },
  { size: 72, duration: 60, reverse: true, nodes: ["ERP", "SaaS", "Apps", "Cloud"] },
  { size: 98, duration: 90, reverse: false, nodes: ["SEO", "Ads", "UI/UX", "APIs", "Automation"] },
];

export function OrbitVisual({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("relative aspect-square select-none", className)}>
      {/* soft core glow */}
      <div className="absolute inset-[30%] rounded-full bg-[var(--glow)] blur-2xl" />

      {rings.map((ring, r) => {
        const spin: CSSProperties = {
          animation: `kt-spin ${ring.duration}s linear infinite`,
          animationDirection: ring.reverse ? "reverse" : "normal",
        };
        const counter: CSSProperties = {
          animation: `kt-spin ${ring.duration}s linear infinite`,
          animationDirection: ring.reverse ? "normal" : "reverse",
        };
        return (
          <div
            key={r}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [container-type:inline-size]"
            style={{ width: `${ring.size}%`, height: `${ring.size}%` }}
          >
            <div className="absolute inset-0 rounded-full border border-dashed border-line-strong" style={spin}>
              {ring.nodes.map((label, n) => {
                const angle = (360 / ring.nodes.length) * n + r * 24;
                return (
                  <div
                    key={label}
                    className="absolute left-1/2 top-1/2 size-0"
                    style={{ transform: `rotate(${angle}deg) translateY(-50cqw)` }}
                  >
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      <span
                        className="absolute left-0 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-line bg-surface/90 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wider text-fg shadow-[0_8px_24px_-12px_var(--shadow-color)] backdrop-blur sm:text-xs"
                        style={counter}
                      >
                        <span className={cn("size-1.5 rounded-[2px]", n % 2 ? "bg-brand-2" : "bg-orange")} />
                        {label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Core: the client's business */}
      <div className="absolute left-1/2 top-1/2 grid size-[27%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface shadow-[0_30px_80px_-30px_var(--shadow-color)]">
        <div className="grid place-items-center gap-1 text-center">
          <Image src="/images/brand/mark.svg" alt="" width={56} height={40} unoptimized className="h-auto w-[42%] min-w-8 dark:hidden" />
          <Image src="/images/brand/mark-dark.svg" alt="" width={56} height={40} unoptimized className="hidden h-auto w-[42%] min-w-8 dark:block" />
          <span className="font-mono text-[0.55rem] uppercase tracking-[0.18em] text-fg-muted sm:text-[0.62rem]">Your business</span>
        </div>
      </div>
    </div>
  );
}
