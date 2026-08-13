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
  // Live-gated (VoiceOfSelf fetches this): version and date deliberately
  // unchanged by the masthead addition.
  voiceOfSelfPrivacy: {
    version: "1.2.22",
    effectiveDate: "2026-06-20",
    path: "/apps/VoiceOfSelf/privacy-policy/",
    sourcePath: "src/content/legal/voice-of-self-privacy-policy.md",
  },
  voiceOfSelfTerms: {
    version: "1.2.16",
    effectiveDate: "2026-06-08",
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
    version: "2.2.0",
    effectiveDate: "2026-08-10",
    path: "/apps/OverLit/privacy-policy/",
    sourcePath: "src/content/legal/overlit-privacy-policy.md",
  },
  overLitTerms: {
    version: "2.0.3",
    effectiveDate: "2026-08-06",
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
  audioBookChoicesPrivacy: {
    version: "2.5.0",
    effectiveDate: "2026-08-13",
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
  audioBookChoicesTerms: {
    version: "2.2.0",
    effectiveDate: "2026-08-13",
    path: "/apps/AudioBookChoices/terms-of-use/",
    sourcePath: "src/content/legal/audio-book-choices-terms-of-use.md",
  },
};
