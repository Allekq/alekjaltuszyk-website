# Code Workroom IDE website review — 2026-11-15

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
- Privacy SHA-256: `01e61b6a6f7e6a3de53cecacd3b15b54c7d8e3e5dbe996197485a5ffde9a7ea8`.
- Exact hosted JSON: **14,529 bytes**, SHA-256 `abc81b81a8a2df3dfb91fd37bbccd517b1f5c221aa1fc628c7253cac666a0608`. Well below the client's 524,288-byte cap.
- Local preview returned **200 application/json**, no redirect. Build output is byte-for-byte identical to the supplied JSON. The app's Swift transport still needs a production HTTPS integration check after deployment.
- Markdown remains immutable in the repository. A narrowly scoped Markdown rendering plugin omits its duplicate title/version presentation nodes; the shared legal masthead displays the same identity. Each rendered legal page has one H1 and the common revision-history link.
- `npm run check`: 0 errors, 0 warnings, 0 hints. `npm run build`, `npm run check:legal`, `npm run check:contact`, build-time private-boundary checks, `git diff --check`, and all five policy-contract rejection tests passed.
- Browser verification: product/support/Terms/Privacy routes return 200; exact support mailbox; footer and hub links; app directory, sitemap and LLM discovery include the app; one data-derived unreleased directory entry. No fake store URL or download CTA.
- Product page checked at 390, 768 and 1440 CSS pixels without horizontal overflow; desktop/light, desktop/dark, phone and directory card visually inspected. Details open correctly and content/navigation works without JavaScript. No product-page JavaScript errors. The browser requested a missing generic favicon.ico when inspecting machine-readable discovery output; app pages use their existing explicit icon links.
- App icon copied from the actual source app. Empty typed media slots render neither a fake player nor a gallery; real video/screenshots can be added through `src/config/codeWorkroomMedia.ts` after assets arrive.

## Remaining publication and app-owner work

The website is **prepared locally, not pushed or deployed**. No App Store listing or metadata was changed. Publish the reviewed website commit first, then check the exact public JSON URL without following redirects and compare its body/hash to the app fallback. Only then release an app configured to request it. Current canonical URLs are `/apps/CodeWorkroomIDE/`, `support/`, `privacy-policy/`, `terms-of-use/`, and `policy-bundle.json` under that base.

The supplied operator, country, mailbox and host agree with the established website facts. One specificity finding remains for the canonical-policy author: privacy section 3 says GitHub “may process request and security information,” while GitHub explicitly confirms logging and storing visitor IP addresses for security. The text does acknowledge hosting data and avoids zero-collection/false fixed-retention promises. Any strengthening must be coordinated in the app source and bundle, with a new revision as required; this website task did not silently change hashes. Provider contract/retention configuration and App Store privacy classification remain unverified; no universal compliance or store-clearance conclusion is made.
