# The Royal Shepherds – CAC Website

A modern, responsive, full-featured website for The Royal Shepherds, the official Christian Paramilitary Youth Organization of Christ Apostolic Church Nig. & Overseas (CAC).

## Key Technologies

- **Framework**: TanStack Start (React + Vite)
- **Routing**: TanStack Router (file-based)
- **Styling**: Tailwind CSS v4 + custom CSS with Google Fonts
- **Deployment**: Netlify (edge-optimized)

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

For local Netlify feature emulation:
```bash
netlify dev --port 8889
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, stats, core values, programs |
| `/about` | History, mission, vision, values, objectives |
| `/structure` | Interactive org chart, ranks, departments |
| `/leadership` | National, regional officer profiles |
| `/training` | Digital training academy with 7 courses |
| `/events` | Event calendar with registration |
| `/gallery` | Photo & video gallery with filters |
| `/news` | Blog/news system with categories |
| `/membership` | 3-step registration + digital ID card |
| `/quiz` | 15-question timed constitution exam |
| `/donate` | Donation portal with Paystack/Flutterwave |
| `/projects` | Community projects with impact metrics |
| `/contact` | Contact form + state commands directory |
| `/documents` | Digital library with search |

## Color Scheme

- Navy Blue: `#0B1F3A`
- Gold: `#D4AF37`
- Deep Red: `#8B0000`
- White: `#FFFFFF`

## Fonts

- Playfair Display (headings)
- Poppins (body)
- Montserrat (labels, badges, UI)
