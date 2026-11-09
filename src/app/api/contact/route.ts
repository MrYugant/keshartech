import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { isEmailConfigured, sendEnquiryEmail } from "@/lib/email";
import { rateLimit } from "@/lib/rate-limit";
import { getSupabase } from "@/lib/supabase/server";
import { createContactSchema } from "@/lib/validations";
import { serviceOptions } from "@/data/services";

const contactSchema = createContactSchema(serviceOptions);

const MIN_FILL_TIME_MS = 3_000;
const MAX_BODY_BYTES = 20_000;

type ApiResponse = { ok: true } | { ok: false; error: string; fieldErrors?: Record<string, string[]> };

const json = (body: ApiResponse, status: number, headers?: HeadersInit) => NextResponse.json(body, { status, headers });

export async function POST(request: NextRequest) {
  // Same-origin check — blocks cross-site form posts.
  const origin = request.headers.get("origin");
  if (origin && new URL(origin).host !== request.headers.get("host")) {
    return json({ ok: false, error: "Invalid request origin." }, 403);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  const limit = rateLimit(`contact:${ip}`);
  if (!limit.ok) {
    return json({ ok: false, error: "Too many submissions. Please try again a little later." }, 429, {
      "Retry-After": String(limit.retryAfter),
    });
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return json({ ok: false, error: "Request is too large." }, 413);

  let payload: unknown;
  try {
    payload = JSON.parse(raw);
  } catch {
    return json({ ok: false, error: "Invalid request body." }, 400);
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      { ok: false, error: "Please check the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors },
      422,
    );
  }
  const data = parsed.data;

  // Spam signals: filled honeypot or impossibly fast submission. Respond
  // generically without storing anything.
  if (data.website || data.elapsed < MIN_FILL_TIME_MS) {
    return json({ ok: false, error: "Your submission could not be verified. Please try again." }, 400);
  }

  const supabase = getSupabase();
  if (!supabase && !isEmailConfigured()) {
    return json(
      { ok: false, error: `Online enquiries are temporarily unavailable. Please email us at ${siteConfig.email}.` },
      503,
    );
  }

  const [stored, emailed] = await Promise.all([
    supabase
      ? supabase
          .from("enquiries")
          .insert({
            name: data.name,
            company: data.company || null,
            email: data.email,
            phone: data.phone || null,
            service: data.service,
            budget: data.budget || null,
            message: data.message,
          })
          .then(({ error }) => {
            if (error) console.error("[contact] supabase insert failed:", error.message);
            return !error;
          })
      : Promise.resolve(false),
    sendEnquiryEmail(data).catch((err: unknown) => {
      console.error("[contact] email failed:", err instanceof Error ? err.message : err);
      return false;
    }),
  ]);

  // Success only when the enquiry actually reached at least one destination.
  if (!stored && !emailed) {
    return json(
      { ok: false, error: `We couldn't deliver your message. Please try again or email ${siteConfig.email}.` },
      502,
    );
  }
  return json({ ok: true }, 200);
}
