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
import { appNameList } from "./appState";
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
      description: `Shared app directory for current products by Alek Jałtuszyk: ${appNameList}.`,
    },
    {
      title: "PlanKept",
      path: siteRoutes.apps.planKept.path,
      description:
        "Public PlanKept product page from Alek Jałtuszyk covering local-first plan enforcement, achievement-gated app blocking, Proof Review, analytics, and app-specific legal/support links.",
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
        "Visual OverLit product page from Alek Jałtuszyk for the released fast-reflex iPhone arcade game, with a playable browser demo of the grid, the fresh/warning/critical/burnout cell states, level twists, arcade families, App Store link, and support and legal links.",
    },
    {
      title: "Take Me Somewhere",
      path: siteRoutes.apps.takeMeSomewhere.path,
      description:
        "Take Me Somewhere product page from Alek Jałtuszyk for the launched spontaneous, time-boxed local route discovery app with Compass Mode, Route Mode, and map-grounded outings.",
    },
    {
      title: "Voice of Self Support",
      path: siteRoutes.apps.voiceOfSelfSupport.path,
      description: "Email-based support instructions for Voice of Self.",
    },
    {
      title: "PlanKept Support",
      path: siteRoutes.apps.planKeptSupport.path,
      description: "Email-based support instructions for PlanKept.",
    },
    {
      title: "Take Me Somewhere Support",
      path: siteRoutes.apps.takeMeSomewhereSupport.path,
      description: "Email-based support instructions for Take Me Somewhere.",
    },
    {
      title: "AudioChoices",
      path: siteRoutes.apps.audioBookChoices.path,
      description:
        "AudioChoices product page from Alek Jałtuszyk for the interactive 'choose your story' audiobook app on the App Store, with a playable sample of the Yes/No choice moment, the branching story tree, hands-free answering, access tiers, and legal links.",
    },
    {
      title: "OverLit Support",
      path: siteRoutes.apps.overLitSupport.path,
      description: "Email-based support instructions for OverLit.",
    },
    {
      title: "AudioChoices Support",
      path: siteRoutes.apps.audioBookChoicesSupport.path,
      description: "Email-based support instructions for AudioChoices.",
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
      path: siteRoutes.support.path,
      description: "Support directory for apps by Alek Jałtuszyk.",
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
      title: "Legal",
      path: siteRoutes.legal.path,
      description: `Legal hub listing the general website privacy policy and terms plus app-specific legal pages for ${appNameList}.`,
    },
    {
      title: "Website Privacy Policy",
      path: siteRoutes.privacyPolicy.path,
      description:
        "How the alekjaltuszyk.xyz personal website, app directory, support index, legal hub, and static website surfaces handle data.",
    },
    {
      title: "Website Terms",
      path: siteRoutes.terms.path,
      description:
        "Terms for the alekjaltuszyk.xyz personal website, app directory, support index, legal hub, and static website surfaces.",
    },
    {
      title: "PlanKept Privacy Policy",
      path: siteRoutes.apps.planKeptPrivacyPolicy.path,
      description:
        "How PlanKept handles local-first app data, support contact, App Store flows, AI/model routes, Health data, and Screen Time permissions.",
    },
    {
      title: "PlanKept Terms of Service",
      path: siteRoutes.apps.planKeptTermsOfService.path,
      description:
        "Terms covering PlanKept, support, App Store flows, AI/model routes, app blocking, reminders, Apple Health, Screen Time, and acceptable use.",
    },
    {
      title: "PlanKept Legal Manifest",
      path: siteRoutes.apps.planKeptLegalManifest.path,
      description:
        "Machine-readable PlanKept legal document versions, effective dates, and canonical URLs.",
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
      title: "How Voice of Self Uses AI",
      path: siteRoutes.apps.voiceOfSelfHowUsesAI.path,
      description:
        "Hosted AI-use explainer covering Voice of Self managed AI routing, local audio handling, retention limits, metadata, and professional-service disclaimers.",
    },
    {
      title: "Voice of Self Legal Manifest",
      path: siteRoutes.apps.voiceOfSelfLegalManifest.path,
      description:
        "Machine-readable Voice of Self legal document versions, effective dates, AI-use body, and canonical URLs.",
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
      title: "OverLit Legal Manifest",
      path: siteRoutes.apps.overLitLegalManifest.path,
      description:
        "Machine-readable OverLit legal document versions, effective dates, and canonical URLs.",
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
      title: "AudioChoices Privacy Policy",
      path: siteRoutes.apps.audioBookChoicesPrivacyPolicy.path,
      description:
        "How AudioChoices handles data: no account and no name, email address or phone number, but an anonymous installation identifier that purchases and ratings are stored against; progress, settings and self-declared age stay on the device; no third-party analytics, advertising, crash reporting or cross-app tracking, and a short list of anonymous per-book milestones sent to the developer's own server that Settings turns off; optional on-device headphone motion for the head-nod feature.",
    },
    {
      title: "AudioChoices Terms of Use",
      path: siteRoutes.apps.audioBookChoicesTermsOfUse.path,
      description:
        "Terms covering AudioChoices content licensing for personal listening, free unlocks, single-book purchases, the All Access subscription, AI narration, no warranty, and contact.",
    },
    {
      title: "AudioChoices Legal Manifest",
      path: siteRoutes.apps.audioBookChoicesLegalManifest.path,
      description:
        "Machine-readable AudioChoices legal document versions, effective dates, and canonical URLs.",
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
  siteRoutes.apps.voiceOfSelfHowUsesAI.path,
  siteRoutes.apps.voiceOfSelfLegalManifest.path,
  siteRoutes.support.path,
  siteRoutes.legal.path,
  siteRoutes.privacyPolicy.path,
  siteRoutes.terms.path,
  siteRoutes.apps.overLit.path,
  siteRoutes.apps.overLitSupport.path,
  siteRoutes.apps.overLitPrivacyPolicy.path,
  siteRoutes.apps.overLitDataDeletion.path,
  siteRoutes.apps.overLitTermsOfUse.path,
  siteRoutes.apps.overLitLegalManifest.path,
  siteRoutes.apps.takeMeSomewhere.path,
  siteRoutes.apps.takeMeSomewhereSupport.path,
  siteRoutes.apps.takeMeSomewherePrivacyPolicy.path,
  siteRoutes.apps.takeMeSomewhereTerms.path,
  siteRoutes.apps.takeMeSomewhereLegalManifest.path,
  siteRoutes.apps.audioBookChoices.path,
  siteRoutes.apps.audioBookChoicesSupport.path,
  siteRoutes.apps.audioBookChoicesPrivacyPolicy.path,
  siteRoutes.apps.audioBookChoicesDataDeletion.path,
  siteRoutes.apps.audioBookChoicesTermsOfUse.path,
  siteRoutes.apps.audioBookChoicesLegalManifest.path,
  siteRoutes.apps.planKeptSupport.path,
  siteRoutes.apps.planKeptPrivacyPolicy.path,
  siteRoutes.apps.planKeptTermsOfService.path,
  siteRoutes.apps.planKeptLegalManifest.path,
  siteRoutes.apps.planKeptAnswers.path,
  ...planKeptAnswerPages.map((page) => page.path),
  siteRoutes.apps.planKeptComparisons.path,
  ...planKeptComparisonPages.map((page) => page.path),
  siteRoutes.apps.planKeptUpdates.path,
  ...planKeptUpdatePosts.map((post) => post.path),
] as const;
