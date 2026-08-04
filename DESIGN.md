---
name: Alpha Bâtiment
description: Site vitrine multi-pages pour un artisan couvreur-zingueur en Dordogne, dans le registre visuel moderne d'un site de couvreur professionnel — mise en page pinnée par le client, mais couleurs reprises du logo Alpha Bâtiment (rouge/charbon), cartes à icône, badges pilule.
colors:
  off-white: "#f7f6f5"
  bg-alt: "#efecec"
  surface: "#ffffff"
  ink: "#231f20"
  ink-soft: "#4c4748"
  ink-muted: "#746f70"
  hairline: "#e7e3e3"
  hairline-strong: "#d2cdce"
  ink-inverse: "#f7f6f5"
  brand-red: "#be1e2f"
  brand-red-dark: "#8f1522"
  brand-red-lighter: "#fbe9eb"
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
    backgroundColor: "{colors.brand-red}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.brand-red-dark}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  button-inverse:
    backgroundColor: "{colors.brand-red}"
    textColor: "#ffffff"
    rounded: "{rounded.lg}"
    padding: "0.85rem 1.6rem"
  phone-pill:
    backgroundColor: "{colors.brand-red}"
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

**Creative North Star: "The Professional Roofer's Site," in Alpha Bâtiment's own colors**

Alpha Bâtiment is a multi-trade roofing, zinc-work, insulation and facade contractor in rural Dordogne. This design pass keeps the layout vocabulary the client pinned from a competitor reference, `https://dt-couverture-33.fr` — a confident, modern trade-site register with rounded icon-badge service cards, pill badges, and a full-bleed photo hero with a dark gradient overlay — but replaces that reference's teal/terracotta palette with Alpha Bâtiment's **own** brand colors, sampled directly from the client's logo: brand red `#be1e2f` and charcoal ink `#231f20`.

A brief-pinned reference beats any default aesthetic judgment for *layout*: this system adopts the reference's type pairing, radius scale, shadow language, and card/badge vocabulary. It does **not** adopt the reference's colors, nor anything it cannot prove for Alpha Bâtiment — there is no fabricated review score, no invented "years of experience" statistic, and no decorative "closed" indicator; the one live-status badge on the homepage is computed client-side from the business's real declared hours (Lun–Sam 8h–18h) and only ever announces "ouvert" — outside those hours it is hidden rather than displaying a "fermé" message.

**Key Characteristics:**
- Off-white paper ground, charcoal ink (`#231f20`, sampled from the logo) — no navy, no invented dark hue.
- **Single brand color, not a duo:** the same red (`#be1e2f`) printed in the logo is used for every interactive/accent moment — buttons, phone pill, hover underlines, the urgent-service card, focus rings. There is no second "calm" hue; charcoal and neutral greys carry the structural/calm role instead.
- Montserrat (700/800) display paired with Open Sans body: a bold, geometric-grotesque headline voice over a highly legible workhorse body face.
- Generously rounded corners everywhere (`--radius-lg`/`--radius-xl`, pill badges) — the previous system's tight 3–6px radius is gone.
- Custom line icons (not a generic icon font) carry the seven-trade service grid, matching the reference's icon-badge card pattern without importing its unverifiable content, all tinted in the same brand red.

## Colors

A single brand red on an off-white/charcoal neutral base, taken pixel-for-pixel from the client's own logo (`assets/brand/logo-rouge-noir.png`) — not a hue borrowed from the layout reference.

### Brand Red
- **Brand Red** (`#be1e2f`): the *only* accent color on the site — every primary button, the phone pill, the nav-link hover underline, form-focus rings, dropdown-item hover, icon badges on service/trust/coverage cards, and the "urgent" service card's full background. Hover/pressed states darken to **Brand Red Dark** (`#8f1522`).
- **Brand Red Lighter** (`#fbe9eb`): a light tint of the same red, used as the background for icon badges (service cards, trust pills, coverage chips), dropdown-item hover, form-focus glow, and form-error backgrounds — the "calm" surface tint is a *tint of the brand color*, not a second hue.

### Neutral
- **Off-White** (`#f7f6f5`): default page background.
- **BG Alt** (`#efecec`): alternate section background (`.section--alt`).
- **Surface** (`#ffffff`): pure white for cards, form fields, the sticky header.
- **Ink** (`#231f20`): sampled from the logo's charcoal. Primary text color and every dark surface (header text on scroll, footer, CTA banner, hero overlay resting tone, `.btn-primary` is red, but the ink is used for `.btn-ghost` text, dark sections, and the hero gradient's darkest stop).
- **Ink Soft** (`#4c4748`) / **Ink Muted** (`#746f70`): secondary/tertiary text.
- **Hairline** (`#e7e3e3`) / **Hairline Strong** (`#d2cdce`): border weights.

### Named Rule
**The Logo-Only-Color Rule.** Every color on the site is either the client's own logo red (`#be1e2f`), the logo's charcoal ink (`#231f20`), a neutral off-white/grey, or a tint/shade of those — never a hue invented or borrowed from a competitor reference. If a new UI state needs a color, derive it from these two, don't reach for teal, terracotta, or navy.

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

A single `.container` (max-width 76rem), a spacing scale (`--space-1` … `--space-10`), and a breakpoint set (900/820/720/640/560px).

- **Full-bleed photo hero:** the homepage hero is a full-bleed background (`position:absolute; inset:0`) behind a charcoal-to-red diagonal gradient (`linear-gradient(115deg, rgba(20,17,18,.95) 0%, rgba(35,31,32,.82) 45%, rgba(190,30,47,.55) 100%)`), with the headline, live-status badge, lede, and actions set in white on top, max-width 34rem, left-aligned. The gradient's warm red edge is the one place the brand color appears inside the photo itself.
- **Service card grid** (`.service-grid`): 4 columns → 2 → 1, each `.service-card` a `--radius-xl` white card with an icon badge, heading, one-line description, and a "Découvrir →" go-link. The urgent service (`.service-card--urgent`) is the same grid cell, filled solid brand red instead of white — "urgent" reads literally as the brand's own alert color, no separate dark-ink treatment needed.
- **Trust pills** (`.trust-strip`/`.trust-item`): four small white pill badges with a brand-red icon chip.
- **Header:** the phone-number pill appears **exactly once** for the current breakpoint — as the last item of the desktop nav row, or inside the mobile off-canvas drawer. A duplicate copy previously sat in `.header-actions` next to the burger button on desktop; it has been removed.

## Elevation & Depth

Shadows are charcoal-tinted (`rgba(35,31,32,…)`, sampled from the logo's ink), and hover lift is pronounced to match the reference's `hover:-translate-y-1.5 hover:shadow-xl` service cards.

### Shadow Vocabulary
- **Card** (`0 1px 2px rgba(35,31,32,.06), 0 14px 32px -18px rgba(35,31,32,.22)`): resting elevation for the sticky header, trust pills, and the primary button.
- **Lift** (`0 2px 4px rgba(35,31,32,.1), 0 22px 44px -20px rgba(35,31,32,.3)`): hover state for service cards (`translateY(-5px)`), related cards, buttons, and the resting hero-media/dropdown shadow.

## Shapes

Corners are deliberately generous, matching the reference's rounded-2xl card language: `--radius-sm` (0.3rem) for inputs, `--radius-md` (0.55rem) for the phone pill's icon and small chips, `--radius-lg` (0.9rem) for buttons/related-cards/contact-card, `--radius-xl` (1.25rem) for service cards and the CTA banner, and `999px` pills for the phone number, trust badges, coverage-town chips, gallery tags, and the live-status badge.

## Components

### Buttons
- **Primary:** brand-red background, white text, `--radius-lg`; hover darkens to Brand Red Dark and lifts 1px. The same red everywhere — hero, forms, CTA banners — because there is only one accent color to reach for.
- **Ghost:** transparent, Hairline Strong border, ink text; hover fills Brand Red Lighter with a red border/text.
- **Inverse:** brand-red background, white text — used on dark surfaces (the phone-number action inside every CTA banner), so it pops against `--color-ink`.
- **Phone Pill:** brand red, pill-shaped, phone icon, present exactly once per header state, plus in the hero and every CTA banner.

### Service Card (signature component)
One component used identically on the homepage and on `prestations.html`: a `--radius-xl` white card, a `3.1rem` icon badge (Brand Red Lighter background, custom-drawn 24×24 line icon in Brand Red Dark — never a generic icon-font glyph), an H3 title, a one-line truthful description, and a brand-red "Découvrir →" go-link that nudges right on hover. `.service-card--urgent` fills solid brand red with a white title, white go-link, and a translucent-white icon badge — the grid's one heightened-urgency cell, colored exactly like the brand's own call-to-action.

### Live Status Badge (signature)
A pill badge (`rgba(255,255,255,.12)` on the hero photo, blurred) with a small pulsing green dot, computed by `js/main.js` from the real declared hours (Lun–Sam 8h–18h) at page load. It **only** ever renders "Ouvert maintenant" with a pinging dot; outside those hours the whole badge is hidden (`display:none`) rather than showing a "Fermé actuellement" message — announcing closure would discourage the very call the badge exists to prompt. It never lies, because when shown it reads the same hours printed in the footer.

### Trust Pills
Four small white pill badges below the hero (`.trust-strip`), each a brand-red icon chip plus a short label ("Camion nacelle", "4 métiers, un interlocuteur", "Basés à Pazayac", "Devis gratuit") — short, factual claims only, no borrowed stats.

### Cards / Containers
- **Related Card / Contact Card:** `--radius-lg`, Hairline border at rest, Lift shadow + `translateY(-3px)` on hover.
- **Coverage town chips:** filled Brand Red Lighter pills with Brand Red Dark text.
- **Gallery tags:** a small charcoal translucent pill (`rgba(35,31,32,.72)`, blurred) in the bottom-left corner of each `realisations.html` thumbnail, naming the real trade shown (Couverture / Zinguerie / Façades / Entretien / Nacelle) — using only categories the photo actually shows.

### Inputs / Fields
- Hairline Strong border, `--radius-sm`, white background.
- **Focus:** border shifts to Brand Red plus a 3px Brand Red Lighter glow.

### Navigation
- **Style:** sticky white header with a resting shadow — closer to the reference's solid `bg-white shadow-sm` header.
- **Nav links:** an animated brand-red underline grows from the center on hover/active (`width: 0 → 60%`).
- **Dropdown:** Lift-shadow panel, items hover to a Brand Red Lighter background with Brand Red Dark text.
- **Phone pill:** one instance in the nav-list row (desktop) that becomes part of the mobile drawer at `<900px` — not a second standalone instance next to the burger button.
- **Mobile (<900px):** slide-in drawer behavior, unchanged.

## Motion

One authored hero entrance plus quiet supporting reveals.

- **The focal moment:** homepage hero content (badge, headline, lede, actions) cascades in with a staggered rise (`hero-rise`), and the hero photo settles from a slight zoom (`hero-photo-settle`), both once on load.
- **The live-badge pulse:** `.live-badge__dot::before` pings on a 1.8s loop — only ever rendered when the business is open, since the badge itself is hidden when closed. Respects `prefers-reduced-motion`.
- **Supporting reveal:** `.reveal` (single fade-up) and `.stagger-list` (per-child stagger, `animation` not `transition`).
- All motion respects `prefers-reduced-motion: reduce`.

## Do's and Don'ts

### Do:
- **Do** keep the brand red reserved for things the visitor can act on (buttons, phone numbers, hover underlines, the urgent card) — see the Logo-Only-Color Rule.
- **Do** sample any new UI color from the logo (`#be1e2f` red, `#231f20` charcoal) rather than a competitor reference or an invented hue.
- **Do** keep every badge, stat, and status indicator computed from a real fact (the live-status badge from real hours, gallery tags from the real trade shown) — never a static prop borrowed from the reference site.
- **Do** draw service-card icons in the site's own 24×24 line-icon grammar (`stroke-width:1.75`, round caps) rather than importing an icon font — the reference's icon-badge *pattern* is adopted, its specific icon set is not.
- **Do** use real, unstaged job-site photography for the hero and gallery.
- **Do** keep the phone number visible in the header (exactly once per breakpoint) and every CTA banner.

### Don't:
- **Don't** show a review score, star rating, or testimonial — none are verified for this business.
- **Don't** invent a "years in business" or project-count statistic.
- **Don't** let the live-status badge become decorative, drift from the real footer hours, or announce "fermé" — hide it instead when the business is closed.
- **Don't** reintroduce a second brand hue (teal, terracotta, navy) — the palette is red + charcoal only, taken from the logo.
- **Don't** use pure black anywhere; the darkest surface is `--color-ink` (`#231f20`), the logo's own charcoal, never `#000`.
- **Don't** duplicate the phone-pill affordance twice in the same header state (e.g. once in the nav list and again next to the burger button).
