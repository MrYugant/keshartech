import { projects } from "@/data/projects";
import { buildMetadata } from "@/lib/seo";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { ProjectFeature } from "@/components/projects/project-feature";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = buildMetadata({
  title: "Our Work — CRM, ERP, Website & Software Projects",
  description:
    "Explore Keshar Tech projects including Prime Homes CRM, Krupa Sales, Panchal SK & Associates and custom Odoo ERP solutions.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Systems and websites we've designed and built."
        highlight={["built."]}
        description="From real estate CRM to industrial websites and Odoo ERP — a look at the problems our clients brought to us and how we solved them."
        breadcrumbs={[{ name: "Work", path: "/work" }]}
        actions={
          <ButtonLink href="/contact" size="lg" arrow>
            Start a Project
          </ButtonLink>
        }
      />
      <Section tone="default" className="pt-0!">
        <div className="grid gap-24 md:gap-32">
          {projects.map((p, i) => (
            <ProjectFeature key={p.slug} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </Section>
      <CtaBanner title="Your project could be next." />
    </>
  );
}
