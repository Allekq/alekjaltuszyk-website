---
name: landing-page-workflow
description: Use when changing the PlanKept landing page, responsive layout, animation system, or shared site structure in this Astro website repo.
---

# Landing Page Workflow

Use this skill when working on homepage sections, landing primitives, responsive
splits, or motion polish.

## Core workflow

1. Read `AGENTS.md` and `CLAUDE.md` first.
2. Keep `src/pages/index.astro` thin and preserve
   `src/components/landing/orchestrator/HomePageOrchestrator.astro` as the
   homepage source of truth.
3. Put section-owned markup in `src/components/landing/sections/`.
4. Put true shared primitives in `src/components/landing/ui/`.
5. Keep global values in `src/config/site.ts`.
6. Use `src/styles/tokens.css` for repeated spacing, colors, radii, shadows,
   and motion.
7. Use `src/styles/landing.css` for shared landing behavior; avoid scattered
   one-off inline values.
8. Keep the mobile layout first-class.
9. Keep visible copy and discovery metadata aligned.

## Validation

- Run `npm run check`.
- Run `npm run build`.
- Sanity-check phone and desktop layouts.

## Quality bar

- No giant mixed-responsibility files.
- No duplicated sections when a small reusable primitive would help.
- No generic abstraction for a single use case.
- Motion should feel intentional and respect reduced-motion settings.

