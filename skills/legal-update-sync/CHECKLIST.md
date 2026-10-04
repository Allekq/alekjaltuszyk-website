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
- `src/content/legal/voice-of-self-privacy-policy.md`
- `src/content/legal/voice-of-self-terms-of-service.md`
- `src/components/legal/VoiceOfSelfPrivacyPolicyContent.astro`
- `src/components/legal/VoiceOfSelfTermsOfServiceContent.astro`
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
- `src/content/legal/audio-book-choices-privacy-policy.md`
- `src/content/legal/audio-book-choices-terms-of-use.md`
- `src/components/legal/AudioBookChoicesPrivacyPolicyContent.astro`
- `src/components/legal/AudioBookChoicesTermsContent.astro`
- `src/pages/apps/AudioBookChoices/privacy-policy/index.astro`
- `src/pages/apps/AudioBookChoices/terms-of-use/index.astro`
- `src/pages/apps/AudioBookChoices/legal-manifest.json.ts`
- support/contact routes
- wish-list routes
- product claims about privacy, retention, reminders, accounts, purchases, lifetime
  unlocks, ads, model terms, AI, backups, or legal acceptance

## Required steps

1. Confirm whether the visible public behavior changed.
2. If yes, check whether privacy policy or terms need updated wording.
3. Classify the change using `SKILL.md`: update only affected versions/dates
   in `site.config.mjs` for substantive changes; factual clarifications do not
   bump acceptance. Record the receipt from `CHANGE-REVIEW.md` and gate effects.
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
9. If Audio Book Choices legal versions changed, bump `AppConfig.LEGAL_VERSION`
   in `/Users/alekj/Documents/GitHub/AudioBookChoices` so the in-app acceptance
   gate re-prompts, and check the paywall/buy-sheet/licences copy. It has a
   backend, purchases, and third-party processors —
   never describe it as local-only.
10. Rebuild the site so generated legal/discovery output is refreshed.
11. Run `npm run check:legal` after the build. It checks paths and manifest
    values, not substantive accuracy, lawful processing or installed behavior.

## Reminder rule

If affected disclosures remain unresolved, identify the exact release blocker
and cause. Continue authorized local work; do not report release readiness or
repeatedly ask permission for an already authorized review.
