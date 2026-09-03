const normalizeBasePath = (value) => {
  if (!value || value === "/") {
    return "/";
  }

  return value.endsWith("/") ? value : `${value}/`;
};

const defaultSiteOrigin = "https://alekjaltuszyk.xyz";
const defaultSiteBasePath = "/";

export const siteOrigin = process.env.PUBLIC_SITE_ORIGIN ?? defaultSiteOrigin;
export const siteDomain = new URL(siteOrigin).host;
export const siteBasePath = normalizeBasePath(
  process.env.PUBLIC_SITE_BASE_PATH ?? defaultSiteBasePath,
);

/**
 * Base for a legal document's public revision history. This repo is public, so
 * every document's own file history *is* its archive — no snapshotting, no
 * per-version copies to maintain. `LegalDocumentHeader.astro` appends an
 * entry's `sourcePath` to this to link a reader to the previous versions.
 */
export const legalSourceHistoryBase =
  "https://github.com/Allekq/alekjaltuszyk-website/commits/main";

/**
 * Published legal documents.
 *
 * `version` is NOT cosmetic for every app. Three apps fetch their version from
 * the hosted `legal-manifest.json` built out of this object and re-prompt for
 * acceptance the moment it changes — PlanKept, TakeMeSomewhere and
 * VoiceOfSelf. For those three, a bump here is a blocking acceptance wall in
 * front of every existing user on their next launch, whether or not the change
 * deserved one. Only bump them for a substantive change.
 *
 * AudioBookChoices and OverLit compile their accepted version into the binary
 * instead (`AppConfig.LEGAL_VERSION` and `PlayableLegalDocumentCatalog`), so a
 * bump here reaches nobody until a new build ships. The website site-* entries
 * gate nothing at all.
 *
 * A clarification that adds no new obligation (wording, a masthead, a typo) is
 * recorded by the revision history above and does not need a bump anywhere.
 */
export const legalDocuments = {
  sitePrivacy: {
    version: "1.0.1",
    effectiveDate: "2026-08-06",
    path: "/privacy-policy/",
    sourcePath: "src/content/legal/site-privacy-policy.md",
  },
  siteTerms: {
    version: "1.0.1",
    effectiveDate: "2026-08-06",
    path: "/terms/",
    sourcePath: "src/content/legal/site-terms.md",
  },
  // Live-gated (PlanKept fetches this): version and date deliberately unchanged
  // by the masthead addition.
  planKeptPrivacy: {
    version: "1.2.14",
    effectiveDate: "2026-06-20",
    path: "/apps/PlanKept/privacy-policy/",
    sourcePath: "src/content/legal/plankept-privacy-policy.md",
  },
  planKeptTerms: {
    version: "1.2.9",
    effectiveDate: "2026-06-20",
    path: "/apps/PlanKept/terms-of-service/",
    sourcePath: "src/content/legal/plankept-terms-of-service.md",
  },
  // Live-gated (VoiceOfSelf fetches this). Both bumped for the account-deletion
  // grace period, and both are substantive rather than cosmetic, so the
  // re-gate is deserved.
  //
  // Account deletion used to destroy the Firebase Auth identity immediately.
  // Because the managed-AI allowance is metered per account per billing period,
  // that meant deleting an account minted a new account identifier and with it a
  // fresh allowance — spend the month, delete, sign back in, restore the
  // purchase, spend it again, at real cost to us. Deletion is now a soft delete:
  // most backend records still go immediately, but the auth account record and
  // the billing-period usage counters are held for 30 days and then removed by a
  // scheduled job. That closes the loop and gives people the accidental-deletion
  // recovery Apple and Google offer.
  //
  // Privacy 1.2.22 -> 1.3.0. Sections 8.3 and 16.2 previously stated that
  // deletion removes the auth account and usage records immediately, which as of
  // this change is false. New section 8.3.1 discloses the retention, its
  // duration, its two purposes, the legitimate-interests basis, and that the
  // retained records are used for nothing else. This is a new retention
  // practice, not a clarification, so a minor step rather than a patch.
  //
  // Terms 1.2.16 -> 1.3.0. New section 18.1 sets out the deletion and
  // reinstatement mechanics, states that reinstating does not restore what was
  // already deleted, and states that usage carries over rather than resetting.
  // Section 9 names delete-and-re-register allowance resetting explicitly; that
  // was already prohibited as circumventing usage limits, but it now says so.
  // New user-facing contract behaviour, so a minor step.
  //
  // 30 days is load-bearing, not a round number. It exceeds the longest billing
  // cadence we sell (monthly), so waiting the grace period out is never faster
  // than waiting for the billing period to renew. Shortening it below a month
  // would reopen the abuse loop AND make the published text false. It also lines
  // up with the Art. 12(3) GDPR one-month response deadline.
  voiceOfSelfPrivacy: {
    version: "1.3.0",
    effectiveDate: "2026-09-03",
    path: "/apps/VoiceOfSelf/privacy-policy/",
    sourcePath: "src/content/legal/voice-of-self-privacy-policy.md",
  },
  voiceOfSelfTerms: {
    version: "1.3.0",
    effectiveDate: "2026-09-03",
    path: "/apps/VoiceOfSelf/terms-of-service/",
    sourcePath: "src/content/legal/voice-of-self-terms-of-service.md",
  },
  voiceOfSelfAIUsage: {
    version: "2026-06-20-v1",
    effectiveDate: "2026-06-20",
    path: "/apps/VoiceOfSelf/how-voice-of-self-uses-ai/",
    sourcePath: "src/pages/apps/VoiceOfSelf/how-voice-of-self-uses-ai/index.astro",
  },
  overLitPrivacy: {
    version: "3.2.0",
    effectiveDate: "2026-09-03",
    path: "/apps/OverLit/privacy-policy/",
    sourcePath: "src/content/legal/overlit-privacy-policy.md",
  },
  overLitTerms: {
    version: "3.1.1",
    effectiveDate: "2026-08-31",
    path: "/apps/OverLit/terms-of-use/",
    sourcePath: "src/content/legal/overlit-terms-of-use.md",
  },
  // Live-gated (TakeMeSomewhere fetches this): version and date deliberately
  // unchanged by the masthead addition.
  takeMeSomewherePrivacy: {
    version: "1.0.3",
    effectiveDate: "2026-06-08",
    path: "/apps/TakeMeSomewhere/privacy-policy/",
    sourcePath: "src/content/legal/take-me-somewhere-privacy-policy.md",
  },
  takeMeSomewhereTerms: {
    version: "1.0.4",
    effectiveDate: "2026-06-08",
    path: "/apps/TakeMeSomewhere/terms-of-service/",
    sourcePath: "src/content/legal/take-me-somewhere-terms-of-service.md",
  },
  // 2.5.0 adds Google Analytics for Firebase, and it is the largest privacy
  // change this app has made. It DISCLOSES NEW COLLECTION BY A THIRD PARTY:
  // two automatic events (first_open, in_app_purchase) plus a per-install
  // identifier, sent to Google and used by Google Ads to tell whether money
  // spent advertising the app produced anything. Nothing about listening
  // behaviour goes with it, and no advertising identifier is read on either
  // platform — the iOS build links the WithoutAdIdSupport variant and Android
  // switches it off in the manifest, which is what keeps an ATT prompt out of
  // the app. It also RETRACTS a claim people accepted: previous versions said
  // outright that there was no analytics SDK. Section 9 now says so plainly
  // rather than quietly dropping the sentence.
  //
  // AND IT COSTS THE UK ITS EXEMPTION. GB moves into the ask-outright regions
  // (AnalyticsRegion.kt): PECR Sch. A1 para 5 exempts storage whose SOLE
  // purpose is statistical measurement to improve a service, the exemption is
  // not divisible, and measuring advertising is not that purpose. UK listeners
  // are now asked the same question as EEA listeners. Note this is the second
  // time the UK has moved in two versions, in opposite directions, for
  // unrelated reasons — 2.4.0 corrected a false claim that it was asked, 2.5.0
  // makes it true. Both are explained in the document.
  //
  // AppConfig.LEGAL_VERSION IS bumped for 2.5.0 (7 -> 8). Same ORDER rule as
  // below. One extra deploy step that is NOT in this repo: the GA4 property's
  // user-data retention must be set to 2 months, which is what section 15 of
  // the policy tells people.
  //
  // 2.4.0 covers the notification feature, and it is a minor bump for the same
  // two reasons 2.3.0 was. NEW STORAGE, on the listener's own device: the note
  // described in the new section 12. Nothing about it reaches a server, so
  // there is no new server-side processing and docs/ANALYTICS_LIA.md in the app
  // repo is untouched by it — but ePrivacy Art. 5(3) (in Poland PKE art. 399)
  // governs writing to somebody's device whether or not the data is personal,
  // and the in-app opt-in is what the document now relies on as permission for
  // it. And a CORRECTION: sections 9 and 16 said milestone consent is asked for
  // outright in the UK. It is not — AnalyticsRegion.kt excludes GB under the
  // PECR Schedule A1 para 5 statistical-purposes exemption, and section 6
  // always said so. Both stale places are fixed.
  //
  // AppConfig.LEGAL_VERSION IS bumped for 2.4.0 (6 -> 7). Same ORDER rule as
  // below, and it still has teeth: this document goes live first, the build
  // carrying 7 second.
  //
  // 2.3.0 does two things a clarification cannot, which is why this is a minor
  // bump and not a patch. It DISCLOSES NEW PROCESSING — the App Attest / Play
  // Integrity app-integrity check, which was already live and named nowhere in
  // the document — and it CORRECTS a location claim that was simply wrong:
  // sections 5 and 8 said the anonymous identifier was stored in the EU, and
  // Firebase Authentication is a global Google service with no region setting,
  // so it never was. The correction is stated as a correction rather than
  // quietly dropping the sentence, because people accepted the old wording.
  //
  // 2.2.2's note below still holds for the case it described: a rename is not
  // an obligation and must not bump the app constant. This one is different.
  // AppConfig.LEGAL_VERSION IS bumped for 2.3.0 (5 -> 6), and that is the
  // disruptive half — AudioChoices is binary-pinned, so the bump walls every
  // live iOS listener behind LegalGate on their next launch after they update.
  // ORDER: publish this document first (harmless, reaches nobody), ship the
  // build carrying LEGAL_VERSION 6 second. A build must never reach a device
  // before the 2.3.0 text is live, or the gate asks people to accept a
  // document that does not exist yet.
  //
  // 2.2.2: renamed to match the store record ("AudioChoices"), and the
  // free-unlock allowance moved out of the text and into the app's own purchase
  // screen — which section 5 already reserved the right to change. No new
  // obligation, so LEGAL_VERSION was deliberately NOT bumped for it.
  // 2.5.0 is amended in place rather than superseded: it was drafted on the 12th and never
  // deployed, so no reader has seen the earlier text and there is no version for a bump to
  // distinguish it from. The corrections it carries — the Google Analytics disclosure on the
  // consent screen, the UK in section 10, the SDK's own housekeeping events, the age limit on
  // who is asked — were found by review before publication, which is the point of reviewing
  // before publication. The file's own public history is the archive.
  // 2.6.0 — MINOR, and specifically not a patch, because section 14 gained a new
  // DATA SOURCE and the document retracts a promise. The app no longer relies on
  // a slider: on iOS 26+ and on Android where Play supports it, it asks the
  // PLATFORM for the listener's age range (Apple's Declared Age Range, Google
  // Play's Age Signals) and keeps the range's lower bound.
  //
  // Three sentences in the old section 14 went false together — "asks you to
  // state your age with a slider", "does not attempt any age-assurance check",
  // and, read strictly, that the number is something the reader supplied. The
  // third promise in that list SURVIVES and is restated rather than dropped:
  // nothing about the age is transmitted, on either path. Both stores' terms for
  // these APIs forbid using the range for advertising, marketing, profiling or
  // analytics, so it is not merely that we choose not to send it.
  //
  // Also updated: section 2 (summary bullet), 4 (what stays on the device — the
  // age is now five stored facts, not one), 7 (a platform service that is ASKED
  // rather than TOLD, which no recipient row covers), 10 (the under-16 rule now
  // often rests on a platform range), 13 (what the notification note copies),
  // 15 (clearing local data cannot un-ask the phone), 18 (children — the
  // improvement, and its limits), 21 (COPPA paragraph). The data-deletion page
  // gains the same honest caveat, because it sits on a live store listing.
  //
  // TWO CORRECTIONS MADE BEFORE THIS DRAFT WAS EVER PUBLISHED, both from an
  // adversarial read of the shipped code against this text. Neither is a version
  // bump — 2.6.0 has not gone live, so this is the draft being made true rather
  // than a published document being amended.
  //
  //  1. Section 4 now lists a FIFTH stored age fact. The regulated-region answer
  //     is persisted (`prefs.age_assurance_required`), because nothing re-asks
  //     the platform on its own and an unpersisted flag was false for everyone
  //     on every launch — which is how the cap in section 14 shipped as a no-op
  //     the first time. A privacy policy that enumerates on-device storage has
  //     to enumerate this one, and has to say what it is not: one bit, not a
  //     country, not a region, not a location reading.
  //  2. Section 14 QUALIFIES the cap instead of asserting it flat, and section
  //     12 of the Terms does the same. Apple's `isEligibleForAgeFeatures` is
  //     iOS 26.2+, while the age range itself is 26.0+, so on iOS 26.0 and 26.1
  //     the app gets a band and never learns whether a law applies.
  //
  // Section 14 also now states what "Check my age range" does to an age the
  // listener set themselves: it records the new range and leaves their number
  // alone. That is behaviour a reader can observe, so it belongs in the text.
  //
  // A THIRD AND FOURTH CORRECTION, from a second adversarial read on the 14th,
  // again before publication. Both are corrections of THIS draft, not amendments
  // to a live document, so 2.6.0 still stands and the effective date does not
  // move. Anyone diffing the file's public history will see them.
  //
  //  3. THE CAP IS THE ATTESTED BAND, NOT A FLAT 13, and both documents now say
  //     so. The old sentence — "an age the platform did not confirm will not
  //     unlock anything above 13" — was paired in code with a rule that
  //     remembers a typed number as the listener's own forever, so an
  //     Apple-attested adult who once touched the slider was pinned at 13 for
  //     the life of the install, and neither remedy the app offers could shift
  //     it. Both documents named one of those remedies. The rule now reads the
  //     stored band (`UserPrefs.curationAge` ->
  //     `effectiveAgeCeiling(assuranceRequired, platformAttestedLowerBound)`),
  //     which is strictly tighter in the other direction: a 13-15 band caps a
  //     typed 40 at 13. Section 14's "set your age in Settings to match it"
  //     therefore works now and was allowed to stand; it did not work before.
  //     `AppConfig.kt`'s LEGAL_VERSION KDoc is the source of truth for this
  //     wording — check it before touching either sentence again.
  //  4. "iOS 26.2 AND LATER ARE UNAFFECTED, AND SO IS EVERY ANDROID DEVICE" IS
  //     GONE FROM BOTH DOCUMENTS, and this is the sentence that mattered most,
  //     because it was the only unqualified claim of coverage in either file.
  //     It was false in two independent ways. On iOS 26.2+ a failed
  //     `requestAgeRange` used to discard a real "a law applies" that Apple had
  //     already given, so the cap silently did not engage — fixed, and 26.2+ is
  //     now accurately described as answering the question. On Android it was
  //     never true in the first place: Play's ONLY regulated-region signal is
  //     `VERIFICATION_REQUIRED`, which it stops sending once the listener
  //     completes verification with the store, and it has no status meaning "no
  //     law applies". So an Android listener who verified with Play before ever
  //     opening the app is never flagged and is never capped. That is a residual
  //     of the platform, not of this code, and both documents now state it
  //     device by device instead of asserting blanket coverage. A future Play
  //     API that reports the region directly would let this bullet be narrowed
  //     — and narrowing is a version bump, because the text would then be
  //     narrower than the behaviour.
  //
  // A FIFTH THROUGH EIGHTH CORRECTION, from a third adversarial read on the 14th
  // and still before publication. Every one of them either corrects a sentence
  // that was false against the shipped code or NARROWS a claim, so 2.6.0 stands
  // and the effective date does not move. Each was traced in the code before it
  // was rewritten, which the previous two rounds did not do — the documents had
  // been drafted from summaries and were wrong three rounds running.
  //
  //  5. SECTION 10 SAID THE ANALYTICS QUESTION IS PUT WHERE THE PHONE CONFIRMED
  //     A RANGE STARTING AT 16 OR ABOVE. It is not. The gate reads
  //     `UserPrefs.curationAge`, which is `min(the listener's own number, the
  //     attested band)` — so an 18+ band plus a self-set 14 gives 14 and the
  //     question is withheld. The app is STRICTER than the document described,
  //     which is the safe direction and still a false sentence in a published
  //     document. Section 10 now states the min outright. Section 14's closing
  //     paragraph carried the same error mirrored ("already working to that
  //     range's bottom", untrue when the listener's own number is lower) and is
  //     corrected with it.
  //  6. SECTION 18 SAID A BOOK ABOVE THE AGE IS "NEVER ANNOUNCED". Two paths
  //     break the absolute. Only the new-story notification consults the age at
  //     all: the unfinished-book reminder is drawn from books already started
  //     and already entitled to, and is not re-checked against `minAge`, so an
  //     age that later drops below that book's rating leaves it nameable. And
  //     the background check reads a COPY of the age written while the app was
  //     last on screen, which can lag by a launch. Both are now stated. Do not
  //     restore the absolute on the strength of fixing only one of them.
  //  7. NEITHER DOCUMENT DISCLOSED THAT THE STORED RANGE HAS NO EXPIRY. Nothing
  //     re-asks the platform on its own and a failed or declined check leaves
  //     the older range in place, so a range confirmed years ago, possibly
  //     before the phone ever said a law applied, is what the cap is measured
  //     against today. Both documents described the limit in the present tense.
  //     Section 14 gains a paragraph; Terms section 12 defines its "newest".
  //  8. CLEARING LOCAL DATA NO LONGER CLEARS THE REGULATED-REGION ANSWER, and
  //     four places said it did. `UserPrefs.clearAll` used to reset it, which
  //     made the privacy control a two-step way out of the cap: clear, then type
  //     any age into the row above the one you just tapped. The flag now
  //     survives the wipe (the band does not, so the ceiling falls to 13 — the
  //     wipe only ever narrows). Corrected in privacy sections 4, 14 and 15, in
  //     Terms section 12, and on the data-deletion and age-suitability pages,
  //     which both stated the opposite. The in-app confirmation dialog discloses
  //     the retention before anybody clears.
  //
  // ALSO CORRECTED: Terms section 12 said that if you DECLINE the platform's
  // sharing prompt "you set an age yourself on a slider". The app does the
  // opposite — it assumes 13 and moves on rather than putting the same question
  // back up, which privacy section 14 already said correctly. The two published
  // documents contradicted each other on observable behaviour. Both now describe
  // the "I'd rather set it myself" link, which is the real way to reach the
  // slider on a device that offers a range.
  //
  // CORRECTED A FOURTH TIME ON THE 14TH, STILL BEFORE PUBLICATION, AND THIS ONE
  // WIDENS RATHER THAN NARROWS — the only change in this sequence that does, so
  // it is set out at length rather than folded in.
  //
  //  THE CHANGE: an age range shared by the phone now caps what the app acts on
  //  EVERYWHERE, not only where a platform has said a law requiring an age check
  //  applies. Section 14's fourth bullet is the statement of it, and the age
  //  slider disappears from both the onboarding step and the Settings row on any
  //  device that has shared one.
  //
  //  WHY, and it is the owner's own report rather than a legal reading. He
  //  tested the shipping build on his own iPhone, shared his range, and watched
  //  the app go on using a number he had typed on a slider — because Poland is
  //  not one of the four jurisdictions that mandate assurance, so the cap did
  //  not apply to him or to almost anybody. The app was asking the phone,
  //  printing the answer on the screen, and then ignoring it. "If we are using
  //  the share age API, it would be best to just stick to it."
  //
  //  WHY IT IS SAFE TO PUBLISH AT 2.6.0 RATHER THAN 2.7.0. This constrains what
  //  the reader can do, and the rule above is that such a term must be published
  //  before it operates. It is: 2.6.0 has not gone live, LEGAL_VERSION 9 has not
  //  shipped, and the widened limit is published for the first time in the same
  //  document as the narrow one. Nobody has accepted the narrow version. A
  //  further step would be honest bookkeeping about a draft and nothing more.
  //
  //  WHAT IT DOES NOT DO, stated because the misreading is available: it does
  //  not gate playback, purchases or anything already unlocked; it does not
  //  raise what the catalogue may contain; and it does not take a number away —
  //  an age set before the phone ever answered is still stored, still shown, and
  //  still what the app works to where it is *lower* than the range. Section 14
  //  says all three, and the one new control (adopt the range) can only ever
  //  move in the direction the platform already attested.
  //
  // AND A FIFTH CORRECTION, ALSO ON THE 14TH AND ALSO BEFORE PUBLICATION, WHICH
  // NARROWS: the self-declared age is no longer a slider. It is three buttons —
  // 13-15, 16-17, 18 or over — the same three ranges a platform answers with.
  //
  //  WHY IT IS A PRIVACY IMPROVEMENT RATHER THAN A UI CHANGE, and why section 14
  //  says so outright: nothing in the app has ever consulted an exact age. Every
  //  reader compares the listener against 13, 16 or 18 (a book's minAge, which may
  //  only be 0/13/16/18, and MIN_AGE_TO_CONSENT_TO_ANALYTICS). So a slider asking
  //  for 27 or 41 was collecting a more precise fact than any purpose used, which
  //  is a data-minimisation point (GDPR art. 5(1)(c)) as much as a design one.
  //  Collecting strictly less needs no version step.
  //
  //  It also retires a divergence that ran through both documents: the app had two
  //  sources for the same fact with two different shapes, so every sentence had to
  //  describe a number OR a range depending on which route the reader was on. Both
  //  routes now produce a range and the documents can say one thing.
  //
  //  Ages already stored from the old slider are NOT rewritten — 41 stays 41 on
  //  disk and is displayed as "18+". Section 14's "an age from a slider you set
  //  before your phone ever answered is still stored and still shown to you" is
  //  the sentence that covers them, and it stays true for those installs.
  //
  // AppConfig.LEGAL_VERSION IS bumped for this (8 -> 9), on the owner's explicit
  // instruction. ORDER, and it is the same rule as 2.3.0: publish this document
  // first — it reaches nobody, because AudioChoices is binary-pinned — and ship
  // the build carrying LEGAL_VERSION 9 second. A build must never reach a device
  // before this text is live, or the gate asks people to accept a document that
  // does not exist yet. Note that version 8 itself has never shipped, so for most
  // readers 9 will be the first gate they see since 2.3.0.
  // 2.7.0 rather than a patch, and the reason is worth keeping. Section 13 said
  // the notification question is put "after you have finished a story or listened
  // for a while — deliberately not during setup". The app moved that ask to the
  // last page of setup on 2026-08-12, and this document was revised three times
  // afterwards without catching it. Where and how a consent is obtained is
  // substance rather than wording — for the on-device note, the notification
  // permission IS the ePrivacy consent — so this is a minor bump, not a typo fix.
  //
  // It now describes BOTH routes, because both are live. A new install is asked on
  // the last page of setup; an install that predates the feature has no setup left
  // to ask on and is asked at an earned moment instead. AppConfig.LEGAL_VERSION
  // stays at 9 — 9 has never shipped, so the single re-gate that build already
  // carries covers this revision too, at no extra cost to anybody.
  //
  // 2.8.0, MINOR: the "Write to the developer" / "Tell me more" buttons now
  // prefill two more lines into the mailto draft, below the app-version/platform
  // signature — which screen the message started from, and the listener's
  // installation identifier (Support ID), labelled and with a one-line note that
  // it can be deleted. That is a new disclosed practice (a recipient the
  // identifier now reaches by default, where section 19 previously said it was
  // "deliberately not included"), so it is not a wording-only patch, even though
  // nothing is transmitted by the app, no new recipient or processing is added,
  // and the line is fully visible and removable before the listener sends
  // anything. Section 6's support-email row and section 15's deletion-route
  // paragraph were also touched, both narrowly. AppConfig.LEGAL_VERSION in the
  // app repo is deliberately NOT bumped for this one — the owner decided
  // against re-walling every existing listener behind the acceptance gate for a
  // change that grants nothing new, adds no recipient, and is visible and
  // reversible at the point of use.
  //
  // 2.9.0 — MINOR. It discloses two things that were true and unstated, and an
  // unstated retention in a document this detailed (30-day Cloud Logging,
  // 400-day Google audit logs, 31-day R2 metrics, 13-month GA) reads as an
  // absence rather than an omission.
  //
  // (1) `(default)` has point-in-time recovery enabled, 7-day version retention.
  // A record erased on request leaves the live database at once but stays inside
  // that rolling window until it ages out. PITR stays ON deliberately: an
  // erasure never touches entitlements, unlockTransactions or freeUnlocks, so
  // the records that cannot be reconstructed are exactly the ones erasure leaves
  // alone, and this is the only way back from an incident that damages them. The
  // window is bounded, auto-expiring, never read, and closes well inside the one
  // month section 15 already allows for answering a request — which is the
  // shape regulators accept for backups, but only if it is disclosed.
  //
  // (2) The erasure log that makes a restore safe: `deleteMyData` now writes
  // sha256(uid) to a SEPARATE Firestore database before erasing, and
  // `envctl replay-erasures` re-runs every erasure it names after any restore.
  // Separate database because a restore of `(default)` would otherwise roll back
  // the log too, destroying the record of what to re-erase at the exact moment
  // it is needed. The hash is never reversed — replay hashes the uids the
  // restored data already supplies and tests membership — so the log is not a
  // register of who exercised the right. Retained indefinitely, minimal, on
  // legitimate interests: a restore can happen at any time.
  //
  // The Play-linked deletion page moves in the SAME commit, not after it — it is
  // on a live store listing, and a stale one is a false statement where a
  // reviewer looks.
  //
  // AppConfig.LEGAL_VERSION stays at 9, same reasoning as terms 2.3.1: 9 has
  // never shipped, so this rides the gate it already fires.
  audioBookChoicesPrivacy: {
    version: "2.9.0",
    effectiveDate: "2026-09-03",
    path: "/apps/AudioBookChoices/privacy-policy/",
    sourcePath: "src/content/legal/audio-book-choices-privacy-policy.md",
  },
  // 2.2.0 rather than a patch: it discloses rights that were not stated before
  // (the 14-day withdrawal position, the Digital Content Directive remedies for
  // a withdrawn book, a free exit from a materially changed subscription, and
  // the Polish out-of-court route), and it corrects the forum for Swiss and
  // Canadian consumers, who were being told the wrong court. It also drops the
  // EUR 50 aggregate cap, which was a strong candidate for unfairness under
  // Directive 93/13 and art. 385(3) k.c. No LEGAL_VERSION bump is needed —
  // in-app version 8 has not shipped yet, so nobody has accepted the old text.
  // 2.3.0 — MINOR, matching privacy 2.6.0 and for the same reason. Section 12
  // described one mechanism ("the app asks you to state your age", "anyone can
  // change the stated age") and there are now two: a platform-supplied age range
  // where the device offers one, the slider where it does not. It also states a
  // NEW LIMIT on the listener's own freedom, which is the part that makes this a
  // change in substance rather than in wording — where the platform says a law
  // requiring age assurance applies, an age it did not confirm unlocks nothing
  // above 13. A term that constrains what the reader can do has to be published
  // before it operates, not explained afterwards.
  //
  // Section 2 (eligibility, 13+) is unchanged and still correct. The age still
  // decides only what is OFFERED — never what may be bought or played — and
  // section 12 now says so outright, because a platform-attested age invites
  // exactly that misreading.
  //
  // Corrected before publication, same two points as privacy 2.6.0 and for the
  // same reason — this is a CONTRACT, so a term that overstates its own reach is
  // the worst kind of drafting error here. Section 12 now says the cap operates
  // only where the platform actually tells the app, and names iOS 26.0 and 26.1
  // as the two releases where it does not; and it says that "Check my age range"
  // does not overwrite an age the listener set themselves, which is a promise
  // about the app's behaviour towards their own choice and therefore a term.
  // Neither addition widens what is claimed — both narrow it — so no further
  // version step beyond 2.3.0 is warranted.
  //
  // Corrected again on the 14th, before publication, mirroring points 3 and 4 on
  // privacy 2.6.0 — read those, they carry the reasoning. In this file the two
  // changes are: the cap is now stated as the RANGE THE PLATFORM CONFIRMED
  // rather than a flat 13 (the flat version was a term the app could not honour
  // and whose stated remedy could not be reached), and the sentence "iOS 26.2
  // and later are unaffected, as is every Android device" is gone, replaced by a
  // device-by-device statement of where the platform actually tells the app.
  // That sentence was the only unqualified promise of coverage in the contract
  // and it was untrue on Android by construction: Play's sole regulated-region
  // signal is VERIFICATION_REQUIRED, which it stops sending once verification is
  // done and which it never sends to somebody who verified before installing.
  // Section 12 also now says that the limit follows the newest range even though
  // the listener's own number is left alone, because a reader who re-checks can
  // observe exactly that. Every change here NARROWS what is claimed, so 2.3.0
  // still stands and the effective date does not move.
  //
  // Corrected a third time on the 14th, still before publication, mirroring
  // corrections 5-8 on privacy 2.6.0 — read those. Three changes in this file,
  // all in section 12. (a) The bullet describing the cap now says outright that
  // CLEARING THE APP'S DATA DOES NOT LIFT IT: the app keeps the platform's
  // regulated-region answer through a wipe, deliberately, because clearing it
  // made this control's own workaround a two-tap one. A contract that states a
  // limit has to state that the obvious way round it does not work. (b) The
  // "checking again" bullet now defines its "newest" — the stored range has no
  // expiry and nothing re-asks, so a long-old range can be what the limit
  // follows. (c) The opening paragraph said that declining the platform's prompt
  // drops you onto the slider. It does not; the app assumes 13 and moves on,
  // exactly as the Privacy Policy already said. That was the two documents
  // contradicting each other about behaviour a reader can observe in one tap.
  // (a) and (b) narrow; (c) corrects a plain error. 2.3.0 still stands.
  //
  // Corrected a fourth time on the 14th, mirroring the fourth correction on
  // privacy 2.6.0 — read that one, it carries the reasoning and the owner's
  // report behind it. In this contract the change is section 12's third and
  // fourth bullets: a range shared by the phone caps what the app acts on
  // wherever the listener is, not only where a law requires an age check, and
  // there is no age slider on a device that has shared one. This WIDENS a term
  // that constrains the reader, which is the one direction that normally forces
  // a version step — it does not here only because 2.3.0 has not been published
  // and LEGAL_VERSION 9 has not shipped, so the widened term is the first thing
  // anybody will be asked to accept. The bullets that say the age decides only
  // what is OFFERED, and that a lower number of the listener's own still stands,
  // are unchanged and are what keep this from being a restriction on the
  // product they paid for. 2.3.0 still stands.
  //
  // 2.3.1 — PATCH, and deliberately not a minor. Section 4 gains three things and
  // not one of them is a new obligation, a new right, or a new recipient: the
  // imprint AudioChoices Originals is named as the Developer rather than left to
  // look like a separate publisher (the app shows it as the author of every book
  // and no document said who it was); a sentence saying that a book's narration is
  // a recording of its story text, so a copy of the audio is also a copy of the
  // writing underneath it; and a copyright notice. Section 11's "written by a human
  // author" now names that author and points at section 4. All of this describes
  // ownership that has existed under Berne since the prose was written — the
  // contract was simply silent about it, and silence is what lets a listener argue
  // that machine-read narration belongs to nobody.
  //
  // AppConfig.LEGAL_VERSION STAYS AT 9 and must not be bumped for this. 9 is staged
  // and has not shipped in any build, so it is still the first version anybody will
  // ever be asked to accept: this text rides through the gate 9 already fires and
  // reaches every existing listener at no extra cost. Bumping to 10 would wall the
  // same people twice for one acceptance and buy nothing. The owner asked for the
  // ownership statement to be something a listener has to accept — at 9 it is.
  //
  // ORDERING, with the same teeth it had for 6, 8 and 9: this revision must be live
  // on the website before the build carrying LEGAL_VERSION 9 reaches one device.
  audioBookChoicesTerms: {
    version: "2.3.1",
    effectiveDate: "2026-09-03",
    path: "/apps/AudioBookChoices/terms-of-use/",
    sourcePath: "src/content/legal/audio-book-choices-terms-of-use.md",
  },
};
