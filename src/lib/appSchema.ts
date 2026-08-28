/*
 * Structured data for the standalone app landing pages.
 *
 * One builder so all three pages emit the same shape and stay connected to the
 * site graph: every app links back to the Person and WebSite nodes that
 * `SiteLayout` already emits, rather than floating as an unattached island.
 *
 * Only assert what can be checked against the app repo, the store listing, or
 * the published legal pages. An absent field is better than a guessed one.
 */

import { siteConfig } from "../config/site";
import { siteRoutes } from "../config/routes";
import { toAbsoluteSiteUrl } from "./discovery";

const personId = `${siteConfig.origin}#person`;
const websiteId = `${siteConfig.origin}#website`;

export interface AppSchemaInput {
  /** Other names the app is known by — store name, on-device name, old names. */
  alternateNames?: readonly string[];
  applicationCategory: string;
  applicationSubCategory?: string;
  /** Store age rating, e.g. "13+". Omit unless it is actually set. */
  contentRating?: string;
  description: string;
  /** Store URL, when the app is released. A list when it ships on more than one store. */
  downloadUrl?: string | readonly string[];
  /** Short, checkable capability statements. */
  featureList: readonly string[];
  /** True only when the app is genuinely free to install and start using. */
  isAccessibleForFree?: boolean;
  name: string;
  operatingSystem: string;
  /** Absolute or base-safe image URLs of real screenshots. */
  screenshots?: readonly string[];
  /** Site-relative path of this app's page, e.g. "/apps/OverLit/". */
  path: string;
}

/**
 * Builds the JSON-LD graph for an app page: the app itself, a breadcrumb trail,
 * and a WebPage node tying the two together.
 */
export const buildAppStructuredData = ({
  alternateNames,
  applicationCategory,
  applicationSubCategory,
  contentRating,
  description,
  downloadUrl,
  featureList,
  isAccessibleForFree,
  name,
  operatingSystem,
  screenshots,
  path,
}: AppSchemaInput): Record<string, unknown>[] => {
  const url = toAbsoluteSiteUrl(path);
  const appId = `${url}#app`;

  const application: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": appId,
    name,
    url,
    description,
    applicationCategory,
    operatingSystem,
    featureList: [...featureList],
    inLanguage: "en",
    author: { "@id": personId },
    publisher: { "@id": personId },
    isPartOf: { "@id": websiteId },
  };

  if (alternateNames?.length) {
    application.alternateName = [...alternateNames];
  }

  if (applicationSubCategory) {
    application.applicationSubCategory = applicationSubCategory;
  }

  if (contentRating) {
    application.contentRating = contentRating;
  }

  if (downloadUrl && (typeof downloadUrl === "string" || downloadUrl.length > 0)) {
    const urls = typeof downloadUrl === "string" ? downloadUrl : [...downloadUrl];
    application.downloadUrl = urls;
    application.installUrl = urls;
  }

  if (isAccessibleForFree !== undefined) {
    application.isAccessibleForFree = isAccessibleForFree;
  }

  if (screenshots?.length) {
    application.screenshot = [...screenshots];
  }

  return [
    application,
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: siteConfig.identity.preferredName,
          item: toAbsoluteSiteUrl(siteRoutes.home.path),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Apps",
          item: toAbsoluteSiteUrl(siteRoutes.apps.index.path),
        },
        {
          "@type": "ListItem",
          position: 3,
          name,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${url}#page`,
      url,
      name,
      description,
      isPartOf: { "@id": websiteId },
      about: { "@id": appId },
      primaryImageOfPage: screenshots?.[0],
      inLanguage: "en",
    },
  ];
};
