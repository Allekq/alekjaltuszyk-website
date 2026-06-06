import type { APIRoute } from "astro";
import { legalDocuments, siteOrigin } from "../../../../site.config.mjs";

export const prerender = true;

const absoluteHref = (path: string) => new URL(path, siteOrigin).toString();

const legalManifest = {
  privacy: {
    version: legalDocuments.takeMeSomewherePrivacy.version,
    effectiveDate: legalDocuments.takeMeSomewherePrivacy.effectiveDate,
    url: absoluteHref(legalDocuments.takeMeSomewherePrivacy.path),
  },
  terms: {
    version: legalDocuments.takeMeSomewhereTerms.version,
    effectiveDate: legalDocuments.takeMeSomewhereTerms.effectiveDate,
    url: absoluteHref(legalDocuments.takeMeSomewhereTerms.path),
  },
} as const;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(legalManifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
