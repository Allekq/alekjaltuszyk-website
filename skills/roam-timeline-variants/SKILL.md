---
name: roam-timeline-variants
description: Use when editing the Roam AI timeline entry in src/components/landing/sections/home-profile-content.ts or the root-level RoamTimeline_*Variant.mjs scripts.
---

# Roam Timeline Variants

Use this skill whenever the Roam AI timeline entry or its wording variants are
changed.

## Files

- Source timeline copy:
  `src/components/landing/sections/home-profile-content.ts`
- CV-aimed variant script:
  `RoamTimeline_CVVariant.mjs`
- U.S.-friendly variant script:
  `RoamTimeline_USFriendlyVariant.mjs`

## Rules

1. Keep the Roam timeline entry wrapped by:
   `// ROAM_TIMELINE_ENTRY_START` and `// ROAM_TIMELINE_ENTRY_END`.
2. If the Roam entry shape changes, update both root-level scripts in the same
   change so either script can still replace the whole marked block.
3. Keep the CV script aligned with the public portfolio/CV wording.
4. Keep the U.S.-friendly script aligned with the low-ambiguity remote-work
   wording and avoid naming San Francisco there.
5. Keep comments neutral and non-sensitive. They should describe the variant
   purpose, not personal legal reasoning.
6. After changes, run:
   - `node --check RoamTimeline_CVVariant.mjs`
   - `node --check RoamTimeline_USFriendlyVariant.mjs`
   - `npm run check`
   - `npm run build`

