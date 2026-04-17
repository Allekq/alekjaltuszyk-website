# Alek Jałtuszyk Website

Personal site, app directory, and PlanKept web surface.

## What lives here

- personal homepage
- `/apps` directory
- `/apps/PlanKept` page
- wish-list signup surface
- support page
- privacy policy
- terms of service
- `legal-manifest.json`
- GitHub Pages deployment on `main`

## Canonical repos

- Personal website repo: `/Users/alekj/Documents/GitHub/alekjaltuszyk-website`
- PlanKept app repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- Voice of Self website repo: `/Users/alekj/Documents/GitHub/voice-of-self-website`
- Voice of Self app repo: `/Users/alekj/Documents/GitHub/closure-app`

## Local commands

```bash
npm install
npm run dev
python3 open_local_site.py
npm run check
npm run build
```

## Deployment

GitHub Pages deploys from `.github/workflows/deploy.yml` on pushes to `main`.

The workflow currently defaults to:

- `PUBLIC_SITE_ORIGIN=https://alekjaltuszyk.xyz`
- `PUBLIC_SITE_BASE_PATH=/`
