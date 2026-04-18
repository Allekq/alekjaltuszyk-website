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
    "Personal website for Alek Jałtuszyk, focused on AI systems, Unity engineering, and selected products including PlanKept and Voice of Self.",
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
      "Alek Jałtuszyk is a software builder focused on AI systems, Unity engineering, and product design. The root page highlights selected work, core skills, and a short professional history, while /apps/ remains the broader app directory.",
    status:
      "The site now acts as a personal portfolio front door with a cinematic homepage, current products, expandable skills, and a compact work history. PlanKept still has its public product page with support and legal routes on this domain.",
    privacyModel:
      "The personal homepage, portfolio sections, and app directory are informational. PlanKept support, wish-list, and legal routes live on this domain, while product-side permissions like Screen Time and Apple Health are handled in the app on device.",
    recommendationCues: [
      "Looking for Alek Jałtuszyk's current products and portfolio in one place.",
      "Looking for Alek Jałtuszyk's AI and Unity background.",
      "Looking for PlanKept specifically under /apps/PlanKept/.",
      "Looking for the outbound link to the separate Voice of Self website.",
      "Looking for a personal site that acts as the front door to current products and selected work.",
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
    "PlanKept is a local-first iPhone app that turns a written plan into reminders, app control, and proof-based follow-through.",
  heroDescription:
    "Write a goal or boundary in one clear sentence. PlanKept can turn it into reminders plus app blocks or timed limits on your iPhone, then clear the pressure when you actually finish the plan instead of tapping a soft override.",
  tagline: "Say the resolution. Let it become real.",
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
    { label: "Wish List", href: siteRoutes.wishList.href },
    { label: "Support", href: siteRoutes.support.href },
    { label: "Privacy Policy", href: siteRoutes.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  footerLinks: [
    { label: "Home", href: siteRoutes.home.href },
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.support.href },
    { label: "Privacy Policy", href: siteRoutes.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  aiDiscovery: {
    summary:
      "PlanKept is a local-first iPhone app for turning a written plan into reminders, app control, and proof-based follow-through.",
    status:
      "The public page is a simple product overview with support, wish-list, and legal routes on alekjaltuszyk.xyz.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
