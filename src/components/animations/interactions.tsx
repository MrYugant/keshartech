"use client";

import { useEffect } from "react";

/**
 * One global, delegated controller for lightweight interactions:
 *  - [data-reveal]   → adds .is-visible when scrolled into view (CSS does the animating)
 *  - .spotlight      → tracks the pointer for the hover glow
 * Server Components opt in with attributes only, so they stay server-rendered.
 */
export function Interactions() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const observe = (root: ParentNode) =>
      root.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-visible)").forEach((el) => io.observe(el));
    observe(document);

    const mo = new MutationObserver((mutations) => {
      for (const m of mutations) {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches("[data-reveal]:not(.is-visible)")) io.observe(node);
          observe(node);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest<HTMLElement>(".spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return null;
}
