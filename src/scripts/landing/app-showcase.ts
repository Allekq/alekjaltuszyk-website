/*
 * Reveal timing for the app showcase.
 *
 * The shared `scroll-scene` engine maps one progress value across a whole
 * section and hands each child a slice of it. That is right for a scene whose
 * beats are decoration, and wrong here: this section has a *pinned panel* that
 * covers the top of the reading area on narrow screens, so "how far through the
 * section are we" is not the same question as "can this beat actually be read
 * yet". Timed off the section, a beat finished fading in while it was still
 * underneath the panel.
 *
 * So each beat is timed against the panel instead. The reveal line is the
 * bottom edge of the pinned panel where the layout stacks, and a comfortable
 * band below the top of the viewport where it does not. A beat is fully lit the
 * moment its top edge crosses that line — the point where the reader can see
 * all of it — and fades back out as its bottom edge reaches the same line.
 *
 * The artwork and the rail use the *entering* half of that only, so they never
 * fade back down: each app's layer stacks over the last one and holds, which is
 * what keeps an icon on the stage after the final beat has scrolled away.
 */

import {
  createFrameScheduler,
  createViewportResizeGuard,
  normalize,
  prefersReducedMotion,
  setVar,
} from "./motion/shared";

interface Showcase {
  root: HTMLElement;
  stage: HTMLElement;
  beats: HTMLElement[];
  layers: HTMLElement[];
  ticks: HTMLElement[];
}

/** Clearance between the panel and the first fully-lit beat. */
const REVEAL_GAP = 18;
/** Travel a beat gets to fade in as it rises towards the line. */
const FADE_IN = 260;
/** Travel it gets to fade out again once its bottom edge reaches the line. */
const FADE_OUT = 180;
/** Where the reveal line sits when the panel is beside the beats, not above. */
const SIDE_BY_SIDE_BAND = 0.16;

/*
 * Whether the panel is stacked above the beats is a CSS decision, so CSS owns
 * it: `--showcase-stacked` flips to 1 inside the same media query that moves
 * the stage. Nothing here has to know the breakpoint.
 */
const isStacked = (root: HTMLElement) =>
  window.getComputedStyle(root).getPropertyValue("--showcase-stacked").trim() ===
  "1";

const readShowcases = (): Showcase[] =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-showcase]"))
    .map((root) => {
      const stage = root.querySelector<HTMLElement>("[data-showcase-stage]");

      if (!stage) {
        return null;
      }

      return {
        root,
        stage,
        beats: Array.from(root.querySelectorAll<HTMLElement>("[data-showcase-beat]")),
        layers: Array.from(root.querySelectorAll<HTMLElement>("[data-showcase-layer]")),
        ticks: Array.from(root.querySelectorAll<HTMLElement>("[data-showcase-tick]")),
      };
    })
    .filter((showcase): showcase is Showcase => showcase !== null);

const settle = (showcase: Showcase) => {
  showcase.beats.forEach((beat) => setVar(beat, "--item-progress", "1"));
  showcase.layers.forEach((layer, index) =>
    // Only the last layer stays visible; the ones underneath would just be
    // covered anyway, and leaving them at 1 costs nothing to composite.
    setVar(layer, "--item-progress", index === showcase.layers.length - 1 ? "1" : "0"),
  );
  showcase.ticks.forEach((tick) => {
    setVar(tick, "--item-progress", "1");
    tick.classList.remove("is-item-active");
  });
};

const renderShowcase = (showcase: Showcase) => {
  const viewportHeight = Math.max(window.innerHeight, 1);
  const revealLine = isStacked(showcase.root)
    ? showcase.stage.getBoundingClientRect().bottom + REVEAL_GAP
    : viewportHeight * SIDE_BY_SIDE_BAND;

  let activeIndex = 0;

  showcase.beats.forEach((beat, index) => {
    const rect = beat.getBoundingClientRect();

    /*
     * Both ramps are capped against the beat's own height. A short beat on a
     * phone is barely taller than the two ramps put together, and without the
     * cap the fade-out starts before the fade-in has finished — the beat then
     * never reaches full contrast at all.
     *
     */
    const fadeIn = Math.min(FADE_IN, viewportHeight * 0.3, rect.height * 0.55);
    /*
     * `room` is what is left under the panel. On a landscape phone that can be
     * shorter than a beat, and a fade-out measured only against the beat would
     * start before the beat had finished arriving. Capping against the room as
     * well keeps a plateau on screens with barely any.
     */
    const room = Math.max(viewportHeight - revealLine, 1);
    const fadeOut = Math.min(FADE_OUT, rect.height * 0.45, room * 0.5);

    // 1 once the beat's top edge has cleared the line — everything below the
    // panel is readable, which is the moment it deserves full contrast.
    const entering = normalize(revealLine + fadeIn - rect.top, 0, fadeIn);
    // Back to 0 as the beat's bottom edge reaches the same line and it stops
    // being the thing on screen.
    const leaving = normalize(rect.bottom - revealLine, 0, fadeOut);

    setVar(beat, "--item-progress", Math.min(entering, leaving).toFixed(4));

    if (entering > 0.5) {
      activeIndex = index;
    }

    const stageWeight = entering.toFixed(4);
    const layer = showcase.layers[index];
    const tick = showcase.ticks[index];

    if (layer) {
      setVar(layer, "--item-progress", stageWeight);
    }

    if (tick) {
      setVar(tick, "--item-progress", stageWeight);
    }
  });

  showcase.ticks.forEach((tick, index) =>
    tick.classList.toggle("is-item-active", index === activeIndex),
  );
};

export const setupAppShowcase = () => {
  const showcases = readShowcases();

  if (!showcases.length) {
    return;
  }

  if (prefersReducedMotion()) {
    showcases.forEach(settle);
    return;
  }

  const render = () => showcases.forEach(renderShowcase);
  const requestRender = createFrameScheduler(render);
  const ignoreResize = createViewportResizeGuard();

  render();
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("orientationchange", requestRender);
  window.addEventListener("resize", () => {
    if (ignoreResize()) {
      return;
    }

    requestRender();
  });

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(requestRender);
    showcases.forEach((showcase) => observer.observe(showcase.root));
  }

  // Icons arriving late shift the panel's height, and with it the reveal line.
  showcases.forEach((showcase) =>
    showcase.root.querySelectorAll("img").forEach((image) => {
      if (!image.complete) {
        image.addEventListener("load", requestRender, { once: true });
      }
    }),
  );
};
