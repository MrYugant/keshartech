import { siteConfig } from "@/config/site";
import { stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";

const pillars = [
  { label: "Build", text: "Websites, web apps, SaaS and mobile" },
  { label: "Connect", text: "CRM, ERP, APIs, AI and automation" },
  { label: "Grow", text: "SEO, Google Ads and Meta Ads" },
];

export function AboutPreview() {
  return (
    <section aria-labelledby="about-title" className="section-y bg-bg">
      <div className="shell grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div data-reveal>
            <Eyebrow>About Keshar Tech</Eyebrow>
          </div>
        </div>
        <div className="lg:col-span-8">
          <h2 id="about-title" data-reveal className="text-h2 text-fg">
            Technology should fit your business —{" "}
            <span className="text-fg-subtle">not force your business to fit the technology.</span>
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <p data-reveal style={stagger(1)} className="text-lead text-fg-muted">
              {siteConfig.name} is a technology company helping businesses build, modernise, automate and grow. We take the time to
              understand how you operate, then design and engineer the systems that make it work better.
            </p>
            <div data-reveal style={stagger(2)} className="grid content-between gap-8">
              <p className="leading-relaxed text-fg-muted">
                Led directly by our founders and supported by a network of independent specialists, we cover the full journey — from
                your first website to company-wide software — with one accountable team.
              </p>
              <ButtonLink href="/about" variant="secondary" arrow className="justify-self-start">
                More about us
              </ButtonLink>
            </div>
          </div>
          <dl className="mt-16 grid border-t border-line sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.label} data-reveal style={stagger(i)} className="border-b border-line py-7 sm:border-b-0 sm:pr-6">
                <dt className="flex items-center gap-3 text-h3 text-fg">
                  <span aria-hidden="true" className="size-2.5 rounded-[3px] bg-orange" />
                  {p.label}
                </dt>
                <dd className="mt-3 text-fg-muted">{p.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
