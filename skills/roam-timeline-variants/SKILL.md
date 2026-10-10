---
name: roam-timeline-variants
description: Edit the public Roam AI timeline or homepage milestone while keeping recipient-specific CV context out of the website.
---

# Public Career Timeline

Keep the public timeline in `src/components/landing/sections/home-profile-content.ts`
focused on engineering contributions and the contract period.

Do not restore alternative CV wording or switches from repository history.
Website content must not depend on private career notes or CV generators.
Follow the Private Career Context rules in `AGENTS.md`.

For a CV requested by the owner, use the local-only skill under
`private/career-context/` if present. Its facts are not website source material.

Run `npm run check:private`, `npm run check` and `npm run build` after changes.
