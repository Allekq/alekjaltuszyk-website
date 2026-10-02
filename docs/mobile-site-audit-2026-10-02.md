# Mobile site audit — 2 October 2026

Implemented locally; production preview: http://127.0.0.1:4322/apps/OverLit/.

The audit used the current repository and its production build in the Codex in-app browser. Phone viewport: 390 × 844; additional checks at 320 px, 768 px and desktop width. Other products received an entry-page sanity check, rather than a full flow audit.

## Flow and findings

1. **Open OverLit.** Large animated blurred blooms, a moving scan, and repeating miniature boards added continuous decorative paint. Removed those effects and the page mesh. Shortened the hero, campaign and repeated feature lists. Store actions now fill the phone column. Replaced the 119,197-byte icon with the existing 25,171-byte version. Screenshots below the fold now load lazily.
2. **Read the game rules.** The old pressure scene occupied 2,240 px on a phone. Its explanations started at 6% opacity, and a sticky cell panel covered scrolling text. Replaced it with labelled colour states in normal flow: 787 px. Labels accompany every colour, so the explanation does not rely on colour alone.
3. **Play the demo.** Preserved the game. Its initial HTML now includes a full grid, avoiding the empty board expanding when the script loads. Verified start, a successful tap scoring 10, burnout, and disabled cells after the run. Idle decoration no longer pulses. Static/reduced-motion cells cannot receive keyboard focus; active cells have state labels.
4. **Open Audiobook Choices and inspect its tree.** Its mobile tree had the same pinned/faded-copy problem. Compact screens now show the complete tree followed by readable explanations. Tree section shrank from 2,046 to 1,422 px. Mobile blur, moving auras, texture and decorative loops were removed. The hero is immediately visible on desktop too.
5. **Try the audiobook sample.** Verified that Yes advances the story, Undo returns to the first choice, and Restart resets the answer trail and disables Undo. The interactive sample remains intact.
6. **Check other entry pages.** Homepage, app directory, PlanKept, Voice of Self and Take Me Somewhere showed no obvious entry-layout break or horizontal overflow at the tested phone width. Removed duplicate motion initialization from all three affected app orchestrators, including Take Me Somewhere. Its scroll-driven experience remains enabled; the static mobile treatment is scoped to OverLit and Audiobook Choices.

## Measured reductions

Raw production output, before compression; these are payload and layout measurements, not network load-time benchmarks.

| Measurement | Before | After |
| --- | ---: | ---: |
| OverLit page height at phone width | 9,790 px | 6,137 px |
| OverLit CSS linked by the page | 61,445 bytes | 45,140 bytes |
| OverLit HTML | 36,362 bytes | 27,729 bytes |
| Audiobook Choices CSS linked by the page | 71,299 bytes | 63,737 bytes |

## Validation and limits

`npm run check`: 258 files, zero errors, warnings or hints. `npm run build`: 79 pages generated successfully. `git diff --check` passed. Both target pages have valid internal route and fragment targets. Production demo console had no warnings/errors. Code review identified a potential change to Take Me Somewhere's motion; the behavior was scoped before completion and the reviewer confirmed the correction.

Reduced-motion and no-JavaScript fallbacks were checked in source. This was browser viewport testing, not physical-device Safari testing, a throttled-network benchmark or a complete accessibility certification. Legal disclosures, purchases, support behavior and app destinations were unchanged.

## Screenshot evidence

### Follow-up copy and download cleanup — 2026-10-03

OverLit and AudioChoices now use a consistent **Get the app** button in their
headers, heroes and closing panels. The existing `/get/` routes choose the store
for a recognised phone and retain both store links as a desktop/no-JavaScript
fallback. Removed “Out now” and copy explaining button ordering.

OverLit gameplay copy was checked against the app repo's live shared symbols:
`ArcadeFamilyCatalogV1` (families/rulesets), `CampaignAreaCatalogV2` (star-gated
campaign areas), `DailyChallengeDefinitionV1` / `dailyStarsForMetricValueV1`
(generated daily challenges and stars), and `ApplicationDailyRewardCopyV1`
(daily streaks and themes earned across distinct days). The page now explicitly
describes offline daily challenges, replaying for stars, streaks and theme rewards.
It avoids slot counts, level counts, reward thresholds and release-date wording.
Discovery copy follows the same facts, and no longer describes optional online
leaderboards as incompatible with the product. Public gameplay, data collection,
purchases and legal documents are unchanged; the closing privacy summary is
shorter and uses the existing disclosures.

Follow-up validation: `npm run check` reported zero errors, warnings or hints;
`npm run build` built all 79 routes. Mobile (390px) and desktop (1440px) layouts
were checked in the production preview with no horizontal overflow. Download
links on both product pages resolve to their own `/get/` route; the OverLit
chooser showed both configured store destinations. No browser errors or warnings
were recorded on the updated OverLit page. The earlier size measurements describe
the initial cleanup, before this follow-up copy pass.

![OverLit single download action](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/10-overlit-download-cleanup.png)

![OverLit daily challenges](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/11-overlit-dailies.png)

### OverLit entry before

![OverLit entry before](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/01-overlit-before.png)

### OverLit entry after

![OverLit entry after](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/05-overlit-after.png)

### Pressure section before

![Pressure section before](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/02-pressure-before.png)

### Pressure section after

![Pressure section after](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/06-pressure-after.png)

### Audiobook tree before

![Audiobook tree before](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/04-tree-before.png)

### Audiobook tree after

![Audiobook tree after](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/09-audiochoices-tree-after.png)

### OverLit small phone screenshot rail

![OverLit small phone screenshot rail](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/07-overlit-small-phone.png)

### OverLit desktop

![OverLit desktop](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/08-overlit-desktop.png)

### App directory on mobile

![App directory on mobile](/Users/alekj/.codex/visualizations/2026/10/02/01a0fe64-c07f-7760-a068-9fac7a9f8c82/mobile-site-audit/directory-mobile.png)
