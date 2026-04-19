const OVERFLOW_EPSILON = 6;

const updateRailState = (rail: HTMLElement) => {
  const maxScroll = Math.max(rail.scrollWidth - rail.clientWidth, 0);
  const isOverflowing = maxScroll > OVERFLOW_EPSILON;
  const hasStartFade = isOverflowing && rail.scrollLeft > OVERFLOW_EPSILON;
  const hasEndFade = isOverflowing && rail.scrollLeft < maxScroll - OVERFLOW_EPSILON;

  rail.classList.toggle("is-overflowing", isOverflowing);
  rail.classList.toggle("has-start-fade", hasStartFade);
  rail.classList.toggle("has-end-fade", hasEndFade);

  if (!isOverflowing && Math.abs(rail.scrollLeft) > OVERFLOW_EPSILON) {
    rail.scrollTo({ left: 0, behavior: "smooth" });
  }
};

export const setupPillRails = () => {
  const rails = Array.from(document.querySelectorAll<HTMLElement>("[data-pill-rail]"));

  if (!rails.length) {
    return;
  }

  const resizeObserver =
    typeof ResizeObserver === "undefined"
      ? null
      : new ResizeObserver((entries) => {
          for (const entry of entries) {
            if (entry.target instanceof HTMLElement) {
              updateRailState(entry.target);
            }
          }
        });

  for (const rail of rails) {
    const refresh = () => updateRailState(rail);

    rail.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    resizeObserver?.observe(rail);
    requestAnimationFrame(refresh);
  }
};
