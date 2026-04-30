---
name: legal-update-sync
description: Use when editing privacy-policy or terms pages, or when a website or product change could affect legal-facing claims in the PlanKept website.
---

# Legal Update Sync

Use this skill when changing legal text or any website/product behavior that
could affect privacy, retention, contact, wish-list, support, or other
legal-facing claims.

## Required reads

- `AGENTS.md`
- `CLAUDE.md`
- `skills/legal-update-sync/CHECKLIST.md`

## Core rule

Do not finish a task that likely changed legal disclosures while leaving the
legal docs stale. Follow the checklist and keep `site.config.mjs` versions in
sync with the public legal pages.

## Canonical files

- Privacy copy: `src/components/legal/PlanKeptPrivacyPolicyContent.astro`
- Terms copy: `src/components/legal/PlanKeptTermsOfServiceContent.astro`
- Legal versions and manifest values: `site.config.mjs`
- Manifest route: `src/pages/legal-manifest.json.ts`
- PlanKept app repo: `/Users/alekj/Documents/GitHub/plan enforcer`

## Model terms note

If a task changes PlanKept model/provider availability, do not hardcode the
current model catalog into the privacy policy. The website legal copy should
say selected models may have their own listed terms or licenses; exact current
license inventory belongs in the app model catalog, app Legal settings, and
model install/selection surfaces.
