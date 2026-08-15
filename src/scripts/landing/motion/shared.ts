/* Small helpers shared by every scroll-motion module. */

export const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

export const lerp = (start: number, end: number, amount: number) =>
  start + (end - start) * amount;

/**
 * Maps `value` from the [start, end] range onto 0..1, clamped at both ends.
 *
 * `end` may be lower than `start`; a scroll ramp that counts a shrinking
 * distance down is as ordinary as one that counts up. This used to floor the
 * denominator at a tiny positive number, which turned every descending range
 * into a step function — 0 below `start`, 1 above it, nothing in between — and
 * quietly inverted it. `scroll-scene`'s "through" mode is written that way, so
 * its beats were snapping rather than easing.
 */
export const normalize = (value: number, start: number, end: number) => {
  const span = end - start;

  if (Math.abs(span) < 0.0001) {
    return value >= end ? 1 : 0;
  }

  return clamp((value - start) / span, 0, 1);
};

export const readNumber = (value: string | undefined, fallback: number) => {
  const parsed = Number.parseFloat(value ?? "");
  return Number.isFinite(parsed) ? parsed : fallback;
};

export const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const isCoarsePointer = () =>
  window.matchMedia("(hover: none) and (pointer: coarse)").matches;

/**
 * Mobile browsers fire `resize` every time the URL bar collapses. Scroll-driven
 * layout maths has to ignore those, or a scene re-measures mid-scroll and jumps.
 */
export const createViewportResizeGuard = () => {
  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  return () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const widthChanged = width !== lastWidth;
    const heightDelta = Math.abs(height - lastHeight);

    lastWidth = width;
    lastHeight = height;

    if (widthChanged) {
      return false;
    }

    return isCoarsePointer() && heightDelta < 140;
  };
};

/** Coalesces many calls into one animation frame. */
export const createFrameScheduler = (run: () => void) => {
  let frameId = 0;

  const render = () => {
    frameId = 0;
    run();
  };

  return () => {
    if (frameId !== 0) {
      return;
    }

    frameId = window.requestAnimationFrame(render);
  };
};

export const setVar = (element: HTMLElement, name: string, value: string) => {
  if (element.style.getPropertyValue(name) === value) {
    return;
  }

  element.style.setProperty(name, value);
};
