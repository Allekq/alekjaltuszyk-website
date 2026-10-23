> Archived first-pass context. The implemented redesign and current validation are recorded in [the review checkpoint](../../workshop-redesign-review.md). The later owner feedback supersedes this document.

# Living Workshop Homepage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the approved homepage concept on `codex/living-workshop-homepage` for owner review.

**Architecture:** New section components under `sections/home`, scoped styles under
`landing/workshop`, and progressive enhancement modules under `landing/workshop`.
The existing shared app components and destinations are not modified.

**Tech Stack:** Astro, TypeScript, native CSS, canvas, generated local WebP art.

**Spec:** `docs/superpowers/specs/2026-10-23-living-workshop-design.md`

## Global Constraints

- Scope is `/` only; preserve shared shell and thin route.
- Read app metadata from appState; internal URLs use withBase.
- No network features, dependencies, analytics, or new product claims.
- No-JS content, keyboard, mobile, and reduced motion must work.

## Review Focus

- Gallery controls at both ends and after viewport resizing.
- Motion preference changes, hidden tabs, and offscreen animation work.
- Native scrolling remains available on touch and without JavaScript.
- Content does not overflow at 375px; long names and app additions remain safe.
- App routes and private content boundaries remain unchanged.

### Task 1: Homepage composition and visual system

**Files:** `HomePageOrchestrator.astro`, `sections/home/*.astro`, `styles/home.css`,
`styles/landing/workshop/*.css`, `styles/tokens.css`, `public/media/home/workshop-sculpture.webp`.

**Interfaces:** Consumes siteConfig, homeTimeline, homeSkills, homeMilestones,
normalized apps. Produces semantic sections with gallery, sculpture, and study hooks.

- [ ] Create scoped editorial styling and section components; preserve public facts.
- [ ] Generate, inspect, optimize and locally save decorative sculpture art.
- [ ] Run `npm run check`; expected zero errors and warnings.

### Task 2: Progressive interaction

**Files:** `src/scripts/landing/workshop/*`.

**Interfaces:** Consumes `[data-workshop-gallery]`, `[data-sculpture]`,
`[data-study]` hooks. Produces keyboard-operable gallery controls and optional motion.

- [ ] Write and run failing tests for bounded, deterministic procedural generation
  and spring settling behavior, then implement the math helpers.
- [ ] Implement gallery controls, sculpture response and canvas studies.
- [ ] Run helper tests and Astro check; expected all pass.

### Task 3: Browser verification and review

- [ ] Verify desktop and phone layouts, gallery controls and details disclosures.
- [ ] Verify reduced motion and no-JS behavior, internal links, and app pages.
- [ ] Run `npm run check`, `npm run build`, `npm run test:private` and `git diff --check`.
- [ ] Review the complete changes and open the local preview for the owner.

## Execution notes

- Baseline Astro check: 253 files, zero errors/warnings/hints.
- Branch created from clean `dev` at `66efdbb`.
- The owner's latest instruction authorizes implementing the previously proposed
  direction now; continue inline without repeating a design approval request.
- Keep changes unmerged for the owner's investigation. No publication requested.
