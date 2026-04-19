import { withBase } from "../lib/paths";

const createInternalRoute = (path: string) => ({
  path,
  href: withBase(path),
});

const createExternalRoute = (href: string) => ({
  href,
  external: true as const,
});

export const siteRoutes = {
  home: createInternalRoute("/"),
  planKept: {
    privacyPolicy: createInternalRoute("/PlanKept/privacy-policy/"),
    support: createInternalRoute("/PlanKept/support/"),
    termsOfService: createInternalRoute("/PlanKept/terms-of-service/"),
  },
  apps: {
    index: createInternalRoute("/apps/"),
    planKept: createInternalRoute("/apps/PlanKept/"),
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
    status: "Internal app page",
    description:
      "A local-first iPhone app that turns a written plan into reminders, app control, and proof-based follow-through.",
    theme: "coral",
    chips: [
      "Blocks or minute caps on device",
      "Proof review clears the plan",
      "Lives under /apps/PlanKept/",
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
    status: "External destination",
    description:
      "A separate product site that stays in its own repo and on its own domain, linked from the app directory.",
    theme: "mint",
    chips: [
      "Routes out to voiceofself.life",
      "Not copied into this repo",
      "Listed here so the app catalog stays complete",
    ],
    ctaLabel: "Visit Voice of Self",
    href: siteRoutes.apps.voiceOfSelf.href,
    routeLabel: siteRoutes.apps.voiceOfSelf.href,
    external: true,
  },
] as const satisfies readonly AppDirectoryItem[];
