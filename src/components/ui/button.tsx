import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "inverse" | "ghost";
type Size = "md" | "lg";

const base =
  "group/btn relative inline-flex shrink-0 items-center justify-center gap-2.5 overflow-hidden rounded-full font-medium " +
  "transition-[color,border-color,transform] duration-500 ease-[var(--ease-out)] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 " +
  "before:absolute before:inset-0 before:-z-0 before:translate-y-[101%] before:rounded-[inherit] before:transition-transform before:duration-500 before:ease-[var(--ease-out)] hover:before:translate-y-0";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-fg before:bg-inverse hover:text-inverse-fg",
  secondary: "border border-line-strong text-fg before:bg-fg hover:border-fg hover:text-bg",
  inverse: "bg-inverse text-inverse-fg before:bg-accent hover:text-accent-fg",
  ghost: "text-fg before:hidden hover:text-accent-text px-0!",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-[0.975rem]",
};

export function buttonStyles({ variant = "primary", size = "md", className }: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cn(base, variants[variant], sizes[size], className);
}

function ButtonContent({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      <span className="relative z-10">{children}</span>
      {arrow && (
        <span aria-hidden="true" className="relative z-10 grid size-5 place-items-center overflow-hidden">
          <ArrowUpRight className="size-4 transition-transform duration-500 ease-[var(--ease-out)] group-hover/btn:translate-x-5 group-hover/btn:-translate-y-5" />
          <ArrowUpRight className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-500 ease-[var(--ease-out)] group-hover/btn:translate-x-0 group-hover/btn:translate-y-0" />
        </span>
      )}
    </>
  );
}

type Common = { variant?: Variant; size?: Size; arrow?: boolean; className?: string; children: ReactNode };

export function ButtonLink({ variant, size, arrow, className, children, ...props }: Common & Omit<ComponentProps<typeof Link>, "className" | "children">) {
  const external = typeof props.href === "string" && /^(https?:|mailto:|tel:)/.test(props.href);
  return (
    <Link
      {...props}
      {...(external && props.href.toString().startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
      className={buttonStyles({ variant, size, className })}
    >
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </Link>
  );
}

export function Button({ variant, size, arrow, className, children, ...props }: Common & Omit<ComponentProps<"button">, "className" | "children">) {
  return (
    <button {...props} className={buttonStyles({ variant, size, className })}>
      <ButtonContent arrow={arrow}>{children}</ButtonContent>
    </button>
  );
}
