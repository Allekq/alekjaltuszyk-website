# Code Workroom IDE independent review — 15 November 2026

Scope: website, current app policy implementation and coordinated English release documents. Local work only; no publication, merge, store changes or release certification. Baseline website `608678b` on `dev`; unrelated manifest/helper edits preserved. The app checkout has substantial existing work, which this review does not own.

## Before-change legal-impact receipt

| Item | Evidence and decision |
| --- | --- |
| Data flow | No new network/SDK/data behavior. Inspected `LegalModel`, PolicyCore transport/coordinator, Git account store and purchase catalog/store. Policy GET exposes network metadata to GitHub Pages; optional support reaches personal Gmail; chosen Git providers receive requested transfers. |
| Lawful processing | Existing notice distinguishes requested services, security interests and legal duties. No optional consent inferred. Provider roles, agreements and international-transfer safeguards are not established by code; owner must resolve them before release. |
| Choice and age | AI remains off by default; Git setup is optional; terms acceptance and privacy acknowledgment are separate from project execution permission. No new age rule or consent mechanism. |
| Lifecycle | Local receipts include exact documents and timestamps; latest 100 retained. Cache/receipts are app-owned local files. History, recovery, exports, backups and Keychain have separate deletion lifecycles. Clarify bounded receipt retention. |
| Security | Exact allowlisted HTTPS URL, ephemeral transport, no credentials/cookies, no redirects, 200 JSON, 524288-byte maximum. Hash/revision validation and persistence-before-activation found in source. No claim that hashes authenticate a publisher independently of HTTPS. |
| Public promises | Owner confirms free app and all included books remain free. Remove conditional included-book pricing language; clarify user choices versus developer defects and mandatory duties. Preserve accurate runtime limits. |
| Release | Live exact endpoint returned 404 on this review. Local bundle revision 2 / documents 1.0.0 already exist and may have been cached by development builds. Use revision 3 and new document identities, synchronized across website, app fallback and launch ZIP. |
| Result | Authorized coordinated policy correction; no app behavior change planned. Publication and legal/operational determinations remain separate release gates. |

## Findings and local fixes

| Severity | Finding | Outcome |
| --- | --- | --- |
| High / release blocker | Production policy endpoint returns 404. | Independently reproduced with curl and the actual Swift HTTPS transport. No publication authorized; submit only after direct HTTPS parity passes. |
| High / release blocker | Provider roles/agreements, transfer safeguards and trader disclosures are not established. Privacy §8 describes uncertainty rather than an actual safeguard. | No invented DPA, retention period, address or telephone. Store setup explicitly records these blockers; owner/counsel must establish the arrangement and complete the notice before release. |
| Medium | Terms, Privacy and discovery retained conditional future pricing language, inconsistent with the owner's free commitment. | App is free and all included books stay free in hero, directory, discovery, Terms, Privacy and store metadata. Existing catalog already has no paid product IDs; no behavior change needed. |
| Medium | Responsibility clause was too generic to distinguish user code from developer-caused loss. | Terms §§2–4 and 7 now address execution choices, repositories/dependencies, verification, credentials, backups, independent services, causation, app defects and mandatory remedies. No zero-price cap, consumer indemnity or blanket indirect-loss exclusion. |
| Medium | Updating the existing revision could conflict with development installations. | Revision 3 / documents 1.1.0; byte-identical website/release/fallback. Read-only simulator inventory found revision-2 bundled documents and 1.0.0 receipts; no newer revision or cached bundle found. No simulator was started, modified or interrupted. |
| Low | Product page retained the generic cyan background/frame instead of the surrounding app pages' full-width shell; tablet footage was cramped. | Scoped shell rules follow the existing Logic Gates pattern. Hero stacks through 900px, while screenshots retain their aspect ratios. Larger navigation hit areas and explicit free pricing added. |
| Low | Opening a raw screenshot caused Chrome’s image viewer to request missing `/favicon.ico`. | Added a standard 32px ICO rendered from the existing `public/favicon.svg`, preserving the site mark. Full-size image navigation now has a working fallback icon. |

Inspected current app implementation rather than treating the handoff as proof: `App/Settings/LegalModel.swift`, `Preferences.swift`, `SettingsView.swift`, `App/Commerce/BookPurchaseCatalog.swift`, `BookPurchaseStore.swift`, `App/Git/GitAccountStore.swift`, `Packages/GitKit/Sources/GitKit/GitNetwork.swift`, and all PolicyCore sources. README feature limits agree with the website. Keychain uses `WhenUnlockedThisDeviceOnly`; Git credentials are scoped to the selected HTTPS destination. AI preferences default false and gate requests. The empty purchase catalog bypasses product/entitlement/restore requests. This is a targeted source review, not a full app security audit or physical-device certification.

## Legal assessment and specific counsel questions

The useful protection is a clear description of what the tool undertakes and what the user independently chooses. For example, an incorrect formula written by the user is different from the editor silently corrupting a file; a chosen repository's malicious source is different from the app leaking a token. The revised Terms preserve those distinctions, including shared causes. Backup and verification advice is a precaution, not an automatic forfeiture of claims.

Polish Civil Code Arts. 361–362 address normal causal consequences and a claimant's contribution; lost profits are not automatically outside compensation. Arts. 471–474 address contractual breach, due care and persons used to perform obligations; intentional harm cannot be excluded under Art. 473 §2. Arts. 385¹–385³ constrain consumer exclusions, including personal injury and substantial exclusions for non-performance. Art. 385⁵ can extend unfair-term protection to some sole traders. No separate B2B cap was introduced: there is no distinct business distribution/contract flow to justify it. Ask counsel whether a separately negotiated professional license would serve an actual business need. [Current consolidated Civil Code](https://eli.gov.pl/api/acts/DU/2026/795/text/T/D20260795L.pdf).

A disclaimer of additional commercial guarantees is different from denying promised quality or statutory conformity. An unfair consumer term can be non-binding; adding a generic legality caveat does not make an overbroad exclusion reliable. The Terms therefore avoid blanket liability and consumer-indemnity language and preserve personal-injury and intentional-misconduct claims. [Unfair Terms Directive, Arts. 3, 5–6 and Annex 1(a)–(b)](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A31993L0013).

Free does not automatically mean outside consumer law or free of liability. Directive 2019/770 Art. 3 includes some contracts supplied for personal data, with an exception for data processed exclusively to supply the service or satisfy legal requirements. Whether this app's host/security/support processing meets that exception requires a factual assessment; the absence of app accounts does not decide it. [Digital Content Directive](https://eur-lex.europa.eu/legal-content/en/ALL/?uri=CELEX%3A32019L0770).

Poland's Consumer Rights Act Art. 3(1)(11) contains the related exclusion; Arts. 43k–43q address conformity, updates, remedies and changes when applicable. Counsel should determine the free-app contract's scope, trader status, notice/contact duties, any withdrawal procedure and update/termination requirements. No download/checkbox waiver is assumed. The October 2026 consolidated text includes marked future amendments: those scheduled for 2027 are not treated as already effective. [Consumer Rights Act, 2026 consolidated text](https://eli.gov.pl/api/acts/DU/2026/1244/text/U/D20261244Lj.pdf).

Apple's Standard EULA applies by default unless a custom EULA is supplied. Its warranty/external-service exclusions and $50 cap contain jurisdiction qualifications; they are not proof that equivalent exclusions are enforceable against Polish/EU consumers. It also contains a broad data-use provision, which is not evidence that this app collects that data. The new Terms clarify their relationship to the license without copying its cap or treating acknowledgment as processing consent. Counsel should confirm whether the in-app supplementary terms are incorporated consistently with the chosen App Store license, or whether a coordinated custom EULA is preferable. [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

Polish choice of law cannot displace mandatory habitual-residence protections when Rome I's consumer conditions apply. The Terms retain those protections and impose no exclusive Polish venue. [Rome I, Art. 6](https://eur-lex.europa.eu/eli/reg/2008/593/2008-07-24/eng).

Privacy requires operational evidence as well as copy. GDPR Arts. 13, 28 and 44–49 make recipient roles and transfer arrangements material. Personal Gmail is not evidence of a negotiated processor agreement; nor should every provider be assumed to be a processor. Owner/counsel should map the actual services, purposes, roles, retention criteria and transfer safeguards, then complete Privacy §8. No blanket exemption is inferred for a small/free app. [GDPR](https://eur-lex.europa.eu/eli/reg/2016/679/).

GitHub confirms Pages retains visitor IPs for security. Apple's privacy-label definition separately considers off-device retention and classifies IP by its actual use. “Local projects” is therefore not enough to declare “Data Not Collected.” The App Privacy worksheet remains proposed, not an account setting. [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection), [Apple App Privacy details](https://developer.apple.com/app-store/app-privacy-details/).

Owner must confirm public trader details and any additional contract disclosures; no private address was inferred or published. Apple lists contact requirements for traders, including an individual trader's address or P.O. Box, phone and email. [Apple DSA trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/).

These are reasoned drafting choices and release questions, not a legal certification. No terms can prevent someone filing a claim. Resolve the free-service scope, license incorporation, provider arrangements, required disclosures and any minor-user contract-capacity questions with Polish consumer/software counsel before launch.

## Policy protocol and parity

- Schema **1**, revision **3**, Terms **1.1.0**, Privacy **1.1.0**, locale **en**, non-draft.
- Issued/effective **2026-11-15T00:00:00Z**. Same calendar day as the prior unpublished preparation; identities and revision advanced rather than reusing revision 2.
- Terms SHA-256: `2a0f89f418950643d9b4ecfbb8699a80ceb1c4136d9fb543238b632cb021041b`.
- Privacy SHA-256: `1a0fee73a11956159a75b85c7318b91249606380c1df6f7b88ee4fa372f353e6`.
- Bundle: **17,046 bytes**, SHA-256 `5fa726960597cbd23a6fb5a3d99498ff14de80d94b502566dd023bec25e7ed58`.
- Exact equality: website Markdown/raw JSON, generated `dist/apps/CodeWorkroomIDE/policy-bundle.json`, app release Markdown/JSON and `App/Resources/policy-bundle.json`.
- The allowlisted transport requires direct HTTPS 200 `application/json`, rejects redirects and bodies over 524288 bytes, and uses no persistent cookie/credential/cache session. Hashes detect content mismatch; they are not signatures.
- Coordinator persists cache before activation, rejects lower/conflicting revisions, and retains the current valid selection on failure. Successful automatic refresh is rate-limited to six hours; failed attempts to one minute. Force refresh bypasses that interval.
- App admission waits for local loading and requires current Terms plus Privacy acknowledgment. Acceptance stores exact reviewed documents durably before unlocking; up to 100 records. New identities require review when obtained, including via a new bundled app build. Offline users cannot discover unpublished changes.
- The actual revision-2 → revision-3 transition, durable acceptance and offline relaunch were executed against the current Swift sources with synthetic temporary records. Existing installed app containers were only read for policy versions; their receipts were not changed. Final iOS archive/on-device validation remains separate.

## Validation performed

All website commands ran in this checkout against the current combined working tree (including preserved unrelated edits):

- `npm run check`: 326 files, **0 errors / warnings / hints**.
- `npm run build`: **87 routes**, private-boundary checks before and after passed.
- `npm run check:legal`, `npm run check:contact`, `node --test scripts/code-workroom-policy.test.mjs` (**5/5**), `git diff --check`: passed.
- `swift test --package-path '/Users/alekj/Documents/GitHub/Code Workroom/Packages/WorkroomCore' --scratch-path /tmp/cw-review/swift-build --filter PolicyCoreTests`: **12/12** passed. Separate scratch directory; no simulator used.
- Compiled `PolicyModels.swift`, `PolicyCoordinator.swift` and `HTTPSPolicyTransport.swift` with the local integration harness: real release JSON decodes; upgrade/review/cache/receipt/relaunch assertions pass. Live transport correctly rejects the current endpoint (`responseRejected`); curl establishes its **404 text/html**, with no redirect followed.
- `python3 Scripts/sync_app_policies.py --check`: exact app release/fallback parity passes. Publication remains outstanding, so `--live` cannot pass yet.
- Isolated local Chrome against `astro preview` built output: widths **320, 360, 390, 768, 1024, 1440**, light/dark, reduced motion, one H1, image decoding and natural aspect ratios, screenshot navigation/back, native video playback, keyboard focus/disclosures, no-JavaScript content/navigation, product/footer/support/legal links and exact JSON response checked. **No horizontal overflow, JavaScript exceptions, failed requests or console errors** after adding the existing-site favicon fallback.
- Product/support/Terms/Privacy and linked assets return 200 locally. Sitemap, robots and both LLM files return 200; app directory/discovery carry the unreleased app and no fabricated App Store destination. Canonical and social-image URLs verified. Internal route/asset helpers remain base-safe by source inspection.
- Tab order reaches header, calls to action, native video controls, disclosures and named screenshot links. Foreground contrast against the product background: main text **11.63:1**, muted **5.58:1**, accent **6.20:1**. Reduced-motion browser reports **0 running animations**. This is focused keyboard/visual QA, not a full assistive-technology certification.
- Compared with homepage, `/apps/` and Logic Gates page. Existing fonts/tokens, shared support/legal shell and theme picker retained. Media depicts actual supplied captures; no image regeneration or fabricated device UI.

Local visual evidence and raw logs are in the ignored `.playwright-mcp/code-workroom-independent-review/` directory: `1440-light.png`, `1440-dark.png`, `390-light.png`, `phone-full.png`, `tablet-video.png`, `gallery.png`, `directory.png`, `logic-gates.png`, `support.png`, `terms-of-use.png`, `privacy-policy.png`, `browser-results.json`, `accessibility.json`, and command logs. The isolated browsers were closed after each run; no shared browser session was terminated.

## Closing receipt and release state

| Item | Final outcome |
| --- | --- |
| Data flow / lawful processing | No new collection, SDK or execution flow. StoreKit notice corrected to actual empty-catalog behavior. Hosting/Gmail roles and transfer safeguards remain an explicit owner/counsel release blocker. |
| Choice / lifecycle / security | Existing consent/permission separation preserved. Receipt bound disclosed. Actual policy transition, persistence and offline behavior passed; no app module behavior modified. |
| Public promises | Free-app/free-books promise synchronized. Clear responsibility allocation replaces generic disclaimer wording. Existing runtime/AI limitations retained. |
| Release | Local prepared revision 3 only. No commit, push, merge, deployment, binary upload or account setting change. Prior receipt is marked historical. App fallback requires the next app build; installed binaries were not rebuilt by this review. |
| Result | Website fixes and policy synchronization complete locally. Release remains blocked on public endpoint parity, provider/trader disclosures and the existing physical-device/runtime/license/privacy-label/account checks in app release notes. |

After separately authorized deployment, run `python3 Scripts/sync_app_policies.py --check --live`, then test the actual app against the production endpoint. Do not substitute local HTTP preview success for the required direct production HTTPS result.

The English release ZIP was rebuilt from current package files, excluding `raw/`; metadata length limits, ZIP integrity, every SHA256SUMS entry and archived policy parity were checked. It contains the independent review under `verification/INDEPENDENT-REVIEW.md`. This launch asset package is not an app binary or release approval.
