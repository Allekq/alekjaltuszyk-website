import { createHash } from "node:crypto";

/**
 * Hash exactly the UTF-8 Markdown rendered by the legal page. Never trim or
 * normalize content: app caches and explicit review identify these same bytes.
 * @param {{ version: string, effectiveDate: string, url: string }} metadata
 * @param {string} content
 */
export const legalDocument = (metadata, content) => ({
  ...metadata,
  sha256: createHash("sha256").update(content, "utf8").digest("hex"),
  content,
});
