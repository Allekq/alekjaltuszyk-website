# Code Workroom IDE — Privacy Policy

Version 1.3.0 · Effective 17 November 2026

## 1. Operator and scope

Aleksander Jałtuszyk, based in Poland, provides Code Workroom IDE and is the controller for personal data he controls directly. Contact: alekgameshelp2@gmail.com. This notice covers the app, its online policy checks and related support. General website visits are also covered by https://alekjaltuszyk.xyz/privacy-policy/.

## 2. Information stored on your device

The app stores projects and source files, imported data, editor preferences, library organization, run configurations, lesson answers and progress, local history, deleted-item recovery data, Git repositories and account settings on your device. Program output, diagnostics and test/debugging state are processed locally. Project code can read and change files made available to its runtime.

Git access tokens are stored in the device Keychain, separately from project exports. Git account labels, server addresses, usernames and account selections are stored locally. Removing a project does not necessarily remove a separately saved Git account or revoke its token at the provider. Remove saved accounts in Git Accounts and revoke tokens with the provider when needed. Keychain items can survive app reinstallation under Apple's platform behavior.

Policy acceptance records include the exact reviewed Terms and Privacy Policy, their versions and hashes, the device-clock acceptance time and the privacy acknowledgment. These records and cached policy documents are stored locally; they are not uploaded as an account or consent profile. Acknowledgment is not consent for optional processing.

The app does not send your source, lesson progress or local history to an app-developer backend. Device backups, Files locations and exports you choose may copy data using Apple or another storage provider under your settings and that provider's practices.

## 3. Online policy checks

The app requests the current English policy bundle from https://alekjaltuszyk.xyz/apps/CodeWorkroomIDE/policy-bundle.json at startup or when refreshing policies, subject to local refresh limits. The request contains no project files, Git token, advertising identifier or policy acceptance receipt. HTTPS requests necessarily expose network information such as IP address, request time and requested resource to the serving infrastructure; ordinary HTTP metadata may also be transmitted.

The public policy site is hosted through GitHub Pages. GitHub logs and stores visitors’ IP addresses for security, whether or not they are signed in to GitHub. Its request and security processing follows its service practices and privacy statement: https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement. The developer does not add an app analytics service to these requests. Hosting-provider processing is not a promise of zero network data collection. The app uses an ephemeral policy connection without persistent cookies and rejects redirects. Failed online checks retain valid local documents.

## 4. Optional Git connections and sharing

When you request Clone, Fetch or Push, the app connects directly to the HTTPS Git server you selected. The server receives information needed for the request, which may include your IP address, repository path, username and authentication token. Push sends the source, history and commit author information you choose to publish. Your Git provider controls its own retention, access and privacy practices. Saving an account locally does not by itself test the account with that provider.

Import, export, sharing and external links are initiated by you and use your chosen destination or system service. Do not export credentials or sensitive files you do not intend to disclose. The developer does not receive your Git credentials or repositories through an app account service.

## 5. Analytics, advertising, assistance and purchases

The app includes no advertising SDK, cross-app tracking or developer-operated usage analytics. It does not use an advertising identifier or sell personal data.

On supported devices, optional system-model assistance processes the supplied context on the device. Automatic identifier suggestions are off by default and can be enabled or disabled in Editor & Completion. They use the language, typed identifier prefix and a bounded excerpt of code around the cursor.

Ask Apple Intelligence is a separate setting in Editor & Completion and is also off by default. Enabling it lets you capture code and send a question explicitly with Ask. The request contains your question, the language, the selected code or, when there is no selection, an eligible enclosing function or current line, and a bounded excerpt of nearby code. An enclosing function name may also be included. Opening the panel or capturing a selection does not itself send a question to the model. The model can return an explanation and a proposed replacement; it has no tools to execute code or apply an edit. To change a file, you must open Review proposed edit and choose Apply edit. The app checks that the captured source is still current and that editing is allowed.

The app keeps the current question, captured context, answer and proposed edit in workspace memory, rather than saving a chat transcript. This state can remain while the workspace is open and is replaced or cleared as you ask, recapture or reset the workspace. Disabling Ask Apple Intelligence clears its question, context, answer and review state. Applying a proposal makes it ordinary project or exercise source: normal saving, undo, source-history, recovery, export and backup behavior then applies. Disabling assistance does not erase edits you already applied or copies of those files.

Separately, choosing Generate in the Git commit composer asks the local model to suggest a commit summary from a bounded excerpt of the selected or staged changes and file paths. This action does not require either the automatic-suggestions setting or Ask Apple Intelligence to be enabled. Review generated text before using it. Each model request uses a new local session without a retained model conversation or model tools. The app has no remote AI fallback and does not upload this context to a developer-operated AI service. System model downloads and Apple's platform services are governed by Apple's settings and policies.

Code Workroom IDE is free to download and includes free learning materials. Optional additional learning content may be offered as one-time in-app purchases. Apple handles the App Store account, checkout and payment under its own terms and privacy practices: https://www.apple.com/legal/privacy/data/en/app-store/.

The app uses StoreKit to obtain product information when purchase screens are opened or refreshed, check current entitlements at startup and when active, and listen for transaction updates. If you request a purchase or Restore Purchases, it uses Apple's corresponding StoreKit flow; restoration can require App Store authentication. On the device, the app verifies signed transaction information and processes product and transaction identifiers, product type, and revocation or expiry information where provided, to grant or remove access. The app does not send receipts, transaction records, your source or lesson progress to a developer purchase server. It has no separate app purchase account and does not receive payment-card details. Apple's purchase records are separate from your local app data and are not erased by deleting a project or uninstalling the app. A refund or revoked entitlement can remove access to purchased content without deleting saved exercise progress.

## 6. Support messages

If you email support, the developer receives your email address, message and any attachments you choose to send. The contact mailbox uses Google Gmail, which processes mail and delivery metadata under its service practices. You can ask for support without sending source code or access tokens. Include only the information needed to explain the issue; redact secrets and unrelated personal information.

Support information is used to answer your request, investigate the issue, prevent abuse and maintain necessary support or legal records. It is not used for advertising or tracking.

## 7. Purposes, legal grounds and retention

Where data-protection law requires a legal basis, requested app and support services are provided on the basis of performing a contract or taking requested pre-contractual steps where applicable. Necessary security, service operation and ordinary correspondence may rely on legitimate interests in providing and protecting the service. Legal obligations apply where records must be retained by law. Optional consent, when legally required for a particular purpose, must be obtained separately; accepting terms or acknowledging this notice does not provide it.

Local data remains until removed through the app or device controls, subject to bounded history/recovery storage and your backup settings. Deleted-item recovery can retain content after an initial deletion; use the relevant permanent-delete controls when desired. If physical cleanup fails, the app can keep a pending cleanup record and retry; logical removal is not a guarantee of immediate physical erasure. Separate Git history, exports, device backups and other copies may retain earlier content. Uninstalling the app does not remove exported copies, remote repositories, provider records or necessarily Keychain credentials. Policy receipts remain in app-owned local storage unless that app data is removed. The app retains up to 100 acceptance records; saving further records removes the oldest ones.

Support correspondence is retained for as long as reasonably needed to handle the request, maintain necessary records, resolve disputes, protect rights or meet legal obligations. Hosting, email, Git and backup providers have their own retention practices; this notice does not assign them an unverified fixed retention period.

## 8. Recipients, international processing and rights

Information may be handled by the hosting and email services described above, services you choose, and authorities or advisers where legally required or necessary to protect rights. Services may process information outside Poland or the EEA. Any legally required transfer safeguard depends on the particular recipient, service and agreement; contact us for information about processing under the developer's control.

Depending on applicable law, you may request access, correction, deletion, restriction or portability of personal data we control, and object to processing based on legitimate interests. Where processing relies on consent, you may withdraw that consent without affecting earlier lawful processing. Some records may be retained where law permits or requires it. Contact alekgameshelp2@gmail.com; proportionate verification may be needed. The developer cannot access or erase a local project or independent Git provider's records remotely.

You may complain to a competent data-protection authority. In Poland, this is the President of the Personal Data Protection Office (UODO). The app is a general coding and learning tool, not a child-specific account service. If you believe a child has supplied personal data through support, contact us to review and address it.

## 9. Changes and contact

Updates identify their version and effective date. Valid bundled or cached policies remain readable offline. Material changes will be communicated through updated app policies as applicable. A changed notice does not retroactively authorize new optional processing.

Support and privacy contact: Aleksander Jałtuszyk — alekgameshelp2@gmail.com.
