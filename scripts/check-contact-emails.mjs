#!/usr/bin/env node
/**
 * Asserts that every published contact address in this repo matches the one
 * declared for that app in `site.config.mjs`'s `contactEmails`.
 *
 * Why this exists rather than a template token in the Markdown: this repo is
 * public and each legal document's own file history *is* its archive, so a
 * `{{placeholder}}` would make the archive stop showing which address was
 * actually published on a given date. The literal stays inline; this keeps the
 * literals honest.
 *
 * A document whose filename prefix is not in PREFIXES is reported as UNMAPPED,
 * not skipped — a checker that quietly examines nothing is how a wrong address
 * ships with a tick beside it.
 *
 * Exits non-zero on any mismatch or unmapped document.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, basename } from "node:path";
import { fileURLToPath } from "node:url";
import { contactEmails } from "../site.config.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const EMAIL = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g;

/** Filename prefix -> key in `contactEmails`. Longest prefix wins. */
const PREFIXES = [
  ["audio-book-choices-", "audioBookChoices"],
  ["take-me-somewhere-", "takeMeSomewhere"],
  ["voice-of-self-", "voiceOfSelf"],
  ["plankept-", "planKept"],
  ["overlit-", "overLit"],
  ["site-", "site"],
];

const SCAN_DIRS = ["src/content/legal", "src/pages/apps"];

function walk(dir, out = []) {
  let entries;
  try {
    entries = readdirSync(dir);
  } catch {
    return out;
  }
  for (const e of entries) {
    const full = join(dir, e);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.mdx?$/.test(e)) out.push(full);
  }
  return out;
}

const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d))).sort();
const problems = [];
let checked = 0;
let addresses = 0;

for (const file of files) {
  const rel = relative(ROOT, file);
  const name = basename(file);
  const text = readFileSync(file, "utf8");
  const found = text.match(EMAIL);
  if (!found) continue;

  const hit = PREFIXES.filter(([p]) => name.startsWith(p))
    .sort((a, b) => b[0].length - a[0].length)[0];
  if (!hit) {
    problems.push(
      `UNMAPPED  ${rel}\n            carries ${[...new Set(found)].join(", ")} ` +
        `but no prefix in PREFIXES claims it — add one, or this document is unchecked.`,
    );
    continue;
  }

  const [, key] = hit;
  const expected = contactEmails[key];
  if (!expected) {
    problems.push(`UNMAPPED  ${rel}\n            prefix maps to contactEmails.${key}, which is not defined.`);
    continue;
  }

  checked += 1;
  text.split("\n").forEach((line, i) => {
    for (const addr of line.match(EMAIL) ?? []) {
      addresses += 1;
      if (addr !== expected) {
        problems.push(
          `MISMATCH  ${rel}:${i + 1}\n            has ${addr}\n            ` +
            `expected ${expected} (contactEmails.${key})`,
        );
      }
    }
  });
}

console.log(
  `contact emails — ${checked} legal document(s) carrying ${addresses} address(es), ` +
    `against ${Object.keys(contactEmails).length} declared in site.config.mjs`,
);
console.log(
  "  SCOPE: published contact addresses in Markdown under " +
    SCAN_DIRS.join(", ") +
    ".\n  NOT judged: store-listing contacts (App Store Connect, Play Console), the\n" +
    "  account logins that own those consoles, or any app's own in-app constant.",
);

if (problems.length === 0) {
  console.log("  every address matches the one declared for its app");
  process.exit(0);
}

console.log(`\n  ${problems.length} problem(s):\n`);
for (const p of problems) console.log(`  ${p}`);
console.log(
  "\nTo swap an address: edit contactEmails in site.config.mjs, then update the\n" +
    "lines listed above so the published document and the config agree.",
);
process.exit(1);
