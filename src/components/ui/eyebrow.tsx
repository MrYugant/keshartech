import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Section label styled after the circuit line in the Keshar Tech logo:
 * a short trace ending in a ring node.
 */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("flex items-center gap-3 text-eyebrow text-accent-text", className)}>
      <span aria-hidden="true" className="relative inline-block h-px w-8 bg-current">
        <span className="absolute -right-[7px] -top-[3.5px] size-2 rounded-full border-[1.5px] border-current" />
      </span>
      <span className="pl-1.5">{children}</span>
    </p>
  );
}
