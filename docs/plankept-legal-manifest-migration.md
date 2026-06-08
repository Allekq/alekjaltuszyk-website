# PlanKept Legal Manifest Migration

Created: 2026-06-08

## Current State

PlanKept legal pages now have future-canonical app-specific routes:

- `/apps/PlanKept/privacy-policy/`
- `/apps/PlanKept/terms-of-service/`
- `/apps/PlanKept/support/`
- `/apps/PlanKept/legal-manifest.json`

The root website now has general site documents:

- `/privacy-policy/`
- `/terms/`
- `/terms-of-service/` as a compatibility alias for the general website terms
- `/legal/`
- `/support/`

Temporary PlanKept compatibility routes still exist:

- `/PlanKept/privacy-policy/`
- `/PlanKept/terms-of-service/`
- `/PlanKept/support/`
- `/legal-manifest.json`

The root `legal-manifest.json` is temporary. It remains available for already-shipped PlanKept builds that still fetch `https://alekjaltuszyk.xyz/legal-manifest.json`. Its `privacy` and `terms` entries point to the new `/apps/PlanKept/...` document URLs so old and new app builds converge on the same public documents.

## App Transition

PlanKept should fetch:

```text
https://alekjaltuszyk.xyz/apps/PlanKept/legal-manifest.json
```

The app-side file to check is:

```text
/Users/alekj/Documents/GitHub/plan enforcer/App/Composition/PlanKeptLegalConfiguration.swift
```

After a PlanKept build with the app-specific manifest URL is released and adoption is acceptable, the root compatibility manifest and old `/PlanKept/...` pages can be removed or redirected at the hosting layer if redirects become available.

## Cleanup Checklist

When it is safe to remove compatibility:

1. Confirm the live PlanKept app no longer fetches `https://alekjaltuszyk.xyz/legal-manifest.json`.
2. Confirm no App Store metadata, support copy, or external links still point at `/PlanKept/privacy-policy/`, `/PlanKept/terms-of-service/`, or `/PlanKept/support/`.
3. Remove legacy PlanKept routes:
   - `src/pages/PlanKept/privacy-policy/index.astro`
   - `src/pages/PlanKept/terms-of-service/index.astro`
   - `src/pages/PlanKept/support/index.astro`
4. Decide whether root `src/pages/legal-manifest.json.ts` should become a pure site/app index manifest or be removed. Do not remove it while shipped apps still depend on it.
5. Remove legacy route entries from `src/config/routes.ts`:
   - `legacyPrivacyPolicy`
   - `legacySupport`
   - `legacyTermsOfService`
6. Search the repo for `/PlanKept/` and `legal-manifest.json` before finishing.
7. Run:
   - `npm run check`
   - `npm run build`
8. Manually check:
   - `/legal/`
   - `/privacy-policy/`
   - `/terms/`
   - `/apps/PlanKept/legal-manifest.json`
   - `/apps/PlanKept/privacy-policy/`
   - `/apps/PlanKept/terms-of-service/`
   - `/apps/PlanKept/support/`

## Version Notes

PlanKept app legal versions live in `site.config.mjs` under:

- `legalDocuments.planKeptPrivacy`
- `legalDocuments.planKeptTerms`

The app-specific manifest and temporary root manifest both read those same version values.
