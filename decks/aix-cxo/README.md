# Iyuno AIX Direction — Plain-Language CXO Deck

A 17-slide HTML presentation for a non-technical CXO audience. The deck uses the Iyuno design system's color, typography, logo assets, and reusable `<deck-stage>` component.

## Open locally

From the repository root:

```bash
python3 -m http.server 4173
```

Then open:

```text
http://127.0.0.1:4173/decks/aix-cxo/
```

Direct links use a one-based slide hash, for example:

```text
http://127.0.0.1:4173/decks/aix-cxo/#9
```

## Controls

- `→`, `Page Down`, or `Space`: next slide
- `←` or `Page Up`: previous slide
- `Home`: first slide
- `End`: last slide
- `1`–`9` and `0`: jump to slide 1–10
- `R`: reset to slide 1
- Touch: tap the left or right third of the screen

## Print or save as PDF

Use the browser's **Print → Save as PDF**. The deck's print stylesheet renders one 1920×1080 slide per page with presentation controls hidden.

## Source and positioning

This is the plain-language presentation companion to the working strategy document:

- [Iyuno AIX Direction — Plain-Language CXO Deck](https://app.notion.com/p/AIX-Iyuno-AIX-Direction-Plain-Language-CXO-Deck-39f559e9b6b281b8a460e4cf04bc610b)
- [Iyuno AI-Native Transformation Direction — CXO Narrative & Roadmap](https://app.notion.com/p/AIX-Iyuno-AI-Native-Transformation-Direction-CXO-Narrative-Roadmap-39f559e9b6b28110bf26cd5258444794)

The visible deck intentionally avoids technical terms and citations. Source qualifications, including the distinction between Jensen Huang's direct statements and Iyuno's “means to purpose” interpretation, remain in the detailed strategy document.

## Implementation

- Entry point: `index.html`
- Design tokens: `../../colors_and_type.css`
- Logos: `../../assets/iyuno-logo.svg` and `../../assets/iyuno-logo-white.svg`
- Presentation runtime: `../../templates/deck-stage.js`
- Canvas: 1920×1080
