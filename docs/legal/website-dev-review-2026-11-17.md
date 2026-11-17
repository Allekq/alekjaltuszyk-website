# Website dev review — 17 November 2026

Scope: all pending changes in the canonical website checkout, including the two
unpushed Code Workroom commits and the unrelated manifest work. The owner
explicitly authorized reviewing, fixing, committing and pushing dev. Main and
the public deployment are separate; the workflow deploys on pushes to main.

## Accepted changes and corrections

- Code Workroom landing, support and exact policy endpoint; current revision 4,
  Terms/Privacy 1.2.0. Free workspace and learning-focused marketing, without a
  fixed curriculum or paid-book pitch. Required purchase disclosures remain in
  the legal text. The app remains marked unreleased.
- Native scroll typing replaces the rejected video. Corrected real screenshots,
  phone gallery, responsive shell and fallback favicon retained. Removed the
  rejected video/poster and both unused superseded phone screenshots.
- OverLit and AudioChoices get exact existing Markdown and SHA-256 in their
  existing manifest endpoints. Logic Gates uses the same small hash helper.
  Existing policy bodies, dates, versions and document URLs are preserved.
  Finalized the unfinished dynamic-manifest receipt to distinguish actual
  baseline versions from unimplemented proposed bumps. Updated workflow guidance
  to distinguish prepared refresh clients from older binary-pinned releases.
- Fixed the homepage milestone that incorrectly described every portfolio app
  as shipped. Its count remains derived from appDirectory, and the neighboring
  release summary still identifies the unreleased apps.
- Historical review receipts retained as dated records; the 16 November
  follow-up supersedes earlier free-book and video findings.

## Validation

- Astro check: 327 files; no errors, warnings or hints.
- Production build: 87 HTML pages. Existing dependency/chunk-size build warnings
  are non-fatal; no new dependency was introduced.
- Legal consistency, contact addresses, private-publication boundary and diff
  whitespace checks passed.
- All 26 existing tests passed: policy contract (5), private boundary (6), theme
  (6) and workshop geometry/motion (9).
- Link scan: 87 HTML files, 165 distinct internal page/asset destinations,
  none missing.
- Local production preview: homepage, directory, all five Code Workroom routes
  and the three complete-document manifests returned 200 with exact built bytes.
  JSON MIME, content hashes and client response bounds passed.
- Code Workroom release Markdown, policy JSON and app fallback match exactly.
  OverLit legal_version_parity.py passed; AudioChoices bundled text and baseline
  metadata/hashes match its generated manifest. No sibling app source changed.
- Chrome desktop (1440px) and phone (390px): homepage, directory, Code Workroom
  hero and policy page inspected; no horizontal overflow in checked layouts,
  no broken loaded images and no warning/error console messages. Typing completes
  on scroll; Code Workroom has no video element. Prior 320px/no-JS/reduced-motion
  source checks are recorded in the 16 November report. Preview resources closed.

## Release boundaries

This is technical clearance to commit and push the reviewed website to dev, not
production or app-store release certification. Provider roles/agreements and
international-transfer details identified in the Code Workroom 16 November
review remain unverified; no contractual facts were invented. The prepared
OverLit/AudioChoices refresh clients still require the app owners' notice/release
alignment described in the final dynamic-manifest receipt. App Store submission,
main deployment, app implementations, account settings and private local files
were not changed. After a future authorized public deployment, verify the actual
HTTPS endpoints and app update/acceptance behavior.
