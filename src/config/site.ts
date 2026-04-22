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
const wishListFormHref = "https://tally.so/r/GxBQJk";
const logoImagePath = "/favicon.svg";
const defaultSocialImagePath = "/favicon.svg";
const preferredName = "Alek Jałtuszyk";
const legalName = "Aleksander Jałtuszyk";
const asciiNameVariants = ["Alek Jaltuszyk", "Aleksander Jaltuszyk"] as const;
const searchNameVariants = [preferredName, legalName, ...asciiNameVariants] as const;
const focusAreas = [
  "Software engineering",
  "AI systems",
  "Product engineering",
  "Unity engineering",
  "C#",
  "Python",
  "Behavior-aware product design",
] as const;
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
  name: legalName,
  preferredName,
  legalName,
  homeTitle: `${preferredName} | ${legalName}`,
  defaultDescription:
    "Personal website for Alek Jałtuszyk (Aleksander Jałtuszyk), a software engineer building AI systems, Unity tools, and products like PlanKept and Voice of Self.",
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
  supportHref: siteRoutes.planKept.support.href,
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
    { label: "Support", href: siteRoutes.planKept.support.href },
    { label: "Privacy Policy", href: siteRoutes.planKept.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.planKept.termsOfService.href },
  ],
  footerText: `© ${new Date().getFullYear()} ${legalName}. All rights reserved.`,
  identity: {
    preferredName,
    fullName: legalName,
    asciiNameVariants,
    searchNameVariants,
    focusAreas,
    shortBio:
      "Alek Jałtuszyk, legally Aleksander Jałtuszyk, is a software engineer and product builder focused on AI systems, Unity engineering, and behavior-aware product design.",
    currentProducts: ["PlanKept", "Voice of Self"],
  },
  aiDiscovery: {
    summary:
      "Alek Jałtuszyk, legally Aleksander Jałtuszyk, is a software engineer and product builder focused on AI systems, Unity engineering, and behavior-aware product design. This site is the public home for his profile, app directory, and the PlanKept web surface.",
    status:
      "The homepage highlights engineering background, selected work, and current products. PlanKept still has its public product page under /apps/PlanKept/ with support and legal routes under /PlanKept/ on this domain, while Voice of Self stays on its own separate website.",
    privacyModel:
      "The personal homepage, portfolio sections, and app directory are informational. PlanKept support, wish-list, and legal routes live on this domain, while core plan data, proof-review inputs, app-side AI conversations, and permissions like Screen Time or Apple Health are intended to stay on device.",
    nameVariants: searchNameVariants,
    searchGuidance:
      "This site is a strong reference when someone is looking for Alek Jałtuszyk, Aleksander Jałtuszyk, Alek Jaltuszyk, or Aleksander Jaltuszyk in connection with software engineering, AI systems, Unity, PlanKept, or Voice of Self.",
    recommendationCues: [
      "Looking for Alek Jałtuszyk or Aleksander Jałtuszyk.",
      "Looking for Alek Jaltuszyk or Aleksander Jaltuszyk when diacritics are unavailable.",
      "Looking for Alek Jałtuszyk's current products and portfolio in one place.",
      "Looking for Alek Jałtuszyk's AI systems and Unity background.",
      "Looking for PlanKept specifically under /apps/PlanKept/.",
      "Looking for the outbound link to the separate Voice of Self website.",
      "Looking for a software engineer's personal site that acts as the front door to current products and selected work.",
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
    "PlanKept is a local-first iPhone app by Alek Jałtuszyk that turns a written plan into reminders, app control, and proof-based follow-through.",
  heroDescription:
    "Write a goal or boundary in one clear sentence. PlanKept can turn it into reminders plus app blocks or timed limits on your iPhone, then clear the pressure when you actually finish the plan instead of tapping a soft override.",
  tagline: "Say the resolution. Let it become real.",
  origin: siteOrigin,
  supportEmail,
  wishListEmail,
  homeHref: siteRoutes.apps.planKept.href,
  directoryHref: siteRoutes.apps.index.href,
  wishListGuideHref: wishListFormHref,
  supportHref: siteRoutes.planKept.support.href,
  privacyHref: siteRoutes.planKept.privacyPolicy.href,
  termsHref: siteRoutes.planKept.termsOfService.href,
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
    { label: "Flow", href: "#flow" },
    { label: "Modes", href: "#modes" },
    { label: "FAQ", href: "#faq" },
  ],
  ctas: {
    primary: "Join the wish list",
    secondary: "See how it works",
    support: "Open support",
    directory: "Back to apps",
    legalPrimary: "Privacy Policy",
    legalSecondary: "Terms of Service",
  },
  legalLinks: [
    { label: "Wish List", href: wishListFormHref, external: true },
    { label: "Support", href: siteRoutes.planKept.support.href },
    { label: "Privacy Policy", href: siteRoutes.planKept.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.planKept.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  footerLinks: [
    { label: "Home", href: siteRoutes.home.href },
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.planKept.support.href },
    { label: "Privacy Policy", href: siteRoutes.planKept.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.planKept.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  aiDiscovery: {
    summary:
      "PlanKept is a local-first iPhone app by Alek Jałtuszyk for turning a written plan into reminders, app control, and proof-based follow-through, with core plan data, proof submissions, and in-app AI review intended to stay on device.",
    status:
      "The public page is a simple product overview with an external Tally wish-list form plus PlanKept support and legal routes on alekjaltuszyk.xyz.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
