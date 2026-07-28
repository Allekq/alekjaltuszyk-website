# Audio Book Choices Legal Operations Record

Internal launch and change-control record. This is not a public policy and does not replace legal advice.

## Current legal-document source of truth

- Public privacy policy: `audio-book-choices-privacy-policy.md`
- Public terms: `audio-book-choices-terms-of-use.md`
- Public version, effective date and canonical route: `site.config.mjs` → `legalDocuments.audioBookChoicesPrivacy` and `legalDocuments.audioBookChoicesTerms`
- Machine-readable public record: `/apps/AudioBookChoices/legal-manifest.json`

The Astro legal components display the version and effective date from `site.config.mjs`; do not duplicate those values in Markdown. Every material policy change must receive a new version and effective date in `site.config.mjs` before deployment.

## Change checklist

Before adding, removing or materially changing an SDK, server endpoint, permission, purchase flow, age flow, website form, data export or deletion behaviour:

1. Map exactly what is collected, where it goes, why it is used, who receives it and how it is deleted.
2. Update the public Privacy Policy and, where access, price, availability or consumer rights change, the Terms of Use.
3. Update `site.config.mjs` versions/effective dates and confirm the generated legal manifest changes with them.
4. Reconcile Apple's App Privacy answers, `iosApp/PrivacyInfo.xcprivacy`, Google Play Data Safety answers and the policy. Third-party SDK data counts.
5. Confirm the in-app deletion/export/right-request route still matches the deployed backend.
6. Re-check provider contracts, regional availability and cross-border-transfer safeguards before enabling a new country or provider.
7. Preserve a dated release note describing the change and, for material changes, present the new documents in the app before continued use.

## Consumer rights and subscriptions

- Do not use Terms or UI copy to remove mandatory consumer rights, including rights that may apply to digital content, conformity and refunds.
- Make plan name, billing period, local price, automatic renewal, cancellation route and any trial terms clear before the store confirmation screen.
- Store checkout controls cancellation and refunds. The app must still give accurate support information and must not falsely tell a consumer that statutory rights disappear.
- A paid book remains subject to the availability and conformity commitments in the Terms. If the service or a title must be withdrawn, record the reason and consider the consumer remedy required in the affected market.

## Children and content

- The product is 13+. The age picker must not offer an age below 13, and the default for a skipped selection remains 13.
- Book minimum ages are authorial content advisories, not official classifications or a substitute for a parent or guardian's controls.
- Keep the app privacy-preserving by default: no advertising, tracking, profiling or unnecessary child data. Reassess age assurance and child-specific notices before adding social, messaging, targeted content, advertising or other higher-risk features.

## Rights and contributor records

All current books are created by the developer. Before releasing work by anyone else, retain a signed record granting the rights actually needed for worldwide app distribution: story text, adaptation/branching, narration or voice, artwork, marketing excerpts, edits/corrections, takedowns and any AI-assisted narration. Record the contributor, work, rights granted, territory, term and payment/credit arrangement. Do not publish a contributor's work until this record is complete.

## Retention review

Review retention at least once per year and whenever a provider changes. Confirm the live Google Cloud Logging bucket retention, whether any logs are exported, Cloudflare logging/Logpush settings, RevenueCat data-retention/deletion controls, and that deletion responses still honestly describe what remains and why.
