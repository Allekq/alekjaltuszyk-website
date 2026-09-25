This Privacy Policy explains what OverLit does with information when you play the OverLit app on iPhone or Android, visit the OverLit pages on `alekjaltuszyk.xyz`, contact support, or see ads shown in or for OverLit.

OverLit is a short-session arcade game. There is no sign-up, no username and no password, and the app never asks you for a name, an email address or a phone number. There is no text field anywhere in the app, so there is nothing you can type into it. Most of what OverLit knows about your play — your scores, your progress, your unlocks, your settings — stays on your phone.

Three things can send information off your phone: **ads**, **analytics**, and **online leaderboards**. Section 3 lists exactly which of them exist on which platform, because they are not the same on both, and every section after it says which platforms it applies to. Each is described below, including the parts that are less flattering.

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

This policy covers the OverLit app on both platforms and the OverLit pages on `alekjaltuszyk.xyz`.

## 2. Quick Summary

- There is no OverLit account, no sign-in, no password, and no name, email address or phone number is ever requested by the app.
- Your scores, level progress, theme unlocks, settings, play counters, age answer and purchase state are stored **on your device**.
- **Online leaderboards**, where enabled, send a score and a small set of technical fields to a server run by the developer on Google Cloud in **Belgium**, under an anonymous identifier. Your board nickname is picked at random by the server from a fixed list of words written by the developer. You can ask for a different one at any time, but you cannot type your own, and nobody can put their own text on a board.
- **You can turn leaderboards off entirely** and keep playing: **Settings → Legal → Use leaderboards**. Off means no boards, no nickname, and every run stays on your device. For players who told the app they are 13 to 17, scores are **not published unless they turn publication on** — they can read every board in the meantime.
- OverLit shows **Google AdMob ads** in the free version on **both iPhone and Android** — a banner above the board while you play, interstitials between runs, and opt-in rewarded ads. Google's advertising SDK processes ad-request and ad-interaction data, and your IP address, which can be used to estimate a coarse location. Section 6 has the detail; section 3 lists which components each platform carries.
- On iPhone, if you told the app you are **18 or older**, OverLit shows Apple's **App Tracking Transparency** prompt. If you allow tracking there, Google's advertising SDK may read your device's **advertising identifier** and use it to personalise ads and measure them across other companies' apps. If you say no, or never answer, the identifier is not available and is not used. Players in the **13 to 17** band are **never shown the prompt**.
- Because the free game is paid for by advertising, OverLit advertises itself. To know which of those adverts actually work, the app sends the **same 16 milestone events** to one **measurement partner, Tenjin**, which reports them back to the ad platforms the developer buys from — currently **Meta (Facebook and Instagram)**, **TikTok** and **Google**. It receives no score, no nickname, no age answer, no price and nothing you typed, because there is nothing in OverLit to type. A player treated as **13 to 17** is not measured this way at all: the partner's software is never started for them. **No Meta or TikTok software runs inside OverLit**; only the partner's does.
- Analytics is limited to **16 one-time milestone events** — things like "finished onboarding" and "completed level 10" — plus **eight repeatable events**, which count each run you start and each run you finish, which way out of the setup screens you chose, each time the Full Version screen is shown to you, each purchase you begin, each purchase you restore, each rewarded ad you finish, and each full-screen ad shown between runs. The run-you-finish event describes the run: which level, whether you completed it, failed it or left, how many seconds it lasted, and how many stars it earned. They carry no identifier you would recognise, no age answer, **no price** and no message content. A player who declares **13 to 17** sends none of them. For a player who declares **18 or older**, analytics starts only after Google's privacy message has run, on **both** platforms. Accepting these documents is not analytics consent.
- When the app crashes, a **crash report** is sent to **Firebase Crashlytics** on both platforms — the stack trace, your device model, operating system version and app version, and two identifiers Firebase generates for this installation. It carries no user identifier, no score and nothing about your play, and it is not collected until you have accepted this version of these documents. Section 7 has the detail.
- The app asks you to pick an age range, **13 to 17** or **18 or older**. That answer stays on your device and is never transmitted. It changes how ads and analytics are configured, and whether your scores are published by default.
- **In South Korea every player is given the 13-to-17 treatment**, whichever age they picked, because no privacy-consent mechanism this app can use reaches Korea. **In India, a player who chose 18 or older is treated as an adult**, and a player who chose 13 to 17 gets the 13-to-17 treatment as they do everywhere. In both countries scores are not published to a leaderboard unless the player turns it on, and a player who chose 13 to 17 cannot turn it on. Section 14 explains.
- There is **one optional purchase**, Full Version. It is handled by Apple or Google Play, it removes ads, and no payment-card details ever reach the developer.
- Nothing is sold to data brokers. Some privacy laws nonetheless treat personalised advertising as "sharing" or "targeted advertising" — section 12 explains how to turn that off.
- There is no chat, no social feed, no friend list, no multiplayer, no cloud save, no camera or photo access, no microphone access and no precise location.

## 3. What OverLit Is Built From

Everything that can send data off your phone is a third-party component, so the honest way to describe OverLit's privacy is to list those components. **The two platforms are not the same**, and this table is the single place that difference is recorded. Every later section says which platforms it applies to; where a section names a component this table marks "no", that section does not apply to you.

| Component | iPhone | Android | What it does |
| --- | --- | --- | --- |
| Firebase Authentication | yes | yes | Creates the anonymous leaderboard identity (section 5) |
| Cloud Functions and Cloud Firestore | yes | yes | Hold and serve the leaderboards (section 5) |
| Firebase App Check | yes | yes | Confirms a request came from a genuine copy of the app. Apple **App Attest** on iPhone, Google **Play Integrity** on Android |
| Google Analytics for Firebase | yes | yes | The events listed in section 7, and nothing else |
| Firebase Crashlytics | yes | yes | Reports a crash after the fact, so the fault can be found and fixed (section 7) |
| Google User Messaging Platform | yes | yes | Google's privacy message, which is what gathers consent where the law requires it (section 12) |
| Store review prompt (Apple **StoreKit**, Google **Play In-App Review**) | yes | yes | Asks the store to show its own "rate this app" card. The request carries nothing about you, and the app is never told whether the card appeared or what you did with it |
| Google Mobile Ads SDK (AdMob) | yes | yes | Serves the ads in section 6 |
| App Tracking Transparency, Apple advertising identifier, SKAdNetwork | yes | **no** | Apple's tracking permission and attribution. These are Apple technologies and exist only on iPhone (section 6) |
| Google advertising ID | **no** | yes | Android's own resettable advertising identifier, used by the ads SDK for the same purposes (section 6) |
| Google Play Install Referrer | **no** | yes | Android's own way of telling an app which advert or store listing it came from (section 6) |
| Apple StoreKit | yes | no | The Full Version purchase (section 8) |
| Google Play Billing | no | yes | The Full Version purchase (section 8) |
| Tenjin attribution SDK | yes | yes | Measures which advert brought you to OverLit, and reports the section 7 milestones onward to the ad platforms the developer buys from (section 6) |
| House ads bundled into the app | yes | yes | Panels promoting the developer's own apps. Send nothing anywhere (section 6) |

**Both apps now carry the same advertising and consent components.** Section 6 applies to both. The differences that remain in the table above are Apple's and Google's own technologies rather than choices about you: App Tracking Transparency, the Apple advertising identifier and SKAdNetwork exist only on iPhone, and the Google advertising ID only on Android. The two stores also each have their own purchase component.

**There is exactly one attribution partner, and it is not Meta or TikTok.** OverLit advertises itself on Meta and TikTok, but no Meta or TikTok software runs inside the app. Both platforms instead carry a single measurement partner, **Tenjin**, which is what reports back to them. That is a deliberate choice and not merely a tidy one: Apple allows only one component in an app to own the SKAdNetwork conversion value described in section 6, so integrating each ad platform separately would mean one of them measuring properly and the rest not. One partner also means one set of software reading your device, instead of three.

Not present on either platform: Firebase Performance Monitoring, Remote Config or Cloud Messaging; any crash-reporting or product-analytics tool other than the two Google products named in the table above; **any Meta or TikTok SDK or pixel**; any conversion API sending events from the developer's own servers; any mediation partner; or any customer-list, contact-list or email upload to an advertising platform.

## 4. What Stays Only On Your Device

The following is stored in your phone's app storage and is not transmitted to the developer, except that an eligible personal-best score and the technical submission fields listed in section 5 can be sent to the leaderboard service:

- your local high-score records, level progress, stars, campaign and arcade state, and local run history
- theme unlocks, menu position, and gameplay preferences such as haptics, accessibility, and notification choices
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

**Leaderboards are not switched on in every version of the app**, and where the feature is switched on, a board becomes available to you only after you complete campaign **Level 5**. Until both of those are true, no leaderboard data leaves your device and none of what follows happens.

### Choosing not to take part

**Settings → Legal → Use leaderboards** turns the feature off. With it off, nothing about a run leaves your device, no nickname is created for you, and the boards are not shown to you at all. That is deliberate: a switch that leaves the feature visibly running is a hidden flag rather than a choice.

There is a middle state as well, and it is where a player who chose the **13 to 17** band starts: they can **read** every board, but nothing of theirs is published until they turn publication on themselves. For a player who chose 18 or older publication starts on — except in the two countries named in section 14, where it starts off for everybody, and where a player who chose 13 to 17 cannot turn it on at all. That difference is deliberate: several regulators expect a service not to make a child public by default.

Turning it off does not retract what is already published. Section 15 is how you remove that.

### The anonymous identity

The first time the app needs to talk to the leaderboard service, it creates an anonymous account with Firebase Authentication. This is not an account in any normal sense: it has no email address, no password, no phone number and no profile, and there is nothing to sign in or out of. It is a random identifier issued by Google.

Because that identifier lets the same installation be recognised again, and lets scores be attached to it, it is treated as **personal data** under the GDPR. This policy does not claim that leaderboards collect no personal data, because that would not be true.

The identifier is stored in the platform's own protected storage — the Keychain on iPhone, the equivalent on Android — which is deliberately durable, so it can survive deleting and reinstalling the app.

### Your board nickname

The server gives you a nickname made of one to three words drawn at random from fixed lists written by the developer — for example `Grumpy Kraken` or `Cosmic Comet Otter`. Two players can end up with the same one.

The nickname is **not derived from your identifier**, and reveals nothing about it.

Next to your nickname there is a dice button. Pressing it asks the server for a different random name, as often as you like. You are choosing between names the developer wrote; you are not writing one. OverLit contains **no text-entry field of any kind**, anywhere in the app, and no part of the leaderboard service will accept a nickname sent by an app. There is therefore no way for anyone to put a real name, an insult, a phone number or an advertisement onto a board. That is a deliberate design choice and it removes an entire class of problem.

Your current nickname is stored against your anonymous identifier and is shown next to your score on every board you appear on. In that sense it is a stable pseudonym attached to a persistent identifier, and it is treated as personal data for the same reason the identifier is.

### What is sent when a score is submitted

A submission carries exactly these fields, and nothing else:

- a **board identifier**, which describes what was played: whether it was campaign, arcade, daily or legacy, the level or challenge, the grid size, the ruleset, whether the board ranks by score or by time, and the scoring version
- the **week identifier**, for weekly boards, in ISO form such as `2026-W30`
- the **score** — a whole number, either points or a duration in hundredths of a second — and whether higher or lower is better on that board
- a **de-duplication key** built from the run, so that a retry after a dropped connection cannot create a second entry
- the fixed word `STANDARD`, marking an ordinary run
- the **platform** (`IOS` or `ANDROID`), the **app version**, and the **content version**
- a **schema version number** — the fixed value `1`, which tells the server which submission format the app is speaking. It is a constant compiled into the app and says nothing about you

That list is complete. No name, no age band, no advertising identifier, no device identifier, no location, no email address and no free text is ever sent to the leaderboard service.

Rolling a new nickname is a separate request. It carries **no data at all** beyond what every call needs — the anonymous identifier and the app-attestation token — because the app has nothing to send: the server picks the words.

Submission happens automatically at the end of a qualifying run, and only when the score actually beats your own previous accepted best. When leaderboards first become available after campaign Level 5, OverLit also checks the eligible personal bests already stored on your device and queues any that are not already pending or recorded as accepted. The same check can run when importing genuine played progress first makes leaderboards available, and it can be started manually from development builds. This backfill sends one best per eligible board using exactly the same fields and ordinary eligibility rules as a live run; it does not upload your progress file or run history. Nothing is submitted while publication is switched off, and tutorial runs, your first onboarding run, abandoned runs, runs played with Developer Mode enabled, skipped levels, records created by developer tools and scores from an obsolete scoring version are never submitted.

### What is stored on the server

Against your anonymous identifier:

- a **private player record** holding your current nickname, the time it last changed, and per-identity rate counters used to stop automated flooding
- **one board entry per board**, holding the score, the server time at which that score was first accepted (earliest submission wins a tie), a copy of your nickname, the platform, the `STANDARD` marker and the identifier itself. Rolling a new nickname updates that copy on every board you are already on
- a **de-duplication ledger** of recent submissions, so a replayed request returns the original answer instead of creating a duplicate. Each ledger record expires automatically **30 days** after it is written. A record also holds a copy of the board rows that were returned to you at the time, which means it can contain other players' nicknames and scores as they stood then — the same information that was on your screen
- a **rating record**, holding a percentile-based score derived from your best placements. One is written for every player who submits, whether or not the overall board is showing them

Per board, not per person, the server keeps the board's registry entry and its size.

### What other players see

A board first shows a small leading group and, when you are farther down, a group of players around you. You can scroll to load more scores beyond those initial groups. Each row is a rank, a nickname and a score — your own row is shown as **You**. Ranks are calculated on the server; the app never computes them.

The stored platform value is **not displayed**, and the underlying identifier never leaves the server at all. No timestamps, no progress, no purchase state and nothing else about another player is ever shown to you, or about you to them.

### Where it runs, and what protects it

The server code and the database run in Google Cloud's `europe-west1` region in **Belgium**. The app cannot read or write the database directly: every operation goes through a small set of server functions, and the database rules deny all direct access.

Each request is protected by **Firebase App Check**, using Apple's App Attest on iPhone and Google's Play Integrity on Android, to confirm that the request is coming from a genuine, unmodified copy of OverLit. That check produces a short-lived token. It tells the developer nothing about you.

The whole feature can be switched off remotely, for everyone, without an app update.

### The honest caveats

- A leaderboard entry is **published**. Its nickname and score are visible to any other player who reaches that board.
- Board entries have **no automatic expiry**. When a board's scoring rules change the board is archived rather than deleted, and archived boards stay readable indefinitely. An entry stays until you ask for it to be erased. Section 15 explains how.
- Because a leaderboard identity is anonymous, there is no name or email address attached to it. That is good for your privacy and awkward for your rights — see section 15 and section 17.
- The copies of board rows held in **other players'** de-duplication ledgers expire on their own within 30 days, but erasing your data does not reach into them. They are never shown on a board or to a new viewer; they are a cached response, and the only way one resurfaces is if that player's own app repeats the identical submission.

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

**Minors.** If you chose the **13 to 17** band — or you are in South Korea, whichever band you chose (section 14) — OverLit **never shows the prompt and never reads the advertising identifier**. Cross-app tracking is not asked for and is not performed. This is deliberate: several laws restrict targeted advertising to people a service knows to be minors, and OverLit knows, because it asked.

**Refusing costs you nothing but relevance.** Ads still appear either way — they are what pays for the free game. What changes is whether they are chosen using an identifier that follows you between apps. The only way to remove ads entirely is the Full Version purchase.

### How your age answer changes the ads

For players treated as minors, the advertising SDK is configured with teen treatment, a maximum ad content rating of **Teen**, publisher ad personalisation **disabled**, and Google's publisher first-party identifier **disabled**. In plain terms, they get non-personalised ads.

Non-personalised is not the same as identifier-free, and it would be misleading to imply otherwise. Google's own documentation is explicit that non-personalised ads still use cookies or mobile advertising identifiers for frequency capping and aggregated ad reporting, and that consent is still required for that where the law says so. What non-personalised removes is the targeting, not every identifier.

For players treated as adults, ad personalisation and Google's publisher first-party identifier may be enabled, subject to your consent choices, your device settings, Google's own settings and applicable law. The publisher first-party identifier is a Google-managed identifier scoped to this publisher; it is not the device advertising identifier and is not shared as one with other publishers.

### Install measurement, and the adverts OverLit buys

*Applies to both platforms.*

The free game is paid for by advertising, so OverLit advertises itself — on **Meta (Facebook and Instagram)**, on **TikTok**, and through **Google**. Buying adverts is only worth doing if it is possible to tell which of them brought players who actually play, and that is what this part is for.

**One partner, named.** OverLit carries a single attribution component, the **Tenjin** SDK (Tenjin Inc., United States). No Meta or TikTok software runs inside the app. Tenjin measures which advert an install came from and reports the milestones in section 7 onward to whichever ad platforms the developer is buying from.

**What Tenjin receives**, when it runs at all:

- the **event names** listed in section 7 — nothing else about a run, and none of the parameters those events carry to Google Analytics;
- your **device advertising identifier**, but only where it is available: on iPhone that means only if you allowed tracking through Apple's prompt, and on Android it is the resettable Google advertising ID;
- your **IP address**, which can be used to estimate a coarse location, and ordinary device, app-version and session information;
- on Android, the **Google Play Install Referrer** — the string Google Play hands an app to say which listing or advert it was installed from;
- on iPhone, a copy of the **SKAdNetwork** postback described below.

It does **not** receive your score, your rank, your board nickname, your leaderboard identity, your age answer, your purchase card details, or anything you typed — there is nothing in OverLit to type.

**Nothing runs for a player treated as a minor.** For the 13-to-17 band, and for everyone in South Korea (section 14), the Tenjin SDK is **not started at all**. This is deliberately stronger than switching it off: an attribution SDK exists to measure across apps, so for a player who should not be measured across apps the honest state is that it never runs.

**Consent still governs it for everyone else.** Where Google's privacy message applies, the SDK is not started until that message reports that advertising may proceed, in exactly the way section 7 describes for analytics.

**If you decline Apple's tracking prompt, measurement continues without the identifier.** No advertising identifier is available, so events are sent without one and are flagged to the ad platforms as opted out of personalisation. What remains is aggregate: Apple's SKAdNetwork, described next, plus counts. This is worth stating plainly rather than implying that declining stops all measurement, because it does not — what it stops is measurement that can follow you between apps.

**SKAdNetwork, and the one number OverLit sets.** The iPhone app declares the standard Google-mediation set of **SKAdNetwork** identifiers. SKAdNetwork is Apple's own attribution system: it reports installs to ad networks in aggregate, with delays and thresholds designed to prevent any individual being identified, and it carries no identifier for you at all. Within it, an advertised app may set a single small number — a *conversion value* — summarising how far a player got. OverLit sets that number from the same milestones in section 7: `0` means the app was installed and nothing was reached, and it rises through the list to `16` for the Full Version purchase. Apple sends that number to the ad network that won attribution, and, because the app names Tenjin's reporting endpoint, a copy to Tenjin. The developer receives campaign-level counts, not user-level data.

**On Android there is no SKAdNetwork**, because it is an Apple system. Attribution there works through the Google Play Install Referrer instead, which is why that row appears in the section 3 table for Android only.

**What the ad platforms get back.** Meta, TikTok and Google receive, from Tenjin, that an install from one of their adverts reached a given milestone. They use it to judge which adverts work and to find similar people to show them to, under their own privacy policies and as independent controllers. No list of players, no email addresses and no contact list is ever uploaded to any of them — OverLit holds none of those to upload.

### The app-ads.txt file

To identify authorised sellers of OverLit's ad inventory, this site publishes an [app-ads.txt file](https://alekjaltuszyk.xyz/app-ads.txt).

### House ads

*Applies to both platforms.*

When no network ad is available, OverLit may show a **house ad** instead: a panel promoting one of the developer's own apps, or OverLit's own Full Version purchase. These are bundled into the app. Showing one sends nothing to any ad network, and no data about you is used to choose it beyond whether you are being treated as an adult and, for the Full Version panel, whether you already own it.

Which apps are promoted differs by platform, for the same reason the rest of section 3 does. On **iPhone** they are **PlanKept** and **AudioChoices**, plus **Voice of Self**, which is shown only to players treated as adults. On **Android** there is a single house ad, for **AudioChoices**, shown to everyone — the other two have no Android listing to send anyone to. On both platforms OverLit may also show a house ad for **its own Full Version purchase**, which opens the purchase screen inside the app rather than a store listing; it sends nothing anywhere and is never shown to a player who already owns it.

Tapping one opens the app store or a page on this website — or, for the Full Version panel, the purchase screen inside OverLit, which leaves nothing about you anywhere. Where it opens something outside the app, from that point the destination's own policies apply. Rewarded ads are never replaced by a house ad, and Full Version suppresses house-ad fallback along with everything else.

### Full Version removes ads

While the Full Version entitlement is active, OverLit makes no banner, interstitial or rewarded ad request and shows no house-ad fallback. If you have the "Help the Dev" setting on, you get a thank-you panel where an ad would have been.

## 7. Analytics, Measurement And Crash Reports

*Applies to both platforms, identically.*

OverLit uses Google Analytics for Firebase, in a deliberately narrow way.

**It starts switched off, and it stays off for minors.** Analytics collection is disabled in the app's configuration before any code runs. A player treated as a minor — the 13-to-17 band, or any player in South Korea (section 14) — sends no OverLit Firebase milestone, purchase, conversion or gameplay events.

**What happens to an event that occurs before analytics is allowed to run.** A previous version of this document said such events "are not queued and are not replayed later". That was wrong about the milestones and is corrected here, because the difference matters to you:

- **The 16 milestones are recorded on your device when you reach them, and delivered later if and when measurement becomes allowed.** Reaching level 10 is something you did; the app writes it down whether or not it may report it yet. Nothing is sent while it may not be. If you are treated as a minor the record simply sits there, unsent, for as long as that is true — and if you later change your age answer to 18 or older and the privacy message allows measurement, the milestones you had already reached are then sent. They are never sent twice.
- **The eight repeatable events are not stored, queued or replayed.** One that happens while measurement is not allowed — including in the moment before Google's privacy message finishes on a cold start — is simply discarded where it is made. Nothing about them is written down anywhere.

**For everyone else it is Google's privacy message that turns it on, not a checkbox in these documents.** For a player treated as an adult, the app first runs Google User Messaging Platform. Where Google's message applies, UMP maps that player's current privacy choice into Google Consent Mode, including the `analytics_storage` signal. The app then allows Firebase Analytics to operate under those Google-managed signals; it does not turn analytics on because the player accepted these documents, and on iPhone it does not use Apple's App Tracking Transparency answer as analytics consent either. UMP and Firebase determine the resulting behaviour for the player's region and choice, including any limited measurement Google provides when storage consent is denied. **If the privacy message does not complete successfully, analytics stays off.** This is the same mechanism on both platforms.

**A correction to an earlier version of this document.** Until Android gained an ad SDK, that build removed the advertising-identifier permission and switched off the identifier Google Analytics for Firebase would otherwise collect, because nothing in it had any use for one. That is **no longer true and this sentence replaces it**: the Android app now carries the Google Mobile Ads SDK, the permission is present, and identifier collection is enabled for a permitted collection. Whether a collection is permitted at all is unchanged and is still decided by the legal gate, the audience rule and Google's privacy message.

**There are two kinds of event, and only two.** The full list is short enough to print, so it is printed.

**Sixteen conversion milestones, each sent at most once, ever.** The app keeps a local record of which have been delivered so that none repeats:

`overlit_onboarding_complete`, `overlit_first_run_started`, `overlit_first_run_complete`, `overlit_level_1_complete`, `overlit_level_3_complete`, `overlit_level_5_complete`, `overlit_level_7_complete`, `overlit_level_10_complete`, `overlit_level_20_complete`, `overlit_level_30_complete`, `overlit_level_40_complete`, `overlit_level_50_complete`, `overlit_level_60_complete`, `overlit_level_70_complete`, `overlit_campaign_complete`, and `overlit_full_version_purchase`.

The only parameters they carry are the milestone level number, the campaign's level count, and the Full Version product identifier. **No price, no currency, no order number and no store account detail is attached to any of them** — the store does not hand the app those in a form it could pass on, and they would not be passed on if it did.

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
- **`overlit_purchase_start`**, when a Full Version purchase is actually begun at the store, and **`overlit_purchase_restore`**, when the store's restore flow returns an existing Full Version entitlement. Neither carries a price, a currency, an order number or anything about your payment method — the developer never receives those (section 8).
- **`overlit_rewarded_ad_complete`**, when a rewarded ad finishes and its reward is granted. Two parameters: `placement`, naming the kind of ad slot it was shown in — today the only value it can carry is `REWARDED`, because a rewarded slot is the only kind that pays out — and `purpose`, saying what the ad was watched for, exactly one of `level_skip`, `theme`, `customization` or `nickname_reroll`.
- **`overlit_interstitial_shown`**, when an automatic full-screen ad between runs is actually displayed.

Of the eight, only `overlit_run_end` describes a run rather than counting one, and what it describes is listed above in full: a level number, an outcome, a duration in seconds and a star count. **No score, no amount of money and no identifier you would recognise is attached to any of the eight**, and none of them carries anything you typed, because there is nothing in OverLit to type.

Two changes here are worth naming rather than leaving to be noticed. **Tutorial runs are now counted**, as their own `mode` value, so that the developer can see whether the tutorial offered on the last setup screen is taken and finished; they used to be excluded entirely. **Developer-forced runs are still excluded throughout** — those are the developer's own testing, not a player's choice of what to play.

**The sixteen milestones have a second recipient; the repeatable events do not.** The same sixteen names, and only the names, are also sent to the measurement partner described in section 6, so that advertising OverLit can be measured. The parameters above are not sent there, and **none of the eight repeatable events is sent there at all** — they are behavioural data about how the game is played and how it is paid for, which no ad platform needs and which would be a far larger disclosure than the milestones. A player treated as a minor sends neither kind, to either recipient.

Across both kinds: no score, no leaderboard identity, no age answer and no store transaction identifier is ever attached. The app sets no user identifier and no user properties.

Alongside those events, while Firebase Analytics is enabled, Google and Firebase process the standard app-instance identifier, session and app-launch information, app version, device and platform information, an approximate region derived from the network, and diagnostic metadata that Firebase Analytics needs in order to function at all.

### Crash reports

*Applies to both platforms.*

When OverLit crashes, **Firebase Crashlytics** sends a report so that the fault can be found and fixed. A report contains the **stack trace** — the list of functions the app was inside when it stopped — together with your **device model**, **operating system version** and **app version**, and two identifiers Firebase generates for this installation: a Crashlytics installation identifier and the Firebase installations identifier.

**Be clear about what that second identifier means.** The Firebase installations identifier is the same one Google Analytics for Firebase uses in this app, so a crash report is **linkable to the analytics events above** rather than isolated from them. It would be untrue to call it an anonymous, crash-only identifier, so this document does not. Both identifiers belong to the installation rather than to you, and both are replaced if you delete and reinstall the app. Neither is the advertising identifier and neither is your leaderboard identity.

**A report carries no user identifier and nothing the developer adds to it.** Your anonymous leaderboard identity is not attached, your board nickname is not attached, your age answer is not attached, and your score and progress are not attached. The app sets no custom keys, writes no log messages into a report, and never tells Crashlytics who you are. There is nothing you typed, because there is nothing in OverLit to type.

**Collection starts switched off.** It is disabled in the app's configuration before any code runs, and it is not switched on until you have accepted **this version** of these documents — the version shown at the top of this page. Because a later version has to be accepted in turn, a future update to these documents switches crash reporting back off until you accept that one. Crash reporting is **not** governed by Google's privacy message: it is disclosed here, under this policy, rather than through Google's advertising and analytics consent form, and the **Privacy and cookie settings** row described in section 12 does not withdraw it.

A report is written on your device at the moment of the crash and uploaded on the next launch. There is no periodic beacon and no session ping — nothing is sent unless the app actually crashes. Google acts as a **processor** for crash reports on the Firebase terms, and, unlike the leaderboard records in section 11, they carry **no regional restriction**: they are processed wherever Google or its agents maintain facilities. Google keeps them for **90 days** (section 15).

**A player treated as a minor sends no crash reports either.** An earlier draft of this section said the opposite — that crash reports were the one thing a minor did send, on legitimate interests rather than consent. The app has never behaved that way and will not: a declared **13 to 17** player, and every player in **South Korea** (section 14), sends nothing here, exactly as they send none of the events above. The argument for the other choice is a real one — a crash is a fault in the app rather than a fact about you, and an app that crashes for teenagers and cannot be told so is worse for them — but it is not what this app does, and this document describes what it does. A crash report is never used for advertising, is never sent to the measurement partner in section 6, and is never combined with anything in section 6 or with the events above.

## 8. The Full Version Purchase

*Applies to both platforms. The store differs; nothing else does.*

OverLit offers one optional purchase: **Full Version**, a one-time non-consumable in-app purchase. It removes ads and unlocks ad-gated themes, and it lets an existing level-skip offer complete without watching an ad. It does not unlock content that is meant to be earned by playing.

The store takes the payment — Apple through the App Store on iPhone, Google Play Billing on Android. **No payment-card details, billing address or store account details ever reach the developer.** The app checks your entitlement with the store on the device, stores the result locally along with the transaction identifiers needed to recognise a restored purchase, and supports the store's own restore flow. There is no server-side receipt check, because there is no purchase server: entitlement is verified on your device.

If the store reports that a purchase was refunded or revoked, the app updates the local state to match.

The one-time `overlit_full_version_purchase` analytics event described in section 7 carries the product identifier only.

## 9. Why This Data Is Processed, And The Legal Basis

Under the GDPR, every purpose needs a lawful basis. These are the ones relied on:

| Purpose | Data used | Legal basis |
| --- | --- | --- |
| Run the game and remember your progress, settings and unlocks | On-device data only, which never reaches the developer | Art. 6(1)(b) — performance of the contract with you. No transmission, so nothing is disclosed |
| Show and measure advertising, including personalised advertising where it is allowed | Ad request and interaction data, IP address, device and SDK signals, where applicable Google's publisher first-party identifier, and — only for adults who allowed tracking through Apple's prompt — the device advertising identifier | Art. 6(1)(a) — consent, collected through the Google privacy message described in section 12, together with ePrivacy consent for storing and reading information on your device. Where you refuse, ads may still be served on a non-personalised, contextual basis |
| Understand whether players get through onboarding and how far they get, which game modes are actually played, and how often offers and ads are seen | The 16 one-time milestone events and the eight repeatable events in section 7, plus the standard Firebase Analytics metadata | Art. 6(1)(a) — consent, collected through Google's privacy message where that is required. Accepting these documents is not analytics consent. Players treated as minors do not send these events |
| Measure which advert brought a player to OverLit, and how far they then got | The 16 milestone names in section 7, the device advertising identifier where one is available, IP address, ordinary device and app information, the Google Play Install Referrer on Android, and the SKAdNetwork conversion value on iPhone | Art. 6(1)(a) — consent, collected through the same Google privacy message, together with ePrivacy consent for reading information on your device. Players treated as minors are excluded entirely: the partner's SDK is never started for them. Where you decline Apple's tracking prompt, no advertising identifier is used and what remains is aggregate measurement |
| Show house ads for the developer's own apps | Nothing leaves the device to show one | Art. 6(1)(f) — legitimate interests in promoting the developer's own products, in a way that involves no third party and no profiling |
| Publish a score and a generated nickname on a leaderboard, and show you your rank | Anonymous identifier, generated nickname, score, board and week identifiers, platform, app and content version, server timestamp | Art. 6(1)(f) — legitimate interests in running a competitive board that is worth competing on. Being honest about why this is not "contract": a qualifying score is submitted automatically rather than by you asking each time. That means **you have the right to object under Art. 21**, and the switch in section 5 is how you exercise it without writing to anybody. Because the balance is weighed more strictly where the player is a child, publication is **off by default for the 13-to-17 band and starts only if they turn it on themselves**, the choice is described in plain language where it is offered, and it can be reversed in one tap or erased outright under section 15. Two countries go further and do not offer that choice at all — see section 14 |
| Keep leaderboards honest: rate limiting, de-duplication of retried submissions, plausibility checks, and device attestation | Per-identity rate counters, the 30-day de-duplication ledger, App Check attestations | Art. 6(1)(f) — legitimate interests in preventing cheating, flooding and fraudulent submissions on a shared public board |
| Recognise a Full Version purchase and restore it | Store transaction identifiers held on the device | Art. 6(1)(b) — performance of the contract |
| Answer a support email you send | Your email address and whatever you choose to write | Art. 6(1)(b) and Art. 6(1)(f) — responding to your request and keeping a support record |
| Keep the service secure and diagnose faults | Operational logs at Google, which can include a request IP address and the anonymous leaderboard identifier | Art. 6(1)(f) — legitimate interests in network and information security |
| Find and fix crashes | The stack trace, device model, operating system version, app version, and the two per-installation Firebase identifiers described in section 7 — never a user identifier, a score or an age answer | Art. 6(1)(f) — legitimate interests in a game that works. Nothing in a crash report is used for advertising, none of it reaches the measurement partner, and none of it is combined with section 6 or with the events in section 7 |

Where consent is the basis, you can withdraw it at any time — section 12 explains how — and withdrawing it does not affect processing that already happened.

There is **no automated decision-making that produces legal effects or similarly significant effects** for you. Ad networks use automated systems to select, cap, measure and fraud-check ads, subject to your choices; that is not a decision about you in the legal sense.

**You are not required to give the developer any personal data in order to play OverLit.** There is no registration and nothing to fill in. Refusing advertising consent does not lock you out of the game, buying Full Version removes advertising altogether, and the leaderboard switch in section 5 means even score publication is optional.

## 10. Who Receives Data

| Recipient | What it receives | Role |
| --- | --- | --- |
| **Google** (Google AdMob and the Mobile Ads SDK, User Messaging Platform) | Ad requests and interactions, IP address, device and SDK signals, consent state, and where applicable a Google publisher first-party identifier | Google acts as an **independent controller** for advertising — it decides how it uses this data under its own terms, and is not simply following the developer's instructions. Google LLC is a **United States** company operating globally |
| **Google** (Google Analytics for Firebase) | The 16 one-time milestone events, the six repeatable events, and the standard analytics metadata described in section 7 | Processor for the developer's analytics, on Google's Firebase terms |
| **Google** (Firebase Crashlytics) | Crash reports: the stack trace, device model, operating system version, app version, and the two per-installation Firebase identifiers described in section 7 | Processor for the developer's fault diagnosis, on Google's Firebase terms. A global Google service rather than a regional one |
| **Google** (Firebase Authentication, Cloud Functions, Cloud Firestore, App Check, Cloud Logging) | The anonymous leaderboard identifier, the submission fields listed in section 5, the stored board records, App Check attestations, and operational logs including request IP addresses | Processor. The functions and the database run in `europe-west1` in **Belgium**; Firebase Authentication and App Check are global Google services |
| **Apple** (App Store, StoreKit, DeviceCheck / App Attest, SKAdNetwork) | Purchase, refund and restore information; device attestation; aggregated install attribution; a request to show the store's own review card, which carries nothing about you | Independent controller for the store relationship and for its own platform services. Card numbers and billing details stay between you and Apple |
| **Google** (Google Play Store, Play Billing, Play Integrity, Play In-App Review) | Purchase, refund and restore information; device and app integrity attestation; a request to show the store's own review card, which carries nothing about you | Independent controller for the store relationship and for its own platform services. Card numbers and billing details stay between you and Google |
| **Tenjin Inc.** (attribution partner) | The 16 milestone names, the device advertising identifier where one is available, IP address, device and app information, the Google Play Install Referrer on Android, and a copy of the SKAdNetwork postback on iPhone | Processor for the developer's install measurement, on Tenjin's data processing terms. A **United States** company. Not started at all for a player treated as a minor |
| **Meta Platforms**, **TikTok** (ad platforms the developer buys adverts from) | From Tenjin, not from the app: that an install attributed to one of their adverts reached a given milestone, and the aggregate SKAdNetwork postback Apple sends them directly | **Independent controllers** for their own advertising systems. **No Meta or TikTok software runs inside OverLit** and neither receives anything directly from it |
| **Other players** | Your generated nickname and your score, on any board you appear on | Publication, as described in section 5 |
| **Email provider** | Only the content of a support email, if you send one | Processor for correspondence |
| **Website hosting** | Ordinary web request metadata for the OverLit pages on `alekjaltuszyk.xyz` | Processor for the website |

Nothing is sold to a data broker. No customer list, contact list or support inbox is uploaded to any advertising platform — the developer holds none of those to upload. There is **one** attribution partner, named above, and no analytics vendor other than the Google products named above.

Information may additionally be disclosed where genuinely necessary to comply with law, to respond to a valid legal request, or to establish, exercise or defend legal claims. If the app or the developer's business were ever transferred to someone else, relevant records could transfer with it, and this policy would be updated first.

## 11. International Transfers

**Leaderboard records stay in the EU.** The server functions and the database that hold the records described in section 5 run in Google Cloud's `europe-west1` region in **Belgium**. If you are in the EEA, the UK or Switzerland, those records do not leave the EU on an ongoing basis.

**Other processing does reach the United States**, and it is worth being clear about that rather than overstating how contained things are:

- **Google LLC**, which operates the EU-hosted infrastructure above, is itself a United States company. Some administrative access and some of Google's own operational logging can still involve the United States.
- **Google's advertising and analytics services** — AdMob, the Mobile Ads SDK, the User Messaging Platform and Google Analytics for Firebase — are global services, and the data described in sections 6 and 7 is processed outside the EU, including in the United States.
- **Firebase Authentication and App Check** are global Google services rather than regional ones.
- **Firebase Crashlytics** is likewise a global Google service. Crash reports carry no regional restriction and are processed wherever Google or its agents maintain facilities; they are **not** held in the EU region that holds the leaderboard records.
- **Tenjin Inc.**, the attribution partner in section 6, is a United States company, and the data it receives is processed there.
- **Meta and TikTok** receive attribution reporting about their own adverts and operate internationally under their own terms.
- **Apple and Google Play** process purchases, platform services and attribution under their own terms, internationally.

**The safeguards relied on.** Where personal data is transferred to the United States, that is made under Article 46 GDPR safeguards and, where applicable, the European Commission's adequacy decision for the EU–US Data Privacy Framework. Google LLC and Apple are certified under the **EU–US Data Privacy Framework** and its UK Extension and Swiss–US counterpart, and Google's data processing terms additionally incorporate the **EU Standard Contractual Clauses**. The attribution partner's transfers rely on its own data processing agreement and the **EU Standard Contractual Clauses**. UK transfers additionally rely on the UK International Data Transfer Addendum or the UK Extension, and Swiss transfers on the Swiss–US Data Privacy Framework or the Swiss annex to the Standard Contractual Clauses.

A copy of the safeguards relied on can be requested at `alekgameshelp2@gmail.com`. Data Privacy Framework adequacy has been challenged before; if it were invalidated, transfers would continue under the Standard Contractual Clauses, and this policy would be reviewed.

## 12. Your Privacy Choices

**The Google privacy message.** Where required — in the EEA, the UK, Switzerland, and in US states with an applicable opt-out right — OverLit shows Google's User Messaging Platform message before advertising or analytics starts. Your answer there governs whether personalised advertising, analytics storage and the associated storage on your device are permitted. On iPhone the Mobile Ads SDK is not started at all until that message reports that ads may be requested; on both platforms analytics stays off until it completes.

**Changing your mind.** When Google reports that a privacy-options form is required for your region, OverLit's **Settings** screen shows a **Privacy and cookie settings** row that reopens it. That is the route to withdraw or change advertising and analytics consent. In some regions Google does not require that form, and the row is then not available; in that case your device-level advertising controls are the remaining lever.

**US opt-outs.** For applicable US state laws, Google's message includes the "Do Not Sell or Share My Personal Information" style choice, and OverLit relies on Google's implementation to carry that signal to the advertising stack. OverLit does not itself detect the Global Privacy Control or any other browser-level opt-out signal, because it is an app rather than a website.

**Refusing.** If you refuse consent or opt out, ads may still appear — contextual, non-personalised or otherwise limited by Google according to your choice and the law where you are. What changes is how the ad is chosen and what identifiers may be used, not whether ads exist at all, because ads pay for the free game.

**Removing ads entirely.** The Full Version purchase stops OverLit requesting ads at all.

**Leaderboards.** **Settings → Legal → Use leaderboards** turns the feature off — no scores published, no boards shown, no nickname — while you keep playing. Section 5 describes the switch and the read-only middle state, and section 15 explains how to erase what was published before you used it.

**Install measurement.** The same Google privacy message governs whether the attribution partner in section 6 starts at all, so refusing there stops it too. On iPhone, declining Apple's tracking prompt additionally means no advertising identifier is available to it, and what remains is aggregate measurement that cannot follow you between apps — that is a real reduction, but it is not zero, and section 6 says so plainly rather than implying otherwise. Buying the Full Version does **not** switch install measurement off: it is about which advert brought you here, not about serving you ads. Players treated as minors are excluded from it entirely.

**Analytics.** A player treated as a minor sends no OverLit Firebase analytics events of either kind. For everyone else the Google privacy message described above carries the `analytics_storage` choice where it applies. There is no second OverLit checkbox because it would not replace or override that Google consent mechanism. Accepting these documents is not analytics consent.

**Crash reports.** Crash reporting is not analytics and is not governed by Google's privacy message, so the **Privacy and cookie settings** row does not switch it off. It is disclosed under this policy instead, it is collected only once you have accepted the current version of these documents, and section 7 sets out exactly what a report contains.

## 13. Store Privacy Labels

Apple's App Privacy labels and Google Play's Data safety section use each store's own categories, which are broader and blunter than plain language. They are meant to describe the same practices as this policy, and because each store asks its own questions about its own platform's identifiers (section 3), **the two stores' answers are not word for word the same**.

On the **App Store**, the labels cover advertising data and product interaction from the AdMob SDK, the app's own product-interaction events described in section 7 — including the events recording that an offer was shown, that a purchase was begun or restored, and that an ad was shown or finished — coarse location derived from IP address, device and SDK identifiers used for ad delivery, attribution and fraud prevention, the Full Version purchase event, and the diagnostic, crash and performance data reported by **Google's advertising SDK and by Firebase Crashlytics**. The attribution partner in section 6 is part of why device identifiers and product interaction are marked as used for third-party advertising. The crash and performance rows are marked as **not** linked to you, because a crash report carries no user identifier.

Apple gives **tracking** a specific meaning: linking data from this app with data from other companies' apps, websites or offline sources for advertising or advertising measurement, or sharing it with a data broker. Doing that requires permission through the App Tracking Transparency framework. The iPhone app does use that framework, for players treated as adults, so the App Store label does show **Data Used to Track You**. The label describes what may happen if you allow tracking; it does not mean tracking happens without your permission, and it never happens for a player treated as a minor.

On **Google Play**, the Data safety answers cover the same ground: the advertising data and device or other identifiers the AdMob SDK and the attribution partner handle, including the Google advertising ID; the coarse location derived from IP address; the app-activity and device information Firebase Analytics, the attribution partner and the leaderboard service handle; **the crash logs and diagnostics Google's advertising SDK and Firebase Crashlytics produce**; and the purchase state Play Billing handles. Play's form also asks whether data is *shared* with third parties, and OverLit answers yes for the advertising categories, because AdMob is an independent controller rather than a processor acting only on the developer's instructions. Crash reports are answered as collected but **not** shared: Google receives them as the developer's processor, not as an ad network.

What differs between the two forms is not the advertising, which is now the same on both, and not the attribution partner, which is also on both. It is Apple's tracking question and the identifiers each platform provides: Apple's advertising identifier and SKAdNetwork exist only on iPhone, and the Google advertising ID and Play Install Referrer only on Android.

If you ever find that a store label and this policy disagree, please tell the developer at `alekgameshelp2@gmail.com`. The labels are summaries; this policy is the detailed statement, and all of them should say the same thing.

Apple and App Store services are governed by [Apple's Privacy Policy](https://www.apple.com/legal/privacy/) and the [Apple standard terms for apps](https://www.apple.com/legal/internet-services/itunes/dev/stdeula/). Google Play services are governed by the [Google Privacy Policy](https://policies.google.com/privacy).

## 14. Age, Children And Teens

OverLit is intended for players aged **13 and over**. It is not directed to children under 13, and the developer does not knowingly collect personal information from children under 13. It is not enrolled in Apple's Made for Kids programme or Google Play's Designed for Families programme.

During onboarding the app asks you to choose an age range: **13 to 17** or **18 or older**. There is no under-13 option and no path into the game without answering. The app does not ask for a date of birth and does not attempt any age verification, so the answer is self-declared.

That answer is **stored on your device and never transmitted**. It is not attached to any leaderboard record, is not sent as an analytics parameter, and no copy of it exists on any server. What it does is change three things: how the advertising SDK is configured, whether Firebase Analytics runs at all, and whether your scores are published to leaderboards by default.

A player treated as a minor gets non-personalised, Teen-rated ads, is never shown Apple's tracking prompt, is kept away from the adult-only house ad, receives no reminders, sends no OverLit Firebase analytics events of either kind, **sends no crash reports**, and is not published to a leaderboard unless they switch it on themselves. In the two countries in the table below, a player who declared 13 to 17 cannot switch it on at all.

There is no exception to that list. An earlier draft of this document made crash reports one, on the basis of legitimate interests rather than consent; section 7 records why that was wrong about the app and has been corrected.

### Countries with extra restrictions

**The age at which a person counts as a child varies by country, and in several places it is higher than 13.** Where that is so, a self-declared "18 or older" is not always something OverLit can responsibly rely on. The two countries below are handled differently, because what their law actually asks for differs — so this table names what each one narrows rather than treating them as one rule.

| Country | Why | What OverLit does |
| --- | --- | --- |
| **India** | The Digital Personal Data Protection Act treats everyone under 18 as a child. The section that would restrict tracking and targeted advertising to them has not been brought into force, but from **13 May 2027** processing a child's data there needs verifiable parental consent, which OverLit does not operate | A player who has never been asked is **not published to a leaderboard by default**. A player who declared **13 to 17 cannot publish to a leaderboard here at all**, even by turning the switch on — they can still read every board. Beyond that, a player who declared 18 or older is treated as an adult |
| **South Korea** | PIPA sets the guardian-consent threshold at 14, above OverLit's minimum of 13, and a Korean consent cannot be signalled through the available consent mechanisms | **Every player is given the full minor treatment above, whichever band they picked**, and is not published to a leaderboard by default. A player who declared **13 to 17 cannot publish to a leaderboard here at all**, even by turning the switch on, because OverLit's minimum age sits below the guardian-consent threshold and the app operates no guardian-consent mechanism. They can still read every board |

The app determines this from the device's own region settings — on Android, the SIM's country where there is one, otherwise the device's language and region; on iPhone, the device's language and region. Nothing is sent anywhere to work it out. That is a hint rather than a verified location, and it is deliberately only ever used to **restrict**: a wrong guess can give someone the minor treatment who did not need it, never the reverse.

Elsewhere, the position is: in the EEA the age at which someone can consent on their own to services like advertising is set nationally, between 13 and 16. In the UK, the Information Commissioner's children's code treats everyone under 18 as a child and expects marketing profiling to be off by default for them, which is what the 13-to-17 configuration is. OverLit does not operate a parental-consent system and cannot verify anyone's age.

If you are 13 or older but under the age of majority where you live, use OverLit with a parent's or guardian's permission where that is required. Where a player is below the relevant age in their country, the right steps are a parent's or guardian's involvement, the device's own parental controls, or the Full Version purchase, which removes advertising entirely.

If you believe a child under 13 has provided personal information, write to `alekgameshelp2@gmail.com` and it will be dealt with.

## 15. Retention, And How To Delete Your Data

### How long things are kept

**On-device data** stays on your device until you change it, use an in-app reset where one exists, or delete the app.

**Leaderboard board entries have no automatic expiry.** One entry per player per board is kept for as long as the board exists, and boards are archived rather than deleted when scoring rules change — an archived board stays readable indefinitely. An entry is removed when the board's underlying record is erased on request.

**The leaderboard de-duplication ledger expires automatically after 30 days.** Each record carries an expiry timestamp and is deleted by the database's own time-to-live process.

**The private player record, the rate counters and the rating record** are kept for as long as the anonymous identity exists — that is, until erasure.

**Operational and access logs** at Google are kept for the periods Google applies to its own logging by default. Those periods are set by Google rather than configured by the developer.

**There are no backups of the leaderboard database, and that is deliberate.** Point-in-time recovery is switched off and no backup schedule exists, which was verified against the live project on 3 September 2026. It means erasure under section 15 is final the moment it completes: there is no copy of your entries anywhere to restore, and nothing of yours survives the request. The trade is accepted knowingly — it also means a serious operator mistake could not be undone — because an erasure promise that quietly depended on a backup window would be worth less than the recovery would be. If that ever changes, this section changes with it and says how long a backup could still hold your entries.

**Advertising and analytics data** held by Google is retained under Google's own policies and the retention settings of the Firebase and AdMob products.

**Crash reports** are kept by Firebase Crashlytics for **90 days**. Google's own published position is that it holds crash stack traces, extracted minidump data and the associated identifiers for 90 days before it begins removing them from live and backup systems. That period is set by Google rather than configured by the developer.

**Support emails** are kept for as long as reasonably needed to answer the request and keep a record of it.

### Erasing your leaderboard data

**The steps are on their own page: [Delete your OverLit data](https://alekjaltuszyk.xyz/apps/OverLit/delete-data/).** That page is a plain-language summary; where the two differ, this document governs.

The leaderboard service has a single function whose only job is deletion. It hard-deletes **everything** held against your anonymous identity: every board entry on every board, the private player record and its rate counters, the rating record, the de-duplication ledger, and the anonymous Firebase Authentication user itself. Your entries come off the live boards, not merely out of an internal table — a published score is public, so erasing it has to mean erasing what other people can see. The function is deliberately never blocked by the feature's kill switch, because deletion has to keep working even when everything else is switched off.

The one thing it cannot reach is the cached copy of board rows held in **other players'** de-duplication ledgers, described in section 5. Those are never shown on a board or to anybody else; the only way one can resurface is as the replayed result of that player's own earlier submission, and they expire on their own within 30 days.

**The route in the app is one tap**, on both platforms. Open **Settings → Legal → Delete my leaderboard data**. It acts on your own identity directly, so nothing has to be matched and nothing has to be described. It is available whenever leaderboards are available to you, it asks you to confirm, and it cannot be undone. Your local progress, levels and unlocks are not touched — only what the leaderboard service holds.

**By email**, write to `alekgameshelp2@gmail.com` with the subject **"Delete my leaderboard data"**, carrying your leaderboard ID. Your identity is anonymous — no name, no email address, no account — so that ID is the only thing that says which data is yours; **Settings → Legal → Copy my leaderboard ID** puts it on the clipboard. Your nickname is not a substitute: it is drawn from a fixed vocabulary and is not unique. Without the ID the request cannot be actioned, and under Article 11 GDPR a controller that genuinely cannot identify a data subject is not obliged to acquire extra data in order to do so — inventing an identity-linking system to service deletion requests would be worse for everyone's privacy than the problem it solves.

Deleting the app does not remove a published leaderboard entry.

### Everything else

**Local game data:** delete the app, or use the in-app reset controls where they exist.

**Advertising and analytics data held by Google:** use the choices in section 12, and Google's own privacy tools and account controls.

**Purchase records:** these belong to Apple or Google, and their support channels handle them. The developer holds no purchase server and no purchase database.

**Support emails:** ask, from the same address where possible, and they will be deleted.

Requests are answered within one month, as the GDPR requires. If a request is complex that can be extended by up to two further months, and you will be told why.

## 16. Security

Every connection the app makes is encrypted in transit with HTTPS.

For leaderboards specifically: the database denies all direct access from the app, so every read and write goes through server code that validates it. Each request must carry both a Firebase authentication token and a **Firebase App Check** token — backed by Apple's App Attest on iPhone and Google's Play Integrity on Android — which makes it substantially harder to submit scores from anything that is not a genuine copy of OverLit. Scores are checked against plausibility ceilings before they are accepted, submissions are rate-limited per identity, and retried submissions are de-duplicated rather than double-counted. The whole feature can be disabled remotely if it is abused.

Backend administrative access is limited to the developer and protected by the account security of the underlying platform providers.

No app, network, device or provider can be guaranteed to be perfectly secure. If you believe you have found a privacy or security problem, please write to `alekgameshelp2@gmail.com` before disclosing it publicly.

## 17. Your Rights

If you are in the EEA, the UK or Switzerland you have the rights below. They are honoured for everyone, everywhere, regardless of where you live.

- **Access** — ask what is held, and get a copy.
- **Rectification** — have inaccurate data corrected.
- **Erasure** — ask for data to be deleted. Section 15 explains the routes and the one real limitation.
- **Restriction** — ask that processing be limited while a dispute about accuracy or lawfulness is resolved.
- **Portability** — receive data you provided in a structured, machine-readable format.
- **Objection** — object to processing based on legitimate interests. That includes the anti-cheating measures in section 9 and, importantly, **the publication of your score on a leaderboard**. You do not have to write to anybody to exercise that one: **Settings → Legal → Use leaderboards** stops it, immediately and for good, while you keep playing. If you also want what was already published removed, section 15 is the route.
- **Withdraw consent** — for advertising and analytics, at any time, through the routes in section 12.

Two practical notes. First, most of what OverLit knows about you is on your phone and never reaches the developer, so for that data the fastest "access request" is to open the app. Second, for leaderboard data the anonymity cuts both ways: without something that identifies your entry, a request cannot be matched to it. Section 15 explains what to include.

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

Changes will not be made silently or retroactively. When there is a material change — for example a platform gaining an advertising SDK it did not have, switching leaderboards on for the first time, changing what is stored, changing retention, or changing the analytics setup — the app shows the updated documents again before you continue playing and asks you to accept the new version. The app records which version you accepted, and when, on your device.

If a future change would involve a genuinely new kind of data processing, this policy will be updated before that processing begins, not after.

## 20. Regional Information

The practices described above are applied globally, and the rights in section 17 are honoured for everyone everywhere rather than by jurisdiction. This section covers only the specifics that a particular law asks to be stated.

**European Economic Area, United Kingdom, Switzerland.** Sections 9, 11 and 17 are the operative ones: legal bases, international transfers, and your rights. Advertising and analytics rely on your consent, collected through Google's privacy message, which also covers the ePrivacy consent needed to store and read information on your device. Leaderboard records are stored in the EU. The controller is Aleksander Jałtuszyk, Poland; the lead supervisory authority is UODO. UK users may also contact the ICO, and UK transfers rely on the safeguards named in section 11.

In the UK, the Information Commissioner's children's code applies to services likely to be accessed by under-18s and expects marketing profiling to be off by default for them, and expects a child's profile not to be public by default. Players who choose the 13-to-17 band get non-personalised ads with a Teen content cap and are not published to leaderboards unless they choose to be. Players who choose 18 or older are treated as adults, and the app cannot verify that choice.

**United States.** Personal information is **not sold** for money. However: several US state privacy laws define "sale", "sharing" and "targeted advertising" broadly enough that serving personalised advertising through an ad network can fall within them, whether or not any money changes hands. Where that applies, the opt-out is Google's privacy message, described in section 12. Buying the Full Version stops advertising being served to you entirely, but — stated precisely rather than generously — it does not by itself stop the install measurement in section 6, which is about which advert brought you here rather than about showing you more. Refusing in Google's privacy message is what stops that, and it stops the advertising too. No sensitive personal information is collected. The rights in section 17 are honoured for US residents on the same terms as for everyone else, and there is no discrimination for exercising them.

OverLit is an app rather than a website, so there is no browser-level opt-out preference signal such as Global Privacy Control for it to receive. The in-app privacy message and your device's advertising settings are the equivalent controls.

**Teenagers in the United States.** A growing number of states restrict targeted advertising to consumers a business knows to be a minor — Connecticut for 13-to-17-year-olds, Colorado and others for everyone under 18. Because OverLit asks for an age band, it knows when a player has said they are 13 to 17, and configures advertising for that player with personalisation disabled and a Teen content cap. That is the point of asking.

**Children in the United States.** OverLit is not directed to children under 13 for the purposes of COPPA. It offers no under-13 path, asks for no contact information from anyone at any age, and keeps the declared age band on the device. Nothing is knowingly collected from a child under 13, and no parental-consent mechanism is operated because none is needed for a service that does not accept under-13 users.

**Canada, including Quebec.** Quebec's Law 25 requires that the person responsible for the protection of personal information be identified: that is Aleksander Jałtuszyk, reachable at `alekgameshelp2@gmail.com`. Technology capable of identifying, locating or profiling a user is disclosed in sections 5, 6 and 7, and the means of deactivating it are in section 12. There is no automated decision made about you.

**India and South Korea.** See section 14. In South Korea every player is given the minor treatment whichever age band they chose. In India a player who chose 18 or older is treated as an adult; a player who chose 13 to 17 gets the 13-to-17 treatment as everywhere. In both countries scores are not published to a leaderboard by default, and a player who chose 13 to 17 cannot publish there at all.

**Brazil.** Under the LGPD the controller is a small-scale processing agent with no Data Protection Officer appointed; the communication channel for data subjects is the contact in section 21.

**Elsewhere.** The same protections and the same rights apply, and requests go to the same address. Where local law requires a specific contact or a specific right that is not listed here, write to that address and it will be handled.

## 21. Contact

Privacy questions, data-subject requests and deletion requests:

- Email: `alekgameshelp2@gmail.com`
- Support page: [`https://alekjaltuszyk.xyz/apps/OverLit/support/`](https://alekjaltuszyk.xyz/apps/OverLit/support/)
- Telephone: `+48 73 2099027`
- Mailing address: `Aleksander Jałtuszyk, Skrytka Pocztowa 59, UP Warszawa 93, 02-800, Warszawa, Poland`
- Country: Poland
