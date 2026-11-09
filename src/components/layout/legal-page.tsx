import { siteConfig } from "@/config/site";
import { PageHero } from "@/components/sections/page-hero";

export interface LegalSection {
  heading: string;
  body: (string | string[])[];
}

/**
 * Shared layout for legal documents. Content should be reviewed by a qualified
 * legal professional before relying on it.
 */
export function LegalPage({ title, intro, path, sections }: { title: string; intro: string; path: string; sections: LegalSection[] }) {
  const updated = new Date(siteConfig.legalUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
  return (
    <>
      <PageHero eyebrow={`Last updated ${updated}`} title={title} description={intro} breadcrumbs={[{ name: title, path }]} className="pb-10 md:pb-16" />
      <section className="bg-bg pb-24 md:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-[calc(var(--header-h)+2rem)] grid gap-2 border-l border-line pl-5 text-sm">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#section-${i + 1}`} className="text-fg-muted hover:text-fg">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="grid max-w-3xl gap-12 lg:col-span-8 lg:col-start-5">
            {sections.map((s, i) => (
              <section key={s.heading} id={`section-${i + 1}`} aria-labelledby={`section-${i + 1}-title`} className="scroll-mt-28">
                <h2 id={`section-${i + 1}-title`} className="text-h3 text-fg">
                  <span className="mr-3 font-mono text-base text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-5 grid gap-4 leading-relaxed text-fg-muted">
                  {s.body.map((b, j) =>
                    Array.isArray(b) ? (
                      <ul key={j} className="grid list-disc gap-2 pl-5 marker:text-accent-text">
                        {b.map((li) => (
                          <li key={li}>{li}</li>
                        ))}
                      </ul>
                    ) : (
                      <p key={j}>{b}</p>
                    ),
                  )}
                </div>
              </section>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
