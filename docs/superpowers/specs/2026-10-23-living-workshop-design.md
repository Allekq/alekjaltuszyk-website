> Archived first-pass context. The implemented redesign and current validation are recorded in [the review checkpoint](../../workshop-redesign-review.md). The later owner feedback supersedes this document.

# Living Workshop homepage — first pass

The owner approved moving the text concept into a working homepage on a separate
branch. Build a reviewable first pass in this session. Scope is `/` only; the
app directory and individual app sites retain their current presentation.

## Design

A warm ivory editorial canvas, graphite typography, a vermilion connecting line,
and a tactile graphite/glass sculpture introduce Alek's engineering work.
The page progresses through introduction, an explorable app gallery, career
chapters, skills and education, a full climbing photograph, and contact.
Keep the name prominent and the writing grounded in existing public content.
Use generated art only as decorative art, never as evidence of actual work.

## Interaction

- The hero sculpture responds to a pointer and springs back on release.
- The app gallery supports native horizontal scrolling, touch and arrow buttons.
- Canvas studies illustrate product ideas and procedural systems without
  collecting input, recording audio, accessing location, or pretending to be apps.
- Native details expose the existing career and skill content without JavaScript.
- A Tab-key disclosure tells the existing public Cursor recognition story.
- Animate only visible studies, stop on hidden documents, and honor changes to
  reduced-motion preferences. Pointer effects are optional enhancements.

## Constraints and acceptance

- Preserve SiteLayout, thin index route, and homepage orchestrator ownership.
- Derive app lists, release states and platform wording from appState.ts.
- Use withBase for internal paths and local assets. No new external resources,
  SDKs, analytics, dependencies, or legal-facing behavior.
- Existing app, support, legal, discovery routes and metadata remain intact.
- Phone, desktop, keyboard, no-JS, and reduced-motion layouts remain usable.
- Run Astro check, production build, private-boundary checks, interaction tests,
  and manual browser verification of desktop and phone sizes.

Purely visual and navigation changes: exempt from legal-impact receipt.
