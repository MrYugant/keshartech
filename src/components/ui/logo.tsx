import Image from "next/image";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  /** "auto" follows the theme; "light"/"dark" force the variant for a given background. */
  variant?: "auto" | "light" | "dark";
  withTagline?: boolean;
  className?: string;
  priority?: boolean;
}

const files = {
  plain: { light: "/images/brand/logo-light.svg", dark: "/images/brand/logo-dark.svg", w: 233, h: 100 },
  tagline: { light: "/images/brand/logo-tagline-light.svg", dark: "/images/brand/logo-tagline-dark.svg", w: 213, h: 100 },
};

/** The official Keshar Tech logo, rendered from the supplied vector artwork. */
export function Logo({ variant = "auto", withTagline, className, priority }: LogoProps) {
  const f = withTagline ? files.tagline : files.plain;
  const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
  const img = (src: string, cls?: string, a = alt) => (
    <Image src={src} alt={a} width={f.w} height={f.h} priority={priority} unoptimized className={cn("h-full w-auto", cls)} />
  );

  return (
    <span className={cn("relative inline-flex h-10", className)}>
      {variant === "light" && img(f.light)}
      {variant === "dark" && img(f.dark)}
      {variant === "auto" && (
        <>
          {img(f.light, "dark:hidden")}
          {img(f.dark, "hidden dark:block", "")}
        </>
      )}
    </span>
  );
}
