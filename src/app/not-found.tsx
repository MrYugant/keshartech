import Link from "next/link";
import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { BlockCluster } from "@/components/sections/block-cluster";

export const metadata: Metadata = { title: "Page not found", robots: { index: false } };

const suggestions = [
  { label: "Services", href: "/services" },
  { label: "Solutions", href: "/solutions" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-bg pt-[var(--header-h)]">
      <div aria-hidden="true" className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]" />
      <div className="shell relative grid gap-10 py-20 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <Eyebrow>Error 404</Eyebrow>
          <h1 className="mt-8 text-h1 text-fg">This page took a different route.</h1>
          <p className="mt-6 max-w-xl text-lead text-fg-muted">
            The page you were looking for doesn&apos;t exist or has moved. These links might help you find what you need.
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {suggestions.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="inline-flex h-11 items-center rounded-full border border-line px-5 text-sm font-medium text-fg transition-colors hover:border-fg">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <ButtonLink href="/" size="lg" arrow className="mt-10">
            Back to home
          </ButtonLink>
        </div>
        <div className="hidden lg:col-span-4 lg:block">
          <BlockCluster className="w-full max-w-xs" />
        </div>
      </div>
    </section>
  );
}
