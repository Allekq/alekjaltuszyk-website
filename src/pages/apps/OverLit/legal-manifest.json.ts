import type { APIRoute } from "astro";
import { legalDocuments, siteOrigin } from "../../../../site.config.mjs";
import { legalDocument } from "../../../lib/legalDocument.js";
import privacy from "../../../content/legal/overlit-privacy-policy.md?raw";
import terms from "../../../content/legal/overlit-terms-of-use.md?raw";

export const prerender = true;

const absoluteHref = (path: string) => new URL(path, siteOrigin).toString();

const legalManifest = {
  schemaVersion: 1,
  privacy: legalDocument({
    version: legalDocuments.overLitPrivacy.version,
    effectiveDate: legalDocuments.overLitPrivacy.effectiveDate,
    url: absoluteHref(legalDocuments.overLitPrivacy.path),
  }, privacy),
  terms: legalDocument({
    version: legalDocuments.overLitTerms.version,
    effectiveDate: legalDocuments.overLitTerms.effectiveDate,
    url: absoluteHref(legalDocuments.overLitTerms.path),
  }, terms),
} as const;

export const GET: APIRoute = () =>
  new Response(JSON.stringify(legalManifest, null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });
