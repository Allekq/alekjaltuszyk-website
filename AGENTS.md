# Alek Jałtuszyk Website Agent Guide

This repository is the personal website and app directory for Alek Jałtuszyk.
It is the public root site, the `/apps` chooser, the PlanKept web surface, and
the deployment surface for this domain. It is not the main iOS app codebase for
PlanKept or Voice of Self.

## Canonical Project Map

- Personal website repo: `/Users/alekj/Documents/GitHub/alekjaltuszyk-website`
- PlanKept app repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- Voice of Self website repo: `/Users/alekj/Documents/GitHub/voice-of-self-website`
- Voice of Self app repo: `/Users/alekj/Documents/GitHub/closure-app`

Plan Enforcer is the actual app repo behind PlanKept. Closure App is the actual
app repo behind Voice of Self.

If a task is about actual app behavior, use the sibling app repo that matches
the product. Do not assume this website repo contains either app implementation.

## Broad Product Idea

The domain is now split on purpose:

- `/` is the personal site for Alek Jałtuszyk.
- `/apps/` is the directory of apps and product sites.
- `/apps/PlanKept/` is the PlanKept web surface on this domain.
- Voice of Self stays on its own separate website and app repo.

## How To Route Work

- Stay in this repo for the personal homepage, `/apps` directory, the
  `/apps/PlanKept/` page, support/legal pages, GitHub Pages deployment, Astro
  config, and static website tasks.
- Switch to `/Users/alekj/Documents/GitHub/plan enforcer` for PlanKept iOS app
  behavior, reminders, enforcement logic, AI flows, onboarding, or app
  architecture.
- Switch to `/Users/alekj/Documents/GitHub/closure-app` for Voice of Self app
  behavior.
- Switch to `/Users/alekj/Documents/GitHub/voice-of-self-website` for Voice of
  Self marketing/support/legal website work.
- If a request could affect both a website repo and an app repo, check whether
  the website copy and app behavior should be updated together.

## Website Architecture Expectations

- Keep `src/pages/index.astro` thin. It should compose the homepage, not own
  large blocks of page markup.
- Keep human-facing route hierarchies folder-based when Astro supports that
  shape.
- Keep the route tree and app destinations centralized in `src/config/routes.ts`.
- Keep `src/layouts/SiteLayout.astro` as the shared shell for the homepage and
  legal/content pages.
- Keep homepage section order in
  `src/components/landing/orchestrator/HomePageOrchestrator.astro`.
- Keep the PlanKept page section order in
  `src/components/landing/orchestrator/PlanKeptPageOrchestrator.astro`.
- Put section-specific UI in `src/components/landing/sections/`.
- Put reusable primitives in `src/components/landing/ui/`.
- Keep global site values in `src/config/site.ts`.
- Keep base-path-safe links and asset helpers in `src/lib/paths.ts`. Use
  `withBase()` for internal paths.
- Keep tokens in `src/styles/tokens.css`, base/global/legal styling in
  `src/styles/global.css`, shared landing styles in `src/styles/landing.css`,
  and support/wish-list page styling in `src/styles/waitlist-guide.css`.

## Code Cleanliness Rules

- Do not turn the site into giant HTML, giant CSS, or giant JS files.
- Do not add backend, auth, database, or secret-dependent form flows. This site
  is public and static.
- Reuse patterns that are genuinely shared; avoid clever abstractions for one
  use case.
- Keep interactive enhancements progressive. The site should still render and
  navigate correctly without JavaScript.
- Keep public copy easy to find. Global values belong in `src/config/site.ts`;
  section-specific copy should stay close to the section that renders it.

## Motion And Interaction Rules

- Motion should feel alive, warm, and intentional rather than noisy.
- Respect `prefers-reduced-motion` for animated enhancements.
- Mobile layout quality matters as much as desktop layout quality.
- If an interaction depends on hover, make sure it still reads clearly on touch
  devices.

## Validation And Preview

- After meaningful website changes, run `npm run check` and `npm run build`.
- Manually sanity-check phone and desktop layouts when changing spacing,
  structure, or motion.

## AI Discoverability Maintenance

- Keep the site-level discovery files aligned with the real product and page
  structure:
  `src/pages/llms.txt.ts`, `src/pages/llms-full.txt.ts`,
  `src/pages/robots.txt.ts`, and `src/pages/sitemap.xml.ts`.
- Keep shared discovery URLs and page lists in `src/lib/discovery.ts`.
- Keep shared product positioning and AI-facing summary copy in
  `src/config/site.ts` under `siteConfig.aiDiscovery`.
- If you add, remove, rename, or substantially repurpose an indexable page,
  update `src/lib/discovery.ts` so sitemap and LLM discovery outputs stay
  current.
- If you add or change an app destination, update `src/config/routes.ts` and
  the discovery output together.

## Legal Update Flow

- Treat privacy-policy and terms updates as a controlled workflow.
- If a task edits `src/pages/privacy-policy/index.md` or
  `src/pages/terms-of-service/index.md`, or changes data collection, support flows,
  wish-list flows, account claims, or other legal-facing behavior, open
  `skills/legal-update-sync/CHECKLIST.md` before finishing.
- This repo does not yet have a mirrored legal file system in the app repo. If
  that mirror is added later, keep the website legal copy and app-side legal
  representation aligned.
- Update version and effective-date changes in `site.config.mjs`, not in
  generated `dist/legal-manifest.json`.

## Repo Skill Sources

- `skills/landing-page-workflow/SKILL.md`
- `skills/legal-update-sync/SKILL.md`
