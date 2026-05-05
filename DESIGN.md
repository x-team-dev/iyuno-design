# Iyuno Design System — Agent Reference

> AI agents: read this file before generating any UI, component, or page for Iyuno.
> For full brand guidelines see README.md. For live CSS variables see colors_and_type.css.

## Identity

- **Company:** Iyuno — AI-first global creative distribution
- **Mission:** Honor human creativity; amplify it across languages, cultures, formats
- **Wordmark:** lowercase `iyuno`, warm amber dot above the `i`
- **Signature color:** `#FFB549` (OKLCH: `oklch(0.795 0.165 75)`)
- **Philosophy:** Refresh, not rebrand

## Colors

Use CSS variables from `colors_and_type.css`. All colors defined in OKLCH.

### Amber (signature — use sparingly as focal accent)

| Token | OKLCH | Use |
|---|---|---|
| `--amber-50` | `oklch(0.985 0.020 85)` | Light tinted background |
| `--amber-500` | `oklch(0.795 0.165 75)` | **Signature.** CTA, dot, focus ring |
| `--amber-600` | `oklch(0.700 0.155 65)` | CTA hover |
| `--amber-900` | `oklch(0.330 0.080 50)` | Dark amber text |

### Ink (warm neutrals — NO cool grays)

| Token | OKLCH | Use |
|---|---|---|
| `--ink-50` | `oklch(0.985 0.005 80)` | Page background (light) |
| `--ink-200` | `oklch(0.920 0.008 80)` | Borders, dividers |
| `--ink-500` | `oklch(0.640 0.014 80)` | Muted/placeholder text |
| `--ink-700` | `oklch(0.400 0.012 80)` | Body text |
| `--ink-950` | `oklch(0.140 0.008 80)` | Headings, page bg (dark) |

### Semantic surfaces

```css
/* Light (default) */
--bg: var(--ink-50);        --fg: var(--ink-950);
--fg-2: var(--ink-700);     --fg-3: var(--ink-500);
--border: var(--ink-200);   --accent: var(--amber-500);
--accent-fg: var(--ink-950);

/* Dark — [data-theme="dark"] */
--bg: var(--ink-950);       --fg: var(--ink-50);
--accent: oklch(0.830 0.150 78);  /* lighter for dark bg */
```

### Feedback

| Token | Use |
|---|---|
| `--success` / `--success-bg` | Green, warm-leaning |
| `--warning` / `--warning-bg` | Amber-adjacent |
| `--danger` / `--danger-bg` | Warm red |
| `--info` / `--info-bg` | Cool blue (only exception to warm rule) |

## Typography

**One font for all visible surfaces. Hierarchy through size and weight only.**

| Role | Family | Weight | Size |
|---|---|---|---|
| Display | `var(--font-display)` — Switzer | 700–800 | 44–80px, tracking -0.025em, lh 1.05 |
| H1 | Switzer | 700 | 44px, tracking -0.02em |
| H2 | Switzer | 600 | 32px |
| H3 | Switzer | 600 | 24px |
| Body | `var(--font-body)` — Switzer | 400 | 15px, lh 1.5 |
| UI label | Switzer | 500 | 15px |
| Eyebrow | `var(--font-mono)` — JetBrains Mono | 500 | 12px, uppercase, tracking 0.05em |
| Code/meta | JetBrains Mono | 400 | 0.92em |
| Korean | `var(--font-cjk-kr)` — Pretendard Variable | — | auto-applied via `:lang(ko)` |
| Japanese | `var(--font-cjk-jp)` — Noto Sans JP | — | auto-applied via `:lang(ja)` |

## Spacing

4px base grid: `--sp-1` (4) through `--sp-24` (96). Section padding: 64–96px.

## Radius

`--r-md: 10px` is the default for everything (buttons, inputs, cards, dialogs).
`--r-sm: 6px` for chips. `--r-full: 9999px` for avatars/pills only.

## Shadows

Warm-tinted, never pure black. `--shadow-sm` resting, `--shadow-md` hover, `--shadow-lg` dialogs.
Focus ring: `--shadow-glow` (amber, 4px, 0.18 alpha).

## Motion

- Easing: `--ease: cubic-bezier(0.32, 0.72, 0, 1)`
- Duration: `--d-fast` 140ms, `--d-base` 220ms, `--d-slow` 420ms
- Scroll-triggered only for marketing. No autoplay, no bounce, no parallax.

## Icons

Lucide (`lucide-react`). Stroke-based, 1.75px, round caps. Sizes: 16/20/24px.
Color: `currentColor`. Active: `--accent`. Disabled: `--fg-mute`.

## Logo files (in `assets/`)

| File | Use |
|---|---|
| `iyuno-logo.svg` | Primary — dark wordmark + amber dot, light backgrounds |
| `iyuno-logo-white.svg` | Dark backgrounds |
| `iyuno-logo-mono.svg` | Single-color black, restricted contexts |
| `iyuno-logo-mono-amber.svg` | Single-color amber |
| `iyuno-mark.svg` | Dot only — favicon, app icon, avatar |

## Do / Don't

### Always

- Use warm neutrals (hue ~80 OKLCH). Never cool grays.
- 10px radius on all interactive surfaces.
- Sentence case in product UI.
- Numerals for all numbers (`12 languages` not "twelve").
- Logical CSS properties for RTL support (`margin-inline-start`).
- WCAG AA contrast for all text/background pairs.
- Focus ring visible on all interactive elements.

### Never

- ❌ Cool blue/purple/cyan accents
- ❌ Gradients as primary surface treatment
- ❌ Glassmorphism or blur effects (except modal scrims)
- ❌ Globe, flag, or generic AI/robot icons
- ❌ Serif fonts (wordmark is sans-serif, system is unified sans)
- ❌ Autoplay video or looping carousels
- ❌ Bounce/spring/staggered animations
- ❌ Emoji in product UI or external surfaces
- ❌ Inner shadows or neumorphic effects
- ❌ "Translation company" language — we say creativity, meaning, stories

## Voice (for generating copy)

- **Marketing:** poetic, declarative, short sentences. Trust through restraint.
- **Product UI:** precise, neutral, imperative. "Start a build" not "You can start a build."
- **Errors:** direct, plain. No apologies, no exclamation marks.
- We say: creativity, meaning, travel, stories, stewards
- We avoid: translation, AI tools, workflows, unleash, power, reimagined

## Component patterns (shadcn/ui conventions)

When generating React components, use:
- Tailwind CSS v4 with CSS variables from `colors_and_type.css`
- shadcn/ui as the component base (Radix primitives)
- `data-theme="dark"` attribute for dark mode toggling
- `prefers-reduced-motion` respected in all transitions

## Reference

- Live preview: https://x-team-dev.github.io/iyuno-design/
- Repo: https://github.com/x-team-dev/iyuno-design
- Tokens (full): `colors_and_type.css`
- Brand guide: `reference_kit/brand.html`
- Components: `reference_kit/components.html`
