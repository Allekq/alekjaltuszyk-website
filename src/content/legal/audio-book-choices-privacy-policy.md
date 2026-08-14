This Privacy Policy explains what AudioChoices does with information when you use the AudioChoices app for iOS and Android and the AudioChoices pages on `alekjaltuszyk.xyz`.

AudioChoices is an interactive "choose your story" audiobook app. It has no sign-up, no username, and no password, and it asks you for no name, email address, or phone number. It does still process a small amount of personal data: to remember what you have bought or unlocked, and to store the star ratings you choose to give, the app needs a way to recognise the same installation again. That is described in full below.

No advertising is shown in this app, no crash-reporting tool is used, and nothing you do here follows you into another app or website. Almost everything the app knows about your listening stays on your device. There are two exceptions and they are both narrow: a short list of anonymous milestones about how far listeners get through each book, which goes to the developer's own server and nowhere else (section 9), and two events — that the app was opened for the first time, and that a purchase was made — which go to Google Analytics so that money spent advertising this app can be told apart from money wasted (section 10). Neither carries anything about which books you open or what you choose inside them.

## 1. Who Is Responsible For AudioChoices

AudioChoices is provided by Alek Jałtuszyk, legally Aleksander Jałtuszyk, an individual sole trader established in Poland. For data protection law, that person is the controller of the personal data described in this policy.

Contact:

- Email: `alekgameshelp2@gmail.com`
- Support page: [`https://alekjaltuszyk.xyz/apps/AudioBookChoices/support/`](https://alekjaltuszyk.xyz/apps/AudioBookChoices/support/)
- Privacy Policy: [`https://alekjaltuszyk.xyz/apps/AudioBookChoices/privacy-policy/`](https://alekjaltuszyk.xyz/apps/AudioBookChoices/privacy-policy/)
- Terms of Use: [`https://alekjaltuszyk.xyz/apps/AudioBookChoices/terms-of-use/`](https://alekjaltuszyk.xyz/apps/AudioBookChoices/terms-of-use/)
- Legal manifest: [`https://alekjaltuszyk.xyz/apps/AudioBookChoices/legal-manifest.json`](https://alekjaltuszyk.xyz/apps/AudioBookChoices/legal-manifest.json)

Full trader identification details, including the registered address required for consumer and Digital Services Act purposes, are published on the AudioChoices listings in the Apple App Store and Google Play.

Data protection questions, and any of the requests in section 17, go to the address above. There is no separate department to route them through — this is a one-person business, and the person who reads that inbox is the one who wrote the app.

## 2. Quick Summary

- There is no account, no sign-in, no password, and no name, email address or phone number is ever requested by the app.
- The app does create an anonymous identifier for your installation. It is a random string with no personal details attached, but it is treated as personal data, because it lets purchases and ratings be tied back to one installation.
- Where you are in a story, which choices you made, which endings you reached, your settings, your downloaded audio and your age stay on your device and are never sent anywhere. Your age can now come from your phone rather than from a slider — on iOS 26 and later, and on Android where Google Play supports it, the app asks the platform for the *age range* you fall into. That range never leaves your device either, and it is used only for the three local decisions listed in section 4 — which stories to offer you, which ones a notification may mention, and whether you are old enough to be asked the advertising-measurement question. Section 14.
- The app does report a short list of yes-or-no milestones per book — that you started it, that you reached an ending, that you have heard a quarter, half, four fifths or all of its scenes, that you have listened for at least 10, 30 or 60 minutes. Each is reported once and never again, only for books you have unlocked or subscribed to, and only to the developer's own server. Section 9 sets out exactly what is and is not recorded.
- Server-side, the app stores what you have bought or unlocked, how many free unlocks you have used, and any star ratings you submit. The milestones are **not** stored against you: they only ever add one to a per-book total, and no record of which ones came from your installation is kept in the database. Those records are held in a Google Cloud database hosted in the **European Union**. The anonymous identifier itself is issued by Firebase Authentication, a global Google service that is not EU-pinned, so that one account record is processed outside the EU. A narrower set of processing — for purchases, content delivery and the app-integrity check — also reaches the United States. Section 8 sets all of this out.
- Audio and text files are delivered from Cloudflare's network, which necessarily sees your device's IP address for every file it delivers.
- Purchases are handled by Apple and Google, with RevenueCat as the subscription and purchase processor. No payment-card details ever reach the developer.
- The app does use **Google Analytics for Firebase**, for one purpose: measuring whether advertising this app works. It records exactly two things — that the app was opened for the first time, and that a subscription or book was bought — and nothing about your listening. It runs on the same switch as the milestones above, and where consent is required it does not run until you give it. Section 10.
- No crash-reporting tool, no advertising, **no advertising identifier (IDFA or AAID)**, no App Tracking Transparency prompt and no cross-app profiling. The milestones above go to the developer's own server and are never shared, sold or used for advertising.
- Notifications are off unless you switch them on, only arrive when you have not used the app for a while, and are decided entirely on your device. There is no push service and no device token, and no server is ever told that one was sent. While they are on, your device does re-read the public catalogue on a schedule of its own, which — like any internet request — shows your IP address to whoever serves the file. Switching them off deletes the note the app kept to make them work. Section 13.
- Story narration is generated by an AI text-to-speech model, but that happens offline, on the developer's own machine, before a book is published. Nothing about you is ever sent to an AI service.
- On iOS, the optional head-nod feature reads headphone motion on your device only. It is never stored and never transmitted.

## 3. The Anonymous Identifier

The first time the app needs to talk to the server, it creates an anonymous account with Firebase Authentication. This is not an account in any normal sense: it has no email address, no password, no phone number and no profile. It is a random identifier, and it is the only thing that links you to anything stored on the server.

Because that identifier lets the app recognise the same installation again, and lets purchases, free-unlock usage and ratings be attached to it, it is treated as personal data under the GDPR. This policy does not claim that AudioChoices collects no personal data, because that would not be true.

Where the identifier lives, and how long it lasts, depends on the platform:

- **On iOS**, it is stored in the system Keychain. The Keychain is deliberately durable, so the identifier normally survives deleting and reinstalling the app. That is what lets purchases come back automatically on the same device.
- **On Android**, it is stored in the app's own private storage. Uninstalling the app generally removes it, so a reinstall generally produces a brand-new identifier. If that happens, use **Restore purchases** in the app's Settings to reattach purchases made with your Google account. Depending on your device's backup settings, Android's own backup and restore behaviour may in some cases restore the previous identifier instead.

The identifier is generated randomly. It is not derived from your device's hardware, it is not an advertising identifier, it is not shared with advertisers, and it is never combined with data from any other app or company.

## 4. What Stays Only On Your Device

The following is stored on your device and is never transmitted to the developer or to anyone else:

- your progress through each story, including which node you are on and your playback position
- which choices you made and which endings you have reached
- cumulative listening time and engagement counters, such as how many choices you have made in a book. These counters themselves are never transmitted. What can leave the device is derived from them: the yes-or-no milestones in section 9, such as "has listened for at least 30 minutes", and never the underlying figure
- downloaded audio and story text, and cover images
- app settings and preferences, including playback speed, theme, and whether the head-nod input is enabled
- which books you have marked as favourites
- which of the milestones in section 9 have already been reported for each book, so the same one is never sent twice. This is the whole of the de-duplication mechanism, and it lives only here — there is no matching record on the server
- while notifications are switched on, the small note described in section 13: which books your device has seen in the catalogue, which you have been told about, which categories you appear to enjoy, which books you left unfinished, and when the app was last opened. Switching notifications off deletes it
- whether you have left the "Share anonymous usage data" setting on
- while that setting is on, the random per-installation identifier Google's analytics library creates and keeps on your device (section 10). It is not the anonymous identifier in section 3 and is not connected to it
- which story you finished most recently, how many you have finished, and which ones the app has already asked you to rate — so that it asks about a book at most once, and does not ask again for a fortnight. This is kept whatever your notification settings say, and is cleared with the rest of your local data
- whether you said yes or no to notifications, and which kinds you have left switched on. This is your answer rather than part of the note above, so it deliberately outlasts both: it survives switching notifications off, and it survives clearing local data in Settings. An answer that a housekeeping control could quietly forget would mean asking you again, which is the opposite of respecting it
- which version of the legal documents you accepted, and when
- your age, where it came from — a slider you moved or a range your phone shared — when it was last checked, and the range itself where there was one
- whether your phone told the app that a law requiring age assurance applies to you: a single yes-or-no answer, and nothing more. It is recorded because the app asks your phone only at the start and when you ask it to, so without recording the answer it would forget it by the next launch. **It is not a country, not a region, not a place, and not a location reading of any kind** — the app never works out where you are, and section 14 sets out what it does and does not do instead. It is also the one item in this list that the clear-local-data control in Settings deliberately keeps rather than erases, for the reason section 14 gives; deleting the app removes it along with everything else. Like everything else here, it stays on the device

Your age is never transmitted, whichever of those two ways the app came by it. It is stored on the device and read only there, for three things, all local: deciding which books the library shows you (section 14), deciding which books a notification may mention (section 13), and deciding whether the advertising-measurement question is one you are old enough to be asked (section 10). It is never sent to the analytics in section 10, never attached to a milestone in section 9, and never included in anything the app sends the server.

Deleting the app removes this local data, subject to normal iOS and Android backup and restore behaviour. The app also offers a control in Settings to clear local data without deleting the app.

## 5. What Is Stored On The Server

Stored against your anonymous identifier:

- whether an All Access subscription is active, when it expires, whether it is set to renew, and which store it came from
- which books you have bought individually
- store transaction identifiers for those purchases, and whether a transaction was later refunded
- which books you have spent your free unlocks on, the free-unlock limit, and the time your free-unlock allowance started, rounded down to the hour. Free unlocks are released gradually rather than all at once, and that start time is what the schedule counts from
- your own star rating for each book you rated, from 1 to 5, together with which edition of that book you had heard when you rated it. The number of story choices you had made is sent with the rating so the server can check it comes from someone who actually listened, and is then discarded rather than stored
- timestamps for the records above, and a log of subscription and purchase events received from RevenueCat

Stored per book, not per person:

- the total number of ratings and their sum, used to show an average rating for each book. This aggregate cannot be traced back to an individual listener.
- how many times each milestone in section 9 has happened across everyone who has listened. These are plain running totals — "this book has been started this many times", "this book has been finished this many times" — with no identifier, no timestamp finer than a day, and no split by country, language or device. They record events, not people: a listener who reinstalls the app becomes a new anonymous installation and is counted again, which is why nothing derived from these totals is ever described as a number of listeners.

The app never sends free text to the server. There is no comment field, no review text, no username, no profile and no message body. The one place you can type — the library search box — filters books already on your device, and what you type there is never transmitted.

**Where these records are held.** The server code that reads and writes them runs in Google's `europe-west1` region in Belgium. The database itself — Google Cloud Firestore — is hosted in Google's **European** multi-region (`eur3`, spanning the Netherlands and Belgium). So the records listed in this section are stored in the **European Union**. One thing sits outside that boundary and it is named here rather than buried in section 8: the anonymous identifier is issued by **Firebase Authentication**, which is a global Google service with no region setting, so the underlying account record — the identifier itself, when it was created, and when it was last seen — is held by Google outside the EU, including in the United States. Everything the app then stores *against* that identifier is in the EU, as described above. Google LLC is nonetheless a United States company, and some administrative access to this infrastructure, and some of the operational logging Google's own systems generate, can still involve the United States even though the database and server code are EU-hosted. Section 8 explains that, and the other, narrower cases in which data still reaches the United States.

Beyond that, operating any internet service means some technical information is unavoidably processed: your device's IP address, the time of the request and what was requested. This happens at Cloudflare when audio and text files are delivered, and at Google when the app calls the server. These are ordinary access and operational logs, and a server log line can include your anonymous identifier alongside the action it describes, for example when a book unlock is credited.

Those logs exist so that faults can be diagnosed and abuse can be detected. They are not used to build a profile of you, are not used for analytics, and are not combined with the milestones described in section 9 — the only thing about your listening that reaches the server at all. Everything else about how you listen stays on your device.

## 6. Why This Data Is Processed, And The Legal Basis

Under the GDPR, every purpose needs a lawful basis. These are the ones relied on:

| Purpose | Data used | Legal basis |
| --- | --- | --- |
| Give you access to the books you bought, unlocked or subscribed to, and remember that between sessions and devices | Anonymous identifier, subscription state, purchased book IDs | Art. 6(1)(b) — performance of the contract with you |
| Process a subscription or a one-time book unlock through Apple or Google | Anonymous identifier passed to RevenueCat as its `app_user_id`, purchase and subscription state, store transaction identifiers | Art. 6(1)(b) — performance of the contract |
| Keep records of purchases and refunds for accounting and tax purposes | Store transaction identifiers, purchase and refund records, dates | Art. 6(1)(c) — compliance with a legal obligation under Polish accounting and tax law |
| Grant the free unlocks and enforce the limit | Anonymous identifier, list of books a free unlock was spent on | Art. 6(1)(b) — performance of the contract |
| Prevent repeated abuse of the free-unlock allowance, including after a deletion request | A minimal record that this identifier has used its free unlocks | Art. 6(1)(f) — legitimate interests in preventing fraud and abuse of a free tier |
| Store the star rating you chose to give, and show you your own past ratings | Anonymous identifier, your 1–5 rating per book, the choice count at the time of rating | Art. 6(1)(b) — performance of a feature you actively used |
| Show an honest average rating for each book | Per-book totals only, which are not linked to any individual | Art. 6(1)(f) — legitimate interests in showing readers a meaningful, non-manipulated average |
| Understand which books hold listeners and which lose them, so that better books get written and the library can be ordered honestly | The milestones in section 9, which are added to per-book totals and never stored against you | Art. 6(1)(f) — legitimate interests in understanding whether the books published are working |
| Deliver audio, story text, covers and the catalogue to your device | IP address and ordinary request metadata seen by Cloudflare and Google as an inherent part of any internet request | Art. 6(1)(f) — legitimate interests in delivering the content you asked for |
| Keep the service secure, diagnose faults, and prevent abuse of the backend | Operational logs, which can include the anonymous identifier and the IP address of a request | Art. 6(1)(f) — legitimate interests in network and information security |
| Check that a request really comes from a genuine, unmodified copy of the app rather than a script, so that paid books cannot be pulled out of the service in bulk | A short-lived attestation token issued by Apple's App Attest on iOS or Google's Play Integrity on Android, and the app-integrity signals those services use to produce it. On Android that includes whether the installed app matches the one published on Google Play, and whether the device passes Google's integrity checks. It contains no name, no account and no advertising identifier, and it tells the developer nothing about you | Art. 6(1)(f) — legitimate interests in preventing fraud, unauthorised copying and abuse of the service |
| Measure whether money spent advertising the app produces installs and purchases, so that advertising can be stopped, changed or continued on evidence | The two events in section 10, a random per-installation identifier created by Google's analytics library, and coarse device and country information | Consent — the "Share anonymous usage data" switch. Not legitimate interests: this is a third-party analytics library placed on your device for the developer's commercial benefit, and that is not something to be assumed |
| Answer a support email you send | Your email address and whatever you choose to write | Art. 6(1)(b) and Art. 6(1)(f) — responding to your request and maintaining support records |

On the milestone row specifically, legitimate interests are relied on rather than consent because of how narrow the processing is: the facts recorded are a fixed list of yes-or-no thresholds, each recorded once; nothing is recorded about which choices you made or when you listened; the result is a set of per-book totals, not a profile; and none of it is shared, sold, or used for advertising or to decide anything about you as an individual. You can object to it under Art. 21 at the address in section 22, and you can switch it off entirely at any time in **Settings**, under "Share anonymous usage data" — which stops the app sending anything further, immediately and without asking you to justify it.

Apart from the advertising measurement in the table above, AudioChoices does not rely on consent as a legal basis, because none of the rest is advertising, profiling or tracking. There are three places where consent genuinely is the basis, and all of them are real ones.

The first is the optional head-nod feature: iOS asks for motion permission, and you can grant or refuse it, and change your mind at any time in iOS Settings.

The second is **"Share anonymous usage data"**, which is one switch governing two things: the milestone reporting in section 9 and the advertising measurement in section 10. In the European Economic Area, the United Kingdom, Switzerland and Canada it is asked for outright, and nothing runs until you answer.

The table above sets out the legal basis for what the *server* does with the milestones, which is legitimate interests. But a separate and older rule — the ePrivacy Directive, in Poland the Prawo komunikacji elektronicznej — governs storing or reading anything on your own device, and it asks for consent regardless of whether the information involved is personal. Both the note the app keeps so it does not report the same milestone twice, and the identifier Google's analytics library keeps for your installation, are what that rule reaches. So in those places the app asks first, with nothing pre-selected, and stores nothing and sends nothing unless you agree. Elsewhere it starts on, and the Settings toggle switches it off.

UK listeners are asked outright, as EEA listeners are.

The third is notifications, and there the whole feature runs on your choice. They are off until you switch them on, and switching them off erases what was stored. The one thing written before you answer is a note that the question was asked, so that it is not asked forever; nothing else is stored on your device until you say yes. The same ePrivacy rule as above is what makes your answer the permission — but unlike milestone reporting, it is applied everywhere rather than only where the rule reaches, because a notification is the app interrupting your day and no other standard for that seemed defensible. See section 13. No personal data reaches any server for this feature at any point, so no GDPR basis is needed for a server side that does not exist.

There is no automated decision-making that produces legal effects or similarly significant effects for you. Nor is any profile of you built on any server the developer runs: nothing held there describes your tastes, your habits or your behaviour, and section 5 is the whole of it. The two events sent to Google Analytics (section 10) are held by Google rather than by the developer, describe an install and a purchase and nothing else, and are not used to decide anything about you inside the app. One thing deserves naming rather than hiding behind that sentence: if you switch notifications on, your own device works out which categories you appear to enjoy, in order to decide which new book is worth mentioning to you. That is an automated look at your preferences, so it is described in section 13 rather than tucked under a blanket denial. It is computed on your device, from your device's own history, is never transmitted, is seen by nobody, decides nothing beyond which of two book titles a notification might mention, and is deleted when you switch notifications off.

## 7. Who Receives Data

These are the only recipients. Each one gets only what is listed.

| Recipient | What it receives | Role |
| --- | --- | --- |
| **Google** (Google Analytics for Firebase, and Google Ads) | The two events described in section 10 — that the app was opened for the first time, and that a subscription or book was bought, with the product, price and currency — together with a random per-installation identifier created by Google's library, the device model, operating-system and app version, language, and a country worked out from the IP address. It receives nothing about which books you open or what you choose inside them | Processor for Google Analytics; Google Ads then receives the resulting conversion counts so that campaign spending can be measured. Not held in the European Union — see section 8. Runs only where you have not been asked or have said yes |
| **Google** (Firebase Authentication, Firebase App Check, Cloud Firestore, Cloud Functions, Cloud Logging) | The anonymous identifier; the request bodies the app sends, which contain only a book ID, a star rating and a choice count; the entitlement, purchase, free-unlock and rating records described in section 5; the app-integrity attestation tokens described in section 6, which Firebase App Check verifies on every request; operational logs including request IP addresses | Processor, contracting through Google LLC, a United States company. The server code runs in Google's `europe-west1` region in Belgium, and the Firestore database is hosted in Google's **European** multi-region. Firebase Authentication and Firebase App Check are global Google services and are not region-pinned; see section 8. Because Google LLC is US-based, some administrative access and some operational logging can still involve the United States, as explained in section 8. |
| **Cloudflare** (R2 object storage) | An HTTP request for each catalogue file, cover image, story text file and audio file your device fetches, which necessarily includes your device's IP address | Processor, for content delivery and storage. Cloudflare is a **United States** company operating a global network, and requests are served from whichever of its locations is nearest to you |
| **RevenueCat** | Your anonymous identifier, as its `app_user_id`; purchase and subscription state; product identifiers; store transaction identifiers; and the technical and transaction information its SDK and the stores provide to operate subscription management, which can include device type, operating-system version, IP address, Apple receipt data or a Google purchase token, and the time the app was last seen. It never receives a name, an email address or a payment-card number from the app | Processor for subscription and purchase management, based in the **United States**, where the subscriber records it holds are stored. RevenueCat's own privacy information describes its processing in more detail. |
| **Apple** (App Store) and **Google** (Google Play) | Everything needed to take your payment and manage your purchase, under their own terms | Independent controllers for the payment relationship. Card numbers, billing addresses and payment details stay between you and the store, and never reach the developer |
| **Apple** (App Attest, iOS only) and **Google** (Play Integrity, Android only) | The app-integrity check described in section 6. On iOS the device generates a key in its Secure Enclave and asks Apple to certify it; on Android, Google Play services reports whether the installed app and the device pass Google's integrity checks. Neither receives your anonymous identifier from the app, and neither is told which book you are reading | Independent controllers for the attestation service, which is part of the operating system platform rather than something the app can supply itself. The developer receives only the resulting yes-or-no verdict and the token it came in |
| **Email provider** | Only the content of a support email, if you choose to send one | Processor for correspondence |
| **Website hosting** | Ordinary web request metadata for the AudioChoices pages on `alekjaltuszyk.xyz`, which are static informational pages | Processor for the website |

**One platform service is asked for something rather than told something, and it is listed here so the omission is not mistaken for an oversight.** Under section 14 the app may ask Apple or Google which age range you fall into. That is a request to the operating system on your own device; it carries nothing about you, nothing about your listening and no identifier the app holds, and what comes back — a range — stays on the device. Apple and Google are not recipients of your data in this exchange, and no row above covers it because there is nothing going out to describe.

Nothing is sold, and there is no data broker, no ad network and no attribution partner anywhere in this app. There **is** now one analytics vendor, Google, for the narrow advertising-measurement purpose set out in section 10 — which is a change from what earlier versions of this policy said, and is stated here rather than left for you to notice. No advertising is shown in the app, and nothing about you is shared so that somebody else can advertise to you.

Information may additionally be disclosed where it is genuinely necessary to comply with law, to respond to a valid legal request, or to establish, exercise or defend legal claims. If the app or the developer's business were ever transferred to someone else, relevant records could be transferred with it, and this policy would be updated first.

## 8. International Transfers

**Analytics, first, because it is the clearest case.** The two events described in section 10 are processed by Google Analytics on Google's global infrastructure, including in the **United States**. Unlike the records in section 5 there is no EU-hosting option for this, so no claim of one is made. Google LLC is certified under the **EU–US Data Privacy Framework** and its UK Extension and Swiss–US counterpart, and Google's data processing terms additionally incorporate the **EU Standard Contractual Clauses**. Where consent is required for this, none of it happens at all unless you give it, and turning off "Share anonymous usage data" stops it.

**Where your data is stored.** The records described in section 5 — entitlement and subscription state, purchased book IDs, store transaction identifiers, free-unlock usage and star ratings, each held against your anonymous identifier — are stored in the **European Union**. The server code that handles the app's requests runs in Google's `europe-west1` region in Belgium, and the database it writes to, Google Cloud Firestore, is hosted in Google's European multi-region (`eur3`, spanning the Netherlands and Belgium). If you are in the EEA, the UK or Switzerland, that database and that server code do not move your data out of the EU.

**The exception, stated plainly.** An earlier version of this policy said the anonymous identifier itself was stored in the EU. That was not accurate, and this is the correction. The identifier is issued and held by **Firebase Authentication**, which Google operates as a global service with no region setting, so that account record — the identifier, its creation time and its last-seen time — is processed by Google outside the EU, including in the United States, on an ongoing basis. The same is true of **Firebase App Check**, which verifies the app-integrity tokens described in section 6. Both are covered by the safeguards below.

**Where transfers to the United States still happen, and why.** A narrower set of processing does still involve the United States, and it is worth being clear about it rather than overstating how contained things are:

- **RevenueCat**, the subscription and purchase processor, is a United States company. It holds your anonymous identifier, as its `app_user_id`, plus your purchase and subscription state, in the United States.
- **Cloudflare** delivers audio and text files from whichever of its global network locations is nearest to you, which is not always inside the EU, and Cloudflare is itself a United States company. Delivering a file necessarily exposes your device's IP address to whichever location serves it.
- **Google LLC**, which operates the EU-hosted infrastructure described above, is itself a United States company. Some administrative and support access to that infrastructure, and some of the operational logging Google's own systems generate, can still involve the United States even though the database and server code are EU-hosted.
- **Apple** and **Google Play** process your payment as independent controllers, under their own terms, and may process that data outside the EU.

**The safeguards relied on.** Where personal data is transferred to the United States, that is made under Article 46 GDPR safeguards and, where applicable, the European Commission's adequacy decision for the EU–US Data Privacy Framework:

- **Google LLC** (United States), the recipient for Firebase Authentication, Firebase App Check, Firestore, Cloud Functions and Cloud Logging, is certified under the **EU–US Data Privacy Framework** and its UK Extension and Swiss–US counterpart, and Google's data processing terms additionally incorporate the **EU Standard Contractual Clauses**.
- **RevenueCat** (United States) processes personal data under a data processing agreement incorporating the **EU Standard Contractual Clauses**.
- **Cloudflare** (United States) processes personal data under a data processing agreement incorporating the **EU Standard Contractual Clauses**.
- **Apple** and **Google Play** transfer purchase and payment data internationally under their own published safeguards, as independent controllers for that relationship.

A copy of the safeguards relied on for any of these transfers can be requested at `alekgameshelp2@gmail.com`, and the position stated here is the position as at the effective date at the top of this page.

Data Privacy Framework adequacy has been challenged repeatedly in the past. If it were invalidated, transfers to Google would continue to rely on the Standard Contractual Clauses, and this policy would be reviewed and updated.

## 9. How We Measure Whether A Book Works, And What Is Still Not Done

AudioChoices records a small amount of anonymous information about how far listeners get through each book, so that it is possible to tell which stories hold up and which lose people. There are no adverts in the app, no advertising identifier is used, and none of this information is sent to anyone else — it goes to the developer's own server and stays there.

For each book, these are the facts recorded, and there are no others:

- that you started it
- that you made your first choice in it
- that you reached an ending
- that you have heard at least a quarter, half, four fifths, or all of its scenes
- that you have listened to it for at least 10, 30, or 60 minutes

Each of these is recorded once and then never again.

**What is deliberately not recorded by this measurement.** Not which choices you made. Not which ending you reached. Not when you listened, how often you open the app, or how long any individual session was. Not your exact listening time or your exact progress — only whether you have crossed the thresholds listed above. Nothing about your device beyond what sending the message unavoidably involves. There is no running stream of activity: the app sends this when it starts and when you pull down to refresh your library, and never while a book is playing.

Two of those deserve a pointer rather than a footnote, because the same words appear in section 10 with a different answer. Google's analytics library — the separate thing described there, governed by the same switch — does record that a session started and roughly how long the app was in the foreground. It is the app as a whole, never a book: it carries nothing about which story you opened or how far you got. So "how often you open the app" is not recorded *here*, and something close to it is recorded *there*, and you are entitled to know which is which.

**One thing this measurement sends that is worth naming.** So the server can tell whether a new milestone rests on one counted weeks ago, each report also carries what your device has already had counted for that book. It is read to check the report hangs together and then discarded — nothing about it is written down. But it does mean that, for the instant of the request, the call carries your installation's identifier alongside a picture of which milestones it has reached. The database keeps none of it; the ordinary server logs described in section 5 are the only place any trace of the call survives, and they record that it happened, not what it said.

**Only for books you have access to.** These milestones are recorded only for free books, and for paid books you have subscribed to, bought, or opened with one of your free unlocks. If you sample the opening of a book you have not unlocked and stop, nothing is recorded at all. That boundary exists so the figures describe how good a story is, rather than how people react to a price.

**Nothing is stored against you.** The request is authenticated with the same anonymous identifier described in section 3, because the server has to check that you actually have access to the book before counting anything. But the identifier is used and discarded: it is never written next to a milestone, and the database holds no record of which milestones came from which installation. All that changes is that a per-book total goes up by one.

One honest caveat, because "nowhere at all" would be too strong a claim: like any request to any internet service, the call itself passes through Google's ordinary server logs, which hold the identifier, your IP address and a timestamp for a short period — section 5 describes those logs and section 15 gives the retention. Those logs record that a request happened, not what it reported, and nothing joins them back to a counter. They exist for diagnosing faults and detecting abuse, and they would exist whether or not this feature did. The job of not counting the same milestone twice is done entirely on your own device, by your own copy of the app.

**Whether it starts on or off depends on where you are.** In the European Economic Area, the United Kingdom, Switzerland and Canada, the app **asks you outright** on the acceptance screen, with nothing pre-selected, and records nothing at all unless you say yes. Everywhere else it is on unless you turn it off, and the acceptance screen says so in plain words rather than burying it.

The reason for the split is not that listeners elsewhere matter less. It is that European, UK and Canadian rules treat *writing anything to your device* — here, the small note your own copy of the app keeps so it does not report the same milestone twice — as something to be asked about separately from what the developer then does with it. That is a fair rule and the app follows it where it applies. Section 6 explains why the United Kingdom joined that list rather than having always been on it.

**Either way you can change your mind at any time.** **Settings → "Share anonymous usage data"** turns it on or off immediately, and turning it off also clears the note your device was keeping. Nothing you have already contributed can be pulled back out of a per-book total, because nothing in that total records that it was yours.

**What is kept afterwards.** What is not deleted is the running total for the book itself: how many times a book has been started, how many times it has been finished. Once your milestone has been added to a total, nothing records that it was ever yours, so there is nothing personal left in the total to erase. If you keep listening after asking for deletion, you may contribute to those totals again, because there is no longer anything held that would recognise you.

These totals are used to decide which books to write next, and a rounded version of them is shown in the app — for example "1K+ listens" on a book's page. An exact figure is never shown, no figure at all is shown below 100, and nothing about an individual listener is ever shown.

**And these remain true:**

- **This bullet used to say there was no analytics SDK in the app at all. There is one now**, and section 10 describes it: Google Analytics for Firebase, recording that the app was first opened and that a purchase was made, so that advertising can be measured. What remains true is the part this section is about — **nothing measures your listening behaviour**. No third-party tool sees which books you open, which choices you make, how far you get or how long you listen; that is what the milestones above are for, and they go to the developer's own server. RevenueCat also processes purchase information for its subscription service and dashboard reporting, disclosed in Apple's privacy categories as **Analytics**, and likewise is not used to profile listeners or decide what they see.
- No crash-reporting or diagnostics SDK is linked into the app. There is no Crashlytics or equivalent.
- No advertising is shown, and no advertising SDK is present.
- The app never reads the iOS advertising identifier (IDFA) or the Android advertising ID (AAID), and never shows an App Tracking Transparency prompt. This survived the arrival of the analytics library in section 10 because it was built to: on iOS the app links a version of Google's SDK that does not contain the code to read the advertising identifier, and on Android reading it is switched off in the app's manifest.
- No profile of you is built, and nothing follows you across other apps or websites. The two events in section 10 say an install happened and a purchase happened; they are not joined to anything you do elsewhere, and there is no identifier in them that could be.
- There is no consent-management platform, no cookie banner and no advertising-consent flow in the app. The one-time legal acceptance screen shown before you start listening is an acknowledgement of these documents, not a tracking-consent flow. Section 6 lists the three things in the app that genuinely are consents; the one this section is about is **"Share anonymous usage data"**, which covers both the milestone reporting here and the advertising measurement in section 10, and in the European Economic Area, the United Kingdom, Switzerland and Canada the app asks you outright, with nothing preselected and both answers equally easy to give, before either of them records anything. Everywhere else it is on by default and Settings turns it off. Nothing else about the *measurement* in this section is optional in that sense, and nothing that is switched off is switched on again by using the app.
- The app does not request camera, microphone, location, contacts or photo-library access, and declares none of those permissions.

## 10. Advertising Measurement

This section describes the one part of AudioChoices that exists for the developer's benefit rather than yours, and it is stated plainly because the rest of this document would be worth less if it were not.

AudioChoices is advertised. Money is spent on Google Ads to put the app in front of people who might like it, and without some way of knowing whether that money produces anything, the advertising is guesswork paid for out of the same pocket that pays for writing the books. So the app includes **Google Analytics for Firebase**, whose entire job here is to tell Google Ads that an install or a purchase happened after somebody saw an ad.

**Two events are the reason this is here, and neither of them is written by this app.**

- **`first_open`** — that the app was opened for the first time on this installation.
- **`in_app_purchase`** — that a subscription or a book unlock was bought, with the product, the price and the currency, read from the App Store or Google Play transaction.

Those two are what Google Ads is told about. **Google's SDK also collects housekeeping events of its own that cannot be switched off**: that a session started, roughly how long the app was in the foreground, which screen was shown, that the app or the operating system was updated, and on iOS that a subscription renewed, converted or was refunded.

What none of them contains is anything about a book. AudioChoices logs no events of its own, and there is deliberately no code anywhere in the app that describes what you do inside a story to anyone. Nothing about which books you open, which choices you make, how far you get or which endings you reach is sent through this, and the moment that changed this section would have to change with it.

**What identifies you, and what does not.** Google's SDK creates an **app instance ID** — a random identifier for this installation, generated on your device. It is not your name, not an email address, and not connected to the anonymous identifier in section 3. Alongside an event it also sends ordinary technical facts: device model, operating system version, app version, language, and an approximate place worked out from the IP address the request arrives with. **The app never asks for or receives your device's location** — there is no location permission, no GPS reading and no precise position anywhere in it; what Google derives from an IP address is a town at the very finest and usually only a country. **On Android it also reads the Play install referrer** — the campaign and click information Google Play records when an app is installed from an ad — because that is the mechanism by which an install can be attributed to a campaign at all. Clearing local data in **Settings** discards the app instance ID, and the SDK generates a new one if it is ever running again.

**No advertising identifier, and no tracking prompt.** The app never reads Apple's IDFA or Android's advertising ID. On iOS this is enforced by the build itself, which links a version of Google's SDK that does not contain the code to read it; on Android it is switched off in the app's manifest. That is why AudioChoices shows no App Tracking Transparency prompt: that prompt exists to ask permission to read the advertising identifier, and there is nothing here to ask about. It is also why nothing you do here follows you into another app or website.

**This runs on your permission, and it is the permission you have already been asked for.** The switch is the same one described in section 9 — **Settings → "Share anonymous usage data"** — and there is deliberately not a second one. In the European Economic Area, **the United Kingdom**, Switzerland and Canada the app asks outright before anything is collected, and until you answer, Google's SDK is not running at all. Everywhere else it starts on, and that switch turns it off immediately.

**Where consent is needed, it is not asked of younger listeners at all.** In the European Economic Area a child's own consent is not a valid basis for processing of this kind below an age each country sets for itself — anywhere from 13 to 16. The app uses **16, the highest of those, everywhere it asks**, so its answer is never one that would fail to count. Rather than put a question whose answer would not stand, it does not put it: if the age the app has for you is under 16, or it has none, the question is not shown and **in those places** the advertising measurement does not run for you. That age never leaves your device; it is read where it already sits. Since the app can now be given an age range by your phone rather than only by you (section 14), this decision often rests on something firmer than a number you typed — but the range itself is never sent to Google Analytics or to anyone else, and never can be. The number this decision uses is the one section 14 leaves you with — the bottom of the range your phone confirmed, wherever it confirmed one, and 13 where it confirmed none *and* your phone has told the app that a law requiring an age check applies to you. Neither limit ever raises the number, so the app acts on **the lower of your own answer and what your phone confirmed**: if your phone confirmed "18 or over" and an older setting of yours says 14, the number is 14. The question is put only where the number left after all of that is itself 16 or above. A confirmed range starting at 16 or above does not on its own cause the question to be put to somebody whose own answer was lower, and where the number is under 16 for either reason the question is not put to you at all. The per-book measurement in section 9 is treated the same way, because the two share a switch. Where consent is not the basis — see section 9 for where that is — the switch starts on regardless of age, and section 18 says what that does and does not involve.

One consequence of that ordering, said plainly because you would otherwise have no way to know: where the app has to ask first, `first_open` is recorded when you accept rather than when you actually first opened the app. It is the same installation either way. Only the moment it is counted moves.

**Who receives it, and where it goes.** Google, as the provider of Google Analytics, and Google Ads, to report whether a campaign produced anything. Unlike the records in section 5, **this data is not held in the European Union** — Google Analytics processes it on Google's global infrastructure, including in the United States, under the safeguards described in section 8. It is not sold, and it is not shared with anyone else.

**What this is not.** It is not used to decide what you see in the app; the library's ordering and its suggestions are computed on your own device from your own listening, and always have been. It builds no profile that is shown to anyone or acted on. And it does not reach the per-book measurement in section 9 — those are separate systems that never meet, one of which never leaves the developer's own server and the other of which never touches what you listen to.

**Honest about the change.** Earlier versions of this policy said that AudioChoices contained no third-party analytics SDK at all. That was true when it was written and it is no longer true, which is why this document has a new version and why you were asked to accept it again. What has not changed is the part that mattered most: nothing about your listening — your books, your choices, your endings, your progress — is sent to anyone, and nobody is building a picture of you out of it.

## 11. AI Narration

Stories in AudioChoices are narrated by an AI text-to-speech model, Kokoro-82M, which is released under the Apache 2.0 licence.

That narration is produced by the developer, offline, on the developer's own equipment, before a book is published. The finished audio files are then uploaded and delivered to your device like any other audio file.

This means no listener data of any kind is ever sent to an AI service, an AI provider or a text-to-speech service. Not your voice, not your choices, not your progress, not your identifier. There is no runtime AI in this app.

The story text itself is written by a human author.

## 12. Headphone Motion, iOS Head-Nod Feature, Optional

On iOS, AudioChoices offers an optional feature that lets you answer Yes or No by nodding or shaking your head while wearing supported headphones such as AirPods. If you enable it, iOS asks for motion permission, and the app reads headphone motion data while it is waiting for you to answer a choice, and while you are testing the feature in Settings. It stops reading motion as soon as the choice is answered.

That motion data is used in the moment to recognise the gesture, on your device. It is never stored and never transmitted. If you do not enable the feature, or your headphones do not support it, no motion data is read at all. You can always answer by tapping instead. Android does not have this feature.

## 13. Notifications

Notifications are **off unless you turn them on.** The app asks once, after you have finished a story or listened for a while — deliberately not during setup, when you would have nothing to judge the offer on. **If you answer at all, either way, you are never asked again.** Only if you dismiss the question without answering it does the app try once more, a fortnight later, and then never again. **Settings → Notifications** turns them on or off at any time, and lets you silence either of the two groups described below on its own.

Three kinds exist, in two groups. **New stories** is one kind and one group: that a new story has been published. **Your books** holds the other two: that a story you started is unfinished or has endings you never reached, and — built but not switched on — a reminder that you have free unlocks you have not spent. Grouping them is what stops the app's settings from turning into a list that grows every time a kind is added, and it means silencing a group silences everything in it, including anything added to it later.

**They only arrive when you have been away.** Each kind has a minimum period of not opening the app before it may fire at all — a day or more, depending on the kind. So somebody who opens the app most days receives few or none, and somebody who opens it every day receives none of the slower kinds at all. Nothing is delivered while the app is open, and nothing is delivered late at night or early in the morning in your own time zone — a held notification can slip later than intended if your phone is asleep, but never earlier. Notifications you repeatedly do not open make the app wait longer each time, and a kind you keep ignoring switches itself off. **The exact thresholds are tuned as the app is used; the guarantees in this paragraph are not.**

**Nothing about you is sent anywhere to make this work.** There is no push service, no device token, and no registration of any kind — the app has no technical means of sending you a notification remotely, and does not have one. What happens instead is that, roughly once a day when your phone judges it a convenient moment — sometimes much less often, since both platforms decide this and neither guarantees it — your device re-reads the same public catalogue file the app already downloads, compares it against what is on your device, and, if there is something worth saying, composes and shows the notification itself. No server is told that a notification was decided on, shown, or opened.

One honest caveat, in the same spirit as the one in section 9. That catalogue file is fetched from Cloudflare, and any request to any internet service discloses your device's IP address and the time to whoever serves it. The file is public, the request carries no identifier and no account, and nothing about you goes up with it — but switching notifications on is what causes your device to make that request on a schedule of its own, including on days you never open the app. That recurring contact would not otherwise happen, and it stops when you switch notifications off.

While notifications are on, the app keeps a small note on your device so it can make those decisions:

- which books your device has seen in the catalogue, starting from the moment you switched notifications on, so that only genuinely new ones are announced. Books already there when you opted in are never announced, and the list grows as the library does
- which books you have already been told about
- a short summary of which categories you appear to enjoy, worked out from your own listening, and which books you started and left unfinished
- a copy of the handful of facts a decision needs, taken from what the app already knows: the age the app has for you (section 14 — the single number the app acts on, which is a slider answer, the bottom of a range your phone shared, or, where section 14's limit applies, the lower of your own number and what your phone confirmed; never the range itself and never where it came from), whether you subscribe, and how many free unlocks you have not spent
- when the app was last opened, when each kind last fired, and how many notifications of each kind went unanswered
- a short record of the last two dozen decisions and the reason for each — "nothing new to say", "you were using the app" — which exists so the developer can diagnose the feature, and which never leaves the device any more than the rest of this list does

The rules that govern storing anything on your own device — the ePrivacy Directive, in Poland the Prawo komunikacji elektronicznej — require your permission for that note, and switching notifications on **is** that permission. Those rules do not reach everywhere in the world, but this is applied everywhere anyway, with no regional split: a notification is the app interrupting your day, and there is no version of that which ought to depend on where you live.

The one thing written before you answer is a count of how many times the question has been put and when, so that dismissing it does not mean being asked again forever. That is the whole of it — two numbers, nothing about you, and nothing that could be. It is kept whether or not you ever answer, and it is what the "asked at most twice" promise above is made of.

**Switching notifications off deletes everything else**, immediately: nothing on the list above survives. So does **clear local data** in Settings, which sweeps the note along with the rest — the difference being that clearing local data leaves notifications switched on, so the note starts filling again, whereas switching them off stops it. There is no copy of any of it anywhere else, because there never was one; the only qualification is the ordinary one in section 4, that your phone's own backup may hold a copy of app storage outside the app's reach.

**There is no time limit on the note, and that is deliberate rather than an omission.** It is not a history that grows — it describes what the app would say to you next, and each launch rewrites it from what is already on your device. The one part that does accumulate is the list of books your device has seen, which is bounded by the size of the library. The reason it has no expiry, unlike the milestone record in section 9, is that an expiry would achieve nothing here: there is no server copy to age out and no one to whom an old note could be disclosed, and forgetting which books you had already been told about would mean announcing them to you a second time.

None of this concerns the playback controls that appear on your lock screen while a story is playing. Those are part of playing audio rather than a message from the app, they appear whatever your notification settings say, and they are not covered by anything in this section.

Your phone has its own, separate permission for notifications, which you can refuse or withdraw at any time in your device's settings. If you do, nothing arrives whatever the app's own setting says, and where the app can tell that this has happened it says so on the Settings screen rather than leaving you looking at a switch that does nothing. On Android each of the two groups above is its own notification channel, so you can also silence one group and keep the other from your device's settings; a group that has never sent you anything has no channel there yet.

## 14. Age And Content Filtering

Each book carries an advisory minimum age set by its author, and the library hides books whose advisory age is higher than the age the app has for you. **There are now two ways it can get one**, and which one applies depends on the phone you are holding.

**Your phone's own age range, where it offers one.** On iPhones and iPads running iOS 26 or later, and on Android where Google Play supports it, the app asks the platform — Apple or Google — which *age range* you fall into. Your device asks you whether to share it. What comes back is a range and nothing else: "13–15", "18 or over". No birth date, no name, no identity document, no account details, and nothing about how you use any other app. The app keeps the **bottom** of that range, so somebody in the 13–15 range is treated as 13, and it shows you on screen which range it received and where the range came from. If you decline, the app does not turn round and ask you again with a slider — it assumes 13 and moves on.

**A slider, where your phone offers nothing — and wherever you would rather not be asked.** Every other device — every iPhone below iOS 26, and any Android where Google Play has nothing to share — works exactly as before: the app asks you to state your age on a slider, nothing checks it, and you can change it in Settings whenever you like. On the devices that *do* offer a range, the age screen carries a link for setting your age yourself **instead of** asking your phone, so the lookup is never the only way forward and nobody has to have their account consulted to get past it. That link is offered *before* the question goes to your phone. Once a range has come back, the slider is not shown at all — see the fourth point below.

Seven things about this matter for your privacy:

- **Nothing about your age is transmitted, on either path.** A range from your phone stays on your device exactly as a slider answer does. It is not attached to your anonymous identifier, there is no copy of it on any server, and it never reaches the advertising measurement in section 10 — Apple's and Google's own terms for these age features forbid using them for advertising, marketing, profiling or analytics, and this app does not.
- **What goes out to obtain it is the request, and nothing else.** Asking your phone for a range tells Apple or Google nothing about your listening, your choices, or what you have unlocked. They already know you have this app, because you installed it from their store.
- **Any checking that happens is the store's, not the app's, and this is a change.** Every earlier version of this policy said the app attempts no age-assurance check of any kind. That is no longer the whole truth and it is stated rather than buried: where Apple or Google have established somebody's age range — including where a parent or guardian set it, or where the store verified it — the app receives the result. It performs no check itself, asks for no birth date and no documents, never sees your account, and sees nothing of how the range was arrived at beyond a label.
- **Where your phone gives a range, that range is what the app goes by, and this changed on 14 August 2026.** Until then the app asked your phone, showed you the answer, and then let a number set on a slider override it everywhere except in the few places whose law requires an age check. It no longer does. Where your phone has given the app a range, the app acts on **nothing above the bottom of that range**, wherever you are — so if your phone says "18 or over", the app works to 18 whatever number is stored beside it. On those devices there is no age slider: the onboarding screen and the Settings row show you the range, name the account it came from, and say that a range you think is wrong is corrected in your phone's own account rather than in this app. An age from a slider you set *before* your phone ever answered is still stored and still shown to you, and where it is **lower** than the range it is still what the app works to, because that only ever narrows what you are offered; Settings has a control for adopting the range instead if you would rather. Where your phone has given no range, none of this applies and you set your age yourself exactly as before — which is every iPhone below iOS 26 and every Android where Google Play has nothing to share, that is to say most devices in use today.
- **Where your phone gives no range and a law where you are requires an age check, the app works to 13.** Setting a higher number in the app does not lift that, and the app says so on the screen where you would otherwise try. Your own number is still stored and still shown to you in Settings; it is simply not acted on above 13, and it takes effect in full again if your phone later tells the app that no such law applies. **The app never works out where you are in order to decide this** — no location permission, no IP lookup, no guess from your language, your time zone or your SIM. The only thing that ever tells it a law applies is your own phone saying so.
- **That second limit operates only where your phone actually tells the app, and your phone does not always tell it.** The app never guesses; where it is not told and no range was given, nothing is capped and an age you set yourself stands in full. It is written out device by device rather than summarised, because a document that claims a protection it does not always have is worse than one that says where it stops:
  - **iPhone and iPad below iOS 26** — the phone offers no such signal at all, so this never applies there. Apple states that accounts on iOS 18 and earlier fall outside the regime these features exist to serve.
  - **iOS 26.0 and iOS 26.1** — the phone offers the age range but not the signal that says a law applies. On those two releases the app is never told, and nothing is capped.
  - **iOS 26.2 and later** — the phone answers the question and the app acts on the answer, including a "no", which lifts the limit again.
  - **Android** — Google Play tells the app one thing here, and only in one situation: that age verification is required and you have not yet completed it with the store. Google Play has no signal meaning the opposite, and it stops saying this once you have completed the verification. So on an Android device where Play has never reported an outstanding verification, nothing is capped and an age you set yourself stands in full; and where Play has reported one, the app keeps that answer, because nothing Play can say afterwards replaces it.

  Because the app never re-asks your phone on its own, whatever it was last told is what stands, until you use "Check my age range" in Settings.
- **If the app has no age at all**, it assumes 13 and hides anything rated above that. A range from your phone can also be *below* 13, and the app takes that at face value rather than rounding it up to its own 13+ minimum: fewer books are offered, and nothing else changes.

**Clearing your data does not un-ask your phone.** The clear-local-data control in Settings deletes the age, where it came from, when it was last checked and the range itself, and nothing afterwards re-asks the platform on its own. But the range belongs to your phone rather than to this app, so it is still there to be shared again the next time you use "Check my age range" or reinstall. Deleting what the app was told is not the same as deleting the thing it was told about, and this document should not imply otherwise.

**One thing is deliberately kept when you clear, and it is named here rather than left to be discovered.** Clearing data on this device erases the age you set and the range your phone confirmed, but not the fact that your app store told the app an age check is required where you are — that one yes-or-no answer stays, so clearing data is never a way to lift the limit above, and only your app store telling the app otherwise removes it. It is kept for exactly that reason: it was once cleared along with the rest, and that made a privacy control into a two-step way around a legal one, since the age setting sits on the same screen. Everything the clearing is actually for still goes, and what remains says only that a law applies here — it is still not a country, not a region and not a place, and it is no more revealing after a wipe than before. The confirmation the app shows you before clearing says this too. With the range erased and that answer kept, the app goes back to acting on nothing above 13 until you use "Check my age range" again.

**A range can lag behind a birthday.** Apple in particular keeps returning a range that was set earlier, for up to about a year. If yours looks out of date, update it in your device's own settings and then use "Check my age range" in AudioChoices' Settings.

**And what the app is holding can be older still, which matters because it is what the limit above is measured against.** The range your phone confirmed is kept until something replaces it, with no expiry of its own, and the app never asks your phone again by itself. So wherever this section says "the range your phone confirmed", read it as the most recent range your phone actually gave *this app* — which may have been months or years ago, and under circumstances that have since changed. It can even be a range that was confirmed before your phone ever said a law applied to you, in which case that older range is the one the limit uses now. Nothing here goes out of date on a clock, and a check that fails, or that you decline, leaves the older range exactly where it was rather than clearing it — deliberately, because a failed check must not take away a range you were correctly given. "Check my age range" in Settings is the only thing that refreshes it, and until you use it the app is working from what it was last told rather than from what your phone would say today.

**Checking again never overwrites an age you set yourself.** If the age the app is using came from your phone, checking again simply replaces it with the newer range. If you set the age yourself before your phone had answered, checking again records the new range and tells you what it says, but leaves your own number in place — the app treats a choice you made as the better answer, and does not undo it behind your back. The app then works to the lower of the two numbers, so which of them is doing the work depends on which is lower: if your own number is above the range's bottom, the app is already working to that bottom whether or not you do anything, and if your own number is *below* it, your own number is what stands. Either way the range only ever narrows what you are offered; it never widens it. If you would rather the range were used, the Settings age row offers exactly that — one control, which adopts the range your phone gave and cannot set any other number.

The filter is advisory content curation. It is not a security control, it does not decide what you may buy or play, and it is not a substitute for a parent's or guardian's own judgement.

## 15. Retention, And How To Delete Your Data

### How long things are kept

**Purchase, subscription and transaction records** are kept for as long as they are needed to give you the access you paid for, and to meet accounting and tax record-keeping obligations under Polish law. Because a purchase can be restored years later, and because tax records must be retained, these records are **not deleted on request**. There is currently **no automatic time-based deletion of purchase records**.

**A minimal record that an installation has used its free unlocks is kept even after you ask for deletion.** Without it, deleting data would reset an installation's free unlocks and could be repeated indefinitely, which would make the free tier meaningless. This retention is based on legitimate interests in fraud and abuse prevention, under Art. 6(1)(f). The record kept for this purpose is minimal: the identifier, which books its free unlocks were spent on, and the hour the allowance started. The start time is part of it because the allowance is released gradually, and a start time you could reset on demand would not be a limit at all.

**Webhook processing records are kept for 90 days.** When Apple or Google reports a purchase, RevenueCat notifies the server, and the server records that it has already handled that particular notification so that a repeat delivery cannot double-apply it. Each of these records holds the event type, its timestamps and the outcome. They carry **no identifier**, and they delete themselves automatically after 90 days — a window sized for RevenueCat's retry behaviour, which is measured in hours.

**Star ratings and other non-essential records can be deleted on request.** See below.

**The per-book milestone totals are kept indefinitely, and deletion does not remove them.** They are running counts of events — how many times a book was started, how many times it was finished — held with no identifier attached and no way to work out which total came from whom. No record is kept, at any point, of which installation contributed which event: the server increments the count and stores nothing else alongside it, so there has never been a link for deletion to break and there is no personal data in these totals to erase. That is also why they cannot be adjusted downward on request. Subtracting your events would require keeping a per-person history of your listening precisely so that it could later be undone, and that record is the one this app has chosen not to hold.

**Operational and access logs** are retained as follows, unless a provider's legally required audit log has a fixed longer period. Firebase Authentication keeps logged IP addresses for a few weeks; Cloud Functions keeps request IP addresses temporarily. The project's ordinary Cloud Logging bucket is kept at Google's default **30 days** and is reviewed before any custom retention or export is enabled. Google-required administrative and system audit logs can be retained for **400 days** and cannot be shortened by the developer. Cloudflare R2's per-bucket operations metrics are available for **31 days**; the developer does not export Cloudflare request logs to a separate log store. These periods are reviewed if the provider configuration or service changes.

**The note the notification feature keeps on your device is deleted the moment you switch notifications off**, and otherwise lasts as long as the feature is on, with no expiry — section 13 explains why an expiry would achieve nothing there. It is never sent anywhere, so there is no copy to delete elsewhere and nothing to ask anyone for. The count of how many times the notification question has been put to you is kept only for as long as it is doing anything — that is, while you still have not answered. Answering it, switching notifications off, and clearing local data all remove it, because once there is an answer there is nothing left for it to prevent. One consequence, stated rather than left to be discovered: if you dismissed the question without answering and then clear local data, the app may put it to you again.

**The note your device keeps of which milestones it has already reported** expires by itself thirteen months after a book's entry was last written, whether or not you clear anything. Thirteen months is the retention condition French regulators attach to exempt audience measurement, and it is the honest answer to how long any of this sits on your phone: bounded, at a number a regulator recognises.

**The two advertising-measurement events in section 10** are held by Google Analytics under that property's own data-retention setting, which is configured to **the shortest period Google offers for user-level data**, after which what remains is aggregate reporting that describes no individual installation. Turning off "Share anonymous usage data" stops any further events at once.

**Support emails** are kept for as long as is reasonably needed to answer the request and keep a record of it.

**On-device data** stays on your device until you clear it in the app, delete the app, or change it yourself. Two honest qualifications, both set out in full in section 14. Clearing the app's data removes the age it held, where that age came from, when it was last checked and the range beside it — but **not** the yes-or-no answer about whether your app store says an age check is required where you are. That one is kept, so that clearing data cannot be used to lift the limit section 14 describes, and only your app store saying otherwise removes it. And an age *range* belongs to your phone rather than to this app, so it can be shared again the next time you ask the app to check.

### How to request deletion

There is no account to delete, so deletion works differently here. There are two routes: the
data-deletion control in the app's **Settings**, and an email to `alekgameshelp2@gmail.com` with the
subject "Delete my data" carrying your installation's anonymous identifier, which Settings shows so
that you can copy it. Without that identifier there is no way to tell which records are yours, and
the request cannot be actioned.

**The steps for both routes are on their own page:
[Delete your AudioChoices data](https://alekjaltuszyk.xyz/apps/AudioBookChoices/delete-data/).**
That page is a plain-language summary; where the two differ, this document governs.

Requests are answered within one month, as the GDPR requires. If a request is complex, that can be extended by up to two further months, and you will be told why.

What deletion covers: your star ratings and votes, and the other server-side records held against your identifier that are not covered by the retention exceptions above. What it does not cover: purchase, subscription and transaction records; the minimal free-unlock-usage record; the per-book milestone totals, which hold nothing that identifies anyone; and the Firebase anonymous-auth record that keys those retained records. The anonymous-auth record cannot be removed while the retained records still need that identifier to preserve paid access, process refunds and prevent abuse. You will be told plainly which records were kept.

To remove all local data, delete the app from your device, or use the clear-local-data control in Settings.

Deleting your data does not cancel a subscription. Subscriptions are managed by Apple or Google and must be cancelled there. See the [Terms of Use](https://alekjaltuszyk.xyz/apps/AudioBookChoices/terms-of-use/).

## 16. Security

Every connection the app makes is encrypted in transit with HTTPS. Server calls are authenticated: the app sends a short-lived token, and the server verifies it before returning anything. Access to paid book files is granted through short-lived signed links, not open URLs, and those links expire.

The anonymous identifier and its session token are stored in the iOS Keychain on iOS, and in the app's private storage on Android. The database is locked down by rule: the app itself cannot write to it at all, every write goes through the server code, and the only record the app can read is the one belonging to its own identifier.

Requests also carry an app-integrity check, so that the server can tell a genuine copy of the app from a script pretending to be one. On iOS this is Apple's App Attest and on Android it is Google's Play Integrity, both described in sections 6 and 7. It exists to stop the paid library being copied out in bulk, and it identifies the app, not you.

Backend administrative access is limited to the developer, and is protected by the account security of the underlying platform providers.

No app, network, device or provider can be guaranteed to be perfectly secure. If you believe you have found a privacy or security problem, please write to `alekgameshelp2@gmail.com` before disclosing it publicly.

## 17. Your Rights

If you are in the EEA, the UK or Switzerland, you have the following rights over your personal data. They are honoured for everyone, everywhere, regardless of where you live.

- **Access** — ask what is held about your identifier, and get a copy of it.
- **Rectification** — have inaccurate data corrected. In practice the only data you can correct is your own star rating, which you can simply re-submit in the app.
- **Erasure** — ask for data to be deleted, subject to the retention exceptions explained in section 15.
- **Restriction** — ask that processing be limited while a dispute about accuracy or lawfulness is resolved.
- **Portability** — receive the data you provided in a structured, machine-readable format.
- **Objection** — object to processing based on legitimate interests, including the abuse-prevention retention. The objection will be considered on its merits, and the processing stopped unless there are compelling grounds to continue.
- **Withdraw consent** — where consent applies. There are three such places. The first is **"Share anonymous usage data"**, one switch covering both the milestone reporting in section 9 and the advertising measurement in section 10, asked for outright in the European Economic Area, the United Kingdom, Switzerland and Canada; turn it off in **Settings**, at any time, and both stop immediately — the app stops sending milestones and Google's analytics library stops collecting. Withdrawing it does not affect milestones reported before you withdrew, because those events were added to per-book totals that hold no record of who caused them; for the two analytics events, section 15 gives the retention. The second is notifications, in section 13, which are off everywhere until you switch them on; switching them off stops them at once and deletes what the app stored on your device to produce them. The third is the iOS motion permission for the head-nod feature in section 12; turn it off in the app or in iOS Settings. None of these withdrawals costs you access to anything you have bought.

To exercise any of these, write to `alekgameshelp2@gmail.com` and include your installation's anonymous identifier, which the app shows in Settings. There is no name, email address or account to look you up by, so without that identifier the records cannot be matched to you. There is no charge, and no requirement to give a reason.

If you are unhappy with how a request was handled, you can complain to a data protection supervisory authority. The developer's supervisory authority is Poland's:

- **Urząd Ochrony Danych Osobowych (UODO)**, ul. Stanisława Moniuszki 1A, 00-014 Warszawa, Poland — [`https://uodo.gov.pl/en`](https://uodo.gov.pl/en)

If you live elsewhere in the EEA, you can also complain to your own national supervisory authority. In the UK, that is the Information Commissioner's Office, [`https://ico.org.uk`](https://ico.org.uk).

## 18. Children

AudioChoices is intended for listeners aged 13 and over. It is not directed to children under 13, and the developer does not knowingly collect personal information from children under 13.

The app asks for no name, no email address, no phone number, no photograph and no contact details from anyone, at any age. The age step described in section 14 is put plainly, without pushing you toward any particular answer and without any advantage to overstating your age, and whatever comes of it — a range your phone shared, or a number you set yourself — stays on your device.

**Where your phone can tell the app your age range, it is asked first.** That is a deliberate improvement on a slider anybody could move, and it is worth being precise about what it does and does not buy. It means a child is more likely to be treated as a child, including where a parent or guardian set the range, and it means the app can now be told that somebody is under 13 — in which case it takes that at face value and offers fewer stories, rather than rounding them up to its own 13+ minimum. It does **not** mean the app verifies anyone: it performs no check, sees no documents, and on most devices in use today there is no range to share and the slider is still the answer. So the protections below are applied to everybody, not only to listeners the app believes are young.

AudioChoices is not enrolled in Apple's Made for Kids or Google Play's Designed for Families programmes, and is not designed for young children.

Books carry advisory minimum ages set by their authors, and some are written for older teenagers or adults. Parents and guardians should treat those advisories as guidance rather than a control, and use the device's own parental controls and screen-time features where they want a firmer boundary.

**Advertising measurement and younger listeners.** The two events in section 10 are collected from every installation the switch is on for, without regard to anyone's age — the age the app holds, however it came by it, is never sent to Google Analytics, never used to select who is measured beyond the consent rule in section 10, and never leaves the device at all. What limits the exposure is what the events contain: that an app was installed, and that a purchase was made. Nothing about a listener's behaviour inside the stories is collected, no advertising identifier is read, no profile is built and nothing is used to advertise to anyone. Where a listener is in a place that requires consent, nothing is collected until it is given.

**Notifications and younger listeners.** Because some listeners will be under 18, the notification feature in section 13 was built against the standards that apply to children's services rather than the minimum the law requires of an app for adults. It is off until it is switched on, and there is no version of it that runs quietly on legitimate interests instead. It is never used to bring back somebody who is already listening — every kind requires days of not opening the app before it can fire at all, so the more someone uses AudioChoices the less they hear from it. Nothing arrives at night. A kind that goes unanswered three times switches itself off. The kind that would nudge anyone toward spending something is built but deliberately not enabled, and when it is, it will be silenceable on its own. The advisory age from section 14 is used here too — the same single number the library uses, whether it came from a slider, from your phone's range, or from the limit that section describes. **A new story is never announced to you if its advisory age is above that number.** Two limits on that, written out rather than rounded up into a "never". The reminder about a book you started and left unfinished is drawn from books you already began and already have access to, and it is not re-checked against your age — so if your age later moves below that book's advisory age, that one reminder can still name it. Nothing you have not already started reaches you that way. And the background check works from a copy of your age, taken while the app was last on screen, so an age that changes in the seconds after you put the phone down can leave that copy a launch behind; opening the app rewrites it.

Where a younger listener's own yes is what the app relies on for the note it keeps on their device, that is acceptable for the same reason it is unremarkable: nothing reaches the developer, nothing is shared with anyone, and the whole of what turns on it is whether their own phone reminds them about a story.

If you believe a child under 13 has provided personal information, write to `alekgameshelp2@gmail.com` and it will be dealt with.

## 19. Support Emails And Website Pages

If you email support, the developer receives your email address, your message, and anything you choose to include, such as your device model, OS version, app version, or your installation identifier. Please do not send sensitive personal information in a support message unless your request genuinely needs it.

The AudioChoices pages on `alekjaltuszyk.xyz` are static informational pages. They set no analytics cookies, no advertising cookies and no tracking storage of the developer's own. Ordinary hosting and security infrastructure processes technical information such as IP address, browser type, requested URL, referring URL and timestamps, in order to serve and protect the site.

## 20. Changes To This Policy

This policy will be updated when AudioChoices changes in a way that affects it. The version number and effective date at the top of this page show when it was last updated, and the same values are published in the legal manifest linked in section 1.

Changes will not be made silently or retroactively. When there is a material change, the app shows the updated documents again before you continue listening, and asks you to accept the new version. The app records which version you accepted and when, on your device. If a change is not material, the updated document is published here with a new version and effective date.

If a future change would involve a genuinely new kind of data processing, this policy will be updated before that processing begins, not after.

## 21. Regional Information

The practices described above are applied globally. This section covers a few regional specifics.

**European Economic Area, United Kingdom, Switzerland.** Sections 6, 8 and 17 are the operative ones: legal bases, international transfers, and your rights. Section 8 explains where things stand: the server-side records described in section 5 are stored in the European Union, and a narrower set of processing — by RevenueCat, Cloudflare, and Google LLC's own administrative access and logging — still reaches the United States, under the safeguards described there. The controller is Aleksander Jałtuszyk, Poland. The lead supervisory authority is UODO, and UK users may also contact the ICO.

**United States.** AudioChoices almost certainly does not meet the applicability thresholds of the California Consumer Privacy Act as amended, or of the comprehensive privacy laws of other states, which are generally gated on annual revenue or on processing the data of large numbers of state residents. No claim of applicability is made here either way. Regardless of applicability, the rights in section 17 — to know, access, correct, delete and port — are honoured for US residents on the same terms as for everyone else, and there is no discrimination for exercising them. AudioChoices does not sell personal information and does not share it for cross-context behavioural advertising: the analytics in section 10 measure whether an advert produced an install or a purchase, which is the opposite direction — it tells the developer whether money was well spent, and gives nobody anything with which to advertise to you. It is not used for targeted advertising, and not for profiling in the sense these laws use, which is profiling in furtherance of decisions with legal or similarly significant effects. No sensitive personal information is collected.

**Do Not Track.** California's Online Privacy Protection Act requires this to be stated whatever the size of the operator, so: AudioChoices does not monitor or respond to Do Not Track browser signals, because there is nothing for them to switch off. The app is not a browser and does no cross-site tracking, and the website pages set no analytics or advertising storage of the developer's own. No third party is permitted to collect personally identifiable information about your activity across other sites or apps, through this app or these pages, over time.

**Children in the United States.** The app is not directed to children under 13 for the purposes of COPPA. It asks for no contact information from anyone, puts its age step neutrally and without encouraging anyone to overstate an age, and keeps the resulting age on the device — including an age range shared by Apple or Google under section 14, which is likewise never transmitted and never used for advertising. No parental-consent mechanism is operated, because no personal information is knowingly collected from children under 13.

**Everywhere else.** These practices are applied the same way wherever you live, and requests go to the same address — there is no separate, weaker process for people outside Europe.

## 22. Contact

Privacy questions, data-subject requests and deletion requests:

- Email: `alekgameshelp2@gmail.com`
- Support page: [`https://alekjaltuszyk.xyz/apps/AudioBookChoices/support/`](https://alekjaltuszyk.xyz/apps/AudioBookChoices/support/)
- Country: Poland
