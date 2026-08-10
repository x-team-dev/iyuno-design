# Google Cloud Startup Summit 2026 — The Context Gap

A 6-slide HTML visualization for David Lee's 5-minute product showcase at Google Cloud Startup Summit Singapore on 20 August 2026.

## Published deck

```text
https://x-team-dev.github.io/iyuno-design/decks/google-cloud-startup-summit/
```

Direct slide links use a one-based hash, for example:

```text
https://x-team-dev.github.io/iyuno-design/decks/google-cloud-startup-summit/#4
```

## Open locally

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/decks/google-cloud-startup-summit/
```

## Controls

- `→`, `Page Down`, or `Space`: next slide
- `←` or `Page Up`: previous slide
- `Home`: first slide
- `End`: last slide
- `1`–`6`: jump directly to a slide
- `R`: reset to slide 1
- Touch: tap the left or right third of the screen

## Print or save as PDF

Use the browser's **Print → Save as PDF**. The print stylesheet renders one 1920×1080 slide per page with presentation controls hidden.

## Source and positioning

Working strategy document:

- [Google Cloud Startup Summit 2026 Keynote Deck Strategy v1](https://app.notion.com/p/Google-Cloud-Startup-Summit-2026-Keynote-Deck-Strategy-v1-3b8559e9b6b281f4a541ce4006def366)

The deck uses the recommended **The Context Gap** route:

1. Universal agentic scaling problem
2. Beyond-borders context multiplication
3. Localization as the hardest real-world test
4. CLOE as persistent contextual memory
5. Google Cloud + Iyuno complementary architecture
6. Iyuno's grand vision for the global content economy

Visible claims are deliberately qualitative. Approved scale metrics, product proof points and Google Cloud service names should be added only after the alignment call and public-communications review.

## Implementation

- Entry point: `index.html`
- Design tokens: `../../colors_and_type.css`
- Logos: `../../assets/`
- Presentation runtime: `../../templates/deck-stage.js`
- Canvas: 1920×1080
