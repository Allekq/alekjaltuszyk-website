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
 * Canonical staged legal metadata. Local edits do not publish these documents.
 * Hosted-manifest apps use fetch/cache/merge behavior to detect changes; a bump
 * does not guarantee an immediate online re-prompt for every installed user.
 * OverLit pins document versions in its binary; AudioChoices uses its binary
 * LEGAL_VERSION (currently 12 in the prepared app source). Website publication must
 * explain older-release behavior as well as the next build's behavior.
 * Acceptance acknowledges a notice; it does not grant optional-purpose consent
 * or retroactively authorize earlier processing. Prior text is in Git history.
 */
export const legalDocuments = {
  sitePrivacy: {
    version: "1.1.0",
    effectiveDate: "2026-10-03",
    path: "/privacy-policy/",
    sourcePath: "src/content/legal/site-privacy-policy.md",
  },
  siteTerms: {
    version: "1.1.0",
    effectiveDate: "2026-10-03",
    path: "/terms/",
    sourcePath: "src/content/legal/site-terms.md",
  },
  planKeptPrivacy: {
    version: "1.3.0",
    effectiveDate: "2026-10-03",
    path: "/apps/PlanKept/privacy-policy/",
    sourcePath: "src/content/legal/plankept-privacy-policy.md",
  },
  planKeptTerms: {
    version: "1.3.0",
    effectiveDate: "2026-10-03",
    path: "/apps/PlanKept/terms-of-service/",
    sourcePath: "src/content/legal/plankept-terms-of-service.md",
  },
  voiceOfSelfPrivacy: {
    version: "1.5.0",
    effectiveDate: "2026-10-04",
    path: "/apps/VoiceOfSelf/privacy-policy/",
    sourcePath: "src/content/legal/voice-of-self-privacy-policy.md",
  },
  voiceOfSelfTerms: {
    version: "1.5.0",
    effectiveDate: "2026-10-04",
    path: "/apps/VoiceOfSelf/terms-of-service/",
    sourcePath: "src/content/legal/voice-of-self-terms-of-service.md",
  },
  voiceOfSelfAIUsage: {
    version: "2026-10-04-v3",
    effectiveDate: "2026-10-04",
    path: "/apps/VoiceOfSelf/how-voice-of-self-uses-ai/",
    sourcePath: "src/content/legal/voice-of-self-ai-use.md",
  },
  overLitPrivacy: {
    version: "3.7.0",
    effectiveDate: "2026-10-04",
    path: "/apps/OverLit/privacy-policy/",
    sourcePath: "src/content/legal/overlit-privacy-policy.md",
  },
  overLitTerms: {
    version: "3.2.0",
    effectiveDate: "2026-10-03",
    path: "/apps/OverLit/terms-of-use/",
    sourcePath: "src/content/legal/overlit-terms-of-use.md",
  },
  takeMeSomewherePrivacy: {
    version: "1.1.0",
    effectiveDate: "2026-10-03",
    path: "/apps/TakeMeSomewhere/privacy-policy/",
    sourcePath: "src/content/legal/take-me-somewhere-privacy-policy.md",
  },
  takeMeSomewhereTerms: {
    version: "1.1.0",
    effectiveDate: "2026-10-03",
    path: "/apps/TakeMeSomewhere/terms-of-service/",
    sourcePath: "src/content/legal/take-me-somewhere-terms-of-service.md",
  },
  audioBookChoicesPrivacy: {
    version: "2.12.0",
    effectiveDate: "2026-10-03",
    path: "/apps/AudioBookChoices/privacy-policy/",
    sourcePath: "src/content/legal/audio-book-choices-privacy-policy.md",
  },
  audioBookChoicesTerms: {
    version: "2.5.0",
    effectiveDate: "2026-10-03",
    path: "/apps/AudioBookChoices/terms-of-use/",
    sourcePath: "src/content/legal/audio-book-choices-terms-of-use.md",
  },
};

/**
 * Published contact addresses, one per app.
 *
 * **This object is the only place an address is typed.** `src/config/site.ts`
 * reads it for every mailto and support block, and
 * `scripts/check-contact-emails.mjs` asserts that the legal documents under
 * `src/content/legal/` agree with it. Change a value here, run
 * `npm run check:contact`, and it names every Markdown line still carrying the
 * old address.
 *
 * Only *published* addresses belong here — the ones a reader writes to. The
 * accounts that own App Store Connect, Play Console, Firebase, Ads or Tenjin
 * are logins, not contacts; they are never published, never read from here, and
 * moving one is an account migration rather than an edit.
 *
 * The legal documents deliberately keep the literal address inline rather than
 * a placeholder: this repo is public and each document's own file history *is*
 * its archive, so a template token would make the archive stop showing what was
 * actually published on a given date. The checker is what keeps the copies
 * honest instead.
 *
 * Swapping an address is not finished in this repo. The store listings carry
 * their own support/marketing contact (App Store Connect, Play Console), and an
 * app that shows the address in its own UI has its own constant — AudioChoices
 * keeps it in `AppConfig.SUPPORT_EMAIL`.
 */
export const contactEmails = {
  /** The owner's business address. Default for anything without its own. */
  owner: "alekgameshelp2@gmail.com",
  site: "alekgameshelp2@gmail.com",
  planKept: "plankeptapp@gmail.com",
  voiceOfSelf: "voiceofselfapp@gmail.com",
  audioBookChoices: "audiochoicesaudiobooks@gmail.com",
  overLit: "alekgameshelp2@gmail.com",
  takeMeSomewhere: "alekgameshelp2@gmail.com",
};
