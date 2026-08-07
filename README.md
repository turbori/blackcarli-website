# BLACKCARLI — Marketing & Booking Website

Marketing site for BLACKCARLI (formerly "SG Limo"), a private chauffeur service covering the five
boroughs of NYC, Long Island, Connecticut, and New Jersey.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS 4
- Email: Resend, sent from the `/quote` form via `src/app/api/quote/route.ts`
- Deployed on Vercel under the **RiDevelop** team (not Hydden)

## Commands

```bash
npm install
npm run dev     # start dev server (localhost:3000)
npm run build   # TypeScript check + production build
npm run lint     # ESLint
```

## Business info

All editable business info (name, email, phone, insurance, domain) lives in one place:
`src/lib/site.ts`.

## Open items — confirm with client before launch

- [ ] **Domain** — client does not own one yet. Site currently uses `blackcarli.com` as a
      placeholder throughout metadata/schema. Update `src/lib/site.ts` (`domain`, `url`) once purchased.
- [ ] **Legal entity name** — `SITE.legalName` was updated to "BLACKCARLI Inc." as a placeholder.
      Confirm whether the client has actually renamed the LLC or filed a DBA — it may still be
      legally registered as "SG Limo Inc."
- [ ] **Business email** — `SITE.email` is still `sglimo646@gmail.com`, tied to the old brand name.
      Confirm with the client whether they want a new inbox to match BLACKCARLI.
- [ ] **Phone number** — not yet provided. `SITE.phone` is empty, so phone CTAs are hidden and
      email is used instead. Add the number to `src/lib/site.ts` once available.
- [ ] **TLC license number** — not yet provided. Add to `src/lib/site.ts` (`tlcLicense`) and
      surface it in the footer/about page once available, since it's a meaningful trust signal.
- [ ] **RESEND_API_KEY** — set this env var in Vercel (and locally in `.env.local`) for the quote
      form to send email. Also verify a sending domain in Resend once the real domain is live —
      until then, emails send from Resend's shared `onboarding@resend.dev` sandbox address.
- [ ] **Real fleet/founder photography** — all vehicle and hero imagery is licensed stock
      (Unsplash), clearly labeled as placeholder in the UI. Swap in real photos once available.
- [ ] **MOOVS integration** — client has an unpaid MOOVS account. Once upgraded to a plan with a
      website booking widget + Stripe deposits, replace/augment the `/quote` page form with the
      MOOVS embed for live pricing and online payment.
- [ ] **Spanish translation** — client requested English/Spanish bilingual support. Not yet built;
      requires professional translation (not machine translation) before implementation.
- [ ] **Reviews** — client currently has no reviews. No fabricated testimonials or ratings are
      used anywhere on the site. Set up post-ride review requests once live to start building
      real social proof.

## Structure

```
src/app/            → routes (home, services, corporate, about, quote, locations/[city])
src/app/api/quote/   → Resend email handler for the quote form
src/components/      → Navbar, Footer, Breadcrumbs, QuoteForm
src/lib/site.ts      → central business info (name, email, phone, domain, etc.)
```
