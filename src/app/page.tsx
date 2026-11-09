import { siteConfig } from "@/config/site";
import { buildMetadata } from "@/lib/seo";
import { HomeHero } from "@/components/sections/home/hero";
import { AboutPreview } from "@/components/sections/home/about-preview";
import { TeamPreview } from "@/components/sections/home/team-preview";
import { ServicesPreview } from "@/components/sections/home/services-preview";
import { SolutionsPreview } from "@/components/sections/home/solutions-preview";
import { WorkPreview } from "@/components/sections/home/work-preview";
import { ProcessPreview } from "@/components/sections/home/process-preview";
import { TechPreview } from "@/components/sections/home/tech-preview";
import { WhySection } from "@/components/sections/home/why-section";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: `${siteConfig.name} — Websites, Software, CRM, ERP & AI for Growing Businesses`,
  absoluteTitle: true,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <AboutPreview />
      <TeamPreview />
      <ServicesPreview />
      <SolutionsPreview />
      <WorkPreview />
      <ProcessPreview />
      <TechPreview />
      <WhySection />
      <CtaBanner />
    </>
  );
}
