"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Minus, Plus, X } from "lucide-react";
import { companyLinks, primaryCta } from "@/config/navigation";
import { mailto, siteConfig } from "@/config/site";
import type { NavData } from "@/lib/nav-data";
import { menuPanel, riseIn, staggerChildren } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";

interface Group {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const buildGroups = (data: NavData): Group[] => [
  { label: "Services", href: "/services", children: data.serviceGroups.flatMap((g) => g.items) },
  { label: "Solutions", href: "/solutions", children: data.solutions },
  { label: "Work", href: "/work" },
  ...companyLinks.map((l) => ({ label: l.label, href: l.href })),
  { label: "Contact", href: "/contact" },
];

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
  data: NavData;
}

export function MobileMenu({ open, onClose, pathname, data }: MobileMenuProps) {
  const groups = buildGroups(data);
  const [expanded, setExpanded] = useState<string | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          variants={menuPanel}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="tone-dark fixed inset-0 z-[70] flex flex-col overflow-y-auto lg:hidden"
        >
          <div className="shell flex h-[var(--header-h)] shrink-0 items-center justify-between">
            <Link href="/" onClick={onClose} aria-label="Keshar Tech — home">
              <Logo variant="dark" className="h-9" />
            </Link>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="grid size-11 place-items-center rounded-full border border-line text-fg"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <motion.nav
            aria-label="Mobile"
            variants={staggerChildren(0.05, 0.2)}
            initial="hidden"
            animate="visible"
            className="shell flex-1 pb-8 pt-6"
          >
            <ul className="border-t border-line">
              {groups.map((g) => {
                const isOpen = expanded === g.label;
                const active = pathname === g.href || pathname.startsWith(`${g.href}/`);
                return (
                  <motion.li key={g.label} variants={riseIn} className="border-b border-line">
                    <div className="flex items-center justify-between">
                      <Link
                        href={g.href}
                        onClick={onClose}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "flex-1 py-4 text-[1.75rem] font-semibold tracking-tight",
                          active ? "text-accent-text" : "text-fg",
                        )}
                      >
                        {g.label}
                      </Link>
                      {g.children && (
                        <button
                          type="button"
                          onClick={() => setExpanded(isOpen ? null : g.label)}
                          aria-expanded={isOpen}
                          aria-label={`${isOpen ? "Collapse" : "Expand"} ${g.label}`}
                          className="grid size-11 place-items-center rounded-full border border-line text-fg"
                        >
                          {isOpen ? <Minus aria-hidden="true" className="size-4" /> : <Plus aria-hidden="true" className="size-4" />}
                        </button>
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {g.children && isOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="grid grid-cols-2 gap-x-4 overflow-hidden"
                        >
                          {g.children.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                onClick={onClose}
                                className={cn("block py-2 text-[0.95rem]", pathname === c.href ? "text-accent-text" : "text-fg-muted")}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                          <li className="col-span-2 h-4" aria-hidden="true" />
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </motion.li>
                );
              })}
            </ul>

            <motion.div variants={riseIn} className="mt-10 grid gap-5">
              <ButtonLink href={primaryCta.href} size="lg" arrow onClick={onClose} className="w-full">
                {primaryCta.label}
              </ButtonLink>
              <a href={mailto()} className="inline-flex items-center gap-2 text-fg-muted">
                {siteConfig.email}
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </a>
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
