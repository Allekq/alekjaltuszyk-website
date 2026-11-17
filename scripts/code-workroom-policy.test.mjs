import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { validateCodeWorkroomPolicy } from '../src/lib/codeWorkroomPolicy.mjs';
import { legalDocuments } from '../site.config.mjs';

const read = (file) => readFileSync(new URL(`../src/content/legal/${file}`, import.meta.url), 'utf8');
const raw = read('code-workroom-policy-bundle.json');
const sources = { terms: read('code-workroom-terms-of-use.md'), privacy: read('code-workroom-privacy-policy.md') };
const metadata = { terms: legalDocuments.codeWorkroomTerms, privacy: legalDocuments.codeWorkroomPrivacy };
const check = (data) => validateCodeWorkroomPolicy(data, sources, metadata);
const changed = (edit) => { const bundle = JSON.parse(raw); edit(bundle); return JSON.stringify(bundle); };

test('canonical app bundle is a complete English release pair', () => {
  const bundle = check(raw);
  assert.equal(bundle.revision, 4);
  assert.deepEqual(new Set(bundle.documents.map(d => d.identity.kind)), new Set(['terms', 'privacy']));
});
test('rejects whitespace edits instead of silently normalizing policy identity', () => {
  assert.throws(() => check(changed(b => { b.documents[0].markdown += '\n'; })), /canonical Markdown bytes/);
});
test('rejects digest tampering and metadata drift', () => {
  assert.throws(() => check(changed(b => { b.documents[0].identity.sha256 = '0'.repeat(64); })), /SHA-256/);
  assert.throws(() => check(changed(b => { b.documents[0].identity.version = '1.0.1'; })), /masthead identity/);
});
test('rejects drafts, duplicate kinds, future dates and fractional timestamps', () => {
  assert.throws(() => check(changed(b => { b.documents[0].isDraft = true; })), /draft/);
  assert.throws(() => check(changed(b => { b.documents[1] = b.documents[0]; })), /duplicate/);
  assert.throws(() => check(changed(b => { b.documents[0].identity.effectiveAt = '2027-01-01T00:00:00Z'; })), /effective date/);
  assert.throws(() => check(changed(b => { b.issuedAt = '2026-11-15T00:00:00.001Z'; })), /issuedAt/);
});
test('rejects responses beyond the app transport limit', () => {
  assert.throws(() => check(raw + ' '.repeat(524288)), /512 KiB/);
});
