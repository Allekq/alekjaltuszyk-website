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
    version: "1.1.0",
    effectiveDate: "2026-04-17",
    path: "/privacy-policy/",
  },
  terms: {
    version: "1.1.0",
    effectiveDate: "2026-04-17",
    path: "/terms-of-service/",
  },
};
