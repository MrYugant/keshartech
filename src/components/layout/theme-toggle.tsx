"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, type ThemeMode } from "@/config/theme";
import { cn } from "@/lib/utils";

const listeners = new Set<() => void>();
const subscribe = (cb: () => void) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};
const getTheme = (): ThemeMode => (document.documentElement.classList.contains("dark") ? "dark" : "light");

function setTheme(next: ThemeMode) {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  root.classList.toggle("dark", next === "dark");
  try {
    localStorage.setItem(THEME_STORAGE_KEY, next);
  } catch {}
  window.setTimeout(() => root.classList.remove("theme-transition"), 450);
  listeners.forEach((l) => l());
}

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as ThemeMode);
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={isDark}
      className={cn(
        "relative grid size-11 place-items-center overflow-hidden rounded-full border border-line text-fg transition-colors hover:border-line-strong hover:bg-bg-muted",
        className,
      )}
    >
      <Sun
        aria-hidden="true"
        className={cn("absolute size-[18px] transition-all duration-500 ease-[var(--ease-out)]", isDark ? "translate-y-6 rotate-90 opacity-0" : "translate-y-0 opacity-100")}
      />
      <Moon
        aria-hidden="true"
        className={cn("absolute size-[18px] transition-all duration-500 ease-[var(--ease-out)]", isDark ? "translate-y-0 opacity-100" : "-translate-y-6 -rotate-90 opacity-0")}
      />
    </button>
  );
}
