---
name: legal-update-sync
description: Use when editing PlanKept or OverLit privacy-policy or terms pages, or when a website or product change could affect legal-facing claims that must stay aligned with their app repos.
---

# Legal Update Sync

Use this skill when changing legal text or any website/product behavior that
could affect privacy, retention, contact, wish-list, support, ads, purchases,
local storage, backup behavior, AI/model routing, or other legal-facing claims
for PlanKept or OverLit.

## Required reads

- `AGENTS.md`
- `CLAUDE.md`
- `skills/legal-update-sync/CHECKLIST.md`

## Core rule

Do not finish a task that likely changed legal disclosures while leaving the
legal docs, app-side legal gates, App Store-facing claims, or version records
stale. Follow the checklist and keep `site.config.mjs` versions in sync with
the public legal pages.

## PlanKept Canonical Files

- Privacy copy: `src/content/legal/plankept-privacy-policy.md`
- Privacy wrapper/version shell: `src/components/legal/PlanKeptPrivacyPolicyContent.astro`
- Terms copy: `src/content/legal/plankept-terms-of-service.md`
- Terms wrapper/version shell: `src/components/legal/PlanKeptTermsOfServiceContent.astro`
- App repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- App sync skill: `/Users/alekj/Documents/GitHub/plan enforcer/.agents/skills/legal-update-sync/SKILL.md`
- App legal/model skill: `/Users/alekj/Documents/GitHub/plan enforcer/.agents/skills/legal-model-disclosures/SKILL.md`

PlanKept uses the hosted legal manifest for Terms and Privacy versions, so
website version bumps usually do not require hardcoded app-version changes.
Still check app legal settings, onboarding/legal gate, purchase copy, model
license surfaces, and App Store-facing disclosures for consistency.

## OverLit Canonical Files

- Privacy copy: `src/content/legal/overlit-privacy-policy.md`
- Privacy wrapper/version shell: `src/components/legal/OverLitPrivacyPolicyContent.astro`
- Terms copy: `src/content/legal/overlit-terms-of-use.md`
- Terms wrapper/version shell: `src/components/legal/OverLitTermsOfUseContent.astro`
- App repo: `/Users/alekj/Documents/GitHub/OverLit-app`
- App sync skill: `/Users/alekj/Documents/GitHub/OverLit-app/.agents/skills/legal-update-sync/SKILL.md`
- App legal catalog: `/Users/alekj/Documents/GitHub/OverLit-app/Sources/OverLitPlayableUI/Storage/PlayableAppGateState.swift`
- App Store privacy manifest: `/Users/alekj/Documents/GitHub/OverLit-app/App/OverLit/PrivacyInfo.xcprivacy`
- App ads file: `public/app-ads.txt`

When OverLit privacy or Terms of Use versions change, update the matching app
legal catalog version so returning users are prompted to accept the current
public documents.

## Shared Website Files

- Legal versions and manifest values: `site.config.mjs`
- Manifest route: `src/pages/legal-manifest.json.ts`

## Model terms note

If a task changes PlanKept model/provider availability, do not hardcode the
current model catalog into the privacy policy. The website legal copy should
say selected models may have their own listed terms or licenses; exact current
license inventory belongs in the app model catalog, app Legal settings, and
model install/selection surfaces.
