import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/types/content";
import { stagger } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

/** Interactive full-width row: hover fills the row and slides the arrow. */
export function ServiceRow({ service, index }: { service: Service; index: number }) {
  return (
    <li data-reveal style={stagger(index % 6)} className="border-b border-line">
      <Link
        href={`/services/${service.slug}`}
        className="group relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-2 overflow-hidden py-7 sm:gap-x-8 md:grid-cols-[4rem_minmax(0,1.1fr)_minmax(0,1fr)_auto] md:py-9"
      >
        <span aria-hidden="true" className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-bg-muted transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-y-100" />
        <span className="font-mono text-sm text-fg-subtle transition-colors group-hover:text-accent-text md:pl-4">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-4">
          <Icon name={service.icon} className="hidden size-6 shrink-0 text-fg-subtle transition-colors group-hover:text-accent-text sm:block" />
          <span className="text-h3 text-fg transition-transform duration-500 ease-[var(--ease-out)] group-hover:translate-x-2">
            {service.title}
          </span>
        </span>
        <span className="col-span-3 col-start-2 max-w-md text-[0.95rem] leading-relaxed text-fg-muted md:col-span-1 md:col-start-3">
          {service.excerpt}
        </span>
        <span className="row-start-1 col-start-3 grid size-11 place-items-center rounded-full border border-line text-fg transition-all duration-500 ease-[var(--ease-out)] group-hover:rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg md:col-start-4 md:mr-4">
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </span>
      </Link>
    </li>
  );
}
