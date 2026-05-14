# RomanSky Aviation — Landing Page Specification

## 1. Project Overview

A single-page marketing website for **RomanSky**, an aviation school and aircraft rental service operating in the Czech Republic. The goal is to present the school's training programs, rental fleet, and facilities clearly, and to convert visitors into enquiries via a contact form.

---

## 2. Tech Stack

| Concern      | Choice                                                 |
| ------------ | ------------------------------------------------------ |
| Framework    | Next.js 15 (App Router)                                |
| Styling      | Tailwind CSS v4                                        |
| Form backend | Formspree (free tier — no custom server needed)        |
| Images       | Unsplash placeholder URLs (swappable)                  |
| Fonts        | Google Fonts — **Inter** (all weights via `next/font`) |
| Deployment   | Vercel (recommended) or any static host                |

---

## 3. Design System

### 3.1 Visual Style

Clean & Modern — generous white space, crisp typography, sharp (not rounded) card edges, subtle shadows.

### 3.2 Color Palette

| Token            | Hex       | Usage                                     |
| ---------------- | --------- | ----------------------------------------- |
| `brand-sky`      | `#0EA5E9` | Primary CTA buttons, links, active states |
| `brand-sky-dark` | `#0284C7` | Button hover                              |
| `charcoal`       | `#1E2A38` | Headings, nav text                        |
| `slate`          | `#64748B` | Body copy, labels                         |
| `surface`        | `#F8FAFC` | Section backgrounds (alternating)         |
| `white`          | `#FFFFFF` | Default background                        |
| `border`         | `#E2E8F0` | Dividers, card borders                    |

### 3.3 Typography

| Role    | Spec                              |
| ------- | --------------------------------- |
| H1      | Inter 700, 64px / 1.1 line-height |
| H2      | Inter 700, 40px                   |
| H3      | Inter 600, 24px                   |
| Body    | Inter 400, 16px / 1.6 line-height |
| Caption | Inter 400, 14px, `slate` color    |

### 3.4 Spacing & Layout

- Max content width: `1200px`, centered
- Section vertical padding: `96px` (desktop), `64px` (mobile)
- Grid: 12-column Tailwind grid

### 3.5 Components

- **Button primary**: `bg-brand-sky text-white px-6 py-3 font-semibold hover:bg-brand-sky-dark transition`
- **Button outline**: `border-2 border-brand-sky text-brand-sky px-6 py-3 font-semibold hover:bg-brand-sky hover:text-white transition`
- **Card**: `bg-white border border-border rounded-lg shadow-sm p-6`

---

## 4. Page Sections

### 4.1 Navigation

- Sticky top nav, white background, `shadow-sm` on scroll
- Left: `RomanSky` logotype (text, `charcoal`, Inter 700)
- Right: anchor links — About · Programs · Fleet · Gallery · Contact
- Mobile: hamburger menu, full-width dropdown
- CTA button: `Book a Flight` → scrolls to Contact section

### 4.2 Hero

- Full-width, `100vh` min-height
- Background: high-quality aviation photo (ultralight / small aircraft in flight over Czech countryside)
  - Placeholder: `https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9` (small plane in sky)
- Text overlay (left-aligned, dark gradient scrim behind text):
  - **Headline:** "Take to the Skies with RomanSky"
  - **Sub-headline:** "Ultralight pilot training and aircraft rental in the Czech Republic."
- Two CTAs: `[Start Training]` (primary) and `[Rent an Aircraft →]` (outline, links to Fleet)
- Scroll-down chevron animation at bottom

### 4.3 Stats Bar

- Full-width `charcoal` background strip, 4 stat counters:
  - `500+` Hours flown
  - `XX` Licensed graduates (placeholder)
  - `2` Aircraft in fleet
  - `15+` Years experience (placeholder — adjust to real number)
- Animated count-up on scroll into view

### 4.4 About the School

- Two-column layout: text left, photo right
- **Heading:** "About RomanSky Aviation"
- **Body copy (placeholder):** Paragraph about the school's history, mission, and commitment to safety and quality instruction. Founded by Roman [Surname], certified EASA instructor. Based at [Airfield Name], Czech Republic.
- Photo: instructor/student at aircraft (Unsplash placeholder)
- Certifications row: small badge icons — EASA certified, CAA Czech Republic, [add others]

### 4.5 Training Programs

- Section heading: "Start Your Flying Journey"
- Sub-heading: "We offer structured training toward the Czech Republic Ultralight Aircraft Pilot License (UL PPL)."
- **Single program card** (full-width or centered, max 700px):
  - Icon: airplane silhouette
  - Title: Ultralight Aircraft Pilot License (UL PPL)
  - Issuing authority: Czech Civil Aviation Authority (ÚCL)
  - Description: Placeholder — training requirements, minimum hours, what the license allows (Czech airspace, aircraft under 600 kg MTOW)
  - Key details list: min. age, medical certificate class, theory exam, practical check
  - CTA: `[Enquire About Training]` → scrolls to Contact
- Below card: "Discovery Flight" promo banner — one-off intro flight for beginners, separate CTA

### 4.6 Aircraft Rental Fleet

- Section heading: "Our Fleet"
- **Aircraft card — Allegro 2000:**
  - Photo: Allegro 2000 (Unsplash or public domain ultralight photo — placeholder)
  - Name: Allegro 2000
  - Type: Single-engine ultralight, side-by-side 2-seat
  - Key specs table:
    - Engine: Rotax 912 ULS (100 hp) _(placeholder — verify)_
    - Cruise speed: ~185 km/h _(placeholder)_
    - Range: ~700 km _(placeholder)_
    - Max takeoff weight: 472.5 kg _(placeholder — verify)_
    - Seats: 2
  - Rental rate: `XX CZK / hour` (placeholder)
  - Requirements: Valid UL PPL or equivalent, school checkout flight required
  - CTA: `[Book the Allegro]` → scrolls to Contact
- Note: expand to card grid when more aircraft are added

### 4.7 Photo Gallery

- Section heading: "Life at RomanSky"
- Responsive masonry-style grid (3 columns desktop, 2 tablet, 1 mobile)
- 9 placeholder images from Unsplash (aviation / flying / cockpit themes)
- Lightbox on click (use `yet-another-react-lightbox` or CSS-only fallback)
- Caption overlay on hover (name / description)

### 4.8 Testimonials

- Section heading: "What Our Students Say"
- 3-card carousel / 3-column grid (desktop)
- Each card: quote, student name, license obtained, star rating (5 stars)
- Placeholder testimonials × 3

### 4.9 Contact Form

- Section heading: "Get in Touch"
- Sub-heading: "Whether you're ready to start training or just curious — reach out and we'll get back to you within 24 hours."
- Two-column layout: form left, info right
- **Form fields:**
  - Full Name (required)
  - Email (required)
  - Phone (optional)
  - Enquiry type (select): Training · Aircraft Rental · Discovery Flight · Other
  - Message (textarea, required)
  - `[Send Message]` submit button
- **Form backend:** Formspree — `action="https://formspree.io/f/{FORM_ID}"` (replace with real ID)
- Success state: inline confirmation message (no page reload)
- **Info column (right):**
  - Address: [Airfield Name, City, Czech Republic] _(placeholder)_
  - Phone: [+420 XXX XXX XXX] _(placeholder)_
  - Email: [info@romansky.cz] _(placeholder)_
  - Operating hours: Mon–Sat 08:00–18:00 _(placeholder)_
  - Google Maps embed _(placeholder — insert iframe once address confirmed)_

### 4.10 FAQ

- Section heading: "Frequently Asked Questions"
- Accordion component (one open at a time)
- 6 placeholder questions:
  1. Do I need any prior experience to start training?
  2. How long does it take to get a UL PPL?
  3. What medical certificate do I need?
  4. Can I rent an aircraft if I hold a foreign license?
  5. What are the weather requirements for flights?
  6. How do I book a discovery flight?

### 4.11 Footer

- Dark `charcoal` background
- Three columns: logo + tagline | quick links | contact summary
- Social icons: Facebook, Instagram (placeholders)
- Bottom bar: `© 2025 RomanSky Aviation. All rights reserved.`

---

## 5. Responsive Breakpoints

| Breakpoint | Width        | Notes                           |
| ---------- | ------------ | ------------------------------- |
| Mobile     | < 640px      | Single column, hamburger nav    |
| Tablet     | 640px–1024px | 2-column grids                  |
| Desktop    | > 1024px     | Full layouts as described above |

---

## 6. Performance & SEO

- `next/image` for all images (lazy loading, WebP conversion)
- `next/font` for Inter (no layout shift)
- Page `<title>`: "RomanSky Aviation — Ultralight Pilot Training & Aircraft Rental"
- Meta description: "Learn to fly with RomanSky Aviation. Ultralight pilot license training and Allegro 2000 rental in the Czech Republic. Book your discovery flight today."
- OG image: hero photo with RomanSky overlay
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, ARIA labels on form inputs
- Scroll-spy to highlight active nav link

---

## 7. Accessibility

- Color contrast ratio ≥ 4.5:1 for all text
- Focus-visible outlines on all interactive elements
- Alt text on all images
- Form inputs have `<label>` elements
- Keyboard-navigable mobile menu

---

## 8. Open Items (needs real data before launch)

- [x] School founding year and instructor full name - 2010, Roman Jałowiecki
- [x] Airfield name and full address (for contact section + Maps embed) - Piła (EPPI)
- [x] Phone number and email address - add placeholder for now
- [x] Allegro 2000 exact specs and rental hourly rate - look for specs in the internet, hourly rate - 500zł
- [x] Number of licensed graduates - add placeholder for now
- [x] Years of operation - add placeholder for now
- [x] Real photography (can swap Unsplash placeholders) - add placeholder for now
- [x] Formspree form ID (free account at formspree.io) - will add later
- [x] Any additional certifications or affiliations to display - nothing for now
- [x] Social media profile URLs (Facebook, Instagram) - add placeholder for now
- [x] Privacy policy / GDPR notice (required for Czech/EU users with a contact form) - add placeholder for now
