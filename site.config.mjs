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
    version: "2.1.2",
    effectiveDate: "2026-08-06",
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
  audioBookChoicesPrivacy: {
    version: "2.2.0",
    effectiveDate: "2026-08-09",
    path: "/apps/AudioBookChoices/privacy-policy/",
    sourcePath: "src/content/legal/audio-book-choices-privacy-policy.md",
  },
  audioBookChoicesTerms: {
    version: "2.1.2",
    effectiveDate: "2026-08-06",
    path: "/apps/AudioBookChoices/terms-of-use/",
    sourcePath: "src/content/legal/audio-book-choices-terms-of-use.md",
  },
};
