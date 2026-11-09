export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem extends NavLink {
  /** Which dropdown, if any, opens from this item. */
  menu?: "services" | "solutions" | "company";
}

export const mainNav: NavItem[] = [
  { label: "Services", href: "/services", menu: "services" },
  { label: "Solutions", href: "/solutions", menu: "solutions" },
  { label: "Work", href: "/work" },
  { label: "Company", href: "/about", menu: "company" },
];

export const companyLinks: NavLink[] = [
  { label: "About", href: "/about", description: "Who we are and how we think" },
  { label: "Team", href: "/team", description: "Leadership and specialist network" },
  { label: "Process", href: "/process", description: "How projects move from idea to launch" },
  { label: "Technologies", href: "/technologies", description: "The stack we build with" },
];

export const legalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export const primaryCta: NavLink = { label: "Start a Project", href: "/contact" };

/** Routes whose nav item should be marked active for a given pathname. */
export function isActivePath(pathname: string, item: NavItem) {
  if (item.menu === "company") return companyLinks.some((l) => pathname.startsWith(l.href));
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}
