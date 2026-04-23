const OVERFLOW_EPSILON = 6;

const updateRailState = (root: HTMLElement, viewport: HTMLElement) => {
  const maxScroll = Math.max(viewport.scrollWidth - viewport.clientWidth, 0);
  const isOverflowing = maxScroll > OVERFLOW_EPSILON;

  root.classList.toggle("is-overflowing", isOverflowing);

  if (!isOverflowing && Math.abs(viewport.scrollLeft) > OVERFLOW_EPSILON) {
    viewport.scrollTo({ left: 0, behavior: "smooth" });
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
              const root = entry.target.matches("[data-pill-rail]")
                ? entry.target
                : entry.target.closest<HTMLElement>("[data-pill-rail]");
              const viewport = root?.querySelector<HTMLElement>(".pill-rail__viewport");

              if (root && viewport) {
                updateRailState(root, viewport);
              }
            }
          }
        });

  for (const root of rails) {
    const viewport = root.querySelector<HTMLElement>(".pill-rail__viewport");

    if (!viewport) {
      continue;
    }

    const refresh = () => updateRailState(root, viewport);

    viewport.addEventListener("scroll", refresh, { passive: true });
    window.addEventListener("resize", refresh, { passive: true });
    resizeObserver?.observe(root);
    resizeObserver?.observe(viewport);
    requestAnimationFrame(refresh);
  }
};
