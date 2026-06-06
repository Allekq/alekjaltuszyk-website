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
  privacy: {
    version: "1.2.11",
    effectiveDate: "2026-06-06",
    path: "/PlanKept/privacy-policy/",
  },
  voiceOfSelfPrivacy: {
    version: "1.2.17",
    effectiveDate: "2026-06-06",
    path: "/apps/VoiceOfSelf/privacy-policy/",
  },
  voiceOfSelfTerms: {
    version: "1.2.15",
    effectiveDate: "2026-06-06",
    path: "/apps/VoiceOfSelf/terms-of-service/",
  },
  overLitPrivacy: {
    version: "1.0.12",
    effectiveDate: "2026-05-31",
    path: "/apps/OverLit/privacy-policy/",
  },
  overLitTerms: {
    version: "1.0.6",
    effectiveDate: "2026-05-31",
    path: "/apps/OverLit/terms-of-use/",
  },
  takeMeSomewherePrivacy: {
    version: "1.0.0",
    effectiveDate: "2026-06-06",
    path: "/apps/TakeMeSomewhere/privacy-policy/",
  },
  takeMeSomewhereTerms: {
    version: "1.0.0",
    effectiveDate: "2026-06-06",
    path: "/apps/TakeMeSomewhere/terms-of-service/",
  },
  terms: {
    version: "1.2.7",
    effectiveDate: "2026-06-06",
    path: "/PlanKept/terms-of-service/",
  },
};
