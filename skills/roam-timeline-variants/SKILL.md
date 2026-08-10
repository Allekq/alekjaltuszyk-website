---
name: roam-timeline-variants
description: Use when editing the Roam AI timeline entry, the homepage milestone row, or anything that describes where work was done, in src/components/landing/sections/home-profile-content.ts.
---

# Roam Timeline Variants

The site can describe the Roam AI period with or without the company-funded
stays in the United States. That choice is a single flag, not a wording
exercise, and not a script that rewrites source.

## The switch

`travelMention` in `src/components/landing/sections/home-profile-content.ts`.

- `"omitted"` — **the default.** No mention of travel anywhere. The Roam
  timeline entry stands on the engineering work, and the milestone card next to
  it shows the contract period instead.
- `"named"` — the stays are described the way a CV would describe them, and the
  milestone card becomes the months figure.

Flip the constant. Nothing else needs editing: the timeline highlight and the
milestone card both read from it.

Two root-level scripts (`RoamTimeline_CVVariant.mjs`,
`RoamTimeline_USFriendlyVariant.mjs`) used to do this by rewriting the file
between `// ROAM_TIMELINE_ENTRY_START/END` markers. They are gone, along with
the markers. Their wording is still in git history if a third variant is ever
wanted.

## Rules

1. `travelMention` is the only place travel is decided. If a new sentence needs
   to mention it, gate that sentence on the flag too — never add an ungated
   mention somewhere else.
2. Keep the flag's default at `"omitted"` unless the owner asks otherwise.
3. Keep both branches truthful and keep them the same shape: flipping the flag
   must not change what the entry claims about the work itself.
4. Keep comments neutral and non-sensitive. Describe what the variant shows,
   not personal legal reasoning.
5. The Roam entry's `summary` and `role` must stay travel-free, so they read
   correctly under either setting.

## Validation

- `npm run check`
- `npm run build`
- With the default setting, this must return nothing:
  `grep -rn "San Francisco" dist/`
