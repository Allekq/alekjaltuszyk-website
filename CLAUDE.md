# Alek Jałtuszyk Website Claude Guide

This repository is the personal static website and app directory for Alek
Jałtuszyk. It contains the root site, the `/apps` chooser, and the PlanKept web
surface. It is not the main app codebase for PlanKept or Voice of Self.

If the task is about PlanKept app behavior, reminders, enforcement logic, AI
features, or iOS architecture, switch to:

- `/Users/alekj/Documents/GitHub/plan enforcer`

If the task is about Voice of Self app behavior, switch to:

- `/Users/alekj/Documents/GitHub/closure-app`

If the task is about OverLit app behavior, ads, app-side legal acceptance,
privacy manifests, or App Store-facing claims, switch to:

- `/Users/alekj/Documents/GitHub/OverLit-app`

If the task is about the Voice of Self website, support pages, legal pages, or
public marketing surface, stay in this repo under `/apps/VoiceOfSelf/`.

Plan Enforcer is the app repo behind PlanKept. Closure App is the app repo
behind Voice of Self. OverLit App is the app repo behind OverLit.

## Non-Negotiable Rules

- Do not turn this repo into giant HTML, giant CSS, or giant JS files.
- Do not dump homepage markup into `src/pages/index.astro`.
- Do not hardcode repeated sizes, spacing, colors, radii, or motion values when
  tokens should own them.
- Do not hardcode app counts or availability claims in prose. Derive them from
  `src/lib/appState.ts`; see `skills/app-state-truth/SKILL.md`.
- Do not add backend flows, auth, databases, or fake form handling. This site
  is static and public.
- Do not create a second styling system when the token layer can be extended
  cleanly.

## Required File Ownership

- `src/pages/index.astro`
  Composition only.
- `src/config/routes.ts`
  Single source of truth for route hierarchy, app destinations, and the app
  list (`appDirectory`) including each app's release stage.
- `src/lib/appState.ts`
  Derived app counts, numerals, plurals, name lists, and release wording. Public
  copy must import these instead of hardcoding counts or availability claims.
- `src/layouts/SiteLayout.astro`
  Shared shell only.
- `src/components/landing/orchestrator/HomePageOrchestrator.astro`
  Source of truth for homepage section order.
- `src/components/landing/orchestrator/PlanKeptPageOrchestrator.astro`
  Source of truth for the `/apps/PlanKept/` landing page section order.
- `src/components/landing/sections/`
  Section-owned UI.
- `src/components/landing/ui/`
  Shared reusable primitives only.
- `src/config/site.ts`
  Global identity, metadata, links, and CTA labels.
- `src/lib/paths.ts`
  Base-path-safe internal links via `withBase()`.
- `src/styles/tokens.css`
  Canonical design tokens.
- `src/styles/landing.css`
  Shared landing-page styles and motion.
- `src/styles/global.css`
  Base/global/legal-page styles.

## Motion Standard

- The page should feel alive, but not chaotic.
- Motion must respect `prefers-reduced-motion`.
- Hover-only polish should never be the only way a UI communicates itself.
- Mobile interactions matter first.

## Static-Site Constraints

- Wish-list and support flows must stay link-based unless explicitly changed.
- Internal links and routes must stay compatible with GitHub Pages base paths.
  Use `withBase()` for internal URLs.
- The root domain is the personal site, not the PlanKept app itself.
- Voice of Self's public website, support pages, and legal pages live in this
  repo under `/apps/VoiceOfSelf/`.
- Do not add secrets to this repo.
- Keep public contact details easy to swap in `src/config/site.ts`.

## Legal Workflow

- If privacy-policy or terms text changes here, read
  `skills/legal-update-sync/CHECKLIST.md` before finishing.
- Update legal version and effective-date changes in `site.config.mjs`.
- If a task likely changes legal disclosures, do not finish with stale legal
  docs.
- For PlanKept, also check the app legal, purchase, and model-license surfaces
  in `/Users/alekj/Documents/GitHub/plan enforcer`.
- For OverLit, also keep the public legal versions aligned with app-side legal
  acceptance/versioning in `/Users/alekj/Documents/GitHub/OverLit-app`.
- For Voice of Self, also sync the app-bundled legal files and legal manifest
  in `/Users/alekj/Documents/GitHub/closure-app/external/legal/`.
- For Take Me Somewhere, also keep the app legal catalog, privacy manifest, and
  map/location disclosures aligned in `/Users/alekj/Documents/GitHub/TakeMeSomewhere`.

## Validation Checklist

Run these after meaningful site changes:

- `npm run check`
- `npm run build`

## Local Preview

- Use `run_site.py` for the easiest browser-based preview, or `npm run dev` if
  you are working from the terminal.

## Repo Skill Sources

- `skills/app-state-truth/SKILL.md`
- `skills/landing-page-workflow/SKILL.md`
- `skills/legal-update-sync/SKILL.md`
- `skills/roam-timeline-variants/SKILL.md`
