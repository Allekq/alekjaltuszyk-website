import { appDirectory, siteRoutes } from "./routes";
import {
  legalDocuments,
  siteDomain,
  siteOrigin,
} from "../../site.config.mjs";

const contactEmail = "alekgameshelp2@gmail.com";
const supportEmail = contactEmail;
const wishListEmail = contactEmail;
const wishListSubject = "PlanKept wish list";
const wishListDraftLines = [
  "Hi,",
  "",
  "I want to join the PlanKept wish list.",
  "",
  "What I care about most:",
  "[short note]",
  "",
];
const supportSubject = "PlanKept support";
const supportDraftLines = [
  "Hi,",
  "",
  "I need help with PlanKept.",
  "",
  "What happened:",
  "[brief description]",
  "",
  "What I expected instead:",
  "[brief description]",
  "",
  "Device and OS version (optional):",
  "[example: iPhone 16, iOS 19.0]",
  "",
];
const wishListBody = wishListDraftLines.join("\r\n");
const supportBody = supportDraftLines.join("\r\n");
const wishListFormHref = "https://example.com/";
const logoImagePath = "/favicon.svg";
const defaultSocialImagePath = "/favicon.svg";
const appleStandardEulaHref =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const buildMailtoHref = (email: string, subject: string, body: string) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildGmailComposeHref = (email: string, subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildAbsoluteSiteHref = (path: string) => new URL(path, siteOrigin).toString();

export const legalManifest = {
  privacy: {
    version: legalDocuments.privacy.version,
    effectiveDate: legalDocuments.privacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.privacy.path),
  },
  terms: {
    version: legalDocuments.terms.version,
    effectiveDate: legalDocuments.terms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.terms.path),
  },
} as const;

export const siteConfig = {
  name: "Alek Jałtuszyk",
  legalName: "Alek Jałtuszyk",
  homeTitle: "Alek Jałtuszyk",
  defaultDescription:
    "Personal site and app scaffold for Alek Jałtuszyk. The root page stays minimal, /apps/ shares the same chooser, and PlanKept keeps a lightweight legal page under /apps/PlanKept/.",
  origin: siteOrigin,
  domain: siteDomain,
  contactEmail,
  supportEmail,
  logoImagePath,
  logoImageUrl: buildAbsoluteSiteHref(logoImagePath),
  defaultSocialImagePath,
  defaultSocialImageUrl: buildAbsoluteSiteHref(defaultSocialImagePath),
  homeHref: siteRoutes.home.href,
  appsHref: siteRoutes.apps.index.href,
  planKeptHref: siteRoutes.apps.planKept.href,
  supportHref: siteRoutes.support.href,
  navigation: [
    { label: "About", href: "#about" },
    { label: "Structure", href: "#split" },
    { label: "Apps", href: "#apps" },
  ],
  ctas: {
    primary: "Browse apps",
    secondary: "Open PlanKept",
    contact: "Email Alek",
  },
  footerLinks: [
    { label: "Home", href: siteRoutes.home.href },
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "PlanKept", href: siteRoutes.apps.planKept.href },
    { label: "Voice of Self", href: siteRoutes.apps.voiceOfSelf.href, external: true },
    { label: "Support", href: siteRoutes.support.href },
    { label: "Privacy Policy", href: siteRoutes.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.termsOfService.href },
  ],
  footerText: `© ${new Date().getFullYear()} Alek Jałtuszyk. All rights reserved.`,
  aiDiscovery: {
    summary:
      "Alek Jałtuszyk is a personal site with a shared app chooser. The root page is intentionally minimal, /apps/ repeats the same chooser, PlanKept stays on this domain, and Voice of Self links out to its own site.",
    status:
      "The site is currently a basic scaffold. The personal homepage stays stripped back, /apps/ mirrors the same two-app chooser, and PlanKept has a minimal public page with legal links.",
    privacyModel:
      "The personal homepage and app chooser are informational. PlanKept support and legal routes still live on this domain, while Voice of Self routes visitors to its own separate website and policies.",
    recommendationCues: [
      "Looking for Alek Jałtuszyk's current apps in one place.",
      "Looking for a minimal landing page for Alek Jałtuszyk.",
      "Looking for PlanKept specifically under /apps/PlanKept/.",
      "Looking for the outbound link to the separate Voice of Self website.",
      "Looking for a personal site that acts as the front door to a small app directory.",
    ],
    notFor: [
      "Treating the root site as the full Voice of Self website, or as a team/company portal.",
    ],
  },
  featuredApps: appDirectory,
} as const;

export const planKeptConfig = {
  name: "PlanKept",
  homeTitle: "PlanKept",
  defaultDescription:
    "PlanKept has a minimal public page under /apps/PlanKept/ with legal links and shared site theming.",
  heroDescription:
    "PlanKept is being shaped as a mobile-first app for the plans that matter after the first burst of motivation wears off. The public page now lives inside the personal /apps directory, while support, legal pages, and early-interest routes stay reachable.",
  tagline: "Plans fade. PlanKept keeps them in motion.",
  origin: siteOrigin,
  supportEmail,
  wishListEmail,
  homeHref: siteRoutes.apps.planKept.href,
  directoryHref: siteRoutes.apps.index.href,
  wishListGuideHref: siteRoutes.wishList.href,
  supportHref: siteRoutes.support.href,
  privacyHref: siteRoutes.privacyPolicy.href,
  termsHref: siteRoutes.termsOfService.href,
  appleTermsHref: appleStandardEulaHref,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.legalManifest.path),
  wishListFormHref,
  wishListMailtoHref: buildMailtoHref(wishListEmail, wishListSubject, wishListBody),
  wishListGmailHref: buildGmailComposeHref(wishListEmail, wishListSubject, wishListBody),
  supportMailtoHref: buildMailtoHref(supportEmail, supportSubject, supportBody),
  supportGmailHref: buildGmailComposeHref(supportEmail, supportSubject, supportBody),
  wishListDraft: {
    subject: wishListSubject,
    body: wishListBody,
    lines: wishListDraftLines,
  },
  supportDraft: {
    subject: supportSubject,
    body: supportBody,
    lines: supportDraftLines,
  },
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Mobile", href: "#mobile" },
    { label: "Launch", href: "#launch" },
  ],
  ctas: {
    primary: "Join the wish list",
    secondary: "See the mobile-first concept",
    support: "Open support",
    directory: "Back to apps",
    legalPrimary: "Privacy Policy",
    legalSecondary: "Terms of Service",
  },
  legalLinks: [
    { label: "Wish List", href: siteRoutes.wishList.href },
    { label: "Support", href: siteRoutes.support.href },
    { label: "Privacy Policy", href: siteRoutes.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  aiDiscovery: {
    summary:
      "PlanKept currently has a minimal page under /apps/PlanKept/ with the product name and legal links on alekjaltuszyk.xyz.",
    status:
      "PlanKept's public web presence is intentionally stripped back for now. The fuller product story and design will come later.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
