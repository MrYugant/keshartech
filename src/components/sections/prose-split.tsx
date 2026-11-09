import type { ReactNode } from "react";
import { stagger } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/eyebrow";

/** Heading on the left (sticky on desktop), long-form paragraphs on the right. */
export function ProseSplit({ eyebrow, title, paragraphs, children, id }: { eyebrow: string; title: string; paragraphs: string[]; children?: ReactNode; id?: string }) {
  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
          <div data-reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
          <h2 id={id} data-reveal style={stagger(1)} className="mt-6 text-h2 text-fg">
            {title}
          </h2>
        </div>
      </div>
      <div className="grid gap-6 lg:col-span-6 lg:col-start-7">
        {paragraphs.map((p, i) => (
          <p key={i} data-reveal style={stagger(i + 1)} className={i === 0 ? "text-lead text-fg" : "text-lg leading-relaxed text-fg-muted"}>
            {p}
          </p>
        ))}
        {children}
      </div>
    </div>
  );
}
