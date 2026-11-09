import { Plus } from "lucide-react";
import type { Faq } from "@/types/content";
import { faqSchema } from "@/lib/seo";
import { stagger } from "@/lib/utils";
import { JsonLd } from "./json-ld";

/** Accessible accordion built on native <details>; works without JavaScript. */
export function FaqList({ faqs, withSchema = true }: { faqs: Faq[]; withSchema?: boolean }) {
  if (faqs.length === 0) return null;
  return (
    <>
      <div className="border-t border-line">
        {faqs.map((f, i) => (
          <details key={f.question} name="faq" data-reveal style={stagger(i)} className="faq-item group border-b border-line">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-7 text-left">
              <h3 className="text-lg font-medium tracking-tight text-fg md:text-xl">{f.question}</h3>
              <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-full border border-line text-fg transition-[transform,background-color,color] duration-500 ease-[var(--ease-out)] group-open:rotate-45 group-open:bg-accent group-open:text-accent-fg">
                <Plus aria-hidden="true" className="size-4" />
              </span>
            </summary>
            <p className="max-w-3xl pb-8 pr-14 leading-relaxed text-fg-muted">{f.answer}</p>
          </details>
        ))}
      </div>
      {withSchema && <JsonLd data={faqSchema(faqs)} />}
    </>
  );
}
