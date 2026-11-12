// Mechanical consistency only: this cannot assess legal compliance or live settings.
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { legalDocuments, siteOrigin } from '../site.config.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const errors = [];
const exists = async (relative) => {
  try { await access(path.join(root, relative)); return true; }
  catch { errors.push(`Missing file: ${relative}`); return false; }
};
const groups = new Map();
for (const [key, doc] of Object.entries(legalDocuments)) {
  await exists(doc.sourcePath);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(doc.effectiveDate)) errors.push(`${key}: invalid effective date`);
  if (!doc.version || !doc.path.startsWith('/') || !doc.path.endsWith('/')) errors.push(`${key}: invalid version/path`);
  const route = `src/pages${doc.path}index.astro`;
  await exists(route);
  if (doc.path.startsWith('/apps/')) {
    const appRoot = doc.path.split('/').slice(0, 3).join('/');
    if (!groups.has(appRoot)) groups.set(appRoot, []);
    const type = key.endsWith('Privacy') ? 'privacy' : key.endsWith('Terms') ? 'terms' : key.endsWith('AIUsage') ? 'aiUsage' : null;
    if (!type) errors.push(`${key}: unknown manifest document type`);
    else groups.get(appRoot).push({ key, type, doc });
  }
}
const skill = await readFile(path.join(root, 'skills/legal-update-sync/SKILL.md'), 'utf8');
const checklist = await readFile(path.join(root, 'skills/legal-update-sync/CHECKLIST.md'), 'utf8');
for (const ref of (skill + checklist).matchAll(/`((?:src|skills)\/[^`]+)`/g)) {
  if (!ref[1].includes('*') && !ref[1].endsWith('/')) await exists(ref[1]);
}
await exists('skills/legal-update-sync/CHANGE-REVIEW.md');

if (!process.argv.includes('--source-only')) {
  for (const [appRoot, entries] of groups) {
    const manifestPath = `dist${appRoot}/legal-manifest.json`;
    if (!(await exists(manifestPath))) continue;
    try {
      const manifest = JSON.parse(await readFile(path.join(root, manifestPath), 'utf8'));
      if (appRoot === '/apps/LogicGates' && manifest.schemaVersion !== 1) errors.push('Logic Gates: expected manifest schemaVersion 1');
      for (const { key, type, doc } of entries) {
        const generated = manifest[type];
        if (generated?.version !== doc.version || generated?.effectiveDate !== doc.effectiveDate) errors.push(`${key}: generated manifest version/date differs from source`);
        if (!generated?.url || new URL(generated.url).pathname !== doc.path) errors.push(`${key}: generated manifest document URL differs from source`);
        if (appRoot === '/apps/LogicGates') {
          const source = await readFile(path.join(root, doc.sourcePath), 'utf8');
          const digest = createHash('sha256').update(source, 'utf8').digest('hex');
          if (generated?.content !== source) errors.push(`${key}: manifest content differs from canonical Markdown`);
          if (!/^[a-f0-9]{64}$/.test(generated?.sha256 ?? '') || generated.sha256 !== digest) errors.push(`${key}: incorrect canonical UTF-8 SHA-256`);
          if (!/^(0|[1-9]\d{0,6})\.(0|[1-9]\d{0,6})\.(0|[1-9]\d{0,6})$/.test(doc.version)) errors.push(`${key}: expected numeric major.minor.patch version`);
          const url = new URL(generated.url);
          if (url.protocol !== 'https:' || url.origin !== new URL(siteOrigin).origin || url.search || url.hash || url.username || url.password) errors.push(`${key}: expected same-origin HTTPS document URL`);
        }
        await exists(`dist${doc.path}index.html`);
      }
    } catch (error) { errors.push(`${manifestPath}: ${error.message}`); }
  }
}
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Legal source paths${process.argv.includes('--source-only') ? '' : ' and built app manifests'} are consistent. This is not a legal compliance assessment.`);
}
