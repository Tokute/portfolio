# Ned / Tokute — Developer Portfolio

Portfolio website for midterm output. A static, HTML + CSS portfolio implementing a **tonal orange** design system (derived from a Figma style guide) with **Black Ops One** display and **Monda** body type.

## Project Structure

```
developer-portfolio/
├── index.html        # Home — hero, intro, featured projects
├── about.html        # About — bio and skills & technologies
├── projects.html     # Projects — featured project + project grid
├── contact.html      # Contact — get in touch form
├── css/
│   └── style.css     # Global stylesheet (single source of truth)
└── readme.md
```

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with hero tagline, welcome intro, and a grid of featured project cards. |
| `about.html` | Short bio plus a skills section (`#about-skills`) using skill cards for Languages, Tools, and Focus Areas. |
| `projects.html` | A large, standout **featured project** (`#featured-project`) followed by a responsive grid of six project cards. |
| `contact.html` | A contact form (`#contact-form`) with name, email, and message fields. |

All pages share a common layout: sticky header with logo + navigation, a hero banner, a `<main>` content area, and a footer (`© Copyright 2026. All Rights Reserved. Created by Ned Basilio`).

## Design System

### Typography
- **Black Ops One** — display/hero type (`.hero-font`, 4.75rem).
- **Monda** — applied to every relevant tag via a single grouped rule at the top of the stylesheet (`font-family: "Monda", sans-serif`).
- Heading scale: `h1` 3rem, `h2` 2.5rem, `h3` 1.5rem, `h4` 1.25rem, `h5` 1rem.
- Text utility classes: `.text-big` 1.5rem, `.text-regular` 1rem, `.text-small` 0.75rem, `.caption` 0.625rem.

### Color System (`:root` variables)
| Variable | Value |
|----------|-------|
| `--color-primary` | `#ff8800` |
| `--color-primary-hover` | `#bf6600` |
| `--color-secondary` | `#c05621` |
| `--color-secondary-hover` | `#7c3311` |
| `--color-background` | `#fff3e6` |
| `--color-surface` | `#ffdab0` |
| `--color-text` | `#502a00` |
| `--color-muted` | `#a09180` |
| `--color-border` | `#593000` |
| `--color-success` | `#22c55e` |
| `--color-warning` | `#f59e0b` |
| `--color-error` | `#ef4444` |
| `--color-on-primary` | `#ffffff` |

### Shadow System
- `--shadow-small`: `0 2px 8px -2px #00000059`
- `--shadow-medium`: `0 4px 24px -2px #00000059`
- `--shadow-large`: `0 10px 40px -8px #00000059`

## Reusable Components

- **Cards** (`.card-grid`, `.card`) — mobile-first grid of project cards. Each card has a `.card-image` band (160px) and a `.card-body` (title with link, description, badges).
- **Featured card** (`#featured-project .featured-card`) — larger, standout card. Stacks vertically on mobile, flips to a horizontal image-left / content-right layout on desktop.
- **Skill cards** (`.skill-card`) — used on `about.html`; stretch to fill their grid columns (`justify-items: stretch`).
- **Badges** (`.badge`, `.badge-outline`, `.badge-success`, `.badge-warning`, `.badge-error`) — status/label chips.
- **Buttons** — `.button-primary` (primary fill), `.button-secondary` (secondary fill), and `.button-outline` (transparent). All share `padding: 1rem 0.75rem`, a `2px` border, `12px` radius, and a hover shadow (`--shadow-small`) plus their respective hover background. Hero CTAs on the home page use `#view-projects` / `#contact-me` with `.button-outline`.
- **Alerts** (`.alert`, `.alert-success`, `.alert-error`) — message boxes for form feedback.
- **Mobile links** (`.mobile-link`) — full-width call-to-action buttons used in the mobile-only content sections.

## Layout & Responsiveness

- `#container` holds the page; a `.header-container` flex bar aligns the logo and nav.
- The `.mobile` / `.tablet-desktop` pattern toggles content by viewport:
  - **Mobile (base)**: `.mobile` shown, `.tablet-desktop` hidden. Content stacks; card grids are single-column.
  - **Tablet (≥630px)**: `.tablet-desktop` shown, `.mobile` hidden; card grids become 2 columns.
  - **Desktop (≥1015px)**: card grids become 3 columns; cards widen; the featured project goes horizontal.
- **Print**: hides navigation and hero, and resets to white/black.
- Header is `position: sticky` with a bottom border.

## Accessibility & Semantics

- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Proper `<label for>` / input associations in the contact form.
- Responsive viewport meta tag and relative font sizing throughout.