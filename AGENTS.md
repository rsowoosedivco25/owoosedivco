# AGENTS.md — Royal Shepherds CAC Website

This document provides an overview of the project structure for developers and AI agents working on this codebase.

## Project Overview

A comprehensive, production-grade website for **The Royal Shepherds**, the Christian Paramilitary Youth Organization of Christ Apostolic Church (CAC). Features include member registration with digital ID generation, a timed constitution quiz with leaderboard, interactive org chart, training academy catalog, event calendar, gallery with lightbox, document library with search, donation portal, and more.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS v4 + custom CSS + Google Fonts |
| Language | TypeScript 5.x |
| Deployment | Netlify |

## Directory Structure

```
src/
  routes/
    __root.tsx        # Root layout: sticky Navbar, Footer, WhatsApp float button
    index.tsx         # Homepage: hero, stats counter, mission, core values, programs, testimonials, news preview
    about.tsx         # About Us: identity, history timeline, mission, vision, motto, core values, objectives
    structure.tsx     # Org Structure: interactive accordion chart, rank table, departments
    leadership.tsx    # Leadership: national officers, commander message, regional officers, officers portal link
    training.tsx      # Training Academy: course catalog with expandable topics, progress dashboard, certificates
    events.tsx        # Events: filterable event calendar with registration progress, schedule accordion
    gallery.tsx       # Gallery: masonry grid, lightbox modal, video section
    news.tsx          # News: blog with categories, featured articles, newsletter subscribe
    membership.tsx    # Membership: 3-step registration form, digital ID card generator
    quiz.tsx          # Quiz: 15-question timed exam, auto-grading, leaderboard, result review
    donate.tsx        # Donate: amount picker, one-time/monthly toggle, Paystack/Flutterwave buttons, partnership tiers
    projects.tsx      # Projects: community impact showcase with metrics, SDG alignment
    contact.tsx       # Contact: form, state command directory, Google Maps placeholder, social links
    documents.tsx     # Documents: searchable library with PDF download/preview buttons
  styles.css          # Global styles, @theme tokens, animations, utility classes
  router.tsx          # TanStack Router configuration (routeTree auto-generated)
```

## Color System

Defined in `styles.css` as CSS custom properties and `@theme` tokens:

| Variable | Value | Usage |
|----------|-------|-------|
| `--navy` / `--color-navy` | `#0B1F3A` | Primary backgrounds, text |
| `--gold` / `--color-gold` | `#D4AF37` | Accents, badges, CTAs |
| `--deep-red` / `--color-deep-red` | `#8B0000` | Accent highlights |
| `--off-white` | `#F5F3EE` | Light section backgrounds |

## Typography

- **Playfair Display** — headings (h1–h4, display text)
- **Poppins** — body text, paragraphs
- **Montserrat** — labels, badges, buttons, uppercase UI elements

Applied via `fontFamily` inline styles (e.g., `style={{fontFamily:'Playfair Display'}}`), not Tailwind classes, because Tailwind v4 resolves `@theme` font tokens as `font-[name]` classes.

## Key Coding Patterns

- **All page components are self-contained** — data arrays, sub-components, and state are co-located in the route file
- **Inline styles for color values** — because custom colors are easier to apply inline than through Tailwind's `@theme`-generated classes in this configuration
- **No external UI component library** — all UI is hand-crafted with Tailwind utilities and custom CSS classes defined in `styles.css`
- **Sticky sub-navs** use `top-16 z-40` to sit below the main 64px navbar
- **Card hover animations** use the `.card-hover` class from `styles.css`

## Custom CSS Classes (styles.css)

| Class | Effect |
|-------|--------|
| `.card-hover` | Lift + shadow on hover |
| `.badge-gold` | Gold pill badge |
| `.section-divider` | Gold-to-red gradient horizontal rule |
| `.military-pattern` | Subtle diagonal stripe overlay |
| `.gold-shimmer` | Animated gold gradient text |
| `.animate-fade-in-up` | One-shot fade-up animation |
| `.pulse-gold` | Gold glow pulsing animation for CTAs |
| `.progress-bar` | Gold-to-red gradient progress fill |

## Extending the Site

- **Add a new page**: Create `src/routes/yourpage.tsx` with `createFileRoute('/yourpage')({component: ...})`
- **Add a nav link**: Edit the `navLinks` array in `__root.tsx`
- **Add database persistence**: Use `@netlify/database` with Drizzle ORM
- **Add real form submissions**: Use Netlify Forms (add `data-netlify="true"` to forms, run enable script)
- **Add authentication**: Use Netlify Identity (`@netlify/identity`)
