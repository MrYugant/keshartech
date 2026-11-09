import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/** Infinite horizontal ticker. Content is duplicated once for a seamless loop; the copy is hidden from assistive tech. */
export function Marquee({ items, className, duration = 45 }: { items: string[]; className?: string; duration?: number }) {
  const row = (hidden?: boolean) => (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8 sm:gap-12 sm:pr-12">
          <span className="whitespace-nowrap text-2xl font-medium tracking-tight text-fg sm:text-4xl">{item}</span>
          <span aria-hidden="true" className="size-2.5 rotate-45 rounded-[2px] bg-orange" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className={cn("marquee overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]", className)}>
      <div className="marquee-track flex w-max" style={{ "--duration": `${duration}s` } as CSSProperties}>
        {row()}
        {row(true)}
      </div>
    </div>
  );
}
