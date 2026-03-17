# CLAUDE.md — Agent Operating System
# TGO Agency · Webinar Funnel Template

> **NOTE:** Paste the full Build Agent prompt here from TGO Agency's master prompt library.
> This file is the agent's instruction set and should never be modified by the Build Agent itself.

---

## PLACEHOLDER — Awaiting Full Agent Prompt

When you receive this file with a full prompt, the Build Agent will:

1. Read `CLIENT_BRIEF.md` completely
2. Populate all fields in `client.config.ts` from the brief
3. Verify no `[PLACEHOLDER]` values remain in `client.config.ts`
4. Confirm image filenames match what's in `/public`
5. Run a final hardcoded-content check across all source files
6. Report what is complete and what still needs the client to provide

---

## Quick Reference — Template Files

| File | Purpose |
|------|---------|
| `CLIENT_BRIEF.md` | Fill this for every new client |
| `client.config.ts` | Auto-populated by Build Agent from brief |
| `app/executive/page.tsx` | Funnel 1 route |
| `app/marathoner/page.tsx` | Funnel 2 route |
| `app/thank-you/page.tsx` | Post-purchase confirmation |
| `public/coach1.png` | Primary coach portrait |
| `public/coach1-action.png` | Primary coach action/event photo |
| `public/coach2.png` | Secondary coach portrait |
