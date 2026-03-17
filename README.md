# Webinar Funnel Template — TGO Agency

## For New Client Setup
1. Fill in CLIENT_BRIEF.md completely
2. Drop client images into /public (coach1.png, coach1-action.png, coach2.png)
3. Open Claude Code and run the Master Execution Prompt from CLAUDE.md
4. Deploy on Vercel

## Image Requirements
- coach1.png — Primary coach portrait (min 600x800px)
- coach1-action.png — Primary coach action/event photo (min 600x800px)
- coach2.png — Secondary coach portrait (min 400x400px)

## Project Structure
- CLIENT_BRIEF.md — Fill this for every new client
- CLAUDE.md — Agent operating system (never modify)
- client.config.ts — Auto-populated by Build Agent from brief
- app/ — Next.js pages
- components/ — Reusable components
- public/ — Client images go here

## Stack
Next.js 15 · TypeScript · Custom CSS · Vercel
