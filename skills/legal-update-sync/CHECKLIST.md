# Legal Update Checklist

Use this checklist before finishing any task that touches:

- `src/pages/privacy-policy/index.md`
- `src/pages/terms-of-service/index.md`
- `src/content/legal/plankept-privacy-policy.md`
- `src/content/legal/overlit-privacy-policy.md`
- `src/components/legal/PlanKeptPrivacyPolicyContent.astro`
- `src/components/legal/PlanKeptTermsOfServiceContent.astro`
- `src/components/legal/OverLitPrivacyPolicyContent.astro`
- `src/components/legal/OverLitTermsOfUseContent.astro`
- support/contact routes
- wish-list routes
- product claims about privacy, retention, reminders, accounts, purchases, lifetime
  unlocks, ads, model terms, AI, backups, or legal acceptance

## Required steps

1. Confirm whether the visible public behavior changed.
2. If yes, check whether privacy policy or terms need updated wording.
3. If a legal document changed, bump only the affected document version and
   effective date in `site.config.mjs`.
4. Make sure `src/pages/legal-manifest.json.ts` still reflects the latest
   values through `src/config/site.ts`.
5. If OverLit legal versions changed, update the app-side legal catalog in
   `/Users/alekj/Documents/GitHub/OverLit-app`.
6. If PlanKept legal wording changed, check the app-side Legal, purchase, and
   model-license surfaces in `/Users/alekj/Documents/GitHub/plan enforcer` for
   consistency.
7. Rebuild the site so generated legal/discovery output is refreshed.

## Reminder rule

If a task changes legal-facing behavior but the legal docs are intentionally not
being updated in the same pass, pause and flag that explicitly before closing
the task.
