# Aji C. George — Executive Portfolio

A multi-page personal portfolio for **Aji C. George**, Strategic Finance & Internal Audit Leader (UAE & GCC).

Design system: **“Private Office”** — navy · champagne · ivory, with Fraunces / Inter / IBM Plex Mono.

## Stack
React 19 · Vite 6 · Tailwind CSS v4 · React Router v7 · Framer Motion · FontAwesome.

## Quick start
```bash
npm install
npm run dev        # http://localhost:5173
```

## Build & preview
```bash
npm run build      # outputs to /dist
npm run preview    # serve the production build locally
```

## Deploy
- **Vercel** — push the repo and import it. `vercel.json` already rewrites all routes to `index.html` for client-side routing.
- **Any static host** — upload the contents of `/dist`. Ensure the host rewrites unknown routes to `index.html`.

## Editing content — one file
**All copy and data live in `src/data/content.js`** (the single source of truth). Update a fact there once and it propagates across every page.

When Aji returns the outstanding information-request answers, slot them straight into `content.js`:
- **ERP / systems** → `pillars` (Tax, Systems…) and `skills.systems`
- **P&L / budget figure** → `experiences[0].metrics` and `heroStats` / `ratioStats`
- **Certification status** → `certifications`
- **Employer name** → `experiences[0].company` (currently shown generically)

## Structure
```
src/
  data/content.js          # ← all content
  components/ui/index.jsx   # primitives (Button, Reveal, StatCounter, …)
  components/layout/        # Navbar, Footer, CTABand
  layouts/RootLayout.jsx    # nav + page transitions + footer
  routes/Router.jsx         # routes (lazy-loaded)
  pages/                    # Home, About, Journey, Experience, Expertise,
                            # AuditRisk, Achievements, Credentials, Resume,
                            # Contact, NotFound
public/assets/resume/       # CV PDF (served at /assets/resume/…)
```

## Routes
`/` · `/about` · `/journey` · `/experience` · `/expertise` · `/audit-risk` · `/achievements` · `/credentials` · `/resume` · `/contact`

The top nav shows six primary destinations + a Résumé button; the footer and mobile drawer expose the full ten-page sitemap.
