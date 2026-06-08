# Legal Update Checklist

Use this checklist before finishing any task that touches:

- `src/pages/privacy-policy/index.astro`
- `src/pages/terms/index.astro`
- `src/content/legal/site-privacy-policy.md`
- `src/content/legal/site-terms.md`
- `src/content/legal/plankept-privacy-policy.md`
- `src/content/legal/plankept-terms-of-service.md`
- `src/pages/apps/PlanKept/privacy-policy/index.astro`
- `src/pages/apps/PlanKept/terms-of-service/index.astro`
- `src/pages/apps/PlanKept/legal-manifest.json.ts`
- `src/content/legal/overlit-privacy-policy.md`
- `src/content/legal/overlit-terms-of-use.md`
- `src/pages/apps/OverLit/legal-manifest.json.ts`
- `src/pages/apps/VoiceOfSelf/privacy-policy/index.md`
- `src/pages/apps/VoiceOfSelf/terms-of-service/index.md`
- `src/voice-of-self/pages/privacy-policy.md`
- `src/voice-of-self/pages/terms-of-service.md`
- `src/content/legal/take-me-somewhere-privacy-policy.md`
- `src/content/legal/take-me-somewhere-terms-of-service.md`
- `src/components/legal/TakeMeSomewherePrivacyPolicyContent.astro`
- `src/components/legal/TakeMeSomewhereTermsContent.astro`
- `src/pages/apps/TakeMeSomewhere/terms-of-service/index.astro`
- `src/pages/apps/TakeMeSomewhere/legal-manifest.json.ts`
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
4. Make sure app-specific manifest routes and the temporary compatibility route
   `src/pages/legal-manifest.json.ts` still reflect the latest values through
   `src/config/site.ts`.
5. If Voice of Self legal versions changed, update the app-bundled legal
   manifest and document copies in `/Users/alekj/Documents/GitHub/closure-app`.
6. If OverLit legal versions changed, update the app-side legal catalog in
   `/Users/alekj/Documents/GitHub/OverLit-app`.
7. If Take Me Somewhere legal versions changed, update the app-side legal
   catalog in `/Users/alekj/Documents/GitHub/TakeMeSomewhere`; if location,
   map providers, local persistence, or App Store privacy labels changed, also
   check the app privacy manifest.
8. If PlanKept legal wording changed, check the app-side Legal, purchase, and
   model-license surfaces in `/Users/alekj/Documents/GitHub/plan enforcer` for
   consistency.
9. Rebuild the site so generated legal/discovery output is refreshed.

## Reminder rule

If a task changes legal-facing behavior but the legal docs are intentionally not
being updated in the same pass, pause and flag that explicitly before closing
the task.
