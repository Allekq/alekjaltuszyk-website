# Code Workroom IDE website review — 2026-11-15

Historical preparation receipt. The later [independent review](code-workroom-independent-review-2026-11-15.md) supersedes the policy versions, hashes, pricing wording and validation status below.

Local preparation only. No deployment, App Store changes or app-repository edits are authorized by this receipt. Source app: `/Users/alekj/Documents/GitHub/Code Workroom`. Existing unrelated manifest work is preserved.

## Before implementation

| Item | Evidence and decision |
| --- | --- |
| Data flow | Add static product/support/legal pages and exact PolicyCore bundle endpoint. GitHub Pages receives IP/request metadata and retains security logs. Optional support uses the existing personal Gmail mailbox, alekgameshelp2@gmail.com. No website form, tracking, app identifiers or acceptance receipts added. |
| Lawful processing | Supplied canonical notice must identify the operator and purposes/bases for limited policy delivery and voluntary support. No optional consent inferred from legal acceptance. Provider-owned purposes/retention remain subject to its notice; no custom DPA, region or zero-retention terms verified. |
| Choice and age | Product remains unreleased. No store age rating, release date or invented age-verification mechanism. App owner authors canonical age/consent wording; website must preserve its exact bytes. |
| Lifecycle | App projects/history and credentials remain app-owned local behavior. Support should ask only for a small sanitized reproduction, never tokens or complete repositories. Provider backups and host logs cannot be promised immediate erasure. No fixed host security-log TTL verified. |
| Security | PolicyCore requires direct 200 application/json, schema 1, unsigned increasing revision, ISO8601 whole-second dates, exact UTF-8 Markdown hashes, 2–16 documents, English terms/privacy and a 512 KiB cap. No redirects or cookies/credential sessions supported by app transport. |
| Public promises | README is the feature evidence: bundled Python/C/C++, source editing, local learning projects, source history, user-directed HTTPS Git. Current subjects free; future StoreKit is not presented as a present purchase. Optional local AI is off by default and device-dependent. No unrestricted terminal, C/C++ debugger or arbitrary package-install claims. |
| Release | Website and app copies must match supplied release/app-store/en-US/legal bytes. Media remains absent until real files are supplied. App owner owns final binary, receipts/cache, physical-device and App Privacy verification. Website endpoint must be deployed and tested before app submission/release. |
| Result | Implementation in progress. Canonical release policies and media pending from app owner at start; no fabricated legal documents or screenshots. |

## Hosting evidence

Checked 2026-11-15:

- [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection): Pages logs and stores visitor IP addresses for security, including signed-out visits.
- [GitHub General Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement): purpose/necessity-based retention and international processing; no fixed Pages visitor-log deletion schedule established.
- [Apple App Privacy details](https://developer.apple.com/app-store/app-privacy-details/): app owner must assess automatic hosting requests separately from optional support. Local projects alone do not establish “Data Not Collected.” Store classifications are not verified by this website work.

Findings and canonical URL handoff are maintained at `/tmp/code-workroom-website-handoff.txt` for the coordinating app chat. No external messages or store submissions are made by this task.

## Final local verification

- Imported the app owner's supplied Terms, Privacy and JSON byte-for-byte. Both documents are version **1.0.0**, effective **2026-11-15T00:00:00Z**. Bundle **revision 2**, issued at that same instant; `isDraft: false`.
- Terms SHA-256: `8fe7b8425b2f1897d6b0a0d891133bccd11a946289c48dfc6b9a451840502f31`.
- Privacy SHA-256: `665db1d18251802be7cdfeb6575f05e16dca9d2696661fc1b1ece393d478f00b`.
- Exact hosted JSON: **14,618 bytes**, SHA-256 `13430cfc942f27092c13ee7d27d4ae74cfccd6d5e5097f332e5823c9c56b7086`. Well below the client's 524,288-byte cap.
- Local preview returned **200 application/json**, no redirect. Build output is byte-for-byte identical to the supplied JSON. The app's Swift transport still needs a production HTTPS integration check after deployment.
- Markdown remains immutable in the repository. A narrowly scoped Markdown rendering plugin omits its duplicate title/version presentation nodes; the shared legal masthead displays the same identity. Each rendered legal page has one H1 and the common revision-history link.
- `npm run check`: 0 errors, 0 warnings, 0 hints. `npm run build`, `npm run check:legal`, `npm run check:contact`, build-time private-boundary checks, `git diff --check`, and all five policy-contract rejection tests passed.
- Browser verification: product/support/Terms/Privacy routes return 200; exact support mailbox; footer and hub links; app directory, sitemap and LLM discovery include the app; one data-derived unreleased directory entry. No fake store URL or download CTA.
- Product page checked at 390, 768 and 1440 CSS pixels without horizontal overflow; desktop/light, desktop/dark, phone and directory card visually inspected. Details open correctly and content/navigation works without JavaScript. No product-page JavaScript errors. The browser requested a missing generic favicon.ico when inspecting machine-readable discovery output; app pages use their existing explicit icon links.
- App icon and final real media copied from the app release directory; byte parity verified between source, website-owned assets and build output. The initial empty media slots were filled in the follow-up described below.

## Remaining publication and app-owner work

The website is **prepared locally, not pushed or deployed**. No App Store listing or metadata was changed. Publish the reviewed website commit first, then check the exact public JSON URL without following redirects and compare its body/hash to the app fallback. Only then release an app configured to request it. Current canonical URLs are `/apps/CodeWorkroomIDE/`, `support/`, `privacy-policy/`, `terms-of-use/`, and `policy-bundle.json` under that base.

The supplied operator, country, mailbox and host agree with the established website facts. The app owner resolved the privacy section 3 specificity finding before publication: it now explicitly states that GitHub logs and stores visitor IP addresses for security. The website resynchronized the owner's exact revised Markdown and JSON. Version 1.0.0 / revision 2 remains the initial unpublished identity; no published bytes were replaced under an existing identity. The hashes above identify the final supplied bundle. Provider contract/retention configuration and App Store privacy classification remain unverified; no universal compliance or store-clearance conclusion is made.

## Real media integration

The app owner supplied final release captures after the initial page commit. The header now uses the actual 1200×900 H.264 recording (26 seconds, no audio track), with native controls, muted inline playback, a poster and a text description. There is no autoplay or loop, including under reduced motion, and `preload="none"` avoids a forced video download. The gallery contains four iPad and two iPhone captures with descriptive alternatives, lazy loading, preserved aspect ratios and links to their full-resolution originals. All media is served from this website's own static assets; no third-party embed, analytics or new provider was added. These presentation changes require no additional policy version or data-practice disclosure.

Publication requires the initial page commit and the final media/policy refinement commit together. The `Deploy Website` workflow runs on pushes/merges to `main`; pushing only `dev` does not publish. The owner can push `dev`, open a pull request into `main`, review and merge it, then wait for the GitHub Pages deployment to succeed. No repository rule requiring a new permission prompt was found; this task has not attempted a remote write or tested current GitHub write authentication. The owner retains remote publication. After deployment, verify each canonical route and a direct 200 application/json response with no redirect from the exact policy URL, using the final hashes above before App Store release.

Final media QA: the copied video SHA-256 is `ca11fd4836bf99dad14f3b43f51b1219dbcfaf1a7eb3977b20e248f500adf309`; poster is `cca48b635d879f9f13584ae3ad966a36e2e1f886a0097b5aa14f7b96f3cd7040`. All copied screenshot/icon bytes also match the supplied release assets. Browser keyboard playback passed with reduced motion enabled, reported 26 seconds / 1200×900, and seeking to the final scene at 24 seconds completed without a media error. Initial playback was paused at time zero, with controls/mute enabled and autoplay/loop disabled. All six screenshots loaded with correct proportions at 390, 768 and 1440 CSS pixels; no horizontal overflow or page errors. Final build, legal/contact checks, five policy tests and diff whitespace checks passed. The final local policy endpoint again returned direct 200 JSON and the revised privacy wording rendered correctly.
