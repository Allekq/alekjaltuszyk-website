# Release Notes

## Deployment model

This repo is configured to deploy to GitHub Pages when changes land on `main`.

Workflow:

- `.github/workflows/deploy.yml`

## Before shipping

Run:

```bash
npm run check
npm run build
```

## Current defaults

- `PUBLIC_SITE_ORIGIN=https://alekjaltuszyk.xyz`
- `PUBLIC_SITE_BASE_PATH=/`
