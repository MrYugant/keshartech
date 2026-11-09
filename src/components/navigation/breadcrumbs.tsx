import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { breadcrumbSchema, type Crumb } from "@/lib/seo";
import { JsonLd } from "@/components/ui/json-ld";

/** Visible breadcrumb trail plus matching BreadcrumbList structured data. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const trail: Crumb[] = [{ name: "Home", path: "/" }, ...items];
  return (
    <>
      <nav aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-fg-muted">
                    {c.name}
                  </span>
                ) : (
                  <>
                    <Link href={c.path} className="transition-colors hover:text-fg">
                      {c.name}
                    </Link>
                    <ChevronRight aria-hidden="true" className="size-3.5" />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
      <JsonLd data={breadcrumbSchema(trail)} />
    </>
  );
}
