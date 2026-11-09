import { processPhases } from "@/data/company";
import { ButtonLink } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { ProcessOverview } from "@/components/sections/process-steps";

export function ProcessPreview() {
  return (
    <Section labelledBy="process-title">
      <SectionHeader
        id="process-title"
        eyebrow="How we work"
        title="Four phases. No surprises."
        description="A clear, collaborative process that keeps you informed and in control from first conversation to long after launch."
        action={
          <ButtonLink href="/process" variant="secondary" arrow>
            Our full process
          </ButtonLink>
        }
      />
      <ProcessOverview phases={processPhases} />
    </Section>
  );
}
