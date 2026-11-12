# Logic Gates export/import and Trash review — 2026-11-12

## Before implementation

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Local circuits gain user-directed file export/import. App task specifies a `.logicgates` package containing the selected circuit and required definitions, excluding settings, Trash, recovery, acceptance and runtime state. Users select the file provider/share recipient; no developer upload service is added. Final native implementation verification remains required. |
| Lawful processing | Local file operations implement the requested editor functionality. They do not add developer-received personal data or a marketing purpose. Existing legitimate-interest support/legal delivery disclosures remain separate. User-selected third-party providers apply their own terms; do not describe sharing as anonymous or consent to unrelated processing. |
| Choice and age | Explicit file picker/share actions; unchanged 13+ audience, required Terms agreement and separate Privacy acknowledgement. Fetching/reading a policy must never record acceptance. |
| Lifecycle | `ProjectLibrary.kt` stores deleted project/folder batches in Trash without automatic expiry. Purge removes current Trash entries subject to dependency checks; `CatalogRecovery.kt` retains earlier saves. Exported/recipient/provider copies are outside app deletion and must be managed separately. Temporary export cleanup awaits native implementation evidence. |
| Security | App task owns bounded parsing, graph/dependency validation, independent imported IDs and atomic persistence. Website must not promise arbitrary-format compatibility or perfect recovery. No website SDK, backend, permission or dependency added. |
| Public promises | Update Privacy sections 1–3 and Terms sections 1–6, recovery support, product organization/export copy and discovery summary. Remove obsolete development-only policy scope while retaining truthful coming-soon availability. No Logisim compatibility claim until native testing confirms scope. |
| Release | Stage Privacy and Terms 1.2.0, dated 2026-11-12, with generated exact-body SHA-256. Both hosted refresh and bundled fallback must agree before app release. Higher document versions can trigger explicit review; no publication, acceptance or app-repo edits authorized here. |
| Result | Local website/legal alignment in progress. App owner must synchronize bundled documents and verify native behavior/gate. Prior trader/contact, personal Gmail, territory/language and store-declaration decisions remain open unless separately evidenced. |

## Primary-source review

- Retention, recipients and purposes must reflect actual processing; a general
  disclaimer cannot replace accurate disclosure. Trash and external export
  copies are now distinguished from active projects and recovery files.
  [GDPR Articles 5, 6 and 13](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679).
- Apple distinguishes on-device processing from collection and requires accurate
  answers about retained off-device data. User-selected sharing does not establish
  that the whole app collects nothing: existing hosted-policy request logs remain
  a separate flow. Final App Store answers belong to the app release review.
  [Apple App Privacy Details](https://developer.apple.com/app-store/app-privacy-details/).
- The system share sheet hands supplied items to the user's chosen activity; the
  document picker grants access to selected external files. Policies should
  identify that boundary rather than promise every chosen destination is local.
  [Apple share controller](https://developer.apple.com/documentation/uikit/uiactivityviewcontroller),
  [Apple document picker](https://developer.apple.com/documentation/uikit/uidocumentpickerviewcontroller).
- Preserve the existing App Store Standard EULA relationship and upstream
  licenses. Exporting user-created circuit data does not grant rights to someone
  else's content or establish third-party format compatibility. No third-party
  simulator code or new dependency is introduced in this website change; the app
  task must review any new native implementation/dependency notices separately.
  [Apple Standard EULA](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## Coordination

The app chat owns native implementation, bundled-policy synchronization and app
tests. Automatic approval review blocked this task's attempted status message to
that chat because it found no explicit user permission to message that destination.
This record and the final response contain the handoff details; no indirect
message or app-repo edit is used to bypass that restriction.

## Final website verification and app handoff

- Canonical bodies: `src/content/legal/logic-gates-privacy-policy.md` and
  `src/content/legal/logic-gates-terms-of-use.md`. Both are **1.2.0**, effective
  **2026-11-12**, authored through `site.config.mjs`. The manifest remains schema 1
  and is generated at `src/pages/apps/LogicGates/legal-manifest.json.js`.
- Privacy SHA-256:
  `45320565048c128b38dcf605d884adb668a76660a419502353feb0ab8607c761`.
- Terms SHA-256:
  `c6a99c53cda4e7e15a04320ff4ea5862092da5ac29a45fb8458d03bc605fdad3`.
- Verified exact UTF-8 canonical bytes equal manifest `content`, computed hashes
  match `sha256`, URLs remain same-origin HTTPS, and both versions/dates match
  configuration. No hand edits to generated output or other apps' legal versions.
- Product, support, privacy and terms routes returned HTTP 200 in local preview
  at 390px and 1440px widths, with no horizontal overflow or JavaScript errors.
  Version 1.2.0 and updated Trash text render on both legal pages. The product
  still says Coming soon. Discovery feature copy now includes native file transfer
  and no longer implies that user-directed file sharing is impossible.
- `npm run check`: zero errors/warnings/hints. `npm run build`: 83 generated
  pages; both private-boundary checks pass. `npm run check:legal` and
  `npm run check:contact` pass. Existing Astro dependency and bundle-size build
  warnings are unrelated. Source diff reviewed for preservation of consumer
  rights, 13+ audience, Terms agreement and independent Privacy acknowledgement.
- Read-only `python3 tools/sync_legal.py --check` in the app checkout currently
  fails because its bundled documents still differ. The app task must run its
  sync generator, verify `ReleasePolicies` resolves the new versions/hashes,
  and test changed-version review plus verified-cache/bundled offline behavior.
  Nothing in this website task accepts a policy for a user.
- The app-store evidence file records prior live 1.1.0 parity on this date.
  This pass could not independently fetch the live manifest: web retrieval
  failed and the shell could not resolve the hostname. Recheck live monotonic
  versions and exact content after the owner publishes; do not assume these
  local changes are deployed.

## Remaining release dependencies

1. **App implementation owner:** finish and verify the specified import/export
   contract, including temporary share-file cleanup on completion/cancellation
   and recovery after interruption. This website pass checked actual Trash and
   recovery source, but native file-transfer code was still being implemented.
   Reconcile any implementation differences before publication. No Logisim or
   Logisim-evolution compatibility has been claimed in public copy.
2. **App implementation owner:** synchronize the exact canonical bundle above,
   run native acceptance/import/export tests and align privacy manifests and
   App Store answers with the final build. Existing hosting IP/security logs
   mean file export does not justify a blanket “Data Not Collected” assertion.
3. **Owner:** settle trader/contact declarations and applicable public contact
   details; confirm the personal-Gmail service roles, safeguards and practical
   support retention/deletion arrangements; choose launch territories and provide
   required consumer-facing languages. No residential address is published by
   this task. These are earlier unresolved launch items, not new permissions
   demanded for this local edit. Apple's EU trader process requires the owner's
   assessment and relevant contact information, not an inference from being a
   solo developer. [Apple trader requirements](https://developer.apple.com/help/app-store-connect/manage-compliance-information/manage-european-union-digital-services-act-trader-requirements/).
4. **Owner:** publish the verified website documents before activating a release
   that relies on them, and verify the hosted URLs and manifest bytes. Remote
   publishing and App Store submission remain outside this task.

Website source preparation and local validation are complete. Full app-release
readiness remains blocked on the dependencies above; this is not certification
of compliance in every jurisdiction.
