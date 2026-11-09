/**
 * Official brand palette for TypeScript consumers (OG images, viewport
 * theme colour, manifest). CSS consumes the same values as custom properties
 * declared once in `app/globals.css` — keep the two in sync.
 */
export const brand = {
  orange: "#FF6600",
  navy: "#002D62",
  black: "#0C0C0C",
  charcoal: "#141414",
  white: "#FFFFFF",
  offWhite: "#F5F5F2",
  coolGrey: "#F7F8FA",
  ink: "#111111",
  paper: "#F5F7FA",
  muted: "#AAB4BE",
} as const;

export const THEME_STORAGE_KEY = "kt-theme";
export type ThemeMode = "light" | "dark";
