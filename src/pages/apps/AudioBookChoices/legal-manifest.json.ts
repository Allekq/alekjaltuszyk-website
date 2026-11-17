import type { APIRoute } from "astro";
import { legalDocuments, siteOrigin } from "../../../../site.config.mjs";
import { legalDocument } from "../../../lib/legalDocument.js";
import privacy from "../../../content/legal/audio-book-choices-privacy-policy.md?raw";
import terms from "../../../content/legal/audio-book-choices-terms-of-use.md?raw";

export const prerender = true;

const absoluteHref = (path: string) => new URL(path, siteOrigin).toString();

const legalManifest = {
  schemaVersion: 1,
  privacy: legalDocument({
    version: legalDocuments.audioBookChoicesPrivacy.version,
    effectiveDate: legalDocuments.audioBookChoicesPrivacy.effectiveDate,
    url: absoluteHref(legalDocuments.audioBookChoicesPrivacy.path),
  }, privacy),
  terms: legalDocument({
    version: legalDocuments.audioBookChoicesTerms.version,
    effectiveDate: legalDocuments.audioBookChoicesTerms.effectiveDate,
    url: absoluteHref(legalDocuments.audioBookChoicesTerms.path),
  }, terms),
} as const;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(legalManifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
