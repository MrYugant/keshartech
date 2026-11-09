import "server-only";

/**
 * Minimal fixed-window rate limiter. State is per server instance, which is
 * adequate as a first line of defence for a contact form; use a shared store
 * (e.g. Upstash Redis) if stricter guarantees are needed.
 */
const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(key: string, limit = 5, windowMs = 10 * 60_000) {
  const now = Date.now();
  const entry = hits.get(key);
  if (!entry || entry.resetAt < now) {
    hits.set(key, { count: 1, resetAt: now + windowMs });
    if (hits.size > 5_000) {
      for (const [k, v] of hits) if (v.resetAt < now) hits.delete(k);
    }
    return { ok: true, retryAfter: 0 };
  }
  entry.count += 1;
  return entry.count > limit
    ? { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) }
    : { ok: true, retryAfter: 0 };
}
