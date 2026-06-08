# Landing CSS Performance Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Split the giant landing stylesheet into focused site-owned files and improve the root homepage hero media loading path.

**Architecture:** Keep `src/styles/landing.css` as the single public import used by Astro pages, but make it an import orchestrator. Move CSS into shared, homepage, PlanKept, OverLit, app-directory, and content files so unrelated app surfaces stop sharing one 4,000+ line file. Keep section/component markup in the existing Astro files.

**Tech Stack:** Astro 6 static site, vanilla CSS imports, small TypeScript progressive-enhancement scripts, static public media.

---

### Task 1: Split Landing CSS By Ownership

**Files:**
- Modify: `src/styles/landing.css`
- Create: `src/styles/landing/shared.css`
- Create: `src/styles/landing/home.css`
- Create: `src/styles/landing/plankept.css`
- Create: `src/styles/landing/overlit.css`
- Create: `src/styles/landing/apps.css`
- Create: `src/styles/landing/content.css`

- [ ] Create `src/styles/landing/`.
- [ ] Move shared primitives, header, reveal, buttons, generic section shells, generic cards, shared footer, and responsive shared rules into `shared.css`.
- [ ] Move `.home-*` root homepage rules into `home.css`.
- [ ] Move `.plan-kept-*`, `.plan-phone-*`, `.brand-ripple-*`, `.app-screen-*`, `.strategy-*`, `.metric-*`, `.comparison-*`, `.content-hub-*`, and PlanKept content page rules into `plankept.css`.
- [ ] Move `.overlit-*` rules and OverLit keyframes into `overlit.css`.
- [ ] Move `.shared-app-scaffold*`, `.simple-site-header*`, `.tms-simple-site*`, `.apps-directory*`, and `.app-card*` rules into `apps.css`.
- [ ] Move legal/content route shared styles into `content.css` if they are currently in `landing.css`.
- [ ] Replace `landing.css` body with ordered imports only.
- [ ] Run `npm run check`.
- [ ] Run `npm run build`.

### Task 2: Improve Hero Media Loading

**Files:**
- Modify: `src/components/landing/sections/HomeVideoHeroSection.astro`
- Modify: `src/styles/landing/home.css`
- Create: `public/media/home/hero-energy-poster.jpg`
- Create if encoder is available: `public/media/home/hero-energy-loop-1080.mp4`
- Create if encoder is available: `public/media/home/hero-energy-loop-720.mp4`

- [ ] Add a poster image to the hero video.
- [ ] Prefer smaller video sources when encoded variants are available.
- [ ] Keep the 4K original out of first-choice markup once smaller variants exist.
- [ ] Add a reduced-motion CSS fallback that hides the video and keeps the poster/art direction visible.
- [ ] Run `npm run check`.
- [ ] Run `npm run build`.
- [ ] Confirm `dist/media/home` size drops when optimized variants are available.

### Task 3: Mobile Density Pass

**Files:**
- Modify: `src/styles/landing/plankept.css`
- Modify if needed: `src/components/landing/sections/PlanKeptHeroSection.astro`
- Modify if needed: `src/components/landing/sections/LandingHeader.astro`

- [ ] Reduce PlanKept mobile header height and nav crowding.
- [ ] Keep horizontal nav/rails scrollable when they intentionally overflow.
- [ ] Tighten mobile hero spacing without removing primary copy or CTA access.
- [ ] Preview `/`, `/apps/`, and `/apps/PlanKept/` at desktop and phone widths.
- [ ] Run `npm run check`.
- [ ] Run `npm run build`.

### Task 4: Dependency Hygiene Follow-Up

**Files:**
- Modify only if safe: `node_modules` local install state

- [ ] Document the current local `node_modules` state if dependency hygiene changes are made.
- [ ] Do not replace it during this refactor unless dependency install is explicitly approved or already available without network.
- [ ] Keep the build warning visible in final notes if it remains.
