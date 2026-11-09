import { cn } from "@/lib/utils";

/**
 * Decorative cluster echoing the "data blocks" rising above the K in the
 * Keshar Tech logo. Pure SVG + CSS animation.
 */
const blocks: { x: number; y: number; s: number; tone: "orange" | "navy" }[] = [
  { x: 0, y: 112, s: 14, tone: "orange" },
  { x: 26, y: 92, s: 28, tone: "orange" },
  { x: 62, y: 102, s: 14, tone: "orange" },
  { x: 58, y: 54, s: 28, tone: "navy" },
  { x: 96, y: 72, s: 28, tone: "navy" },
  { x: 98, y: 40, s: 14, tone: "navy" },
  { x: 120, y: 18, s: 28, tone: "orange" },
];

export function BlockCluster({ className, animated = true }: { className?: string; animated?: boolean }) {
  return (
    <svg viewBox="0 0 150 130" aria-hidden="true" className={cn("overflow-visible", className)}>
      {blocks.map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={b.y}
          width={b.s}
          height={b.s}
          rx={3}
          className={b.tone === "orange" ? "fill-orange" : "fill-brand-2"}
          style={
            animated
              ? {
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  animation: `kt-pulse-block 4.8s var(--ease-in-out) ${i * 0.35}s infinite`,
                }
              : undefined
          }
        />
      ))}
    </svg>
  );
}
