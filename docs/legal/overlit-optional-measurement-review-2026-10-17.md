# OverLit optional measurement: website legal review

Review date: 2026-10-17. Scope: finish existing local website drafts for optional
Firebase gameplay analytics, Tenjin advertising measurement and the onboarding
comparison. Local source preparation only; no deployment, push, store submission
or provider-console changes. This review is not a compliance certification.

## Review receipt

The pre-implementation receipt in the app's
`Docs/reviews/2026-10-17-optional-measurement-consent.md` was read before these
website corrections, together with this repository's legal-sync skill,
CHANGE-REVIEW and CHECKLIST. The following is the closing website review.

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Earlier remediation builds disable optional measurement; privacy-3.9.0 builds introduce independent Firebase and Tenjin choices. Firebase receives permitted ledger events, installation/app-instance and SDK metadata, plus Remote Config/A/B membership and the durable-start experiment event. Tenjin receives conversion milestone names and attribution/device metadata, not repeatable events or the experiment event. UMP preparation can contact Google after age selection, before legal acceptance; form presentation still waits. Existing leaderboard Auth/Functions/Firestore/App Check and AdMob remain distinct. No website tracker or form was added. |
| Lawful processing | Privacy §9 identifies separate Art. 6(1)(a) choices and applicable device-storage/access consent for optional measurement. Necessary privacy-choice administration has its own stated basis, rather than implying pre-acceptance UMP preparation already has optional consent. Legal acceptance, age eligibility, UMP ad eligibility and ATT are not substitute grants. No sensitive category is intentionally added. Device identifiers are pseudonymous personal data, not anonymous counts. Provider roles, agreements, transfers and actual integrations still need owner verification; SDK flags do not prove dashboard settings. |
| Choice and age | Both optional purposes default denied; Allow both, No thanks and Choose separately precede a choice. Settings Legal provides independent withdrawal. `optionalMeasurementAuthorizedV1` combines the stored purpose choice with legal/age/region eligibility; `LegalRegionPolicyV1.UNKNOWN` restricts measurement. Teens, Korea, unknown/unrecognized region and unresolved region transitions cannot grant optional collection. Existing choices can be withdrawn under restriction. iOS Tenjin additionally requires actual ATT authorization. The policy now explains the ATT preparation sequence, including successful no-form-required UMP results. |
| Lifecycle | No pre-consent gameplay backfill; unauthorized pending app delivery is discarded. Android `AndroidAnalyticsConsentSessionV1` and iOS `FirebaseOverLitAnalyticsService` disable/reset local Analytics on withdrawal; Tenjin native adapters opt out and disable event caching. This does not erase provider records or recall already transmitted requests. Privacy §15 and deletion guidance distinguish leaderboard erasure, Analytics deletion and Remote Config installation deletion; support remains available after uninstall. Corrected Firebase's published deletion period to removal within 180 days of an installation deletion request, not merely beginning removal within that period. Actual Analytics/Tenjin retention and identification coverage remain unverified. |
| Security | This task changes public Markdown and adds this receipt, with no new permissions, backend, authentication or data fields. App source preserves the canonical authorization boundary; no leaderboard UID or support text is added to measurement. Existing erasure-suppression retention and deployment caveats were preserved. No production payload, secret or personal request record was used as evidence. |
| Public promises | Reviewed privacy release differences and §§2–4, 6–7, 9–15, 17–20; deletion page; terms §§2–4, privacy and third-party-service provisions; support configuration and OverLit product closing copy. Corrected ATT recipient/scope, restricted eligibility, Tenjin event scope, provider roles/settings caveats, Remote Config transfers/retention, withdrawal/erasure and US measurement choices. Added an uninstall-safe provider-data request explanation to deletion guidance. Terms already distinguish document acceptance from consent and defer the processing inventory to privacy; no new player obligation, entitlement or contractual remedy is introduced, so no terms version bump. The final review clarified the leaderboard-off promise in both privacy and terms: it stops leaderboard submissions, while the independent optional measurement choices still apply. Support already uses the same email, links the deletion page and discourages unnecessary sensitive data; no separate support change needed. |
| Release | Reviewed website base `767ae7c` with its existing uncommitted legal drafts, and app source at `1ab95d8a`; app files were read only. Website privacy remains 3.9.0 dated 2026-10-17; terms remain 3.3.0 dated 2026-10-14. Shared `LegalAgePolicyV1.launchV1` already carries those versions. OverLit pins accepted versions in the binary: a hosted edit alone does not change an older installed gate. The corresponding build evaluates the newer privacy gate online/offline; accepting it grants neither optional purpose. No claim that these sources are published or currently active. |
| Result | Local disclosures aligned for this feature, subject to the checks below. Release remains blocked on policy publication, exact release/store/provider verification and unresolved production retention/integration evidence. No app code correction was identified by this website review. |

## Cross-surface evidence

Read current symbols rather than treating the old inventory as implementation:

- Shared `ApplicationOptionalMeasurementConsentV1.kt`, including independent
  copy/authorization, fresh-install fetch projection and the bounded experiment
  constants; `LegalRegionPolicyV1.kt`; privacy/terms version assertions.
- iOS `OverLitAnalyticsReporting.swift`, including local reset and Remote Config
  fetch; Android `AndroidFirebaseAnalyticsPort.kt`,
  `AndroidOnboardingExperimentService.kt` and `AndroidAttributionPort.kt`.
- App `Docs/contracts/onboarding-and-consent.md` and optional-consent review,
  including the bounded authorized iOS SDK probe and its limitations. Its evidence
  verifies local SDK posture, not production server receipt or all SDK traffic.
- App worksheets `Docs/store-data-safety-answers.md`,
  `Docs/store/app-store-connect-privacy-answers.md`, `Docs/store/OWNER-TODO.md`,
  `Docs/store/attribution-restoration-guide.md`, and regional posture. They identify
  optional measurement, experiment metadata, legacy processing and outstanding
  account/artifact checks. No submitted store form was inspected here.

Owner-created changes already present in privacy, terms, deletion and
`site.config.mjs` were preserved. No generated manifest was edited by hand.

## Primary references rechecked

- [EDPB lawful processing and consent](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en):
  distinct purposes, affirmative choices and easy withdrawal.
- [Apple privacy and tracking](https://developer.apple.com/app-store/user-privacy-and-data-use/):
  ATT is required for covered tracking, including non-IDFA linking; separate local
  choices cannot override refusal.
- [Google UMP on iOS](https://developers.google.com/admob/ios/privacy):
  refresh current consent information and distinguish successful no-form-required
  handling from an error or an optional-purpose grant.
- [Firebase collection controls](https://firebase.google.com/docs/analytics/ios/configure-data-collection):
  SDK collection controls and persisted settings need canonical startup handling.
- [Firebase Remote Config experiments](https://firebase.google.com/docs/ab-testing/abtest-config):
  experiment membership and activation are distinct. The durable-start event must
  occur after configuration activation and cannot also be the experiment's goal metric.
- [Firebase privacy](https://firebase.google.com/support/privacy) and
  [installation deletion](https://firebase.google.com/docs/projects/manage-installations#delete_a_firebase_installation):
  Remote Config uses installation IDs; installation deletion and Analytics erasure
  are separate. Published provider descriptions do not verify this account's settings.

## Remaining owner release actions

1. Review and publish the prepared privacy 3.9.0, manifest and deletion guidance
   before releasing the matching binary or activating the experiment. Verify the
   hosted URLs/version/date after deployment. Terms stay at 3.3.0. Publication remains outside this task's authorization;
   the owner subsequently authorized a final review and scoped local commit.
2. Reconcile actual App Store Connect App Privacy and Google Play Data safety
   declarations with the release artifact and all still-distributed older builds:
   identifiers, app/product interactions, advertising data, coarse location,
   purchases and remaining SDK diagnostics; assess linking and tracking by recipient.
   Inspect merged SDK privacy manifests and Android permissions. Keep the privacy,
   deletion and support listing URLs current. Source worksheets are preparation only.
3. Verify Firebase/Google and Tenjin contracts, processor/controller roles,
   subprocessors/transfers, retention, deletion handling and sharing/export/integration
   settings. Preserve denied Analytics advertising purposes and Tenjin Google DMA
   signals; do not enable audiences/exports based on gameplay consent alone.
   Resolve the existing suppression-record necessity/retention review before relying
   on that prepared backend's erasure promises.
4. In the existing Firebase project, prepare separate iOS/Android experiments:
   `onboarding_start_v1`, `classic` / `level_one`, equal allocation, consent-capable
   release targeting, unavailable default outside targeting, and activation event
   `overlit_onboarding_experiment_started`. Use retention/subsequent play as goals;
   do not reuse the activation event as a goal. Confirm actual eligibility, assignment
   and event receipt before starting the experiment. No console configuration was
   inspected or changed here.
5. Complete authorized release-artifact/provider traffic checks for unknown/refused
   choices, each independent opt-in, withdrawal/relaunch/upgrade, restrictive
   age/region changes, ATT refusal/revocation and Full Version, on both platforms.
   Include queued/background SDK delivery and in-flight requests. Prior source tests
   and the bounded iOS probe do not establish full production traffic behavior.

## Website verification

`npm run check` passed: 253 files, zero errors/warnings/hints. `npm run build`
passed, including both private-publication boundary checks; Vite emitted an
unused-import warning inside Astro's dependency. `npm run check:legal` and the
app's read-only `Tools/legal_version_parity.py` passed against both local
checkouts. `git diff --check` passed. No layout structure or CSS changed; this
task does not require a new simulator run or device test. These checks establish
local generation/version consistency, not substantive compliance or publication.

## Final review and commit authorization

On 2026-10-17 the owner requested another review, remaining fixes and a local
commit. A focused independent review identified an overbroad leaderboard-off
promise. Privacy and terms now scope it to leaderboard submissions rather than
all gameplay data. Deletion guidance also distinguishes saved progress from
provider-held gameplay events. These are factual corrections to the same prepared
practice; privacy stays 3.9.0 and terms 3.3.0. The scoped commit includes the
existing related OverLit unlock/version drafts, with no app edits, push or
publication. Fresh website check/build/legal and version-parity checks are run
before committing.

The final review also made the retention of prepared under-age/deletion
safeguards explicit through privacy version 3.9.0; it does not claim that the
matching backend is deployed. Both substantive review findings were corrected.
