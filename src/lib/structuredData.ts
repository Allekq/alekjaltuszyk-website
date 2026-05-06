import type { PlanKeptFaqEntry } from "../config/planKeptContent";
import { planKeptConfig, siteConfig } from "../config/site";
import { toAbsoluteSiteUrl } from "./discovery";

export const personId = `${siteConfig.origin}#person`;
export const websiteId = `${siteConfig.origin}#website`;
export const planKeptAppId = `${siteConfig.origin}/apps/PlanKept/#app`;

export const buildPlanKeptBreadcrumbData = (
  items: readonly { name: string; path: string }[],
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: toAbsoluteSiteUrl(item.path),
  })),
});

export const buildPlanKeptWebPageData = ({
  title,
  path,
  description,
}: {
  title: string;
  path: string;
  description: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  url: toAbsoluteSiteUrl(path),
  description,
  about: { "@id": planKeptAppId },
  isPartOf: {
    "@type": "WebSite",
    "@id": websiteId,
  },
  author: { "@id": personId },
  publisher: { "@id": personId },
});

export const buildPlanKeptFaqData = (faq: readonly PlanKeptFaqEntry[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.answer,
    },
  })),
});

export const buildPlanKeptArticleData = ({
  title,
  path,
  description,
  date,
}: {
  title: string;
  path: string;
  description: string;
  date: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: title,
  name: title,
  url: toAbsoluteSiteUrl(path),
  description,
  datePublished: date,
  dateModified: date,
  author: { "@id": personId },
  publisher: { "@id": personId },
  about: { "@id": planKeptAppId },
});

export const planKeptApplicationStructuredData = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "MobileApplication"],
  "@id": planKeptAppId,
  name: planKeptConfig.name,
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "Achievement-gated app blocker",
  url: toAbsoluteSiteUrl("/apps/PlanKept/"),
  image: siteConfig.defaultSocialImageUrl,
  description: planKeptConfig.aiDiscovery.summary,
  featureList: [
    "Achievement-gated app blocking",
    "App blocks and minute caps tied to active plans",
    "Recurring plan occurrences and weekly quotas",
    "Apple Health step and workout proof when allowed",
    "Submitted photo and screenshot evidence for proof review",
    "Proof-based follow-through",
    "Local-first iPhone workflow",
  ],
  keywords:
    "app blocker, achievement-gated app blocker, goal-based app blocker, step goal app blocker, workout app blocker, habit quota app blocker, screen time",
  publisher: { "@id": personId },
  creator: { "@id": personId },
};
