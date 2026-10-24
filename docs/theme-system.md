# Website appearance

Both Astro layouts share `ThemeHead.astro`, `ThemePicker.astro`, and
`src/styles/theme.css`. The default is the operating system's appearance.
The native Appearance select sits after the page footer and offers System,
Light, and Dark. It is hidden when JavaScript is unavailable; CSS still follows
the device preference.

`src/scripts/theme.js` runs inline in the head, before first paint. It validates
the saved choice, updates browser chrome, listens for device and cross-tab
changes, and refreshes after back/forward restoration. Only an explicit Light
or Dark choice writes `site-appearance` to local storage. System removes it.
Storage failures do not prevent changing the current page.

## Color ownership

- `src/styles/tokens.css`: shared surfaces, text, borders, shadows, and workshop
  palette. Workshop modules consume those tokens rather than assuming paper
  always means white.
- Each app's `shell.css`: its page palette and appearance-row colors.
  Accent fills and accent text use separate tokens so bright branded buttons
  can coexist with readable labels on pale surfaces.
- `src/voice-of-self/styles/tokens.css`: the Voice of Self palette, using the
  same preference contract as the rest of the site.
- Component-owned paired colors stay alongside their component styles.
  Use `light-dark(lightColor, darkColor)` for colors, including colors inside
  gradients and shadows. The root `color-scheme` chooses the pair.
- Photographs, app screenshots, and physical illustrations retain their
  original colors. The OverLit playable board intentionally declares
  `color-scheme: dark` so its gameplay matches the app in either page theme.

This uses the color form of CSS `light-dark()`, supported across current Safari,
Firefox, and Chromium browsers (Baseline 2024); it does not use the newer image
form. See [MDN's compatibility documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/color_value/light-dark).

## Verification

Run `npm run test:theme`, `npm run check`, and `npm run build`. Browser checks
should cover both device appearances and manual overrides, reload and links
between the two layouts, cross-tab changes, returning to System, blocked
storage, and JavaScript disabled. Inspect the homepage, directory, app landings,
support, reading, legal, and install pages at phone and desktop sizes. Check
headlines, small accent text, controls, hover/focus states, and the page bottom.

Verified on 2026-10-24 in isolated Chrome: 40 desktop/phone screenshot cases
across the main page families, followed by all 79 generated routes in both
appearances (158 production page loads). No page errors or horizontal overflow
were found. The checked primary, secondary, and accent text tokens meet 4.5:1
against their base surfaces; this is a focused contrast check, not a whole-site
accessibility certification. Keyboard selection, visible focus, print, system
changes, no JavaScript, blocked storage, reload, and cross-tab behavior passed.
`test:theme` (six cases), Astro check, build/private-boundary checks, and legal
manifest consistency also passed. Safari and Firefox were not run locally.

Follow-up text visibility audit: sampled rendered text against screenshot
backgrounds across 12 representative routes, both appearances, and desktop/phone
widths (48 cases), with disclosure sections expanded. This included gradients,
photographs, pale illustrated cards, and review panels. Disabled controls and
offscreen skip links were excluded from contrast findings. Corrected the
portfolio label hover background, fixed-paper illustration ink, review panel
contrast, small accent labels, OverLit captions, and the climbing photo's mobile
grade backing. The final sampled pass had no flagged text/background pairs;
42 hovered text checks also passed. These checks supplement visual review and
do not constitute a complete WCAG audit.
