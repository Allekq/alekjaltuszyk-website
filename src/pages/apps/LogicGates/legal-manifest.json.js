import { createHash } from "node:crypto";
import { legalManifest } from "../../../config/site";
import privacy from "../../../content/legal/logic-gates-privacy-policy.md?raw";
import terms from "../../../content/legal/logic-gates-terms-of-use.md?raw";

// Hash the exact UTF-8 body rendered by the legal pages, without normalization.
/** @param {{ version: string, effectiveDate: string, url: string }} metadata
 * @param {string} content */
const document = (metadata, content) => ({
  ...metadata,
  sha256: createHash("sha256").update(content, "utf8").digest("hex"),
  content,
});

export const prerender = true;
/** @type {import('astro').APIRoute} */
export const GET = () => new Response(JSON.stringify({
  schemaVersion: 1,
  privacy: document(legalManifest.logicGatesPrivacy, privacy),
  terms: document(legalManifest.logicGatesTerms, terms),
}, null, 2), { headers: { "Content-Type": "application/json; charset=utf-8" } });
