# Echelon Fox Website

Marketing site for Echelon Fox, a founder-led marketing and growth agency. Built with Next.js 16, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deployed on Netlify (see `netlify.toml`), which also captures contact form submissions via Netlify Forms.

## Structure

- `app/` — Next.js App Router pages and layout
- `components/` — Shared sections (Nav, Hero, Marquee, Services, Work, Stats, About, Testimonials, CTA, Footer) and the shared `ContactForm`
- `lib/work-data.ts` — Client project data. Read the rules at the top before adding a project: no client names, logos, screenshots, or performance numbers without written permission and verifiable data.

## Content rules

- Nothing unfinished ships. No `TODO`, `EDITABLE`, or placeholder strings in anything a visitor can reach.
- Echelon Fox is industry-agnostic. Individual vertical pages and articles (e-commerce, SaaS, insurance) are fine; site-wide copy stays broad.
- Statistics need a source. If a number can't be traced to the client's own analytics or a citable study, don't publish it.
- The contact form is a Netlify form named `contact`. Its fields must stay in sync across `components/ContactForm.tsx`, the hidden static form in `app/page.tsx`, and `public/netlify-forms.html`.
- No analytics or tracking scripts are installed. If any are added, `app/privacy/page.tsx` and `components/CookieConsent.tsx` must be updated first — the notice is currently informational, not a consent gate.
