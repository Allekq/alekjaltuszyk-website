/*
 * Entrance reveals that also work on phones.
 *
 * The older `reveal-on-scroll` module deliberately opts every compact viewport
 * out of revealing, which is right for the pages it was written for. The app
 * landing pages want the same reveal on every device, so they use `[data-rise]`
 * instead. Stagger comes from `--rise-index` set in the markup.
 */

import { prefersReducedMotion } from "./shared";

const RISEN_CLASS = "is-risen";

export const setupRise = () => {
  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-rise]"));

  if (!items.length) {
    return;
  }

  if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add(RISEN_CLASS));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add(RISEN_CLASS);
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    },
  );

  items.forEach((item) => {
    // Anything already on screen at load should not wait for a scroll event.
    if (item.getBoundingClientRect().top < window.innerHeight * 0.92) {
      item.classList.add(RISEN_CLASS);
      return;
    }

    observer.observe(item);
  });
};
