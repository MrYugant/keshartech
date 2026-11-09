import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const controlStyles =
  "w-full rounded-2xl border bg-surface px-4 text-[0.975rem] text-fg placeholder:text-fg-subtle transition-[border-color,box-shadow] duration-300 " +
  "focus:outline-none focus:ring-4 focus:ring-accent/15 focus:border-accent aria-[invalid=true]:border-red-500/80";

interface FieldProps {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  className?: string;
  children: ReactNode;
}

/** Label + control + error message wiring, shared by every form control. */
export function Field({ id, label, error, hint, optional, className, children }: FieldProps) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label htmlFor={id} className="flex items-baseline justify-between text-sm font-medium text-fg">
        {label}
        {optional && <span className="text-xs font-normal text-fg-subtle">Optional</span>}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-sm text-fg-subtle">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

type InputProps = ComponentProps<"input"> & { invalid?: boolean };
export function Input({ className, invalid, ...props }: InputProps) {
  return (
    <input
      {...props}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${props.id}-error` : undefined}
      className={cn(controlStyles, "h-13 border-line", className)}
    />
  );
}

type SelectProps = ComponentProps<"select"> & { invalid?: boolean };
export function Select({ className, invalid, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        {...props}
        aria-invalid={invalid || undefined}
        aria-describedby={invalid ? `${props.id}-error` : undefined}
        className={cn(controlStyles, "h-13 appearance-none border-line pr-10", className)}
      >
        {children}
      </select>
      <svg aria-hidden="true" viewBox="0 0 16 16" className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-fg-subtle">
        <path d="M4 6l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

type TextareaProps = ComponentProps<"textarea"> & { invalid?: boolean };
export function Textarea({ className, invalid, ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      aria-invalid={invalid || undefined}
      aria-describedby={invalid ? `${props.id}-error` : undefined}
      className={cn(controlStyles, "min-h-40 resize-y border-line py-3.5", className)}
    />
  );
}
