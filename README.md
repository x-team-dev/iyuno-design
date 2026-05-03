# Iyuno Design System

> **Refresh, not rebrand.** Modernize Iyuno for the AI era while preserving the existing wordmark and the soul of the brand.

Iyuno is an AI-first global creative distribution company. We help human creativity travel across languages, cultures, and formats without losing its meaning.

## Mission & Vision
- **Mission:** Iyuno exists to honor human creativity. Our mission is to amplify it and help it travel across languages, cultures, and formats without losing its meaning.
- **Vision:** Become the intelligence infrastructure for global creative distribution.

## Products
Iyuno's product line spans the full pipeline from intake to delivery. The four products share one design system; each appears in copy and templates only as the brand it is, never as a feature of the system itself.

## Sources read for this system
- **Logo:** `uploads/Iyuno_Logo.svg` — original 1-color wordmark.
- **Brief:** Pasted prompt with full color/type/component spec.

The design system represents the **target post-refresh aesthetic** — warm amber + ink, a single brand sans (Switzer) + functional mono (JetBrains Mono). The reference kit and templates demonstrate it across the surfaces a brand actually ships on: tokens, components, decks, one-pagers, reports, business cards, and email signatures.

---

## Index — what's in this folder

```
README.md                   ← you are here
SKILL.md                    ← agent skill manifest (Claude Code compatible)
colors_and_type.css         ← all CSS variables: colors, type, spacing, radii, shadows, motion
assets/
  iyuno-logo.svg            ← primary: dark wordmark + amber dot (signature)
  iyuno-logo-white.svg      ← light wordmark + amber dot, for dark backgrounds
  iyuno-logo-mono.svg       ← single-color black, no amber (when color is restricted)
  iyuno-logo-mono-amber.svg ← single-color amber wordmark, for warm backgrounds
  iyuno-mark.svg            ← dot only, the brand mark
preview/                    ← per-token cards rendered in the Design System tab
reference_kit/              ← hub for designers: tokens, components, brand pages
  index.html                ← start here
  tokens.html               ← every color/type/space/radius/shadow with CSS var
  components.html           ← 9 components, live previews + copy-paste snippets
  brand.html                ← logo lockups, do/don't, voice, downloads
templates/                  ← ready-to-fork output formats
  deck.html                 ← 9-slide 16:9 master with speaker notes
  one-pager.html            ← US Letter product brief / proposal
  report.html               ← multi-page research / case-study report
  business-card.html        ← 3.5″×2″ front + back, with executive variants
  email-signature.html      ← three table-based signature blocks (Gmail/Outlook/Apple Mail safe)
```

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, calm, lightly literary. Iyuno talks about **creativity, meaning, and travel** — not "translation," "AI tools," or "workflows." We are stewards of stories.

**Tone calibration by surface.**
- *Marketing:* poetic and declarative. Short sentences. Trust earned through restraint, not adjectives.
- *Product UI:* precise, neutral, helpful. We tell users what just happened and what's next, in that order.
- *Docs / Errors:* direct, plain. No apologies, no exclamation marks.

**Pronouns.** *We* (the company) and *you* (the user). Avoid "users," "clients" in second-person copy. In product UI: imperative voice (*"Start a build"*, not *"You can start a build"*).

**Casing.**
- **Sentence case** for everything in product UI: buttons, headings, menu items, dialogs.
- **Title Case** only for product names, section eyebrows on marketing, and legal page titles.
- All-caps reserved for monospace eyebrow labels (e.g. `WHAT WE DO`) tracked at `0.05em`.

**Numbers.** Always numerals (`12 languages`, not "twelve"). Use thin space for thousands in metrics (`12 400`). Timecodes are mono and zero-padded (`00:01:24.480`).

**Emoji.** **Never** in product UI. Acceptable in informal team-facing surfaces (Slack templates, internal release notes) but not on the website, dashboard, or any external touchpoint.

**Examples (good).**
- Hero: *"Creativity travels. Meaning stays."*
- Empty state: *"No builds yet. Finished workflows will land here."*
- Error: *"This file isn't an SRT. Drop a `.srt` or paste the cue list to continue."*
- Button: *"Start a build"*, *"Review and approve"*, *"Open in editor"*

**Examples (avoid).**
- ❌ *"Unleash the power of AI translation!"* (hype, exclamation, generic AI-speak)
- ❌ *"Your AI-powered linguistic assistant"* (generic AI cliché)
- ❌ *"Oops! Something went wrong 😢"* (apology, emoji, no information)
- ❌ *"GLOBAL TRANSLATION REIMAGINED"* (all-caps shouting, "translation" framing)

---

## VISUAL FOUNDATIONS

### Palette
- **Signature: `#FFB549` amber** — used as one focal accent per view. Reserved for: the dot of the i, the primary CTA, key-metric highlights, focus ring. **Never** as a flood fill of large surfaces.
- **Ink (warm neutrals, hue ~80 OKLCH)** carry 95% of UI surface area. Off-white `#FAFAF8` for light bg, `#1F1D19` for near-black. **No cool grays anywhere.**
- **Dark mode** swaps bg/fg; the accent shifts to `oklch(0.830 0.150 78)` so it stays legible against `#1F1D19`.
- **Semantic feedback** (success/warning/danger/info) tuned warm — desaturated, never neon.

### Type
- **Brand sans (one font, all visible surfaces):** Switzer Variable. A geometric humanist sans whose DNA matches the wordmark: even stroke weight, generous open counters, slightly softened terminals. Display, body, UI — all Switzer. Hierarchy comes from size, weight, and letter-spacing, **not** by switching family.
  - Display / headlines: weight 600–800. `letter-spacing: -0.02em` to `-0.025em` on 48px+, line-height 1.0–1.2.
  - Body / UI: weight 400 body, 500 for UI labels, 600 for buttons. Default 15px, 1.5 line-height.
- **Mono (functional only):** JetBrains Mono. Reserved for timecodes, IDs, log output, eyebrow labels, key↔value metadata, and `<code>`. Never used for body or display.
- **CJK locale fallbacks (not brand choices):** Pretendard Variable auto-applied to `:lang(ko)`, Noto Sans JP to `:lang(ja)`. Korean-language product surfaces must render Hangul cleanly at all sizes.

### Spacing & rhythm
- **4-pixel base.** Tokens at 4/8/12/16/24/32/48/64. Section padding on marketing is 96–128 px.
- **Generous whitespace.** Asymmetric layouts preferred over centered blocks. A section header sitting top-left with a wide right-side margin is on-brand; a centered headline-paragraph-button stack is generic.

### Backgrounds
- **No gradients** as the primary surface treatment.
- **No glassmorphism, blur scrims, or frosted overlays.**
- Plain warm off-white (`--bg`) or near-black (`--bg` in dark mode) carries 100% of large surfaces.
- A **single thin amber rule** (1 px, `--accent`) can divide a section. Used sparingly.
- Imagery: warm-toned, slightly desaturated film stocks. Avoid saturated, "tech-stock" imagery.

### Borders & dividers
- All UI borders: `1px solid var(--border)` (a near-imperceptible warm gray). 
- Dividers between content sections: `1px solid var(--border)`. Never double-rules.
- Focus ring: `box-shadow: 0 0 0 4px oklch(0.795 0.165 75 / 0.18)` — soft amber halo, never blue.

### Corner radii
- **`10px` everywhere by default** — buttons, inputs, cards, dialogs, badges. Derived from the proportion of the dot above the *i* in the wordmark. This is the most consistent visual ID of the system.
- `4–6px` for inline chips and very small surfaces.
- `9999px` only for avatars and the occasional pill button.

### Shadows
- Soft, warm, low-opacity. Cast colors are `oklch(0.180 0.008 80 / 0.04…0.14)`, never pure black.
- `--shadow-sm` for resting cards, `--shadow-md` for hovered cards, `--shadow-lg` for dialogs and pop-ups. No more than two elevation steps in any single view.
- **No inner shadows.** No neumorphic effects.

### Cards
- Surface `#fff` (light) or `--ink-900` (dark), `1px` border, `10px` radius, `--shadow-sm` at rest.
- Hover: border darkens to `--border-strong`, shadow promotes to `--shadow-md`, **no scale change**.
- Active/pressed: shadow drops to `--shadow-xs`, no color shift.

### Hover & press states
- **Hover:** subtle. Borders darken one step, optionally surface darkens by ~3% (light) or lightens by ~3% (dark). Buttons darken the fill, never lighten it. **No glow, no scale, no shimmer.**
- **Press:** translate 0, shadow drops one step, no color flash.
- **Focus:** soft amber ring (4px, 0.18 alpha). Always visible — never `outline: none` without a replacement ring.

### Motion
- **Easing:** `cubic-bezier(0.32, 0.72, 0, 1)` — restrained, slightly snappy at the start. Used everywhere.
- **Duration:** 140 ms (micro), 220 ms (default), 420 ms (entrance).
- **Scroll-triggered only** for marketing reveals. No autoplay video, no looping carousels, no parallax.
- **No bounce.** No spring. No staggered character animation in headlines.

### Transparency & blur
- Used sparingly for **modal scrims** (`oklch(0.140 0.008 80 / 0.40)`) and nothing else.
- No blur on cards, nav, or hero. The brand is solid, not vapor.

### Layout rules
- Max content width: `1280px` for marketing, fluid for product surfaces (canvas-style apps want the room).
- Marketing grid: 12 columns, `24px` gutters, `96px` outer margin at desktop.
- Product grid: density-driven. Tables comfortable at `--fs-sm` 13 px with `12px` row padding.
- Sticky elements limited to top nav (marketing) and sidebar (product). Never both at once.

### RTL & accessibility
- All layout uses logical properties (`margin-inline-start`, etc.) so RTL mirrors cleanly.
- Color combinations all clear **WCAG AA** for body text; verified pairings: `--fg` on `--bg`, `--fg-2` on `--bg`, `--accent-fg` on `--accent`.
- Focus order matches DOM order; no `tabindex > 0`.

---

## ICONOGRAPHY

Iyuno's product surfaces use **lucide-react** as the icon set (a verified existing choice in product code: `PlayCircle, FileText, Building2, Globe, Search, Bot, ClipboardList, CreditCard, Settings, BookOpen, ShoppingCart, Users, ListTodo, Menu, X, LogOut, Pin, PinOff`).

**Decision: standardize on Lucide across all Iyuno surfaces.**
- **Stroke-based, not filled.** 1.75px stroke, rounded line caps, square join — matches the warm, unhurried feel of the brand.
- **Sizes:** 16/20/24 px standard. 16 inside dense tables; 20 in nav/buttons; 24 for empty states and feature cards.
- **Color:** inherit `currentColor`. Active nav: `--accent`. Disabled: `--fg-mute`.
- **Sourcing:** load from CDN (`https://unpkg.com/lucide@latest`) for prototypes; bundle `lucide-react` for production. **No icon files copied into `assets/`** — the package itself is the source of truth.
- **Substitution flag:** none — Lucide is the codebase's existing choice.

**Forbidden iconography (per brief):**
- ❌ Globe icons (we are not a "translation company")
- ❌ Flag icons (no nation-state framing)
- ❌ Generic robot/sparkle "AI" icons (cliché)
- ❌ Custom SVG icons hand-drawn for one-off use — pull from Lucide instead

**Logo files** (in `assets/`):
- `iyuno-logo.svg` — **primary** lockup: dark wordmark + amber dot. Use on light surfaces.
- `iyuno-logo-white.svg` — for dark surfaces (light wordmark + amber dot)
- `iyuno-logo-mono.svg` — single-color black, when color use is restricted (print, embossing, watermarks)
- `iyuno-logo-mono-amber.svg` — single-color amber wordmark
- `iyuno-mark.svg` — the dot alone, the brand mark — for favicons, app icons, social avatars

The amber dot above the *i* is **the** visual ID. Don't redraw it; don't recolor it; don't lock it up with another mark. When in doubt, use the plain wordmark and let context carry the color.

---

## Publishing this repository

This folder is git-ready. To push to a new GitHub repo:

```bash
# 1. Initialize and commit locally
git init
git add .
git commit -m "Initial commit: Iyuno design system v1"
git branch -M main

# 2. Create an empty repo on github.com/iyuno (no README, no .gitignore)
#    Then connect and push:
git remote add origin git@github.com:iyuno/design-system.git
git push -u origin main
```

**To enable GitHub Pages** (so the reference kit is publicly viewable at `iyuno.github.io/design-system`):

1. Repo → Settings → Pages
2. Source: **Deploy from a branch** → `main` / `/ (root)`
3. Wait ~30s, then visit `https://iyuno.github.io/design-system/reference_kit/`

The kit uses only static HTML/CSS + CDN-hosted fonts and icons, so no build step is required.
