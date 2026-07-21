import type { APIRoute } from "astro";
import { legalDocuments, siteOrigin } from "../../../../site.config.mjs";

export const prerender = true;

const absoluteHref = (path: string) => new URL(path, siteOrigin).toString();

const legalManifest = {
  privacy: {
    version: legalDocuments.audioBookChoicesPrivacy.version,
    effectiveDate: legalDocuments.audioBookChoicesPrivacy.effectiveDate,
    url: absoluteHref(legalDocuments.audioBookChoicesPrivacy.path),
  },
  terms: {
    version: legalDocuments.audioBookChoicesTerms.version,
    effectiveDate: legalDocuments.audioBookChoicesTerms.effectiveDate,
    url: absoluteHref(legalDocuments.audioBookChoicesTerms.path),
  },
} as const;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(legalManifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
