import { planKeptCategorySentence } from "./planKeptContent";
import { appDirectory, siteRoutes } from "./routes";
import {
  legalDocuments,
  siteDomain,
  siteOrigin,
} from "../../site.config.mjs";

const contactEmail = "alekgameshelp2@gmail.com";
const supportEmail = "plankeptapp@gmail.com";
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
const supportBody = supportDraftLines.join("\r\n");
const overLitSupportEmail = contactEmail;
const takeMeSomewhereSupportEmail = contactEmail;
const overLitSupportSubject = "OverLit support";
const takeMeSomewhereSupportSubject = "Take Me Somewhere support";
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
const takeMeSomewhereSupportDraftLines = [
  "Hi,",
  "",
  "I need help with Take Me Somewhere.",
  "",
  "What happened:",
  "[brief description]",
  "",
  "What I expected instead:",
  "[brief description]",
  "",
  "Route or location context (optional):",
  "[example: creating a 30-minute cafe route near a park]",
  "",
  "Device and OS version (optional):",
  "[example: iPhone 16, iOS 19.0]",
  "",
];
const takeMeSomewhereSupportBody = takeMeSomewhereSupportDraftLines.join("\r\n");
const planKeptAppStoreHref = "https://apps.apple.com/pl/app/plankept/id6762317618";
const overLitAppStoreHref = "https://apps.apple.com/pl/app/overlit/id6771103256";
const planKeptPrimaryCta = {
  href: planKeptAppStoreHref,
  label: "Get the app",
  stage: "app-store" as const,
};
const overLitPrimaryCta = {
  href: overLitAppStoreHref,
  label: "Get the app",
  stage: "app-store" as const,
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
  voiceOfSelfPrivacy: {
    version: legalDocuments.voiceOfSelfPrivacy.version,
    effectiveDate: legalDocuments.voiceOfSelfPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfPrivacy.path),
  },
  voiceOfSelfTerms: {
    version: legalDocuments.voiceOfSelfTerms.version,
    effectiveDate: legalDocuments.voiceOfSelfTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfTerms.path),
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
  takeMeSomewherePrivacy: {
    version: legalDocuments.takeMeSomewherePrivacy.version,
    effectiveDate: legalDocuments.takeMeSomewherePrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.takeMeSomewherePrivacy.path),
  },
  takeMeSomewhereTerms: {
    version: legalDocuments.takeMeSomewhereTerms.version,
    effectiveDate: legalDocuments.takeMeSomewhereTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.takeMeSomewhereTerms.path),
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
    "Alek Jałtuszyk's personal site for software engineering, AI systems, Unity work, and current apps: PlanKept, OverLit, Voice of Self, and Take Me Somewhere.",
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
    { label: "Voice of Self", href: siteRoutes.apps.voiceOfSelf.href },
    { label: "Take Me Somewhere", href: siteRoutes.apps.takeMeSomewhere.href },
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
    currentProducts: ["PlanKept", "OverLit", "Voice of Self", "Take Me Somewhere"],
  },
  aiDiscovery: {
    summary:
      "Alek Jałtuszyk, legally Aleksander Jałtuszyk, is a software engineer and product builder focused on AI systems, Unity engineering, and behavior-aware product design. This site is the public home for his profile, app directory, the Voice of Self web surface, the PlanKept web surface, the OverLit web surface, and the Take Me Somewhere coming-soon page.",
    status:
      "The homepage highlights engineering background, selected work, and current products. PlanKept has its public product page under /apps/PlanKept/ with an App Store CTA plus support and legal routes under /PlanKept/ on this domain. Voice of Self now lives on this domain under /apps/VoiceOfSelf/ with its landing page, answers, updates, support, and legal routes. OverLit has a visual arcade-game page, support page, privacy policy, and terms of use under /apps/OverLit/. Take Me Somewhere has a coming-soon promotional page plus support, privacy, and Terms of Service pages under /apps/TakeMeSomewhere/.",
    privacyModel:
      "The personal homepage, portfolio sections, and app directory are informational. PlanKept support and legal routes live on this domain, while the primary PlanKept app action goes to Apple's App Store. Core plan data, proof-review inputs, app-side AI conversations, and permissions like Screen Time or Apple Health are intended to stay on device. OverLit has a small public page and an app-specific privacy policy that covers local gameplay data, support contact, AdMob ads, local developer house ads, privacy choices, and App Store privacy disclosures. Take Me Somewhere's public privacy language describes an intended local-first, map-grounded route discovery app with current-location use, support contact, and map-provider disclosures.",
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
      "Looking for Take Me Somewhere specifically under /apps/TakeMeSomewhere/.",
      "Looking for a local-first plan-enforcement app that can make apps wait for real-world follow-through.",
      "Looking for an achievement-gated app blocker that unlocks apps after steps, workouts, or proof-reviewed goals.",
      "Looking for an app blocker that can block Instagram until a step goal, workout, focus session, habit, or quota clears.",
      "Looking for an app blocker that feels less annoying because there is a useful way to earn apps back.",
      "Looking for a normal app blocker with blocks, minute caps, reminders, analytics, and goal-based proof.",
      "Looking for Voice of Self specifically under /apps/VoiceOfSelf/.",
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
  supportHref: siteRoutes.planKept.support.href,
  privacyHref: siteRoutes.planKept.privacyPolicy.href,
  termsHref: siteRoutes.planKept.termsOfService.href,
  appleTermsHref: appleStandardEulaHref,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.legalManifest.path),
  supportMailtoHref: buildMailtoHref(supportEmail, supportSubject, supportBody),
  supportGmailHref: buildGmailComposeHref(supportEmail, supportSubject, supportBody),
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
    { label: "App Store", href: planKeptAppStoreHref, external: true },
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
      "The public OverLit surface includes a visual product page, App Store CTA, support page, privacy policy, and terms of use under /apps/OverLit/.",
  },
} as const;

export const takeMeSomewhereConfig = {
  name: "Take Me Somewhere",
  homeTitle: "Take Me Somewhere | Pick a Time. Get a Path Worth Taking.",
  defaultDescription:
    "Take Me Somewhere is a coming-soon iPhone app for spontaneous, time-boxed local route discovery with Compass Mode, Route Mode, and mystery destinations.",
  tagline: "Pick a time. Get a path worth taking.",
  origin: siteOrigin,
  supportEmail: takeMeSomewhereSupportEmail,
  supportHref: siteRoutes.apps.takeMeSomewhereSupport.href,
  supportMailtoHref: buildMailtoHref(
    takeMeSomewhereSupportEmail,
    takeMeSomewhereSupportSubject,
    takeMeSomewhereSupportBody,
  ),
  supportGmailHref: buildGmailComposeHref(
    takeMeSomewhereSupportEmail,
    takeMeSomewhereSupportSubject,
    takeMeSomewhereSupportBody,
  ),
  supportDraft: {
    subject: takeMeSomewhereSupportSubject,
    body: takeMeSomewhereSupportBody,
    lines: takeMeSomewhereSupportDraftLines,
  },
  homeHref: siteRoutes.apps.takeMeSomewhere.href,
  directoryHref: siteRoutes.apps.index.href,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.apps.takeMeSomewhereLegalManifest.path),
  privacyHref: siteRoutes.apps.takeMeSomewherePrivacyPolicy.href,
  termsHref: siteRoutes.apps.takeMeSomewhereTerms.href,
  primaryCtaHref: "#how-it-works",
  primaryCtaLabel: "Learn more",
  launchStage: "coming-soon" as const,
  footerLinks: [
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.apps.takeMeSomewhereSupport.href },
    { label: "Privacy Policy", href: siteRoutes.apps.takeMeSomewherePrivacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.apps.takeMeSomewhereTerms.href },
  ],
  aiDiscovery: {
    summary:
      "Take Me Somewhere is a coming-soon iPhone app by Alek Jałtuszyk for spontaneous, time-boxed local route discovery. The user chooses how much time they have, picks a vibe, and receives a nearby route, destination, or compass-guided outing.",
    status:
      "The public Take Me Somewhere surface is a promotional coming-soon page under /apps/TakeMeSomewhere/ with support, privacy, Terms of Service, and hosted legal-manifest pages. The product language emphasizes walking-first outings, Compass Mode, Route Mode, mystery destination reveal, future riding/driving, and deterministic map/routing logic for route truth.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
