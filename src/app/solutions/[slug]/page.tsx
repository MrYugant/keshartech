import { notFound } from "next/navigation";
import { getSolution, solutions } from "@/data/solutions";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { SolutionDetail } from "@/components/services/solution-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return buildMetadata({ title: solution.seo.title, description: solution.seo.description, path: `/solutions/${slug}` });
}

export default async function SolutionPage({ params }: PageProps<"/solutions/[slug]">) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();
  return (
    <>
      <SolutionDetail solution={solution} />
      <JsonLd data={serviceSchema(solution, "/solutions")} />
    </>
  );
}
