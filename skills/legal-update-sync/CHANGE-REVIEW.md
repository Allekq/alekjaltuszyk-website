# Review a change that can affect legal duties

Run this review before implementing a new data practice and again against the final diff.
A legal acceptance gate, an OS permission, an advertising eligibility signal and consent for
an optional purpose are separate things. Do not substitute one for another.
This review reduces drift; it is not a certification or a guarantee against liability.

## Trigger and scope

Review additions, removals and configuration changes affecting network calls (including SDK
startup, attestation, downloads and embedded web content), dependencies, device permissions,
local/remote fields, logs, identifiers, analytics, ads, attribution, age, AI inputs/outputs,
support/export/backup, retention/deletion, purchases or user-facing promises. Local-only
changes can still affect notices, permission wording, security, retention and licences.
A colour or layout change with none of these effects needs no legal receipt.

Read the app's existing legal-sync skill and the website checklist. Find the current
implementation by symbol, not by relying on a dated inventory. Review both platforms where
present. A missing website checkout is an explicit unresolved dependency, not permission to
ship disclosures you have not checked.

## Write a short review receipt in the task or PR

Use this format; include only affected flows and use synthetic data in evidence:

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Data/identifier, source, purpose, recipient/role, transmission and logging |
| Lawful processing | GDPR Art. 6 basis per purpose; Art. 9 condition if sensitive data; device-storage/access consent where applicable |
| Choice and age | Pre-choice defaults, refusal, withdrawal, region/age rules, permission changes and relaunch |
| Lifecycle | Retention/TTL, backups/logs, export, erasure and verification without acquiring unnecessary identity data |
| Security | Authentication/authorization, field allowlist, minimized logs, rate limits and relevant regression evidence |
| Public promises | Exact policy/terms/AI-use/deletion/support/store/permission/licence sections checked or changed |
| Release | Reviewed commit/build, live versus proposed practice, console settings verified or still unknown, version/gate effects |
| Result | No disclosure change (why), aligned change, or unresolved release blocker with an owner/action |

“No data changes” alone is not enough for a billing, eligibility or promise change. A new SDK
is a review trigger, not proof that every policy needs new wording. Record a reasoned no-change
outcome when the existing disclosure already accurately covers the final implementation.

## Checks that must be settled, not guessed

- Consent must cover the actual optional purpose and recipient, and withdrawal must stop
  new events/requests and queued delivery. Test unknown, accept, reject, revoke and relaunch;
  SDK defaults must not collect first. `canRequestAds`, non-personalized ads and ATT status
  alone do not grant analytics/attribution consent. On iOS, cross-company linking for ad
  measurement may be tracking even without IDFA. Inspect SDK and dashboard integrations.
- Treat pseudonymous installation/auth IDs, IP addresses, purchase events and crash IDs as
  potentially personal data. Never claim anonymity merely because names are absent.
- Evaluate children using actual declared/platform-known age, not the store's age rating.
  GDPR digital-consent ages and COPPA actual-knowledge rules require separate consideration;
  a “13+” sentence or parental-permission clause is not a consent mechanism. Re-evaluate
  optional collection when age/region changes, including Settings and restored state.
- Read actual deletion queries, TTL settings and scheduled jobs. State exceptions narrowly;
  do not retain every account indefinitely merely because some transaction data is needed.
  Provide a workable request path after uninstall and do not erase unrelated users' rows.
- Verify processor agreements, subprocessors, regions, international-transfer safeguards,
  analytics/ad audience exports and provider logging/training settings. A dependency file
  does not prove production dashboard settings or a zero-retention arrangement.
- For sensitive journals, health or location, minimize collection and assess high-risk
  processing/DPIA and any applicable Art. 9 condition. An OS prompt is not proof of GDPR
  explicit consent. “Local” does not automatically settle data-protection obligations.
- Preserve mandatory consumer remedies, withdrawal requirements, paid entitlements and
  fair change/termination terms. Do not add broad consumer indemnities or liability caps as
  a substitute for compliance. Identify the actual store seller and checkout by region;
  do not assert a download alone waives withdrawal rights.

## Synchronize and validate

Update affected public text and bundled mirrors in the same authorized work. Classify a
substantive practice/recipient/right/obligation change separately from a factual clarification.
Follow the website version rule: clarifications do not bump acceptance; substantive changes
need affected document versions and dates plus app gate/fallback alignment. Explain which
existing users will be blocked and when. Publishing a disclosure must precede activating the
practice, including a server-side flag. Feature-scope prose never cures undisclosed past
processing or invalid consent. No automatic deployment or store submission is authorized
merely by running this review.

Run relevant consent/deletion/purchase regression checks when implementation changes, and
website `npm run check`, `npm run build`, and `npm run check:legal` when public sources change.
Check the actual store forms separately from an Apple privacy manifest. Report unverified
production settings and remaining legal judgements plainly. Continue all authorized local
remediation; if a dependency or legal determination remains unresolved, mark the affected
release blocked instead of asking the owner to waive the law or silently finishing it.

## Operational follow-through

Maintain a processing inventory and retention schedule with provider agreements and console
evidence privately. Review new risky flows before release; assess whether Art. 30 records,
a DPIA, a DPO or a territorial representative are required rather than assuming a small
operator is exempt. On a suspected data breach: contain access, preserve minimal evidence,
record awareness time and assess risk promptly. GDPR notification to the regulator is due
without undue delay and, where feasible, within 72 hours unless risk to people is unlikely;
high risk can also require notice to affected people. Document the decision even if not notified.
Do not put personal request records, secrets or production payloads in a public repo.

## Primary sources — recheck when the affected requirement changes

- [GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32016R0679): Arts. 5–9, 12–22, 25, 28, 30, 32–35, 44–49 and 82.
- [EDPB small-business compliance guide](https://www.edpb.europa.eu/sme/be-compliant/be-compliant_en).
- [EDPB lawful processing and consent](https://www.edpb.europa.eu/sme/be-compliant/process-personal-data-lawfully_en).
- [Apple privacy and tracking](https://developer.apple.com/app-store/user-privacy-and-data-use/).
- [Google UMP (Android)](https://developers.google.com/admob/android/privacy) and [iOS](https://developers.google.com/admob/ios/privacy).
- [FTC COPPA FAQ](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions).
- [UOKiK distance-contract information](https://prawakonsumenta.uokik.gov.pl/prawo-do-informacji/sprzedaz-poza-lokalem-i-na-odleglosc/).
- [EU unfair terms](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/unfair-contract-terms-directive_en).
- [UODO breach reporting](https://uodo.gov.pl/pl/525/2584).
