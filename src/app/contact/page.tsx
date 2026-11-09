import { ArrowUpRight } from "lucide-react";
import { mailto, siteConfig } from "@/config/site";
import { getService, serviceOptions } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { stagger } from "@/lib/utils";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/forms/contact-form";

export const metadata = buildMetadata({
  title: "Contact — Start a Project with Keshar Tech",
  description:
    "Tell Keshar Tech about your website, software, CRM, ERP, AI or marketing project. Share your goals and we'll reply with clear next steps.",
  path: "/contact",
});

const nextSteps = [
  { title: "We review your enquiry", text: "Your message goes directly to our leadership team." },
  { title: "We get in touch", text: "We reply to understand your goals and arrange a conversation." },
  { title: "You receive a clear proposal", text: "A written scope, approach and estimate — before any commitment." },
];

export default async function ContactPage({ searchParams }: PageProps<"/contact">) {
  const { service } = await searchParams;
  const preselected = typeof service === "string" ? getService(service)?.title : undefined;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Have an idea? Let's build it."
        highlight={["build", "it."]}
        description="Tell us about your business and what you want to achieve. The more context you share, the more useful our first reply will be."
        breadcrumbs={[{ name: "Contact", path: "/contact" }]}
        className="pb-10 md:pb-14"
      />

      <section aria-label="Contact form and details" className="bg-bg pb-24 md:pb-32">
        <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7 lg:order-2">
            <ContactForm serviceOptions={serviceOptions} defaultService={preselected} email={siteConfig.email} />
          </div>

          <aside className="grid content-start gap-12 lg:col-span-5">
            <div data-reveal>
              <p className="text-eyebrow text-fg-subtle">Email us directly</p>
              <a href={mailto("Project enquiry")} className="group mt-4 inline-flex items-center gap-2 text-2xl font-semibold tracking-tight text-fg hover:text-accent-text sm:text-3xl">
                {siteConfig.email}
                <ArrowUpRight aria-hidden="true" className="size-6 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              {siteConfig.phone && (
                <a href={`tel:${siteConfig.phone}`} className="mt-3 block text-lg text-fg-muted hover:text-fg">
                  {siteConfig.phone}
                </a>
              )}
            </div>

            <div>
              <p data-reveal className="text-eyebrow text-fg-subtle">What happens next</p>
              <ol className="mt-6 grid gap-0 border-t border-line">
                {nextSteps.map((s, i) => (
                  <li key={s.title} data-reveal style={stagger(i)} className="grid grid-cols-[2.5rem_1fr] gap-3 border-b border-line py-5">
                    <span className="font-mono text-sm text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="font-semibold text-fg">{s.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-fg-muted">{s.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div data-reveal className="rounded-[var(--radius-card)] border border-line bg-bg-muted p-6">
              <p className="font-semibold text-fg">{siteConfig.name}</p>
              <p className="mt-1 text-sm text-fg-muted">{siteConfig.tagline}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
