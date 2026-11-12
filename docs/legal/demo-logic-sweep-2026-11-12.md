# Website demo logic review — 2026-11-12

## Before implementation

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Browser-memory demo state only; pausing retains the existing score and timers until resume or reload. No new storage, requests, identifiers, recipients or logs. |
| Lawful processing | No new processing purpose or collection by the developer. Existing website disclosures remain applicable. |
| Choice and age | Optional demos; no age, consent, account, permission or purchase changes. |
| Lifecycle | State still disappears on reload. Hidden tabs pause rather than falsely complete a run. |
| Security | No backend or dependencies. Check win/loss boundaries, pause/resume and demo outputs in the browser. |
| Public promises | OverLit currently reports “Survived” at 0.0 seconds when hidden; correct this to a paused run. Check compass headings against needle angles, circuit truth values, and branching-story outcomes. |
| Release | Website demonstration corrections only. No policy-body, version, manifest, app acceptance or app-bundle changes are warranted. Remote publication remains with the owner. |
| Result | Implement corrections and record final verification below. No new legal blocker from these demo changes; earlier launch decisions remain separate. |

## Final review

- Reproduced the OverLit bug in the built site: hiding the tab immediately after
  starting returned `Survived. Final score 0.` with elapsed time `0.0`.
  Hidden tabs now pause, disable cells and show a Resume button. Returning to
  the tab does not automatically restart the timer. Resuming keeps the existing
  score, cells and elapsed time; Play again resets the run.
- The game now carries phase/spawn timer remainders forward, and caps the last
  simulation step at the survival deadline so a cell cannot burn out after it.
  Browser clock tests verified a 30-second hidden interval leaves the paused
  state unchanged, resume continues time, an uncleared cell loses, and clearing
  cells wins at 25.0 seconds but not at 24.9 seconds. Keyboard resume passed.
- The Take Me Somewhere default compass label now matches its northwest
  needle (`332°`) before JavaScript and with JavaScript disabled. Rounded
  bearings stay in 0–359 degrees; angle unwrapping preserves the short turn
  after multiple revolutions. Browser tests checked cardinal labels and needle
  angles across three complete rotations, plus reduced-motion and no-script
  defaults. The OverLit static fallback also remained correct in both modes.
- Rechecked the Logic Gates illustration and every input pair in the browser:
  `00 → 1`, `01 → 1`, `10 → 1`, `11 → 0`, including intermediate AND values,
  input labels and all wire/pin states. No further circuit contradiction found.
- Walked all eight AudioChoices demo paths. Every ending was reachable after
  exactly three answers; undo restored the preceding question and progress;
  restart cleared history and disabled undo. Checked every planner time/vibe
  option against its selected state and corresponding readouts. No JavaScript
  errors were observed in those checks.
- Visually inspected the paused board at 390px and 1440px widths; Resume is
  visible, keyboard-operable and at least 44px tall, with no horizontal overflow.
  Checked 754 internal links in generated HTML: no missing file/route targets.
- `npm run check` passed with no errors, warnings or hints. `npm run build`
  generated 83 pages and passed both private-boundary checks. Legal manifest
  consistency and contact-address checks passed. Existing Astro dependency and
  bundle-size warnings remain unrelated to these changes.
- Final disclosure decision: these are browser-only demonstration corrections,
  with no new collection, retention, provider, purchase or permission behavior.
  Policies, legal versions, manifests and app acceptance do not need changes.
  This sweep covers website examples and navigation, not a new audit of every
  native app feature or a certification of legal compliance.

Changes are committed locally; remote push and publication remain with the owner.
