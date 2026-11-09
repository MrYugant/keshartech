import type { Transition, Variants } from "motion/react";

/** Shared Motion presets so timing feels identical across components. */
export const easeOut = [0.22, 1, 0.36, 1] as const;

export const springSnappy: Transition = { type: "spring", stiffness: 420, damping: 36, mass: 0.8 };

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: easeOut } },
  exit: { opacity: 0, y: -6, scale: 0.98, transition: { duration: 0.18, ease: easeOut } },
};

export const menuPanel: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: { clipPath: "inset(0 0 0% 0)", transition: { duration: 0.6, ease: easeOut } },
  exit: { clipPath: "inset(0 0 100% 0)", transition: { duration: 0.45, ease: easeOut } },
};

export const staggerChildren = (stagger = 0.06, delayChildren = 0.15): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: stagger, delayChildren } },
});

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};
