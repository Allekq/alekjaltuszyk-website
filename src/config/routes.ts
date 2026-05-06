import { withBase } from "../lib/paths";

const createInternalRoute = (path: string) => ({
  path,
  href: withBase(path),
});

const createExternalRoute = (href: string) => ({
  href,
  external: true as const,
});

const planKeptBasePath = "/apps/PlanKept/";

export const planKeptContentPaths = {
  answersIndex: `${planKeptBasePath}answers/`,
  answer: (slug: string) => `${planKeptBasePath}answers/${slug}/`,
  comparisonsIndex: `${planKeptBasePath}compare/`,
  comparison: (slug: string) => `${planKeptBasePath}compare/${slug}/`,
  updatesIndex: `${planKeptBasePath}updates/`,
  update: (slug: string) => `${planKeptBasePath}updates/${slug}/`,
  updatesFeed: `${planKeptBasePath}updates/feed.xml`,
} as const;

export const siteRoutes = {
  home: createInternalRoute("/"),
  planKept: {
    privacyPolicy: createInternalRoute("/PlanKept/privacy-policy/"),
    support: createInternalRoute("/PlanKept/support/"),
    termsOfService: createInternalRoute("/PlanKept/terms-of-service/"),
  },
  apps: {
    index: createInternalRoute("/apps/"),
    planKept: createInternalRoute(planKeptBasePath),
    planKeptAnswers: createInternalRoute(planKeptContentPaths.answersIndex),
    planKeptComparisons: createInternalRoute(planKeptContentPaths.comparisonsIndex),
    planKeptUpdates: createInternalRoute(planKeptContentPaths.updatesIndex),
    planKeptUpdatesFeed: createInternalRoute(planKeptContentPaths.updatesFeed),
    voiceOfSelf: createExternalRoute("https://voiceofself.life"),
  },
  wishList: createInternalRoute("/wish-list/"),
  support: createInternalRoute("/support/"),
  privacyPolicy: createInternalRoute("/privacy-policy/"),
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
  eyebrow: string;
  status: string;
  description: string;
  theme: AppCardTheme;
  chips: readonly string[];
  ctaLabel: string;
  href: string;
  routeLabel: string;
  external: boolean;
}

export const appDirectory = [
  {
    id: "plankept",
    name: "PlanKept",
    eyebrow: "On this domain",
    status: "Product page here",
    description:
      "An achievement-gated iPhone app blocker that keeps distracting apps blocked until real-world goals are completed.",
    theme: "coral",
    chips: [
      "Unlock after steps or workouts",
      "Recurring habit quotas",
      "Proof-based follow-through",
    ],
    ctaLabel: "Open PlanKept",
    href: siteRoutes.apps.planKept.href,
    routeLabel: siteRoutes.apps.planKept.path,
    external: false,
  },
  {
    id: "voice-of-self",
    name: "Voice of Self",
    eyebrow: "Separate website",
    status: "Live on the App Store",
    description:
      "A launched voice-first reflection app for noticing personal growth and resolved worries over time.",
    theme: "mint",
    chips: [
      "Voice-first reflection",
      "Live iOS app",
      "Opens voiceofself.life",
    ],
    ctaLabel: "Visit Voice of Self",
    href: siteRoutes.apps.voiceOfSelf.href,
    routeLabel: siteRoutes.apps.voiceOfSelf.href,
    external: true,
  },
] as const satisfies readonly AppDirectoryItem[];
