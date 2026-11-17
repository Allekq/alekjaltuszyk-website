# AudioChoices and OverLit dynamic legal documents — 2026-11-13

This is the original planning record. The final review below records what was actually implemented; proposed version bumps in this plan were not applied.

## Before implementation

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Metadata-only OverLit/AudioChoices manifests gain exact canonical Markdown and SHA-256, under schema 1. Prepared app clients make bounded HTTPS checks without app identifiers, cookies or acceptance receipts. GitHub Pages still sees IP/request metadata. No new website analytics, SDK, backend or secret. |
| Lawful processing | Minimal document delivery/security relies on legitimate interests; distinguish host logging and international processing from local review/acceptance. General acknowledgement does not supply optional-purpose consent. |
| Choice and age | Fetching never accepts. Explicit renewed review follows changed validated documents in new clients; existing binary-pinned clients retain their behavior. Age/ad/measurement settings and consumer rights remain separate. |
| Lifecycle | New clients retain complete validated documents for offline use and local version/digest/acceptance state. Failures retain valid cache/bundle rather than accepting remote content. App owners must verify cache retention/clear/reset behavior. Host logs follow provider retention, with no invented TTL. |
| Security | Same-origin HTTPS document URLs, exact UTF-8 SHA-256, numeric versions. Add contract/digest checks. Clients own bounds, unknown-schema rejection, rollback protection, untrusted Markdown rendering and atomic cache acceptance. |
| Public promises | Privacy changes disclose prepared background delivery/cache, request metadata, host and older-build differences. Terms changes correct binary-only review descriptions while preserving accrued rights. |
| Release | Stage OverLit Privacy 3.10.0 / Terms 3.4.0 and AudioChoices Privacy 2.14.0 / Terms 2.7.0, all dated 2026-11-13. App chats own exact bundled fallback, gate and store-declaration alignment. No publication or App Store metadata change here. |
| Result | Website implementation and verification in progress. Publish reviewed website first, verify served hashes, then release matching clients; old binaries cannot acquire online refresh merely from website publication. |

## Schema for the app implementation owners

Both existing URLs remain unchanged:

- `/apps/OverLit/legal-manifest.json`
- `/apps/AudioBookChoices/legal-manifest.json`

```json
{
  "schemaVersion": 1,
  "privacy": {
    "version": "numeric.major.patch",
    "effectiveDate": "YYYY-MM-DD",
    "url": "https://alekjaltuszyk.xyz/apps/APP/privacy-policy/",
    "sha256": "64 lowercase hexadecimal characters",
    "content": "Exact canonical Markdown, including its trailing newline"
  },
  "terms": {
    "version": "numeric.major.patch",
    "effectiveDate": "YYYY-MM-DD",
    "url": "https://alekjaltuszyk.xyz/apps/APP/terms-of-use/",
    "sha256": "64 lowercase hexadecimal characters",
    "content": "Exact canonical Markdown, including its trailing newline"
  }
}
```

Hash decoded `content` encoded as UTF-8, not JSON escape sequences, rendered HTML
or normalized/trimmed Markdown. Version/date remain outside the content and are
part of document identity. Existing `privacy`/`terms` metadata fields retain
their types and paths. New clients must validate the complete document pair
before replacing valid cached data. This static manifest is not a signature or
an acceptance receipt; transport, origin, version and digest checks work together.

Every later published body change for these dynamic clients needs a higher
numeric document version, including a correction, to avoid changed bytes under
an already accepted version. No broader data-processing consent is inferred.

## Sources checked

- GitHub explicitly logs/stores Pages visitor IPs for security. Its general
  notice covers retention and international processing; neither source proves
  a particular per-site log TTL or the owner's contractual safeguards.
  [GitHub Pages data collection](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection),
  [GitHub Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement).
- Purposes, recipients, retention and transfers must be explained accurately;
  limited legal-document delivery does not authorize analytics or another
  optional purpose. [GDPR Articles 5, 6 and 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679).


## Final website review — 17 November 2026

The accepted website change is additive delivery of the **existing** canonical
Markdown and its SHA-256, with schemaVersion 1. It does not change document
bodies, dates, URLs, or acceptance versions:

| App | Privacy | Terms |
| --- | --- | --- |
| OverLit | 3.9.0, 2026-10-17 | 3.3.0, 2026-10-14 |
| AudioChoices | 2.13.0, 2026-10-11 | 2.6.0, 2026-10-11 |
| Logic Gates | 1.2.0, 2026-11-12 | 1.2.0, 2026-11-12 |

The earlier plan's 3.10.0/3.4.0 and 2.14.0/2.7.0 identities are not present in
site.config.mjs or the apps' fallbacks. Do not report them as staged or shipped.
No speculative policy text or version bump was added during this review.

| Item | Final evidence and decision |
| --- | --- |
| Data flow | Only the existing static legal GET response expands. No new website request, SDK, identifier, cookie, backend, or acceptance upload. App-side periodic requests are separate app behavior. |
| Lawful processing | This transport change does not introduce a new processing purpose or infer consent. Existing host and support arrangements remain subject to their separate factual review. |
| Choice and age | Delivering text never records acceptance. Older installed clients keep their own behavior. No age, advertising, measurement or purchase setting changed. |
| Lifecycle | Website serves public canonical text. No website cache of user records or retention change. App offline caches and local receipts belong to the respective app release review. |
| Security | Exact UTF-8 bodies and hashes, existing URLs/versions/dates preserved. Both responses are below the clients' 512,000-byte bounds. Logic Gates output is unchanged by extracting the shared helper. |
| Public promises | No OverLit/AudioChoices policy body was edited. Their current notices still describe the older binary-pinned acceptance flow. App owners must align notices with the prepared online-refresh clients before releasing those clients. This dev push is not clearance for those app releases. |
| Release | Source inspection found prepared online-refresh implementations in both sibling apps. OverLit legal_version_parity.py passed; AudioChoices bundled Markdown, baseline metadata and hashes match the generated website response. No app source edited. |
| Result | Accept the website response extension for dev. Keep the existing document identities. Before a future main deployment/client release, complete the app notice review and verify live endpoint behavior. |

Validation: Astro check/build, legal consistency, contact and private-boundary
checks passed. Exact built canonical content and hashes passed for all three
complete-document manifests. This receipt supersedes the unfinished planned
version/disclosure claims above; it is not a legal compliance certification.
