# CLAUDE.md — humanfreq-web

This is the Human Frēq **WEBSITE** (`humanfreq-web`).
It is SEPARATE from `humanfreq-app` (the 90-day coaching app). Do not import,
depend on, or reference that repo. This site has no auth, no database, no
coaching logic.

---

## Stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling
- **Deployed on Vercel** — see Deploy section below for the deploy method

## Commands

```bash
npm run dev      # local dev server (http://localhost:3000)
npm run build    # production build
npm run start    # serve production build locally
```

---

## PORTABILITY RULE (never break this)

The storefront is a SINGLE SWAPPABLE LINK. The site must never lock to Printify.

- `SHOP_URL` in `.env.local` (and Vercel env vars) is the ONLY place the shop
  URL lives.
- `config/site.ts` re-exports it — every shop button reads from there.
- No Printify SDK, widget, iframe, or direct Printify dependency anywhere.
- To migrate providers: update `SHOP_URL` in one place. Done.

---

## Brand Tokens

**Colors**
- Background: `#0a0a0a` (near-black)
- Text: `#f5f0e8` (warm off-white)
- Accent: `#c8a96e` (golden amber)
- Muted: `#8a7a6a` (warm gray)

**Typography**
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)

**Phone-first**: design for a 390 px viewport, then scale up. The site must be
sunlight-legible — sufficient contrast, no small type.

---

## Brand Voice Rules

- **"Frēq"** always: capital F + macron (ē). Never "Freq" or "FRĒQ".
- **No em dashes** in brand or marketing copy. Use a comma, period, or restructure.
- **The wink** ` ; )` renders as the three literal characters (semicolon, space,
  close-paren). Never substitute an emoji.
- **No program vocabulary as a system in consumer copy.** "Frequency" is fine as
  a plain word. Never frame it as a named mechanism (e.g., "The Frequency System").
- Voice: direct, warm, earned. No hype, no wellness clichés, no empty superlatives.

---

## Key Files

| File | Purpose |
|---|---|
| `config/site.ts` | `SHOP_URL` + site constants — only source of storefront link |
| `app/layout.tsx` | Root layout, fonts, global meta |
| `app/page.tsx` | Landing page |
| `app/story/page.tsx` | Story click-through page |
| `components/ShopButton.tsx` | Sticky CTA — reused on every page |

---

## Email Capture

Posts to Kit (ConvertKit) via `KIT_FORM_ID` + `KIT_API_KEY` env vars.
Kit is non-fatal: failure logs a warning, never blocks the user.

---

## Deploy

<!-- Fill in after first Vercel deploy confirms the deploy method -->
Deployed to Vercel. Confirm whether this project auto-deploys on push or requires
`vercel --prod` — update this line once confirmed.

DNS: shop.humanfreq.com will CNAME to this Vercel project after the site is
confirmed serving on the default Vercel URL. Do not repoint DNS until confirmed.

---

## What NOT to build here

- No auth, no sessions, no cookies
- No database reads/writes
- No coaching or day-tracking logic
- No Printify SDK or storefront API calls
