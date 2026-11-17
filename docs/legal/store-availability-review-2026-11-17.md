# Store availability review — 2026-11-17

Scope: website release copy and existing-convention Get routing. Owner will handle publication; this store-routing change involves no app release, submission, agreement or app policy-body change. Working tree was clean at start (`bd5f4bb`).

## Before implementation

| Item | Evidence and decision |
| --- | --- |
| Data flow | Reuse the static `/get/` chooser and existing device detection/store redirect. No accounts, backend, SDKs, logging or storage added. Existing campaign-parameter allowlist unchanged. |
| Choice and age | Android visitors to verified Apple-only apps stay on the chooser, see “This app is not available on Android.” and can explicitly view the App Store. No Play link or future-Android promise. No age or consent change. |
| Lifecycle and security | No local data or retention change. All store URLs authored from verified public listings, never supplied by URL parameters. No new analytics. |
| Public promises | Logic Gates changes from unreleased to released based on owner confirmation and live Apple listing. Other release states preserved. Consumer/store terms and canonical policies remain untouched. |
| Release | Verify desktop, iPhone/iPad, Android, crawler, no-JS and explicit chooser behavior before commit/publication. The owner controls publication. |
| Result | No app policy version change from store availability. The website privacy notice separately documents store campaign forwarding below. |

## Platform and destination evidence

- **Logic Gates:** owner explicitly confirms publication and Android unavailability. Apple `https://apps.apple.com/app/id6833691656` returned 200 via its canonical US listing, named Logic Gates: Circuit Creation, developer Aleksander Jałtuszyk. Use this region-neutral destination. This review does not claim that Apple's descriptive metadata was refreshed.
- **PlanKept:** existing authored catalog records released iOS; actual `plan enforcer/project.yml` defines iOS app/extensions. Apple ID 6762317618 returned 200 with matching product/developer. Public search found its Apple listing, not an Android release. Retain the verified App Store destination and mark Android unavailable based on the catalog and project/platform evidence together.
- **Take Me Somewhere:** authored released iOS catalog; README identifies the iPhone product, and `project.yml` defines iOS app/tests. Apple ID 6776450751 returned 200 with matching developer. Retain its App Store destination. Android-unavailable conclusion is based on those combined facts, not a missing URL alone.
- **Voice of Self:** authored catalog records released iOS. Actual KMP Android implementation exists, but `closure-app/docs/kmp-plan/STATUS.md` and owner checklist explicitly defer Google Play setup/production release. Google Play `com.voiceofselfas` returned 404. Apple US URL returned 404; the existing documented Polish listing `https://apps.apple.com/pl/app/voice-of-self/id6760653378` returned 200. Use that verified storefront without promising availability in every country.
- **OverLit / AudioChoices:** authored catalog records iOS and Android. Real Google Play listings for `com.overlit` and `com.audiobookchoices` both returned 200. Preserve both stores and existing Get routes.
- **Code Workroom IDE:** authored unreleased state retained. Recent source README describes a development app not cleared for release. Do not add a fake store destination or present an unreleased app as downloadable.

The affected website surfaces are English; this does not change app language support. Storefront localization is handled by the real store destinations.

## Final routing and privacy review

The built pages passed 32 browser cases across the four new destinations. iPhone and desktop-mode iPad followed the Apple link. Android, desktop, crawlers, disabled JavaScript and explicit chooser links retained a working manual choice. Synthetic Apple campaign parameters passed through the automatic redirect and unrelated parameters were dropped. Each public Apple destination returned HTTP 200 on 17 November.

Website Privacy §3 now describes local device selection, the store recipients, the campaign parameters and how to choose manually. These routes extend the existing store router to more apps. The updated website notice is version 1.3.0, dated 17 November 2026, and has no app acceptance gate. This change adds no browser storage, analytics service or website-side campaign database. Ordinary hosting request logs remain within the existing retention disclosure.
