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
- Experience follows a central scroll thread with alternating chapters. A seeded
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
