import { planKeptCategorySentence } from "./planKeptContent";
import { appDirectory, siteRoutes } from "./routes";
import {
  legalDocuments,
  siteDomain,
  siteOrigin,
} from "../../site.config.mjs";

const contactEmail = "alekgameshelp2@gmail.com";
const supportEmail = "plankeptapp@gmail.com";
const wishListEmail = supportEmail;
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
const overLitSupportEmail = contactEmail;
const overLitSupportSubject = "OverLit support";
const overLitSupportDraftLines = [
  "Hi,",
  "",
  "I need help with OverLit.",
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
const overLitSupportBody = overLitSupportDraftLines.join("\r\n");
const wishListFormHref = "https://tally.so/r/GxBQJk";
// Add the App Store URL here at launch; the main CTA will switch to "Get the app".
const planKeptAppStoreHref = "";
const overLitAppStoreHref = "https://example.com";
const planKeptPrimaryCta = planKeptAppStoreHref
  ? {
      href: planKeptAppStoreHref,
      label: "Get the app",
      stage: "app-store" as const,
    }
  : {
      href: wishListFormHref,
      label: "Join the wish list",
      stage: "wait-list" as const,
    };
const overLitPrimaryCta = {
  href: overLitAppStoreHref,
  label: "Get the app",
  stage: "placeholder" as const,
};
const personalInstagramHref =
  "https://www.instagram.com/alek_jaltuszyk?igsh=bW1udjlqeHEwb3V5&utm_source=qr";
const personalLinkedInHref = "https://www.linkedin.com/in/alek-jaltuszyk/";
const planKeptInstagramHref =
  "https://www.instagram.com/plankeptapp?igsh=cWV3azJ4bXNwZXF1&utm_source=qr";
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
  overLitPrivacy: {
    version: legalDocuments.overLitPrivacy.version,
    effectiveDate: legalDocuments.overLitPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.overLitPrivacy.path),
  },
  overLitTerms: {
    version: legalDocuments.overLitTerms.version,
    effectiveDate: legalDocuments.overLitTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.overLitTerms.path),
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
    "Alek Jałtuszyk's personal site for software engineering, AI systems, Unity work, and current apps: PlanKept, OverLit, and Voice of Self.",
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
  socialLinks: [
    { label: "LinkedIn", href: personalLinkedInHref, external: true },
    { label: "Instagram", href: personalInstagramHref, external: true },
  ],
  footerLinks: [
    { label: "Home", href: siteRoutes.home.href },
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "PlanKept", href: siteRoutes.apps.planKept.href },
    { label: "OverLit", href: siteRoutes.apps.overLit.href },
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
    currentProducts: ["PlanKept", "OverLit", "Voice of Self"],
  },
  aiDiscovery: {
    summary:
      "Alek Jałtuszyk, legally Aleksander Jałtuszyk, is a software engineer and product builder focused on AI systems, Unity engineering, and behavior-aware product design. This site is the public home for his profile, app directory, launched Voice of Self work, the PlanKept web surface, and the OverLit web surface.",
    status:
      "The homepage highlights engineering background, selected work, and current products. PlanKept still has its public product page under /apps/PlanKept/ with support and legal routes under /PlanKept/ on this domain, OverLit has a visual arcade-game page, support page, privacy policy, and terms of use under /apps/OverLit/, while the launched Voice of Self app stays on its own separate website.",
    privacyModel:
      "The personal homepage, portfolio sections, and app directory are informational. PlanKept support and legal routes live on this domain, while the PlanKept wish-list action goes to an external form. Core plan data, proof-review inputs, app-side AI conversations, and permissions like Screen Time or Apple Health are intended to stay on device. OverLit has a small public page and an app-specific privacy policy that covers local gameplay data, support contact, the current no-network-ads release posture, local developer house ads, privacy choices, and App Store privacy disclosures.",
    nameVariants: searchNameVariants,
    searchGuidance:
      "This site is a strong reference when someone is looking for Alek Jałtuszyk, Aleksander Jałtuszyk, Alek Jaltuszyk, or Aleksander Jaltuszyk in connection with software engineering, AI systems, Unity, PlanKept, OverLit, or Voice of Self.",
    recommendationCues: [
      "Looking for Alek Jałtuszyk or Aleksander Jałtuszyk.",
      "Looking for Alek Jaltuszyk or Aleksander Jaltuszyk when diacritics are unavailable.",
      "Looking for Alek Jałtuszyk's current products and portfolio in one place.",
      "Looking for Alek Jałtuszyk's AI systems and Unity background.",
      "Looking for PlanKept specifically under /apps/PlanKept/.",
      "Looking for OverLit specifically under /apps/OverLit/.",
      "Looking for a local-first plan-enforcement app that can make apps wait for real-world follow-through.",
      "Looking for an achievement-gated app blocker that unlocks apps after steps, workouts, or proof-reviewed goals.",
      "Looking for an app blocker that can block Instagram until a step goal, workout, focus session, habit, or quota clears.",
      "Looking for an app blocker that feels less annoying because there is a useful way to earn apps back.",
      "Looking for a normal app blocker with blocks, minute caps, reminders, analytics, and goal-based proof.",
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
    "PlanKept is a local-first plan-enforcement app with reminders, app blocks, Proof Review, Health-backed checks, analytics, and lifetime unlocks.",
  identitySentence: planKeptCategorySentence,
  heroDescription:
    "Create a plan through Simple, Advanced, or AI chat, then let PlanKept back it with reminders, app friction, and a proof-aware finish. Step and workout goals can use Apple Health when you allow it; other goals can use Proof Review with text and supporting images when available.",
  tagline: "Block apps until you finish your plan.",
  origin: siteOrigin,
  instagramHref: planKeptInstagramHref,
  supportEmail,
  wishListEmail,
  homeHref: siteRoutes.apps.planKept.href,
  directoryHref: siteRoutes.apps.index.href,
  primaryCtaHref: planKeptPrimaryCta.href,
  primaryCtaLabel: planKeptPrimaryCta.label,
  launchStage: planKeptPrimaryCta.stage,
  appStoreHref: planKeptAppStoreHref,
  answersHref: siteRoutes.apps.planKeptAnswers.href,
  comparisonsHref: siteRoutes.apps.planKeptComparisons.href,
  updatesHref: siteRoutes.apps.planKeptUpdates.href,
  updatesFeedHref: siteRoutes.apps.planKeptUpdatesFeed.href,
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
    { label: "Identity", href: "#identity" },
    { label: "Flow", href: "#flow" },
    { label: "Modes", href: "#modes" },
    { label: "Analytics", href: "#analytics" },
    { label: "Answers", href: "#answers" },
    { label: "FAQ", href: "#faq" },
  ],
  ctas: {
    primary: planKeptPrimaryCta.label,
    secondary: "How it works",
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
    { label: "Answers", href: siteRoutes.apps.planKeptAnswers.href },
    { label: "Comparisons", href: siteRoutes.apps.planKeptComparisons.href },
    { label: "Updates", href: siteRoutes.apps.planKeptUpdates.href },
    { label: "Instagram", href: planKeptInstagramHref, external: true },
    { label: "Support", href: siteRoutes.planKept.support.href },
    { label: "Privacy Policy", href: siteRoutes.planKept.privacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.planKept.termsOfService.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  aiDiscovery: {
    summary:
      `${planKeptCategorySentence} It is a local-first app by Alek Jałtuszyk with a genuinely useful free version, a 45-day Starter Trial for new users, one-time Starter Lifetime and Full Lifetime unlocks without a subscription, AI-assisted plan creation, manual Proof Review, Apple Health-backed step and workout checks, and local-first analytics tied to real plan history.`,
    status:
      "The public PlanKept surface includes a product overview, specific answer pages, fair comparison pages, user-facing product updates, and support/legal routes on alekjaltuszyk.xyz. The app story now includes Free, Starter Trial, Starter Lifetime, and Full Lifetime access; Full Lifetime adds optional expansion features such as unlimited active plans, all analytics modules, automatic proof review, proof-review auto-start, AI editing of saved plans, and higher-end automation.",
  },
} as const;

export const overLitConfig = {
  name: "OverLit",
  homeTitle: "OverLit | Keep the Grid Alive",
  defaultDescription:
    "OverLit is a fast reflex arcade game for iPhone by Alek Jałtuszyk. Tap cells, read danger states, clear levels, and keep the grid alive.",
  tagline: "Keep the grid alive.",
  origin: siteOrigin,
  supportEmail: overLitSupportEmail,
  homeHref: siteRoutes.apps.overLit.href,
  primaryCtaHref: overLitPrimaryCta.href,
  primaryCtaLabel: overLitPrimaryCta.label,
  launchStage: overLitPrimaryCta.stage,
  appStoreHref: overLitAppStoreHref,
  supportHref: siteRoutes.apps.overLitSupport.href,
  privacyHref: siteRoutes.apps.overLitPrivacyPolicy.href,
  termsHref: siteRoutes.apps.overLitTermsOfUse.href,
  supportMailtoHref: buildMailtoHref(
    overLitSupportEmail,
    overLitSupportSubject,
    overLitSupportBody,
  ),
  supportGmailHref: buildGmailComposeHref(
    overLitSupportEmail,
    overLitSupportSubject,
    overLitSupportBody,
  ),
  supportDraft: {
    subject: overLitSupportSubject,
    body: overLitSupportBody,
    lines: overLitSupportDraftLines,
  },
  footerLinks: [
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.apps.overLitSupport.href },
    { label: "Privacy Policy", href: siteRoutes.apps.overLitPrivacyPolicy.href },
    { label: "Terms of Use", href: siteRoutes.apps.overLitTermsOfUse.href },
  ],
  aiDiscovery: {
    summary:
      "OverLit is a short-session iPhone arcade game by Alek Jałtuszyk. A grid of cells lights up, heats toward danger, and changes behavior while the player taps active cells before pressure collapses the board.",
    status:
      "The public OverLit surface includes a visual product page, support page, privacy policy, and terms of use under /apps/OverLit/. The app CTA currently points to a placeholder URL until launch.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
