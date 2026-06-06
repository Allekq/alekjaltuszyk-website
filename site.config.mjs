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
  terms: {
    version: "1.2.7",
    effectiveDate: "2026-06-06",
    path: "/PlanKept/terms-of-service/",
  },
};
