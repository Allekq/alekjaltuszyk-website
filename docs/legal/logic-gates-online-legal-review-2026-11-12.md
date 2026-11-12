# Logic Gates online legal-document review — 2026-11-12

Local website work only; no publication or sibling-app edits. This supplements
the solo-developer review in `logic-gates-review-2026-11-11.md` and supersedes its
binary-only acceptance description for builds with online legal refreshes.

## Before implementation

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Bundled-only legal documents → minimal HTTPS GET to the public manifest on startup/foreground (rate-limited) or manual refresh. GitHub Pages receives IP/request metadata. No circuit data, app account identifiers, cookies or acceptance receipts in requests. Read-only iOS `PolicyPlatform.kt` confirms ephemeral URLSession, disabled cookies/credentials/cache, bounded download and rejected redirects. |
| Lawful processing | Disclose legitimate interests in delivering current legal information and secure delivery; assess balancing privately, especially for teenagers. Privacy acknowledgement is not consent. GitHub's independent service/security processing follows its own notice; no unverified processor contract or universal transfer compliance claim. |
| Choice and age | Intended audience remains 13+. Requests can precede acceptance; no optional-purpose consent asserted. Fetching never accepts terms. Offline fallback remains available; changed documents require review. App owner must verify initial notice and gate behavior. |
| Lifecycle | Complete verified documents cached locally alongside local acceptance identity/time. Delete App removes the container, with existing backup exceptions. Host logs are governed by provider retention; no invented TTL or zero-logging promise. |
| Security | Build-time SHA-256 over exact UTF-8 canonical Markdown; schema 1, same-origin HTTPS document URLs, per-document versions. Digest detects content differences, not an independent signature. Transport and rollback behavior remain app-owner checks. |
| Public promises | Privacy sections 1, 2, 4, 6, 8 and terms sections 1, 5, 6; canonical Markdown drives both HTML and manifest. Preserve local recovery, optional Gmail support, no ads/analytics/purchases and mandatory consumer rights. |
| Release | Stage both documents as 1.1.0 effective 2026-11-12. Published versions must increase on any body change; never reuse a published version for different bytes or roll back a manifest. Publishing can re-prompt online clients; offline clients cannot detect changes until a successful check. |
| Result | Implementation and validation pending. App owner must bundle these exact bodies and verify network/acceptance/store declarations. Existing trader-contact, mailbox-contract and territory/language review items remain unresolved. |

## Hosting evidence

- `.github/workflows/deploy.yml` uses `actions/deploy-pages@v4` with the custom
  site origin. No additional proxy is established by repository evidence.
- [GitHub Pages documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
  explicitly says visitor IP addresses are logged and stored for security.
- [GitHub privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement)
  describes request data, retention criteria, international transfers and its
  controller processing. This does not verify the owner's individual contract
  or provide a fixed Pages-log retention period.

## Publication rule

Compare each candidate document against the last published manifest before any
deployment. Unchanged bytes retain their version; changed bytes require a higher
numeric major.minor.patch version. Never publish a lower version. A correction
to already published text needs a new version too, because clients compare both
version and digest. Local unpublished draft edits may retain their staged version.
Website checks establish payload integrity, not the live version history.

## Final review and validation

- Both canonical documents and the static schema-1 endpoint are staged at
  version 1.1.0, effective 2026-11-12. The endpoint uses native Node hashing
  during the existing Astro build; no runtime backend or extra package was added.
  Dependency installation was declined; `package.json` and its lockfile are
  unchanged. The source route is `src/pages/apps/LogicGates/legal-manifest.json.js`.
- `npm run check`: 309 files, zero errors, warnings or hints. `npm run build`:
  83 pages, pre/post publication-boundary checks passed. Build still reports
  existing Vite chunk-size and Astro helper warnings.
- `npm run check:legal`, `npm run check:contact` and `git diff --check` passed.
  Built canonical body bytes, lowercase SHA-256 values and same-origin HTTPS
  URLs passed checks. All five other app manifests match their pre-change bytes.
- Privacy SHA-256: `314f58b1efbf3a3d0dccdf412d66660e0527721681450e52cf0f80f518dba417`.
  Terms SHA-256: `0adc3a32275f160f0ec7adbe60a78c28f92329de400eadd00c61049a338325fd`.
- Read-only app `python3 tools/sync_legal.py --check` reports stale bundled
  documents. App owner must run the sync, verify its versions and test online,
  offline, changed-document, refusal and relaunch behavior before release.
  No app source or personal memory was changed, and nothing was published.
- Final result: website sources and generated payload aligned; app synchronization
  remains a release dependency. Trader contact, mailbox agreements/safeguards,
  supported territories/languages and actual store declarations remain the owner
  review items recorded in the earlier receipt. This is not worldwide legal
  certification or a liability guarantee.

## Second local pre-publication review — 2026-11-12

Requested follow-up review; no new product behavior or policy-body changes.
The previous app-bundle mismatch above is historical: a fresh read-only
`python3 tools/sync_legal.py --check` now **passes**. This verifies bodies and
versions, not installed app behavior or App Store Connect declarations.

| Check | Result and scope |
| --- | --- |
| Generated site | All 83 HTML pages scanned for local href/src destinations, fragment targets and image alt attributes; no missing targets or alt attributes found. |
| Browser routes | Home, app directory, Logic Gates landing/support/privacy/terms, general legal/support/privacy/terms returned 200 at 390px and 1440px. Each has one h1 and main landmark, expected canonical URL, no broken loaded images or horizontal overflow. |
| Small screens | Home, directory and Logic Gates landing/privacy/terms also passed overflow checks at 320px and 768px. Desktop landing, phone landing and dark phone privacy page visually inspected. |
| Navigation | Directory link opens Logic Gates; support link opens its support page; mailto targets the configured address with an optional draft. No email sent. Keyboard skip link and feature anchor work. |
| Appearance/accessibility | Explicit Dark survives navigation; System removes the override. Reduced motion removes circuit transform and fully displays signal paths. Landing-to-privacy navigation and complete privacy text work without JavaScript. This is a focused check, not a formal WCAG audit. |
| Privacy observations | Fresh browser context: no cookies, no local-storage keys and no third-party requests on the Logic Gates landing. Explicit theme override stores only the appearance preference. Hosting IP logs are a separate production-provider practice, not observable through localhost. |
| Runtime and manifest | No page JavaScript errors. Schema-1 JSON endpoint returns 200 with application/json and both documents at 1.1.0. One favicon request was aborted during rapid navigation; the asset exists and no missing-asset error was found. |
| Automated validation | Existing successful build/typecheck remain applicable; no source behavior changed in this review. Legal, contact and private-boundary checks rerun and passed; all six existing theme tests passed. |
| Legal review | Reread general website privacy/terms and Logic Gates policy/terms/support/marketing together. No new contradictory data-flow claim found in these reviewed surfaces. This does not substantively re-audit the other apps' implementations or certify every country's laws. |

Official sources rechecked: [FTC COPPA guidance](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions),
[EDPB lawful processing](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en),
[EU unfair terms](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/unfair-contract-terms-directive_en),
[Apple trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/),
[UOKiK contact information](https://prawakonsumenta.uokik.gov.pl/pytania-i-odpowiedzi/prawo-do-informacji/)
and [Google Workspace processing terms](https://knowledge.workspace.google.com/admin/compliance/privacy-compliance-and-records-for-google-workspace-and-cloud-identity).
Google's general terms page returned a non-Polish country version; it was not
treated as evidence of the owner's Polish personal-Gmail contract.

**Outcome:** no technical blocker found for the coming-soon website. No new
dependencies, deployment, personal-memory edits or app mutations. Legal release
readiness still depends on actual trader/contact duties, personal-Gmail service
roles/agreements and transfer arrangements, supported languages/territories,
and app/store verification. The site is informational and takes no payments;
App Store release duties should not be conflated with a new website feature.
