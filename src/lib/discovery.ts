import {
  planKeptAnswerPages,
  planKeptComparisonPages,
  planKeptContentHubs,
  planKeptUpdatePosts,
} from "../config/planKeptContent";
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
        "Personal site for Alek Jałtuszyk (Aleksander Jałtuszyk), a software engineer building AI systems, Unity tools, and current products.",
    },
    {
      title: "Apps",
      path: siteRoutes.apps.index.path,
      description:
        "Shared app directory for current products by Alek Jałtuszyk, including PlanKept, OverLit, and the outbound Voice of Self link.",
    },
    {
      title: "PlanKept",
      path: siteRoutes.apps.planKept.path,
      description:
        "Public PlanKept product page from Alek Jałtuszyk covering local-first plan enforcement, achievement-gated app blocking, Proof Review, analytics, and legal/support links.",
    },
    {
      title: "OverLit",
      path: siteRoutes.apps.overLit.path,
      description:
        "Small OverLit app page from Alek Jałtuszyk for the fast reflex grid game and its support and privacy links.",
    },
    {
      title: "OverLit Support",
      path: siteRoutes.apps.overLitSupport.path,
      description: "Email-based support instructions for OverLit.",
    },
    {
      title: planKeptContentHubs.answers.title,
      path: planKeptContentHubs.answers.path,
      description: planKeptContentHubs.answers.description,
    },
    {
      title: planKeptContentHubs.comparisons.title,
      path: planKeptContentHubs.comparisons.path,
      description: planKeptContentHubs.comparisons.description,
    },
    {
      title: planKeptContentHubs.updates.title,
      path: planKeptContentHubs.updates.path,
      description: planKeptContentHubs.updates.description,
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
  planKeptAnswers: planKeptAnswerPages.map((page) => ({
    title: page.title,
    path: page.path,
    description: page.description,
  })),
  planKeptComparisons: planKeptComparisonPages.map((page) => ({
    title: page.title,
    path: page.path,
    description: page.description,
  })),
  planKeptUpdates: planKeptUpdatePosts.map((post) => ({
    title: post.title,
    path: post.path,
    description: post.description,
  })),
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
      title: "OverLit Privacy Policy",
      path: siteRoutes.apps.overLitPrivacyPolicy.path,
      description:
        "How OverLit handles local gameplay data, support contact, in-app advertising, and external advertising campaigns.",
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
    {
      title: "Humans Summary",
      path: siteRoutes.humans.path,
      description:
        "Plain-text bio, name variants, and product overview for Alek Jałtuszyk / Aleksander Jałtuszyk.",
    },
  ],
} as const satisfies Record<string, readonly DiscoveryPage[]>;

export const sitemapPagePaths = [
  siteRoutes.home.path,
  siteRoutes.apps.index.path,
  siteRoutes.apps.planKept.path,
  siteRoutes.apps.overLit.path,
  siteRoutes.apps.overLitSupport.path,
  siteRoutes.apps.overLitPrivacyPolicy.path,
  siteRoutes.apps.planKeptAnswers.path,
  ...planKeptAnswerPages.map((page) => page.path),
  siteRoutes.apps.planKeptComparisons.path,
  ...planKeptComparisonPages.map((page) => page.path),
  siteRoutes.apps.planKeptUpdates.path,
  ...planKeptUpdatePosts.map((post) => post.path),
  siteRoutes.wishList.path,
  siteRoutes.planKept.support.path,
  siteRoutes.planKept.privacyPolicy.path,
  siteRoutes.planKept.termsOfService.path,
] as const;
