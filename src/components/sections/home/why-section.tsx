import { strengths } from "@/data/company";
import { siteConfig } from "@/config/site";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContentGrid } from "@/components/sections/content-grid";

export function WhySection() {
  return (
    <Section labelledBy="why-title">
      <SectionHeader
        id="why-title"
        eyebrow={`Why ${siteConfig.name}`}
        title="A technology partner that stays accountable."
        description="What you can expect when you work with us."
      />
      <ContentGrid items={strengths} />
    </Section>
  );
}
