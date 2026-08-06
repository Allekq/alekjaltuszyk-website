/*
 * Depth parallax driven by an element's distance from the viewport centre.
 *
 *   [data-parallax]              receives --parallax-y (px) and --parallax-shift (-1..1)
 *     data-parallax-speed="40"   travel in px across a full viewport of scrolling
 *
 * Layers keep their own transforms; CSS decides how to spend the variable.
 */

import {
  clamp,
  createFrameScheduler,
  createViewportResizeGuard,
  prefersReducedMotion,
  readNumber,
  setVar,
} from "./shared";

interface ParallaxLayer {
  element: HTMLElement;
  speed: number;
}

export const setupParallax = () => {
  if (prefersReducedMotion()) {
    return;
  }

  const layers: ParallaxLayer[] = Array.from(
    document.querySelectorAll<HTMLElement>("[data-parallax]"),
  ).map((element) => ({
    element,
    speed: readNumber(element.dataset.parallaxSpeed, 32),
  }));

  if (!layers.length) {
    return;
  }

  const render = () => {
    const viewportHeight = Math.max(window.innerHeight, 1);
    const viewportCentre = viewportHeight / 2;

    layers.forEach(({ element, speed }) => {
      const rect = element.getBoundingClientRect();

      if (rect.bottom < -viewportHeight || rect.top > viewportHeight * 2) {
        return;
      }

      const centre = rect.top + rect.height / 2;
      const shift = clamp((viewportCentre - centre) / viewportHeight, -1.2, 1.2);

      setVar(element, "--parallax-shift", shift.toFixed(4));
      setVar(element, "--parallax-y", `${(shift * speed).toFixed(2)}px`);
    });
  };

  const requestRender = createFrameScheduler(render);
  const ignoreResize = createViewportResizeGuard();

  render();
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", () => {
    if (ignoreResize()) {
      return;
    }

    requestRender();
  });
};
