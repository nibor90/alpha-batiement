---
name: Alpha Bâtiment
description: Site vitrine multi-pages pour un artisan couvreur-zingueur en Dordogne, exécuté au niveau d'un studio d'architecte plutôt que d'un template d'entreprise du bâtiment.
colors:
  stone-ground: "#f5f2ea"
  stone-ground-deep: "#ece5d5"
  warm-surface: "#fffdf9"
  near-black-ink: "#21201c"
  soft-ink: "#4a453c"
  muted-ink: "#736b5c"
  hairline: "#ddd3bd"
  hairline-strong: "#c9bda0"
  signal-red: "#b91f2c"
  signal-red-deep: "#8c1620"
  signal-red-tint: "#f7e6e2"
  ink-inverse: "#f5f2ea"
typography:
  display:
    fontFamily: "Space Grotesk, Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
rounded:
  sm: "3px"
  md: "6px"
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
    backgroundColor: "{colors.signal-red}"
    textColor: "#fff9f5"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  button-primary-hover:
    backgroundColor: "{colors.signal-red-deep}"
    textColor: "#fff9f5"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.near-black-ink}"
    rounded: "{rounded.md}"
    padding: "0.85rem 1.5rem"
  phone-pill:
    backgroundColor: "{colors.signal-red}"
    textColor: "#fff9f5"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1.05rem"
---

# Design System: Alpha Bâtiment

## Overview

**Creative North Star: "The Architect's Site Visit"**

Alpha Bâtiment is a multi-trade roofing, zinc-work, insulation and facade contractor in rural Dordogne, and the site is built to read like the portfolio site of a small architecture studio that happens to also fix roofs — not like a stock WordPress contractor template. The system trades icon-circle soup, gradient hero banners, and animated counters (the previous site's visual vocabulary) for a warm stone-neutral canvas, one confident signal-red reserved for action and urgency, generous negative space, and real, unstaged job-site photography treated as the primary evidence of craft.

The incumbent site (Elementor stock-photo template, icon grids, unset "+0" stat counters) is the explicit anti-reference. Every decision here pulls toward calm, factual trust — real photos, real coverage towns, one phone number always visible — rather than generic contractor-site trust theater.

**Key Characteristics:**
- Warm stone-paper ground, near-black warm ink — never pure white or pure black.
- One accent color (signal red) used exclusively for calls-to-action, urgency, and hover states; never decorative.
- Space Grotesk display type paired with Inter body type: geometric confidence up top, high-legibility workhorse below.
- Real job photography at large scale is the system's primary decoration; there is no stock photography and no icon-circle grid.
- Thin 1px hairlines do the organizing work that shadows or card borders would do in a more decorative system.

## Colors

The palette is a warm, sun-bleached stone family (paper, not white; ink, not black) with a single reserved red accent — a limestone-and-terracotta register that reads as Périgord vernacular rather than corporate.

### Primary
- **Signal Red** (`#b91f2c`): the only accent color in the system. Used exclusively for primary buttons, the phone pill, active nav underlines, focus rings (as a tint), and the emergency/urgent service row. Its hover state is **Signal Red Deep** (`#8c1620`).
- **Signal Red Tint** (`#f7e6e2`): pale wash of the primary, used only for focus-ring glow and form error backgrounds — never as a decorative fill.

### Neutral
- **Stone Ground** (`#f5f2ea`): default page background and the inverse text color on dark ink surfaces.
- **Stone Ground Deep** (`#ece5d5`): alternate section background (`.section--alt`), used to separate rhythm between full-bleed sections without a hard border.
- **Warm Surface** (`#fffdf9`): card and form-field background, slightly warmer/lighter than the page ground so surfaces lift without a shadow.
- **Near-Black Ink** (`#21201c`): primary text color and the site's "dark" surface (header/footer/CTA-banner background) — always warm-black, never cool or pure `#000`.
- **Soft Ink** (`#4a453c`): secondary text (lede paragraphs, body copy inside cards).
- **Muted Ink** (`#736b5c`): tertiary text (breadcrumbs, captions, form notes).
- **Hairline** (`#ddd3bd`) / **Hairline Strong** (`#c9bda0`): the two border weights. Hairline separates rows and sections; Hairline Strong outlines interactive borders (ghost buttons, inputs, coverage-town chips).

### Named Rules
**The One Red Rule.** Signal red appears only on things you can act on — a button, a phone number, an active nav state, a focus ring. It never appears as a background wash, a heading color, or a decorative flourish. If red shows up somewhere the visitor can't tap or call, it's a bug.

## Typography

**Display Font:** Space Grotesk (with Inter, ui-sans-serif, system-ui fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** Space Grotesk's squared geometry gives headlines a confident, architectural edge without tipping into trendy/quirky; Inter carries all reading text because it stays legible and neutral at small sizes on a phone screen in direct sunlight — a real constraint for this audience.

### Hierarchy
- **Display / H1** (600, `clamp(2.25rem, 1.4rem + 3.6vw, 4rem)`, line-height 1.08, letter-spacing -0.02em): page hero headline only, one per page.
- **Headline / H2** (600, `clamp(1.75rem, 1.2rem + 2vw, 2.75rem)`, line-height 1.08): section titles ("Nos prestations", "Pourquoi Alpha Bâtiment").
- **Title / H3** (600, `clamp(1.25rem, 1rem + 0.8vw, 1.5rem)`, line-height 1.08): service-row and card titles.
- **Label / H4** (600, 1.0625rem, uppercase, letter-spacing 0.06em): reserved for footer column headings; not used as a page kicker/eyebrow anywhere (this system has no eyebrow labels — headings start directly with the H2).
- **Lede** (400, `clamp(1.0625rem, 1rem + 0.3vw, 1.25rem)`, color Soft Ink, max-width 34rem): the one-paragraph standfirst under every H1/H2.
- **Body** (400, 1rem, line-height 1.55, max-width 34rem): all running copy is measure-constrained to ~34rem (`--measure`) so paragraphs never stretch full-width even in wide containers.

### Named Rules
**The No-Eyebrow Rule.** Sections open straight into their H2; there is no small-caps kicker line above headings. It's a device the incumbent template overused, and removing it is part of what makes this read as edited rather than assembled from a builder.

## Layout

The page runs on a single `.container` (max-width 76rem, 24px side padding, 16px under 640px) that every section reuses — no bleed-to-edge sections except the CTA banner and header/footer bands, which use full-width dark surfaces with the container nested inside.

Vertical rhythm is a spacing scale from `--space-1` (0.25rem) to `--space-10` (8rem), used consistently rather than one-off pixel values. Standard sections use `--space-9` (6rem) top/bottom padding, tightened to `--space-7` (3rem) for `.section--tight` and on viewports under 720px.

Two habitual grid patterns carry most pages:
- **Asymmetric two-up** (`1.05fr 1fr` or `1.1fr 1fr`): hero, proof section, detail-hero — text on one side, one large real photo on the other, collapsing to a single stacked column (photo first) under ~900/820px.
- **Photo-led index row** (`.service-row`, grid `9.5rem 1fr auto`): a fixed-width thumbnail, flexible body text, and a trailing "Découvrir →" affordance, replacing the uniform icon-card grid of the incumbent site. Collapses to a single column with a full-width 11rem-tall photo under 720px.

Breakpoints in practical use: 1200/1024 (container ceiling, implicit), 900px (nav becomes a slide-in drawer; hero/detail-hero/contact-layout stack), 820px (proof/coverage/related-services/footer-grid stack), 720px (service rows stack), 640px (form-grid stacks, container padding tightens), 560px (footer-grid drops to one column).

## Elevation & Depth

This system is mostly flat: hairline borders (`--color-line` / `--color-line-strong`) do the separating work that shadows would do elsewhere. Shadows exist but are reserved for surfaces that visually "lift" off the page — sticky header excluded, that's a blur/tint, not a shadow.

### Shadow Vocabulary
- **Card** (`box-shadow: 0 1px 2px rgba(33,28,20,.05), 0 14px 32px -18px rgba(33,28,20,.28)`): resting elevation for the primary button and the proof-section photo — a soft, warm-tinted shadow (never pure black) that reads as "photograph on a desk," not "UI card."
- **Lift** (`box-shadow: 0 2px 4px rgba(33,28,20,.08), 0 20px 40px -20px rgba(33,28,20,.35)`): hover state for buttons and the resting state of the hero photo and dropdown menu — the deliberately larger, softer shadow used for the system's few "important" floating surfaces.

### Named Rules
**The Hairline-Not-Shadow Rule.** Lists, rows, and section boundaries are separated with a 1px hairline (`--color-line`), never a card shadow. Shadows are reserved for the handful of surfaces that should feel like they're physically lifted (buttons on press/hover, the hero image, the nav dropdown) — using them everywhere would flatten their meaning.

## Shapes

Corners are small and consistent: `--radius-sm` (3px) for tight elements (inputs, chips, skip-link), `--radius-md` (6px) for photos, cards, buttons, and banners, and a full `999px` pill exclusively for the phone number affordance and coverage-town chips. There is no large/soft "app" radius anywhere in the system — the restraint is deliberate, keeping photography and typography as the focal point rather than container chrome.

Borders are always the hairline pair (`--color-line` at rest, `--color-line-strong` for interactive outlines like ghost buttons and form fields); there are no gradient borders or multi-color strokes.

## Components

### Buttons
- **Shape:** `--radius-md` (6px), never pill-shaped except the dedicated phone pill.
- **Primary:** Signal Red background, `#fff9f5` text, Card shadow at rest; on hover, background shifts to Signal Red Deep, the button lifts 1px (`translateY(-1px)`) and the shadow upgrades to Lift. This is the only button style with a resting shadow.
- **Ghost:** transparent background, Hairline Strong border, Near-Black Ink text; hover darkens the border to Near-Black Ink and fills with Warm Surface. Used for secondary actions ("Toutes les prestations", "Voir toute la galerie").
- **Inverse:** Stone Ground background / Near-Black Ink text, used only inside dark surfaces (the CTA banner's phone-number action) so it reads as a button against `--color-ink`, not a link.
- **Phone Pill:** the one pill-shaped affordance in the system — Signal Red background, always paired with a phone icon, used in the header, hero, and every CTA banner so the emergency number is never more than a glance away on any page.

### Cards / Containers
- **Corner Style:** `--radius-md` (6px) uniformly.
- **Background:** Warm Surface (`#fffdf9`) on the light ground, so cards read as "paper" slightly lighter than the page itself.
- **Shadow Strategy:** related-service cards and contact cards are flat at rest (hairline border only) and gain the Card shadow plus a 2px lift only on hover — depth is a response to interaction, not a static decoration.
- **Border:** 1px Hairline at rest on all cards.
- **Internal Padding:** `--space-5`/`--space-6` (1.5–2rem).

### Inputs / Fields
- **Style:** Hairline Strong 1px border, `--radius-sm` (3px), Warm Surface background.
- **Focus:** border shifts to Signal Red plus a 3px Signal Red Tint glow (`box-shadow: 0 0 0 3px var(--color-red-tint)`) — the only place the red tint appears as a fill rather than a line.
- **Error:** Signal Red Tint background with Signal Red Deep text (`.form-status.is-error`); success uses a separate, unrelated soft green (`#e7f2e5` / `#275c22`) since red is reserved for "needs attention," not simply "system message."

### Navigation
- **Style:** sticky header, translucent Stone Ground with backdrop-blur; nav links are Soft Ink at rest, Near-Black Ink with a 2px Signal Red underline on hover/active — never a background pill or full underline on rest state.
- **Dropdown:** the "Prestations" submenu is a Lift-shadow panel revealed on hover/focus, Warm Surface background, appearing below the parent link.
- **Mobile (<900px):** the nav link list and its dropdown collapse into a full-height slide-in drawer from the right (`transform: translateX(100%)` → `0`), triggered by a bordered icon button; the "Prestations" dropdown becomes a tap-to-expand accordion instead of hover.

### Service Row (signature component)
The photo-led index row is this system's replacement for the generic icon-card grid: a fixed 9.5×7rem photo thumbnail, service name + one-line description, and a trailing "Découvrir →" link where the arrow nudges right on row hover. One variant, `.service-row--urgent`, inverts to the dark Near-Black Ink surface with a bright coral go-link (`#ff8f8f`) — the system's only heightened-urgency treatment, reserved for the emergency-leak entry point at the top of the service list.

### Service Showcase (homepage-only bento grid)
The homepage trades the Service Row's uniform list for a single asymmetric photo grid — one large feature tile (Couverture, spanning 2×2) beside five smaller tiles, each a full-bleed real photo with a bottom gradient (`rgba(20,16,10,0) → rgba(20,16,10,.85)`) carrying the title and a "Découvrir →" link directly on the image. This is deliberately bolder than the Service Row it links onward to: fewer words, larger imagery, one clear visual hierarchy (Couverture first). It stays within the system's own vocabulary — same radius, same red-free go-link styling (white on photo instead of red-on-paper, since red stays reserved for true actions), same hover language (image scale + arrow nudge) — rather than inventing a new component family. `prestations.html` and every detail page keep the plain Service Row / Related Card as the exhaustive, scannable index; only the homepage gets the teaser treatment.

## Motion

Motion is one authored focal moment plus quiet, consistent supporting reveals — never a scroll-triggered fade on every section.

- **The focal moment:** on the homepage only, the hero content (headline, lede, actions) cascades in with a 3-step stagger and the hero photo settles from a slight zoom via `clip-path` + `scale`, both running once on page load. This is the site's one rehearsed entrance; no other section repeats it.
- **Supporting reveal:** below-the-fold sections use `.reveal` (a single fade-up on scroll into view) or, for anything that reads as a list — service tiles, the gallery grid, related-service cards, partner logos — `.stagger-list`, which reveals each child on its own beat (capped around half a second of total spread) instead of moving the group as one block.
- **Implementation rule:** `.stagger-list` animates with the `animation` property, never `transition`, specifically so it never collides with a component's own hover transition (e.g. Related Card's `transform` on hover) on the same element.
- All motion respects `prefers-reduced-motion: reduce` (durations and delays collapse to near-zero site-wide).

## Do's and Don'ts

### Do:
- **Do** use real, unstaged job-site photography at large scale as the primary visual interest of every section; treat photos as evidence, not filler.
- **Do** keep Signal Red reserved for actionable elements only (buttons, phone numbers, active states, focus rings) — see the One Red Rule.
- **Do** separate lists and rows with 1px hairlines rather than card shadows or backgrounds; reserve shadows for surfaces that should feel physically lifted.
- **Do** keep body copy measure-constrained (~34rem) even inside wide containers, so paragraphs stay readable.
- **Do** keep the phone number (as a pill or plain link) visible in the header and in every page's closing CTA — the emergency use case is real, not hypothetical.

### Don't:
- **Don't** introduce icon-circle grids, gradient hero banners, or animated counters — that is the incumbent template's vocabulary and the explicit anti-reference for this system.
- **Don't** add a small-caps "eyebrow" kicker above headings; sections open directly into their H2 (see the No-Eyebrow Rule).
- **Don't** use stock photography anywhere; if a real project photo doesn't exist for a slot, that slot gets a clearly-scoped generated image rather than a licensed stock substitute.
- **Don't** invent statistics, testimonials, or certifications not confirmed by the business owner — the previous site's unset "+0" counters are a cautionary example, not a pattern to fill in.
- **Don't** use pure black or pure white anywhere; every ink and ground value in this system carries a warm undertone.
