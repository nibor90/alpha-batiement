# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no framework, no build step (delegated: chosen for a small multi-page local-business brochure site — zero-config deploy, easiest long-term maintenance for a non-dev owner). Deployed to Vercel from the GitHub repo `https://github.com/nibor90/alpha-batiement.git`.

## Users

Homeowners and property owners in and around Brive-la-Gaillarde / Pazayac, Dordogne (Bergerac, Lembras, Creysse, Saint-Laurent-des-Vignes, Terrasson-Lavilledieu) who need roofing, guttering/zinc work, painting, insulation, or facade work. Many arrive urgently (an active roof leak) and need a phone number immediately; others are planning a renovation and are comparing local tradespeople before requesting a quote.

## Product Purpose

A lead-generation site for Alpha Bâtiment, a multi-trade roofing/zinc-work/painting company. It exists to get visitors to call the emergency line or submit a quote request. Success = phone calls and quote-form submissions from the local service area.

## Positioning

A single local contractor covering roofing, zinguerie, painting, insulation, and facades together, with an aerial platform truck ("camion avec nacelle") that lets the crew reach height safely without scaffolding — faster, safer high-access work than trades that sub out access equipment.

## Operating Context

- Emergency path: visitor with an active leak calls the phone number directly from any page.
- Considered path: visitor browses services/realisations, then submits the quote-request form or calls.
- Owner receives form submissions by email and calls directly; no CRM/booking system.
- Hours: Lun–Sam 8h–18h, Dimanche fermé.

## Capabilities and Constraints

Eight service lines to present (each needs its own explanation, matching the current site's categories):
1. Urgence Fuite Toiture (emergency roof leak)
2. Travaux de Couverture (roofing)
3. Travaux de Zinguerie (zinc/guttering work)
4. Travaux de Peinture (painting, intérieur & extérieur)
5. Travaux d'Isolation (insulation)
6. Travaux de Façades (facade/render work)
7. Entretien de Toiture (roof maintenance/cleaning)
8. Pose de Fenêtre de Toit (roof window/Velux installation)

Coverage area: Pazayac and surrounding Dordogne towns — Brive-la-Gaillarde, Bergerac, Lembras, Creysse, Saint-Laurent-des-Vignes, Terrasson-Lavilledieu.

Contact facts (must stay accurate, do not alter):
- Phone: 06 38 96 16 26
- Email: alphabatiment.fr@gmail.com
- Address: 272 Chem. de l'Ancienne Forge, 24120 Pazayac
- Hours: Lun–Sam 8h–18h, Dimanche fermé

Contact form: no backend server. Uses a free third-party form-relay (FormSubmit, action-based, no signup, forwards to alphabatiment.fr@gmail.com) so the static site can still deliver quote requests by email. The owner must click one confirmation link the first time a submission is sent, per FormSubmit's activation flow.

The current site's animated stat counters ("+0 Travaux de Couverture", "+0 Travaux de Zinguerie", "+0 Travaux de Peinture", "+0% Clients Satisfaits") never had real numbers configured — no verified figures exist. Do not invent statistics; omit the counters or replace them with concrete, truthful claims (service list, coverage towns, response promise) instead.

No verified customer testimonials, case-study text, pricing, or certifications exist beyond the supplier/material brand logos below. Do not fabricate reviews, awards, or numeric guarantees.

## Brand Commitments

- Name: **Alpha Bâtiment**.
- Existing logo, reused as-is: `assets/brand/logo-rouge-noir.png` (red+black wordmark, for light backgrounds) and `assets/brand/logo-rouge-blanc.png` (red+white wordmark, for dark backgrounds).
- Existing brand red ≈ `#be1e2d`, seen across links and CTAs on the incumbent site.
- Supplier/material partner logos to credit (as on the incumbent site): Zolpan, V33, Sikkens, Unikalo, Tollens, Chausson, Velux, Point P, M Matériaux — saved in `assets/partners/`.
- This is a redesign, not a rebrand: the name, logo, contact facts, and service list carry over; the visual system (WordPress/Elementor stock template look) is discarded and replaced.
- **Standing visual preference:** offered a rolled/replacement visual world (a technical "coupe de toiture" blueprint system) against the category-standard local-contractor layout, the user chose the category standard, played straight. The craft bar for that standard is set at premium artisan/architect-studio sites: clean confident typography, generous whitespace, real large photography, restrained color use — not a generic Elementor template look. Future visual work on this project should execute within this standard layout family at that craft level rather than reopening the world choice.

## Evidence on Hand

- 10 real project photos from the incumbent site's "Nos Réalisations" gallery, saved in `assets/gallery/realisation-01.jpg` … `realisation-10.jpg`. These are genuine Alpha Bâtiment job-site photos and are the preferred imagery source.
- All other imagery on the incumbent site (hero backgrounds, service tile backgrounds) is unlicensed-to-us AdobeStock stock photography, not company property — do not carry it over. Where the 10 real photos are insufficient for a given slot (e.g., a hero image or a specific service illustration with no matching real photo), generate a new image rather than reusing stock photography of unknown license.
- Partner/material logos in `assets/partners/`.

## Product Principles

1. The emergency phone number is always one glance/tap away — an active leak is a real use case, not a hypothetical.
2. Multi-trade breadth (roofing + zinc + paint + insulation + facades) is the core pitch; every service must be easy to find, not buried under one "featured" trade.
3. Local, factual trust signals (coverage towns, real job photos, material-brand partnerships, direct owner contact) replace generic stock-photo trust theater.
4. Never invent numbers, reviews, or claims the owner hasn't confirmed.

## Accessibility & Inclusion

No product-specific requirement established beyond standard web accessibility (readable contrast, tap targets, keyboard/focus support) — this audience skews toward being outdoors on a phone, often in bright sunlight or checking quickly between jobs.
