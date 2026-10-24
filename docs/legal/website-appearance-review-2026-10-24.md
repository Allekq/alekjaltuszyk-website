# Website appearance preference review

Reviewed before implementation and against the final appearance change. Scope:
the static website, including app marketing pages; no installed app changes.

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | No website storage → one `site-appearance` value, allowlisted to `light` or `dark`, written only after an explicit selection. Browser-local presentation only; no identifier, transmission, SDK, event reporting, or logging. Evidence: `src/scripts/theme.js`. |
| Lawful processing | This implements the visitor's requested appearance preference. The storage is limited to that UI customization, not analytics or profiling; the design relies on the requested-service storage exception. No sensitive data or new server-side personal-data processing. Existing website delivery processing and its Article 6 basis remain unchanged. |
| Choice and age | System is the initial default and writes nothing. Selecting Light or Dark opts into remembering that appearance. Selecting System removes the value. No age rules, permissions, or app eligibility changes. |
| Lifecycle | Preference remains until changed, System is selected, or site data is cleared/evicted. No server backup, export, or deletion request is needed. Tests verify removal without touching unrelated browser keys. |
| Security | Only two fixed values are accepted. Storage access failures fall back safely; invalid values use System. No authentication, backend, dependencies, or request endpoints added. |
| Public promises | Updated section 3 of `src/content/legal/site-privacy-policy.md`, which previously said there was no browser storage. The new paragraph states the exact value, purpose, local scope, and removal controls. No app data flows or app-specific policy promises change. |
| Release | Proposed source change, not a deployment. Website privacy version is 1.2.0, effective 2026-10-24, authored in `site.config.mjs`. The website privacy document is not consumed by app acceptance gates; app document versions and gates remain unchanged. Publish the updated notice together with this feature. No new provider console settings. |
| Result | Website disclosure and behavior aligned. No app legal synchronization or release blocker identified for this scoped preference. |

Reference checked: the [ICO storage guidance](https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/)
explains the requested-service exception, applies it to similar device storage,
and identifies user interface customization among the relevant examples. This
receipt records the narrow implementation decision, not a general exemption for
other local storage or a certification of legal compliance.

Final validation: six preference regression tests, the browser storage/reset
checks, `npm run check`, `npm run build` (including private-boundary checks), and
`npm run check:legal` passed. No publication or external messaging performed.
