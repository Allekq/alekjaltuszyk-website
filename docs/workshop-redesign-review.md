# Living workshop redesign — review checkpoint

2026-10-23. Local implementation on `codex/living-workshop-homepage`.
The earlier living-workshop spec and plan describe the first pass. This checkpoint
implements the subsequent feedback and supersedes their visual decisions.

## What changed

- The hero is now an original miniature island that assembles during a short
  native scroll: path and bridge, workshop and beacon, then trees and a traveller.
  The desktop composition stays in view; on phones only the scene stays in view.
  A keyboard/touch button finishes the world without scrolling, and the completed
  sequence offers a replay. The earlier exploded pocket device has been removed.
- The narrow phone header stays in two rows. Short landscape viewports show the
  completed world without a sticky track. The island camera adapts to tall canvases.
- A reduced-motion gallery overflow bug is fixed: project links now contain their
  absolutely positioned screen-reader labels without relying on a 3D transform.
- Experience follows a left-hand chapter rail with alternating chapters. A seeded
  terrain, gameplay diorama and mobile interface studies accompany the existing
  public text. The diorama is labelled as an illustration; team attribution stays
  in the Roam text.
- Skills have dimensional visual demonstrations and native detail disclosures.
  The larger illustrated Tab key has a physical press animation and unfolds the
  exact recognition text from `siteConfig.identity.cursorRecognition`.
- The homepage app gallery and `/apps/` grid share `ProjectCard` and CSS object
  illustrations. The requested order is authored once in `appDirectory`; rendered
  lists, counts, platform wording and discovery text derive from `appState`.
- Root and directory use the warm workshop shell. Individual product routes keep
  their original components and dark theme. Navigation and store destinations
  have not changed.

## Rendering and fallback contract

`spatial.ts` uses one WebGL2 context for all views, copying the current render into
local presentation canvases. Models are constructed when first visible. Only
visible scenes render, frames stop at rest, hidden documents stop rendering, and
resources are disposed on non-persisted page exits. A persisted page resumes on
`pageshow`. Pixel ratio is capped at 1.5, or 1.25 for coarse pointers.

Reduced motion applies controls immediately and keeps scroll/pointer geometry
still. The hero displays a completed world without extra scroll distance.
The browser's Save-Data preference skips the renderer download. No-JS,
missing WebGL2, failed module loading and lost context retain local WebP images
rendered from the same models. A lost context keeps the fallback until the next
navigation. Native scrolling, links and details do not depend on WebGL.

The Three.js module is loaded separately on pages containing spatial views. The
app directory does not request it. The renderer's production chunk is around
589 kB before compression (152 kB gzip); this is the main loading tradeoff of the true 3D work.
No fonts, models, environments or textures load from a third-party host.

## Legal-impact review receipt

The dependency addition triggered `skills/legal-update-sync/SKILL.md`. Before
implementation the planned integration was reviewed as local visual rendering;
the final implementation was checked against that boundary.

| Item | Before → after, evidence, and decision |
| --- | --- |
| Data flow | Canvas illustrations → a locally bundled Three.js renderer. Pointer position, viewport and scroll progress remain transient browser memory. No fetch, beacon, analytics, account, upload, identifier or telemetry code was added. All scene geometry, lighting and interface textures are generated locally; fallback assets are served by the existing site host. |
| Choice and lifecycle | No new permission, storage or consent flow. Rendering stops when hidden/idle and is skipped for Save-Data. No retained visitor state, export or deletion flow. |
| Security | No backend, credential, form, authentication or new external embed. Existing app/store links remain canonical. |
| Public promises | Existing public profile and product descriptions retained. New scenes are illustrative. Checked general site privacy §§1–3 and §6 and site terms §§2, 4–5. No processing or purchase disclosure changed. Three.js MIT notice is distributed at `public/licenses/three.txt`. |
| Release | Local source/build only; no deployment. Legal documents, versions, manifests and app acceptance gates are unchanged. |
| Result | No disclosure change required: the added dependency only renders local geometry and creates no new recipient, persistent data, processing purpose, permission or product promise. No legal synchronization blocker identified within this visual scope. |

## Validation

- `npm run check`: no errors, warnings or hints.
- `npm run build`: static output and both publication-boundary checks pass.
- `npm run check:private` and `npm run test:private`: pass.
- `npm run test:workshop`: motion settling, reduced motion, refresh-rate behavior,
  bounded scroll progress, deterministic terrain and gallery endpoints pass.
  Added coverage for phone/laptop build travel and completing the world at any scroll position.
- Chromium production preview: 320×568, 360×800, 390×844, 430×932, 768×1024,
  844×390, 1024×768, 1280×800, 1366×768, 1440×900 and 1920×1080. Homepage and
  app directory have no horizontal page overflow. All four build phases, native
  touch swipe, scene-button tap, replay and key-story tap pass.
- Reduced-motion overflow is separately checked at 320, 390, 768 and 1366px.
- All 79 generated HTML pages checked: 140 distinct local linked/asset paths exist.
  Contact-email and legal-manifest consistency scripts pass.
- Keyboard: gallery arrows work; the key opens with Enter and closes with Space;
  Tab advances focus normally. Native disclosures and all app links remain usable.
- No JavaScript: static art, all project links and native disclosures work.
- Reduced motion: no running animations, controls still change the scene.
- Missing WebGL2 and context loss: static image restored/retained and unavailable
  3D controls hidden, with no errors on unsupported WebGL.
- Save-Data: no renderer request. Production load: no console errors, failed
  requests or requests to third-party hosts.
- Visibility and history navigation: rendering pauses while hidden and resumes
  on return; resized layouts settle without horizontal overflow.
- One GPU context confirmed; no additional drawing after a scene settles.
  A sampled laptop run had a 1.5ms p95 JavaScript animation callback, with a 35ms
  maximum during initialization. This is a local browser sample, not a mobile GPU
  benchmark. High-density touch canvases retain the 1.25 pixel-ratio cap.

Browser checks use emulated phone/touch behavior, not a physical iPhone/Safari
performance measurement. The browser tests and screenshots are local QA artifacts,
not assets to publish.

The island follow-up changes only visual geometry, interaction and layout. It adds
no dependency, data flow, storage, network destination, permission or product claim;
the earlier legal-impact receipt still describes the integration boundary.

## Timeline refinement — 2026-10-23

- Replaced the passive timeline thread with a sticky, keyboard/touch-accessible
  chapter navigator. Its active stop and progress follow the reading position and
  recalculate when native details expand. The narrow layout keeps 44px tap targets.
- Terrain now grows in a gentle wave and blends between seeded landscapes. The
  phone studies fan out with independent tilt; their checklist, waveform and game
  tiles change with scrolling or the scene control. Roam keeps its existing path
  with only a small walking sway, path-facing traveller and flag movement.
- Added a small hand-drawn “Give it a press” cue to the Tab key. Refreshed all three
  timeline fallback images from the same models and fitted tall phone canvases.
- Fixed initial chapter links landing above their target when the sticky island
  enhancement changes document height. Arrival correction yields to user input
  and excludes browser history restoration; offscreen fallback changes preserve
  the current reading position.

Validation: Astro check reports zero errors/warnings/hints; the production build,
publication-boundary checks, five boundary tests and nine workshop tests pass.
Chromium checks cover 320×568, 390×844, 768×1024, 844×390, 1024×768, 1366×768 and
1440×1000: no horizontal page overflow or clipped timeline controls. Initial
chapter links land at their 32px scroll margin. Chapter taps, keyboard focus,
native details and the key's Space/Tab behavior pass, including without JavaScript.
Reduced motion has zero running animations and no chapter parallax. Missing WebGL
and lost context retain the static illustrations and hide unavailable controls.
Terrain and phone controls visibly update their canvases; one GPU context is used
and no additional canvas draws occur after settling. No browser errors observed.
Phone sizes use browser emulation, not physical-device Safari testing.

This refinement changes visuals and local navigation only. It adds no dependency,
network destination, data handling, permission, storage or public product claim;
the earlier legal-impact receipt remains applicable.

## Playful scenes and genuine work — 2026-10-23

The latest pass removes the island's finish/replay button. Native scrolling is
now its only animation input, with a larger unobstructed phone composition;
reduced motion still presents the completed island. This supersedes the earlier
finish-button/replay behavior described above.

- The terrain button blends both landforms and meadow, sand and cool-green
  palettes. Roam's control cycles through a bouncing showdown, flying kick and
  judo throw. A challenger arrives, a spectator watches, and both fighters recover
  before the short scene ends. These remain explicitly illustrative game scenes.
- The mobile interface studies shuffle like a small deck of phones, passing at
  distinct heights, changing positions and refreshing their screen patterns.
  The chapter's details now lead directly to the canonical app directory.
- App objects have local decorative motion: PlanKept completes a plan and lifts
  its paper stack; Voice of Self occasionally shows a speech bubble; Take Me
  Somewhere changes between street, coast and contour maps; OverLit demonstrates
  active cells lighting up and being cleared by taps in a long sequence.
- AudioChoices has a forward-only procedural story tree. Its reader dot stays
  near the centre as the camera follows successive branches and reveals new forks.
  It never reverses through earlier story choices. The book itself stays still.
- Showcase motion pauses outside the viewport and when the document is hidden.
  A pause/play control is provided on both homepage and directory; reduced motion
  uses the static composition. The story tree updates at most 30 times per second
  while visible; other showcase motion uses browser animations. Timed 3D actions
  pause offscreen and stop drawing after completion, retaining one GPU context.
- Alek Games details include genuine Placer level-design and PRPC Unity-inspector
  captures, original Placer Light artwork, and short attributed individual
  five-star review excerpts with version context. No aggregate count is shown.
  Source URLs and attribution are in `public/media/home/assets/sources.md`.
  The screenshots are served locally and link to their original listings.

Validation: Astro check has zero errors/warnings/hints; build and publication
boundary checks pass; all nine workshop geometry tests pass. Browser checks cover
320×568, 390×844, 768×1024, 844×390, 1024×768, 1366×768 and 1440×1000, including
homepage, app directory, expanded evidence, touch controls and native keyboard
activation. No horizontal page overflow or browser errors observed. All three
Roam variants and the phone shuffle complete; idle 3D drawing returns to zero.
Missing/lost WebGL restores illustrations and hides scene controls. No-JavaScript
screenshots, disclosures and directory links work. Reduced motion has no running
animations. The showcase pause control freezes both browser animations and the
forward-moving story tree. Phone testing is emulated Chromium, not physical Safari.

This pass adds local illustrations and verified historical review excerpts only.
No dependency, visitor-data flow, storage, permission, analytics, purchase flow or
app capability changed. The existing legal-impact receipt remains applicable;
no legal document or acceptance version changes are needed for this visual work.
