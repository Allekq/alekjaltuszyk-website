/** Scroll is native. Only illustration transforms follow it; public copy is never hidden. */
export function setupChoreography() {
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const chapters = [
    ...document.querySelectorAll<HTMLElement>("[data-chapter]"),
  ];
  const timeline = document.querySelector<HTMLElement>("[data-timeline]");
  const climbing = document.querySelector<HTMLElement>(".workshop-climbing");
  const key = document.querySelector<HTMLDetailsElement>("[data-key-story]");
  let frame = 0;
  function update() {
    frame = 0;
    if (timeline) {
      const rect = timeline.getBoundingClientRect();
      timeline.style.setProperty(
        "--thread-progress",
        String(
          Math.max(
            0,
            Math.min(1, (innerHeight * 0.55 - rect.top) / rect.height),
          ),
        ),
      );
    }
    chapters.forEach((chapter) => {
      const rect = chapter.getBoundingClientRect(),
        p = Math.max(
          -1,
          Math.min(
            1,
            (rect.top + Math.min(rect.height, 600) / 2 - innerHeight / 2) /
              innerHeight,
          ),
        );
      chapter.style.setProperty(
        "--chapter-shift",
        motion.matches ? "0px" : `${p * 48}px`,
      );
      chapter.classList.toggle(
        "is-current",
        rect.top < innerHeight * 0.65 && rect.bottom > innerHeight * 0.4,
      );
    });
    if (climbing) {
      const rect = climbing.getBoundingClientRect();
      if (rect.top < innerHeight && rect.bottom > 0)
        climbing.style.setProperty(
          "--photo-shift",
          motion.matches
            ? "0px"
            : `${Math.max(-35, Math.min(35, rect.top * 0.06))}px`,
        );
    }
  }
  const request = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", request, { passive: true });
  motion.addEventListener("change", request);
  const resize = new ResizeObserver(request);
  if (timeline) resize.observe(timeline);
  key?.addEventListener("toggle", () => {
    const hint = key.querySelector("[data-key-hint]");
    if (hint)
      hint.textContent = key.open
        ? "A little less mystery"
        : "Press to find out";
    if (motion.matches) return;
    key
      .querySelector(".workshop-key__cap")
      ?.animate(
        [
          { translate: "0 0" },
          { translate: "0 14px", offset: 0.28 },
          { translate: "0 0" },
        ],
        { duration: 420, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
    if (key.open)
      key.querySelector(".workshop-key__story")?.animate(
        [
          { opacity: 0, transform: "translateY(-18px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 550, easing: "cubic-bezier(.2,.7,.2,1)" },
      );
  });
  update();
}
