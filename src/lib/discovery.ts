import {
  planKeptAnswerPages,
  planKeptComparisonPages,
  planKeptContentHubs,
  planKeptUpdatePosts,
} from "../config/planKeptContent";
import {
  getVisibilityAnswerPath,
  getVisibilityUpdatePath,
  visibilityAnswerHub,
  visibilityAnswerPages,
  visibilityUpdateHub,
  visibilityUpdatePosts,
} from "../voice-of-self/config/visibility";
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
        "Shared app directory for current products by Alek Jałtuszyk, including PlanKept, Voice of Self, OverLit, and Take Me Somewhere.",
    },
    {
      title: "PlanKept",
      path: siteRoutes.apps.planKept.path,
      description:
        "Public PlanKept product page from Alek Jałtuszyk covering local-first plan enforcement, achievement-gated app blocking, Proof Review, analytics, and legal/support links.",
    },
    {
      title: "Voice of Self",
      path: siteRoutes.apps.voiceOfSelf.path,
      description:
        "Public Voice of Self product page from Alek Jałtuszyk covering voice-first reflection, answers, updates, and legal/support links.",
    },
    {
      title: "OverLit",
      path: siteRoutes.apps.overLit.path,
      description:
        "Visual OverLit product page from Alek Jałtuszyk for the fast reflex iPhone arcade game, with launch CTA plus support and legal links.",
    },
    {
      title: "Take Me Somewhere",
      path: siteRoutes.apps.takeMeSomewhere.path,
      description:
        "Coming-soon Take Me Somewhere product page from Alek Jałtuszyk for spontaneous, time-boxed local route discovery with Compass Mode, Route Mode, and map-grounded outings.",
    },
    {
      title: "Voice of Self Support",
      path: siteRoutes.apps.voiceOfSelfSupport.path,
      description: "Email-based support instructions for Voice of Self.",
    },
    {
      title: "Take Me Somewhere Support",
      path: siteRoutes.apps.takeMeSomewhereSupport.path,
      description: "Email-based support instructions for Take Me Somewhere.",
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
  voiceOfSelfAnswers: [
    {
      title: visibilityAnswerHub.title,
      path: visibilityAnswerHub.path,
      description: visibilityAnswerHub.description,
    },
    ...visibilityAnswerPages.map((page) => ({
      title: page.title,
      path: getVisibilityAnswerPath(page.slug),
      description: page.description,
    })),
  ],
  voiceOfSelfUpdates: [
    {
      title: visibilityUpdateHub.title,
      path: visibilityUpdateHub.path,
      description: visibilityUpdateHub.description,
    },
    ...visibilityUpdatePosts.map((post) => ({
      title: post.title,
      path: getVisibilityUpdatePath(post.slug),
      description: post.description,
    })),
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
      title: "Voice of Self Privacy Policy",
      path: siteRoutes.apps.voiceOfSelfPrivacyPolicy.path,
      description:
        "How Voice of Self handles website, support, account, subscription, AI processing, and app-related data.",
    },
    {
      title: "Voice of Self Terms of Service",
      path: siteRoutes.apps.voiceOfSelfTermsOfService.path,
      description:
        "Terms covering Voice of Self app, website, subscriptions, managed AI features, support, and acceptable use.",
    },
    {
      title: "OverLit Privacy Policy",
      path: siteRoutes.apps.overLitPrivacyPolicy.path,
      description:
        "How OverLit handles local gameplay data, support contact, AdMob ads, local developer house ads, privacy choices, and App Store privacy disclosures.",
    },
    {
      title: "OverLit Terms of Use",
      path: siteRoutes.apps.overLitTermsOfUse.path,
      description:
        "Terms covering OverLit app, website, support, advertising, rewarded unlocks, local progress, acceptable use, and third-party services.",
    },
    {
      title: "Take Me Somewhere Privacy Policy",
      path: siteRoutes.apps.takeMeSomewherePrivacyPolicy.path,
      description:
        "How Take Me Somewhere handles current location, route requests, local preferences, map providers, support contact, and privacy rights.",
    },
    {
      title: "Take Me Somewhere Terms of Service",
      path: siteRoutes.apps.takeMeSomewhereTerms.path,
      description:
        "Terms covering Take Me Somewhere app and website use, route safety, map providers, Apple terms, privacy, support, and acceptable use.",
    },
    {
      title: "Take Me Somewhere Legal Manifest",
      path: siteRoutes.apps.takeMeSomewhereLegalManifest.path,
      description:
        "Machine-readable Take Me Somewhere legal document versions, effective dates, and canonical URLs.",
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
  siteRoutes.apps.voiceOfSelf.path,
  siteRoutes.apps.voiceOfSelfSupport.path,
  siteRoutes.apps.voiceOfSelfAnswers.path,
  ...visibilityAnswerPages.map((page) => getVisibilityAnswerPath(page.slug)),
  siteRoutes.apps.voiceOfSelfUpdates.path,
  ...visibilityUpdatePosts.map((post) => getVisibilityUpdatePath(post.slug)),
  siteRoutes.apps.voiceOfSelfPrivacyPolicy.path,
  siteRoutes.apps.voiceOfSelfTermsOfService.path,
  siteRoutes.apps.overLit.path,
  siteRoutes.apps.overLitSupport.path,
  siteRoutes.apps.overLitPrivacyPolicy.path,
  siteRoutes.apps.overLitTermsOfUse.path,
  siteRoutes.apps.takeMeSomewhere.path,
  siteRoutes.apps.takeMeSomewhereSupport.path,
  siteRoutes.apps.takeMeSomewherePrivacyPolicy.path,
  siteRoutes.apps.takeMeSomewhereTerms.path,
  siteRoutes.apps.takeMeSomewhereLegalManifest.path,
  siteRoutes.apps.planKeptAnswers.path,
  ...planKeptAnswerPages.map((page) => page.path),
  siteRoutes.apps.planKeptComparisons.path,
  ...planKeptComparisonPages.map((page) => page.path),
  siteRoutes.apps.planKeptUpdates.path,
  ...planKeptUpdatePosts.map((post) => post.path),
  siteRoutes.planKept.support.path,
  siteRoutes.planKept.privacyPolicy.path,
  siteRoutes.planKept.termsOfService.path,
] as const;
