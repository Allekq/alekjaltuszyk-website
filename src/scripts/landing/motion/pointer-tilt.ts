/*
 * Pointer-reactive tilt and glow for panels, devices, and cards.
 *
 *   [data-tilt]                    receives --tilt-x/--tilt-y (deg), --tilt-lift (px),
 *                                  --pointer-x/--pointer-y (%), --tilt-strength (0..1)
 *     data-tilt-strength="1"       multiplier for the rotation
 *
 * Touch devices get a softer version on drag rather than nothing at all, so the
 * surface still reacts when someone runs a finger across it. Everything eases
 * back to rest when the pointer leaves, and every value is a CSS custom property
 * so the visual decision stays in the stylesheet.
 */

import { clamp, lerp, prefersReducedMotion, readNumber, setVar } from "./shared";

interface TiltState {
  currentGlowX: number;
  currentGlowY: number;
  currentStrength: number;
  currentX: number;
  currentY: number;
  element: HTMLElement;
  strength: number;
  targetGlowX: number;
  targetGlowY: number;
  targetStrength: number;
  targetX: number;
  targetY: number;
  touchId: number | null;
}

const MAX_ROTATION = 7.5;
const MAX_LIFT = 10;
const EASE = 0.16;

const aimAt = (state: TiltState, clientX: number, clientY: number, strength: number) => {
  const rect = state.element.getBoundingClientRect();
  const percentX = clamp((clientX - rect.left) / Math.max(rect.width, 1), 0, 1);
  const percentY = clamp((clientY - rect.top) / Math.max(rect.height, 1), 0, 1);

  state.targetX = (percentX - 0.5) * 2;
  state.targetY = (percentY - 0.5) * 2;
  state.targetGlowX = percentX;
  state.targetGlowY = percentY;
  state.targetStrength = strength;
};

const rest = (state: TiltState) => {
  state.targetX = 0;
  state.targetY = 0;
  state.targetStrength = 0;
};

const draw = (state: TiltState) => {
  state.currentX = lerp(state.currentX, state.targetX, EASE);
  state.currentY = lerp(state.currentY, state.targetY, EASE);
  state.currentGlowX = lerp(state.currentGlowX, state.targetGlowX, EASE);
  state.currentGlowY = lerp(state.currentGlowY, state.targetGlowY, EASE);
  state.currentStrength = lerp(state.currentStrength, state.targetStrength, EASE);

  const active = state.currentStrength * state.strength;

  state.element.classList.toggle("is-tilt-active", state.currentStrength > 0.04);
  setVar(state.element, "--tilt-strength", state.currentStrength.toFixed(3));
  setVar(state.element, "--tilt-y", `${(state.currentX * MAX_ROTATION * active).toFixed(2)}deg`);
  setVar(state.element, "--tilt-x", `${(-state.currentY * MAX_ROTATION * active).toFixed(2)}deg`);
  setVar(state.element, "--tilt-lift", `${(-Math.abs(state.currentY) * MAX_LIFT * active).toFixed(2)}px`);
  setVar(state.element, "--pointer-x", `${(state.currentGlowX * 100).toFixed(2)}%`);
  setVar(state.element, "--pointer-y", `${(state.currentGlowY * 100).toFixed(2)}%`);
};

const isSettled = (state: TiltState) =>
  Math.abs(state.targetX - state.currentX) < 0.001 &&
  Math.abs(state.targetY - state.currentY) < 0.001 &&
  Math.abs(state.targetGlowX - state.currentGlowX) < 0.001 &&
  Math.abs(state.targetGlowY - state.currentGlowY) < 0.001 &&
  Math.abs(state.targetStrength - state.currentStrength) < 0.001;

export const setupPointerTilt = () => {
  if (prefersReducedMotion()) {
    return;
  }

  const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-tilt]"));

  if (!elements.length) {
    return;
  }

  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const states: TiltState[] = elements.map((element) => ({
    element,
    strength: readNumber(element.dataset.tiltStrength, 1),
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    currentGlowX: 0.5,
    currentGlowY: 0.3,
    targetGlowX: 0.5,
    targetGlowY: 0.3,
    currentStrength: 0,
    targetStrength: 0,
    touchId: null,
  }));

  let frameId = 0;

  const render = () => {
    let keepGoing = false;

    states.forEach((state) => {
      draw(state);

      if (!isSettled(state)) {
        keepGoing = true;
      }
    });

    frameId = keepGoing ? window.requestAnimationFrame(render) : 0;
  };

  const wake = () => {
    if (frameId !== 0) {
      return;
    }

    frameId = window.requestAnimationFrame(render);
  };

  states.forEach((state) => {
    state.element.addEventListener("pointerenter", (event) => {
      if (event.pointerType !== "mouse" || !finePointer.matches) {
        return;
      }

      // Snap the glow to the entry point so it does not sweep in from the middle.
      aimAt(state, event.clientX, event.clientY, 1);
      state.currentGlowX = state.targetGlowX;
      state.currentGlowY = state.targetGlowY;
      wake();
    });

    state.element.addEventListener("pointermove", (event) => {
      if (event.pointerType !== "mouse" || !finePointer.matches) {
        return;
      }

      aimAt(state, event.clientX, event.clientY, 1);
      wake();
    });

    state.element.addEventListener("pointerleave", () => {
      rest(state);
      wake();
    });

    state.element.addEventListener(
      "touchstart",
      (event) => {
        const touch = event.changedTouches[0];

        if (state.touchId !== null || !touch) {
          return;
        }

        state.touchId = touch.identifier;
        state.currentGlowX = state.targetGlowX;
        state.currentGlowY = state.targetGlowY;
        aimAt(state, touch.clientX, touch.clientY, 0.42);
        wake();
      },
      { passive: true },
    );

    state.element.addEventListener(
      "touchmove",
      (event) => {
        if (state.touchId === null) {
          return;
        }

        const touch = Array.from(event.touches).find(
          ({ identifier }) => identifier === state.touchId,
        );

        if (!touch) {
          return;
        }

        aimAt(state, touch.clientX, touch.clientY, 0.42);
        wake();
      },
      { passive: true },
    );

    const endTouch = () => {
      if (state.touchId === null) {
        return;
      }

      state.touchId = null;
      rest(state);
      wake();
    };

    state.element.addEventListener("touchend", endTouch, { passive: true });
    state.element.addEventListener("touchcancel", endTouch, { passive: true });
  });

  window.addEventListener("blur", () => {
    states.forEach((state) => {
      state.touchId = null;
      rest(state);
    });
    wake();
  });
};
