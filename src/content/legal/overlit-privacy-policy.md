This Privacy Policy explains what OverLit does with information when you play the OverLit app on iPhone, visit the OverLit pages on `alekjaltuszyk.xyz`, contact support, or see ads shown in or for OverLit.

OverLit is a short-session arcade game. There is no sign-up, no username and no password, and the app never asks you for a name, an email address or a phone number. There is no text field anywhere in the app, so there is nothing you can type into it. Most of what OverLit knows about your play — your scores, your progress, your unlocks, your settings — stays on your phone.

The app also includes Google Firebase and Google advertising services. Firebase is initialised when the app launches so that Firebase App Check can protect the online-leaderboard service when it is used. Firebase Analytics starts disabled: it is never enabled for a player who declares 13 to 17, and it is enabled for a player who declares 18 or older only after Google's privacy-message process has completed. Accepting these documents is not analytics consent. Information can leave your device through **ads** served by Google AdMob, **analytics** described in section 6, and **online leaderboards**, which put a score and a randomly generated nickname on a public board. Each is described below, including the parts that are less flattering.

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

No Data Protection Officer has been appointed, and none is required: this is a one-person business with no large-scale monitoring and no processing of special categories of data. No EU representative is required either, because the controller is established inside the EU.

This policy covers the OverLit app and the OverLit pages on `alekjaltuszyk.xyz`.

## 2. Quick Summary

- There is no OverLit account, no sign-in, no password, and no name, email address or phone number is ever requested by the app.
- Your scores, level progress, theme unlocks, settings, play counters and purchase state are stored **on your device**.
- OverLit shows **Google AdMob ads** in the free version — banner, interstitial and opt-in rewarded ads. Google's advertising SDK processes ad-request and ad-interaction data, and your IP address, which can be used to estimate a coarse location.
- If you told the app you are **18 or older**, OverLit shows Apple's **App Tracking Transparency** prompt. If you allow tracking there, Google's advertising SDK may read your device's **advertising identifier (IDFA)** and use it to personalise ads and measure them across other companies' apps. If you say no, or never answer, the IDFA is not available and is not used. Players in the **13 to 17** band are **never shown the prompt** and their IDFA is never read.
- **Online leaderboards**, where enabled, send a score and a small set of technical fields to a server run by the developer on Google Cloud in **Belgium**, under an anonymous identifier. Your board nickname is picked at random by the server from a fixed list of words written by the developer. You can ask for a different one at any time, but you cannot type your own, and nobody can put their own text on a board.
- Analytics is limited to **16 one-time milestone events** — things like "finished onboarding" and "completed level 10". They carry no identifier you would recognise, no score, no age answer and no message content. A player who declares **13 to 17** sends none of these events. For a player who declares **18 or older**, Google’s privacy message and Consent Mode govern analytics collection; accepting these documents by itself does not enable analytics.
- The app asks you to pick an age range, **13 to 17** or **18 or older**. That answer stays on your device and is never transmitted. It changes how ads and analytics are configured: players in the teen band get non-personalised ads with a Teen content cap and no OverLit Firebase milestone analytics.
- There is **one optional purchase**, Full Version. It is handled by Apple, it removes ads, and no payment-card details ever reach the developer.
- Nothing is sold to data brokers. Some privacy laws nonetheless treat personalised advertising as "sharing" or "targeted advertising" — section 11 explains how to turn that off.
- There is no chat, no social feed, no friend list, no multiplayer, no cloud save, no camera or photo access, no microphone access and no precise location.

## 3. What Stays Only On Your Device

The following is stored in your phone's app storage and is not transmitted to the developer, except that an eligible personal-best score and the technical submission fields listed in section 4 can be sent to the leaderboard service:

- your local high-score records, level progress, stars, campaign and arcade state, and local run history
- theme unlocks, menu position, and gameplay preferences such as haptics and accessibility settings
- play counters, ad-pressure counters, ad-attempt records and timing values that decide when an ad or an unlock offer may appear
- your Full Version entitlement state, plus the Apple transaction identifiers needed to recognise a restored purchase
- which version of the legal documents you accepted, and when
- your age-band answer
- a record of which of the 16 analytics milestone events have already been sent, so that none is ever sent twice

Deleting the app removes this local data from the device, subject to normal iOS backup and restore behaviour.

OverLit includes a **Copy Progress** option that copies a plain-text summary of your local progress to the clipboard. Copying it sends it nowhere. It only leaves your device if you choose to paste it somewhere, such as into a support email.

There is **no cloud save**. OverLit does not use iCloud, Game Center, or any progress-sync service. A leaderboard entry is a published score, not a backup: if you delete the app, your progress is gone even if your score is still on a board.

## 4. Online Leaderboards

OverLit is adding online leaderboards. **They are not switched on in every version of the app**, and where the feature is switched on, a board becomes available to you only after you complete campaign **Level 5**. Until both of those are true, no leaderboard data leaves your device and none of what follows happens.

### The anonymous identity

The first time the app needs to talk to the leaderboard service, it creates an anonymous account with Firebase Authentication. This is not an account in any normal sense: it has no email address, no password, no phone number and no profile, and there is nothing to sign in or out of. It is a random identifier issued by Google.

Because that identifier lets the same installation be recognised again, and lets scores be attached to it, it is treated as **personal data** under the GDPR. This policy does not claim that leaderboards collect no personal data, because that would not be true.

The identifier is managed by the Firebase SDK and stored in the iOS Keychain. The Keychain is deliberately durable, so the identifier can survive deleting and reinstalling the app.

### Your board nickname

The server gives you a nickname made of one to three words drawn at random from fixed lists written by the developer — for example `Grumpy Kraken` or `Cosmic Comet Otter`. There are several million possible combinations, and two players can end up with the same one.

The nickname is **not derived from your identifier**. An earlier version of this policy described a name computed from a hash of the anonymous identifier; that is no longer how it works, and the current name reveals nothing about the identifier behind it.

Next to your nickname there is a dice button. Pressing it asks the server for a different random name, as often as you like. You are choosing between names the developer wrote; you are not writing one. OverLit contains **no text-entry field of any kind**, anywhere in the app, and no part of the leaderboard service will accept a nickname sent by an app. There is therefore no way for anyone to put a real name, an insult, a phone number or an advertisement onto a board. That is a deliberate design choice and it removes an entire class of problem.

Your current nickname is stored against your anonymous identifier and is shown next to your score on every board you appear on. In that sense it is a stable pseudonym attached to a persistent identifier, and it is treated as personal data for the same reason the identifier is.

### What is sent when a score is submitted

A submission carries exactly these fields, and nothing else:

- a **board identifier**, which describes what was played: whether it was campaign, arcade, daily or legacy, the level or challenge, the grid size, the ruleset, whether the board ranks by score or by time, and the scoring version
- the **week identifier**, for weekly boards, in ISO form such as `2026-W30`
- the **score** — a whole number, either points or a duration in hundredths of a second — and whether higher or lower is better on that board
- a **de-duplication key** built from the run, so that a retry after a dropped connection cannot create a second entry
- the fixed word `STANDARD`, marking an ordinary run
- the **platform** (`IOS`), the **app version**, and the **content version**

That list is complete. No name, no age band, no advertising identifier, no device identifier, no location, no email address and no free text is ever sent to the leaderboard service.

Rolling a new nickname is a separate request. It carries **no data at all** beyond what every call needs — the anonymous identifier and the app-attestation token — because the app has nothing to send: the server picks the words.

Submission happens automatically at the end of a qualifying run, and only when the score actually beats your own previous accepted best. When leaderboards first become available after campaign Level 5, OverLit also checks the eligible personal bests already stored on your device and queues any that are not already pending or recorded as accepted. The same check can run when importing genuine played progress first makes leaderboards available, and it can be started manually from development builds. This backfill sends one best per eligible board using exactly the same fields and ordinary eligibility rules as a live run; it does not upload your progress file or run history. Tutorial runs, your first onboarding run, abandoned runs, runs played with Developer Mode enabled, skipped levels, records created by developer tools and scores from an obsolete scoring version are never submitted.

### What is stored on the server

Against your anonymous identifier:

- a **private player record** holding your current nickname, the time it last changed, and per-identity rate counters, which cap submissions at 30 per hour and 200 per day and nickname rolls at 120 per hour and 400 per day, to stop automated flooding
- **one board entry per board**, holding the score, the server time at which that score was first accepted (earliest submission wins a tie), a copy of your nickname, the platform, the `STANDARD` marker and the identifier itself. Rolling a new nickname updates that copy on every board you are already on
- a **de-duplication ledger** of recent submissions, so a replayed request returns the original answer instead of creating a duplicate. Each ledger record expires automatically **30 days** after it is written
- an **overall rating record**, if you qualify for the overall board: a percentile-based score derived from your best all-time placements across at least three different families of levels

Per board, not per person, the server keeps the board's registry entry and its size.

### What other players see

A board page shows at most ten rows. Each row is a rank, a nickname and a score — your own row is shown as **You**. If you are outside the top ten, the page shows the top seven plus the rows immediately above and below you, so you can see where you stand. Ranks are calculated on the server; the app never computes them.

The stored platform value is **not displayed**, and the underlying identifier never leaves the server at all. No timestamps, no progress, no purchase state and nothing else about another player is ever shown to you, or about you to them.

### Where it runs, and what protects it

The server code and the database run in Google Cloud's `europe-west1` region in **Belgium**. The app cannot read or write the database directly: every operation goes through a small set of server functions, and the database rules deny all direct access.

Each request is protected by **Firebase App Check**. Firebase is initialised when the app starts, and App Check uses Apple's App Attest service — with DeviceCheck as a fallback on older hardware — to confirm that the request is coming from a genuine, unmodified copy of OverLit on a genuine Apple device. That check produces a short-lived token. It tells the developer nothing about you, and Apple's documentation describes what Apple itself does with it.

The whole feature can be switched off remotely, for everyone, without an app update.

### The honest caveats

- A leaderboard entry is **published**. Its nickname and score are visible to any other player who reaches that board.
- Board entries have **no automatic expiry**. When a board's scoring rules change the board is archived rather than deleted, and archived boards stay readable indefinitely. An entry stays until you ask for it to be erased. Section 14 explains how.
- Because a leaderboard identity is anonymous, there is no name or email address attached to it. That is good for your privacy and awkward for your rights — see section 14 and section 16.

## 5. Advertising

The free version of OverLit is paid for by ads, served through Google's Mobile Ads SDK from Google AdMob. There are three kinds:

- **rewarded** ads, which you choose to watch in exchange for a theme unlock or a level skip
- **interstitial** ads, shown only at breaks outside active play — returning to a menu, replaying, advancing a level
- **footer banner** ads, shown outside the playable grid

No ad is ever placed on the playable grid itself, and no ad is shown during a run.

### What Google receives

Google and its advertising partners may process, under their own policies:

- your **IP address**, which can be used to estimate a coarse or general location
- device and app information, and SDK-level signals used to request and render an ad
- **advertising data**: which ads were requested and shown, impressions, clicks, rewarded-ad completions and similar events
- **product interaction data**: app launches, taps, ad views and interactions with the privacy messages described in section 11
- crash, diagnostic and performance data from the advertising SDK
- attribution signals, including SKAdNetwork postbacks handled by Apple
- your consent and privacy choices, so that they can be honoured

Google uses this to select and deliver ads, measure them, cap how often you see them, detect fraud and invalid traffic, and to run the ad auction. Google's own descriptions are in the [Google Privacy Policy](https://policies.google.com/privacy) and in [Google's advertising technologies information](https://policies.google.com/technologies/ads).

### What OverLit does not do

- OverLit does not include a Meta SDK, a Meta Pixel, a TikTok SDK, a TikTok Pixel, a conversion API integration, an attribution SDK other than Apple's SKAdNetwork, or any customer-list or audience upload.
- OverLit does not use any data it holds about you to build an advertising profile, and does not upload support emails to any ad platform.

### App Tracking Transparency and the advertising identifier

Apple requires your permission before an app may link what it learns about you
with data from other companies' apps and websites for advertising. That
permission is asked through the **App Tracking Transparency** prompt.

**Adults.** If you chose the **18 or older** band, OverLit shows that prompt once
the legal documents have been accepted and the app is on screen. If you choose
*Allow*, Google's advertising SDK may read your device's **advertising
identifier (IDFA)** and use it to personalise the ads you see and to measure them
across other apps and websites. If you choose *Ask App Not to Track*, or dismiss
the prompt without answering, iOS does not make the IDFA available and it is not
used. You can change this at any time in **iOS Settings → Privacy & Security →
Tracking**; the change takes effect without reinstalling.

**Teenagers.** If you chose the **13 to 17** band, OverLit **never shows the
prompt and never reads the IDFA**. Cross-app tracking is not asked for and is not
performed. This is deliberate: several laws restrict targeted advertising to
people a service knows to be minors, and OverLit knows, because it asked.

**Refusing costs you nothing but relevance.** Ads still appear either way — they
are what pays for the free game. What changes is whether they are chosen using an
identifier that follows you between apps. The only way to remove ads entirely is
the Full Version purchase.

### How your age answer changes the ads

For players in the **13 to 17** band, the advertising SDK is configured with teen treatment, a maximum ad content rating of **Teen**, publisher ad personalisation **disabled**, and Google's publisher first-party identifier **disabled**. In plain terms, teen players get non-personalised ads.

Non-personalised is not the same as identifier-free, and it would be misleading to imply otherwise. Google's own documentation is explicit that non-personalised ads still use cookies or mobile advertising identifiers for frequency capping and aggregated ad reporting, and that consent is still required for that where the law says so — in the UK, Switzerland and parts of the EEA. What non-personalised removes is the targeting, not every identifier.

For players who chose **18 or older**, ad personalisation and Google's publisher first-party identifier may be enabled, subject to your consent choices, your device settings, Google's own settings and applicable law. The publisher first-party identifier is a Google-managed identifier scoped to this publisher; it is not the IDFA and is not shared as an advertising identifier with other publishers.

### Install measurement

The app declares 50 **SKAdNetwork** identifiers, the standard Google-mediation set. SKAdNetwork is Apple's own attribution system: it reports installs to ad networks in aggregate, with delays and thresholds designed to prevent any individual being identified. The developer receives campaign-level counts, not user-level data.

### The app-ads.txt file

To identify authorised sellers of OverLit's ad inventory, this site publishes an [app-ads.txt file](https://alekjaltuszyk.xyz/app-ads.txt) containing the publisher record:

```text
google.com, pub-6606108754134100, DIRECT, f08c47fec0942fa0
```

### House ads

When AdMob has no ad to show, when the device is offline, or for a small share of non-rewarded slots, OverLit shows a **house ad** instead: a panel promoting one of the developer's own apps. These are bundled into the app. Showing one sends nothing to any ad network.

The current house ads are for **PlanKept** and **AudioChoices**, plus **Voice of Self**, which is shown only to players who chose 18 or older. Tapping one opens the App Store or a page on this website, and from that point the destination's own policies apply. Rewarded ads are never replaced by a house ad, and Full Version suppresses house-ad fallback along with everything else.

### Full Version removes ads

While the Full Version entitlement is active, OverLit makes no banner, interstitial or rewarded ad request and shows no house-ad fallback. If you have the "Help the Dev" setting on, you get a thank-you panel where an ad would have been.

## 6. Analytics And Measurement

OverLit uses Google Analytics for Firebase, in a deliberately narrow way.

**It starts switched off, and it stays off for declared teenagers.** Analytics collection is disabled in the app's configuration. A player who declares **13 to 17** sends no OverLit Firebase milestone, purchase, conversion or gameplay events. Events that occur before the privacy process is complete, or while analytics is disabled, are not queued and are not replayed later.

**Declared adults use Google's privacy message, not a document checkbox.** For a player who declares **18 or older**, the app first runs Google User Messaging Platform (UMP). Where Google's message applies, UMP maps that player's current privacy choice into Google Consent Mode, including the `analytics_storage` signal. The app then allows Firebase Analytics to operate under those Google-managed signals; it does not turn analytics on because the player accepted these documents, and it does not use Apple's App Tracking Transparency answer as analytics consent. UMP and Firebase determine the resulting consent-mode behaviour for the player's region and choice, including any limited measurement Google provides when storage consent is denied. If UMP preparation does not finish successfully, the app leaves Firebase Analytics disabled.

**There are 16 events, each sent at most once, ever.** The app keeps a local record of which have been delivered so that none repeats:

`overlit_onboarding_complete`, `overlit_first_run_started`, `overlit_first_run_complete`, `overlit_level_1_complete`, `overlit_level_3_complete`, `overlit_level_5_complete`, `overlit_level_7_complete`, `overlit_level_10_complete`, `overlit_level_20_complete`, `overlit_level_30_complete`, `overlit_level_40_complete`, `overlit_level_50_complete`, `overlit_level_60_complete`, `overlit_level_70_complete`, `overlit_campaign_complete`, and `overlit_full_version_purchase`.

The only parameters they carry are the milestone level number, the campaign's level count, and the Full Version product identifier. No score, no leaderboard identity, no age answer, no Apple transaction identifier and no message content is ever attached. The app sets no user identifier and no user properties.

Alongside those events, for declared adults while Firebase Analytics is enabled, Google and Firebase process the standard app-instance identifier, session and app-launch information, app version, device and platform information, an approximate region derived from the network, and diagnostic metadata that Firebase Analytics needs in order to function at all.

**What is not present.** OverLit does not include Firebase Crashlytics, Firebase Performance Monitoring, Firebase Remote Config, Firebase Cloud Messaging, or any third-party crash-reporting or product-analytics tool. Firebase Authentication, Cloud Functions and Cloud Firestore are used only for the leaderboards described in section 4, and Firebase App Check is used to protect them.

## 7. The Full Version Purchase

OverLit offers one optional purchase: **Full Version**, a one-time non-consumable in-app purchase handled by Apple through the App Store. It removes ads and unlocks ad-gated themes, and it lets an existing level-skip offer complete without watching an ad. It does not unlock content that is meant to be earned by playing.

Apple takes the payment. **No payment-card details, billing address or Apple account details ever reach the developer.** The app checks your entitlement with StoreKit on the device, stores the result locally along with the Apple transaction identifiers needed to recognise a restored purchase, and supports Apple's Restore Purchases flow. There is no server-side receipt check, because there is no purchase server: entitlement is verified on your device by StoreKit itself.

If Apple reports that a purchase was refunded or revoked, the app updates the local state to match.

The one-time `overlit_full_version_purchase` analytics event described in section 6 carries the product identifier only.

## 8. Why This Data Is Processed, And The Legal Basis

Under the GDPR, every purpose needs a lawful basis. These are the ones relied on:

| Purpose | Data used | Legal basis |
| --- | --- | --- |
| Run the game and remember your progress, settings and unlocks | On-device data only, which never reaches the developer | Art. 6(1)(b) — performance of the contract with you. No transmission, so nothing is disclosed |
| Show and measure advertising, including personalised advertising where it is allowed | Ad request and interaction data, IP address, device and SDK signals, where applicable Google's publisher first-party identifier, and — only for players aged 18 or older who allowed tracking through Apple's prompt — the device advertising identifier (IDFA) | Art. 6(1)(a) — consent, collected through the Google privacy message described in section 11, together with ePrivacy consent for storing and reading information on your device. Where you refuse, ads may still be served on a non-personalised, contextual basis |
| Understand whether declared adult players get through onboarding and how far they get, and measure app-install advertising | The 16 one-time milestone events in section 6, plus the standard Firebase Analytics metadata | Art. 6(1)(a) — consent, collected through Google's UMP privacy message where that is required. Accepting these documents is not analytics consent. Declared 13-to-17 players do not send these events. |
| Show house ads for the developer's own apps | Nothing leaves the device to show one | Art. 6(1)(f) — legitimate interests in promoting the developer's own products, in a way that involves no third party and no profiling |
| Publish a score and a generated nickname on a leaderboard, and show you your rank | Anonymous identifier, generated nickname, score, board and week identifiers, platform, app and content version, server timestamp | Art. 6(1)(f) — legitimate interests in running a competitive board that is worth competing on. Being honest about why this is not "contract": a qualifying score is submitted automatically rather than by you asking each time, so publication is not something you have separately agreed to. That means **you have the right to object under Art. 21**, and section 16 says how |
| Keep leaderboards honest: rate limiting, de-duplication of retried submissions, plausibility checks, and device attestation | Per-identity rate counters, the 30-day de-duplication ledger, App Check attestations | Art. 6(1)(f) — legitimate interests in preventing cheating, flooding and fraudulent submissions on a shared public board |
| Recognise a Full Version purchase and restore it | Apple transaction identifiers held on the device | Art. 6(1)(b) — performance of the contract |
| Answer a support email you send | Your email address and whatever you choose to write | Art. 6(1)(b) and Art. 6(1)(f) — responding to your request and keeping a support record |
| Keep the service secure and diagnose faults | Operational logs at Google, which can include a request IP address and the anonymous leaderboard identifier | Art. 6(1)(f) — legitimate interests in network and information security |

Where consent is the basis, you can withdraw it at any time — section 11 explains how — and withdrawing it does not affect processing that already happened.

There is **no automated decision-making that produces legal effects or similarly significant effects** for you. Ad networks use automated systems to select, cap, measure and fraud-check ads, subject to your choices; that is not a decision about you in the legal sense.

**You are not required to give the developer any personal data in order to play OverLit.** There is no registration and nothing to fill in. Refusing advertising consent does not lock you out of the game, and buying Full Version removes advertising altogether. The one thing that necessarily involves personal data is publishing a score on a leaderboard, and that only happens if you play a qualifying run after unlocking the feature.

## 9. Who Receives Data

| Recipient | What it receives | Role |
| --- | --- | --- |
| **Google** (Google AdMob and the Mobile Ads SDK, User Messaging Platform) | Ad requests and interactions, IP address, device and SDK signals, consent state, and where applicable a Google publisher first-party identifier | Google acts as an **independent controller** for advertising — it decides how it uses this data under its own terms, and is not simply following the developer's instructions. Google LLC is a **United States** company operating globally |
| **Google** (Google Analytics for Firebase) | The 16 one-time milestone events and the standard analytics metadata described in section 6 | Processor for the developer's analytics, on Google's Firebase terms |
| **Google** (Firebase Authentication, Cloud Functions, Cloud Firestore, App Check, Cloud Logging) | The anonymous leaderboard identifier, the submission fields listed in section 4, the stored board records, App Check attestations, and operational logs including request IP addresses | Processor. The functions and the database run in `europe-west1` in **Belgium**; Firebase Authentication and App Check are global Google services |
| **Apple** (App Store, StoreKit, DeviceCheck / App Attest, SKAdNetwork) | Purchase, refund and restore information; device attestation; aggregated install attribution | Independent controller for the store relationship and for its own platform services. Card numbers and billing details stay between you and Apple |
| **Other players** | Your generated nickname and your score, on any board you appear on | Publication, as described in section 4 |
| **Email provider** | Only the content of a support email, if you send one | Processor for correspondence |
| **Website hosting** | Ordinary web request metadata for the OverLit pages on `alekjaltuszyk.xyz` | Processor for the website |

Nothing is sold to a data broker. No customer list, contact list or support inbox is uploaded to any advertising platform. There is no attribution partner and no analytics vendor other than the two Google products named above.

Information may additionally be disclosed where genuinely necessary to comply with law, to respond to a valid legal request, or to establish, exercise or defend legal claims. If the app or the developer's business were ever transferred to someone else, relevant records could transfer with it, and this policy would be updated first.

## 10. International Transfers

**Leaderboard records stay in the EU.** The server functions and the database that hold the records described in section 4 run in Google Cloud's `europe-west1` region in **Belgium**. If you are in the EEA, the UK or Switzerland, those records do not leave the EU on an ongoing basis.

**Other processing does reach the United States**, and it is worth being clear about that rather than overstating how contained things are:

- **Google LLC**, which operates the EU-hosted infrastructure above, is itself a United States company. Some administrative access and some of Google's own operational logging can still involve the United States.
- **Google's advertising and analytics services** — AdMob, the Mobile Ads SDK, the User Messaging Platform and Google Analytics for Firebase — are global services, and the data described in sections 5 and 6 is processed outside the EU, including in the United States.
- **Firebase Authentication and App Check** are global Google services rather than regional ones.
- **Apple** processes purchases, platform services and SKAdNetwork attribution under its own terms, internationally.

**The safeguards relied on.** Where personal data is transferred to the United States, that is made under Article 46 GDPR safeguards and, where applicable, the European Commission's adequacy decision for the EU–US Data Privacy Framework. Google LLC is certified under the **EU–US Data Privacy Framework** and its UK Extension and Swiss–US counterpart, and Google's data processing terms additionally incorporate the **EU Standard Contractual Clauses**. Apple publishes its own safeguards for the data it handles as a controller. UK transfers additionally rely on the UK International Data Transfer Addendum or the UK Extension, and Swiss transfers on the Swiss–US Data Privacy Framework or the Swiss annex to the Standard Contractual Clauses.

A copy of the safeguards relied on can be requested at `alekgameshelp2@gmail.com`. Data Privacy Framework adequacy has been challenged before; if it were invalidated, transfers to Google would continue under the Standard Contractual Clauses, and this policy would be reviewed.

## 11. Your Privacy Choices

**The Google privacy message.** Where required — in the EEA, the UK, and in US states with an applicable opt-out right — OverLit shows Google's User Messaging Platform message before advertising starts. Your answer there governs whether personalised advertising and the associated storage on your device are permitted. The Mobile Ads SDK is not started at all until that message reports that ads may be requested.

**Changing your mind.** When Google reports that a privacy-options form is required for your region, OverLit's **Settings** screen shows a **Privacy and cookie settings** row that reopens it. That is the route to withdraw or change advertising consent. In some regions Google does not require that form, and the row is then not available; in that case your device-level advertising controls in iOS Settings are the remaining lever.

**US opt-outs.** For applicable US state laws, Google's message includes the "Do Not Sell or Share My Personal Information" style choice, and OverLit relies on Google's implementation to carry that signal to the advertising stack. OverLit does not itself detect the Global Privacy Control or any other browser-level opt-out signal, because it is an app rather than a website.

**Refusing.** If you refuse consent or opt out, ads may still appear — contextual, non-personalised or otherwise limited by Google according to your choice and the law where you are. What changes is how the ad is chosen and what identifiers may be used, not whether ads exist at all, because ads pay for the free game.

**Removing ads entirely.** The Full Version purchase stops OverLit requesting ads at all.

**Leaderboards.** There is currently no in-app switch that turns leaderboard submission off while you keep playing. Not reaching Level 5 keeps you off the boards, and Developer Mode voids submissions. You can object to publication and have your entries erased — section 16 sets out that right and section 14 the mechanism — and adding a proper on/off control is the right fix rather than asking people to write in.

**Analytics.** A player who declares 13 to 17 sends no OverLit Firebase milestone events. For a player who declares 18 or older, the same Google privacy message described above carries Google's `analytics_storage` choice where it applies, and Google UMP maps that choice into Firebase Consent Mode. There is no second OverLit checkbox because it would not replace or override that Google consent mechanism. Use **Settings → Privacy and cookie settings** when that row is available to reopen the Google form. Accepting these documents is not analytics consent.

## 12. App Store Privacy Labels

Apple's App Privacy labels use Apple's own categories, which are broader and blunter than plain language. The OverLit labels are meant to describe the same practices as this policy: advertising data and product interaction from the AdMob SDK, coarse location derived from IP address, device and SDK identifiers used for ad delivery and fraud prevention, the Full Version purchase event, and the diagnostic and performance data Google's SDK reports.

Apple gives **tracking** a specific meaning: linking data from this app with data from other companies' apps, websites or offline sources for advertising or advertising measurement, or sharing it with a data broker. Doing that requires permission through the App Tracking Transparency framework. OverLit does use that framework, for players who said they are 18 or older, so the App Store label does show **Data Used to Track You** — covering identifiers, usage data and purchases. The label describes what may happen if you allow tracking; it does not mean tracking happens without your permission, and it never happens for the 13-to-17 band.

If you ever find that the App Store label and this policy disagree, please tell the developer at `alekgameshelp2@gmail.com`. The label is a summary; this policy is the detailed statement, and both should say the same thing.

Apple and App Store services are governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and the [Apple standard terms for apps](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/).

## 13. Age, Children And Teens

OverLit is intended for players aged **13 and over**. It is not directed to children under 13, and the developer does not knowingly collect personal information from children under 13. It is not enrolled in Apple's Made for Kids programme.

During onboarding the app asks you to choose an age range: **13 to 17** or **18 or older**. There is no under-13 option and no path into the game without answering. The app does not ask for a date of birth and does not attempt any age verification, so the answer is self-declared.

That answer is **stored on your device and never transmitted**. It is not attached to any leaderboard record, is not sent as an analytics parameter, and no copy of it exists on any server. What it does is change how the advertising SDK and Firebase Analytics are configured: the teen band gets non-personalised, Teen-rated ads, is kept away from the adult-only house ad, and sends no OverLit Firebase milestone events.

If you are 13 or older but under the age of majority where you live, use OverLit with a parent's or guardian's permission where that is required.

**The age at which a person counts as a child varies by country, and in several places it is higher than 13.** In the EEA the age at which someone can consent on their own to services like advertising is set nationally, between 13 and 16. In the UK, the Information Commissioner's children's code treats everyone under 18 as a child and expects marketing profiling to be off by default for them. Some countries, India among them, treat everyone under 18 as a child and require verifiable parental consent before their data is processed at all. OverLit does not operate a parental-consent system and cannot verify anyone's age.

What that means practically: where a player is below the relevant age in their country, the right steps are a parent's or guardian's involvement, the device's own parental controls, or the Full Version purchase, which removes advertising entirely.

If you believe a child under 13 has provided personal information, write to `alekgameshelp2@gmail.com` and it will be dealt with.

## 14. Retention, And How To Delete Your Data

### How long things are kept

**On-device data** stays on your device until you change it, use an in-app reset where one exists, or delete the app.

**Leaderboard board entries have no automatic expiry.** One entry per player per board is kept for as long as the board exists, and boards are archived rather than deleted when scoring rules change — an archived board stays readable indefinitely. An entry is removed when the board's underlying record is erased on request.

**The leaderboard de-duplication ledger expires automatically after 30 days.** Each record carries an expiry timestamp and is deleted by the database's own time-to-live process.

**The private player record, the rate counters and the overall rating record** are kept for as long as the anonymous identity exists — that is, until erasure.

**Operational and access logs** at Google are kept for the periods Google applies to its own logging by default. Those periods are set by Google rather than configured by the developer.

**Advertising and analytics data** held by Google is retained under Google's own policies and the retention settings of the Firebase and AdMob products.

**Support emails** are kept for as long as reasonably needed to answer the request and keep a record of it.

### Erasing your leaderboard data

These steps also have their own page, written to be read without the app installed:
[Delete your OverLit data](https://alekjaltuszyk.xyz/apps/OverLit/delete-data/). It restates what
is below and adds nothing to it.

The leaderboard service has a single function whose only job is deletion. It hard-deletes **everything** held against your anonymous identity: every board entry on every board, the private player record and its rate counters, the rating record, the de-duplication ledger, and the anonymous Firebase Authentication user itself. Your entries come off the live boards, not merely out of an internal table — a published score is public, so erasing it has to mean erasing what other people can see. The function is deliberately never blocked by the feature's kill switch, because deletion has to keep working even when everything else is switched off.

To have it run, email `alekgameshelp2@gmail.com` with the subject **"Delete my leaderboard data"**.

There is a genuine limitation to be honest about. Your leaderboard identity is anonymous: no name, no email address and no account is attached to it, so an email on its own does not tell the developer which identity is yours. Include the board you appeared on, the nickname you are shown under (the app displays your current one above the board), and the exact score, and a match can usually be made. If you have rolled a new nickname since, mention that too — the server keeps only your current one. If a match cannot be made, the request cannot be actioned — under Article 11 GDPR a controller that genuinely cannot identify a data subject is not obliged to acquire extra data in order to do so, and inventing an identity-linking system to service deletion requests would be worse for everyone's privacy than the problem it solves.

**The reliable route is in the app.** Open **Settings → Legal → Delete my leaderboard data**. It acts on your own identity directly, so nothing has to be matched and nothing has to be described. It is available whenever leaderboards are available to you, it asks you to confirm, and it cannot be undone. Your local progress, levels and unlocks are not touched — only what the leaderboard service holds.

Deleting the app does not remove a published leaderboard entry.

### Everything else

**Local game data:** delete the app, or use the in-app reset controls where they exist.

**Advertising and analytics data held by Google:** use the choices in section 11, and Google's own privacy tools and account controls.

**Purchase records:** these are Apple's, and Apple's support channels handle them. The developer holds no purchase server and no purchase database.

**Support emails:** ask, from the same address where possible, and they will be deleted.

Requests are answered within one month, as the GDPR requires. If a request is complex that can be extended by up to two further months, and you will be told why.

## 15. Security

Every connection the app makes is encrypted in transit with HTTPS.

For leaderboards specifically: the database denies all direct access from the app, so every read and write goes through server code that validates it. Each request must carry both a Firebase authentication token and a **Firebase App Check** token backed by Apple's App Attest, which makes it substantially harder to submit scores from anything that is not a genuine copy of OverLit. Scores are checked against plausibility ceilings before they are accepted, submissions are rate-limited per identity, and retried submissions are de-duplicated rather than double-counted. The whole feature can be disabled remotely if it is abused.

Backend administrative access is limited to the developer and protected by the account security of the underlying platform providers.

No app, network, device or provider can be guaranteed to be perfectly secure. If you believe you have found a privacy or security problem, please write to `alekgameshelp2@gmail.com` before disclosing it publicly.

## 16. Your Rights

If you are in the EEA, the UK or Switzerland you have the rights below. They are honoured for everyone, everywhere, regardless of where you live.

- **Access** — ask what is held, and get a copy.
- **Rectification** — have inaccurate data corrected.
- **Erasure** — ask for data to be deleted. Section 14 explains the routes and the one real limitation.
- **Restriction** — ask that processing be limited while a dispute about accuracy or lawfulness is resolved.
- **Portability** — receive data you provided in a structured, machine-readable format.
- **Objection** — object to processing based on legitimate interests. That includes the anti-cheating measures in section 8 and, importantly, **the publication of your score on a leaderboard**. If you object to being published, say so and your entries and identity will be erased using the function in section 14. Being straight about the limitation: the app does not yet have a switch that keeps you playing while keeping you off the boards. Until it does, the only way to prevent publication is not to complete campaign Level 5; once leaderboards become available, eligible personal bests already on the device can be queued automatically, and later qualifying runs can create new entries. That gap is a fair criticism and the fix belongs in the app, not in this paragraph.
- **Withdraw consent** — for advertising and analytics, at any time, through the routes in section 11.

Two practical notes. First, most of what OverLit knows about you is on your phone and never reaches the developer, so for that data the fastest "access request" is to open the app. Second, for leaderboard data the anonymity cuts both ways: without something that identifies your entry, a request cannot be matched to it. Section 14 explains what to include.

Requests go to `alekgameshelp2@gmail.com`. There is no charge for the first request and no requirement to give a reason. You will never be treated differently for exercising a privacy right.

If you are unhappy with how a request was handled, you can complain to a data protection supervisory authority. The developer's is Poland's:

- **Urząd Ochrony Danych Osobowych (UODO)**, ul. Stanisława Moniuszki 1A, 00-014 Warszawa, Poland — [`https://uodo.gov.pl/en`](https://uodo.gov.pl/en)

If you live elsewhere in the EEA you can also complain to your own national authority. In the UK that is the Information Commissioner's Office, [`https://ico.org.uk`](https://ico.org.uk). In Switzerland it is the Federal Data Protection and Information Commissioner.

## 17. Support Emails And Website Pages

If you email support, the developer receives your email address, your message, and anything you choose to include — for example your device model, iOS version, app version, or a pasted Copy Progress summary. Please do not send sensitive personal information in a support message unless your request genuinely needs it.

Support email: `alekgameshelp2@gmail.com`. Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/).

Support emails are not used for marketing, are not uploaded to any advertising platform, and are not used to build audiences.

The OverLit pages on `alekjaltuszyk.xyz` are static informational pages: the app page, support, these documents, the legal manifest and the public `app-ads.txt` file. They set no analytics cookies, no advertising cookies and no tracking storage of the developer's own, which is why there is no cookie banner on them. Ordinary hosting and security infrastructure processes technical information such as IP address, browser type, requested URL, referring URL and timestamps, in order to serve and protect the site.

## 18. Changes To This Policy

This policy will be updated when OverLit changes in a way that affects it. The version number and effective date at the top of this page show when it was last updated, and the same values are published in the legal manifest linked in section 1.

Changes will not be made silently or retroactively. When there is a material change — for example switching leaderboards on for the first time, changing what is stored, changing retention, or changing the advertising or analytics setup — the app shows the updated documents again before you continue playing and asks you to accept the new version. The app records which version you accepted, and when, on your device.

If a future change would involve a genuinely new kind of data processing, this policy will be updated before that processing begins, not after.

## 19. Regional Information

The practices described above are applied globally. This section covers a few regional specifics.

**European Economic Area, United Kingdom, Switzerland.** Sections 8, 10 and 16 are the operative ones: legal bases, international transfers, and your rights. Advertising and analytics rely on your consent, collected through Google's privacy message, which also covers the ePrivacy consent needed to store and read information on your device. Leaderboard records are stored in the EU. The controller is Aleksander Jałtuszyk, Poland; the lead supervisory authority is UODO. UK users may also contact the ICO, and UK transfers rely on the safeguards named in section 10.

In the UK, the Information Commissioner's children's code applies to services likely to be accessed by under-18s and expects marketing profiling to be off by default for them. Players who choose the 13-to-17 band get non-personalised ads with a Teen content cap, which is that default. Players who choose 18 or older are treated as adults, and the app cannot verify that choice.

**United States.** OverLit almost certainly does not meet the applicability thresholds of the California Consumer Privacy Act as amended, or of the comprehensive privacy laws of other states, which are generally gated on annual revenue or on the number of state residents whose data is processed. No claim of applicability is made here either way. Regardless of applicability, the rights in section 16 are honoured for US residents on the same terms as for everyone else, and there is no discrimination for exercising them.

Personal information is **not sold** for money. However: several US state privacy laws define "sale", "sharing" and "targeted advertising" broadly enough that serving personalised advertising through an ad network can fall within them, whether or not any money changes hands and whether or not an advertising identifier is available. Where that applies, the opt-out is Google's privacy message, described in section 11, and the complete opt-out is the Full Version purchase. No sensitive personal information is collected.

OverLit is an app rather than a website, so there is no browser-level opt-out preference signal such as Global Privacy Control for it to receive. The in-app privacy message and your device's advertising settings are the equivalent controls.

**Teenagers in the United States.** A growing number of states restrict targeted advertising to consumers a business knows to be a minor — Connecticut for 13-to-17-year-olds, Colorado and others for everyone under 18. Because OverLit asks for an age band, it knows when a player has said they are 13 to 17, and it configures the advertising SDK for that player with personalisation disabled and a Teen content cap. That is the point of asking.

**Children in the United States.** OverLit is not directed to children under 13 for the purposes of COPPA. It offers no under-13 path, asks for no contact information from anyone at any age, and keeps the declared age band on the device. Nothing is knowingly collected from a child under 13, and no parental-consent mechanism is operated because none is needed for a service that does not accept under-13 users.

**Canada, including Quebec.** The same protections apply. Quebec's Law 25 requires that the person responsible for the protection of personal information be identified: that is Aleksander Jałtuszyk, reachable at `alekgameshelp2@gmail.com`. Technology capable of identifying, locating or profiling a user is disclosed in sections 4, 5 and 6, and the means of deactivating the advertising elements are in section 11. There is no automated decision made about you, and no personal information is used to make one.

**India.** India's Digital Personal Data Protection Act treats **everyone under 18 as a child**, requires verifiable parental consent before a child's data is processed, and restricts tracking, behavioural monitoring and targeted advertising directed at children. OverLit does not operate a verifiable parental-consent mechanism and cannot verify a player's age. Players in India who are under 18 should only use OverLit with a parent or guardian's involvement, and the Full Version purchase removes advertising entirely.

**Brazil, Australia, Japan, South Korea, South Africa and elsewhere.** The same protections and the same rights described in section 16 are applied everywhere, rather than a different standard per country, and requests go to the same address. Under Brazil's LGPD the controller is a small-scale processing agent with no Data Protection Officer appointed; the communication channel for data subjects is the contact in section 20. Where local law requires a specific contact or a specific right that is not listed here, write to that address and it will be handled.

## 20. Contact

Privacy questions, data-subject requests and deletion requests:

- Email: `alekgameshelp2@gmail.com`
- Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/)
- Telephone: `+48 73 2099027`
- Mailing address: `Aleksander Jałtuszyk, Skrytka Pocztowa 59, UP Warszawa 93, 02-800, Warszawa, Poland`
- Country: Poland
