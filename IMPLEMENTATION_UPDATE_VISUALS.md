# Implementation Plan: Irida Hotel Visuals & UX Update

**Document:** `IMPLEMENTATION_UPDATE_VISUALS.md`  
**Target:** Irida Hotel Landing Page (`Irida`)  
**Status:** Ready for Execution (Planning Only — No Code Modified Yet)  
**Trackable Checklist:** Included below for multi-session and cross-agent execution.

---

## 1. Executive Summary & Objective

The goal of this update is to refine the Irida Hotel web application into a cohesive, high-end, boutique hospitality experience. The update addresses five core pillars:
1. **Brief & Copy Cleanup:** Eliminate typos, remove decorative emojis/icons from headings, standardize hotel nomenclature ("Irida Hotel"), describe design intent without external brand comparisons, and explicitly eliminate any spa references.
2. **Visitor's Journey:** Reorder and structure the page logically (Hero &rarr; Welcome Story &rarr; Rooms & Suites &rarr; Experiences &rarr; Gallery &rarr; Location &rarr; Booking Request &rarr; Contact &rarr; Footer), featuring early and repeated Booking CTAs and intentional emotional goals per section.
3. **Visual Direction:** Enforce a tranquil Mediterranean luxury aesthetic (warm white, sand, soft gold accents, deep neutral text, strictly zero purple hues), editorial typography (Cormorant Garamond + Inter), calm whitespace, and subtle micro-interactions.
4. **Interactive Features:** Validate and connect the booking request workflow, contact form, newsletter signup, active scrollspy navigation with mobile menu, interactive map with directions CTA, and replace video elements with curated high-resolution photography.
5. **SEO, Performance & Launch Readiness:** Embed keywords naturally, ensure mobile responsiveness, and run quality verification checks across all forms and dialogs.

---

## 2. Answers & Contextual Baseline for Key Brief Questions

Based on the existing codebase configuration and architecture:

| Question | Baseline Setting | Notes / Customization Target |
| :--- | :--- | :--- |
| **1. Hotel Location** | **Parga, Greece** (Epirus / Ionian Coast) | Coordinates: `39.284356, 20.404706`. Incorporated into titles, hero subtitles, map embeds, and SEO tags. |
| **2. Imagery & Video** | **Curated Stock Photography** (Pexels Mediterranean collection) | The video hero (`/hero.mp4`) will be replaced with high-res photography with a dark contrast overlay until proprietary video assets are provided. |
| **3. Booking Model & Contact Info** | **Booking Request / Inquiry Engine** (Saved to Supabase database) | Direct reservation inquiry without upfront credit card processing. Rates/totals confirmed by concierge. Phone: `+30 268 403 2564`, Email: `info@iridahotel.gr`. |

---

## 3. Detailed Specifications by Area

### Area 1: Clean Up the Brief & Copywriting Standards
- **Nomenclature Standardization:** Standardize on **"Irida Hotel"** across all headers, narrative copy, metadata, and copyright notices (deprecate mixed usage like "Irida Boutique Hotel" except where referencing historical domains).
- **Spelling & Grammar Corrections:** Audit all copy to resolve typos (e.g., ensuring "high quality", "separates", and "Categories" are correctly spelled).
- **Heading Styling:** Strip decorative icons and emojis from content headings so that typography remains editorial, clean, and elevated.
- **Brand Voice & Aesthetic Description:** Replace references to external hotel websites with vivid, original descriptions of Irida Hotel's distinctive atmosphere: relaxed coastal tranquility, understated Greek elegance, warm natural textures, and attentive personalized hospitality.
- **Clarification on Amenities ("No Spa"):** Explicitly declare that Irida Hotel focuses on tranquil coastal living, sea-view suites, an infinity pool, and culinary experiences; **no spa or wellness center section** will be shown on the page.

### Area 2: Visitor's Journey & Information Architecture
The page sequence will guide the guest along an intuitive emotional journey:

```
[ Sticky Navbar: Logo, Navigation Links, Direct Phone, "Book Your Stay" CTA ]
                                  │
                                  ▼
[ 1. Hero Section (#home) ]
  • Goal: Immediate sense of arrival, serenity, and panoramic sea views.
  • Content: Centered editorial headline, subtitle, primary Booking CTA + Secondary "View Rooms" link.
                                  │
                                  ▼
[ 2. Welcome Story / About (#about) ]
  • Goal: Evoke slow-paced Mediterranean living, warm hospitality, and bespoke attention.
  • Content: Editorial story, architectural photo grid, 3 key tranquil hospitality highlights.
                                  │
                                  ▼
[ 3. Rooms & Suites (#rooms) ]
  • Goal: Inspire exploration and desire for specific accommodations.
  • Content: 4 distinct categories (Deluxe, Senior, Superior, Honeymoon), 17 individually named suites.
  • Interaction: Each suite card opens a modal with a photo carousel, specs (size/guests), description, and "Book This Suite" CTA.
                                  │
                                  ▼
[ 4. Experiences (#experiences) ]
  • Goal: Envision the daily rhythm of staying at Irida Hotel.
  • Content: Infinity pool, beach access, coastal dining, bespoke boat/local excursions.
                                  │
                                  ▼
[ 5. Gallery (#gallery) ]
  • Goal: Provide visual proof of the hotel's beauty and ambiance.
  • Content: Filterable grid (Views, Pool, Suites, Dining, Coast, Guests) with a full-screen lightbox viewer.
                                  │
                                  ▼
[ 6. Location (#location) ]
  • Goal: Reassure guests of convenient travel and picturesque surroundings in Parga.
  • Content: Overview of Parga setting, key nearby points of interest, embedded Google Map, "Get Directions" button.
                                  │
                                  ▼
[ 7. Booking Request (#booking) ]
  • Goal: Convert interest into a tangible reservation inquiry.
  • Content: Interactive two-step inquiry widget (Arrival, Departure, Guests, Suite selection &rarr; Guest Details & Notes).
                                  │
                                  ▼
[ 8. Contact (#contact) ]
  • Goal: Open direct communication for personalized assistance.
  • Content: Phone, email, address, and interactive message form with instant confirmation feedback.
                                  │
                                  ▼
[ 9. Footer ]
  • Goal: Clean closure, explore navigation, contact summary, and newsletter subscription form.
```

### Area 3: Visual Direction & Styling Guidelines
- **Color Palette:**
  - **Warm White / Page Background:** `#FBF8F3` (`sand-50`)
  - **Soft Sand & Linen Tones:** `#F5EFE4` (`sand-100`), `#EBDFCB` (`sand-200`), `#DCC9A8` (`sand-300`)
  - **Refined Gold Accents:** `#D2B06A` (`gold-400`), `#B8924A` (`gold-500`), `#9A7535` (`gold-600`)
  - **Deep Charcoal / Warm Ink Text:** `#1A1815` (`ink-900`), `#2A2723` (`ink-800`), `#3D3A35` (`ink-700`)
  - **Negative Constraint:** Strict exclusion of purple, lavender, magenta, or cold violet tones.
- **Typography:**
  - **Display / Headings:** Cormorant Garamond (weights 400, 500, 600) — classic, elegant, editorial.
  - **Body / Interface:** Inter (weights 400, 500, 600) — clean, highly readable, neutral.
- **Hero Presentation:**
  - Full viewport height (`min-h-[100svh]`).
  - High-resolution stock imagery background with a gentle dark gradient overlay (`ink-900/50` to `ink-900/70`) for WCAG AAA text contrast.
  - Centered text block with staggered fade-up animations.
- **Spacing & Rhythm:** Generous vertical padding (`py-24 lg:py-32`), contained max-widths (`max-w-7xl`), and breathable card gaps.
- **Motion & Interactions:**
  - Scroll-triggered fade-ups via `IntersectionObserver`.
  - Subtle hover transitions on suite and gallery cards (`scale-105` to `scale-110` with ease-out curves).
  - Smooth native scrolling for all internal anchor navigation (`#rooms`, `#booking`, etc.).

### Area 4: Working Features & Technical Implementation
- **Hero Background:** Replace video background in `src/components/Hero.tsx` with high-resolution responsive stock imagery (`photos.hero`), maintaining responsive framing and clean loading behavior.
- **Booking Request Form (`src/components/Booking.tsx`):**
  - Input validation: Arrival must be today or later; departure must be at least 1 night after arrival; guest count between 1 and 10; suite pre-selection support.
  - Step 1: Date and party selection &rarr; Step 2: Guest contact information &rarr; Step 3: Confirmation thank-you card.
  - Persists data to Supabase table `booking_requests`.
- **Contact Form (`src/components/Contact.tsx`):**
  - Captures full name, email, and message.
  - Persists to Supabase table `contact_messages`.
  - Displays inline success thank-you note and resets fields.
- **Newsletter Subscription (`src/components/Footer.tsx`):**
  - Captures and validates email addresses.
  - Handles duplicate subscriptions gracefully (Supabase unique constraint `23505`).
  - Shows clear confirmation feedback.
- **Sticky Navbar & ScrollSpy (`src/components/Navbar.tsx`):**
  - Active section tracking: Dynamically highlight the navigation link corresponding to the section currently in viewport.
  - Header transition: Translucent backdrop with blur on scroll (`bg-sand-50/95 shadow-nav backdrop-blur-md`).
  - Mobile drawer: Responsive collapsible menu with smooth open/close and automatic dismissal upon selecting a link.
- **Interactive Map (`src/components/Location.tsx`):**
  - Embed responsive Google Maps iframe targeting Parga, Greece.
  - "Get Directions" button linking directly to Google Maps navigation (`https://www.google.com/maps/dir/?api=1&destination=39.284356,20.404706`).
- **Suite Modal (`src/components/SuiteDialog.tsx`):**
  - Keyboard navigation (Escape to close, Left/Right arrows to browse photos).
  - Touch swipe support for mobile visitors.
  - "Book This Suite" CTA that pre-fills the booking form and smoothly scrolls to `#booking`.

### Area 5: SEO, Performance & Launch Readiness
- **Metadata in `index.html`:**
  - Title: `Irida Hotel | Luxury Boutique Hotel in Parga, Greece`
  - Meta Description: `Experience Irida Hotel in Parga, Greece: an intimate boutique retreat overlooking the Ionian Sea, featuring curated suites, an infinity pool, and authentic Mediterranean hospitality.`
  - OpenGraph & Twitter tags updated with canonical location and imagery.
- **Semantic Structure:** Proper hierarchy (`<h1>` only in Hero, `<h2>` for section anchors, `<h3>` for cards and modals).
- **Asset Optimization:** Lazy loading on all below-the-fold images, modern aspect ratios, and zero unused external fonts.

---

## 4. Master Progress Checklist

Use this checklist to track implementation progress across sessions and agents.

### Phase 1: Brief, Copy & Content Audit
- [ ] **1.1** Audit all text strings across the project to ensure 100% spelling accuracy ("high quality", "separates", "Categories").
- [ ] **1.2** Verify all section headings have no decorative icons or emoji prefixes.
- [ ] **1.3** Standardize the hotel name to "Irida Hotel" in all components (`Navbar`, `Hero`, `About`, `Location`, `Footer`, `index.html`).
- [ ] **1.4** Confirm standard contact email is uniform (recommendation: `info@iridahotel.gr`).
- [ ] **1.5** Review all copywriting to ensure evocative, original descriptions free of competitor site references.
- [ ] **1.6** Verify that no spa or wellness references appear anywhere in the content or navigation.

### Phase 2: Page Architecture & Layout Flow
- [ ] **2.1** Verify section ordering in `src/App.tsx`:
  1. `Navbar`
  2. `Hero` (`#home`)
  3. `About` (`#about`)
  4. `Rooms` (`#rooms`)
  5. `Experiences` (`#experiences` & `#culture`)
  6. `Gallery` (`#gallery`)
  7. `Location` (`#location`)
  8. `Booking` (`#booking`)
  9. `Contact` (`#contact`)
  10. `Footer`
- [ ] **2.2** Verify dual Booking CTAs: Primary CTA in `Hero` + Sticky CTA in `Navbar` at top, and repeat full booking module at bottom (`#booking`).
- [ ] **2.3** Verify each section has an introductory emotion/intent descriptor line guiding the visitor.

### Phase 3: Visual Identity & Styling
- [ ] **3.1** Audit `tailwind.config.js` to ensure the palette contains only `sand`, `gold`, `ink`, and warm neutral tokens (zero purple/violet).
- [ ] **3.2** Verify Google Fonts imports in `index.html` include `Cormorant Garamond` and `Inter`.
- [ ] **3.3** Verify headings use `font-serif` and body text uses `font-sans`.
- [ ] **3.4** Replace `<video>` element in `src/components/Hero.tsx` with high-resolution image background and soft darkening gradient overlay.
- [ ] **3.5** Confirm spacing between all sections is generous (`py-24 lg:py-32`).
- [ ] **3.6** Verify hover micro-interactions (subtle image scaling, smooth button translates) across room cards, gallery images, and buttons.

### Phase 4: Working Features & Logic
- [ ] **4.1 Suite Organization & Modal Dialog:**
  - [ ] 4.1.1 Confirm 4 categories are clearly grouped: Deluxe Suites, Senior Suites, Superior Suites, Honeymoon Suites.
  - [ ] 4.1.2 Verify all 17 suites are present with accurate category assignments.
  - [ ] 4.1.3 Verify clicking a suite opens `SuiteDialog` with multi-photo carousel, thumbnail navigation, specs, and a direct "Book This Suite" button.
  - [ ] 4.1.4 Verify "Book This Suite" smoothly scrolls down and selects the suite in `#booking`.
- [ ] **4.2 Booking Request Engine (`Booking.tsx`):**
  - [ ] 4.2.1 Validate arrival date (prevent selecting past dates).
  - [ ] 4.2.2 Validate departure date (must be after arrival date).
  - [ ] 4.2.3 Ensure guest counter (1–10) works accurately.
  - [ ] 4.2.4 Verify review step accurately displays calculated nights, party size, and selected suite.
  - [ ] 4.2.5 Test submission to Supabase `booking_requests` table.
  - [ ] 4.2.6 Verify confirmation view with option to make another request.
- [ ] **4.3 Contact Form (`Contact.tsx`):**
  - [ ] 4.3.1 Validate required fields (Full Name, Email, Message).
  - [ ] 4.3.2 Test submission to Supabase `contact_messages` table.
  - [ ] 4.3.3 Confirm display of inline success thank-you note and form reset.
- [ ] **4.4 Newsletter Subscription (`Footer.tsx`):**
  - [ ] 4.4.1 Validate email syntax.
  - [ ] 4.4.2 Test submission to Supabase `newsletter_subscribers` table (handling duplicates gracefully).
  - [ ] 4.4.3 Confirm display of subscription confirmation note.
- [ ] **4.5 Sticky Navbar & ScrollSpy (`Navbar.tsx`):**
  - [ ] 4.5.1 Implement active section indicator / scrollspy to highlight the visible section link.
  - [ ] 4.5.2 Verify transparent-to-solid transition on scroll past 40px.
  - [ ] 4.5.3 Verify mobile hamburger menu opens/closes smoothly and dismisses upon clicking any navigation link.
- [ ] **4.6 Location & Map (`Location.tsx`):**
  - [ ] 4.6.1 Verify interactive Google Maps iframe is centered on Irida Hotel in Parga.
  - [ ] 4.6.2 Verify "Get Directions" button opens external Google Maps directions link in a new tab.

### Phase 5: SEO, Mobile Responsiveness & Polish
- [ ] **5.1** Verify `index.html` title, meta description, and OpenGraph tags include "Parga, Greece" and relevant keywords.
- [ ] **5.2** Verify mobile viewports (375px, 414px, 768px, 1024px, 1440px) render without horizontal overflow or cramped layouts.
- [ ] **5.3** Ensure all interactive elements have accessible `aria-label` attributes and focus visible states.
- [ ] **5.4** Run build test (`npm run build`) and linter (`npm run lint`) to confirm zero compilation or TypeScript errors.

---

## 5. File Impact Matrix

| File Path | Nature of Changes |
| :--- | :--- |
| `index.html` | Update meta title, description, OpenGraph tags, and verify font links. |
| `src/components/Hero.tsx` | Replace video with high-res stock photo, update overlay and typography hierarchy. |
| `src/components/Navbar.tsx` | Add ScrollSpy section highlight, verify mobile drawer auto-dismiss. |
| `src/components/About.tsx` | Ensure consistent naming ("Irida Hotel"), remove any icon prefixes, polish copy. |
| `src/components/Rooms.tsx` | Polish 4 category headers, ensure clean room cards with "View Suite" trigger. |
| `src/components/SuiteDialog.tsx` | Verify carousel navigation, specs display, and "Book This Suite" CTA flow. |
| `src/components/Experiences.tsx` | Ensure evocative descriptions of pool, beach, dining, excursions; verify no spa references. |
| `src/components/Gallery.tsx` | Verify category filters and full-screen lightbox navigation. |
| `src/components/Location.tsx` | Verify Parga copy, map embed, and "Get Directions" CTA. |
| `src/components/Booking.tsx` | Verify 2-step inquiry flow, validations, Supabase insert, and confirmation screen. |
| `src/components/Contact.tsx` | Verify form validation, Supabase insert, and thank-you confirmation note. |
| `src/components/Footer.tsx` | Standardize branding, verify newsletter submission, and contact details. |
| `src/lib/siteData.ts` | Verify contact info (`info@iridahotel.gr`), stock image URLs, and navigation links. |
| `src/lib/suites.ts` | Verify all 17 suite descriptions and category groupings. |

---

## 6. Execution Instructions for Dev Agents

When switching to implementation mode:
1. Refer to this document (`IMPLEMENTATION_UPDATE_VISUALS.md`) as the single source of truth.
2. Complete each task phase by phase, checking off items in the **Master Progress Checklist**.
3. Do not introduce any purple color codes (e.g., `#8B5CF6`, `#7C3AED`, `purple-*`, `violet-*`).
4. Keep all build checks (`npm run build`) passing after each component modification.
