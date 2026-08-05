/*
 * The hero compass needle.
 *
 * At rest it drifts, the way a real one settles. When a pointer is over the
 * stage it turns to face it, taking the short way round: the angle is unwrapped
 * against the previous one so a swing past due north does not send the needle
 * the wrong way through a full rotation.
 *
 * Markup contract
 *   [data-compass]            stage the pointer is tracked against
 *     [data-compass-needle]   receives --needle-angle
 *     [data-compass-bearing]  optional textual bearing readout
 */

import { createFrameScheduler, lerp, prefersReducedMotion, setVar } from "../motion/shared";

const CARDINALS = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"] as const;

const toBearingLabel = (angle: number) => {
  const normalized = ((angle % 360) + 360) % 360;
  const index = Math.round(normalized / 45) % CARDINALS.length;

  return `${CARDINALS[index]} · ${Math.round(normalized)}°`;
};

const setupCompass = (stage: HTMLElement) => {
  const needle = stage.querySelector<HTMLElement>("[data-compass-needle]");

  if (!needle) {
    return;
  }

  const bearingOut = stage.querySelector<HTMLElement>("[data-compass-bearing]");

  let current = -28;
  let target = -28;
  let idle = true;
  let frameId = 0;

  const render = () => {
    current = lerp(current, target, idle ? 0.03 : 0.13);
    setVar(needle, "--needle-angle", `${current.toFixed(2)}deg`);

    if (bearingOut) {
      bearingOut.textContent = toBearingLabel(current);
    }

    if (Math.abs(target - current) > 0.05) {
      frameId = window.requestAnimationFrame(render);
      return;
    }

    frameId = 0;

    if (idle) {
      // Settle somewhere else; a compass that never moves reads as a picture.
      target = current + (Math.random() * 46 - 23);
      wake();
    }
  };

  const wake = () => {
    if (frameId !== 0) {
      return;
    }

    frameId = window.requestAnimationFrame(render);
  };

  const aimAt = (clientX: number, clientY: number) => {
    const rect = stage.getBoundingClientRect();
    const dx = clientX - (rect.left + rect.width / 2);
    const dy = clientY - (rect.top + rect.height / 2);
    const raw = (Math.atan2(dy, dx) * 180) / Math.PI + 90;

    // Unwrap against the current angle so the needle takes the short way.
    const delta = ((raw - current + 540) % 360) - 180;

    idle = false;
    target = current + delta;
    wake();
  };

  stage.addEventListener("pointermove", (event) => {
    if (event.pointerType === "touch") {
      return;
    }

    aimAt(event.clientX, event.clientY);
  });

  stage.addEventListener("pointerleave", () => {
    idle = true;
    wake();
  });

  stage.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];

      if (touch) {
        aimAt(touch.clientX, touch.clientY);
      }
    },
    { passive: true },
  );

  stage.addEventListener(
    "touchend",
    () => {
      idle = true;
      wake();
    },
    { passive: true },
  );

  // Scrolling nudges the needle too, so the hero keeps moving on a phone.
  const onScroll = createFrameScheduler(() => {
    if (!idle) {
      return;
    }

    const rect = stage.getBoundingClientRect();
    const centred = (rect.top + rect.height / 2) / Math.max(window.innerHeight, 1);

    target = -28 + (0.5 - centred) * 84;
    wake();
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  wake();
};

export const setupCompassNeedle = () => {
  const stages = Array.from(document.querySelectorAll<HTMLElement>("[data-compass]"));

  if (!stages.length) {
    return;
  }

  if (prefersReducedMotion()) {
    stages.forEach((stage) => {
      const needle = stage.querySelector<HTMLElement>("[data-compass-needle]");
      const bearingOut = stage.querySelector<HTMLElement>("[data-compass-bearing]");

      if (needle) {
        setVar(needle, "--needle-angle", "-28deg");
      }

      if (bearingOut) {
        bearingOut.textContent = toBearingLabel(-28);
      }
    });
    return;
  }

  stages.forEach(setupCompass);
};
