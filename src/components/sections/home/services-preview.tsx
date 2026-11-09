import { featuredServiceSlugs, getServices, services } from "@/data/services";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceRow } from "@/components/services/service-row";

export function ServicesPreview() {
  return (
    <Section tone="muted" labelledBy="services-title">
      <SectionHeader
        id="services-title"
        eyebrow="Services"
        title="Everything you need to build, run and grow."
        description={`${services.length} disciplines delivered by one team — so strategy, design, engineering and marketing pull in the same direction.`}
        action={
          <ButtonLink href="/services" arrow>
            View all services
          </ButtonLink>
        }
      />
      <ul className="border-t border-line">
        {getServices(featuredServiceSlugs).map((s, i) => (
          <ServiceRow key={s.slug} service={s} index={i} />
        ))}
      </ul>
    </Section>
  );
}
