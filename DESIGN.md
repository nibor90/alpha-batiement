---
name: Alpha Bâtiment
description: Site vitrine multi-pages pour un artisan couvreur-zingueur en Dordogne, dans le registre visuel moderne d'un site de couvreur professionnel — palette teal/terracotta, cartes à icône, badges pilule.
colors:
  off-white: "#f5f7f8"
  bg-alt: "#eaf1f2"
  surface: "#ffffff"
  ink: "#1b2a30"
  ink-soft: "#45565c"
  ink-muted: "#6b7b82"
  hairline: "#e3e8ea"
  hairline-strong: "#c7d1d4"
  ink-inverse: "#f5f7f8"
  primary-teal: "#5a9ea6"
  primary-teal-dark: "#437880"
  primary-teal-lighter: "#e8f4f6"
  accent-terracotta: "#d4883a"
  accent-terracotta-dark: "#b8702c"
  accent-terracotta-tint: "#fbeee0"
typography:
  display:
    fontFamily: "Montserrat, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem)"
    fontWeight: 800
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Open Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  sm: "0.3rem"
  md: "0.55rem"
  lg: "0.9rem"
  xl: "1.25rem"
  pill: "999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.5rem"
  "6": "2rem"
  "7": "3rem"
  "8": "4rem"
  "9": "6rem"
  "10": "8rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.primary-teal-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  button-inverse:
    backgroundColor: "{colors.accent-terracotta}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  phone-pill:
    backgroundColor: "{colors.accent-terracotta}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.05rem"
  service-card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.xl}"
    border: "1px solid {colors.hairline}"
    padding: "2rem 1.5rem"
---

# Design System: Alpha Bâtiment

## Overview

**Creative North Star: "The Professional Roofer's Site" — user-pinned reference**

Alpha Bâtiment is a multi-trade roofing, zinc-work, insulation and facade contractor in rural Dordogne. This second design pass supersedes the first ("The Architect's Site Visit," preserved on branch `design-v1-canon-artisan`): the client pinned a concrete competitor reference, `https://dt-couverture-33.fr`, and asked the site to follow its visual world — a confident, modern trade-site register with a teal/terracotta palette, rounded icon-badge service cards, pill badges, and a full-bleed photo hero with a dark gradient overlay.

A brief-pinned reference beats any default aesthetic judgment: this system adopts the reference's palette, type pairing, radius scale, shadow language, and card/badge vocabulary. It does **not** adopt anything the reference site cannot prove for Alpha Bâtiment — there is no fabricated review score, no invented "years of experience" statistic, and no decorative "online now" indicator; the one live-status badge on the homepage is computed client-side from the business's real declared hours (Lun–Sam 8h–18h), never a static prop.

**Key Characteristics:**
- Off-white paper ground, dark-navy ink — a calmer, cooler register than the previous stone-neutral system.
- Two-color brand duo: **teal** (structure, calm, links, focus) and **terracotta** (action, urgency, every clickable CTA).
- Montserrat (700/800) display paired with Open Sans body: a bold, geometric-grotesque headline voice over a highly legible workhorse body face.
- Generously rounded corners everywhere (`--radius-lg`/`--radius-xl`, pill badges) — the previous system's tight 3–6px radius is gone.
- Custom line icons (not a generic icon font) carry the seven-trade service grid, matching the reference's icon-badge card pattern without importing its unverifiable content.

## Colors

A teal-and-terracotta duo on an off-white/dark-navy neutral base — calmer and more "software product" than the previous warm-stone register, matching the pinned reference.

### Primary — Teal
- **Primary Teal** (`#5a9ea6`): structural/calm color — nav underlines' resting state is transparent, but hover fills of dropdown items, form-focus rings, and icon badges on service/trust cards all use teal. Hover-darkens to **Primary Teal Dark** (`#437880`).
- **Primary Teal Lighter** (`#e8f4f6`): tint used as the background for icon badges (service cards, trust pills) and dropdown-item hover — the "calm" surface tint.

### Accent — Terracotta
- **Accent Terracotta** (`#d4883a`): the single action color — every primary link color, the phone pill, the nav-link hover underline, the "urgent" service card's go-link, and `.btn-inverse` (the phone button on dark CTA banners). Hover-darkens to **Accent Terracotta Dark** (`#b8702c`).
- **Accent Terracotta Tint** (`#fbeee0`): reserved for form error backgrounds only.

### Neutral
- **Off-White** (`#f5f7f8`): default page background.
- **BG Alt** (`#eaf1f2`): alternate section background (`.section--alt`), teal-tinted rather than the previous warm-beige tint.
- **Surface** (`#ffffff`): pure white for cards, form fields, the sticky header — a cooler, cleaner surface than the old warm-paper tone.
- **Ink** (`#1b2a30`): primary text color and every dark surface (header text on scroll, footer, CTA banner, hero overlay, `.btn-primary` resting state).
- **Ink Soft** (`#45565c`) / **Ink Muted** (`#6b7b82`): secondary/tertiary text.
- **Hairline** (`#e3e8ea`) / **Hairline Strong** (`#c7d1d4`): border weights.

### Named Rules
**The Two-Color Rule.** Teal is calm and structural (it never asks for a click); terracotta is the only color that means "act here" (buttons, phone numbers, hover underlines, urgent states). If a non-interactive heading or block of text turns terracotta, that's a bug — use teal or ink instead.

## Typography

**Display Font:** Montserrat (700 for H3/H4, 800 for H1/H2), self-hosted variable font.
**Body Font:** Open Sans, self-hosted variable font.

**Character:** Montserrat's geometric grotesque forms at heavy weight read as confident and modern — the register the reference site and most competent trade sites share — while Open Sans stays a neutral, highly legible workhorse for reading text at small sizes.

### Hierarchy
- **Display / H1** (800, `clamp(2.25rem, 1.4rem + 3.6vw, 3.75rem)`, line-height 1.12, letter-spacing -0.02em): page hero headline only, one per page, always white when set over the photo hero.
- **Headline / H2** (800, `clamp(1.75rem, 1.2rem + 2vw, 2.5rem)`): section titles.
- **Title / H3** (700, `clamp(1.2rem, 1rem + 0.6vw, 1.375rem)`): service-card and related-card titles.
- **Label / H4** (700, 1.0625rem, uppercase, letter-spacing 0.06em): footer column headings only.
- **Lede** (400, `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)`, color Ink Soft, max-width 34rem).
- **Body** (400, 1rem, line-height 1.55, max-width 34rem).

## Layout

Unchanged from the previous system at the structural level: a single `.container` (max-width 76rem), the same spacing scale (`--space-1` … `--space-10`), and the same breakpoint set (900/820/720/640/560px). What changed is what fills the grid:

- **Full-bleed photo hero** (new): the homepage hero is no longer a two-column text/photo split — the photo is a full-bleed background (`position:absolute; inset:0`) behind a navy-to-teal diagonal gradient (`linear-gradient(115deg, rgba(27,42,48,.96) 0%, rgba(27,42,48,.86) 45%, rgba(67,120,128,.62) 100%)`), with the headline, live-status badge, lede, and actions set in white on top, max-width 34rem, left-aligned.
- **Service card grid** (`.service-grid`, replacing both the old Service Row list and the homepage bento): 4 columns → 2 → 1, each `.service-card` a `--radius-xl` white card with an icon badge, heading, one-line description, and a "Découvrir →" go-link. The urgent service (`.service-card--urgent`) is the same grid cell, just dark-ink, rather than a separate full-width banner — this is the reference's own convention (urgency is a card in the grid, not a special hero-adjacent slot).
- **Trust pills** (`.trust-strip`/`.trust-item`, restyled): four small white pill badges with a teal icon chip, replacing the previous plain text row.

## Elevation & Depth

Shadows read cooler/navy-tinted now (`rgba(27,42,48,…)` instead of the old warm-brown `rgba(33,28,20,…)`), and hover lift is more pronounced to match the reference's `hover:-translate-y-1.5 hover:shadow-xl` service cards.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgba(27,42,48,.06), 0 14px 32px -18px rgba(27,42,48,.22)`): resting elevation for the sticky header, trust pills, and the primary button.
- **Lift** (`0 2px 4px rgba(27,42,48,.1), 0 22px 44px -20px rgba(27,42,48,.3)`): hover state for service cards (`translateY(-5px)`), related cards, buttons, and the resting hero-media/dropdown shadow.

## Shapes

Corners are deliberately generous, matching the reference's rounded-2xl card language: `--radius-sm` (0.3rem) for inputs, `--radius-md` (0.55rem) for the phone pill's icon and small chips, `--radius-lg` (0.9rem) for buttons/related-cards/contact-card, `--radius-xl` (1.25rem) for service cards and the CTA banner, and `999px` pills for the phone number, trust badges, coverage-town chips, gallery tags, and the live-status badge.

## Components

### Buttons
- **Primary:** dark-ink background, white text, `--radius-lg`; hover shifts to Primary Teal Dark and lifts 1px. Inside the hero, the primary CTA is terracotta instead (`.hero__actions .btn-primary`), so the single most important action on the page is the accent color.
- **Ghost:** transparent, Hairline Strong border; hover fills Primary Teal Lighter with a teal border/text — a calm secondary action, never terracotta.
- **Inverse:** terracotta background, white text — used only on dark surfaces (the phone-number action inside every CTA banner), so it pops against `--color-ink`.
- **Phone Pill:** terracotta, pill-shaped, phone icon, present in the header, hero, and every CTA banner.

### Service Card (signature component)
Replaces both the old photo-led Service Row and the homepage bento grid with one component used identically on the homepage and on `prestations.html`: a `--radius-xl` white card, a `3.1rem` icon badge (Primary Teal Lighter background, custom-drawn 24×24 line icon — never a generic icon-font glyph), an H3 title, a one-line truthful description, and a terracotta "Découvrir →" go-link that nudges right on hover. `.service-card--urgent` inverts to dark-ink with a rgba-white icon badge and a terracotta go-link — the grid's one heightened-urgency cell, no longer a separate banner above the grid.

### Live Status Badge (new, signature)
A pill badge (`rgba(255,255,255,.12)` on the hero photo, blurred) with a small pulsing dot, computed by `js/main.js` from the real declared hours (Lun–Sam 8h–18h) at page load — "Ouvert maintenant" with a green pinging dot, or "Fermé actuellement" with a static grey dot outside those hours. This is the one place the system borrows the reference's "live" feel; it never lies, because it reads the same hours printed in the footer.

### Trust Pills
Four small white pill badges below the hero (`.trust-strip`), each a teal icon chip plus a short label ("Camion nacelle", "4 métiers, un interlocuteur", "Basés à Pazayac", "Devis gratuit") — short, factual claims only, no borrowed stats.

### Cards / Containers
- **Related Card / Contact Card:** `--radius-lg`, Hairline border at rest, Lift shadow + `translateY(-3px)` on hover.
- **Coverage town chips:** filled Primary Teal Lighter pills with Primary Teal Dark text (previously outlined neutral chips).
- **Gallery tags:** a small dark-navy translucent pill (`rgba(27,42,48,.72)`, blurred) in the bottom-left corner of each `realisations.html` thumbnail, naming the real trade shown (Couverture / Zinguerie / Façades / Entretien / Nacelle) — the one piece of the reference's portfolio-card convention adopted, using only categories the photo actually shows.

### Inputs / Fields
- Hairline Strong border, `--radius-sm`, white background.
- **Focus:** border shifts to Primary Teal plus a 3px Primary Teal Lighter glow — teal, not terracotta, because a focused field is a calm state, not a call to action.

### Navigation
- **Style:** sticky white header with a resting shadow (no more translucent blur-tint) — closer to the reference's solid `bg-white shadow-sm` header.
- **Nav links:** an animated terracotta underline grows from the center on hover/active (`width: 0 → 60%`), replacing the previous static 2px border-bottom.
- **Dropdown:** Lift-shadow panel, items hover to a Primary Teal Lighter background with Primary Teal Dark text.
- **Mobile (<900px):** unchanged slide-in drawer behavior.

## Motion

Unchanged in mechanism from the previous system — one authored hero entrance plus quiet supporting reveals — but the hero entrance now also staggers in the live-status badge as its own step.

- **The focal moment:** homepage hero content (badge, headline, lede, actions) cascades in with a 5-step stagger (`hero-rise`), and the hero photo settles from a slight zoom (`hero-photo-settle`), both once on load.
- **The live-badge pulse:** `.live-badge__dot::before` pings on a 1.8s loop when open; static when closed. Respects `prefers-reduced-motion`.
- **Supporting reveal:** `.reveal` (single fade-up) and `.stagger-list` (per-child stagger, `animation` not `transition`) unchanged from the previous system.
- All motion respects `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** keep terracotta reserved for things the visitor can act on (buttons, phone numbers, hover underlines, the urgent card) — see the Two-Color Rule.
- **Do** keep every badge, stat, and status indicator computed from a real fact (the live-status badge from real hours, gallery tags from the real trade shown) — never a static prop borrowed from the reference site.
- **Do** draw service-card icons in the site's own 24×24 line-icon grammar (`stroke-width:1.75`, round caps) rather than importing an icon font — the reference's icon-badge *pattern* is adopted, its specific icon set is not.
- **Do** use real, unstaged job-site photography for the hero and gallery; the icon-card grid replaces photography only for the compact service index, not everywhere.
- **Do** keep the phone number visible in the header and every CTA banner.

### Don't:
- **Don't** show a review score, star rating, or testimonial — none are verified for this business; the reference's Google-reviews widget is explicitly not reproduced.
- **Don't** invent a "years in business" or project-count statistic; the reference's "10+ années d'expérience" has no equivalent here because it isn't confirmed.
- **Don't** let the live-status badge become decorative — if the hours in `js/main.js` and the footer ever diverge, that's a bug, not a style choice.
- **Don't** mix teal and terracotta on the same interactive element as if they were interchangeable accents; each has one job (calm vs. action).
- **Don't** use pure black anywhere; the darkest surface is `--color-ink` (`#1b2a30`), always navy-warm, never `#000`.
