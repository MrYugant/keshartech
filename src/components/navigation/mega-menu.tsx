import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { companyLinks, primaryCta } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import type { NavData } from "@/lib/nav-data";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/icon";

const linkCls = (active: boolean) =>
  cn(
    "group/link flex items-center gap-2 rounded-lg py-1.5 text-sm transition-colors",
    active ? "text-accent-text" : "text-fg-muted hover:text-fg",
  );

function PromoCard({ title, text, href, cta }: { title: string; text: string; href: string; cta: string }) {
  return (
    <Link
      href={href}
      className="spotlight group/promo flex h-full flex-col justify-between rounded-2xl border border-line bg-bg-muted p-6 transition-colors hover:border-line-strong"
    >
      <div>
        <p className="text-lg font-semibold tracking-tight text-fg">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">{text}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-text">
        {cta}
        <ArrowUpRight aria-hidden="true" className="size-4 transition-transform group-hover/promo:-translate-y-0.5 group-hover/promo:translate-x-0.5" />
      </span>
    </Link>
  );
}

interface MegaMenuProps {
  menu: "services" | "solutions" | "company";
  pathname: string;
  data: NavData;
}

export function MegaMenu({ menu, pathname, data }: MegaMenuProps) {
  if (menu === "services") {
    return (
      <div className="shell grid grid-cols-12 gap-8 py-10">
        <div className="col-span-9 grid grid-cols-5 gap-6">
          {data.serviceGroups.map((group) => (
            <div key={group.key}>
              <p className="mb-4 text-eyebrow text-fg-subtle">{group.label}</p>
              <ul className="grid gap-0.5">
                {group.items.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} className={linkCls(pathname === s.href)}>
                      <Icon name={s.icon} className="size-4 shrink-0 text-fg-subtle transition-colors group-hover/link:text-accent-text" />
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="col-span-3">
          <PromoCard
            title="All services"
            text="Sixteen disciplines, one accountable team — from first website to company-wide ERP."
            href="/services"
            cta="Explore services"
          />
        </div>
      </div>
    );
  }

  if (menu === "solutions") {
    return (
      <div className="shell grid grid-cols-12 gap-8 py-10">
        <ul className="col-span-9 grid grid-cols-3 gap-3">
          {data.solutions.map((s) => {
            const href = s.href;
            return (
              <li key={s.href}>
                <Link
                  href={href}
                  className={cn(
                    "group/sol flex h-full gap-4 rounded-2xl p-4 transition-colors hover:bg-bg-muted",
                    pathname === href && "bg-bg-muted",
                  )}
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-text">
                    <Icon name={s.icon} className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fg">{s.label}</span>
                    <span className="mt-1 block text-sm leading-snug text-fg-muted">{s.description}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="col-span-3">
          <PromoCard
            title="Not sure where to start?"
            text="Tell us what's slowing your business down. We'll recommend the simplest path forward."
            href={primaryCta.href}
            cta="Talk to us"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="shell grid grid-cols-12 gap-8 py-10">
      <ul className="col-span-8 grid grid-cols-2 gap-3">
        {companyLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={cn(
                "group/co flex items-start justify-between gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-line-strong hover:bg-bg-muted",
                pathname.startsWith(l.href) && "bg-bg-muted",
              )}
            >
              <span>
                <span className="block text-base font-semibold text-fg">{l.label}</span>
                <span className="mt-1 block text-sm text-fg-muted">{l.description}</span>
              </span>
              <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-fg-subtle transition-transform group-hover/co:-translate-y-0.5 group-hover/co:translate-x-0.5 group-hover/co:text-accent-text" />
            </Link>
          </li>
        ))}
      </ul>
      <div className="col-span-4">
        <PromoCard title={siteConfig.name} text={siteConfig.tagline} href="/about" cta="Our story" />
      </div>
    </div>
  );
}
