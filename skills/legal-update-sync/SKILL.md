---
name: legal-update-sync
description: Use when editing app privacy-policy or terms pages, or when a website or product change could affect legal-facing claims that must stay aligned with the relevant app repo.
---

# Legal Update Sync

Use this skill when changing legal text or any website/product behavior that
could affect privacy, retention, contact, wish-list, support, ads, purchases,
local storage, backup behavior, location/map providers, AI/model routing, or
other legal-facing claims for PlanKept, Voice of Self, OverLit, Take Me
Somewhere, or Audio Book Choices.

## Required reads

- `AGENTS.md`
- `CLAUDE.md`
- `skills/legal-update-sync/CHECKLIST.md`

## Core rule

Do not finish a task that likely changed legal disclosures while leaving the
legal docs, app-side legal gates, App Store-facing claims, or version records
stale. Follow the checklist and keep `site.config.mjs` versions in sync with
the public legal pages.

## The masthead — required on every published document

Every published legal document carries a masthead above its body: version,
last-updated date, and the scope paragraph. It is produced by
`src/components/legal/LegalDocumentHeader.astro`, which every `*Content.astro`
document component must use. Do not hand-roll a version block, and do not remove
the revision-history link.

The scope paragraph is what lets one document be true for everybody at once.
Apps ship features dark and switch them on later, so at any moment some readers
are on a build that does not have what the document describes. Rather than
partitioning documents by app version — which multiplies maintenance and works
against Google Play's expectation that a disclosure covers "all versions and
variations" of an app — one document covers everything and tells the reader that
feature sections apply only where the feature exists.

This repo is public, so each document's own file history **is** its archive.
Nothing needs snapshotting. That is why every entry in `legalDocuments` carries a
`sourcePath`: the masthead appends it to `legalSourceHistoryBase` to build the
link. A new document must add its `sourcePath`, and a moved document must update
it, or the archive link silently points at nothing.

Voice of Self's pages are plain Markdown under `src/pages/apps/VoiceOfSelf/` and
carry the same prose inline instead of using the component. Keep the two wordings
aligned, and mirror any change into the source copies in
`/Users/alekj/Documents/GitHub/closure-app/external/legal/`.

## Version bumps do NOT behave the same for every app

This is the single most important thing to get right in this repo. Bumping a
version in `site.config.mjs` has opposite consequences depending on the app:

| App | Where its accepted version comes from | Effect of bumping `site.config.mjs` and deploying |
|---|---|---|
| PlanKept | hosted `legal-manifest.json` | **Blocks every existing user** behind the acceptance gate on next launch |
| Take Me Somewhere | hosted `legal-manifest.json`, merged over a bundled fallback | **Blocks every existing user** behind the acceptance gate on next launch |
| Voice of Self | hosted `legal-manifest.json` | **Blocks every existing user** behind the acceptance gate on next launch |
| Audio Book Choices | compiled into the binary (`AppConfig.LEGAL_VERSION`) | Nothing, until a new build ships |
| OverLit | compiled into the binary (`PlayableLegalDocumentCatalog`) | Nothing, until a new build ships |
| Website itself (`site*`) | nothing consumes it | Nothing; bookkeeping only |

For the three live-gated apps, a version bump is a product decision as much as a
legal one, it takes effect the moment the site deploys, and it cannot be undone.
Only bump them for a substantive change — a new practice, recipient, or right —
and surface it to the owner rather than deciding it inside a task. It also means
their policies cannot be staged ahead of a release: publishing *is* activation.
Write new practices with the scope paragraph's "may not yet be available to you"
framing and bump when the feature is genuinely reachable.

For the two binary-pinned apps the public document can safely be published on the
day of store submission — the reviewer sees an accurate document while nobody on
the old build is disturbed. The wall for those lives in the app repo.

A clarification that adds no new obligation — wording, a masthead, a typo — must
not bump anything, for any app. It is recorded in the public revision history.

## The data-deletion pages are store surfaces, not documents

`/apps/OverLit/delete-data/` and `/apps/AudioBookChoices/delete-data/` exist because
**Google Play requires a deletion URL that works for someone who has already
uninstalled the app**, and publishes that link on the store listing. They are
deliberately unlike every other legal page here:

- **No version, no masthead, no `legalDocuments` entry, no `sourcePath`.** They
  restate rights the privacy policy already grants and create no new obligation,
  so they must never bump a version and must never gate an in-app acceptance
  prompt. Do not give them `LegalDocumentHeader`.
- **The privacy policy remains the binding text.** Each page says so and links
  back. If the two ever disagree, the policy wins and the page is what to fix.
- **Play's three requirements for the linked page**: name the app or developer as
  the store listing shows them, prominently feature the steps, and state what is
  deleted, what is kept, and any additional retention. Every edit must leave all
  three intact.
- Both must stay usable **without the app installed** — that is the entire point.
  Watch the email route especially: if it asks for an identifier the app only
  shows in Settings, that route is useless to exactly the person the URL exists
  for. OverLit asks for the public leaderboard nickname, which survives an
  uninstall; Audio Book Choices has no equivalent and says so plainly.

Canonical files:

- `src/content/legal/overlit-data-deletion.md` and
  `src/content/legal/audio-book-choices-data-deletion.md`
- `src/components/legal/OverLitDataDeletionContent.astro` and
  `src/components/legal/AudioBookChoicesDataDeletionContent.astro`
- `src/pages/apps/OverLit/delete-data/index.astro` and
  `src/pages/apps/AudioBookChoices/delete-data/index.astro`
- Routes: `siteRoutes.apps.overLitDataDeletion`,
  `siteRoutes.apps.audioBookChoicesDataDeletion`

**When a retention period, a deletion scope, or an in-app deletion control
changes, these pages change with the policy — not after it.** The URL is on a
live store listing, so a stale one is a false statement in the place a reviewer
is most likely to look.

## PlanKept Canonical Files

- Privacy copy: `src/content/legal/plankept-privacy-policy.md`
- Privacy wrapper/version shell: `src/components/legal/PlanKeptPrivacyPolicyContent.astro`
- Canonical privacy route: `src/pages/apps/PlanKept/privacy-policy/index.astro`
- Terms copy: `src/content/legal/plankept-terms-of-service.md`
- Terms wrapper/version shell: `src/components/legal/PlanKeptTermsOfServiceContent.astro`
- Canonical terms route: `src/pages/apps/PlanKept/terms-of-service/index.astro`
- Canonical manifest route: `src/pages/apps/PlanKept/legal-manifest.json.ts`
- Temporary compatibility routes: `src/pages/PlanKept/privacy-policy/index.astro`,
  `src/pages/PlanKept/terms-of-service/index.astro`,
  `src/pages/PlanKept/support/index.astro`, and
  `src/pages/legal-manifest.json.ts`
- App repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- App sync skill: `/Users/alekj/Documents/GitHub/plan enforcer/.agents/skills/legal-update-sync/SKILL.md`
- App legal/model skill: `/Users/alekj/Documents/GitHub/plan enforcer/.agents/skills/legal-model-disclosures/SKILL.md`

PlanKept uses the hosted app-specific legal manifest for Terms and Privacy
versions. During the 2026-06 migration, the root `legal-manifest.json` remains
as a temporary compatibility surface for older app builds. Website version
bumps usually do not require hardcoded app-version changes, but still check app
legal settings, onboarding/legal gate, purchase copy, model-license surfaces,
and App Store-facing disclosures for consistency.

## OverLit Canonical Files

- Privacy copy: `src/content/legal/overlit-privacy-policy.md`
- Privacy wrapper/version shell: `src/components/legal/OverLitPrivacyPolicyContent.astro`
- Terms copy: `src/content/legal/overlit-terms-of-use.md`
- Terms wrapper/version shell: `src/components/legal/OverLitTermsOfUseContent.astro`
- Canonical manifest route: `src/pages/apps/OverLit/legal-manifest.json.ts`
- App repo: `/Users/alekj/Documents/GitHub/OverLit-app`
- App sync skill: `/Users/alekj/Documents/GitHub/OverLit-app/.agents/skills/legal-update-sync/SKILL.md`
- App legal catalog: `/Users/alekj/Documents/GitHub/OverLit-app/Sources/OverLitPlayableUI/Storage/PlayableAppGateState.swift`
- App Store privacy manifest: `/Users/alekj/Documents/GitHub/OverLit-app/App/OverLit/PrivacyInfo.xcprivacy`
- App ads file: `public/app-ads.txt`

When OverLit privacy or Terms of Use versions change, update the matching app
legal catalog version so returning users are prompted to accept the current
public documents.

## Voice of Self Canonical Files

- Privacy copy: `src/pages/apps/VoiceOfSelf/privacy-policy/index.md`
- Mirror copy used by the Voice static subtree:
  `src/voice-of-self/pages/privacy-policy.md`
- Terms copy: `src/pages/apps/VoiceOfSelf/terms-of-service/index.md`
- Mirror terms copy: `src/voice-of-self/pages/terms-of-service.md`
- App repo: `/Users/alekj/Documents/GitHub/closure-app`
- App sync skill:
  `/Users/alekj/Documents/GitHub/closure-app/.codex/skills/claude-legal-doc-sync/SKILL.md`
- App bundled legal files:
  `/Users/alekj/Documents/GitHub/closure-app/external/legal/privacy-policy.md`,
  `/Users/alekj/Documents/GitHub/closure-app/external/legal/terms-of-service.md`,
  and `/Users/alekj/Documents/GitHub/closure-app/external/legal/legal-manifest.json`
- App Store privacy manifest:
  `/Users/alekj/Documents/GitHub/closure-app/ios_app/Resources/PrivacyInfo.xcprivacy`
- Backend deletion registry:
  `/Users/alekj/Documents/GitHub/closure-app/backend/functions/src/services/userDataDeletionService.ts`

When Voice privacy or terms versions change, update the app-bundled legal
files and manifest so in-app/legal-review surfaces stay aligned with the
public site. If auth, RevenueCat, Firebase, managed AI routing, provider data
retention, usage accounting, local storage, export/import, deletion, support,
or App Store privacy labels change, check the policy and the deletion registry
before closing the task.

## Take Me Somewhere Canonical Files

- Privacy copy: `src/content/legal/take-me-somewhere-privacy-policy.md`
- Privacy wrapper/version shell:
  `src/components/legal/TakeMeSomewherePrivacyPolicyContent.astro`
- Terms copy: `src/content/legal/take-me-somewhere-terms-of-service.md`
- Terms wrapper/version shell:
  `src/components/legal/TakeMeSomewhereTermsContent.astro`
- Canonical privacy route:
  `src/pages/apps/TakeMeSomewhere/privacy-policy/index.astro`
- Canonical terms route:
  `src/pages/apps/TakeMeSomewhere/terms-of-service/index.astro`
- Canonical manifest route:
  `src/pages/apps/TakeMeSomewhere/legal-manifest.json.ts`
- App repo: `/Users/alekj/Documents/GitHub/TakeMeSomewhere`
- App legal catalog:
  `/Users/alekj/Documents/GitHub/TakeMeSomewhere/TakeMeSomewhere/Domain/LegalDocument.swift`
- App privacy manifest:
  `/Users/alekj/Documents/GitHub/TakeMeSomewhere/TakeMeSomewhere/Resources/PrivacyInfo.xcprivacy`
- App map/location config:
  `/Users/alekj/Documents/GitHub/TakeMeSomewhere/Config/MapProviders.xcconfig`

When Take Me Somewhere privacy or terms versions change, update the app legal
catalog fallback version. If location use, map/routing/place providers,
background behavior, accounts, ads, analytics, purchases, recent-destination
memory, support, or AI changes, review the public privacy policy, App Store
privacy labels, and `PrivacyInfo.xcprivacy`.

## Audio Book Choices Canonical Files

- Privacy copy: `src/content/legal/audio-book-choices-privacy-policy.md`
- Privacy wrapper/version shell:
  `src/components/legal/AudioBookChoicesPrivacyPolicyContent.astro`
- Terms copy: `src/content/legal/audio-book-choices-terms-of-use.md`
- Terms wrapper/version shell:
  `src/components/legal/AudioBookChoicesTermsContent.astro`
- Canonical privacy route:
  `src/pages/apps/AudioBookChoices/privacy-policy/index.astro`
- Canonical terms route:
  `src/pages/apps/AudioBookChoices/terms-of-use/index.astro`
- Canonical manifest route:
  `src/pages/apps/AudioBookChoices/legal-manifest.json.ts`
- App repo: `/Users/alekj/Documents/GitHub/AudioBookChoices`
- App sync skill:
  `/Users/alekj/Documents/GitHub/AudioBookChoices/.claude/skills/legal-update-sync/SKILL.md`
- App legal gate + version:
  `shared/src/commonMain/kotlin/com/audiobookchoices/shared/ui/LegalGate.kt` and
  `AppConfig.LEGAL_VERSION` in
  `shared/src/commonMain/kotlin/com/audiobookchoices/shared/AppConfig.kt`

Audio Book Choices is the one product here that is **not** local-only: it uses
Firebase anonymous authentication (a pseudonymous device identifier), Firestore
for entitlement and rating records, RevenueCat in front of Apple/Google
purchases, and Cloudflare R2 for audio delivery. Do not copy the "everything
stays on your device" framing used by the other apps into this app's documents —
that framing was published here in 1.0.0 and was already false by launch.

When its privacy or terms versions change, bump `AppConfig.LEGAL_VERSION` in the
app repo so the in-app acceptance gate re-prompts returning listeners. If
purchases, subscriptions, free unlocks, ratings, backend fields, retention,
age declaration/content ratings, or third-party services change, review the
policy, the terms, the in-app paywall and buy-sheet copy, and the App Store /
Play privacy and age-rating declarations.

## Shared Website Files

- Legal versions and manifest values: `site.config.mjs`
- Temporary PlanKept compatibility manifest route:
  `src/pages/legal-manifest.json.ts`
- App-specific manifest routes under `src/pages/apps/*/legal-manifest.json.ts`

## Model terms note

If a task changes PlanKept model/provider availability, do not hardcode the
current model catalog into the privacy policy. The website legal copy should
say selected models may have their own listed terms or licenses; exact current
license inventory belongs in the app model catalog, app Legal settings, and
model install/selection surfaces.
