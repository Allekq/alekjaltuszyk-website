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
        "Simple PlanKept product page covering local-first plan enforcement, proof review, and legal/support links.",
    },
    {
      title: "Wish List",
      path: siteRoutes.wishList.path,
      description: "PlanKept wish-list guide with a live external form and email fallback.",
    },
    {
      title: "Support",
      path: siteRoutes.planKept.support.path,
      description: "Email-based support instructions for PlanKept.",
    },
  ],
  legal: [
    {
      title: "Privacy Policy",
      path: siteRoutes.planKept.privacyPolicy.path,
      description: "How PlanKept handles website, support, and future app-related data.",
    },
    {
      title: "Terms of Service",
      path: siteRoutes.planKept.termsOfService.path,
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
  siteRoutes.planKept.support.path,
  siteRoutes.planKept.privacyPolicy.path,
  siteRoutes.planKept.termsOfService.path,
] as const;
