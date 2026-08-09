# Delete your OverLit data

OverLit is an iPhone and Android game published by **Alek Jałtuszyk**. This page explains how to
have the data OverLit holds about you erased, what erasure covers, and what is kept.

This is a procedural page, not a legal disclosure. The binding text is section 14 of the
[OverLit Privacy Policy](https://alekjaltuszyk.xyz/apps/OverLit/privacy-policy/), and this page
does not add to it or take anything away from it.

## The short version

Almost everything OverLit knows about you never leaves your phone, and deleting the app deletes it.
The only data held on a server is what the online leaderboards need, and there is a button in the
game that erases all of it.

## Route 1 — in the game. This is the reliable one.

Open **Settings → Legal → Delete my leaderboard data**, and confirm.

It acts on your own identity directly, so nothing has to be matched and nothing has to be
described. It cannot be undone.

The row appears once leaderboards are available to you, which is from level 5. If you have never
reached that point, no leaderboard identity was ever created and there is nothing on any server to
delete.

## Route 2 — by email, if you have already uninstalled

Write to **alekgameshelp2@gmail.com** with the subject **"Delete my leaderboard data"**.

Your leaderboard identity is anonymous — no name, no email address, no account — so the email on
its own does not say which identity is yours. Include:

- the **nickname** you appear under on the board,
- **which board** you appeared on, and
- your **score** on it.

That is normally enough to find the entry. If you rolled a new nickname after your last score,
say so, because only the current one is stored.

If no match can be made, the request cannot be actioned. Under Article 11 GDPR a controller who
genuinely cannot identify a data subject is not required to collect extra data in order to be able
to — and building an identity-linking system so that deletion requests can be serviced would be
worse for everyone's privacy than the problem it solves.

Requests are answered within one month, as the GDPR requires. If a request is complex that may be
extended by up to two further months, and you will be told why.

## What is deleted

Either route runs the same server function, and it hard-deletes **everything** held against your
anonymous identity:

- every board entry on every board, including archived boards — your entries come off the live
  boards, not merely out of an internal table,
- the private player record and its rate counters,
- the overall rating record,
- the submission de-duplication ledger,
- the anonymous Firebase Authentication user itself.

The function is deliberately never blocked by the leaderboard kill switch, because deletion has to
keep working even when everything else is switched off.

## What is not deleted, and why

**Your game progress, levels, stars, unlocks and settings.** These are not on a server at all —
they are on your phone and always have been. Deleting the app deletes them. Deleting your
leaderboard data does not touch them, which is deliberate: erasing a score should not cost you
your campaign.

**A copy of your nickname and score inside other players' de-duplication ledgers.** When somebody
submits a score, the server caches that board's top ten in a private record belonging to *them*,
so a retried submission returns the same answer instead of being counted twice. If you were in the
top ten at that moment, your nickname and score are in that copy. Deletion cannot reach into
another player's record. **These copies expire automatically after 30 days** by the database's own
time-to-live process, and they are never shown to anyone.

**Purchase records.** These belong to the store you bought through — Apple or Google — and their
support channels handle them. There is no purchase server and no purchase database on this side.

**Operational and access logs at Google.** Retained for the periods Google applies to its own
logging by default. Those periods are set by Google, not configured by the developer.

## Retention, if you do nothing

Board entries have **no automatic expiry**. One entry per player per board is kept for as long as
the board exists, and when scoring rules change a board is archived rather than deleted — an
archived board stays readable indefinitely. An entry goes when it is erased on request, and not
before.

**Deleting the app does not remove a published leaderboard entry.** Use one of the two routes
above.

The de-duplication ledger expires on its own after 30 days. The private player record, the rate
counters and the rating record last as long as the anonymous identity does — that is, until
erasure.
