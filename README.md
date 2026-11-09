# Keshar Tech — keshartech.com

Multi-page company website built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 and Motion.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in to enable the contact form
npm run dev                  # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Development server |
| `npm run build` / `npm start` | Production build / server |
| `npm run lint` | ESLint (flat config, Next core-web-vitals + TypeScript) |
| `npm run typecheck` | `tsc --noEmit` (run `npx next typegen` first on a fresh clone) |

## Where things live

| What | File |
| --- | --- |
| Company info (email, phone, social, tagline) | `src/config/site.ts` |
| Brand colours | `src/app/globals.css` (CSS variables) + `src/config/theme.ts` (TS) |
| Navigation | `src/config/navigation.ts` |
| Services (16) | `src/data/services.ts` → `/services/[slug]` |
| Solutions (5) | `src/data/solutions.ts` → `/solutions/[slug]` |
| Projects (4) | `src/data/projects.ts` → `/work/[slug]` |
| Leadership & specialist network | `src/data/team.ts` |
| Process, strengths, values | `src/data/company.ts` |
| Technologies | `src/data/technologies.ts` |
| SEO metadata + JSON-LD helpers | `src/lib/seo.ts` |

Adding a service, solution or project = adding one object to its data file. Pages, sitemap, menus, OG images and structured data update automatically.

## Contact form

`POST /api/contact` validates with the same Zod schema as the client, checks origin, rate-limits per IP, and rejects honeypot / too-fast submissions.
It reports success **only** when the enquiry was stored and/or emailed:

- **Supabase:** run `supabase/schema.sql`, then set `SUPABASE_URL` and `SUPABASE_KEY` (anon key is enough — RLS allows insert only).
- **Email (Resend):** set `RESEND_API_KEY`, `CONTACT_FROM_EMAIL` (verified sender), `CONTACT_TO_EMAIL`.

With neither configured, the form shows an honest "temporarily unavailable — email us" message.

## Editable placeholders

- `siteConfig.phone` and `siteConfig.social.*` are empty — they appear automatically once filled.
- `src/data/technologies.ts` — review that the list matches the team's actual practice.
- Privacy Policy / Terms — written for this site's real data handling; have them reviewed by a legal professional.

## Deploy

Push to GitHub and import into Vercel. Add the environment variables in Vercel project settings.
