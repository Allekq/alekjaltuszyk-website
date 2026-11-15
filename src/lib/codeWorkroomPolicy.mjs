import { createHash } from 'node:crypto';

/** Validate the app-owned PolicyCore format without reserializing its bytes. */
export function validateCodeWorkroomPolicy(raw, sources, metadata) {
  const fail = (reason) => { throw new Error(`Code Workroom IDE policy bundle: ${reason}`); };
  const iso = (date) => typeof date === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(date)
    && Number.isFinite(Date.parse(date)) && new Date(date).toISOString() === date.replace('Z', '.000Z');
  if (Buffer.byteLength(raw, 'utf8') > 524288) fail('exceeds the 512 KiB transport limit');
  const bundle = JSON.parse(raw);
  if (bundle.schemaVersion !== 1 || !Number.isSafeInteger(bundle.revision) || bundle.revision < 0 || !iso(bundle.issuedAt)) fail('invalid schema, revision or issuedAt');
  // This initial publication deliberately carries only its English current pair.
  // Future-effective additions need an explicit publishing/selection review.
  if (!Array.isArray(bundle.documents) || bundle.documents.length !== 2) fail('expected exactly the reviewed English pair');
  const seen = new Set();
  for (const document of bundle.documents) {
    const id = document.identity;
    if (!id || !['terms', 'privacy'].includes(id.kind) || seen.has(id.kind) || id.locale !== 'en') fail('invalid or duplicate English identity');
    seen.add(id.kind);
    if (!iso(id.effectiveAt) || id.effectiveAt > bundle.issuedAt) fail('unreviewed effective date');
    if (document.isDraft !== false || typeof document.title !== 'string' || !document.title.trim() || Buffer.byteLength(document.title) > 200) fail('draft or invalid title');
    if (typeof document.markdown !== 'string' || !document.markdown.trim() || document.markdown.includes('\0') || Buffer.byteLength(document.markdown) > 200000) fail('invalid Markdown');
    if (document.markdown !== sources[id.kind]) fail(`${id.kind} differs from the canonical Markdown bytes`);
    const digest = createHash('sha256').update(document.markdown, 'utf8').digest('hex');
    if (id.sha256 !== digest || !/^[a-f0-9]{64}$/.test(id.sha256)) fail(`${id.kind} SHA-256 mismatch`);
    if (id.version !== metadata[id.kind].version || id.effectiveAt.slice(0, 10) !== metadata[id.kind].effectiveDate) fail(`${id.kind} masthead identity mismatch`);
  }
  return bundle;
}
