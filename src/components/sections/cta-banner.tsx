import { ArrowUpRight } from "lucide-react";
import { mailto, siteConfig } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlockCluster } from "./block-cluster";

interface CtaBannerProps {
  eyebrow?: string;
  title?: string;
  text?: string;
}

/** Closing call-to-action used across the site. */
export function CtaBanner({
  eyebrow = "Start a project",
  title = "Have an idea? Let's build it.",
  text = "Tell us about your business and what you want to achieve. We'll reply with clear next steps — no obligation, no jargon.",
}: CtaBannerProps) {
  return (
    <section aria-labelledby="cta-title" className="tone-dark relative overflow-hidden border-t border-line section-y">
      <div aria-hidden="true" className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_100%,black,transparent)]" />
      <div aria-hidden="true" className="absolute -bottom-1/2 left-1/2 h-[80%] w-[70%] -translate-x-1/2 rounded-full bg-orange/25 blur-[140px]" />
      <BlockCluster className="absolute right-[8%] top-16 hidden w-44 md:block" />

      <div className="shell relative">
        <div data-reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h2 id="cta-title" data-reveal className="mt-8 max-w-5xl text-display uppercase text-fg">
          {title}
        </h2>
        <div data-reveal className="mt-12 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-lead text-fg-muted">{text}</p>
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink href="/contact" size="lg" arrow>
              Start a Project
            </ButtonLink>
            <a
              href={mailto("Project enquiry")}
              className="group inline-flex h-14 items-center gap-2 px-2 font-medium text-fg transition-colors hover:text-accent-text"
            >
              {siteConfig.email}
              <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
