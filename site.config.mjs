const normalizeBasePath = (value) => {
  if (!value || value === "/") {
    return "/";
  }

  return value.endsWith("/") ? value : `${value}/`;
};

const defaultSiteOrigin = "https://alekjaltuszyk.xyz";
const defaultSiteBasePath = "/";

export const siteOrigin = process.env.PUBLIC_SITE_ORIGIN ?? defaultSiteOrigin;
export const siteDomain = new URL(siteOrigin).host;
export const siteBasePath = normalizeBasePath(
  process.env.PUBLIC_SITE_BASE_PATH ?? defaultSiteBasePath,
);

export const legalDocuments = {
  sitePrivacy: {
    version: "1.0.0",
    effectiveDate: "2026-06-08",
    path: "/privacy-policy/",
  },
  siteTerms: {
    version: "1.0.0",
    effectiveDate: "2026-06-08",
    path: "/terms/",
  },
  planKeptPrivacy: {
    version: "1.2.14",
    effectiveDate: "2026-06-20",
    path: "/apps/PlanKept/privacy-policy/",
  },
  planKeptTerms: {
    version: "1.2.9",
    effectiveDate: "2026-06-20",
    path: "/apps/PlanKept/terms-of-service/",
  },
  voiceOfSelfPrivacy: {
    version: "1.2.22",
    effectiveDate: "2026-06-20",
    path: "/apps/VoiceOfSelf/privacy-policy/",
  },
  voiceOfSelfTerms: {
    version: "1.2.16",
    effectiveDate: "2026-06-08",
    path: "/apps/VoiceOfSelf/terms-of-service/",
  },
  voiceOfSelfAIUsage: {
    version: "2026-06-20-v1",
    effectiveDate: "2026-06-20",
    path: "/apps/VoiceOfSelf/how-voice-of-self-uses-ai/",
  },
  overLitPrivacy: {
    version: "1.0.24",
    effectiveDate: "2026-06-29",
    path: "/apps/OverLit/privacy-policy/",
  },
  overLitTerms: {
    version: "1.0.11",
    effectiveDate: "2026-06-21",
    path: "/apps/OverLit/terms-of-use/",
  },
  takeMeSomewherePrivacy: {
    version: "1.0.3",
    effectiveDate: "2026-06-08",
    path: "/apps/TakeMeSomewhere/privacy-policy/",
  },
  takeMeSomewhereTerms: {
    version: "1.0.4",
    effectiveDate: "2026-06-08",
    path: "/apps/TakeMeSomewhere/terms-of-service/",
  },
  audioBookChoicesPrivacy: {
    version: "2.0.0",
    effectiveDate: "2026-07-24",
    path: "/apps/AudioBookChoices/privacy-policy/",
  },
  audioBookChoicesTerms: {
    version: "2.0.0",
    effectiveDate: "2026-07-24",
    path: "/apps/AudioBookChoices/terms-of-use/",
  },
};
