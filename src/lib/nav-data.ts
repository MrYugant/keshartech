import { getServicesByCategory } from "@/data/services";
import { solutions } from "@/data/solutions";
import type { IconName } from "@/components/ui/icon";

export interface NavEntry {
  label: string;
  href: string;
  icon: IconName;
  description?: string;
}

export interface NavData {
  serviceGroups: { key: string; label: string; items: NavEntry[] }[];
  solutions: NavEntry[];
}

/**
 * Minimal, serialisable navigation data computed on the server, so client
 * menus never bundle the full service and solution content.
 */
export function getNavData(): NavData {
  return {
    serviceGroups: getServicesByCategory().map((g) => ({
      key: g.key,
      label: g.label,
      items: g.services.map((s) => ({ label: s.shortTitle, href: `/services/${s.slug}`, icon: s.icon })),
    })),
    solutions: solutions.map((s) => ({ label: s.title, href: `/solutions/${s.slug}`, icon: s.icon, description: s.excerpt })),
  };
}
