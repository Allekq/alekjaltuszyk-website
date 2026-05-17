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
    version: "1.2.5",
    effectiveDate: "2026-05-17",
    path: "/PlanKept/privacy-policy/",
  },
  terms: {
    version: "1.2.2",
    effectiveDate: "2026-05-05",
    path: "/PlanKept/terms-of-service/",
  },
};
