# Code Workroom IDE prelaunch review, 17 November 2026

Reviewed the website from `bd5f4bb` and the current Code Workroom working tree. The live policy endpoint returned a direct HTTP 200 with JSON for revision 4. Its digest matched the previous website bundle. The IDE remains marked in development.

| Item | Finding and action |
| --- | --- |
| Data flow | The published documents covered identifier completion and Git summaries. The app also accepts explicit questions about a selection, enclosing function or line and nearby source. `CodeAssistantModel`, `LocalCodeContext` and `OnDeviceIntelligence` use a bounded prompt and an on-device Foundation Models session with no model tools or remote fallback. |
| Choice and purpose | The separate Ask setting defaults off. Opening the panel does not send a question. The user chooses Ask and separately reviews and applies any edit. Policy acknowledgment does not enable these features. The website adds no AI service. |
| Retention and security | Question and answer state stays in workspace memory. Disabling Ask clears it. Applied edits become ordinary project source and follow its save, history, export and backup behavior. The app checks that the source is current and editable before applying a proposal. |
| Promises | The app project supplied the revised English Privacy Policy and Terms of Use. The website publishes the same bytes, updates the mastheads, and describes the feature in the product page and discovery text. Checked the existing Git, local recovery, optional StoreKit book, support and policy-delivery disclosures against the app release materials. |
| Release and gate | Both documents advance to 1.3.0, effective 17 November, in PolicyCore revision 5. Publishing on the production branch makes the changed identities available to clients that refresh. Prior acceptance does not cover these identities. Offline clients use the valid bundle available to them. |
| Verification | The generated 22,561-byte JSON response and the app fallback have SHA-256 `9bad4cdf4c588b5f9dee19428d1ac5f37c3b8da4aa6335f6f0a4760838c63d66`. The website validator tests passed. The app project reported 12 passing PolicyCore tests and successful selection of the bundled documents by its production validator. |
| Open before app submission | Verify revision 5 at the production endpoint after deployment. The owner still needs to confirm the actual hosting and email service arrangements, recipient roles, transfer safeguards, and support retention practice for Privacy §8. Reconcile the App Privacy and age-rating answers, store text and optional book purchase setup with the final build in App Store Connect. Any later canonical policy correction needs a new revision. |

The app project's release materials include its detailed 17 November policy review and the account evidence needed for §8. The website review did not access provider accounts or submit an app.
