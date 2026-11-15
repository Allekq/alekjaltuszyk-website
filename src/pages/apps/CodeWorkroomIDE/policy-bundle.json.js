import bundle from "../../../content/legal/code-workroom-policy-bundle.json?raw";
import privacy from "../../../content/legal/code-workroom-privacy-policy.md?raw";
import terms from "../../../content/legal/code-workroom-terms-of-use.md?raw";
import { legalDocuments } from "../../../../site.config.mjs";
import { validateCodeWorkroomPolicy } from "../../../lib/codeWorkroomPolicy.mjs";

export const prerender = true;
/** @type {import('astro').APIRoute} */
export const GET = () => {
  validateCodeWorkroomPolicy(bundle, { privacy, terms }, {
    privacy: legalDocuments.codeWorkroomPrivacy,
    terms: legalDocuments.codeWorkroomTerms,
  });
  return new Response(bundle, { headers: { "Content-Type": "application/json; charset=utf-8" } });
};
