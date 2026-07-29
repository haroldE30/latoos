# LATOOS Website — Project Context

Living reference doc for the LATOOS pickleball paddle concept site. Read this before making further updates so changes stay consistent with what's already been decided.

## File Structure (as of latest update)

The site was restructured from a single self-contained HTML file into a maintainable multi-file project:

```
latoos/
├── index.html          — main marketing page (hero, products, tech/specs, reviews, etc.)
├── about.html           — brand story page (founding story, values) — new
├── css/
│   └── style.css        — all site styles (extracted from the old inline <style>)
├── js/
│   └── script.js         — loader, scroll reveal, particles, magnetic buttons, comparison bars
├── images/
│   ├── logo.png          — cropped LATOOS wordmark (used in nav, footer, loader on both pages)
│   ├── apex-hero.png     — hero section paddle photo (transparent PNG)
│   ├── surge.jpg         — SURGE product card photo
│   ├── surge-purple.jpg  — SURGE Purple product card photo
│   └── apex.jpg          — APEX product card photo
└── assets/               — currently empty, reserved for future use (fonts, icons, etc.)
```

- Delivered as `latoos.zip` (extract to get the folder above).
- `index.html` is now ~20KB (down from ~1MB) since images are referenced via relative paths (`images/...`) instead of embedded as base64.
- Both HTML pages share the same `css/style.css` and `js/script.js` — edit once, both pages update.
- Nav/footer "About" links point to `about.html`; other nav/footer links use in-page anchors on `index.html` (e.g. `index.html#products`) when clicked from `about.html`.
- `about.html` reuses existing CSS classes (`.why-grid`/`.why-card`, `.cta-banner`, `.eyebrow`, `.reveal`, buttons) plus a small page-specific `<style>` block for its hero/story layout — kept inline on that page since it's only a few rules, not worth adding to the shared stylesheet yet.
- **about.html content** (new): founding story — three friends, ~3 months into pickleball, started LATOOS to make better-spec paddles affordable for the local community. Values section: Community First, Honest Pricing, Engineered Not Rebranded, Players First. This mirrors the tone approved for the Facebook bio (see below).

## Brand & Design System

- **Positioning:** Premium performance pickleball paddle brand. Aesthetic direction: Apple × Porsche × Tesla — not a typical sporting-goods store.
- **Palette:**
  - Matte Black `#080808` (background)
  - Charcoal `#121214` / `#1a1a1d` (card backgrounds)
  - White `#F8F8F8` (text)
  - Champagne Gold `#C9A35B` (primary accent / APEX brand color)
  - Emerald `#00B26B` (SURGE brand color)
  - Royal Purple `#7A3DFF` (SURGE Purple variant color)
- **Typography:** Unbounded (display/headlines), Inter (body), JetBrains Mono (specs/labels/data)
- **Logo:** Real LATOOS wordmark PNG (transparent background), supplied by user — auto-cropped to content bounding box. Used in: nav bar, footer, and the page loader. Sized deliberately small/understated per user feedback (nav 28px / footer 36px / loader 26px desktop; smaller on mobile ≤640px).
- **Brand is new to market** — copy was deliberately adjusted to avoid implying an existing track record (e.g. "Tournament Proven" → "Built for Competition"; "Trusted by competitive players" → "Engineered with cutting-edge materials · Built for players who demand more").

## Products

- **SURGE** — Intermediate paddle (3.0–4.5 skill level). Emerald branding. Gen 4 Full EPP Foam Core, raw T700 carbon face.
- **SURGE Purple** — Same product/positioning as SURGE, purple colorway.
- **APEX** — Flagship/tournament paddle (4.0–5.0+ skill level). Gold branding. Gen 5 EVA+EPP Hybrid Core, Carbon/Kevlar hybrid face, elongated shape.

All three have real product photography embedded (see "Image Assets" below) — no more CSS-mockup placeholders remain.

## Current Page Section Order (top to bottom)

1. Loader (logo + gold underline sweep)
2. Sticky nav (transparent → matte black on scroll; **no cart icon** — purchases aren't supported yet)
3. Hero — real APEX photo (transparent PNG), floating/tilt animation, gold ambient glow
4. Brand Philosophy ("We don't build paddles. We engineer confidence.")
5. Product cards — SURGE → SURGE Purple → APEX (real photos, hover zoom)
6. **Technology & Specs** — SURGE/APEX spec cards (plain-language, non-technical) — *intentionally placed first in the tech block* as the most concrete, convincing content
7. **The Engineering** — 4 general material cards (Carbon Fiber, Kevlar, Foam Core, Raw Carbon Face), each now with a minimal line-icon badge
8. **Head to Head** comparison table (SURGE vs APEX) — placed last in the tech block as the final decision-making nudge
9. Why Players Choose LATOOS (4 cards)
10. Lifestyle banner
11. Customer Reviews
12. CTA banner
13. Footer
14. Mobile sticky bottom bar (still has "Buy Now" — flagged below)

> Note on ordering rationale: the tech block was deliberately sequenced Specs → Engineering → Head-to-Head (not the original order) to lead with the most surprising/concrete facts first, then generalize, then close with the comparison as a decision tool.

## Technology & Specs — content decisions

Extracted from confidential manufacturer spec sheets (`LATOOS_SURGE_Spec_Sheet_v1_0.pdf`, `LATOOS_APEX_Spec_Sheet_v1_0.pdf`), filtered to **customer-relevant, non-proprietary facts only**.

**Explicitly excluded from the public site** (competitor-sensitive / manufacturing IP):
- Exact foam densities, EVA/EPP hardness (Shore A) values
- Ply counts, ply orientation, layup sequence (Carbon-Out vs Kevlar-Out options)
- Resin system, pre-preg specifics
- Press temperature/pressure, cure times
- Kevlar grade (49 vs 29)
- Any supplier names

**Included on the public site:**
- Skill level positioning, core technology name (Gen 4 / Gen 5) with a plain-language description, face material story, weight, **grip = 4.33" for both paddles** (confirmed by user, overriding the spec sheet's differing draft values), colorways, what's included in the box, USAP-approval note.
- APEX card: "Neoprene carry case" was removed from Included per user request (now just "Ultra-thin overgrip").

**Head to Head bar percentages** — deliberately rebalanced (originally all APEX = 100%, which read as unrealistic marketing). Now varied and grounded in the spec sheets' relative claims, with SURGE winning "Forgiveness" outright:

| Feature | SURGE | APEX |
|---|---|---|
| Power | 82% | 94% |
| Control | 85% | 90% |
| Spin | 90% | 92% |
| Forgiveness | **90%** | 82% |
| Sweet Spot | 88% | 90% |
| Tournament Ready | ✓ | ✓✓ |

## Image Assets Used (now standalone files in `images/`)

| File in `images/` | Used in | Original source upload | Notes |
|---|---|---|---|
| `apex-hero.png` | index.html hero | `APEX-hero-removebg-preview.png` | Transparent background |
| `surge.jpg` | SURGE product card | `SURGE-GREEN.jpg` | Full marketing image, not transparent |
| `surge-purple.jpg` | SURGE Purple product card | `SURGE-PURPLE.jpg` | Full marketing image, not transparent |
| `apex.jpg` | APEX product card | `APEX.jpg` | Full marketing image, not transparent |
| `logo.png` | Nav / Footer / Loader on both pages | `LATOOS_LOGO_final.png` | Auto-cropped to content bounding box |

## Flagged / Open Items (not yet resolved — revisit before real launch)

1. **No online purchase support yet.** Cart icon was removed from nav per request, but the following still say "Buy Now" / imply checkout and may need updating once purchase status is decided:
   - Mobile sticky bottom bar ("Buy Now" + price)
   - Hero buttons ("Shop SURGE" / "Shop APEX")
   - Product card CTAs ("Explore SURGE," "Experience APEX")
   - CTA banner near footer
2. **No pricing shown anywhere on the page.**
3. **No FAQ section** — recommended (sizing/grip help, return policy, USAP approval status, shipping) but not yet built.
4. **Footer legal links (Privacy, Warranty, Shipping, Returns) are placeholder `#` anchors** — no real policy content yet.
5. **Spec sheet source PDFs are marked "Confidential — Internal Use Only"** and their mock-up images carry an "AI-generated content" watermark — double check before any further customer-facing content is drawn from them.
6. **Performance ratings/claims in the spec sheets are explicitly marked "target," pending prototype testing, USAP certification, and independent Ra/PBCoR lab verification** — worth a legal/marketing review before final public claims are locked in.
7. Product detail page (360° viewer, sticky purchase panel, full specs/reviews/related products) described in the original brief has not been built yet — current file is the single-page marketing site only.

## Sharing / Hosting

- Recommended free options discussed: **Netlify Drop** (drag-and-drop, instant URL, free), GitHub Pages, Vercel/Cloudflare Pages.
- Since the site is now a proper multi-file folder, for Netlify Drop drag the whole `latoos/` folder (not just `index.html`) so the CSS/JS/images resolve correctly.
- Original image files are now available standalone in `images/` — ready to hand to a developer as-is, no extraction needed.

## Facebook Page Bio (approved copy)

Two short bios were drafted for the LATOOS Facebook Page (kept within Facebook's ~101-character bio limit), reflecting the real origin story rather than the more aspirational website tone:

1. *"Started by 3 friends, 3 months into pickleball. High-spec paddles, community prices. 🏓"*
2. *"Local pickleball paddles built by players, for players — pro specs without the premium price."*

This same origin story (3 friends, ~3 months into pickleball, better spec at a community price) is now also reflected in `about.html`'s founding story section — keep both consistent if either changes.

## How to continue

When making further changes, reference this file for: current section order, color/type system, what's already been decided on copy tone (new-brand-safe language), and what's intentionally withheld from specs. Update this doc after any significant structural or content change so it stays a reliable snapshot.
