---
name: app-state-truth
description: Use when adding an app, releasing an app, or writing any site copy that counts apps or claims an app is available, live, launched, or on the App Store.
---

# App State Truth

The site must describe the real state of the apps. Counts and availability
claims are derived from data, never typed into prose.

## Files

- Source of truth for the app list:
  `src/config/routes.ts` (`appDirectory`) — the authored data
- Normalized list every component renders from, plus derived counts, numerals,
  plurals, name lists, platform list, role phrasing, status chip:
  `src/lib/appState.ts` (`apps`, and the `AppEntry` type)
- Legal versions per app: `site.config.mjs`
- Discovery/LLM outputs: `src/lib/discovery.ts`, `src/pages/llms.txt.ts`,
  `src/pages/llms-full.txt.ts`, `src/pages/humans.txt.ts`

## Rules

1. Every app gets exactly one `appDirectory` entry with `releaseStage`,
   `platforms`, and `focus`. `releaseStage: "released"` means downloadable from
   a public store today. Nothing else may be called live, launched, available,
   or on the App Store.
2. Never type an app count, a numeral, a plural, or a list of app names into
   prose. Import from `src/lib/appState.ts` instead
   (`appCountWord`, `appCountPhrase`, `platformAppNoun`, `platformNameList`,
   `appNameList`, `releaseStatusSentence`, `directoryChips`).
3. If a phrase you need is not in `appState.ts`, add it there rather than
   hardcoding it in a section.
4. An unreleased app still gets a page, support, and legal routes, but no store
   link, no download CTA, and no "available"/"get the app" wording. Say plainly
   that it is not released yet, and let that line disappear from the data when
   it ships.
5. `platformAppNoun` says "iPhone apps" only while every app is iOS-only. Do not
   reintroduce "iPhone apps" by hand.
6. The owner's role/title phrasing is derived too. The timeline role line reads
   `Independent ${platformNameList} product builder`, where `platformNameList`
   is the deduplicated list of every platform in `appDirectory` ("iOS", then
   "iOS and Android", then an Oxford-comma list). Never type a platform name
   into a role, title, bio, or SEO description that describes the whole
   portfolio. Per-app copy may of course name that app's own platforms.
7. Product claims (pricing, purchases, free unlocks, testing phases) must match
   that app's legal pages under `src/content/legal/`. If a card chip and the
   Terms disagree, the Terms win.
8. Do not invent user numbers, ratings, revenue, awards, or launch dates.

## Adding an app

1. Add the `appDirectory` entry in `src/config/routes.ts`. Required fields:
   `id`, `name`, `description`, `focus`, `pitch`, `chips`, `href`, `iconHref`,
   `external`, `releaseStage`, `platforms`.
   - `shortName` is optional and defaults to `name`. Set it only when the store
     name carries a subtitle, so sentences read "…and AudioChoices" rather than
     "…and AudioChoices: Audiobooks".
   - `theme` is optional and defaults to alternating coral/mint down the list.
   - `pitch` is the showcase headline: the app in one line, in its own voice.
   - `iconHref` goes through `withBase()` and points at
     `public/media/apps/<id>/`.
2. Add its routes, page, support, and legal entries, plus legal versions in
   `site.config.mjs`.
3. Add its pages to `src/lib/discovery.ts` so sitemap and LLM outputs stay
   current.
4. Change no prose. The count, the "N apps" phrasing, the release sentence, the
   `/apps` showcase beat, the grid card, `humans.txt` and `llms.txt` all follow
   from step 1 alone.
5. Render from `apps` in `src/lib/appState.ts`, never from `appDirectory`
   directly — only the normalized list has the defaults applied.

## Releasing an app

1. Flip `releaseStage` to `"released"` and add the store link.
2. Confirm the "not released yet" chip and page notice are gone on their own.

## Validation

- `npm run check`
- `npm run build`
- Grep the built output for stale claims:
  `grep -rniE "four apps|five apps|two panels" dist/`
- Read the homepage, `/apps/`, and `/llms.txt` and confirm the counts match the
  number of cards actually rendered.
