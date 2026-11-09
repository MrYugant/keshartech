"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ChevronDown, Menu } from "lucide-react";
import { isActivePath, mainNav, primaryCta, type NavItem } from "@/config/navigation";
import { fadeDown, springSnappy } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { MegaMenu } from "./mega-menu";
import { MobileMenu } from "./mobile-menu";
import type { NavData } from "@/lib/nav-data";

type MenuKey = NonNullable<NavItem["menu"]>;

export function SiteHeader({ navData }: { navData: NavData }) {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLDivElement>(null);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 12);
    // Hide while scrolling down past the hero; reveal on any upward scroll.
    setHidden(y > 480 && y > prev + 4 && !openMenu && !mobileOpen);
    if (y < prev - 4) setHidden(false);
  });

  // Close menus whenever the route changes. Adjusting state during render
  // (rather than in an effect) avoids an extra paint with stale menus.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpenMenu(null);
    setMobileOpen(false);
  }

  const open = useCallback((key: MenuKey | null) => {
    window.clearTimeout(closeTimer.current);
    setOpenMenu(key);
  }, []);
  const scheduleClose = useCallback(() => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMenu(null), 160);
  }, []);

  useEffect(() => {
    if (!openMenu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    const onClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [openMenu]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const solid = scrolled || openMenu !== null;

  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-3 z-[60] -translate-y-24 rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-fg focus:translate-y-0"
      >
        Skip to content
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-[var(--ease-out)]",
          hidden && "-translate-y-full",
        )}
      >
        <div
          ref={navRef}
          onMouseLeave={scheduleClose}
          className={cn(
            "relative border-b transition-[background-color,border-color,backdrop-filter] duration-500",
            solid
              ? "border-line bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
              : "border-transparent bg-transparent",
          )}
        >
          <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
            <Link href="/" aria-label="Keshar Tech — home" className="shrink-0 rounded-md">
              <Logo priority className="h-9 sm:h-10" />
            </Link>

            <nav aria-label="Main" className="hidden lg:block">
              <ul className="flex items-center gap-1" onMouseLeave={() => setHovered(null)}>
                {mainNav.map((item) => {
                  const active = isActivePath(pathname, item);
                  const expanded = openMenu === item.menu;
                  return (
                    <li
                      key={item.href}
                      className="relative flex items-center"
                      onMouseEnter={() => {
                        setHovered(item.href);
                        open(item.menu ?? null);
                      }}
                    >
                      {hovered === item.href && (
                        <motion.span
                          layoutId="nav-hover"
                          transition={springSnappy}
                          className="absolute inset-0 rounded-full bg-bg-muted"
                          aria-hidden="true"
                        />
                      )}
                      <Link
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "relative flex h-10 items-center rounded-full pl-4 text-sm font-medium transition-colors",
                          item.menu ? "pr-1" : "pr-4",
                          active ? "text-fg" : "text-fg-muted hover:text-fg",
                        )}
                      >
                        {item.label}
                        {active && (
                          <motion.span
                            layoutId="nav-active"
                            transition={springSnappy}
                            aria-hidden="true"
                            className="absolute -bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent"
                          />
                        )}
                      </Link>
                      {item.menu && (
                        <button
                          type="button"
                          aria-expanded={expanded}
                          aria-controls={`menu-${item.menu}`}
                          aria-label={`${expanded ? "Hide" : "Show"} ${item.label} menu`}
                          onClick={() => open(expanded ? null : item.menu!)}
                          className="relative mr-2 grid size-7 place-items-center rounded-full text-fg-muted hover:text-fg"
                        >
                          <ChevronDown
                            aria-hidden="true"
                            className={cn("size-3.5 transition-transform duration-300", expanded && "rotate-180")}
                          />
                        </button>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex items-center gap-2 sm:gap-3">
              <ThemeToggle />
              <ButtonLink href={primaryCta.href} arrow className="hidden sm:inline-flex">
                {primaryCta.label}
              </ButtonLink>
              <button
                type="button"
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                className="grid size-11 place-items-center rounded-full border border-line text-fg lg:hidden"
              >
                <Menu aria-hidden="true" className="size-5" />
              </button>
            </div>
          </div>

          <AnimatePresence>
            {openMenu && (
              <motion.div
                key={openMenu}
                id={`menu-${openMenu}`}
                variants={fadeDown}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={() => open(openMenu)}
                className="absolute inset-x-0 top-full hidden border-b border-line bg-bg shadow-[0_30px_60px_-30px_var(--shadow-color)] backdrop-blur-xl lg:block"
              >
                <MegaMenu menu={openMenu} pathname={pathname} data={navData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

      <MobileMenu open={mobileOpen} onClose={closeMobile} pathname={pathname} data={navData} />
    </>
  );
}
