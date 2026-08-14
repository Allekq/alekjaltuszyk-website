# AudioChoices Legal Operations Record

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

- The product is 13+. The age **picker** must not offer an age below 13, and the default when the app has no age remains 13.
- **Platform age ranges (added 2026-08-14, privacy 2.6.0 / terms 2.3.0 / in-app legal version 9).** The app asks Apple's Declared Age Range (iOS 26+) and Google Play's Age Signals for the listener's age range and keeps its lower bound. Standing rules: the range never leaves the device; it may be used only to provide age-appropriate content, never for advertising, marketing, profiling or analytics (a term of both stores, with app takedown named as the consequence); the app never geolocates to decide whether an age-assurance law applies and relies solely on the platform saying so; and a range **below 13** is taken at face value rather than raised to the app's own minimum — the picker's floor is not the signal's floor. Where the platform says an age-assurance law applies, the app acts on nothing above **the range that platform attested**, and on nothing above 13 where it attested none; that region answer is stored on the device as a single yes-or-no bit, and it is the only durable fact of its kind the app keeps. **The cap is the attested band, not a flat 13.** The flat version was drafted, caught before publication and corrected: paired with the app remembering a typed age as the listener's own forever, it capped platform-attested adults at 13 permanently while both documents named a remedy that could not work. **That cap operates only where the platform actually says so, and it does not say so everywhere:** iOS 26.0 and 26.1 supply the range without the signal, and on Android Play's only regulated-region signal is `VERIFICATION_REQUIRED`, which it stops sending once the listener satisfies the store and never sends at all to one who satisfied it beforehand. Both published documents now set these out device by device rather than claiming blanket coverage; closing the iOS half (raising the whole feature's iOS floor to 26.2) would make them narrower than the behaviour and so needs a document pass of its own. **That region bit deliberately survives "clear data on this device", and is the only thing that does.** Clearing it made a privacy control into a two-step way out of the cap — clear, then type any age into the row above the one you just tapped — so the wipe now keeps it and drops the band instead, which means a wipe can only ever narrow what is offered. Only a platform positively saying the law does not apply removes it, and the in-app confirmation dialog discloses the retention before anybody clears. **The stored range has no expiry and nothing re-asks the platform on its own**, so the cap follows the most recent range the app was actually given, which can be an old one; both documents now say so rather than describing the limit in the present tense. Any change to these needs the policy, the terms, the age-suitability and data-deletion pages, and `docs/STORE_PRIVACY_ANSWERS.md` in the same pass.
- Book minimum ages are authorial content advisories, not official classifications or a substitute for a parent or guardian's controls. **A platform-attested age does not raise what a book may contain** — the store rating covers the whole catalogue regardless of who can reach a title.
- Keep the app privacy-preserving by default: no advertising, tracking, profiling or unnecessary child data. Reassess age assurance and child-specific notices before adding social, messaging, targeted content, advertising or other higher-risk features. Nothing in the app may become available *because* an age range was attested; the children's-code protections are applied to every listener rather than to a detected subset.

## Rights and contributor records

All current books are created by the developer. Before releasing work by anyone else, retain a signed record granting the rights actually needed for worldwide app distribution: story text, adaptation/branching, narration or voice, artwork, marketing excerpts, edits/corrections, takedowns and any AI-assisted narration. Record the contributor, work, rights granted, territory, term and payment/credit arrangement. Do not publish a contributor's work until this record is complete.

## Retention review

Review retention at least once per year and whenever a provider changes. Confirm the live Google Cloud Logging bucket retention, whether any logs are exported, Cloudflare logging/Logpush settings, RevenueCat data-retention/deletion controls, and that deletion responses still honestly describe what remains and why.
