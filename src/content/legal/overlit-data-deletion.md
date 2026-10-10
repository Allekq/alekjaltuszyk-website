# Delete your OverLit data

OverLit is an iPhone and Android game published by **Alek Jałtuszyk**.

Game progress and settings are stored on your phone. Online leaderboard records are separate,
and the game offers a control to request deletion of those records. Advertising, attribution,
analytics and crash-reporting providers also process data as described in the
[Privacy Policy](https://alekjaltuszyk.xyz/apps/OverLit/privacy-policy/); the leaderboard control
does not erase all information held by those providers.

## Before that: you can stop new scores being posted

**Settings → Legal → Use leaderboards.** Off turns the feature off entirely — no scores published,
no boards shown, no nickname — while you keep playing. Players who chose the 13-to-17 age range
start in a read-only state instead: they can see every board, and nothing of theirs is published
unless they turn publication on.

That stops anything *new* being published. To remove what is already there, use one of the two
routes below.

## In the game — one tap

Open **Settings → Legal → Delete my leaderboard data**, and confirm.

It acts on your own identity directly, so nothing has to be matched or described. It cannot be
undone.

Remediation builds with privacy version 3.6.0 make deletion and ID copying available independently
of gameplay progress, using an existing identity. Deletion does not create a new identity just to
delete it. Older builds may hide the row until the leaderboard feature unlocks, even where an
earlier installation created an identity; use the email route if it is unavailable.

Prepared version 3.7.0 retains these controls and adds server-side protection against delayed
requests recreating the deleted identity. Once the matching backend is active, a verified
request blocks further writes first; interrupted cleanup stays pending and is retried by a
server process. A lost connection or failed response in the app can precede later completion.
These changes are prepared for release; this notice alone does not deploy them or update an
older installed app.

## By email

Open **Settings → Legal → Copy my leaderboard ID**, then email **alekgameshelp2@gmail.com** with the
subject **"Delete my leaderboard data"** and paste the ID in.

Your leaderboard ID is a pseudonymous identifier: records can be associated with it even
though it does not contain your name or email address. Save it before uninstalling if you may
need to make a later request.

**If you have already uninstalled**, you can email without reinstalling and include a previously
saved leaderboard ID. If you do not have it, explain that in your request. A generated nickname
is not unique and cannot by itself establish which records are yours. Without sufficient
information to identify the records and verify the request, we may be unable to delete them.
Do not send identity documents or unrelated sensitive information in an initial email.

Requests are answered within one month. For a complex request, we may extend by up to two further
months and tell you why within the first month.

## What is deleted

The leaderboard erasure process removes the active board entries, nickname, private player
record, rating record, submission ledger and Firebase anonymous-auth identity associated
with the ID. Published entries are removed from the live boards. The retained copies and
provider processing described below are separate.

## What is kept

**Your game progress, levels, stars, unlocks and settings.** These are not on a server at all —
they are on your phone. Deleting the app removes them. Erasing a score does not cost you your
campaign, deliberately.

**Purchase records**, which belong to Apple or Google Play and are handled by their support
channels.

**A minimal private suppression record in the prepared deletion service.** This contains the
leaderboard ID, request time, pending/completed status, retry time while pending and completion
time. It prevents delayed writes from recreating the deleted identity. It contains no nickname
or score and is not used for advertising or profiling. It remains personal data. No automatic
expiry is configured while safe removal conditions are unverified; necessity and removal
conditions require review. This does not justify indefinite retention of other records.

**Temporary cleanup work records in the prepared service.** While cleanup is pending, protected
work records may hold board identifiers and document references, which can include pseudonymous
identifiers, so cleanup can resume without repeating completed batches. They contain no nickname
or score and are removed when their tasks finish. The separate suppression record above remains
subject to its retention review.

**Operational logs and provider-held data.** These have their own retention periods and
rights-request processes described in the Privacy Policy. The leaderboard control does not
erase advertising, attribution, analytics or crash-report records.

**Legacy backend response copies and copies already delivered to other players.** Older backend
versions stored copies of returned board rows in submission ledgers. The prepared backend stops
adding those copies and removes legacy response fields during erasure in resumable batches,
while preserving other players' acceptance metadata and scores. That cleanup requires the matching
backend to be active. It cannot recall a response already delivered to another device. Section 15
of the Privacy Policy explains these distinctions and the applicable retention.

## Retention if you do nothing

Board entries have no automatic expiry — an entry stays until it is erased. **Deleting the app does
not remove a published leaderboard entry**; use one of the two routes above.

---

The binding text is section 15 of the
[OverLit Privacy Policy](https://alekjaltuszyk.xyz/apps/OverLit/privacy-policy/). This page is a
plain-language summary of it and adds nothing to it.
