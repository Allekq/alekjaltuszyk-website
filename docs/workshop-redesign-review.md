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

## Portfolio motion refinement — 2026-10-23

- The Roam scene uses two simple beans with heads: the walking player and one
  arriving challenger. A random choice avoids the immediately previous move.
  The bump, airborne attack and hip throw have distinct anticipation, contact,
  recoil/flight, landing and recovery beats. The throw begins with the beans
  close together and uses a small depth offset to keep their heads clear.
  The ground marker stays flat during jumps; the extra spectator is removed.
- The phone scene derives its model count and identities from the app directory.
  Rounded frames, camera islands, side buttons and separate original interface
  studies replace the previous three slabs. A rigid formation rises, completes
  a circle around the middle phone's top edge, then returns to its exact pose.
  An oriented-bounds check across 277 samples found no phone-body intersections.
- The Tab key title is above the key. Opening the native details brings the
  story into view directly below it. The opening text is preserved, followed by
  the owner's new reflection and a real, cropped photograph of the keepsake.
  The 840 px WebP is about 40 KB, lazy-loaded and stripped of camera metadata.
- The map cycles between a city grid, coast, canals, an old-town plaza and a
  riverside neighbourhood, with a distinct route every 5.5 seconds. OverLit
  lights a small cluster of cells before staggered taps clear them.
- Removed the showcase motion buttons at the owner's request. Motion still
  respects the system reduced-motion preference and pauses outside the viewport
  or when the page is hidden. App navigation and the intentional scene actions
  remain. AI Product Systems now leads with Roam AI's agentic workflows, with
  app workflows as supporting examples, using owner-approved public context.

### Performance scan

Local production build in Chromium 155 on this Mac. The phone run used a
390 × 844 viewport, device scale 2, touch emulation, 4× CPU slowdown, 1.6 Mbps
download and 150 ms latency with the cache disabled. These are lab samples,
not deployed-site field measurements or physical-device Safari results.

| Measurement | Laptop, 1366 × 768 | Simulated phone |
| --- | --- | --- |
| First contentful paint | 112 ms | 688 ms |
| Largest contentful paint | 112 ms | 724 ms |
| Initial layout shift | 0 | 0 |
| Initial resource transfers, excluding HTML | ~224 KB | ~224 KB |
| WebGL contexts | 1 | 1 |
| Scene frame interval, median | 16.7 ms | 16.9–17.0 ms |
| Scene frame interval, 95th percentile | ≤25 ms | ≤25.3 ms |
| Scene frames after the action settles | 0 | 0 |

The scan found unnecessary 120 fps scene rendering on this display. A 60 fps
cap roughly halves active rendering work; elapsed-time choreography preserves
movement speed. Action buttons now lock synchronously on press to prevent
rapid taps restarting a move before the next frame. The two initial phone
long tasks measured 94 and 120 ms. The key photo was not requested at initial
load and decoded successfully when its story opened. Offscreen showcase
objects had no running animations. No production browser errors or failed
resource requests were recorded.

Validation: no horizontal overflow at 320, 390, 768, 844 (landscape), 1024,
1366 or 1440 px. Checked native keyboard disclosure, real-photo loading,
reduced motion, disabled JavaScript, unavailable WebGL and data-saving mode.
The existing geometry tests pass. This pass changes presentation and public
career wording, with no new app capabilities, data practices, dependencies,
permissions, purchases or legal-facing product promises.

## Portfolio copy accuracy review

The skills now distinguish Unity gameplay, C# maintenance and optimization,
and Python/AI integration. Career contributions use the owner's confirmed
responsibilities, without internal implementation details or a claim of sole
ownership. The introduction and shared biography use software engineer;
responsibilities and published work convey experience. Unverified adoption, revenue and absolute performance claims were
removed. The five-star milestone explicitly refers to customer reviews.

Unity examples were checked against the public
[Alek Games catalogue](https://assetstore.unity.com/publishers/58188),
[Placer listing](https://assetstore.unity.com/packages/tools/level-design/placer-3-pro-level-designer-283376)
and [PRPC listing](https://assetstore.unity.com/packages/tools/physics/prpc-parkour-rigidbody-player-controller-229619).
Review evidence remains in `public/media/home/assets/sources.md`.
Product summaries were compared with the apps' reminder/plan systems,
managed reflection flow, cell-pressure simulation, compass guidance and
headphone-motion input, plus the existing public product and AI-use text.
Shared profile data also feeds the LLM discovery output.

| Review item | Evidence and decision |
| --- | --- |
| Public promises | Portfolio summaries narrowed to existing features and confirmed contributions. PlanKept privacy, Voice of Self AI-use and AudioChoices privacy text remain consistent; no new capability or processing claim. |
| Release | Copy only; no data flow, dependency, permission, purchase, retention or app acceptance change. No legal version bump. |
| Result | No disclosure change. This is a factual copy review, not an assessment of an employment agreement. |

## Authentic media and clearer detail links — 2026-10-24

- The introduction includes an owner-supplied evening work photograph. Only
  640/1280 px WebP derivatives are public; the original stays outside the repo.
- A compact front-lever recording follows scroll below the climbing section.
  The 4.5-second H.264 extract is about 1 MB, has no audio or auxiliary tracks,
  and is loaded only near the section. The still remains for reduced motion,
  data-saving, unavailable video or disabled JavaScript. There is no autoplay
  or new motion-control button. Media provenance is beside the exports.
- Timeline details have larger, labelled native disclosure buttons. Asset
  details link to Placer 3 PRO, PRPC, HoverCraft System and Alek AI Framework,
  with four individually attributed reviews and their version context.
- Expanded C# and AI examples use newly confirmed owner contributions.
  Collaboration wording says worked alongside researchers and educators;
  it does not imply institutional employment or endorsement. LaSalle's public
  [institution name](https://lasallecollege.lcieducation.com/en/about) was checked;
  the collaboration itself is owner-confirmed.

| Review item | Evidence and decision |
| --- | --- |
| Data and media | Same-origin static image/video assets only; no upload, tracking, embed, SDK, permission or storage flow added. Media exports omit original metadata; originals and unused portraits are excluded. |
| Public promises | The owner confirmed the memory and model-management contributions. Existing Voice of Self AI-use text describes selected historical context; its lane-context tests cover notes/relics. PlanKept's existing local-model catalogue and privacy text cover on-device model handling. No new app behavior or retention promise is introduced. |
| Release | No legal text, version or acceptance-gate change. The clip is a progressive visual enhancement with a still-image fallback. |
| Result | No disclosure change required; public career wording stays at the contribution level. |

Validation: `npm run check` and `npm run build` pass, including the legal and
publication-boundary checks. Production previews have no horizontal overflow
at 320, 390, 768, 1024, 1366 or 1440 px. Native keyboard disclosures work with
and without JavaScript. The recording advances with scroll, stays paused,
and performs no seeks while idle. Reduced motion, data-saving mode, disabled
JavaScript and a failed video request all retain the real still photograph.
Final phone and laptop previews were visually inspected.

## Pinned movement and final world details — 2026-10-24

The front-lever section uses a native sticky stage through the complete lift,
hold and return. Its first frame waits until the stage reaches the viewport;
the page releases after the final frame. A compact corner timer follows the
hold segment. The 960 × 540 video is about 2.5 MB, silent and
loaded near the section. Reduced motion, data saving, short viewports and
unavailable video retain a compact still; scrolling is never intercepted.

The asset gallery scrolls horizontally through Placer 3 PRO, PRPC and a real
Alek AI gameplay capture. Each image has a single name-and-arrow pill linking
to its product. The duplicate product callout is removed. Native disclosures
use rounded pills, plus/minus indicators and progressive expansion transitions; the app-directory
link keeps its navigation styling. Roam's public site is linked directly.

The owner confirmed the revised procedural-generation, networked-collision,
VR/enemy/vehicle AI and DOTS contributions, plus collaboration with teachers,
AI-app founders and people who built or led Voodoo teams. DOTS is not presented
as an Asset Store package feature. The changes describe contributions and
introduce no new app capability, privacy, purchase or performance promise.

The roof now scales around its eaves after the walls settle; bridge rails
descend at their final dimensions after the deck is complete. Three small
butterflies animate only when the completed island is on screen, and remain
still with reduced motion. A geometry scan across intermediate build states
confirmed positive roof-to-wall clearance and constant rail dimensions.

Validation: Astro check reports no errors, warnings or hints; production build,
legal consistency, publication boundaries and all nine workshop geometry tests
pass. Layouts have no horizontal overflow at 320, 390, 768, 1024, 1366 and
1440 px. The phone/laptop film stays at the same viewport position from first
to last frame, then releases. It performs no seeks while idle and requests no
video on initial load. Reduced motion, data saving, disabled JavaScript,
unavailable video and short-screen fallbacks were checked; native keyboard
disclosures remain usable. Final asset, film and island previews were inspected.
