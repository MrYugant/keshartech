import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { buildMetadata, projectSchema } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";
import { ProjectDetail } from "@/components/projects/project-detail";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.seo.title,
    description: project.seo.description,
    path: `/work/${slug}`,
    type: "article",
  });
}

export default async function ProjectPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <ProjectDetail project={project} />
      <JsonLd data={projectSchema(project)} />
    </>
  );
}
