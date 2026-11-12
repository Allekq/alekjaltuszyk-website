# Circuit demo and shared support review — 2026-11-12

## Before implementation

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Decorative circuit → two browser-memory input bits and computed AND/NOT output. No requests, identifiers, telemetry, cookies or persistent storage added. Support stays optional email to the existing per-app addresses. |
| Lawful processing | No new recipient or processing purpose for support; existing website/support disclosures apply. Demo values are transient local interaction state, not collected by the developer. |
| Choice and age | Input toggles are optional. No age, consent, account or app gate changes. Preserve child-support guidance and sensitive-data minimization. |
| Lifecycle | Demo resets on reload; no saved history or remote data. Preserve recovery/deletion guidance and links where relevant. |
| Security | Native buttons, keyboard operation, no backend or new dependency. Verify all input combinations and support email destinations. |
| Public promises | Replace ambiguous buffer illustration and decorative waveform with a labelled AND → NOT circuit. Support pages share email actions and short app-specific help lists; privacy, terms and deletion links remain available. |
| Release | Website-only changes. No canonical policy-body, version, manifest or app-bundle changes are needed: no new collection, recipient, obligation or consent purpose. No publication authorized. |
| Result | Implement and validate local demo/support changes; prior launch-related owner decisions remain separate. |

## Final review

- The shared diagram is now AND followed by a labelled NOT gate with an
  inversion bubble. Its default is `1 AND 1 = 1; NOT 1 = 0`. The decorative
  waveform was removed. Homepage/directory cards remain static links with the
  same correct diagram; the product page provides native input buttons.
- Browser tests exercised every input pair, including returning to the initial
  state, and asserted output text, intermediate value, wire and pin states.
  Results: `00 → 1`, `01 → 1`, `10 → 1`, `11 → 0`.
- Space, Enter and touch toggles passed. Touch targets are at least 44×44 CSS
  pixels. Reduced-motion mode removes tilt; scrolling never changes logic.
  Reload resets the example. No-JavaScript use shows the correct static example
  and hides inactive controls; support navigation still works.
- Toggling generated no requests and no cookies, local storage or session storage.
  No new SDK, dependency, permission, persistence or remote data flow was added.
- Every app support page now renders the shared email-first guide. Removed large
  draft/template sections and unused clipboard scripts on these pages. Retained
  app-specific sensitive-data guidance, AudioChoices ID/deletion guidance, and
  Logic Gates recovery/child-support details in an expandable section.
- Email and Gmail compose recipients checked against the visible per-app address.
  All app privacy and terms links returned 200. All support pages passed layout
  checks at 320, 768 and 1440 CSS pixels, with additional 390px phone inspection.
  Voice of Self's separate theme needed scoped button colours; fixed and visually
  checked. Removed fictitious iOS-version examples and the unnecessary name
  placeholder from the Voice of Self email draft.
- `npm run check`: zero errors/warnings/hints. `npm run build`: 83 pages and
  pre/post private-boundary checks passed. `npm run check:legal`,
  `npm run check:contact` and `git diff --check` passed. Existing Astro helper
  and bundle-size build warnings remain unrelated to this change.
- No canonical privacy/terms text, effective dates, acceptance versions or app
  manifests changed. Existing disclosures still cover optional email support;
  transient circuit input state creates no new collected-data purpose. No new
  legal release blocker identified from this change. Existing provider/trader
  and territory decisions remain documented in earlier receipts.

The final work is local; remote push/deployment remains with the owner.
