import type { APIRoute } from "astro";
import { legalDocuments, siteOrigin } from "../../../../site.config.mjs";

export const prerender = true;

const absoluteHref = (path: string) => new URL(path, siteOrigin).toString();

const legalManifest = {
  privacy: {
    version: legalDocuments.planKeptPrivacy.version,
    effectiveDate: legalDocuments.planKeptPrivacy.effectiveDate,
    url: absoluteHref(legalDocuments.planKeptPrivacy.path),
  },
  terms: {
    version: legalDocuments.planKeptTerms.version,
    effectiveDate: legalDocuments.planKeptTerms.effectiveDate,
    url: absoluteHref(legalDocuments.planKeptTerms.path),
  },
} as const;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(legalManifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
