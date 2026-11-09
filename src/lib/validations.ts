import { z } from "zod";

export const budgetOptions = [
  "Not sure yet",
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
] as const;

const phonePattern = /^[+()\-\s\d]{7,20}$/;

/**
 * Contact schema shared by the client form and the API route — one definition,
 * validated on both sides. Service options are injected so this module stays
 * free of content data (keeping it out of the client bundle).
 */
export function createContactSchema(serviceOptions: readonly string[]) {
  return z.object({
    name: z.string().trim().min(2, "Please enter your full name").max(100, "Name is too long"),
    company: z.string().trim().max(120, "Company name is too long").optional().or(z.literal("")),
    email: z.string().trim().toLowerCase().email("Please enter a valid email address").max(160),
    phone: z
      .string()
      .trim()
      .max(20, "Phone number is too long")
      .refine((v) => v === "" || phonePattern.test(v), "Please enter a valid phone number"),
    service: z.enum(serviceOptions as [string, ...string[]], { message: "Please choose a service" }),
    budget: z.enum(budgetOptions).optional().or(z.literal("")),
    message: z
      .string()
      .trim()
      .min(20, "Please share a little more detail (at least 20 characters)")
      .max(5000, "Please keep your message under 5,000 characters"),
    /** Honeypot — real visitors never fill it. Checked by the API route, not reported as a field error. */
    website: z.string().max(500).optional(),
    /** Milliseconds since the visitor started filling the form — bots submit instantly. */
    elapsed: z.number().int().nonnegative(),
  });
}

export type ContactData = z.output<ReturnType<typeof createContactSchema>>;
