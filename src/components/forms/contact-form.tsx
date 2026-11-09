"use client";

import { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheck, CircleExclamationPoint, LoaderCircle } from "lucide-react";
import { budgetOptions, createContactSchema } from "@/lib/validations";
import { easeOut } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Field, Input, Select, Textarea } from "./field";
import type { z } from "zod";

const buildFormSchema = (options: readonly string[]) => createContactSchema(options).omit({ elapsed: true });
type FormSchema = ReturnType<typeof buildFormSchema>;
type FormInput = z.input<FormSchema>;
type FormOutput = z.output<FormSchema>;

/** Time since the visitor first focused the form; used as a bot signal. */
const elapsedSince = (start: number | null) => (start ? Date.now() - start : 0);
const now = () => Date.now();

type Status = { state: "idle" } | { state: "success" } | { state: "error"; message: string };

interface ContactFormProps {
  serviceOptions: string[];
  defaultService?: string;
  email: string;
}

export function ContactForm({ serviceOptions, defaultService, email }: ContactFormProps) {
  const formSchema = useMemo(() => buildFormSchema(serviceOptions), [serviceOptions]);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<FormInput, unknown, FormOutput>({
    resolver: zodResolver(formSchema),
    mode: "onTouched",
    defaultValues: { name: "", company: "", email: "", phone: "", service: defaultService ?? "", budget: "", message: "", website: "" },
  });

  const markStart = () => {
    if (startedAt === null) setStartedAt(now());
  };

  const onSubmit = async (values: FormOutput) => {
    setStatus({ state: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, elapsed: elapsedSince(startedAt) }),
      });
      const body = (await res.json().catch(() => null)) as { ok: boolean; error?: string; fieldErrors?: Record<string, string[]> } | null;
      if (res.ok && body?.ok) {
        setStatus({ state: "success" });
        reset();
        setStartedAt(null);
        return;
      }
      if (body?.fieldErrors) {
        for (const [field, messages] of Object.entries(body.fieldErrors)) {
          if (messages?.[0]) setError(field as keyof FormInput, { message: messages[0] });
        }
      }
      setStatus({ state: "error", message: body?.error ?? `Something went wrong. Please email us at ${email}.` });
    } catch {
      setStatus({ state: "error", message: `We couldn't reach the server. Please check your connection or email us at ${email}.` });
    }
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status.state === "success" ? (
        <motion.div
          key="success"
          role="status"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } }}
          exit={{ opacity: 0 }}
          className="grid min-h-[32rem] place-content-center justify-items-center rounded-[var(--radius-panel)] border border-line bg-surface p-10 text-center"
        >
          <span className="grid size-16 place-items-center rounded-full bg-accent text-accent-fg">
            <CircleCheck aria-hidden="true" className="size-8" />
          </span>
          <h2 className="mt-8 text-h3 text-fg">Thank you — your message is on its way.</h2>
          <p className="mt-3 max-w-md text-fg-muted">We&apos;ve received your enquiry and will get back to you soon.</p>
          <Button variant="secondary" className="mt-8" onClick={() => setStatus({ state: "idle" })}>
            Send another message
          </Button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          onFocus={markStart}
          aria-describedby="form-status"
          className="grid gap-6 rounded-[var(--radius-panel)] border border-line bg-surface p-6 sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="Full name" error={errors.name?.message}>
              <Input id="name" autoComplete="name" invalid={!!errors.name} {...register("name")} />
            </Field>
            <Field id="company" label="Company name" optional error={errors.company?.message}>
              <Input id="company" autoComplete="organization" invalid={!!errors.company} {...register("company")} />
            </Field>
            <Field id="email" label="Email" error={errors.email?.message}>
              <Input id="email" type="email" autoComplete="email" inputMode="email" invalid={!!errors.email} {...register("email")} />
            </Field>
            <Field id="phone" label="Phone" optional error={errors.phone?.message}>
              <Input id="phone" type="tel" autoComplete="tel" inputMode="tel" invalid={!!errors.phone} {...register("phone")} />
            </Field>
            <Field id="service" label="Service required" error={errors.service?.message}>
              <Select id="service" invalid={!!errors.service} {...register("service")}>
                <option value="" disabled>
                  Choose a service
                </option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </Select>
            </Field>
            <Field id="budget" label="Budget" optional error={errors.budget?.message}>
              <Select id="budget" invalid={!!errors.budget} {...register("budget")}>
                <option value="">Select a range</option>
                {budgetOptions.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </Field>
          </div>

          <Field id="message" label="Project description" hint="What are you looking to build or improve? Goals, timelines and current tools all help." error={errors.message?.message}>
            <Textarea id="message" rows={6} invalid={!!errors.message} {...register("message")} />
          </Field>

          {/* Honeypot: invisible to people, tempting to bots */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="website">Website</label>
            <input id="website" type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </div>

          <div id="form-status" aria-live="polite">
            {status.state === "error" && (
              <p className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/5 p-4 text-sm text-red-700 dark:text-red-300">
                <CircleExclamationPoint aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                {status.message}
              </p>
            )}
          </div>

          <div className="flex flex-col-reverse gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs leading-relaxed text-fg-subtle sm:max-w-xs">
              By submitting, you agree to our handling of your details as described in our{" "}
              <a href="/privacy-policy" className="underline underline-offset-2 hover:text-fg">
                privacy policy
              </a>
              .
            </p>
            <Button type="submit" size="lg" arrow={!isSubmitting} disabled={isSubmitting} aria-busy={isSubmitting}>
              {isSubmitting ? (
                <span className="inline-flex items-center gap-2">
                  <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
                  Sending…
                </span>
              ) : (
                "Send enquiry"
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
