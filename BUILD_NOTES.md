# S01.DESIGN — Build Notes

Living changelog for the studio portfolio. Keep it short; append as we iterate.

**Live:** https://s01design.vercel.app · **Repo:** github.com/katiekimdigital/s01design (SSH) · **Domain (later):** s01.design

---

## Stack
- Next.js **16.2.7** (App Router, Turbopack) · React **19** · TypeScript 5
- Tailwind CSS **v4** (tokens live in `app/globals.css` `@theme` — *not* `tailwind.config.ts`, which is inert)
- Framer Motion 12 · Fonts: Inter (sans), IBM Plex Mono (mono), Caveat (handwriting, currently unused)

## Design tokens
- Accent red `#FF3000` (deep `#B81F00`) · black/white · zero border-radius · 28px grid background
- Type: Inter Black display, IBM Plex Mono labels. Swiss-Modernist *foundation*, adapted per client.

## Routes
| Route | What |
|---|---|
| `/` | Main site — **Spec Sheet hero** (`HeroSpec`) + `SpecMetrics` + sections |
| `/about` | Bio, facts, experience timeline (Cochlear & Upskilled hyperlinked) |
| `/lab` | Prototype: Spec Sheet (kept for iteration) |
| `/lab/results` | Prototype: Results-First hero (kept for iteration) |
| `/v2` | Redirects → `/` (legacy) |

## Key components / props
- `HeroSpec` — status bar + `// studio.spec` datasheet (incl. **APAC · EU · CAM — open to global**) + in-bar nav
- `SpecMetrics` — "Measured Output", scroll count-up (−50%, +25%, 13, 40+)
- `BentoGrid` — work grid; prop **`showLms`** adds the Upskilled tile (3×3). Cochlear + Upskilled tiles link out.
- `ProjectTile` — reusable editorial split (photo + descriptor + meta + palette + CTA)
- `PricingSection` — prop **`showAuditTier`** adds the $350 Power Hour entry band
- `HeroStudio` (Arestov-style) & `HeroResults` (Results-First) — alternates, not on `/`
- `SystemAssetsSection` — built, **not mounted** (waiting on Gumroad store)

## Positioning / brand
- Title: **Web Designer & Developer** (not "UX Architect")
- Studio brand S01.DESIGN; Katie is the named practitioner (studio of one)
- Templates store: **bys01design** (Etsy → moving to Gumroad). "Studio Template Haus" retired.

## Pricing ladder
Power Hour $350 → Sprint $1.5k → Studio Project $6k → Retainer $3k/mo. Templates (low-ticket) when store ready.

## FYIs / gotchas
- **Personal images excluded from repo:** `assets/` and `public/stickers/` are gitignored — cat/dog/personal photos are NOT public. Stickers parked until green light.
- **Contact form:** Formspree (`/f/meendzaw`).
- **Deploy:** push to `main` → Vercel auto-builds. SSH key set up on this Mac.
- **NavBar** (floating pill) is currently dormant — the Spec hero carries its own nav.
- Misconfigured git repo once existed at `~/` (home folder) with this remote — detach if it resurfaces.

## Changelog
- **v1 (Jun 2026):** Spec Sheet hero shipped as main. Editorial work tiles + Upskilled LMS. Power Hour tier. `/about` page. bys01design rename. Deployed to Vercel.
