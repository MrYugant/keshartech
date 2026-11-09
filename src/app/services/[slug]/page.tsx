import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { buildMetadata, serviceSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { ServiceDetail } from "@/components/services/service-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({ title: service.seo.title, description: service.seo.description, path: `/services/${slug}` });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return (
    <>
      <ServiceDetail service={service} />
      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
