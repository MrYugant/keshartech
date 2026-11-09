import { getSolution, solutions } from "@/data/solutions";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Keshar Tech solution";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  return renderOgImage({ eyebrow: "Solutions", title: solution?.title ?? "Solutions" });
}
