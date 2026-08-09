# Delete your Audio Book Choices data

Audio Book Choices is an iPhone and Android app published by **Alek Jałtuszyk**. This page explains
how to have the data it holds about you erased, what erasure covers, and what is kept and why.

This is a procedural page, not a legal disclosure. The binding text is section 13 of the
[Audio Book Choices Privacy Policy](https://alekjaltuszyk.xyz/apps/AudioBookChoices/privacy-policy/),
and this page does not add to it or take anything away from it.

## The short version

There is no account here — no name, no email address, no password, no sign-in. Your listening
progress, your choices, the endings you reached and your settings never leave your device at all.
What is held on a server is a small set of records keyed to an anonymous installation identifier,
and there is a control in the app that erases the deletable part of it.

## Route 1 — in the app. This is the reliable one.

Open **Settings** and use the **data-deletion control** there.

It deletes the deletable server-side records held against your installation's anonymous
identifier, without you having to describe or match anything.

Data held **on the device** is separate. The "clear data on this device" control sits beside it,
and deleting the app removes that data too.

## Route 2 — by email

Write to **alekgameshelp2@gmail.com** with the subject **"Delete my data"**.

Because no name or email address is attached to your data, the request needs your installation's
**anonymous identifier**. The app shows it in Settings so you can copy it. Without it there is no
way to tell which records are yours and the request cannot be actioned — which is a real limit of
this route once the app has been uninstalled, because the identifier lives inside the app.

Requests are answered within one month, as the GDPR requires. If a request is complex that may be
extended by up to two further months, and you will be told why.

## What is deleted

- your **star ratings and votes**,
- the other server-side records held against your identifier that are not covered by the retention
  exceptions below.

You will be told plainly which records were kept.

## What is kept, and why

**Purchase, subscription and transaction records.** Kept for as long as they are needed to give you
the access you paid for, and to meet accounting and tax record-keeping obligations under Polish
law. Because a purchase can be restored years later, and because tax records must be retained,
these are **not deleted on request**, and there is no automatic time-based deletion of them.

**A minimal record that this installation has used its free unlocks.** Without it, deleting data
would reset the three free unlocks and could be repeated indefinitely, which would make the free
tier meaningless. Kept on legitimate interests under Art. 6(1)(f) GDPR, and it is minimal: the
identifier, and the fact that its free unlocks were used.

**The anonymous Firebase Authentication record itself.** It cannot be removed while the retained
records above still need that identifier to preserve paid access, process refunds and prevent
abuse.

**Per-book milestone totals.** These are running counts of events — how many times a book was
started, how many times it was finished — held with no identifier attached. Once the record linking
your installation to a milestone is deleted, nothing remains that connects any number in those
totals to you, so there is no personal data left in them to erase. This is a deliberate choice
rather than a technical limit: the link is destroyed rather than used to subtract from the totals,
because subtracting would mean keeping a per-person listening history precisely in order to be able
to undo it.

**Operational and access logs.** Firebase Authentication keeps logged IP addresses for a few weeks;
Cloud Functions keeps request IP addresses temporarily; the ordinary Cloud Logging bucket is kept at
Google's default 30 days. Google-required administrative and system audit logs can be retained for
400 days and cannot be shortened by the developer. Cloudflare R2 per-bucket operations metrics are
available for 31 days.

**Support emails.** Kept for as long as is reasonably needed to answer the request and keep a
record of it. Ask, from the same address where possible, and they will be deleted.

## Two things people expect this to do, and it does not

**Deleting your data does not cancel a subscription.** Subscriptions are managed by Apple or
Google and must be cancelled there. See the
[Terms of Use](https://alekjaltuszyk.xyz/apps/AudioBookChoices/terms-of-use/).

**Deleting the app does not delete the server-side records.** Use one of the two routes above.
