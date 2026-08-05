/*
 * Scroll scenes: turn a page region into a 0..1 progress value that CSS can read.
 *
 * Markup contract
 *   [data-scene]                    scene root; receives --scene-progress
 *     data-scene-mode="through"     (default) progress runs while the root crosses the viewport
 *     data-scene-mode="pin"         progress runs while a sticky child stays pinned
 *     data-scene-start="0.86"       viewport fraction where "through" progress starts
 *     data-scene-end="0.4"          viewport fraction where "through" progress ends
 *   [data-scene-pin]                the sticky child, required by mode="pin"
 *   [data-scene-item]               child beat; receives --item-progress and .is-item-active
 *     data-item-at="0.35"           optional explicit start point (0..1 of the scene)
 *     data-item-span="0.2"          optional length of the item's own ramp
 *
 * Items with no explicit timing are spread evenly across the scene, each with a
 * slightly overlapping ramp so beats hand over to each other instead of popping.
 */

import {
  clamp,
  createFrameScheduler,
  createViewportResizeGuard,
  normalize,
  prefersReducedMotion,
  readNumber,
  setVar,
} from "./shared";

interface SceneItem {
  element: HTMLElement;
  at: number;
  span: number;
}

interface Scene {
  items: SceneItem[];
  mode: "through" | "pin";
  pin: HTMLElement | null;
  root: HTMLElement;
  startFactor: number;
  endFactor: number;
}

const ITEM_OVERLAP = 1.45;

const readItems = (root: HTMLElement): SceneItem[] => {
  const elements = Array.from(root.querySelectorAll<HTMLElement>("[data-scene-item]")).filter(
    (element) => element.closest("[data-scene]") === root,
  );

  if (!elements.length) {
    return [];
  }

  // Evenly spread beats across the middle 88% of the scene so the first beat has
  // a moment to breathe and the last one finishes before the scene scrolls away.
  const beatWindow = 0.88 / elements.length;

  return elements.map((element, index) => ({
    element,
    at: readNumber(element.dataset.itemAt, 0.03 + index * beatWindow),
    span: readNumber(element.dataset.itemSpan, beatWindow * ITEM_OVERLAP),
  }));
};

const getThroughProgress = (scene: Scene, viewportHeight: number) => {
  const rect = scene.root.getBoundingClientRect();
  const startTop = viewportHeight * scene.startFactor;
  const endTop = viewportHeight * scene.endFactor - rect.height;

  return normalize(rect.top, startTop, endTop);
};

const getPinProgress = (scene: Scene, viewportHeight: number) => {
  const pin = scene.pin;

  if (!pin) {
    return getThroughProgress(scene, viewportHeight);
  }

  const rect = scene.root.getBoundingClientRect();
  const pinHeight = pin.getBoundingClientRect().height;
  const pinTop = readNumber(window.getComputedStyle(pin).top, 0);
  const travel = Math.max(rect.height - pinHeight, 1);

  return normalize(pinTop - rect.top, 0, travel);
};

const applyScene = (scene: Scene, progress: number) => {
  setVar(scene.root, "--scene-progress", progress.toFixed(4));
  scene.root.classList.toggle("is-scene-active", progress > 0.001);
  scene.root.classList.toggle("is-scene-complete", progress > 0.999);

  scene.items.forEach(({ element, at, span }) => {
    const itemProgress = normalize(progress, at, at + span);

    setVar(element, "--item-progress", itemProgress.toFixed(4));
    element.classList.toggle("is-item-active", itemProgress > 0.04);
    element.classList.toggle("is-item-settled", itemProgress > 0.92);
  });
};

export const setupScrollScenes = () => {
  const roots = Array.from(document.querySelectorAll<HTMLElement>("[data-scene]"));

  if (!roots.length) {
    return;
  }

  const scenes: Scene[] = roots.map((root) => ({
    root,
    items: readItems(root),
    mode: root.dataset.sceneMode === "pin" ? "pin" : "through",
    pin: root.querySelector<HTMLElement>("[data-scene-pin]"),
    startFactor: readNumber(root.dataset.sceneStart, 0.86),
    endFactor: readNumber(root.dataset.sceneEnd, 0.42),
  }));

  if (prefersReducedMotion()) {
    // Reduced motion still needs the *end state*, otherwise scroll-revealed
    // content would never appear at all.
    scenes.forEach((scene) => applyScene(scene, 1));
    return;
  }

  const render = () => {
    const viewportHeight = Math.max(window.innerHeight, 1);

    scenes.forEach((scene) => {
      const progress =
        scene.mode === "pin"
          ? getPinProgress(scene, viewportHeight)
          : getThroughProgress(scene, viewportHeight);

      applyScene(scene, clamp(progress, 0, 1));
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
  window.addEventListener("orientationchange", requestRender);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(requestRender);
    scenes.forEach((scene) => observer.observe(scene.root));
  }
};
