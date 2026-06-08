# Alek Jałtuszyk Website

Personal site, app directory, app-specific support/legal pages, and public web
surfaces for PlanKept, Voice of Self, OverLit, and Take Me Somewhere.

## What lives here

- personal homepage
- `/apps` directory
- `/apps/PlanKept` page
- `/apps/VoiceOfSelf` page, support, privacy policy, terms, and legal manifest
- `/apps/OverLit` page, support, privacy policy, and terms of use
- `/apps/TakeMeSomewhere` page, support, privacy policy, terms, and legal manifest
- general website support, privacy policy, terms, and legal hub
- temporary root `legal-manifest.json` compatibility surface for PlanKept app migration
- GitHub Pages deployment on `main`

## Canonical repos

- Personal website repo: `/Users/alekj/Documents/GitHub/alekjaltuszyk-website`
- PlanKept app repo: `/Users/alekj/Documents/GitHub/plan enforcer`
- Voice of Self website/legal surface: this repo under `/apps/VoiceOfSelf/`
- Voice of Self app repo: `/Users/alekj/Documents/GitHub/closure-app`
- OverLit app repo: `/Users/alekj/Documents/GitHub/OverLit-app`
- Take Me Somewhere app repo: `/Users/alekj/Documents/GitHub/TakeMeSomewhere`

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
