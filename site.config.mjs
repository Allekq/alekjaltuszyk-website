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
    version: "1.2.6",
    effectiveDate: "2026-05-20",
    path: "/PlanKept/privacy-policy/",
  },
  overLitPrivacy: {
    version: "1.0.2",
    effectiveDate: "2026-05-20",
    path: "/apps/OverLit/privacy-policy/",
  },
  terms: {
    version: "1.2.3",
    effectiveDate: "2026-05-20",
    path: "/PlanKept/terms-of-service/",
  },
};
