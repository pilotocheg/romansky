# RomanSky Aviation — Landing Page

Marketing website for **RomanSky**, a flying school and aircraft rental based at Piła Airport (EPPI), Poland. Built with Next.js 15 (App Router) and Tailwind CSS v4.

## Stack

- **Next.js 15** — App Router, `next/image`, `next/font`
- **Tailwind CSS v4** — custom design tokens in `app/globals.css`
- **Formspree** — contact form backend (no server needed)
- **Vercel** — recommended deployment target

## Project structure

```text
app/
  layout.tsx      — metadata, fonts, structured data
  page.tsx        — section composition
  globals.css     — Tailwind config + design tokens
components/
  Nav.tsx         — sticky nav + mobile hamburger
  Hero.tsx        — full-viewport hero with CTA
  StatsBar.tsx    — animated counter strip
  About.tsx       — school history + instructor bio
  Programs.tsx    — ULL license card + discovery flight
  Fleet.tsx       — Allegro 2000 specs + rental CTA
  Gallery.tsx     — masonry photo grid
  Testimonials.tsx
  Contact.tsx     — Formspree form + contact info
  FAQ.tsx         — accordion
  Footer.tsx
  StructuredData.tsx — JSON-LD schema
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding real photos

Put image files in `public/images/` (create the folder). Reference them in components:

```tsx
// In any component:
import Image from "next/image";

<Image src="/images/hero.jpg" alt="..." fill className="object-cover" />;
```

For the hero, replace the Unsplash URL in `components/Hero.tsx:8`.  
For the fleet card, replace the URL in `components/Fleet.tsx:34`.  
For the about photo, replace the URL in `components/About.tsx:56`.  
For gallery images, update the `photos` array in `components/Gallery.tsx`.

Supported formats: JPG, PNG, WebP. Next.js converts and resizes automatically.

## Formspree

The form action is already wired to the Formspree endpoint in `components/Contact.tsx:39`. Replace the form ID when you have a real one.

## Favicon

Replace `app/favicon.ico` with your own. Recommended sources:

- **[favicon.io](https://favicon.io)** — generate from text, image, or emoji; free
- **[realfavicongenerator.net](https://realfavicongenerator.net)** — full multi-platform package (iOS, Android, Windows tiles)

Drop the resulting `favicon.ico` into `app/`. For a full set (Apple touch icon, etc.), put the files in `public/` and add `<link>` tags in `app/layout.tsx`.

## Deploy

```bash
# Vercel CLI
npx vercel
```

Or connect the repo in the Vercel dashboard — it auto-detects Next.js.
