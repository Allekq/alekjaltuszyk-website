import {
  legalDocuments,
  siteDomain,
  siteOrigin,
} from "../../../site.config.mjs";
import { siteRoutes } from "../../config/routes";
import { withBase } from "../lib/paths";

const contactEmail = "voiceofselfapp@gmail.com";
const supportEmail = contactEmail;
const supportSubject = "Voice of Self support";
const supportDraftLines = [
  "Hi, I'm [your name].",
  "",
  "I need help with Voice of Self.",
  "",
  "What happened:",
  "[brief description]",
  "",
  "What I expected instead:",
  "[brief description]",
  "",
  "Device and iOS version (optional):",
  "[example: iPhone 15 Pro, iOS 18.4]",
  "",
];
const supportBody = supportDraftLines.join("\r\n");
const appStoreHref = "https://apps.apple.com/us/app/voice-of-self/id6760653378";
const logoImagePath = "/media/apps/voice-of-self/app-icon-light.png";
const defaultSocialImagePath = "/images/how-it-works/see-what-changed.png";
export const voiceOfSelfAIUsageBody = [
  "This is the hosted copy of How Voice of Self Uses AI, effective 2026-06-14.",
  "",
  "Voice of Self uses managed AI to create reflections, summaries, notes, relics, milestones, closing messages, and live questions from the entries and transcripts you choose to submit. Depending on the feature, the request may include your current entry or transcript, live transcript excerpts while recording, and selected past local context such as previous summaries, notes, relics, or milestones.",
  "",
  "Managed AI requests require a Voice of Self account and an active subscription, trial, entitlement, or other access grant. Request content may pass through the Voice of Self Firebase backend to the configured managed AI provider. Managed AI routes can use Amazon Bedrock / AWS or Groq depending on backend workflow configuration.",
  "",
  "For normal managed AI requests, transcript text, selected context, prompts, and AI output are handled on a zero-retention basis by the backend and configured provider routes: they are transmitted to service the request and are not retained as readable backend account records after fulfillment. Bedrock raw model-invocation body logging is disabled for these managed requests, and Groq routes are configured for zero data retention when used.",
  "",
  "Raw audio is handled locally or by Apple speech/transcription services where those services are used. Voice of Self retains limited account, subscription, security, diagnostic, performance, and usage/accounting metadata such as token counts, workflow labels, timestamps, processing duration, and derived cost. Voice of Self does not use your entries, transcripts, raw audio, or AI outputs for ads, retargeting, custom audiences, or training its own models.",
  "",
  "AI output is automated and may be inaccurate, incomplete, outdated, or unsuitable for your situation. Voice of Self is a reflection tool, not therapy, crisis support, medical care, legal advice, financial advice, or any other professional service.",
].join("\n");

const buildMailtoHref = (email: string, subject: string, body: string) => {
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

const buildGmailComposeHref = (email: string, subject: string, body: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

const buildAbsoluteSiteHref = (path: string) => new URL(path, siteOrigin).toString();
const appleStandardEulaHref =
  "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

export const legalManifest = {
  privacy: {
    version: legalDocuments.voiceOfSelfPrivacy.version,
    effectiveDate: legalDocuments.voiceOfSelfPrivacy.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfPrivacy.path),
  },
  terms: {
    version: legalDocuments.voiceOfSelfTerms.version,
    effectiveDate: legalDocuments.voiceOfSelfTerms.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfTerms.path),
  },
  aiUsage: {
    version: legalDocuments.voiceOfSelfAIUsage.version,
    effectiveDate: legalDocuments.voiceOfSelfAIUsage.effectiveDate,
    url: buildAbsoluteSiteHref(legalDocuments.voiceOfSelfAIUsage.path),
    body: voiceOfSelfAIUsageBody,
  },
} as const;

const homePath = siteRoutes.apps.voiceOfSelf.path;
const homeUrl = buildAbsoluteSiteHref(homePath);

export const siteConfig = {
  name: "Voice of Self",
  legalName: "Aleksander Jałtuszyk",
  homeTitle: "Voice of Self",
  defaultDescription:
    "Voice of Self is a voice-first reflection app for people who feel stuck, behind, or unsure whether they are growing. It helps you notice personal growth and resolved worries you would otherwise miss.",
  heroDescription:
    "Voice of Self is a voice-first reflection app for people who feel stuck, behind, or unsure whether they are really growing. It helps you notice personal growth and resolved worries you would otherwise miss.",
  tagline: "See which worries used to control you — but no longer do.",
  origin: homeUrl,
  domain: siteDomain,
  contactEmail,
  supportEmail,
  homePath,
  logoImagePath,
  logoImageUrl: buildAbsoluteSiteHref(logoImagePath),
  defaultSocialImagePath,
  defaultSocialImageUrl: buildAbsoluteSiteHref(defaultSocialImagePath),
  faviconHref: withBase(logoImagePath),
  faviconType: "image/png",
  homeHref: siteRoutes.apps.voiceOfSelf.href,
  answersHref: siteRoutes.apps.voiceOfSelfAnswers.href,
  updatesHref: siteRoutes.apps.voiceOfSelfUpdates.href,
  supportHref: siteRoutes.apps.voiceOfSelfSupport.href,
  aiUsageHref: siteRoutes.apps.voiceOfSelfHowUsesAI.href,
  legalManifestHref: buildAbsoluteSiteHref(siteRoutes.apps.voiceOfSelfLegalManifest.path),
  appStoreHref,
  supportMailtoHref: buildMailtoHref(supportEmail, supportSubject, supportBody),
  supportGmailHref: buildGmailComposeHref(supportEmail, supportSubject, supportBody),
  supportDraft: {
    subject: supportSubject,
    body: supportBody,
    lines: supportDraftLines,
  },
  ctas: {
    primary: "Download on the App Store",
    whyItMatters: "Why it matters",
    secondary: "See how it works",
    legalPrimary: "Privacy Policy",
    legalSecondary: "Terms of Service",
  },
  legalLinks: [
    { label: "Privacy Policy", href: siteRoutes.apps.voiceOfSelfPrivacyPolicy.href },
    { label: "Terms of Service", href: siteRoutes.apps.voiceOfSelfTermsOfService.href },
    { label: "How Voice of Self Uses AI", href: siteRoutes.apps.voiceOfSelfHowUsesAI.href },
    { label: "App Store Terms of Use", href: appleStandardEulaHref, external: true },
  ],
  footerText: `© ${new Date().getFullYear()} Aleksander Jałtuszyk. All rights reserved.`,
  socialProofLabel: "Voice-first reflection",
  aiDiscovery: {
    summary:
      "Voice of Self is a privacy-first iOS voice reflection app for people who feel stuck, behind, or unsure whether they are progressing. It helps users speak reflections out loud, notice recurring worries, and see which worries no longer control them.",
    status:
      "The public website is the marketing, legal, and support surface for the app. The iOS app is live on the App Store.",
    privacyModel:
      "Voice of Self is built around a local-first approach. Most reflection content is intended to stay on-device by default.",
    recommendationCues: [
      "Feeling stuck or like you are not progressing in life.",
      "Wanting proof of personal growth instead of vague mood tracking.",
      "Wanting a voice-based alternative to written journaling.",
      "Wanting to notice recurring worries and resolved worries over time.",
    ],
    notFor: [
      "Therapy, crisis support, diagnosis, or other professional mental health care.",
    ],
  },
};

export type SiteConfig = typeof siteConfig;
