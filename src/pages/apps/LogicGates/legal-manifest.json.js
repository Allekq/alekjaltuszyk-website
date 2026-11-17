import { legalDocument } from "../../../lib/legalDocument.js";
import { legalManifest } from "../../../config/site";
import privacy from "../../../content/legal/logic-gates-privacy-policy.md?raw";
import terms from "../../../content/legal/logic-gates-terms-of-use.md?raw";

export const prerender = true;
/** @type {import('astro').APIRoute} */
export const GET = () => new Response(JSON.stringify({
  schemaVersion: 1,
  privacy: legalDocument(legalManifest.logicGatesPrivacy, privacy),
  terms: legalDocument(legalManifest.logicGatesTerms, terms),
}, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
