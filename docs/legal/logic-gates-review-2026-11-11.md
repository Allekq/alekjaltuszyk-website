# Logic Gates website review — 2026-11-11

Scope: local website preparation only. No deployment, store submission, app edits,
or messages to other chats are authorized by this receipt. Initial review completed
before implementation; final verification is recorded below.

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | No Logic Gates web surface → static product, support and legal pages. Owner facts and read-only `LogicGates/shared/src/commonMain/kotlin/dev/logicgates/ui/AppInformation.kt` describe local circuits and optional email. `shared/src/iosMain/kotlin/dev/logicgates/Storage.kt` confirms local catalog, previous file, legacy defaults and rejected-file recovery archives. No new SDK, telemetry, account, upload, payment or website form. |
| Lawful processing | Local functionality is distinguished from developer-received support correspondence. Proposed support basis: legitimate interests in answering requests and troubleshooting; legal duties/claims only where applicable. No optional-purpose consent inferred from privacy acknowledgement. Owner must confirm mailbox-provider terms, international-transfer safeguards and a practical retention schedule before publication. |
| Choice and age | No app permission or age gate changed by this website task. Mailto opens a draft; visitor decides whether to send and attach anything. Website appearance preference remains governed by the existing site policy. The app chat subsequently confirmed implemented versioned onboarding; final documents describe current acceptance, separately from consent for collection. |
| Lifecycle | Local deletion is not promised to erase previous saves, legacy or rejected recovery files. Full app deletion and Apple-managed device backups are distinguished from offloading. Developer cannot remotely recover or erase local circuits. Support retention is limited by purpose and applicable legal duties, with an email rights/request path. |
| Security | No new remote processing or visitor persistence. Schematic animation uses only viewport geometry, has no storage/network behavior, and is decorative. Support asks for minimal reproduction details and optional sanitized attachments. No claim of application-level encryption or guaranteed recovery. |
| Public promises | New Logic Gates privacy and terms, support, homepage/directory entry, product page and discovery metadata. Only owner-confirmed implemented features; coming soon, no store URL, launch date, pricing promise, pending adders/counters or hardware-accurate timing claim. |
| Release | Initial documents 1.0.0, dated 2026-11-11, in `site.config.mjs`; app manifest and root compatibility manifest include metadata. Final read-only inspection found `ReleasePolicies` in `editor/LegalAcceptance.kt` pinning both versions to 1.0.0 and using the requested routes; acceptance stores both versions and an epoch timestamp. BundledLegalDocuments is being maintained by the app chat. Website publication alone does not change the binary's acceptance. |
| Result | Local website change aligned and validated. Remaining release work: owner approves final documents/publication date and confirms support-provider/retention details; app owner verifies exact offline-copy parity, first launch/decline/relaunch/offline/version-change behavior and App Store disclosures against the release build. App work is explicitly outside this task. |

Primary sources consulted: [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng)
and [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).
These support the rights/basis and licensing framing; this receipt is not a legal certification.

## Final verification

- `npm run check`: 309 files, zero errors, warnings or hints.
- `npm run build`: 83 pages; private boundary checks passed before and after generation.
- `npm run check:legal`, `npm run check:contact`, and `git diff --check`: passed.
- Production preview: all five Logic Gates routes returned HTTP 200, and internal
  links/assets resolved. Both manifest documents are 1.0.0 with the expected URLs.
- Homepage and directory render the catalog's six cards with the released/unreleased
  split derived from app state. Logic Gates links to its own coming-soon page.
- Desktop (1440px) and phone (390px) inspected, including the compact portfolio
  circuit and dark appearance. No horizontal page overflow observed.
- Browser checks confirmed scroll-driven signal progression; reduced motion removes
  circuit transforms and shows complete wires. With JavaScript disabled, content,
  navigation and complete circuitry remain visible. No runtime errors on the product page.
- Sitemap, LLM files and humans.txt include the new app. No app store destination,
  launch date, payments or pending circuit features were invented.
- Build emits existing dependency/chunk-size warnings. A transient development
  dependency-cache error was avoided by verifying the final production output.
- No deployment, app edit, cross-chat message or local commit was made. Unrelated
  AudioChoices legal edits were preserved.

## Follow-up: solo-developer policy review

Requested scope: common legal/privacy traps and international launch risks. This
is a source-based review of the drafts and declared app model, not an all-country
legal opinion or verification of the owner's accounts, contracts or store setup.

Pre-edit receipt:

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Local app plus voluntary mailto remains unchanged. No SDK, permission, collection or upload is added. Support-email handling remains personal-data processing even without an app server. |
| Lawful processing | Clarify the developer's controller role, rights-request handling and provider references. Do not treat Google's general privacy policy as proof of an appropriate contract or transfer mechanism for this particular mailbox. |
| Choice and age | Keep notice acknowledgement separate from consent. Clarify parent-assisted support and statutory children's-data protections without inventing an age-verification system or claiming an age rating proves compliance. Audience and mailbox type asked of owner; answers pending at review start. |
| Lifecycle | Preserve recovery/backup caveats. Flag support retention, deletion and mailbox security as operational checks; do not invent a retention duration or claim to have configured deletion. |
| Public promises | Clarify Apple Standard EULA versus supplemental app terms, statutory complaint deadlines, and privacy rights. Preserve mandatory remedies and avoid new liability caps, indemnities or global-compliance claims. |
| Release | Draft 1.0.0 has not been published by this task. These are clarifications of existing rights and scope, not a new processing purpose or user obligation; retain 1.0.0. App's bundled exact-text copy must be refreshed after edits. Original instruction prohibits app edits and messages to other chats. |
| Result | Perform website remediation; record unresolved distribution/operations dependencies and exact bundle-sync step. No deployment authorized. |

### Owner clarification and resulting scope

The owner confirmed an ordinary personal Gmail mailbox. The app is free now;
one-time purchases might be added later but are not committed. For this launch,
the owner prefers an audience aged 13 and older rather than specifically
marketing to under-13s. The revised website, support page and documents express
that audience consistently. It is not a claim that the app verifies age, that
all teenagers can contract independently, or that the content rating eliminates
children's-data duties. No age collection, age gate, purchase flow or app code
was introduced.

The initial v1.0.0 drafts are still unpublished by this task. Keep 1.0.0 while
finalizing this initial release; the new audience positioning is recorded here,
not treated as an invisible change to a published agreement. If these drafts
have independently reached external testers or users, review notice and renewed
agreement before replacing what they accepted. The follow-up conclusions below
supersede the earlier bundle-alignment/release-readiness notes.

### Findings and decisions

| Trap | Assessment and action |
| --- | --- |
| “A privacy policy makes a sole developer immune” | It does not. The owner remains responsible for applicable duties and truthful public promises. Preserve mandatory consumer protections; a liability waiver cannot eliminate all claims or override mandatory law. Current terms avoid broad indemnities, a special monetary cap, exclusive Polish courts and an absolute no-refund rule. [EU unfair terms guidance](https://commission.europa.eu/law/law-topic/consumer-protection-law/consumer-contract-law/unfair-contract-terms-directive_en) and [ACCC consumer rights](https://www.accc.gov.au/consumers/buying-products-and-services/consumer-rights-and-guarantees). |
| “Free and offline means no personal data” | Circuit use is local, but support messages identify people. Added the support controller's role and clarified voluntary provision. Existing local recovery, offloading and device-backup limitations remain accurate. No invented server, deletion portal or zero-risk security promise. |
| “Personal Gmail includes a business DPA” | Not verified and must not be assumed. Google's Workspace documentation describes a Cloud Data Processing Addendum for those services, not evidence of an applicable agreement for this ordinary Gmail mailbox. Owner must establish the mailbox's actual contractual roles, safeguards and suitability; if that cannot be established, use a support service with appropriate terms before release. No claim that a paid account automatically makes processing lawful, or that personal Gmail is categorically unlawful. [Google Workspace compliance documentation](https://knowledge.workspace.google.com/admin/compliance/privacy-compliance-and-records-for-google-workspace-and-cloud-identity) and [European Commission on controllers/processors](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/application-gdpr_en). |
| “Linking Google's policy settles all transfers” | It does not verify the owner's arrangement. Added useful provider links without claiming the developer has signed SCCs or verified an Article 28 contract. Record actual applicable safeguards privately and explain them on request. [Google transfer frameworks](https://policies.google.com/privacy/frameworks). |
| “Support is exempt from deadlines” | Clarified statutory complaints separately from ordinary troubleshooting; provided an email complaint route without demanding identity documents. Added privacy-request deadline and extension explanation. No arbitrary universal deadline for every country's complaints. [UOKiK consumer help](https://www.gov.pl/web/gov/skorzystaj-z-pomocy-dla-konsumentow/) and [Irish DPC access-request guidance](https://www.dataprotection.ie/sites/default/files/uploads/2025-05/20221005_Subject_Access_Requests_A_Data_Controller%27s_Guide.pdf). |
| “13+ or parental-permission boilerplate solves children's privacy” | Actual audience, knowledge and processing matter. An under-13 support email can create duties even on a general-audience service. The FTC's single-response exception is narrow, does not allow ordinary retained follow-up, and does not excuse extra collection. Revised child-support language and parent-assisted contact. A future child-directed launch needs its own design review before activation. [FTC COPPA FAQ](https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions). |
| “Teenagers are adults for privacy purposes” | They are not universally treated as adults. Some laws protect under-18s; a 13+ audience is not a worldwide exemption. Keep collection minimal and assess relevant age signals, support and purchase flows for the actual markets. [New York Attorney General guidance](https://ag.ny.gov/child-data-protection-act-guidance) and [Canadian meaningful-consent guidance](https://www.priv.gc.ca/en/privacy-topics/privacy-for-businesses/appropriate-handling-of-personal-information/collecting-personal-information-and-consent/consent/gl_omc_201805/). |
| “Any Terms page is an Apple-compliant custom EULA” | Clarified that these are supplemental terms and do not replace Apple's Standard EULA. Confirm the actual App Store Connect setting. If submitting a custom EULA later, separately satisfy Apple's minimum terms, including contact requirements; do not paste this supplemental document into that field and assume completion. [Apple EULA setup](https://developer.apple.com/help/app-store-connect/manage-app-information/provide-a-custom-license-agreement/) and [Apple Developer Program agreement](https://developer.apple.com/support/terms/apple-developer-program-license-agreement/). |
| “A name and email always suffice” | Trader status depends on actual activity, not simply being one person or currently free. Confirm and supply required verified contact details. Apple accepts an address or P.O. Box for individual traders in its EU verification flow; that does not establish that a P.O. Box satisfies separate Polish consumer-information duties. No address or phone number was invented or taken from private records. [Apple DSA trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/) and [UOKiK information duties](https://prawakonsumenta.uokik.gov.pl/pytania-i-odpowiedzi/prawo-do-informacji/). |
| “English terms plus Polish law cover every market” | They do not settle language or territorial obligations. Assess and provide Polish consumer-facing documents for a Polish launch; the app's Polish UI alone is insufficient. Quebec can require a French contract version before a choice of another language. This task did not add translations or claim those requirements are satisfied. [Polish Language Act, Articles 7–8](https://eli.gov.pl/api/acts/DU/2024/1556/text.html) and [Quebec language authority](https://www.oqlf.gouv.qc.ca/francisation/entreprises/contrats-adhesion.html). |
| “Worldwide App Store selection is only a policy choice” | Some markets require additional filings or local arrangements. Assess mainland China's actual app-filing applicability and relevant PIPL requirements before enabling that territory. Transfer rules in Brazil require their own assessment; an EU mechanism is not automatically a universal mechanism. [Apple territorial app information](https://developer.apple.com/help/app-store-connect/reference/app-information/app-information), [China PIPL](https://www.cac.gov.cn/2021-08/20/c_1631050028355286.htm), and [Brazil ANPD international transfers](https://www.gov.br/anpd/pt-br/assuntos/assuntos-internacionais/transferencia-internacional-de-dados). This is a targeted risk screen, not an exhaustive country-by-country review. |
| “Small developer means every US privacy law is irrelevant” | Do not assume all laws share CCPA thresholds or that being below one threshold creates a general exemption. Reassess applicability against actual business size, markets, activities and children’s data. No unnecessary CCPA opt-out link or false claim of certified compliance was added. [California Attorney General CCPA overview](https://oag.ca.gov/privacy/ccpa). |
| “Privacy manifest equals store privacy disclosure” | The app manifest declares no collected data, but App Store Connect labels require a separate review of the release build and support handling. Apple's optional-support exception has several conditions; voluntary contact alone does not prove exemption. [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/). |
| “Future purchases are already covered” | The current no-payment statement stays. Before any paid unlock, review price/entitlement, restore/refund behavior, store roles, consumer information and any new receipts/SDKs/backend data. A one-time payment does not inherently require ads or tracking, and it does not justify removing statutory remedies. No future paid feature is promised. |

### Peer comparison, not copied templates

Reviewed [CircuitVerse's privacy policy](https://circuitverse.org/privacy) and
[EveryCircuit's privacy policy](https://everycircuit.com/privacypolicy).
CircuitVerse describes accounts, public profiles, tracking and analytics.
EveryCircuit describes registered/cloud content and an AI-related content-use
license. These are materially different from Logic Gates' declared local model.
Their documents are not proof of legal compliance and were not copied. In
particular, Logic Gates did not acquire a broad user-content license, account
boilerplate, privacy-by-use consent or provider disclaimers for features it lacks.
iCircuit 3D's policy was also located, but the full page failed to load and was
not used as substantive evidence.

### Practical owner checklist before release

1. Confirm trader identity/contact obligations and the countries actually enabled
   in App Store Connect. Do not publish a residential address here without an
   explicit decision about the appropriate lawful public business contact.
2. Resolve the support-mailbox contract/transfer review. Protect the account with
   strong authentication, limit forwarding/access, and avoid putting support
   attachments into AI tools or public issues without a separate lawful basis.
3. Adopt a workable deletion/review schedule for ordinary closed requests and
   unnecessary attachments. Keep narrowly needed legal-claim records separately
   with a reason and review date. The policy's criteria are not an automatic
   deletion system. Document the legitimate-interest assessment privately;
   avoid collecting sensitive material simply to reproduce a circuit bug.
4. Handle known children's correspondence separately. Do not continue a child's
   ticket under a single-response exception, assume a teacher always substitutes
   for a parent, or retain messages indefinitely. Do not market as a Kids app or
   specifically for under-13s without a new review. Answer store age questions
   truthfully; an intended audience and a content rating are different.
5. Prepare required language versions and refresh the matching offline copies.
   Keep the privacy notice accessible before acceptance; preserve local records
   of the accepted version. The app owner verifies actual UI behavior.
6. Keep a small private incident procedure. On a mailbox breach, contain access,
   record the facts and assess notification obligations promptly; GDPR's
   notification timing depends on risk, not developer size. See the
   [EDPB breach guide](https://www.edpb.europa.eu/sme/assess-the-risks/data-breaches_en).

### App synchronization and follow-up validation

The website bodies changed after the app's initial offline bundle. The app is
read-only in this task by the owner's instruction. App owner action, in the
LogicGates checkout:

```sh
python3 tools/sync_legal.py
python3 tools/sync_legal.py --check
```

These regenerate and verify the complete bodies/source hashes. Versions remain
1.0.0 for the unpublished initial release. Rebuild/test the app and verify the
13+ positioning, offline documents and acceptance behavior before submission.
No message to the app chat, deployment, account change or app mutation was made.

Final results:

- `npm run check`: 309 files, zero errors/warnings/hints.
- `npm run build`: 83 pages; pre/post private-boundary checks passed.
- `npm run check:legal`, `npm run check:contact`, `git diff --check`: passed.
- Production-preview landing, privacy, terms and support routes returned 200 at
  390px and 1440px. Intended-audience text is present throughout; no horizontal
  overflow observed. Legal-page masthead and body visually inspected.
- Read-only `python3 tools/sync_legal.py --check` in the app checkout **failed as
  expected** because the bundle contains the prior bodies. App source hashes
  must be regenerated before release; website checks do not establish app parity.
- Release remains pending owner decisions on contact/trader status, mailbox
  arrangements, language/territory readiness, and app/store verification. This
  review does not establish compliance with every law in every country or
  eliminate the possibility of claims.
