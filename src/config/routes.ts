import { withBase } from "../lib/paths";

const createInternalRoute = (path: string) => ({
  path,
  href: withBase(path),
});

const planKeptBasePath = "/apps/PlanKept/";
const overLitBasePath = "/apps/OverLit/";
const takeMeSomewhereBasePath = "/apps/TakeMeSomewhere/";
const voiceOfSelfBasePath = "/apps/VoiceOfSelf/";
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
    overLitPrivacyPolicy: createInternalRoute(`${overLitBasePath}privacy-policy/`),
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

export interface AppDirectoryItem {
  id: string;
  name: string;
  description: string;
  theme: AppCardTheme;
  chips: readonly string[];
  href: string;
  external: boolean;
}

export const appDirectory = [
  {
    id: "plankept",
    name: "PlanKept",
    description:
      "A local-first plan-enforcement app that pairs reminders, app friction, proof-aware completion, and analytics.",
    theme: "coral",
    chips: [
      "Unlock after steps or workouts",
      "Proof Review",
      "No subscription",
    ],
    href: siteRoutes.apps.planKept.href,
    external: false,
  },
  {
    id: "overlit",
    name: "OverLit",
    description:
      "A fast reflex arcade game for iPhone about keeping a pressure-filled grid alive.",
    theme: "mint",
    chips: [
      "Level-based arcade",
      "Pressure-state gameplay",
      "Ad-supported free play",
    ],
    href: siteRoutes.apps.overLit.href,
    external: false,
  },
  {
    id: "voice-of-self",
    name: "Voice of Self",
    description:
      "A launched voice-first reflection app for noticing personal growth and resolved worries over time.",
    theme: "mint",
    chips: [
      "Voice-first reflection",
      "Live iOS app",
      "Reflection memory",
    ],
    href: siteRoutes.apps.voiceOfSelf.href,
    external: false,
  },
  {
    id: "take-me-somewhere",
    name: "Take Me Somewhere",
    description:
      "A launched iPhone companion for spontaneous, time-boxed local outings with map-grounded routes.",
    theme: "coral",
    chips: [
      "Live iOS app",
      "Time-boxed outings",
      "Compass Mode",
    ],
    href: takeMeSomewhereAppStoreHref,
    external: true,
  },
] as const satisfies readonly AppDirectoryItem[];
