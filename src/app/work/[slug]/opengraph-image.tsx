import { getProject, projects } from "@/data/projects";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Keshar Tech case study";

export function generateStaticParams() {
  return projects.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  return renderOgImage({ eyebrow: "Case study", title: project?.title ?? "Our work" });
}
