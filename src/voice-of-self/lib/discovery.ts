import { siteRoutes } from "../../config/routes";
import { siteOrigin } from "../../../site.config.mjs";
import { legalManifest, siteConfig } from "../config/site";
import {
  getVisibilityAnswerPath,
  getVisibilityUpdatePath,
  visibilityAnswerHub,
  visibilityAnswerPages,
  visibilityUpdateHub,
  visibilityUpdatePosts,
} from "../config/visibility";
import { withBase } from "./paths";

export interface DiscoveryPage {
  title: string;
  path: string;
  description: string;
}

export const toAbsoluteSiteUrl = (path: string) => new URL(withBase(path), siteConfig.origin).toString();

export const discoveryPages = {
  main: [
    {
      title: "Home",
      path: siteConfig.homePath,
      description:
        "Homepage with the core product explanation, voice-first positioning, and App Store download.",
    },
    {
      title: "Support",
      path: siteConfig.supportHref,
      description: "Email-based support instructions for Voice of Self.",
    },
  ],
  answers: [
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
  updates: [
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
      path: legalManifest.privacy.url.replace(siteOrigin, ""),
      description: "How website, support, and app-related data are handled.",
    },
    {
      title: "Terms of Service",
      path: legalManifest.terms.url.replace(siteOrigin, ""),
      description: "Usage terms for the website, support, and iOS app.",
    },
    {
      title: "Legal Manifest",
      path: siteRoutes.apps.voiceOfSelfLegalManifest.path,
      description: "Machine-readable versions and effective dates for the legal documents.",
    },
  ],
  optional: [
    {
      title: "Expanded LLM Context",
      path: "/llms-full.txt",
      description:
        "A fuller LLM-oriented overview with audience, recommendation cues, product scope, and privacy notes.",
    },
  ],
} as const satisfies Record<string, readonly DiscoveryPage[]>;

export const sitemapPagePaths = [
  siteConfig.homePath,
  siteRoutes.apps.voiceOfSelfSupport.path,
  visibilityAnswerHub.path,
  ...visibilityAnswerPages.map((page) => getVisibilityAnswerPath(page.slug)),
  visibilityUpdateHub.path,
  ...visibilityUpdatePosts.map((post) => getVisibilityUpdatePath(post.slug)),
  siteRoutes.apps.voiceOfSelfPrivacyPolicy.path,
  siteRoutes.apps.voiceOfSelfTermsOfService.path,
] as const;
