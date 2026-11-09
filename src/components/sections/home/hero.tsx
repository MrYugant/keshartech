import type { CSSProperties } from "react";
import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { stagger } from "@/lib/utils";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Marquee } from "@/components/ui/marquee";
import { OrbitVisual } from "@/components/sections/orbit-visual";

export function HomeHero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-bg pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]">
      {/* Background: fading grid, brand glow and the logo's sweeping arc */}
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_70%_at_60%_20%,black,transparent_75%)]" />
      <div
        aria-hidden="true"
        className="absolute bottom-[-30%] left-1/2 -z-10 h-[70%] w-[90%] rounded-full bg-[var(--glow)] blur-[120px]"
        style={{ animation: "kt-glow 12s var(--ease-in-out) infinite" }}
      />
      <svg aria-hidden="true" viewBox="0 0 1440 900" preserveAspectRatio="none" className="absolute inset-0 -z-10 hidden h-full w-full md:block">
        <defs>
          <linearGradient id="hero-arc" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--brand-2)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--brand-2)" stopOpacity="0.55" />
            <stop offset="100%" stopColor="var(--kt-orange)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M-60 860 C 520 840, 1020 600, 1500 90"
          fill="none"
          stroke="url(#hero-arc)"
          strokeWidth="1.5"
          strokeDasharray="1700"
          style={{ "--len": 1700, animation: "kt-draw 2.6s var(--ease-out) 0.3s both" } as CSSProperties}
        />
      </svg>

      <div className="shell">
        <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7 xl:col-span-8">
            <div className="fade-up mb-8" style={stagger(0)}>
              <Eyebrow>{siteConfig.tagline}</Eyebrow>
            </div>
            <h1 id="hero-title" className="text-display uppercase text-fg">
              <span className="line-mask">
                <span style={stagger(0)}>We build</span>
              </span>
              <span className="line-mask">
                <span style={stagger(1)}>
                  what&apos;s <span className="text-accent-text">next.</span>
                </span>
              </span>
            </h1>
            <p className="fade-up mt-10 max-w-xl text-lead text-fg-muted" style={stagger(2)}>
              Keshar Tech designs and engineers websites, software, CRM and ERP systems, AI and automation — then helps you grow
              with search and digital marketing. One partner, built around how your business actually works.
            </p>
            <div className="fade-up mt-10 flex flex-wrap items-center gap-4" style={stagger(3)}>
              <ButtonLink href="/contact" size="lg" arrow>
                Start a Project
              </ButtonLink>
              <ButtonLink href="/work" size="lg" variant="secondary">
                Explore Our Work
              </ButtonLink>
            </div>
          </div>

          <div className="fade-up mx-auto w-[82%] max-w-[22rem] sm:max-w-md lg:col-span-5 lg:max-w-none xl:col-span-4" style={stagger(4)}>
            <OrbitVisual />
          </div>
        </div>
      </div>

      <div className="mt-16 border-y border-line py-7 md:mt-24 md:py-9">
        <Marquee items={services.map((s) => s.title)} duration={70} />
      </div>
    </section>
  );
}
