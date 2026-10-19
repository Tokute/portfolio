# Ned / Tokute — Developer Portfolio

Portfolio website for midterm output.

## Project Notes

**View Full Certificate** hyperlinks are purposefully left empty for now.

## Project Structure

```
developer-portfolio/
├── index.html        # Home — hero, intro, featured projects
├── about.html        # About — bio and skills & technologies
├── projects.html     # Projects — featured project + project grid
├── contact.html      # Contact — get in touch form
├── css/
│   └── style.css     # Global stylesheet with design tokens, layout, and components
├── assets/           # Static assets for UI enhancements
│   ├── search.png    # Search icon for search bar
│   ├── success.png   # Success feedback icon for forms
│   └── error.png     # Error feedback icon for forms
├── images/           # Where logo.pngs and media are stored
│   ├── profile.jpg   # Profile photo
│   ├── technology logos (css.png, html.png, java.png, javascript.png, python.png, sql.png, vscode.png, photoshop.png, figma.png, git.png, github.png, linkedin.png, gmail.png, facebook.png)
│   └── certifications/  # Where certification images are stored
│       ├── 1stRegionalAIConference.png
│       ├── CompTIATechcertificate.png
│       └── simplilearn-git.jpg
├─ script.js          # Search functionality with suggestions and form validation
└── readme.md
```

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with hero tagline, welcome intro, a grid of featured project cards, and social links section. |
| `about.html` | Short bio plus a skills section (`#about-skills`) using skill cards for Languages, Tools, and Focus Areas. |
| `projects.html` | A large, standout **featured project** (`#featured-project`) followed by a responsive grid of six project cards. |
| `contact.html` | A contact form (`#contact-form`) with name, email, and message fields. |

All pages share a common layout: sticky header with logo + navigation, a hero banner, a `<main>` content area, and a footer.

## Design System

### Typography

- **Black Ops One** — display/hero type (`.hero-font`, 2.5rem base, 4.75rem at desktop).
- **Monda** — applied to every relevant tag via a single grouped rule at the top of the stylesheet (`font-family: "Monda", sans-serif`).
- Heading scale: `h1` 4rem, `h2` 3rem, `h3` 2.5rem, `h4` 2rem, `h5` 1.5rem.
- Text utility classes: `.text-big` 1.25rem, `.text-regular` 1rem, `.text-small` 0.75rem, `.caption` 0.625rem.

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

## Reusable Components

- **Cards** (`.card-grid`, `.card`) — mobile-first grid of project cards. Each card has a `.card-image` band (160px) and a `.card-body` (title with link, description, badges).
- **Featured card** (`#featured-project .featured-card`) — larger, standout card. Stacks vertically on mobile, flips to a horizontal image-left / content-right layout on desktop.
- **Skill cards** — used on `about.html`; reuse the `.card` class with selectors scoped under `#about-skills` to fill grid columns (`justify-items: stretch`).
- **Badges** (`.badge`, `.badge-outline`, `.badge-success`, `.badge-warning`, `.badge-error`, `.current-learning-badge`) — status/label chips; `.current-learning-badge` indicates current learning focus.
- **Buttons** — `.button-primary` (primary fill), `.button-secondary` (secondary fill), and `.button-outline` (transparent). All share `padding: 1rem 0.75rem`, a `2px` border, `12px` radius, and a hover shadow (`--shadow-small`) plus their respective hover background. Hero CTAs on the home page use `#view-projects` / `#contact-me` with `.button-outline`.
- **Alerts** (`.alert`, `.alert-success`, `.alert-error`) — message boxes for form feedback.
- **Mobile links** (`.mobile-link`) — full-width call-to-action buttons used in the mobile-only content sections.
- **Project badges** (`.project-badges`) — used to label featured projects (e.g., "Featured").
- **Learning badge** (`.learning-badge`) — used in the skills section to highlight current learning topics.
- **Site footer** (`.site-footer`) — contains copyright and domain information.
- **Social links** (`.socials-link`) — flex column container for platform icons with labels

## Layout & Responsiveness

- `#container` holds the page; a `.header-container` flex bar aligns the logo and nav.
- The `.mobile` / `.tablet-desktop` pattern toggles content by viewport:
  - **Mobile (base)**: `.mobile` shown, `.tablet-desktop` hidden. Content stacks; card grids are single-column.
  - **Tablet (≥768px)**: `.tablet-desktop` shown, `.mobile` hidden; card grids become 2 columns.
  - **Desktop (≥1015px)**: card grids become 3 columns; cards widen; the featured project goes horizontal.
- **Print**: hides navigation and hero, and resets to white/black.
- Header is `position: sticky` with a bottom border.

## JavaScript Functionality

### Search Bar (`script.js`)
- Interactive search functionality with expandable/collapsible search bar
- Suggestions dropdown that filters sections based on current viewport (mobile/tablet-desktop)
- Section jump navigation: typing a section ID jumps directly to that section on the current page
- Cross-page navigation: if section exists on another page, navigates to that page and section
- Visual feedback: highlights found sections temporarily
- Accessible design: supports mouse clicks, Enter key, and click-away to dismiss

### Form Validation (`script.js`)
- Client-side validation for contact form fields (name, email, message)
- Email format validation using regex pattern
- Visual feedback: success/error states with corresponding icons and messages
- Auto-hide feedback after timeout (3 seconds for errors, 5 seconds for success)
- Prevents actual form submission (demo/test mode)

## Design Tokens

The design system uses CSS custom properties for:
- **Colors**: Primary, secondary, background, surface, text, muted, border, semantic colors (success, warning, error)
- **Border Radius**: Small (4px), medium (8px), large (12px)
- **Shadows**: Small, medium, large elevations
- **Spacing**: Tight, default, medium, large, block separator, major section, large major section

## Development Notes

This portfolio was built as a static website demonstrating:
- CSS custom properties for design token management
- Mobile-first responsive design with breakpoint-based layout changes
- Reusable UI components through CSS classes
- Interactive JavaScript functionality without frameworks
- Accessible design patterns
- Semantic HTML structure