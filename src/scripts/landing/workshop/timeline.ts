import { timelinePosition } from "./geometry";

export function setupTimeline() {
  const timeline = document.querySelector<HTMLElement>("[data-timeline]");
  if (!timeline) return;
  const chapters = [
    ...timeline.querySelectorAll<HTMLElement>("[data-chapter]"),
  ];
  const links = [
    ...timeline.querySelectorAll<HTMLAnchorElement>("[data-timeline-link]"),
  ];
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  const { signal } = events;
  let frame = 0;
  function update() {
    frame = 0;
    const bounds = chapters.map((chapter) => chapter.getBoundingClientRect());
    const { active, progress } = timelinePosition(
      bounds.map((rect) => rect.top),
      innerHeight * 0.38,
    );
    timeline!.style.setProperty("--thread-progress", String(progress));
    chapters.forEach((chapter, i) => {
      const rect = bounds[i];
      const shift = Math.max(
        -1,
        Math.min(
          1,
          (rect.top + Math.min(rect.height, 600) / 2 - innerHeight / 2) /
            innerHeight,
        ),
      );
      chapter.style.setProperty(
        "--chapter-shift",
        motion.matches ? "0px" : `${shift * 36}px`,
      );
      chapter.classList.toggle("is-current", i === active);
      if (i === active) links[i]?.setAttribute("aria-current", "location");
      else links[i]?.removeAttribute("aria-current");
    });
  }
  const request = () => {
    if (!frame && !document.hidden) frame = requestAnimationFrame(update);
  };
  addEventListener("scroll", request, { passive: true, signal });
  addEventListener("resize", request, { passive: true, signal });
  addEventListener("pageshow", request, { signal });
  motion.addEventListener("change", request, { signal });
  document.addEventListener("visibilitychange", request, { signal });
  const resize = new ResizeObserver(request);
  resize.observe(timeline);
  // Details remain native. Resizing the chapter also updates the progress mapping.
  chapters.forEach((chapter) => resize.observe(chapter));
  addEventListener(
    "pagehide",
    (event) => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (!event.persisted) {
        events.abort();
        resize.disconnect();
      }
    },
    { signal },
  );
  update();
}
