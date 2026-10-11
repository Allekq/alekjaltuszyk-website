# Age suitability in AudioChoices

AudioChoices is an interactive audiobook app published by **Alek Jałtuszyk**. This page is written
for a parent or guardian deciding whether it suits a particular young listener, and for anyone —
including a store reviewer or a regulator — checking that its age rating is an honest one.

It says what the stories contain, what the app's age setting does, and, just as plainly, what that
setting does not do.

**Last updated 25 September 2026.** The examples and advisory ages below were checked against the
current public catalogue. The app's library and each store listing are the current sources for what
is available and for the rating shown in your country.

## Where the app is, and what that means for this page

AudioChoices is on the **App Store** for iPhone and iPad and on **Google Play** for Android. Where
the two platforms differ in what the app can know about a listener, both are described, because the
difference is the point.

## The rating, and why the number moves between countries

On the App Store, AudioChoices is rated **13+**. That rating is calculated by Apple from a
questionnaire about what the app contains. It is a statement about the app, not a judgement about
any individual child.

The same answers produce different numbers in different rating systems, and that is normal rather
than a contradiction. On Google Play, one IARC questionnaire produces every regional badge at once —
ESRB in the Americas, PEGI in Europe, USK in Germany, ClassInd in Brazil, ACB in Australia, GRAC in
Korea — and those bodies weigh the same answers differently. PEGI in particular is frequency-blind
about violence: any realistic violence at all reads as PEGI 16, however rare it is. So where a badge
comes from PEGI, or from the IARC questionnaire behind it, expect it to sit above Apple's number.

That is a description of how the systems work, not a prediction of a specific badge in a specific
country. Where AudioChoices carries a rating you can see, the store showing it is the authority on
what it means.

## What the stories actually contain

The published catalogue includes survival stories, contemporary dramas, action stories and retold
myths. Most are written for teenagers and adults. Each book carries its own advisory minimum age,
which the library shows beside the book; that age can differ from the store's rating for the app as
a whole. The catalogue changes, so the app's library is the current list of books and their ages.

What a listener will actually meet:

- **Confinement, and dread that lasts.** In *Deep Dark*, a cave tour is cut off by a collapse and
  rising water. *Substrata* sends a group into a decommissioned missile silo, and *Slingshot* leaves
  two people in a damaged spacecraft. These stories put people under pressure for long stretches.
- **Violence, mostly fantasy and myth.** *Emberfall* opens with a city under attack by a dragonlord's
  army. *The Swallowed God* retells the myth of a father who swallows his children, while *The
  Stolen Spring* begins with Persephone being taken into the underworld. The app also has other
  Greek and Norse retellings; their content differs by book.
- **Real-world grief and illness, treated seriously.** *Best Interests* follows a daughter deciding
  how to care for her mother after a hospital stay. The quieter stories can still upset a younger
  listener without relying on frightening scenes.
- **Coercion, and choices with a cost.** Adults use position, money and information against people
  with less of all three. Every book puts a decision to the listener at intervals and then holds them
  to it; several have endings in which the right-seeming choice still costs somebody something.

And what is ruled out by policy, whatever gets written next:

- **No prolonged, graphic or sadistic violence, and no explicit sexual content or nudity.** These are
  not a rating the app might grow into; they cannot be published on the App Store at all.
- **No gambling, no simulated gambling, no loot boxes**, and no randomised rewards of any kind.
- **No adverts.** There is no advertising SDK in the app and no advertising identifier is collected.
- **No chat, no messaging, no profiles, no strangers.** A listener can give a book a star rating from
  one to five, and the average is shown on the book; that number is the only thing any listener
  contributes, and there is no free text anywhere for anyone to write into.
- **No open web browsing.**

The app's age rating reflects the catalogue as a whole. Sustained dread, peril and serious subjects
may matter more to an individual child than the number on a store badge suggests.

AudioChoices does sell books and a subscription through the store's own purchase system. The section
on parental controls below covers how to put an approval step in front of that.

## Every book carries its own minimum age

Each book has an advisory minimum age set by its author, and the library offers a listener only the
books at or below the age the app has for them. That number is guidance from the person who wrote
the book. It is not a classification and not equivalent to a film or game certificate.

One thing it does **not** do is let a book go further than the app's own rating. Apple and Google
rate an app on the content it contains, not on who can reach it, so a book needing a higher minimum
age would raise the rating of the whole app for everybody. Sharing an age with AudioChoices
therefore unlocks nothing more mature than what the 13+ rating already describes. The rating is a
ceiling over the entire catalogue, and no age setting lifts it.

For example, *Substrata* and *The Swallowed God* carry an advisory minimum age of **16** in the
public catalogue. A listener the app has as 13 is not offered those books. Where the app knows
nothing about a listener, it assumes 13, so books above that age are hidden by default.

## How the app gets a listener's age

There are two routes. Which one a listener ends up on depends partly on the phone and partly on the
listener.

**Nothing is asked until somebody taps.** The app never consults Apple or Google on its own — not at
launch, not in the background, not on a schedule. During setup, the age step shows a button reading
"Share my age range" with "I'd rather pick it myself" underneath it, and both are live. A listener who
does not want their store account consulted can take the second one, and no request is ever made.

**From the platform, where the listener asks for it and the phone offers one.** On iPhones and iPads
running iOS 26 or later, and on Android where Google Play supports it, tapping the button makes the
app ask the platform which age *range* the listener falls into. The device then asks them whether to
share it. What comes back is a range and nothing else — "13–15", "18 or over". No birth date, no
name, no identity document, no account details, and nothing about how they use any other app. The app
keeps the **bottom** of the range, so somebody reported as 13–15 is treated as 13, and it shows on
screen which range it received and where that range came from.

**A range the listener picks.** Earlier releases offered only 13–15, 16–17 and 18 or over, with the adult band pre-selected. The planned builds carrying legal acceptance version 13 include **Under 13** and require an explicit initial choice. Where no platform range is held, an unrestricted listener can use this route instead of requesting a platform answer, or after an unavailable lookup. Confirming Under 13 blocks ordinary app access; it does not advance onboarding.

**Declining a platform request is different from declaring Under 13.** An initial decline or verification-required result supplies no eligible processing answer. Existing conservative content defaults apply, but that result cannot remove a previously known-under-13 restriction. An unavailable or unsupported API is likewise never evidence that a restricted listener is old enough.

**Apple and Google can both report the youngest band.** Apple represents a range below the first requested gate with a missing lower bound; it does not mean no information was shared. The planned update corrects the earlier mapping, normalizes this to the youngest band and blocks access. Google's normalized child range also blocks access. The app never rounds a child range up to its minimum audience age.

**Correction after a restriction requires the platform.** There is no manual re-pick or cached-band bypass. Use the access screen's check button after correcting account information or completing a store verification. A fresh range starting at 13 or above resumes unfinished onboarding or the remaining steps before app access. Declined, unsupported, unavailable and still-under-13 results leave the restriction in place. On a device without a supported age API, this means no in-app correction route. Support, data-deletion requests and subscription management remain available; saved progress and purchase records are retained. These are planned binary changes, not protections retroactively added to older installs.

**Where the phone gave a range, the app goes by the range.** Settings has a "Listener age" row that
names the range and the account it came from — and on those devices it is not an editor. There is no
picker over a shared range, and a range set before the phone ever answered does not raise what the
app acts on. A range that looks wrong is corrected in the phone's own account (on iOS: Settings ›
[your name] › Personal Information › Age Range for Apps), then re-read with the "Check my age range"
control in AudioChoices' Settings or on the access screen.

**Where no range was shared and access is unrestricted**, Settings can offer a manual age editor. Ordinary rechecks preserve a narrower manual choice. Recovery from an under-13 restriction instead adopts the new eligible platform range, replacing the earlier choice so it cannot re-block the app after restart.

### Two limits, stated rather than left out

**This is not a parental control, and it is not age verification.** The app performs no age check of
its own: it asks for no birth date, no document and no account details. Where a range comes from
Apple or Google, *they* established it — possibly from a guardian's declaration, possibly from a
checked ID — and the app sees only the range and a label describing it. Where no range is available,
the age is self-declared and unverified.

**It decides what is offered, and nothing else.** It never gates playback, and it never gates
purchases or anything already unlocked. It is not locked behind a passcode, and a listener who wants
to change it can do so in a few seconds. It curates the shelf; it is not a barrier, and it is not a
substitute for your own judgement.

There are two places where an age set by hand is limited. The first is everywhere: **where the phone
has shared a range, the app will not act on anything above the bottom of it** — so an older setting
of 40 beside a confirmed "18 or over" means the app works to 18. The second is narrower: where the
platform tells the app that a law requiring age assurance applies to that listener *and* no range was
confirmed, the app will not act on anything above 13. In both cases the listener's own number is
still stored and still shown to them; it is simply not acted on above the limit, and where it is
*lower* than the range it is still what the app works to, because that only ever narrows the shelf.
The app never works out where anybody is in order to decide the second limit: no location permission,
no IP lookup, no guess from language, time zone or SIM. It relies solely on the platform saying so.
(That sentence is
about *this* decision only. The app does read the region already set in the phone's own settings —
Settings › General › Language & Region on iOS — to answer a different question, described in the next
section and in section 10 of the Privacy Policy. That is a setting your phone already holds, not a
location reading.)

That reliance is also the limit of the *second* rule, and it is worth setting out plainly rather than
summarising. (The first rule needs none of this: it depends on the phone having shared a range and on
nothing else.)
On iPhones and iPads below iOS 26 there is no such signal at all. On iOS 26.0 and iOS 26.1 the phone
offers an age range but not that signal, so on those two releases nothing is capped by the second
rule — though on 26.0 and 26.1 the range itself is still shared, and the first rule still applies to
it. From iOS 26.2
the phone answers the question and the app acts on the answer, including a "no", which lifts the
limit again. **But because the app never re-asks the phone on its own, a device that updates out of
26.0 or 26.1 keeps the old answer until somebody uses "Check my age range" in Settings once** — an
install set up on either of those two releases stays uncapped after the update until that happens.
On Android, Google Play tells the app one thing here and only in one situation — that age
verification is required and the listener has not yet completed it with the store. Play has no signal
meaning the opposite and stops saying this once the verification is done, so on an Android device
where Play has never reported an outstanding verification nothing is capped; where it has, the app
keeps that answer. In every case, whatever the app was last told is what stands until "Check my age
range" is used in Settings.

## The age never leaves the device

Whichever route it came from, the age stays on the phone. It is not sent to any server, it is not
attached to the app's anonymous installation identifier, and it is never used for advertising,
marketing or profiling — Apple's and Google's own terms for these age features forbid exactly that,
and this app does not do it. Asking the phone for a range tells Apple or Google nothing about what
anybody listens to.

The age has one further use, entirely on the device: in the regions where the app asks permission
before sending any usage data at all, a listener the app has as under 16 is not asked that question,
and Google Analytics never starts for them. Which regions those are is decided from the region set in
the phone's own settings, as described above; the age itself is never part of that or any other
transmission.

Clearing the app's data in Settings deletes the age, where it came from, when it was last checked
and the range itself. It deliberately keeps one thing: the yes-or-no answer about whether the store
says an age check is required here. Without that, clearing and then typing a new age would be a
two-step way around the limit described above, since the age row sits on the same screen as the
clear control — so it stays, the confirmation dialog says so before anybody clears, and only the
store saying otherwise removes it. Clearing also cannot delete the range held by the phone, which
belongs to the phone rather than to this app and can be shared again next time.

The full account is in section 14 of the
[AudioChoices Privacy Policy](https://alekjaltuszyk.xyz/apps/AudioBookChoices/privacy-policy/).

## What a parent can actually use

The real controls belong to the platforms, and unlike an in-app setting they are enforced:

- **Apple — Screen Time.** Settings › Screen Time › Content & Privacy Restrictions sets the highest
  app rating allowed on the device and can block installing or deleting apps. Through Family Sharing,
  **Ask to Buy** can be turned on for a child's account so that downloads and purchases come to you
  for approval. Exactly what each setting does is Apple's to define and Apple's to change; check
  Apple's own Family Sharing and Screen Time documentation rather than taking this page's word for
  it. What is worth knowing in general is that an app's rating and a parent's approval are separate
  mechanisms — a rating on its own does not always stop a download.
- **Google — Family Link.** Family Link can set content-rating limits for Google Play and can be
  configured to require a parent's approval for downloads and for purchases. As above, the details
  are Google's, and its
  own documentation is the place to confirm them.
- **Purchase approval.** AudioChoices has in-app purchases. If you do not want a child spending, turn
  on purchase approval in the store account — the app's age setting has no effect on purchases
  whatsoever.
- **Volume limits.** Worth setting for any listening app: the reduce-loud-sounds setting on iOS, or
  the equivalent on Android.

This page deliberately does not tell you that AudioChoices is suitable for your child. Whether
sustained dread, confinement, real grief and choices with a cost are right for a particular
thirteen-year-old is a judgement only you can make. What is written above is meant to give you enough
to make it, including the parts that do not flatter the app.

## Questions, or a book that seems wrongly rated

Tell us, and we will look at it. The
[AudioChoices support page](https://alekjaltuszyk.xyz/apps/AudioBookChoices/support/) has the ways
to get in touch, or write directly to **audiochoicesaudiobooks@gmail.com**.

---

The binding texts are section 14 of the
[AudioChoices Privacy Policy](https://alekjaltuszyk.xyz/apps/AudioBookChoices/privacy-policy/) and
section 12 of the
[AudioChoices Terms of Use](https://alekjaltuszyk.xyz/apps/AudioBookChoices/terms-of-use/). This page
is a plain-language summary of them and adds nothing to them. Where it and they differ, they govern
and this page is what gets fixed.
