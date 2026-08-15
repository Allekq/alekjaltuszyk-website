import { withBase } from "../lib/paths";

const createInternalRoute = (path: string) => ({
  path,
  href: withBase(path),
});

const planKeptBasePath = "/apps/PlanKept/";
const overLitBasePath = "/apps/OverLit/";
const takeMeSomewhereBasePath = "/apps/TakeMeSomewhere/";
const voiceOfSelfBasePath = "/apps/VoiceOfSelf/";
const audioBookChoicesBasePath = "/apps/AudioBookChoices/";
const takeMeSomewhereAppStoreHref =
  "https://apps.apple.com/pl/app/take-me-somewhere/id6776450751";

export const planKeptContentPaths = {
  answersIndex: `${planKeptBasePath}answers/`,
  answer: (slug: string) => `${planKeptBasePath}answers/${slug}/`,
  comparisonsIndex: `${planKeptBasePath}compare/`,
  comparison: (slug: string) => `${planKeptBasePath}compare/${slug}/`,
  legalManifest: `${planKeptBasePath}legal-manifest.json`,
  privacyPolicy: `${planKeptBasePath}privacy-policy/`,
  support: `${planKeptBasePath}support/`,
  termsOfService: `${planKeptBasePath}terms-of-service/`,
  updatesIndex: `${planKeptBasePath}updates/`,
  update: (slug: string) => `${planKeptBasePath}updates/${slug}/`,
  updatesFeed: `${planKeptBasePath}updates/feed.xml`,
} as const;

export const voiceOfSelfContentPaths = {
  answersIndex: `${voiceOfSelfBasePath}answers/`,
  answer: (slug: string) => `${voiceOfSelfBasePath}answers/${slug}/`,
  updatesIndex: `${voiceOfSelfBasePath}updates/`,
  update: (slug: string) => `${voiceOfSelfBasePath}updates/${slug}/`,
  support: `${voiceOfSelfBasePath}support/`,
  privacyPolicy: `${voiceOfSelfBasePath}privacy-policy/`,
  termsOfService: `${voiceOfSelfBasePath}terms-of-service/`,
  howVoiceOfSelfUsesAI: `${voiceOfSelfBasePath}how-voice-of-self-uses-ai/`,
  legalManifest: `${voiceOfSelfBasePath}legal-manifest.json`,
} as const;

export const siteRoutes = {
  home: createInternalRoute("/"),
  planKept: {
    privacyPolicy: createInternalRoute(planKeptContentPaths.privacyPolicy),
    support: createInternalRoute(planKeptContentPaths.support),
    termsOfService: createInternalRoute(planKeptContentPaths.termsOfService),
    legalManifest: createInternalRoute(planKeptContentPaths.legalManifest),
    legacyPrivacyPolicy: createInternalRoute("/PlanKept/privacy-policy/"),
    legacySupport: createInternalRoute("/PlanKept/support/"),
    legacyTermsOfService: createInternalRoute("/PlanKept/terms-of-service/"),
  },
  apps: {
    index: createInternalRoute("/apps/"),
    planKept: createInternalRoute(planKeptBasePath),
    planKeptAnswers: createInternalRoute(planKeptContentPaths.answersIndex),
    planKeptComparisons: createInternalRoute(planKeptContentPaths.comparisonsIndex),
    planKeptLegalManifest: createInternalRoute(planKeptContentPaths.legalManifest),
    planKeptPrivacyPolicy: createInternalRoute(planKeptContentPaths.privacyPolicy),
    planKeptSupport: createInternalRoute(planKeptContentPaths.support),
    planKeptTermsOfService: createInternalRoute(planKeptContentPaths.termsOfService),
    planKeptUpdates: createInternalRoute(planKeptContentPaths.updatesIndex),
    planKeptUpdatesFeed: createInternalRoute(planKeptContentPaths.updatesFeed),
    overLit: createInternalRoute(overLitBasePath),
    overLitLegalManifest: createInternalRoute(`${overLitBasePath}legal-manifest.json`),
    overLitPrivacyPolicy: createInternalRoute(`${overLitBasePath}privacy-policy/`),
    /* Linked from the Google Play store listing as the data deletion URL. Must stay reachable
       without installing the app, and must not be folded into the privacy policy as an anchor. */
    overLitDataDeletion: createInternalRoute(`${overLitBasePath}delete-data/`),
    overLitSupport: createInternalRoute(`${overLitBasePath}support/`),
    overLitTermsOfUse: createInternalRoute(`${overLitBasePath}terms-of-use/`),
    takeMeSomewhere: createInternalRoute(takeMeSomewhereBasePath),
    takeMeSomewhereLegalManifest: createInternalRoute(`${takeMeSomewhereBasePath}legal-manifest.json`),
    takeMeSomewherePrivacyPolicy: createInternalRoute(`${takeMeSomewhereBasePath}privacy-policy/`),
    takeMeSomewhereSupport: createInternalRoute(`${takeMeSomewhereBasePath}support/`),
    takeMeSomewhereTerms: createInternalRoute(`${takeMeSomewhereBasePath}terms-of-service/`),
    voiceOfSelf: createInternalRoute(voiceOfSelfBasePath),
    voiceOfSelfAnswers: createInternalRoute(voiceOfSelfContentPaths.answersIndex),
    voiceOfSelfUpdates: createInternalRoute(voiceOfSelfContentPaths.updatesIndex),
    voiceOfSelfSupport: createInternalRoute(voiceOfSelfContentPaths.support),
    voiceOfSelfPrivacyPolicy: createInternalRoute(voiceOfSelfContentPaths.privacyPolicy),
    voiceOfSelfTermsOfService: createInternalRoute(voiceOfSelfContentPaths.termsOfService),
    voiceOfSelfHowUsesAI: createInternalRoute(voiceOfSelfContentPaths.howVoiceOfSelfUsesAI),
    voiceOfSelfLegalManifest: createInternalRoute(voiceOfSelfContentPaths.legalManifest),
    audioBookChoices: createInternalRoute(audioBookChoicesBasePath),
    audioBookChoicesLegalManifest: createInternalRoute(`${audioBookChoicesBasePath}legal-manifest.json`),
    audioBookChoicesPrivacyPolicy: createInternalRoute(`${audioBookChoicesBasePath}privacy-policy/`),
    /* Same role as `overLitDataDeletion`: the Play listing's data deletion URL. */
    audioBookChoicesDataDeletion: createInternalRoute(`${audioBookChoicesBasePath}delete-data/`),
    audioBookChoicesTermsOfUse: createInternalRoute(`${audioBookChoicesBasePath}terms-of-use/`),
    /* Given to Apple in App Store Connect's "Age Suitability URL" field. Informational, like the
       deletion page above: it must never gain a `legalDocuments` entry, a version or a masthead. */
    audioBookChoicesAgeSuitability: createInternalRoute(`${audioBookChoicesBasePath}age-suitability/`),
    audioBookChoicesSupport: createInternalRoute(`${audioBookChoicesBasePath}support/`),
  },
  support: createInternalRoute("/support/"),
  privacyPolicy: createInternalRoute("/privacy-policy/"),
  legal: createInternalRoute("/legal/"),
  terms: createInternalRoute("/terms/"),
  termsOfService: createInternalRoute("/terms-of-service/"),
  legalManifest: createInternalRoute("/legal-manifest.json"),
  sitemap: createInternalRoute("/sitemap.xml"),
  robots: createInternalRoute("/robots.txt"),
  llms: createInternalRoute("/llms.txt"),
  llmsFull: createInternalRoute("/llms-full.txt"),
  humans: createInternalRoute("/humans.txt"),
} as const;

export type AppCardTheme = "coral" | "mint";

/**
 * "released" means the app is downloadable from a public store today.
 * Anything else must never be described as available, live, or downloadable.
 */
export type AppReleaseStage = "released" | "unreleased";

export type AppPlatform = "iOS" | "Android";

export interface AppDirectoryItem {
  id: string;
  /** The full store record, for cards, titles, and structured data. */
  name: string;
  /**
   * Optional. The same app said out loud, for sentences. Defaults to `name`,
   * and only needs setting where the store name carries a subtitle —
   * "AudioChoices: Audiobooks" is a title, not something you can drop into the
   * middle of a list of apps.
   */
  shortName?: string;
  description: string;
  /** One short sentence about the product problem, used in derived homepage copy. */
  focus: string;
  /** The app in one line, in its own voice. Used as the showcase headline. */
  pitch: string;
  /** Optional accent. Defaults to alternating coral/mint down the list. */
  theme?: AppCardTheme;
  chips: readonly string[];
  href: string;
  /**
   * App icon, base-path safe. Carried here so the showcase needs no lookup
   * table. Point it at the 480px derivative, not the 1024 master — the showcase
   * never draws it larger than ~150 CSS pixels.
   */
  iconHref: string;
  external: boolean;
  releaseStage: AppReleaseStage;
  platforms: readonly AppPlatform[];
}

/**
 * Single source of truth for the app portfolio.
 *
 * Counts, numerals, plurals, and app-name lists in public copy are derived from
 * this array in `src/lib/appState.ts`. Adding an app here updates the wording
 * across the site with no prose edits.
 *
 * ── Adding an app ──────────────────────────────────────────────────────────
 *
 * 1. Add an entry below. Required: `id`, `name`, `description`, `focus`,
 *    `pitch`, `chips`, `href`, `iconHref`, `external`, `releaseStage`,
 *    `platforms`. `shortName` and `theme` are optional and default sensibly.
 * 2. Drop the icon at `public/media/apps/<id>/` and point `iconHref` at it
 *    through `withBase()`.
 * 3. If the app gets pages on this domain, add its routes to `siteRoutes.apps`
 *    above, its legal versions to `site.config.mjs`, and its pages to
 *    `src/lib/discovery.ts` so the sitemap and LLM files stay current.
 *
 * That is the whole list. The homepage count, the "N apps" phrasing, the
 * release sentence, the /apps showcase beat, the grid card, `humans.txt` and
 * `llms.txt` all follow on their own. Do not edit prose to match — if a
 * sentence needs a new derived phrase, add it to `src/lib/appState.ts`.
 *
 * `releaseStage: "released"` means downloadable from a public store today, and
 * `platforms` means where it can be installed today, not where it is heading.
 */

export const appDirectory = [
  {
    id: "plankept",
    name: "PlanKept",
    shortName: "PlanKept",
    description:
      "A local-first plan-enforcement app that pairs reminders, app friction, proof-aware completion, and analytics.",
    focus:
      "PlanKept is about follow-through, iOS integration, and plan enforcement.",
    pitch: "Your plan, enforced.",
    theme: "coral",
    chips: [
      "Unlock after steps or workouts",
      "Proof Review",
      "No subscription",
    ],
    href: siteRoutes.apps.planKept.href,
    iconHref: withBase("/media/apps/plankept/app-icon-480.jpg"),
    external: false,
    releaseStage: "released",
    platforms: ["iOS"],
  },
  {
    id: "overlit",
    name: "OverLit",
    shortName: "OverLit",
    description:
      "A fast reflex arcade game for iPhone about keeping a pressure-filled grid alive.",
    focus:
      "OverLit is a compact game-design project with ad-supported play.",
    pitch: "Keep the grid alive.",
    theme: "mint",
    chips: [
      "Level-based arcade",
      "Pressure-state gameplay",
      "Ad-supported free play",
    ],
    href: siteRoutes.apps.overLit.href,
    iconHref: withBase("/media/apps/overlit/app-icon-480.jpg"),
    external: false,
    releaseStage: "released",
    platforms: ["iOS"],
  },
  {
    id: "voice-of-self",
    name: "Voice of Self",
    shortName: "Voice of Self",
    description:
      "A launched voice-first reflection app for noticing personal growth and resolved worries over time.",
    focus: "Voice of Self is about reflection memory and managed AI.",
    pitch: "Say it out loud, then watch it change.",
    theme: "mint",
    chips: [
      "Voice-first reflection",
      "Live iOS app",
      "Reflection memory",
    ],
    href: siteRoutes.apps.voiceOfSelf.href,
    iconHref: withBase("/media/apps/voice-of-self/app-icon-480.jpg"),
    external: false,
    releaseStage: "released",
    platforms: ["iOS"],
  },
  {
    id: "take-me-somewhere",
    name: "Take Me Somewhere",
    shortName: "Take Me Somewhere",
    description:
      "A launched iPhone companion for spontaneous, time-boxed local outings with map-grounded routes.",
    focus:
      "Take Me Somewhere is a quick, smooth route-discovery experience.",
    pitch: "You have ninety minutes. Go.",
    theme: "coral",
    chips: [
      "Live iOS app",
      "Time-boxed outings",
      "Compass Mode",
    ],
    href: takeMeSomewhereAppStoreHref,
    iconHref: withBase("/media/apps/take-me-somewhere/app-icon-480.jpg"),
    external: true,
    releaseStage: "released",
    platforms: ["iOS"],
  },
  {
    id: "audio-book-choices",
    name: "AudioChoices: Audiobooks",
    shortName: "AudioChoices",
    description:
      "An interactive 'choose your story' audiobook app where you steer narrated stories with Yes/No choices.",
    focus:
      "AudioChoices is an interactive audiobook where the listener steers the story.",
    pitch: "Every story here listens back.",
    theme: "mint",
    chips: [
      "Branching story tree",
      "Tap or nod to choose",
      "Many free unlocks",
    ],
    href: siteRoutes.apps.audioBookChoices.href,
    iconHref: withBase("/media/apps/audio-book-choices/app-icon-480.jpg"),
    external: false,
    releaseStage: "released",
    /* iOS only for now. The Android build is real but unlisted, and claiming
       Android here would widen "iPhone apps" to "mobile apps" across the whole
       site for a store page nobody can open yet. */
    platforms: ["iOS"],
  },
] as const satisfies readonly AppDirectoryItem[];
