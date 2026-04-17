import { siteConfig } from "../config/site";
import { siteRoutes } from "../config/routes";
import { withBase } from "./paths";

export interface DiscoveryPage {
  title: string;
  path: string;
  description: string;
}

export const toAbsoluteSiteUrl = (path: string) =>
  new URL(withBase(path), siteConfig.origin).toString();

export const discoveryPages = {
  main: [
    {
      title: "Home",
      path: siteRoutes.home.path,
      description:
        "Minimal personal homepage for Alek Jałtuszyk with the shared app chooser.",
    },
    {
      title: "Apps",
      path: siteRoutes.apps.index.path,
      description:
        "Shared app chooser with the same two primary app links shown on the homepage.",
    },
    {
      title: "PlanKept",
      path: siteRoutes.apps.planKept.path,
      description:
        "Minimal PlanKept page under /apps/PlanKept/ with legal links.",
    },
    {
      title: "Wish List",
      path: siteRoutes.wishList.path,
      description: "Current placeholder sign-up route and email fallback for product interest.",
    },
    {
      title: "Support",
      path: siteRoutes.support.path,
      description: "Email-based support instructions for PlanKept.",
    },
  ],
  legal: [
    {
      title: "Privacy Policy",
      path: siteRoutes.privacyPolicy.path,
      description: "How PlanKept handles website, support, and future app-related data.",
    },
    {
      title: "Terms of Service",
      path: siteRoutes.termsOfService.path,
      description: "Usage terms for the website, support flows, and future app access.",
    },
    {
      title: "Legal Manifest",
      path: siteRoutes.legalManifest.path,
      description: "Machine-readable legal document versions and effective dates.",
    },
  ],
  optional: [
    {
      title: "Expanded LLM Context",
      path: siteRoutes.llmsFull.path,
      description:
        "A fuller LLM-oriented overview with site structure, current app routing, and PlanKept context.",
    },
  ],
} as const satisfies Record<string, readonly DiscoveryPage[]>;

export const sitemapPagePaths = [
  siteRoutes.home.path,
  siteRoutes.apps.index.path,
  siteRoutes.apps.planKept.path,
  siteRoutes.wishList.path,
  siteRoutes.support.path,
  siteRoutes.privacyPolicy.path,
  siteRoutes.termsOfService.path,
] as const;
