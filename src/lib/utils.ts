import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Splits a sentence into words while keeping the spaces renderable. */
export function splitWords(text: string) {
  return text.split(" ").filter(Boolean);
}

/** Remove the protocol and trailing slash for display: https://a.com/ → a.com */
export function displayUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

/** Inline style that sets the stagger index read by CSS reveal/entrance animations. */
export const stagger = (i: number) => ({ "--i": i }) as import("react").CSSProperties;

const PROPER_NOUNS = new Set(["Google", "Meta", "Odoo", "Keshar", "Tech"]);

/**
 * Lowercases a title for use mid-sentence while preserving acronyms
 * (CRM, UI/UX, SaaS, DevOps) and proper nouns (Google, Meta).
 */
export function inSentence(title: string) {
  return title
    .split(" ")
    .map((w) => ((w.match(/[A-Z]/g)?.length ?? 0) > 1 || PROPER_NOUNS.has(w) ? w : w.toLowerCase()))
    .join(" ");
}
