# OverLit recheck and implemented source fixes

Date: 2026-10-03. App repository: `/Users/alekj/Documents/GitHub/OverLit-app`.
Website/legal coordination belongs to parent agent in `/Users/alekj/Documents/GitHub/alekjaltuszyk-website`.
No deployment, store submission, dashboard mutation, live-data deletion or external message was performed.
Source changes are not represented as changes to installed builds. Unrelated concurrent edits were preserved.

## Outcome

Confirmed the principal consent, lifecycle and rights-access defects against current source and current primary documentation. Implemented a deliberate **next-build hold** on optional Analytics/Tenjin instead of inventing purpose/vendor consent from UMP eligibility. Removed the Crashlytics product dependency on both platforms because a late runtime denial does not safely close persisted-grant startup. Ads, leaderboards and purchases remain present under their separate policies.

The new build cannot be called fully compliant or ready to publish from these checks. Backend erasure concurrency, uninstall-safe rights verification, production configuration and actual release/device evidence remain unresolved. Detailed initial source evidence is in `/private/tmp/overlit-deep-legal-audit.md`; this report supersedes that audit's remediation status.

## Confirmed findings and corrections

### P1 — UMP eligibility was granting optional measurement

Confirmed: legal/adult plus `canRequestAds`/audience-gathered was the native Firebase/Tenjin start rule. Google's ad eligibility is not independently verified analytics purpose or Tenjin vendor permission. Refusal can leave eligibility true.

Implemented:

- Shared `ApplicationLegalRegionV1.optionalMeasurementEnabledInThisBuildV1=false` at `shared/application/src/commonMain/kotlin/com/overlit/shared/application/facade/ApplicationLegalRegionV1.kt:56`; both iOS and Android optional measurement predicates include this hold.
- `App/OverLit/Info.plist:25` deactivates Firebase Analytics for this build; Android equivalent is `androidApp/src/main/AndroidManifest.xml:118`. This is stronger than a default false, because prior runtime collection grants persist.
- Android applies its first denied consent posture rather than incorrectly deduplicating it against an initial false local flag; it retries application if the client was absent or the call failed.
- No optional consent collector or user-facing enabled measurement switch was invented. The local measurement ledger remains local and transports remain unavailable. Re-enabling requires a separately reviewed consent model, lifecycle, queue treatment and synchronized build settings.

Google documents that the permanent-per-build Analytics deactivation key overrides runtime and plist collection values. [Firebase iOS collection controls](https://firebase.google.com/docs/analytics/ios/configure-data-collection), [Android controls](https://firebase.google.com/docs/analytics/android/configure-data-collection).

### P1 — Attribution DMA, ATT and secondary postback path

Confirmed Android forced `setGoogleDMAParameters(true,true)`. iOS did not: its `optInGoogleDMA()` was a distinct instruction and the two boolean parameters were unused. **Do not conflate those prior implementations.** Actual Tenjin dashboard matching/tracking was not inspected.

Implemented:

- Android DMA remains false/false with Google DMA opt-out. No grant is synthesized from ad eligibility (`AndroidAttributionPort.kt:102`).
- iOS additionally checks live ATT authorization on configure, event delivery, transport readiness and conversion-value calls (`OverLitAttributionReporting.swift:190-276`). The generic measurement hold already prevents startup in this build. Google DMA opt-out remains in force pending verified per-signal mapping.
- Conversion-value calls through Tenjin now require permission; they can contact the vendor and are not treated as Apple-only aggregate traffic.
- Removed `NSAdvertisingAttributionReportEndpoint` from the app plist so the next binary does not ask Apple to copy postbacks to Tenjin while the SDK is held. AdMob `SKAdNetworkItems` remain.
- Added the honest bare `track.tenjin.com` tracking-domain entry (`App/OverLit/PrivacyInfo.xcprivacy:22`) and removed the prior rationale for knowingly omitting it. Existing advertising tracking declarations were retained.

A withheld SDK is not evidence that historical events or in-flight postbacks were erased. A future reactivation still needs proof of actual identifiers, purpose/vendor choices, ATT, DMA mapping and dashboard destinations. [Tenjin SDK guidance](https://tenjin.com/docs/mmp-sdk-ios/), [Apple user privacy/tracking rules](https://developer.apple.com/app-store/user-privacy-and-data-use/).

### P1/P2 — Privacy withdrawal, failed forms and audience relaunch

Confirmed Android Settings dismissal did not refresh cached eligibility; both platforms could assume stale audience provenance after a killed age transition.

Implemented:

- Android suspends new ad requests, invalidates warmed ads and retires the ad surface before privacy options; dismissal returns fresh eligibility, refreshes privacy availability and invalidates old ads again (`MainActivity.kt:565-571`, `AndroidUmpConsentService.kt:323`). SDK form failure is preserved as a failure, not discarded.
- iOS invalidates loaded ads and audience proof before privacy options, restoring readiness only after successful presentation/current eligibility (`AdMobAdService.swift:734`). Failed form load/presentation no longer becomes success merely because old UMP eligibility is true.
- Both platforms start each process without a proven audience receipt. Only a successful still-current gathering establishes it; a failed first update/offline relaunch cannot reuse a previous audience's consent. Android stale callback cannot update provenance after losing the attempt latch.
- No production UMP reset is used. Product effect: a cold offline launch can fall back to local ads until current-audience gathering succeeds; it does not silently reuse possibly teen-tagged/adult-tagged stale eligibility.

Tests cover reject/eligible combinations, fresh-process failure, deadline, failed form, dismissal refresh, changed audience and late callbacks. Real regional CMP messages/vendor switches and network traces remain unverified. [Google UMP GDPR guidance](https://developers.google.com/admob/ios/privacy/gdpr).

### P1 — Crashlytics startup and automatic diagnostics

Confirmed persisted SDK true outranks default-off plist/manifest; Firebase documentation says false takes effect on a later run and cached reports are not automatically erased. SDK source also confirms Analytics breadcrumbs and Firebase Sessions; a crash is not a prerequisite for all telemetry.

Implemented supported build isolation: removed `FirebaseCrashlytics` product from `Package.swift` and `firebase-crashlytics` from Android Gradle dependencies. Android's production provider returns no diagnostic client. Shared status returns `BUILD_DISABLED` with truthful text (`ApplicationCrashReportingV1.kt:40`, `CrashReportingPolicyV1.kt:26`). Corrected false comments claiming disabling discards reports.

Verified **debug artifacts**: Android resolved runtime graph contains neither Crashlytics nor Firebase Sessions. iOS built app has no corresponding resources; its debug dylib has zero `FIRCrashlytics`/`FirebaseSessions` symbols. The package checkout/lock can still contain source for unused Firebase products; that is not linkage.

No claim that old local reports were erased or that a later reintroduction cannot upload them. A future diagnostics implementation needs supported pre-start permission and explicit unsent-report send/delete policy. Inspect the actual release archive separately. [Firebase Crashlytics API lifecycle](https://firebase.google.com/docs/reference/swift/firebasecrashlytics/api/reference/Classes/Crashlytics), [Crash reporting/breadcrumb documentation](https://firebase.google.com/docs/crashlytics/ios/customize-crash-reports).

### P2 — Rights controls confused progress with identity

Confirmed current Level 5/unlock state could disable deletion and ID export despite retained anonymous credentials after reinstall/reset.

Implemented deletion and ID-copy independently of leaderboard progression/publication/feature eligibility (`ApplicationSettingsPresentationV1.kt:1606` and its action projection). Native identity reads do not sign in. Deletion with no existing identity is already satisfied; an unavailable Firebase client is still unavailable. Neither iOS deletion (`OverLitLeaderboardService.swift:490`) nor Android deletion (`AndroidFirebaseLeaderboardPort.kt:390`) calls the sign-in helper; even a concurrent local sign-out does not intentionally mint a new UID for deletion. Existing client submission/deletion barriers are preserved.

Corrected the internal assertion that view-only leaderboard access creates no personal-data records; it uses Auth/private profile/rate records. No backend schema/data change was made.

**Not resolved:** backend sequential erasure still lacks a durable transactionally checked deletion barrier across all writers. A preauthorized concurrent/replayed write can recreate records; the client UI fix does not solve this. The uninstall-safe web route and identity verification also require further implementation/operational evidence. [Apple account deletion](https://developer.apple.com/support/offering-account-deletion-in-your-app/), [Google Play deletion guidance](https://support.google.com/googleplay/android-developer/answer/13327111).

## Disclosure and version coordination

Canonical app versions now privacy **3.6.0**, terms **3.2.0** at `LegalAgePolicyV1.kt:267-268`, per parent instruction. These source values force acceptance when that binary ships; no assertion that website or store release already changed. Final `Tools/legal_version_parity.py` check passed after parent synchronized website config to 3.6.0/3.2.0; it also confirmed Swift contains no duplicate version literal.

Rewrote `Docs/store/app-store-connect-privacy-answers.md` and `Docs/store-data-safety-answers.md` as current-build-versus-earlier-build evidence worksheets. Marked old `Docs/store/console-values-to-set.md` as historical/not submission-ready. The worksheets keep AdMob collection/tracking and diagnostics under review and do not infer current dashboard values. Removing optional SDK collection does not make all ad data nontracking or erase historical provider records. Corrected the consent contract's claim that a privacy message alone is analytics consent.

Parent owns public legal bodies, config and skill amendments. Needed public lifecycle: older builds may have Analytics/Tenjin device events, automatic Crashlytics breadcrumbs and Sessions, persisted startup/cached reports; remediated build holds optional measurement, removes the Crashlytics dependency and Tenjin postback-copy endpoint, while active AdMob and Firebase Auth/App Check/leaderboard flows remain. Existing local milestones/progress/exports are not erased.

## Validation

- `./gradlew :androidApp:testDebugUnitTest :shared:application:jvmTest :shared:policy:jvmTest verifySharedSources --console=plain`: **PASS**. XML totals: Android **1372**, shared application **1754**, shared policy **235** tests; zero failures/errors. Shared boundary gate passed.
- Final Android re-run after removing the deletion sign-in-helper race: **PASS**, `BUILD SUCCESSFUL` (`/private/tmp/overlit-privacy-android-final.log`).
- Actual iOS app built through the `OverLit` scheme on existing **iOS 18.6 / iPhone 16** simulator. No runtime/device created or downloaded.
- Initial full iOS command exposed an unsigned adapter test library. Rerun with `CODE_SIGN_IDENTITY=- CODE_SIGNING_ALLOWED=YES -parallel-testing-enabled NO` executed full Core/IOSSupport/PlayableUI successfully (including 1509 PlayableUI tests); adapter had one old assertion expecting adult Crashlytics enabled. That assertion was corrected. Full command was interrupted during repeated package-graph/finalization activity; it is **not claimed wholly green**.
- Final actual-app targeted `xcodebuild test` ran the age-band, regional measurement, crash, audience-state and support crash suites: **32 tests, zero failures, `TEST SUCCEEDED`**. Log: `/private/tmp/overlit-privacy-ios-regressions.log`. This includes the corrected failing adapter assertion.
- Built iOS plist confirms Analytics deactivated and Tenjin copy endpoint absent. Android merged debug manifest confirms Analytics deactivation. Dependency/symbol checks above passed. No release archive or real-device/network capture was produced.
- `git diff --check`: PASS. Legal parity PASS after parent website synchronization.

## Required review receipt / release disposition

- **Data flow:** before, UMP eligibility could enable optional SDK traffic and persistent crash collection; after, optional transports held, Analytics build-deactivated, Crashlytics unlinked, Tenjin postback-copy removed. Ads/Auth/App Check/backend/purchases remain. Local queues/caches/old SDK files were not erased.
- **Lawful processing:** no new basis or consent is inferred from disclosure, age, ATT or ad eligibility. The hold is an implementation safeguard, not a conclusion about every jurisdiction. Future optional collection needs specific purpose/recipient evidence.
- **Choice/age:** no new control falsely promises collection. Current audience must be freshly proven for ad fallback; withdrawal/form error paths now invalidate/read current state. Build hold covers eligible adults and Full Version too.
- **Lifecycle:** persisted Analytics grants overridden; no Crashlytics startup component in inspected build; cached reports/old events remain an explicit historical-data concern. Automatic postback route inventoried separately from SDK calls.
- **Security:** client erasure access/no-create fixed; server concurrent erasure remains open. Production TTL/backups/logs and release credentials/configuration were not inferred or printed.
- **Public promises:** parent coordinates legal copy. Store worksheets now require actual submitted-build and live-console evidence instead of asserting manifests/SDK defaults settle classifications.
- **Release:** local source remediation is reviewable; no publish/submit step authorized by this receipt. **Hold release readiness** pending backend erasure race/rights route and production/release privacy verification, Cross-repo version parity has passed. No permission loop was introduced for already-authorized local fixes.
- **Result:** principal app-side P1 consent/diagnostic risks reduced with conservative, tested build behavior. Remaining issues are explicitly bounded, not called compliance.

## App files changed in this remediation

- `App/OverLit/Info.plist`
- `App/OverLit/PrivacyInfo.xcprivacy`
- `App/OverLitKMPAdapter/NativeServices/OverLitKMPAnalyticsConsentDecision.swift`
- `App/OverLitKMPAdapter/NativeServices/OverLitKMPRegionalAudience.swift`
- `AppTests/OverLitKMPAdapterTests/NativeServices/OverLitKMPAgeBandDeclarationTests.swift`
- `AppTests/OverLitKMPAdapterTests/NativeServices/OverLitKMPCrashReportingTests.swift`
- `AppTests/OverLitKMPAdapterTests/NativeServices/OverLitKMPRegionalAudienceTests.swift`
- `Docs/contracts/onboarding-and-consent.md`
- `Docs/store-data-safety-answers.md`
- `Docs/store/app-store-connect-privacy-answers.md`
- `Docs/store/console-values-to-set.md`
- `Package.swift`
- `Sources/OverLitIOSSupport/Services/Ads/AdAudienceTransitionState.swift`
- `Sources/OverLitIOSSupport/Services/Ads/AdMobAdService.swift`
- `Sources/OverLitIOSSupport/Services/Attribution/OverLitAttributionReporting.swift`
- `Sources/OverLitIOSSupport/Services/Diagnostics/OverLitCrashReporting.swift`
- `Sources/OverLitIOSSupport/Services/Leaderboards/OverLitLeaderboardService.swift`
- `Tests/OverLitIOSSupportTests/AdAudienceTransitionStateTests.swift`
- `Tests/OverLitIOSSupportTests/OverLitCrashReportingTests.swift`
- `androidApp/build.gradle.kts`
- `androidApp/src/main/AndroidManifest.xml`
- `androidApp/src/main/java/com/overlit/android/MainActivity.kt`
- `androidApp/src/main/java/com/overlit/android/services/AndroidAttributionPort.kt`
- `androidApp/src/main/java/com/overlit/android/services/AndroidFirebaseAnalyticsPort.kt`
- `androidApp/src/main/java/com/overlit/android/services/AndroidFirebaseCrashlyticsPort.kt`
- `androidApp/src/main/java/com/overlit/android/services/AndroidFirebaseLeaderboardPort.kt`
- `androidApp/src/main/java/com/overlit/android/services/AndroidUmpConsentService.kt`
- `androidApp/src/test/java/com/overlit/android/AndroidManifestCollectionDefaultsTest.kt`
- `androidApp/src/test/java/com/overlit/android/presentation/settings/SettingsSectionModelsTest.kt`
- `androidApp/src/test/java/com/overlit/android/services/AndroidFirebaseCrashlyticsPortTest.kt`
- `androidApp/src/test/java/com/overlit/android/services/AndroidMeasurementConsentDecisionTest.kt`
- `androidApp/src/test/java/com/overlit/android/services/AndroidUmpConsentServiceTest.kt`
- `shared/application/src/commonMain/kotlin/com/overlit/shared/application/facade/ApplicationCrashReportingV1.kt`
- `shared/application/src/commonMain/kotlin/com/overlit/shared/application/facade/ApplicationLeaderboardEligibilityV1.kt`
- `shared/application/src/commonMain/kotlin/com/overlit/shared/application/facade/ApplicationLegalRegionV1.kt`
- `shared/application/src/commonMain/kotlin/com/overlit/shared/application/facade/ApplicationSettingsPresentationV1.kt`
- `shared/application/src/commonTest/kotlin/com/overlit/shared/application/facade/ApplicationCrashReportingV1Test.kt`
- `shared/application/src/commonTest/kotlin/com/overlit/shared/application/facade/ApplicationLeaderboardIdentityDeletionV1Test.kt`
- `shared/application/src/commonTest/kotlin/com/overlit/shared/application/facade/ApplicationSettingsCapabilitiesV1Test.kt`
- `shared/policy/src/commonMain/kotlin/com/overlit/shared/policy/crash/CrashReportingPolicyV1.kt`
- `shared/policy/src/commonMain/kotlin/com/overlit/shared/policy/legal/LegalAgePolicyV1.kt`
- `shared/policy/src/commonTest/kotlin/com/overlit/shared/policy/LegalVersionSyncV1Test.kt`

## Read-only public-copy follow-up (parent editing concurrently)

Sent parent source-backed corrections for residual older-build UMP-as-consent assertions,
Crashlytics-only-on-crash/no-breadcrumb claims, Analytics persisted startup, Tenjin IDFV and
Apple-postback copy, reward-to-house-ad fallback, Full Version cosmetic scope, rights-control
progress independence, Auth US location and overbroad no-account/no-server-request statements.
This was a review of an in-progress website snapshot; parent owns final edits and validation.
No website body/config was modified by this agent.

Final website read-only pass: canonical parity is green, and the core remediation/older-release
distinctions align with source. Parent received remaining precision edits about anonymous accounts
versus user-created profiles, attestation's limits, local milestone ledger versus SDK buffering,
age-derived SDK signals and platform pricing availability. These were not represented as new
runtime defects, and this review did not certify provider settings or legal sufficiency.
