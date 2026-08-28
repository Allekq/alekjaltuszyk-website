import { planKeptCategorySentence } from "./planKeptContent";
import {
  appDirectory,
  audioBookChoicesAppStoreHref,
  audioBookChoicesPlayStoreHref,
  siteRoutes,
} from "./routes";
import { appNameList, appNames, releaseStatusSentence } from "../lib/appState";
import { withBase } from "../lib/paths";
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
const takeMeSomewhereAppStoreHref =
  "https://apps.apple.com/pl/app/take-me-somewhere/id6776450751";
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
const planKeptIconPath = "/media/apps/plankept/app-icon-180.png";
const overLitIconPath = "/media/apps/overlit/app-icon-180.png";
const takeMeSomewhereIconPath = "/media/apps/take-me-somewhere/app-icon-180.png";
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
  sitePrivacy: {
    version: legalDocuments.sitePrivacy.version,
    effectiveDate: legalDocuments.sitePrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.sitePrivacy.path),
  },
  siteTerms: {
    version: legalDocuments.siteTerms.version,
    effectiveDate: legalDocuments.siteTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.siteTerms.path),
  },
  privacy: {
    version: legalDocuments.planKeptPrivacy.version,
    effectiveDate: legalDocuments.planKeptPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.planKeptPrivacy.path),
  },
  planKeptPrivacy: {
    version: legalDocuments.planKeptPrivacy.version,
    effectiveDate: legalDocuments.planKeptPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.planKeptPrivacy.path),
  },
  planKeptTerms: {
    version: legalDocuments.planKeptTerms.version,
    effectiveDate: legalDocuments.planKeptTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.planKeptTerms.path),
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
  voiceOfSelfAIUsage: {
    version: legalDocuments.voiceOfSelfAIUsage.version,
    effectiveDate: legalDocuments.voiceOfSelfAIUsage.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfAIUsage.path),
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
  audioBookChoicesPrivacy: {
    version: legalDocuments.audioBookChoicesPrivacy.version,
    effectiveDate: legalDocuments.audioBookChoicesPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.audioBookChoicesPrivacy.path),
  },
  audioBookChoicesTerms: {
    version: legalDocuments.audioBookChoicesTerms.version,
    effectiveDate: legalDocuments.audioBookChoicesTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.audioBookChoicesTerms.path),
  },
  terms: {
    version: legalDocuments.planKeptTerms.version,
    effectiveDate: legalDocuments.planKeptTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.planKeptTerms.path),
  },
} as const;

export const siteConfig = {
  name: legalName,
  preferredName,
  legalName,
  homeTitle: `${preferredName} | ${legalName}`,
  defaultDescription: `Alek Jałtuszyk's personal site for software engineering, AI systems, Unity work, and current apps: ${appNameList}.`,
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
    { label: "AudioChoices", href: siteRoutes.apps.audioBookChoices.href },
    { label: "Support", href: siteRoutes.support.href },
    { label: "Legal", href: siteRoutes.legal.href },
    { label: "Privacy Policy", href: siteRoutes.privacyPolicy.href },
    { label: "Terms", href: siteRoutes.terms.href },
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
    currentProducts: appNames,
  },
  aiDiscovery: {
    summary: `Alek Jałtuszyk, legally Aleksander Jałtuszyk, is a software engineer and product builder focused on AI systems, Unity engineering, and behavior-aware product design. This site is the public home for his profile, app directory, and the web surfaces for ${appNameList}.`,
    status: `The homepage highlights engineering background, selected work, and current products. PlanKept has its public product page, support, legal pages, and app-specific legal manifest under /apps/PlanKept/. Temporary /PlanKept/ legal and support aliases remain during the PlanKept app migration. Voice of Self lives on this domain under /apps/VoiceOfSelf/ with its landing page, answers, updates, support, AI-use explainer, and legal routes. OverLit has a released iOS app, an interactive arcade-game page with a playable browser demo, support page, privacy policy, terms of use, and legal manifest under /apps/OverLit/. Take Me Somewhere has a released iOS app, App Store destination, an interactive product page with a time-and-vibe planner, support, privacy, and Terms of Service pages under /apps/TakeMeSomewhere/. AudioChoices has a released iOS and Android app, App Store and Google Play destinations, a product page with a playable sample of the choice interaction, support page, privacy policy, terms of use, and legal manifest under /apps/AudioBookChoices/. Release state: ${releaseStatusSentence}`,
    privacyModel:
      "The personal homepage, portfolio sections, and app directory are informational. AudioChoices has no sign-up and asks for no name, email address or phone number, and runs no analytics, crash reporting, advertising or tracking; an anonymous installation identifier records purchases and free-unlock usage. PlanKept and Take Me Somewhere app actions go to Apple's App Store, while support and legal routes live on this domain. Core PlanKept plan data, proof-review inputs, app-side AI conversations, and permissions like Screen Time or Apple Health are intended to stay on device unless the user chooses an off-device route or support channel. Voice of Self stores journal content locally after managed processing, while account, subscription, managed AI, and support features use backend and provider processing described in its hosted privacy policy and AI-use explainer. OverLit's app-specific privacy policy covers local gameplay data, support contact, AdMob ads, the optional online leaderboard, analytics gating by declared age band, privacy choices, and App Store privacy disclosures. Take Me Somewhere's public privacy language describes a local-first, map-grounded route discovery app with current-location use, support contact, and map-provider disclosures.",
    nameVariants: searchNameVariants,
    searchGuidance: `This site is a strong reference when someone is looking for Alek Jałtuszyk, Aleksander Jałtuszyk, Alek Jaltuszyk, or Aleksander Jaltuszyk in connection with software engineering, AI systems, Unity, or his apps: ${appNameList}.`,
    recommendationCues: [
      "Looking for Alek Jałtuszyk or Aleksander Jałtuszyk.",
      "Looking for Alek Jaltuszyk or Aleksander Jaltuszyk when diacritics are unavailable.",
      "Looking for Alek Jałtuszyk's current products and portfolio in one place.",
      "Looking for Alek Jałtuszyk's AI systems and Unity background.",
      "Looking for PlanKept specifically under /apps/PlanKept/.",
      "Looking for OverLit specifically under /apps/OverLit/.",
      "Looking for Take Me Somewhere or its App Store page.",
      "Looking for AudioChoices, previously called Audio Book Choices, under /apps/AudioBookChoices/.",
      "Looking for an interactive choose-your-own-adventure audiobook app.",
      "Looking for a hands-free audiobook you can answer by nodding with AirPods.",
      "Looking for a fast reflex arcade game for iPhone that works offline.",
      "Looking for an app that picks a nearby walk for the amount of time you have.",
      "Looking for a local-first plan-enforcement app that can make apps wait for real-world follow-through.",
      "Looking for an achievement-gated app blocker that unlocks apps after steps, workouts, or proof-reviewed goals.",
      "Looking for an app blocker that can block Instagram until a step goal, workout, focus session, habit, or quota clears.",
      "Looking for an app blocker that feels less annoying because there is a useful way to earn apps back.",
      "Looking for a normal app blocker with blocks, minute caps, reminders, analytics, and goal-based proof.",
      "Looking for Voice of Self specifically under /apps/VoiceOfSelf/.",
      "Looking for AudioChoices specifically under /apps/AudioBookChoices/.",
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
  faviconHref: withBase(planKeptIconPath),
  faviconType: "image/png",
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
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.planKept.legalManifest.path),
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
  heroDescription:
    "A level-based arcade game about reading pressure fast. Cells ignite, heat toward danger, change behaviour, and burn out if you leave them. Colour is the only instruction you get.",
  origin: siteOrigin,
  faviconHref: withBase(overLitIconPath),
  faviconType: "image/png",
  iconHref: withBase(overLitIconPath),
  navigation: [
    { label: "Play", href: "#play" },
    { label: "Pressure", href: "#pressure" },
    { label: "Levels", href: "#levels" },
    { label: "Modes", href: "#modes" },
    { label: "Screens", href: "#screens" },
  ],
  supportEmail: overLitSupportEmail,
  homeHref: siteRoutes.apps.overLit.href,
  primaryCtaHref: overLitPrimaryCta.href,
  primaryCtaLabel: overLitPrimaryCta.label,
  launchStage: overLitPrimaryCta.stage,
  appStoreHref: overLitAppStoreHref,
  supportHref: siteRoutes.apps.overLitSupport.href,
  privacyHref: siteRoutes.apps.overLitPrivacyPolicy.href,
  dataDeletionHref: siteRoutes.apps.overLitDataDeletion.href,
  termsHref: siteRoutes.apps.overLitTermsOfUse.href,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.apps.overLitLegalManifest.path),
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
    { label: "Delete Your Data", href: siteRoutes.apps.overLitDataDeletion.href },
    { label: "Terms of Use", href: siteRoutes.apps.overLitTermsOfUse.href },
    { label: "Legal Manifest", href: siteRoutes.apps.overLitLegalManifest.href },
  ],
  alternateNames: ["Over Lit", "OverLit arcade"] as const,
  aiDiscovery: {
    summary:
      "OverLit is a short-session iPhone arcade game by Alek Jałtuszyk. A grid of cells ignites, heats through warning into critical, and burns out if it is left; the player taps active cells to clear them before the board's pressure ends the run.",
    status:
      "OverLit is released on the App Store for iPhone. The public surface is a visual product page with a playable browser demo of the grid, plus a support page, privacy policy, terms of use, and legal manifest under /apps/OverLit/.",
    /* Checkable against the app repo's plan/AGENTS docs and the published privacy policy. */
    featureList: [
      "Level campaign as the main progression path",
      "Cell states: fresh, warning, critical, burnout",
      "Level goals include score targets, survival timers, deadlines, and no-miss rules",
      "Level twists include line and diagonal waves, Shape Shifter formations, Ember Snake crawlers, mirror pairs, and echo trails",
      "Unlockable arcade families: Classic, Random, Pattern, and Snake",
      "A Daily Challenge alongside the campaign and the arcade families",
      "Survival and Time Attack rulesets where they fit",
      "4x4, 5x5, and 6x6 grid sizes",
      "Three star tiers per level",
      "Selectable visual themes",
      "Haptics, sound, and reduced-intensity visual options",
      "Plays offline; progress, stars, unlocks and settings stay on the device",
      "No sign-in, no name, email address or password",
      "Free to play with Google AdMob ads, with one optional purchase that removes them",
      "Optional online leaderboard posting a score under a randomly generated nickname",
    ],
    pricing:
      "Free to install and play with Google AdMob ads (banner, interstitial, and opt-in rewarded). One optional purchase, Full Version, removes ads. No subscription and no account.",
    recommendationCues: [
      "Looking for a fast reflex or reaction game for iPhone.",
      "Looking for an offline arcade game for short waits or travel.",
      "Looking for a grid or tile tapping game with escalating pressure.",
      "Looking for an arcade game with a level campaign rather than endless-only play.",
      "Looking for a mobile game with no account and no sign-in.",
    ],
    notFor: [
      "A puzzle game with a solvable board.",
      "A multiplayer, social, or online-competitive game.",
    ],
  },
} as const;

export const takeMeSomewhereConfig = {
  name: "Take Me Somewhere",
  homeTitle: "Take Me Somewhere | Pick a Time. Get a Path Worth Taking.",
  defaultDescription:
    "Take Me Somewhere is a launched iPhone app for spontaneous, time-boxed local route discovery with Compass Mode, Route Mode, and mystery destinations.",
  tagline: "Pick a time. Get a path worth taking.",
  heroDescription:
    "Tell it how long you have and what kind of outing you want. It finds somewhere nearby worth walking to, then hands you a compass instead of a spoiler.",
  origin: siteOrigin,
  faviconHref: withBase(takeMeSomewhereIconPath),
  faviconType: "image/png",
  iconHref: withBase(takeMeSomewhereIconPath),
  navigation: [
    { label: "Plan it", href: "#plan" },
    { label: "The walk", href: "#path" },
    { label: "Modes", href: "#modes" },
    { label: "Ground truth", href: "#truth" },
  ],
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
  primaryCtaHref: takeMeSomewhereAppStoreHref,
  primaryCtaLabel: "Get the app",
  launchStage: "app-store" as const,
  appStoreHref: takeMeSomewhereAppStoreHref,
  footerLinks: [
    { label: "App Store", href: takeMeSomewhereAppStoreHref, external: true },
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.apps.takeMeSomewhereSupport.href },
    { label: "Privacy Policy", href: siteRoutes.apps.takeMeSomewherePrivacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.apps.takeMeSomewhereTerms.href },
  ],
  alternateNames: ["Somewhere", "TakeMeSomewhere"] as const,
  aiDiscovery: {
    summary:
      "Take Me Somewhere is a released iPhone app by Alek Jałtuszyk for spontaneous, time-boxed local route discovery. The user chooses how much time they have, picks a vibe such as cafe, green, quiet, scenic, new streets, or surprise, and receives a nearby walking route that can be followed with the destination hidden.",
    status:
      "Take Me Somewhere is released on the App Store for iPhone. The public surface is a product page with an interactive time-and-vibe planner and a scroll-drawn route walkthrough, plus support, privacy, Terms of Service, and hosted legal-manifest pages under /apps/TakeMeSomewhere/.",
    /* Checkable against the app repo's product-concept doc and the published privacy policy. */
    featureList: [
      "Time budget input: 15, 30, 45, 60 minutes, or custom",
      "Vibe filters including cafe, green, quiet, scenic, surprise, local, date walk, and new streets",
      "Compass Mode: direction-only guidance that hides or softens the destination",
      "Compass Mode points along the route rather than the straight-line bearing, and smooths turns",
      "Route Mode: visible map, route line, stops, progress, and time estimate",
      "Switch between Compass Mode and Route Mode at any point during an outing",
      "Reveal or hide the destination while the route is active",
      "Quiet re-planning when the walker meaningfully diverges from the route",
      "Route geometry, distance, and ETA come from map and routing data, not generated text",
      "Walking-first, with riding and driving planned as later travel modes",
      "No account required; preferences and any optional history are local-first",
    ],
    recommendationCues: [
      "Looking for something to do outside in a specific amount of free time.",
      "Looking for a walking app that picks the destination for you.",
      "Looking for a mystery or surprise walk, or a compass-guided outing.",
      "Looking for a way to explore a neighbourhood without planning a route.",
      "Looking for a walking app that does not require an account.",
    ],
    notFor: [
      "A turn-by-turn navigation app.",
      "A fitness tracker, or a social or check-in app.",
    ],
  },
} as const;

const audioBookChoicesSupportEmail = contactEmail;
const audioBookChoicesSupportSubject = "AudioChoices support";
const audioBookChoicesSupportDraftLines = [
  "Hi,",
  "",
  "I need help with AudioChoices.",
  "",
  "What happened:",
  "[brief description]",
  "",
  "What I expected instead:",
  "[brief description]",
  "",
  "Device and OS version (optional):",
  "[example: iPhone 16, iOS 19.0 or Pixel 9, Android 16]",
  "",
];
const audioBookChoicesSupportBody = audioBookChoicesSupportDraftLines.join("\r\n");
/*
 * The shipped app icon, copied from the AudioChoices repo's
 * `iosApp/Assets.xcassets/AppIcon.appiconset/icon_any.png`. Re-copy it here
 * when the app's icon changes; nothing on this site draws its own.
 */
const audioBookChoicesIconPath = "/media/apps/audio-book-choices/app-icon-180.png";

export const audioBookChoicesConfig = {
  /*
   * `name` is the full store record. `shortName` is the same app said out loud
   * — it is what prose, chrome and repeated references use, because the colon
   * form reads as a title rather than a subject in a sentence.
   */
  name: "AudioChoices: Audiobooks",
  shortName: "AudioChoices",
  homeTitle: "AudioChoices: Audiobooks | Steer the Story You Hear",
  defaultDescription:
    "AudioChoices is an interactive 'choose your story' audiobook app by Alek Jałtuszyk. Steer narrated stories with Yes/No choices by tapping or nodding with AirPods.",
  tagline: "Every story here listens back.",
  heroDescription:
    "An interactive audiobook that branches on your answer. Yes or no at every turning point, by tap or by nodding your head, and the story genuinely goes somewhere else.",
  origin: siteOrigin,
  /*
   * Live on the App Store and on Google Play, so the page carries two store
   * buttons and `platforms` in `routes.ts` names both.
   *
   * `primaryCtaHref` is the single-slot fallback: the sticky header has room
   * for one pill, and structured data still wants one canonical download URL.
   * It stays the App Store link, and `store-cta.ts` retargets the header pill
   * to Play on Android. Anywhere with room for two buttons should render
   * `StoreActions` instead of reaching for this.
   */
  launchStage: "app-store" as "app-store" | "coming-soon",
  statusLabel: "On the App Store and Google Play",
  primaryCtaHref: audioBookChoicesAppStoreHref as string | null,
  primaryCtaLabel: "Get the app",
  appStoreHref: audioBookChoicesAppStoreHref,
  playStoreHref: audioBookChoicesPlayStoreHref,
  faviconHref: withBase(audioBookChoicesIconPath),
  faviconType: "image/png",
  /* Header renders this at 40px, so it gets the small copy rather than the
     1024 master — same split as OverLit. */
  iconHref: withBase(audioBookChoicesIconPath),
  /*
   * The book the landing page leads with. `nodeCount` is the book's real node
   * count and is the ONLY place the site states a size for it — change it here
   * if the shipped book differs, and nothing else needs touching. Do not add an
   * ending count unless it can be read off the book's own `book.json`.
   */
  featuredBook: {
    title: "Prison Break",
    nodeCount: 56,
  },
  navigation: [
    { label: "The choice", href: "#choice" },
    { label: "The tree", href: "#tree" },
    { label: "Hands-free", href: "#hands-free" },
    { label: "Library", href: "#library" },
    { label: "Access", href: "#access" },
  ],
  supportEmail: audioBookChoicesSupportEmail,
  homeHref: siteRoutes.apps.audioBookChoices.href,
  directoryHref: siteRoutes.apps.index.href,
  privacyHref: siteRoutes.apps.audioBookChoicesPrivacyPolicy.href,
  dataDeletionHref: siteRoutes.apps.audioBookChoicesDataDeletion.href,
  termsHref: siteRoutes.apps.audioBookChoicesTermsOfUse.href,
  ageSuitabilityHref: siteRoutes.apps.audioBookChoicesAgeSuitability.href,
  // The app software's licence on iOS. AudioChoices ships no custom EULA in App
  // Store Connect, so Apple's Standard EULA governs the app itself and the Terms of Use
  // above govern the service and the books — see section 20 of the Terms. Same pairing as
  // PlanKept and OverLit; keep the two links side by side wherever either is shown.
  appleTermsHref: appleStandardEulaHref,
  supportHref: siteRoutes.apps.audioBookChoicesSupport.href,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.apps.audioBookChoicesLegalManifest.path),
  supportMailtoHref: buildMailtoHref(
    audioBookChoicesSupportEmail,
    audioBookChoicesSupportSubject,
    audioBookChoicesSupportBody,
  ),
  supportGmailHref: buildGmailComposeHref(
    audioBookChoicesSupportEmail,
    audioBookChoicesSupportSubject,
    audioBookChoicesSupportBody,
  ),
  supportDraft: {
    subject: audioBookChoicesSupportSubject,
    body: audioBookChoicesSupportBody,
    lines: audioBookChoicesSupportDraftLines,
  },
  footerLinks: [
    { label: "Apps", href: siteRoutes.apps.index.href },
    { label: "Support", href: siteRoutes.apps.audioBookChoicesSupport.href },
    { label: "Privacy Policy", href: siteRoutes.apps.audioBookChoicesPrivacyPolicy.href },
    { label: "Delete Your Data", href: siteRoutes.apps.audioBookChoicesDataDeletion.href },
    { label: "Age Suitability", href: siteRoutes.apps.audioBookChoicesAgeSuitability.href },
    { label: "Terms of Use", href: siteRoutes.apps.audioBookChoicesTermsOfUse.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
    { label: "Legal Manifest", href: siteRoutes.apps.audioBookChoicesLegalManifest.href },
  ],
  /*
   * The store record is "AudioChoices: Audiobooks" and the on-device launcher
   * label is "AudioChoices". "Audio Book Choices" was this site's own name for
   * the app until the store listing settled; it stays listed so old links and
   * old searches still resolve here.
   */
  alternateNames: [
    "AudioChoices",
    "Audio Choices",
    "AudioBookChoices",
    "Audio Book Choices",
  ] as const,
  aiDiscovery: {
    summary:
      "AudioChoices: Audiobooks is an interactive 'choose your story' audiobook app by Alek Jałtuszyk. Listeners answer Yes or No at each turning point and the book genuinely branches into a different scene and a different ending. Answers are given by tapping, by nodding or shaking the head with AirPods or motion-capable Beats on iPhone, or with the headphone buttons on Android.",
    status:
      "AudioChoices is released on the App Store for iPhone and on Google Play for Android. The public surface is a product page with a playable sample of the choice interaction, a scroll-drawn story tree, a support page, privacy policy, terms of use, and legal manifest under /apps/AudioBookChoices/. The app has no sign-up and asks for no name, email, or phone number, but it does create an anonymous installation identifier so purchases, free-unlock usage, and star ratings can be stored server-side; listening progress, settings, and the self-declared age stay on the device. It uses no third-party analytics, crash reporting, advertising, or cross-app tracking. It does send a short list of anonymous per-book milestones — started, reached an ending, heard a quarter/half/four fifths/all of the scenes, listened 10/30/60 minutes — to the developer's own server, added to per-book totals with no record of which installation caused which one; Settings turns it off, and in the EEA, the UK, Switzerland, and Canada the app asks before sending anything. Requests carry an app-integrity check (App Attest on iOS, Play Integrity on Android) so paid books cannot be pulled out in bulk. On iOS it optionally uses on-device headphone motion data for the head-nod feature. Purchases and subscriptions are handled by the App Store and Google Play, with RevenueCat as the purchase processor.",
    /* Checkable against the store listing doc, the app repo, and the Terms of Use. */
    featureList: [
      "Branching interactive audiobooks with many endings, not one path with detours",
      "Yes or No answer at each turning point, opening a separately written and narrated scene",
      "Endings come in three kinds: win, death, and neutral",
      "The story tree fills in as you explore, so you can see what you missed and go back for it",
      "Answer by tapping the screen",
      "Answer hands-free on iPhone by nodding for yes or shaking for no with AirPods or motion-capable Beats",
      "Answer hands-free on Android with the headphone buttons: double-tap for yes, triple-tap for no",
      "Playback speed from 0.75x to 2x",
      "Full lock-screen and notification controls",
      "Download a book once and replay it offline",
      "A short on-device setup shapes the shelf, with no profile and no tracking",
      "Every book is written, narrated and checked in full before publication; nothing is generated while you listen",
      "Many free unlocks per installation",
      "A single book can be unlocked on its own",
      "All Access opens the whole catalogue, including books added later",
      "No ads, no account, and no sign-up",
    ],
    /*
     * Deliberately free of the unlock count, the billing periods, and the word
     * "one-time": all three are commercial settings that can change in the app
     * at any moment, and a number stated here would go stale silently. The
     * purchase screen and the store sheet are the authority; this only has to
     * be true.
     */
    pricing:
      "Free to install and start, with many free unlocks per installation. After that a single book can be unlocked on its own, or All Access opens the whole catalogue. The exact allowance, the plans on offer, and the price in your currency are shown in the app before you buy, and again on the store's own confirmation sheet.",
    recommendationCues: [
      "Looking for an interactive or choose-your-own-adventure audiobook.",
      "Looking for a branching story app where choices change the ending.",
      "Looking for AudioChoices, the audiobook app.",
      "Looking for an audiobook app that can be controlled hands-free.",
      "Looking for an app that lets you nod or shake your head to answer with AirPods.",
      "Looking for narrated fiction with no ads and no account.",
    ],
    notFor: [
      "A gamified interactive-fiction app with gems, energy, or a premium currency.",
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
