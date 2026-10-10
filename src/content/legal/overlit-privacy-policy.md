This Privacy Policy explains what OverLit does with information when you play the OverLit app on iPhone or Android, visit the OverLit pages on `alekjaltuszyk.xyz`, contact support, or see ads shown in or for OverLit.

OverLit is a short-session arcade game. There is no sign-up, no username and no password, and the app never asks you for a name, an email address or a phone number. There is no text field anywhere in the app, so there is nothing you can type into it. Most of what OverLit knows about your play — your scores, your progress, your unlocks, your settings — stays on your phone.

Information can leave your phone through advertising, online leaderboards, platform services, support and, in older releases, optional measurement and diagnostics. Section 3 lists exactly which of them exist on which platform, because they are not the same on both, and every section after it says which platforms it applies to. Each is described below, including the parts that are less flattering.

## Release differences

**Remediation builds whose bundled privacy version is 3.6.0 or 3.7.0** deactivate Firebase Analytics, keep Tenjin measurement inactive, and do not include the Crashlytics integration. This stops new collection through those components in those builds; it does not erase data previously delivered, remove every old local SDK file, or change an older installed build. AdMob advertising, leaderboard requests, attestation and store services remain separate flows. Re-enabling measurement or diagnostics requires a verified purpose-specific choice and a new review.

**Changes prepared for version 3.7.0** include corrected under-age-of-consent advertising treatment and a server-side deletion barrier with retry cleanup and a minimal private suppression record. These changes apply when the matching app and backend are active; publication of this notice alone does not update an installed app or the service. The release checks have not yet established that this prepared behavior is live. Sections 6 and 15 distinguish it from earlier behavior.

The older-release measurement described in sections 6 and 7 may still apply to an older installed build. An advertising-eligibility signal used by those builds does not prove analytics or attribution consent. This notice does not retroactively authorize collection that lacked a required choice. General legal acceptance is not optional-purpose consent.

## 1. Who Is Responsible For OverLit

OverLit is provided by Alek Jałtuszyk, legally Aleksander Jałtuszyk, an individual sole trader established in Poland. For data protection law, that person is the controller of the personal data described in this policy.

Contact:

- Email: `alekgameshelp2@gmail.com`
- Telephone: `+48 73 2099027`
- Mailing address: `Aleksander Jałtuszyk, Skrytka Pocztowa 59, UP Warszawa 93, 02-800, Warszawa, Poland`
- Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/)
- Privacy Policy: [`https://alekjaltuszyk.xyz/apps/OverLit/privacy-policy/`](https://alekjaltuszyk.xyz/apps/OverLit/privacy-policy/)
- Terms of Use: [`https://alekjaltuszyk.xyz/apps/OverLit/terms-of-use/`](https://alekjaltuszyk.xyz/apps/OverLit/terms-of-use/)
- Legal manifest: [`https://alekjaltuszyk.xyz/apps/OverLit/legal-manifest.json`](https://alekjaltuszyk.xyz/apps/OverLit/legal-manifest.json)

No Data Protection Officer has been appointed; contact the controller above for privacy matters. Whether a DPO is required depends on the actual processing and scale, not the number of staff. The controller is established in Poland, within the EU.

This policy covers the OverLit app on both platforms and the OverLit pages on `alekjaltuszyk.xyz`.

## 2. Quick Summary

- There is no registration or interactive sign-in account, no password, and no name, email address or phone number is ever requested by the app.
- Your scores, level progress, theme unlocks, settings, play counters, age answer and purchase state are stored **on your device**.
- **Online leaderboards**, where enabled, send a score and a small set of technical fields to a server run by the developer on Google Cloud in **Belgium**, under a pseudonymous identifier. Your board nickname is picked at random by the server from a fixed list of words written by the developer. You can ask for a different one at any time, but you cannot type your own, and nobody can put their own text on a board.
- **You can turn leaderboards off entirely** and keep playing: **Settings → Legal → Use leaderboards**. Off means no boards, no nickname, and every run stays on your device. For players who told the app they are 13 to 17, scores are **not published unless they turn publication on** — they can read every board in the meantime.
- OverLit shows **Google AdMob ads** in the free version on **both iPhone and Android** — a banner above the board while you play, interstitials between runs, and opt-in rewarded ads. Google's advertising SDK processes ad-request and ad-interaction data, and your IP address, which can be used to estimate a coarse location. Section 6 has the detail; section 3 lists which components each platform carries.
- On iPhone, if you told the app you are **18 or older**, OverLit shows Apple's **App Tracking Transparency** prompt. If you allow tracking there, Google's advertising SDK may read your device's **advertising identifier** and use it to personalise ads and measure them across other companies' apps. If you say no, or never answer, the identifier is not available and is not used. Players in the **13 to 17** band are **never shown the prompt**.
- Older releases use **Tenjin** for install and milestone attribution. That is device-associated processing, including IDFV on iPhone, not simply anonymous counts when ATT is refused. Tenjin measurement is inactive in the remediation builds described above; section 6 explains older-release data.
- Older releases send milestone and repeatable gameplay events plus automatic SDK metadata to **Firebase Analytics**. Advertising eligibility alone does not establish consent for that purpose. Analytics is deactivated in the remediation builds described above; section 7 lists older-release data.
- Older releases include **Firebase Crashlytics**, which can process crash diagnostics, identifiers, session/stability traffic and Analytics breadcrumbs. It is not limited to crash moments or isolated from gameplay events. Remediation builds remove this integration; section 7 explains the distinction.
- The app asks you to pick an age range, **13 to 17** or **18 or older**. The raw answer stays on your device. Derived age-treatment signals are supplied to Google's consent/ad SDKs to apply audience restrictions. It changes how ads and analytics are configured, and whether your scores are published by default.
- **In South Korea every player is given the 13-to-17 treatment**, whichever age they picked, as the app does not operate a Korean guardian-consent mechanism. **In India, a player who chose 18 or older is treated as an adult**, and a player who chose 13 to 17 gets the 13-to-17 treatment as they do everywhere. In both countries scores are not published to a leaderboard unless the player turns it on, and a player who chose 13 to 17 cannot turn it on. Section 14 explains.
- There is **one optional purchase**, Full Version. It is handled by Apple or Google Play, it removes ads, and no payment-card details ever reach the developer.
- Nothing is sold to data brokers. Some privacy laws nonetheless treat personalised advertising as "sharing" or "targeted advertising" — section 12 explains how to turn that off.
- There is no chat, no social feed, no friend list, no multiplayer, no cloud save, no camera or photo access, no microphone access and no precise location.

## 3. What OverLit Is Built From

The following table describes the remediation builds identified above. Where an older build differs, that difference is stated. **The two platforms are not the same**, and this table is the single place that difference is recorded. Every later section says which platforms it applies to; where a section names a component this table marks "no", that section does not apply to you.

| Component | iPhone | Android | What it does |
| --- | --- | --- | --- |
| Firebase Authentication | yes | yes | Creates the pseudonymous leaderboard identity (section 5) |
| Cloud Functions and Cloud Firestore | yes | yes | Hold and serve the leaderboards (section 5) |
| Firebase App Check | yes | yes | Helps assess app/device authenticity for a request. Apple **App Attest**, with **DeviceCheck** fallback, on iPhone; Google **Play Integrity** on Android |
| Google Analytics for Firebase | deactivated | deactivated | Older releases collect the events and automatic metadata in section 7 |
| Firebase Crashlytics | removed | removed | Older releases collect diagnostics, sessions and potentially Analytics breadcrumbs (section 7) |
| Google User Messaging Platform | yes | yes | Google's privacy message, which is what gathers consent where the law requires it (section 12) |
| Store review prompt (Apple **StoreKit**, Google **Play In-App Review**) | yes | yes | Asks the store to show its own "rate this app" card. The request carries nothing about you, and the app is never told whether the card appeared or what you did with it |
| Google Mobile Ads SDK (AdMob) | yes | yes | Serves the ads in section 6 |
| App Tracking Transparency, Apple advertising identifier, SKAdNetwork | yes | **no** | Apple's tracking permission and attribution. These are Apple technologies and exist only on iPhone (section 6) |
| Google advertising ID | **no** | yes | Android's own resettable advertising identifier, used by the ads SDK for the same purposes (section 6) |
| Google Play Install Referrer | **no** | yes | Android's own way of telling an app which advert or store listing it came from (section 6) |
| Apple StoreKit | yes | no | The Full Version purchase (section 8) |
| Google Play Billing | no | yes | The Full Version purchase (section 8) |
| Tenjin attribution SDK | inactive | inactive | Older releases:  Measures which advert brought you to OverLit, and reports the section 7 milestones onward to the ad platforms the developer buys from (section 6) |
| House ads bundled into the app | yes | yes | Panels promoting the developer's own apps. Send nothing anywhere (section 6) |

**Both apps now carry the same advertising and consent components.** Section 6 applies to both. The differences that remain in the table above are Apple's and Google's own technologies rather than choices about you: App Tracking Transparency, the Apple advertising identifier and SKAdNetwork exist only on iPhone, and the Google advertising ID only on Android. The two stores also each have their own purchase component.

**There is exactly one attribution partner, and it is not Meta or TikTok.** OverLit advertises itself on Meta and TikTok, but no Meta or TikTok software runs inside the app. Both platforms instead carry a single measurement partner, **Tenjin**, which is what reports back to them. That is a deliberate choice and not merely a tidy one: Apple allows only one component in an app to own the SKAdNetwork conversion value described in section 6, so integrating each ad platform separately would mean one of them measuring properly and the rest not. One partner also means one set of software reading your device, instead of three.

Not present on either platform: Firebase Performance Monitoring, Remote Config or Cloud Messaging; any additional crash-reporting or product-analytics tool; **any Meta or TikTok SDK or pixel**; any conversion API sending events from the developer's own servers; any mediation partner; or any customer-list, contact-list or email upload to an advertising platform.

## 4. What Stays Only On Your Device

The following operational state is kept in app storage. Eligible scores and submission fields can reach the leaderboard service; older releases also derive measurement events from some gameplay actions, as described in section 7:

- your local high-score records, level progress, stars, campaign and arcade state, and local run history
- theme unlocks, menu position, and gameplay preferences such as haptics, accessibility, and notification choices
- in builds with continuous leaderboard browsing, a bounded local preference for whether a recently viewed board opens near the top or near your own row. The service receives the selected board view when rows are requested; the app does not upload this list of saved preferences or use it to store downloaded rows or precise scroll positions
- a small on-device reminder summary: your last visit and Daily attempt, current same-level or same-mode loss sequence, and reminders already planned or used
- whether you have leaderboards switched on at all, and whether your scores are published
- play counters, ad-pressure counters, ad-attempt records and timing values that decide when an ad or an unlock offer may appear
- your Full Version entitlement state, plus the store transaction identifiers needed to recognise a restored purchase
- which version of the legal documents you accepted, and when
- your age-band answer
- a record of which of the 16 one-time analytics milestone events have already been sent, so that none is ever sent twice. The eight repeatable events described in section 7 are deliberately not recorded here, because they are meant to repeat

Deleting the app removes this local data from the device, subject to the platform's normal backup and restore behaviour.

OverLit includes a **Copy Progress** option that copies a plain-text summary of your local progress to the clipboard. Copying it sends it nowhere. It only leaves your device if you choose to paste it somewhere, such as into a support email.

There is **no cloud save**. OverLit does not use iCloud, Game Center, Google Play Games, or any progress-sync service. A leaderboard entry is a published score, not a backup: if you delete the app, your progress is gone even if your score is still on a board.

**Reminders.** If you have played a Daily challenge, OverLit may remind you when the next one is ready. That message may include your current Daily streak when it can still be continued. After repeated unsuccessful tries on the same non-Daily level or mode, it may send one encouraging reminder naming that level or mode. It may also invite you back after several days away. These are occasional **local notifications**, planned from the small on-device summary above: no reminder is sent from a server, there is no push service or registration token, and nothing about your play is transmitted to schedule one. OverLit plans at most one reminder for a local day and at most two before you next open the app.

The Notifications section in OverLit Settings has a master switch and separate Daily, encouragement and return switches, all on by default. You can turn any of them off; your phone's notification settings also control whether delivery is allowed. The app asks for notification permission only after relevant play and at a suitable menu moment, never during setup or over a live run. Reminders are available only to players treated as adults for advertising purposes, so a player who told the app they are 13 to 17 never receives one, and neither does anyone in South Korea (section 14) — India does not restrict them. Buying the Full Version removes ads; it does not switch reminders off.

## 5. Online Leaderboards

*Applies to both platforms.*

**Leaderboards are not switched on in every version of the app**, and where the feature is switched on, a board becomes available to you only after you complete campaign **Level 5**. Those conditions govern normal gameplay participation. A deletion request can use an existing identity independently of gameplay progress in remediation builds.

### Choosing not to take part

**Settings → Legal → Use leaderboards** turns the feature off. With it off, nothing about a run leaves your device, no nickname is created for you, and the boards are not shown to you at all. That is deliberate: a switch that leaves the feature visibly running is a hidden flag rather than a choice.

There is a middle state as well, and it is where a player who chose the **13 to 17** band starts: they can **read** every board, but nothing of theirs is published until they turn publication on themselves. For a player who chose 18 or older publication starts on — except in the two countries named in section 14, where it starts off for everybody, and where a player who chose 13 to 17 cannot turn it on at all. That difference is deliberate: several regulators expect a service not to make a child public by default.

Turning it off does not retract what is already published. Section 15 is how you remove that.

### The pseudonymous identity

The first time the app needs to talk to the leaderboard service, it creates an anonymous account with Firebase Authentication. This is not an account in any normal sense: it has no email address, no password, no phone number and no user-created profile, and there is nothing to sign in or out of. It is a random identifier issued by Google.

Because that identifier lets the same installation be recognised again, and lets scores be attached to it, it is treated as **personal data** under the GDPR. This policy does not claim that leaderboards collect no personal data, because that would not be true.

Firebase keeps the identity credentials in platform storage. iPhone Keychain credentials can survive reinstall; Android uninstall or backup/restore behavior can produce a different identity. Save the identifier before uninstalling if you may need it for a later request.

### Your board nickname

The server gives you a nickname made of one to three words drawn at random from fixed lists written by the developer — for example `Grumpy Kraken` or `Cosmic Comet Otter`. Two players can end up with the same one.

The nickname is **not derived from your identifier**, and reveals nothing about it.

Next to your nickname there is a dice button. Pressing it asks the server for a different random name, as often as you like. You are choosing between names the developer wrote; you are not writing one. OverLit contains **no text-entry field of any kind**, anywhere in the app, and no part of the leaderboard service will accept a nickname sent by an app. There is therefore no way for anyone to put a real name, an insult, a phone number or an advertisement onto a board. That is a deliberate design choice and it removes an entire class of problem.

Your current nickname is stored against your pseudonymous identifier and is shown next to your score on every board you appear on. In that sense it is a stable pseudonym attached to a persistent identifier, and it is treated as personal data for the same reason the identifier is.

### What is sent when a score is submitted

The score-submission payload contains these fields. Authentication, attestation and ordinary network metadata are processed separately:

- a **board identifier**, which describes what was played: whether it was campaign, arcade, daily or legacy, the level or challenge, the grid size, the ruleset, whether the board ranks by score or by time, and the scoring and gameplay revision
- the **week identifier**, for weekly boards, in ISO form such as `2026-W30`
- the **score** — a whole number, either points or a duration in hundredths of a second — and whether higher or lower is better on that board
- a **de-duplication key** built from the run, so that a retry after a dropped connection cannot create a second entry
- the fixed word `STANDARD`, marking an ordinary run
- the **platform** (`IOS` or `ANDROID`), the **app version**, and the **content version**
- a **schema version number** — the fixed value `1`, which tells the server which submission format the app is speaking. It is a constant compiled into the app and says nothing about you

The score payload contains no contact details, raw age band, advertising identifier or free text. Authentication, attestation, request IP address and other ordinary technical metadata are separate from that payload.

Rolling a new nickname is a separate request. It carries **no data at all** beyond what every call needs — the pseudonymous identifier and the app-attestation token — because the app has nothing to send: the server picks the words.

Submission happens automatically at the end of a qualifying run, and only when the score actually beats your own previous accepted best. When leaderboards first become available after campaign Level 5, OverLit also checks the eligible personal bests already stored on your device and queues any that are not already pending or recorded as accepted. The same check can run when importing genuine played progress first makes leaderboards available or when an app update changes the available board identities, and it can be started manually from development builds. A stored result can seed a new board only when its recorded gameplay revision matches that board; an older result is not relabeled as a new-version score. This backfill sends one best per eligible board using exactly the same fields and ordinary eligibility rules as a live run; it does not upload your progress file or run history. Nothing is submitted while publication is switched off, and tutorial runs, your first onboarding run, abandoned runs, runs played with Developer Mode enabled, skipped levels, records created by developer tools and scores from an obsolete scoring version are never submitted.

### What is stored on the server

Against your pseudonymous identifier:

- a **private player record** holding your current nickname, the time it last changed, and per-identity rate counters used to stop automated flooding
- **one board entry per board**, holding the score, the server time at which that score was first accepted (earliest submission wins a tie), a copy of your nickname, the platform, the `STANDARD` marker and the identifier itself. Rolling a new nickname updates that copy on every board you are already on
- a **de-duplication ledger** of recent submissions, so retrying a request does not accept the same submission again. Each ledger record is scheduled to expire **30 days** after it is written. Database TTL deletion is asynchronous and can occur after that timestamp. Older backend versions also stored the returned board rows, including other players' nicknames and scores. The prepared backend instead retains acceptance metadata and builds a current response on retry; it does not add new cached copies of other players' rows to those ledgers
- a **rating record**, holding a percentile-based score derived from your best placements. One is written for every player who submits, whether or not the overall board is showing them

The prepared deletion service also uses temporary cleanup work records and retains a separate private suppression record after an erasure request, as described in section 15. These records remain personal data and are not public leaderboard entries.

Per board, not per person, the server keeps the board's registry entry and its size.

### What other players see

Older leaderboard views show a leading group and, when you are farther down, a separate group around your own row. The prepared continuous view instead opens one range near the top or near your own row, where available, and loads adjacent scores as you browse. Availability depends on the app and backend versions; publication of this notice alone does not enable that view. Each row shows rank, nickname and score, with your own row marked as **You**. Ranks are calculated on the server.

To load a board, the app sends the selected board, time bucket and platform group, together with a starting choice or pagination cursor when needed. Clients receive platform and pagination metadata that can include score, server acceptance time, position, traversal and tie-group information used to continue the list. Hiding a field in the UI does not mean the client never receives it. Public row/cursor data does not include the underlying authentication UID, age answer or purchase state.

### Where it runs, and what protects it

The server code and the database run in Google Cloud's `europe-west1` region in **Belgium**. The app cannot read or write the database directly: every operation goes through a small set of server functions, and the database rules deny all direct access.

Each request is protected by **Firebase App Check**, using Apple's App Attest with DeviceCheck fallback on iPhone and Google's Play Integrity on Android, to help assess app/device integrity. That check produces a short-lived token. The token and its integrity result are technical device/app signals, processed alongside authenticated requests.

The whole feature can be switched off remotely, for everyone, without an app update.

### The honest caveats

- A leaderboard entry is **published**. Its nickname and score are visible to any other player who reaches that board.
- Board entries have **no automatic expiry**. Builds with automatic gameplay-revision boards keep changed gameplay on separate boards. Older and newer app versions can continue submitting to their own boards during a staggered release; changing a level does not itself delete or close the older board. A board that is explicitly archived stops accepting submissions and stays readable indefinitely. An entry stays until you ask for it to be erased. Section 15 explains how.
- Because a leaderboard identity is pseudonymous, there is no name or email address attached to it. That is good for your privacy and awkward for your rights — see section 15 and section 17.
- Older backend versions retained copies of board rows in **other players'** de-duplication ledgers, where they could reappear if that player retried the same submission. The prepared backend stops adding those copies and can remove legacy response fields during erasure. Section 15 explains that cleanup, the ledger expiry and the separate limits on recalling copies already delivered to devices.

## 6. Advertising

*Applies to both platforms.*

The free version of OverLit is paid for by ads, served through Google's Mobile Ads SDK from Google AdMob. There are three kinds:

- **rewarded** ads, which you choose to watch in exchange for a cosmetic unlock, a level skip, or a new leaderboard name
- **interstitial** ads, full-screen, shown only at breaks outside active play — returning to a menu, replaying, advancing a level, or rolling a new leaderboard name
- a **banner**, a strip shown above the board while you play

The banner is the one ad that is on screen during a run. It sits in the empty space above the grid; it is never placed on the grid itself, it does not move or shrink the board, and it does not take taps meant for a cell. Where a device leaves no room above the board, no banner is shown at all. No full-screen ad ever interrupts a run in progress.

### What Google receives

Google and its advertising partners may process, under their own policies:

- your **IP address**, which can be used to estimate a coarse or general location
- device and app information, and SDK-level signals used to request and render an ad
- **advertising data**: which ads were requested and shown, impressions, clicks, rewarded-ad completions and similar events
- **product interaction data**: app launches, taps, ad views and interactions with the privacy messages described in section 12
- crash, diagnostic and performance data from the advertising SDK
- attribution signals, including SKAdNetwork postbacks handled by Apple
- your consent and privacy choices, so that they can be honoured

Google uses this to select and deliver ads, measure them, cap how often you see them, detect fraud and invalid traffic, and to run the ad auction. Google's own descriptions are in the [Google Privacy Policy](https://policies.google.com/privacy) and in [Google's advertising technologies information](https://policies.google.com/technologies/ads).

### App Tracking Transparency and the advertising identifier

Apple requires your permission before an app may link what it learns about you with data from other companies' apps and websites for advertising. That permission is asked through the **App Tracking Transparency** prompt.

**Adults.** If you chose the **18 or older** band, OverLit shows that prompt once the legal documents have been accepted and the app is on screen. If you choose *Allow*, Google's advertising SDK may read your device's **advertising identifier** and use it to personalise the ads you see and to measure them across other apps and websites. If you choose *Ask App Not to Track*, or dismiss the prompt without answering, iOS does not make the identifier available and it is not used. You can change this at any time in **iOS Settings → Privacy & Security → Tracking**; the change takes effect without reinstalling.

**Minors.** If you chose the **13 to 17** band — or you are in South Korea, whichever band you chose (section 14) — OverLit **does not ask the minor to grant tracking permission**. The app applies the minor advertising restrictions below. An earlier OS tracking grant is controlled separately in iOS Settings; changing the app's age answer does not itself reset that OS permission. This is deliberate: several laws restrict targeted advertising to people a service knows to be minors, and OverLit knows, because it asked.

**Refusing costs you nothing but relevance.** Ads still appear either way — they are what pays for the free game. What changes is whether they are chosen using an identifier that follows you between apps. The only way to remove ads entirely is the Full Version purchase.

### How your age answer changes the ads

For players treated as minors, publisher ad personalisation and Google's publisher first-party identifier are disabled, and the maximum ad content rating is **Teen**. Older builds applied the SDK's **TEEN** treatment. Prepared version 3.7.0 instead applies the SDK's **CHILD** treatment whenever the app supplies the under-age-of-consent flag. Google's CHILD treatment additionally disables the advertising identifier and third-party advertising-vendor requests. The content-rating cap is a separate setting; it does not establish a player's legal age or valid consent.

Non-personalised is not the same as anonymous. Depending on the applicable treatment, Google's SDK can still process IP addresses, technical signals and permitted storage for delivery, frequency capping and reporting. Non-personalised advertising alone does not remove every identifier or settle any required device-storage consent. The additional CHILD restrictions above must be distinguished from ordinary non-personalised advertising.

For players treated as adults, ad personalisation and Google's publisher first-party identifier may be enabled, subject to your consent choices, your device settings, Google's own settings and applicable law. The publisher first-party identifier is a Google-managed identifier scoped to this publisher; it is not the device advertising identifier and is not shared as one with other publishers.

### Install measurement, and the adverts OverLit buys

*Applies to both platforms.*

The free game is paid for by advertising, so OverLit advertises itself — on **Meta (Facebook and Instagram)**, on **TikTok**, and through **Google**. Buying adverts is only worth doing if it is possible to tell which of them brought players who actually play, and that is what this part is for.

**One partner, named.** OverLit carries a single attribution component, the **Tenjin** SDK (Tenjin Inc., United States). No Meta or TikTok software runs inside the app. Tenjin measures which advert an install came from and reports the milestones in section 7 onward to whichever ad platforms the developer is buying from.

**Older-release Tenjin processing.** Tenjin is inactive in the remediation build. In earlier releases, the SDK can receive:

- the **event names** listed in section 7 — nothing else about a run, and none of the parameters those events carry to Google Analytics;
- your **device advertising identifier**, but only where it is available: on iPhone that means only if you allowed tracking through Apple's prompt, and on Android it is the resettable Google advertising ID;
- your **IP address**, which can be used to estimate a coarse location, ordinary device/app/session information, and on iPhone the **identifier for vendor (IDFV)** used by the SDK as a developer device identifier;
- on Android, the **Google Play Install Referrer** — the string Google Play hands an app to say which listing or advert it was installed from;
- on iPhone, a copy of the **SKAdNetwork** postback described below.

It does **not** receive your score, your rank, your board nickname, your leaderboard identity, your age answer, your purchase card details, or anything you typed — there is nothing in OverLit to type.

**Nothing runs for a player treated as a minor.** For the 13-to-17 band, and for everyone in South Korea (section 14), the Tenjin SDK is **not started at all**. This is deliberately stronger than switching it off: an attribution SDK exists to measure across apps, so for a player who should not be measured across apps the honest state is that it never runs.

**Consent and ATT are separate.** Older builds used Google's ad-eligibility result to start this measurement. That result is not proof of a purpose/vendor consent grant. ATT refusal removes access to IDFA but does not establish that remaining IDFV/device-associated processing is anonymous, aggregate-only or nontracking. The remediation build keeps the component inactive while that purpose/recipient configuration is reviewed.

**SKAdNetwork in older releases.** The iPhone app declares the standard Google-mediation set of **SKAdNetwork** identifiers. SKAdNetwork is Apple's own attribution system: it reports installs to ad networks in aggregate, with delays and thresholds designed to prevent any individual being identified, and it carries no identifier for you at all. Within it, an advertised app may set a single small number — a *conversion value* — summarising how far a player got. OverLit sets that number from the same milestones in section 7: `0` means the app was installed and nothing was reached, and it rises through the list to `16` for the Full Version purchase. Apple sends that number to the ad network that won attribution, and, because the app names Tenjin's reporting endpoint, a copy to Tenjin. The developer receives campaign-level counts, not user-level data.

**On Android there is no SKAdNetwork**, because it is an Apple system. Attribution there works through the Google Play Install Referrer instead, which is why that row appears in the section 3 table for Android only.

**What the ad platforms get back.** Meta, TikTok and Google receive, from Tenjin, that an install from one of their adverts reached a given milestone. They use it to judge which adverts work and to find similar people to show them to, under their own privacy policies and as independent controllers. No list of players, no email addresses and no contact list is ever uploaded to any of them — OverLit holds none of those to upload.

### The app-ads.txt file

To identify authorised sellers of OverLit's ad inventory, this site publishes an [app-ads.txt file](https://alekjaltuszyk.xyz/app-ads.txt).

### House ads

*Applies to both platforms.*

When no network ad is available, OverLit may show a **house ad** instead: a panel promoting one of the developer's own apps, or OverLit's own Full Version purchase. These are bundled into the app. Showing one sends nothing to any ad network, and no data about you is used to choose it beyond whether you are being treated as an adult and, for the Full Version panel, whether you already own it.

Which apps are promoted differs by platform, for the same reason the rest of section 3 does. On **iPhone** they are **PlanKept** and **AudioChoices**, plus **Voice of Self**, which is shown only to players treated as adults. On **Android** there is a single house ad, for **AudioChoices**, shown to everyone — the other two have no Android listing to send anyone to. On both platforms OverLit may also show a house ad for **its own Full Version purchase**, which opens the purchase screen inside the app rather than a store listing; the bundled panel itself requires no network request and is not shown to a player who already owns it. Opening the purchase screen and using store services are separate actions.

Tapping one opens the app store or a page on this website — or, for the Full Version panel, the purchase screen inside OverLit, which can create ordinary store/purchase records and, in older builds, the paywall measurement event described in section 7. Where it opens something outside the app, from that point the destination's own policies apply. Some Android rewarded placements can use a house-ad fallback; availability and reward behavior depend on the placement, and Full Version suppresses house-ad fallback along with everything else.

### Full Version removes ads

While the Full Version entitlement is active, OverLit makes no banner, interstitial or rewarded ad request and shows no house-ad fallback. If you have the "Help the Dev" setting on, you get a thank-you panel where an ad would have been.

## 7. Analytics, Measurement And Crash Reports

*Applies to both platforms, identically.*

The following event inventory describes older releases. Firebase Analytics is deactivated and Tenjin is inactive in remediation builds; recording a local milestone does not cause those builds to transmit it.

**Older-release gating and startup.** Older app logic intends to restrict measurement to eligible adults after the legal/privacy flow. A persisted Firebase enabled setting can override a default-off configuration during SDK startup, before a current age or legal denial is applied. Therefore that configuration does not prove that every returning minor sent no automatic Analytics data. The remediation build uses build-level deactivation that overrides persisted enablement.

**What happens to an event that occurs before analytics is allowed to run.** A previous version of this document said such events "are not queued and are not replayed later". That was wrong about the milestones and is corrected here, because the difference matters to you:

- **The 16 milestones are recorded on your device when you reach them, and delivered later if and when measurement becomes allowed.** Reaching level 10 is something you did; the app writes it down whether or not it may report it yet. Nothing is sent while it may not be. If you are treated as a minor the record simply sits there, unsent, for as long as that is true — and if you later change your age answer to 18 or older and the older build's eligibility logic enables measurement, the milestones you had already reached are then sent. They are never sent twice.
- **The eight repeatable events are not stored, queued or replayed.** One that happens while measurement is not allowed — including in the moment before Google's privacy message finishes on a cold start — is simply discarded where it is made. The app does not retain them in its milestone ledger for later replay. SDK buffering and older-release diagnostic breadcrumbs are separate.

**Correction about older consent handling.** Older builds used advertising eligibility following Google's privacy flow to enable Analytics. That result did not itself prove an affirmative analytics-purpose grant or a configured `analytics_storage` consent signal. General document acceptance and ATT permission do not supply that grant. Remediation builds keep Analytics deactivated while purpose-specific collection, refusal and withdrawal are reviewed.

**A correction to an earlier version of this document.** Until Android gained an ad SDK, that build removed the advertising-identifier permission and switched off the identifier Google Analytics for Firebase would otherwise collect, because nothing in it had any use for one. That is **no longer true and this sentence replaces it**: the Android app now carries the Google Mobile Ads SDK, the permission is present, and identifier collection is enabled for a permitted collection. The older enablement logic does not by itself prove valid optional-purpose consent. The remediation build keeps Analytics deactivated.

**There are two kinds of event, and only two.** The full list is short enough to print, so it is printed.

**Sixteen conversion milestones, each sent at most once, ever.** The app keeps a local record of which have been delivered so that none repeats:

`overlit_onboarding_complete`, `overlit_first_run_started`, `overlit_first_run_complete`, `overlit_level_1_complete`, `overlit_level_3_complete`, `overlit_level_5_complete`, `overlit_level_7_complete`, `overlit_level_10_complete`, `overlit_level_20_complete`, `overlit_level_30_complete`, `overlit_level_40_complete`, `overlit_level_50_complete`, `overlit_level_60_complete`, `overlit_level_70_complete`, `overlit_campaign_complete`, and `overlit_full_version_purchase`.

The only parameters they carry are the milestone level number, the campaign's level count, and the Full Version product identifier. **No price, no currency, no order number and no store account detail is attached to any of them** — this describes the app-authored payload, rather than claiming the store SDK cannot expose pricing.

**Eight repeatable events, sent each time the thing happens.** These are the events that are not deduplicated, because the questions they exist to answer — how often each way of playing is actually played, whether a particular level is beating everybody, how often an offer is seen, how often an ad is finished — are unanswerable if the second occurrence is discarded. They are behavioural data about how the app is used, and they are described plainly here rather than folded into the milestone list, because they repeat and the others do not.

- **`overlit_mode_play`**, when a run starts. Two parameters, each drawn from a fixed short list rather than from anything about you:
  - `mode` — exactly one of `campaign`, `daily`, `random`, `pattern`, `snake`, `classic`, `tutorial`, `other`
  - `ruleset` — exactly one of `survival`, `time-attack`, `none`
- **`overlit_run_end`**, when a run finishes, however it finishes. This is the one event that describes a run rather than merely counting it, and it exists so the developer can tell a level that is too hard from a level that is boring. Six parameters:
  - `mode` and `ruleset` — the same two fixed lists as above
  - `level` — the campaign level number, 1 to 75, or `0` for a run that is not a campaign level
  - `outcome` — exactly one of `completed`, `failed`, `abandoned`
  - `duration_seconds` — how many whole seconds the run lasted
  - `stars` — how many stars that run earned, `0` to `3`, and `0` for a run that cannot earn any
- **`overlit_onboarding_choice`**, when you leave the last setup screen. One parameter, `choice`, saying which of its three buttons you pressed — exactly one of `first_run`, `tutorial` or `skip`.
- **`overlit_paywall_view`**, when the Full Version screen is opened. One parameter, `source`, saying which of four places opened it — exactly one of `menu_button` (the main menu's Full Version button), `settings` (the Settings screen's Full Version row), `customize` (the Customize screen's Full Version offer) or `house_ad` (the house ad for the Full Version purchase described in section 6).
- **`overlit_purchase_start`**, when a Full Version purchase is actually begun at the store, and **`overlit_purchase_restore`**, when the store's restore flow returns an existing Full Version entitlement. Neither carries a price, a currency, an order number or anything about your payment method — the app does not include those in its measurement payload (section 8).
- **`overlit_rewarded_ad_complete`**, when a rewarded ad finishes and its reward is granted. Two parameters: `placement`, naming the kind of ad slot it was shown in — today the only value it can carry is `REWARDED`, because a rewarded slot is the only kind that pays out — and `purpose`, saying what the ad was watched for, exactly one of `level_skip`, `theme`, `customization` or `nickname_reroll`.
- **`overlit_interstitial_shown`**, when an automatic full-screen ad between runs is actually displayed.

Of the eight, only `overlit_run_end` describes a run rather than counting one, and what it describes is listed above in full: a level number, an outcome, a duration in seconds and a star count. **No score, no amount of money and no identifier you would recognise is attached to any of the eight**, and none of them carries anything you typed, because there is nothing in OverLit to type.

Two changes here are worth naming rather than leaving to be noticed. **Tutorial runs are now counted**, as their own `mode` value, so that the developer can see whether the tutorial offered on the last setup screen is taken and finished; they used to be excluded entirely. **Developer-forced runs are still excluded throughout** — those are the developer's own testing, not a player's choice of what to play.

**The sixteen milestones have a second recipient; the repeatable events do not.** The same sixteen names, and only the names, are also sent to the measurement partner described in section 6, so that advertising OverLit can be measured. The parameters above are not sent there, and **none of the eight repeatable events is sent there at all** — they are behavioural data about how the game is played and how it is paid for, which no ad platform needs and which would be a far larger disclosure than the milestones. A player treated as a minor sends neither kind, to either recipient.

Across both kinds: no score, no leaderboard identity, no age answer and no store transaction identifier is ever attached. The app sets no user identifier and no user properties.

Alongside those events, while Firebase Analytics is enabled, Google and Firebase process the standard app-instance identifier, session and app-launch information, app version, device and platform information, an approximate region derived from the network, and diagnostic metadata that Firebase Analytics needs in order to function at all.

### Crash reports and session diagnostics in older releases

Earlier iPhone and Android builds include Firebase Crashlytics. It can process stack traces, device/OS/app information, Firebase installation and crash/session identifiers, session/stability information and other diagnostic metadata. When Firebase Analytics is also enabled, event names and parameters can be included as automatic breadcrumbs, including gameplay level, outcome, duration and stars. This is pseudonymous device-associated information, even though the app does not set a leaderboard UID or nickname as a custom Crashlytics user identifier.

Processing is not limited to moments when the app crashes: Firebase session/stability traffic can occur without a crash. A previously persisted enabled-collection setting can also take effect during SDK startup before a returning user's current legal state is evaluated. A configuration default or a later disable call does not prove that this earlier window never occurred. Earlier absolute statements that nothing about play was included, that diagnostics were never combined with Analytics, or that collection always waited for current acceptance were too broad.

Remediation builds described above remove the Crashlytics integration. They do not send new Crashlytics reports or session telemetry through that integration. Removing the SDK does not itself erase reports previously received by Google or prove erasure of every legacy cached file. Firebase's provider retention for earlier reports is described in section 15. A future reintroduction must have a verified collection/withdrawal and queued-report lifecycle, age rules, accurate notice and store disclosure before activation.

## 8. The Full Version Purchase

*Applies to both platforms. The store differs; nothing else does.*

OverLit offers one optional purchase: **Full Version**, a one-time non-consumable in-app purchase. It removes ads and unlocks ad-gated themes and cosmetic slots, and it lets an existing level-skip offer complete without watching an ad. It does not unlock content that is meant to be earned by playing.

The store takes the payment — Apple through the App Store on iPhone, Google Play Billing on Android. **No payment-card details, billing address or store account details ever reach the developer.** The app checks your entitlement with the store on the device, stores the result locally along with the transaction identifiers needed to recognise a restored purchase, and supports the store's own restore flow. There is no server-side receipt check, because there is no purchase server: entitlement is verified on your device.

If the store reports that a purchase was refunded or revoked, the app updates the local state to match.

The one-time `overlit_full_version_purchase` analytics event described in section 7 carries the product identifier only.

## 9. Why This Data Is Processed, And The Legal Basis

Under the GDPR, every purpose needs a lawful basis. These are the ones relied on:

| Purpose | Data used | Legal basis |
| --- | --- | --- |
| Run the game and remember your progress, settings and unlocks | On-device data only, which never reaches the developer | Art. 6(1)(b) — performance of the contract with you. No transmission, so nothing is disclosed |
| Show and measure advertising, including personalised advertising where it is allowed | Ad request and interaction data, IP address, device and SDK signals, where applicable Google's publisher first-party identifier, and — only for adults who allowed tracking through Apple's prompt — the device advertising identifier | Art. 6(1)(a) — consent, collected through the Google privacy message described in section 12, together with ePrivacy consent for storing and reading information on your device. Where you refuse, ads may still be served on a non-personalised, contextual basis |
| Understand whether players get through onboarding and how far they get, which game modes are actually played, and how often offers and ads are seen | The 16 one-time milestone events and the eight repeatable events in section 7, plus the standard Firebase Analytics metadata | Inactive in remediation builds. A future activation requires Art. 6(1)(a) purpose-specific consent where applicable and any required device-storage consent. Older ad eligibility did not establish this grant; document acceptance is not Analytics consent |
| Measure which advert brought a player to OverLit, and how far they then got | The 16 milestone names in section 7, the device advertising identifier where one is available, IP address, ordinary device and app information, the Google Play Install Referrer on Android, and the SKAdNetwork conversion value on iPhone | Inactive in remediation builds. A future activation requires the applicable purpose/recipient and device-storage choices, and ATT where Apple tracking applies. Older ad eligibility did not establish this grant; ATT refusal did not make IDFV-associated processing aggregate |
| Show house ads for the developer's own apps | Nothing leaves the device to show one | Art. 6(1)(f) — legitimate interests in promoting the developer's own products, in a way that involves no third party and no profiling |
| Publish a score and a generated nickname on a leaderboard, and show you your rank | Pseudonymous identifier, generated nickname, score, board and week identifiers, platform, app and content version, server timestamp | Art. 6(1)(f) — legitimate interests in running a competitive board that is worth competing on. Being honest about why this is not "contract": a qualifying score is submitted automatically rather than by you asking each time. That means **you have the right to object under Art. 21**, and the switch in section 5 is how you exercise it without writing to anybody. Because the balance is weighed more strictly where the player is a child, publication is **off by default for the 13-to-17 band and starts only if they turn it on themselves**, the choice is described in plain language where it is offered, and it can be reversed in one tap or erased outright under section 15. Two countries go further and do not offer that choice at all — see section 14 |
| Keep leaderboards honest: rate limiting, de-duplication of retried submissions, plausibility checks, and device attestation | Per-identity rate counters, the 30-day de-duplication ledger, App Check attestations | Art. 6(1)(f) — legitimate interests in preventing cheating, flooding and fraudulent submissions on a shared public board |
| Enforce a leaderboard erasure request and prevent the deleted identity being recreated by delayed writes | The temporary cleanup work records and minimal private suppression record described in section 15, in the prepared deletion service | Art. 6(1)(c) where necessary to fulfil an applicable erasure duty; Art. 6(1)(f) for necessary protection against re-creation. The record's scope and duration require a documented necessity assessment; this is not a basis for keeping unrelated records indefinitely |
| Recognise a Full Version purchase and restore it | Store transaction identifiers held on the device | Art. 6(1)(b) — performance of the contract |
| Answer a support email you send | Your email address and whatever you choose to write | Art. 6(1)(b) and Art. 6(1)(f) — responding to your request and keeping a support record |
| Keep the service secure and diagnose faults | Operational logs at Google, which can include a request IP address and the pseudonymous leaderboard identifier | Art. 6(1)(f) — legitimate interests in network and information security |
| Diagnose crashes in older releases | Stack traces, device/app information, installation/crash/session identifiers and potentially Analytics breadcrumbs | Removed in remediation builds. Earlier notices relied on Art. 6(1)(f) for fault diagnosis; this did not itself establish a lawful SDK startup, breadcrumb, device-storage or queued-report lifecycle |

Where consent is the basis, you can withdraw it at any time — section 12 explains how — and withdrawing it does not affect processing that already happened.

There is **no automated decision-making that produces legal effects or similarly significant effects** for you. Ad networks use automated systems to select, cap, measure and fraud-check ads, subject to your choices; that is not a decision about you in the legal sense.

**There is no registration form or request for contact details to play OverLit.** Network features and platform SDKs can still process personal data, as described above. Refusing advertising consent does not lock you out of the game, buying Full Version removes advertising altogether, and the leaderboard switch in section 5 means even score publication is optional.

## 10. Who Receives Data

| Recipient | What it receives | Role |
| --- | --- | --- |
| **Google** (Google AdMob and the Mobile Ads SDK, User Messaging Platform) | Ad requests and interactions, IP address, device and SDK signals, consent state, and where applicable a Google publisher first-party identifier | Google acts as an **independent controller** for advertising — it decides how it uses this data under its own terms, and is not simply following the developer's instructions. Google LLC is a **United States** company operating globally |
| **Google** (Google Analytics for Firebase, older releases) | The milestone and repeatable events, and the standard analytics metadata described in section 7 | Processor for the developer's analytics, on Google's Firebase terms |
| **Google** (Firebase Crashlytics, older releases) | Diagnostics, identifiers, sessions and potential Analytics breadcrumbs described in section 7 | Processor for the developer's fault diagnosis, on Google's Firebase terms. A global Google service rather than a regional one |
| **Google** (Firebase Authentication, Cloud Functions, Cloud Firestore, App Check, Cloud Logging) | The pseudonymous leaderboard identifier, the submission fields listed in section 5, the stored board records, App Check attestations, and operational logs including request IP addresses | Processor. The functions and the database run in `europe-west1` in **Belgium**; Firebase Authentication stores account data in US data centers; App Check is a global Google service |
| **Apple** (App Store, StoreKit, DeviceCheck / App Attest, SKAdNetwork) | Purchase, refund and restore information; device attestation; aggregated install attribution; a request to show the store's own review card, which carries nothing about you | Independent controller for the store relationship and for its own platform services. Card numbers and billing details stay between you and Apple |
| **Google** (Google Play Store, Play Billing, Play Integrity, Play In-App Review) | Purchase, refund and restore information; device and app integrity attestation; a request to show the store's own review card, which carries nothing about you | Independent controller for the store relationship and for its own platform services. Card numbers and billing details stay between you and Google |
| **Tenjin Inc.** (attribution partner, older releases) | The 16 milestone names, available advertising identifiers, iPhone IDFV, IP address, device/app/session information, the Google Play Install Referrer on Android, and a copy of the SKAdNetwork postback on iPhone | Processor for the developer's install measurement, on Tenjin's data processing terms. A **United States** company. Not started at all for a player treated as a minor |
| **Meta Platforms**, **TikTok** (ad platforms the developer buys adverts from) | From Tenjin, not from the app: that an install attributed to one of their adverts reached a given milestone, and the aggregate SKAdNetwork postback Apple sends them directly | **Independent controllers** for their own advertising systems. **No Meta or TikTok software runs inside OverLit** and neither receives anything directly from it |
| **Other players** | Your generated nickname and your score, on any board you appear on | Publication, as described in section 5 |
| **Google Gmail** | Support correspondence and its ordinary email metadata, if you write | Google services and applicable correspondence terms |
| **GitHub Pages** | Ordinary web request metadata for the OverLit pages on `alekjaltuszyk.xyz` | GitHub hosting and privacy terms; see the site Privacy Policy |

Nothing is sold to a data broker. No customer list, contact list or support inbox is uploaded to an advertising platform. There is **one** attribution partner, named above, and no analytics vendor other than the Google products named above.

Information may additionally be disclosed where genuinely necessary to comply with law, to respond to a valid legal request, or to establish, exercise or defend legal claims. If the app or the developer's business were ever transferred to someone else, relevant records could transfer with it, and this policy would be updated first.

## 11. International Transfers

**Leaderboard functions and Firestore are configured for Belgium.** The source configuration uses Google Cloud's `europe-west1` region. This does not make all associated processing EU-only: Authentication, App Check, provider operations and administrative access are separate.

**Other processing does reach the United States**, and it is worth being clear about that rather than overstating how contained things are:

- **Google LLC**, which operates the EU-hosted infrastructure above, is itself a United States company. Some administrative access and some of Google's own operational logging can still involve the United States.
- **Google's advertising and analytics services** — AdMob, the Mobile Ads SDK, the User Messaging Platform and Google Analytics for Firebase — are global services, and the data described in sections 6 and 7 is processed outside the EU, including in the United States.
- **Firebase Authentication** stores account data in US data centers; **App Check** is global rather than pinned to the leaderboard region.
- **Firebase Crashlytics** is likewise a global Google service. Crash reports carry no regional restriction and are processed wherever Google or its agents maintain facilities; they are **not** held in the EU region that holds the leaderboard records.
- **Tenjin Inc.**, the attribution partner in section 6, is a United States company, and the data it receives is processed there.
- **Meta and TikTok** receive attribution reporting about their own adverts and operate internationally under their own terms.
- **Apple and Google Play** process purchases, platform services and attribution under their own terms, internationally.

**Transfer safeguards.** Where GDPR or corresponding UK/Swiss law requires a transfer safeguard, the applicable provider agreement, covered adequacy framework or contractual clauses must support the actual service and recipient. A provider's general certification or published template does not prove that every transfer in this app is covered. Google/Firebase, Apple and Tenjin publish service-specific terms; the applicable contractual coverage and account configuration must be verified for active flows. Contact `alekgameshelp2@gmail.com` for the safeguards applicable to your request. This notice does not promise that a change to an adequacy framework automatically leaves all transfers lawful.

## 12. Your Privacy Choices

**Advertising.** Where required, OverLit shows Google's User Messaging Platform message for advertising choices. Ad eligibility determines whether the advertising SDK may request an ad; it is not an affirmative permission for every optional purpose or recipient. In remediation builds a fresh successful current-audience update is required after launch before ads can proceed. A failed update does not create a new grant.

**Changing advertising choices.** Settings shows **Privacy and cookie settings** when Google makes its privacy-options form available. Remediation builds refresh advertising eligibility and discard cached ads on dismissal. Device-level advertising/tracking controls are separate and can restrict identifiers; they do not substitute for all statutory consent or opt-out rights. Contact support for applicable data rights when a form is unavailable.

**Refusing or opting out.** Google may still serve contextual, non-personalised or otherwise limited ads according to the choice and applicable requirements. Non-personalised advertising can still process device-storage/network information; the label does not prove that no consent is needed. The **Full Version** purchase stops new OverLit ad requests.

**Optional measurement and diagnostics.** Firebase Analytics is deactivated, Tenjin measurement is inactive, and the Crashlytics integration is removed in the remediation builds described at the start of this notice. They cannot be switched on by accepting these documents or completing the advertising message. Older releases used an ad-eligibility flag for Analytics/Tenjin, which was not an independent analytics/attribution choice; do not assume refusal in that message stopped every older-release component. ATT denial also did not establish aggregate-only Tenjin processing. Future optional purposes require their own evidenced choices and effective withdrawal. Contact support about data already collected and provider request routes.

**Leaderboards.** **Settings → Legal → Use leaderboards** stops new participation while you keep playing. Reading boards still uses a backend identity and requests; declining publication alone is not the same as disabling every board request. Section 15 describes deleting existing records. Remediation builds make ID-copy/deletion controls independent of gameplay unlock progress and do not create a new identity merely to delete one.

**US opt-outs.** Google's configured messages can carry applicable sale/share choices for advertising. The developer must verify the message and integrations for the actual release and market; an app interface alone is not proof of every recipient's handling. Browser signals and app/device controls differ. This notice does not claim that a UMP flag satisfies every regional requirement.

## 13. Store Privacy Labels

Apple App Privacy and Google Play Data safety must include third-party SDK processing. Google Play uses one package declaration covering its currently distributed versions, so retaining an older active release can require its legacy disclosures even after a newer build removes collection. The source inventory is not proof of the answers currently submitted to either store.

Remediation builds retain AdMob advertising and its SDK processing, platform purchases, attestation and any enabled leaderboard service. They deactivate Firebase Analytics, keep Tenjin inactive, remove Crashlytics and remove the Tenjin iPhone attribution-report endpoint. Removing those components does not justify removing advertising-SDK diagnostics or other remaining categories.

Older releases additionally have the measurement and diagnostic flows in sections 6 and 7. A persistent installation identifier, or diagnostic data that can be associated with Analytics breadcrumbs, must not be called unlinked solely because the app sets no custom user ID. Similarly, absence of IDFA does not by itself decide Apple's tracking classification.

The store summaries and this policy should agree for the applicable release. Contact `alekgameshelp2@gmail.com` about a discrepancy. Apple platform services are governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/), and Google services by the [Google Privacy Policy](https://policies.google.com/privacy).

## 14. Age, Children And Teens

OverLit is intended for players aged **13 and over** and is not directed to children under 13. A self-declared age band does not prove that no younger child ever uses the app; persistent identifiers and SDK requests can be personal information. Store age ratings, declared target audiences and Google's Families requirements are separate questions. A 13+ intention alone does not establish exemption from children's rules or verify the current store declarations.

During onboarding the app asks you to choose an age range: **13 to 17** or **18 or older**. There is no under-13 option and no path into the game without answering. The app does not ask for a date of birth and does not attempt any age verification, so the answer is self-declared.

The raw answer is **stored on your device**. Derived under-age-treatment flags and content-rating caps are supplied to Google's consent/ad SDKs; this does not mean Google receives no age-related signal. It is not attached to any leaderboard record, is not sent as an analytics parameter, and no copy of it exists on any server. What it does is change three things: how the advertising SDK is configured, whether Firebase Analytics runs at all, and whether your scores are published to leaderboards by default.

A player treated as a minor gets non-personalised, Teen-rated ads, is never shown Apple's tracking prompt, is kept away from the adult-only house ad, receives no reminders, and is not published to a leaderboard unless they switch it on themselves. Remediation builds deactivate Analytics and remove Crashlytics for everyone. In the two countries in the table below, a player who declared 13 to 17 cannot switch it on at all.

Older Crashlytics startup and queued-report behavior cannot be described as universally prevented by a later age check; section 7 explains the correction.

### Countries with extra restrictions

**The age at which a person counts as a child varies by country, and in several places it is higher than 13.** Where that is so, a self-declared "18 or older" is not always something OverLit can responsibly rely on. The two countries below are handled differently, because what their law actually asks for differs — so this table names what each one narrows rather than treating them as one rule.

| Country | Why | What OverLit does |
| --- | --- | --- |
| **India** | India's child-data rules have phased commencement and require review against the current official enactments. OverLit operates no verifiable parental-consent mechanism and applies the publication restrictions in this row; those restrictions are not a certification of all Indian requirements | A player who has never been asked is **not published to a leaderboard by default**. A player who declared **13 to 17 cannot publish to a leaderboard here at all**, even by turning the switch on — they can still read every board. Beyond that, a player who declared 18 or older is treated as an adult |
| **South Korea** | Where processing requires consent under PIPA, consent for a child under 14 requires a legal representative. The broad 13-to-17 answer does not distinguish a 13-year-old, and the app operates no Korean guardian-consent mechanism. The following conservative product restriction does not determine the basis for every processing purpose | **Every player is given the full minor treatment above, whichever band they picked**, and is not published to a leaderboard by default. A player who declared **13 to 17 cannot publish to a leaderboard here at all**, even by turning the switch on. They can still read every board |

The app uses a device-region hint — on Android, the SIM's country where there is one, otherwise the device's language and region; on iPhone, the device's language and region. Nothing is sent anywhere to work it out. This is not verified residence or jurisdiction. In older implementations a changed or missing hint can replace the previous hint and widen eligibility; earlier descriptions that it could only restrict were too broad. Region-transition safeguards for the prepared release remain under verification. Region settings can be wrong or changed, so they do not guarantee the restrictions for a player's actual location.

The controller is established in Poland, so GDPR duties for this processing do not depend solely on a player's device region. For an information-society service relying on a child's consent, GDPR Article 8 sets a threshold of 16 unless the applicable national law lowers it; Poland uses 16. The broad 13-to-17 answer cannot establish whether a player has reached 16. This rule is conditional on the purpose and legal basis; general document acceptance, a purchase or an advertising-eligibility result does not provide parental consent. In the UK, the children's code also expects marketing profiling to be off by default for under-18s. OverLit applies the minor configuration above and cannot verify anyone's age.

If you are 13 or older but under the age of majority where you live, use OverLit with a parent's or guardian's permission where required. Device parental controls and Full Version can reduce exposure to advertising; they do not themselves supply any legally required guardian-consent mechanism for other processing.

If you believe a child under 13 has provided personal information, write to `alekgameshelp2@gmail.com` and it will be dealt with.

## 15. Retention, And How To Delete Your Data

### How long things are kept

**On-device data** stays on your device until you change it, use an in-app reset where one exists, or delete the app.

**Leaderboard board entries have no automatic expiry.** One entry per player per board is kept for as long as the board exists, and boards are archived rather than deleted when scoring rules change — an archived board stays readable indefinitely. An entry is removed when the board's underlying record is erased on request.

**The leaderboard de-duplication ledger is scheduled to expire after 30 days.** Each record carries an expiry timestamp. Firestore TTL deletion is asynchronous and may occur after the timestamp; it is not an exact deletion deadline.

**The private player record, the rate counters and the rating record** are kept for as long as the pseudonymous identity exists — that is, until erasure.

**Private erasure-suppression state in the prepared deletion service.** A separate protected record contains the leaderboard ID, request time, pending/completed status, retry time while pending and completion time. It blocks further writes for that identity so delayed requests do not recreate deleted active records. It contains no nickname or score and is not used for advertising, measurement or profiling. No automatic expiry is configured while safe removal conditions remain unverified. Continued necessity and removal conditions require review; this is not a conclusion that permanent retention is necessary or lawful. Restoring older data requires a separate check and cleanup before access is reopened. This record remains personal data, separate from provider logs, purchase records and previously delivered copies.

While cleanup is pending, protected work records may hold board identifiers and document references, which can include pseudonymous identifiers, so cleanup can resume without repeating completed batches. The work records contain no nickname or score and are removed when their tasks finish. The separate suppression record remains subject to the retention review above.

**Operational and access logs** at Google follow the relevant service and log-bucket retention settings. Some settings are configurable by the developer; defaults do not prove the deployed retention period.

**Backups and copies.** A source record states that leaderboard point-in-time recovery and backups were disabled when checked on 3 September 2026. That dated check does not establish every later console setting or erase operational logs, provider records and cached responses. Erasure of active identity-linked records must be distinguished from those copies. If a backup is enabled, its retention and re-erasure procedure must be verified and disclosed before use; no universal instantaneous-erasure guarantee is made here.

**Advertising and analytics data** held by Google is retained under Google's own policies and the retention settings of the Firebase and AdMob products.

**Crash reports** are kept by Firebase Crashlytics for **90 days**. Google's own published position is that it holds crash stack traces, extracted minidump data and the associated identifiers for 90 days before it begins removing them from live and backup systems. That period is set by Google rather than configured by the developer.

**Support emails** are kept for as long as reasonably needed to answer the request and keep a record of it.

### Erasing your leaderboard data

**The steps are on their own page: [Delete your OverLit data](https://alekjaltuszyk.xyz/apps/OverLit/delete-data/).** That page is a plain-language summary; where the two differ, this document governs.

The leaderboard erasure process is intended to remove every active board entry associated with your identity, the nickname and private player record with its rate counters, rating record, submission ledger and anonymous Firebase Authentication account. Published entries are removed from the live boards. Ordinary feature kill switches do not block the deletion route.

**Prepared deletion service:** a verified request first establishes the private suppression record and blocks further use of that identity for writes. Cleanup then removes the active records. Interrupted cleanup remains pending and a server process retries it; it is marked complete only after the defined cleanup succeeds. A lost connection or failed app response can occur before later server completion. This behavior requires the guarded writers and recovery process to be deployed together; older sequential deletion implementations do not provide the same protection.

Older deletion implementations did not remove cached board responses held in **other players'** de-duplication ledgers. The prepared service removes legacy response fields from affected submission records in resumable batches, while preserving those players' acceptance metadata and scores. The prepared backend also builds current responses on retry instead of retaining new response copies. Existing submission-ledger expiry remains scheduled after 30 days, subject to asynchronous TTL deletion. This cleanup does not recall copies already delivered to another device or erase operational logs and separately retained provider records. It requires the matching backend to be active; publication of this notice alone does not change older service behavior.

**The route in the app is one tap**, on both platforms. Open **Settings → Legal → Delete my leaderboard data**. It acts on your own identity directly, so nothing has to be matched and nothing has to be described. In remediation builds it is available independently of gameplay unlock progress when an existing identity can be used; it does not create an identity merely to delete one, it asks you to confirm, and it cannot be undone. Your local progress, levels and unlocks are not touched — only what the leaderboard service holds.

**By email**, write to `alekgameshelp2@gmail.com` with the subject **"Delete my leaderboard data"**, carrying your leaderboard ID. Your identity is pseudonymous and has no attached name or email, so the ID is the direct way to locate its records; **Settings → Legal → Copy my leaderboard ID** puts it on the clipboard. Your nickname is not a substitute: it is drawn from a fixed vocabulary and is not unique. Save the ID before uninstalling so you can email it without reinstalling. If you no longer have it, explain what proportionate evidence you can provide; we will tell you if we cannot locate records or verify control. A non-unique nickname alone cannot establish ownership. We do not ask for unnecessary new identity information merely to create a link that did not exist.


Deleting the app does not remove a published leaderboard entry.

### Everything else

**Local game data:** delete the app, or use the in-app reset controls where they exist.

**Advertising and analytics data held by Google:** use the choices in section 12, and Google's own privacy tools and account controls.

**Purchase records:** these belong to Apple or Google, and their support channels handle them. The developer holds no purchase server and no purchase database.

**Support emails:** ask, from the same address where possible, and they will be deleted.

Requests are answered within one month, as the GDPR requires. If a request is complex that can be extended by up to two further months, and you will be told why.

## 16. Security

Every connection the app makes is encrypted in transit with HTTPS.

For leaderboards specifically: the database denies all direct access from the app, so every read and write goes through server code that validates it. Each request must carry both a Firebase authentication token and a **Firebase App Check** token — backed by Apple's App Attest with DeviceCheck fallback on iPhone and Google's Play Integrity on Android — which makes it substantially harder to submit scores from anything that is not a genuine copy of OverLit. Scores are checked against plausibility ceilings before they are accepted, submissions are rate-limited per identity, and retried submissions are de-duplicated rather than double-counted. The whole feature can be disabled remotely if it is abused.

Backend administrative access is limited to the developer and protected by the account security of the underlying platform providers.

No app, network, device or provider can be guaranteed to be perfectly secure. If you believe you have found a privacy or security problem, please write to `alekgameshelp2@gmail.com` before disclosing it publicly.

## 17. Your Rights

If you are in the EEA, the UK or Switzerland you have the rights below. They are honoured for everyone, everywhere, regardless of where you live.

- **Access** — ask what is held, and get a copy.
- **Rectification** — have inaccurate data corrected.
- **Erasure** — ask for data to be deleted. Section 15 explains the routes, retained copies and provider processing.
- **Restriction** — ask that processing be limited while a dispute about accuracy or lawfulness is resolved.
- **Portability** — receive data you provided in a structured, machine-readable format.
- **Objection** — object to processing based on legitimate interests. That includes the anti-cheating measures in section 9 and, importantly, **the publication of your score on a leaderboard**. You do not have to write to anybody to exercise that one: **Settings → Legal → Use leaderboards** stops it, immediately and for good, while you keep playing. If you also want what was already published removed, section 15 is the route.
- **Withdraw consent** — for advertising and analytics, at any time, through the routes in section 12.

Two practical notes. First, most of what OverLit knows about you is on your phone and never reaches the developer, so for that data the fastest "access request" is to open the app. Second, for leaderboard data the absence of contact details means without something that identifies your entry, a request cannot be matched to it. Section 15 explains what to include.

Requests go to `alekgameshelp2@gmail.com`. There is no charge for the first request and no requirement to give a reason. You will never be treated differently for exercising a privacy right.

If you are unhappy with how a request was handled, you can complain to a data protection supervisory authority. The developer's is Poland's:

- **Urząd Ochrony Danych Osobowych (UODO)**, ul. Stanisława Moniuszki 1A, 00-014 Warszawa, Poland — [`https://uodo.gov.pl/en`](https://uodo.gov.pl/en)

If you live elsewhere in the EEA you can also complain to your own national authority. In the UK that is the Information Commissioner's Office, [`https://ico.org.uk`](https://ico.org.uk). In Switzerland it is the Federal Data Protection and Information Commissioner.

## 18. Support Emails And Website Pages

If you email support, the developer receives your email address, your message, and anything you choose to include — for example your device model, OS version, app version, or a pasted Copy Progress summary. Please do not send sensitive personal information in a support message unless your request genuinely needs it.

Support email: `alekgameshelp2@gmail.com`. Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/).

Support emails are not used for marketing, are not uploaded to any advertising platform, and are not used to build audiences.

The OverLit pages on `alekjaltuszyk.xyz` are static informational pages: the app page, support, these documents, the deletion page, the legal manifest and the public `app-ads.txt` file. They set no analytics cookies, no advertising cookies and no tracking storage of the developer's own, which is why there is no cookie banner on them. Ordinary hosting and security infrastructure processes technical information such as IP address, browser type, requested URL, referring URL and timestamps, in order to serve and protect the site.

## 19. Changes To This Policy

This policy will be updated when OverLit changes in a way that affects it. The version number and effective date at the top of this page show when it was last updated, and the same values are published in the legal manifest linked in section 1.

Material changes require the appropriate notice and choices before new processing begins. OverLit compiles accepted versions into each build; a website-only edit does not force an older installed build to show a new gate. A build carrying changed accepted versions evaluates its acceptance gate against those versions. The app records which version you accepted, and when, on your device.

If a future change would involve a genuinely new kind of data processing, this policy will be updated before that processing begins, not after.

## 20. Regional Information

The practices described above are applied globally, and the rights in section 17 are honoured for everyone everywhere rather than by jurisdiction. This section covers only the specifics that a particular law asks to be stated.

**European Economic Area, United Kingdom, Switzerland.** Sections 9, 11 and 17 describe legal bases, transfers and rights. Required advertising choices are offered through Google's configured privacy message; that message's ad-eligibility result is not proof of Analytics or Tenjin consent. Those measurement components are inactive in remediation builds. Leaderboard Firestore/functions are configured for Belgium; associated global Google processing is described in section 11. The controller is Aleksander Jałtuszyk, Poland; the lead supervisory authority is UODO. UK users may also contact the ICO, and UK transfers rely on the safeguards named in section 11.

In the UK, the Information Commissioner's children's code applies to services likely to be accessed by under-18s and expects marketing profiling to be off by default for them, and expects a child's profile not to be public by default. Players who choose the 13-to-17 band get non-personalised ads with a Teen content cap and are not published to leaderboards unless they choose to be. Players who choose 18 or older are treated as adults, and the app cannot verify that choice.

**United States.** Personal information is **not sold** for money. However: several US state privacy laws define "sale", "sharing" and "targeted advertising" broadly enough that serving personalised advertising through an ad network can fall within them, whether or not any money changes hands. Where that applies, the opt-out is Google's privacy message, described in section 12. Buying the Full Version stops advertising being served to you entirely, but — stated precisely rather than generously — it does not by itself stop the install measurement in section 6, which is about which advert brought you here rather than about showing you more. Remediation builds keep Tenjin measurement inactive independently of ad eligibility. In older builds, advertising eligibility did not prove a separate attribution choice. The app does not request sensitive personal information. The rights in section 17 are honoured for US residents on the same terms as for everyone else, and there is no discrimination for exercising them.

OverLit is an app rather than a website, so there is no browser-level opt-out preference signal such as Global Privacy Control for it to receive. The in-app privacy message and your device's advertising settings are the equivalent controls.

**Teenagers in the United States.** A growing number of states restrict targeted advertising to consumers a business knows to be a minor — Connecticut for 13-to-17-year-olds, Colorado and others for everyone under 18. Because OverLit asks for an age band, it knows when a player has said they are 13 to 17, and configures advertising for that player with personalisation disabled and a Teen content cap. That is the point of asking.

**Children in the United States.** OverLit is intended for ages 13 and over, offers no under-13 onboarding answer and operates no parental-consent mechanism. The absence of an under-13 answer or contact fields does not itself establish a COPPA exemption. If actual under-13 use is identified, contact support so that eligibility, personal-information processing and applicable deletion or parental rights can be addressed.

**Canada, including Quebec.** Quebec's Law 25 requires that the person responsible for the protection of personal information be identified: that is Aleksander Jałtuszyk, reachable at `alekgameshelp2@gmail.com`. Technology capable of identifying, locating or profiling a user is disclosed in sections 5, 6 and 7, and the means of deactivating it are in section 12. There is no automated decision made about you.

**India and South Korea.** See section 14. In South Korea every player is given the minor treatment whichever age band they chose. In India a player who chose 18 or older is treated as an adult; a player who chose 13 to 17 gets the 13-to-17 treatment as everywhere. In both countries scores are not published to a leaderboard by default, and a player who chose 13 to 17 cannot publish there at all.

**Brazil.** No Data Protection Officer has been appointed. LGPD applicability and any small-agent exemption depend on actual processing and applicable conditions; small size alone does not establish an exemption. Data-subject requests can use the contact in section 21.

**Elsewhere.** The same protections and the same rights apply, and requests go to the same address. Where local law requires a specific contact or a specific right that is not listed here, write to that address and it will be handled.

## 21. Contact

Privacy questions, data-subject requests and deletion requests:

- Email: `alekgameshelp2@gmail.com`
- Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/)
- Telephone: `+48 73 2099027`
- Mailing address: `Aleksander Jałtuszyk, Skrytka Pocztowa 59, UP Warszawa 93, 02-800, Warszawa, Poland`
- Country: Poland
