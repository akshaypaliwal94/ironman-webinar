# Ironman 70.3 Webinar — Landing Page

Next.js 15 · App Router · TypeScript · Custom CSS · Vercel-ready

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Add Your Images

Place these three images in the `/public` folder before deploying:

| File | Used for |
|------|----------|
| `satyam.png` | Hero section — Satyam portrait |
| `satyam2.png` | Coach section — Satyam at Ironman finish line |
| `mitch.png` | Coach section — Mitch Kibby |

Recommended sizes:
- `satyam.png` — portrait crop, minimum 600×800px
- `satyam2.png` — portrait/action, minimum 600×800px
- `mitch.png` — square or portrait, minimum 400×400px

---

## Update the CTA Link

Search for `href="#"` in the components and replace with your actual registration/payment link (Instamojo, Razorpay, etc.).

---

## Deploy to Vercel

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel
```

### Option B — GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — Vercel auto-detects Next.js
4. Click Deploy

No `vercel.json` needed — Next.js is detected automatically.

---

## Project Structure

```
ironman-webinar/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Page assembly
│   └── globals.css      # All styles (design system)
├── components/
│   ├── Hero.tsx         # Hero section + meta cards
│   ├── Countdown.tsx    # Live countdown timer (client)
│   ├── ScrollReveal.tsx # IntersectionObserver (client)
│   ├── WhoSection.tsx   # Who this is for
│   ├── BlueprintSection.tsx  # 5-step timeline
│   ├── CoachSection.tsx # Satyam + Mitch bios
│   └── FaqSection.tsx   # FAQ accordion (client)
├── public/              # ← Drop your images here
├── package.json
├── next.config.ts
└── tsconfig.json
```
