import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center rounded-full border border-line px-3 py-1 text-xs font-medium text-fg-muted", className)}>
      {children}
    </span>
  );
}

export function PillList({ items, className }: { items: string[]; className?: string }) {
  if (items.length === 0) return null;
  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Pill>{item}</Pill>
        </li>
      ))}
    </ul>
  );
}
