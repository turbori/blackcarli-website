# BLACKCARLI — Private Chauffeur Service Website

Marketing and booking website for BLACKCARLI, a private chauffeured transportation service
serving the five boroughs of NYC, Long Island, Connecticut, and New Jersey.

## Stack

- Next.js 16 (App Router) · TypeScript · Tailwind CSS 4
- Booking: live Moovs widget embedded on `/quote` (instant pricing + deposits)
- Address autocomplete via OpenStreetMap, proxied through `/api/geocode`
- Deployed on Vercel

## Getting Started

```bash
npm install
npm run dev     # start dev server (localhost:3000)
npm run build   # production build
npm run lint    # lint check
```

## Configuration

All business info — name, email, phone, service areas, insurance, etc. — is centralized in
`src/lib/site.ts`. Update values there to change what's shown across the site.

```ts
// src/lib/site.ts
export const SITE = {
  name: "BLACKCARLI",
  email: "blackcarlongisland@gmail.com",
  domain: "blackcarli.com",
  // ...
};
```

## Project Structure

```
src/app/               → pages (home, services, corporate, about, quote, locations/[city])
src/app/api/geocode/   → address autocomplete for the quote form
src/components/        → Navbar, Footer, shared UI
src/lib/site.ts        → central business info config
public/fleet/          → vehicle photography
```

## Notes for future updates

- **Phone number & TLC license** — not yet set in `src/lib/site.ts`. Adding them surfaces phone
  CTAs and a trust-building license number in the footer/about page.
- **Fleet photography** — swap files in `public/fleet/` to update vehicle imagery sitewide.
- **Spanish translation** — not yet built; would require i18n routing plus professional
  (non-machine) translation.
- **Reviews** — no testimonials are shown yet. Once live, Moovs can trigger post-ride review
  requests to start building real social proof.
