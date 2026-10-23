/** A native sticky stage: scroll seeks the recording, then releases at the landing. */
export function setupScrollFilm() {
  const root = document.querySelector<HTMLElement>("[data-scroll-film]");
  const video = root?.querySelector<HTMLVideoElement>("video");
  const pin = root?.querySelector<HTMLElement>(".workshop-practice__pin");
  const clock = root?.querySelector<HTMLElement>("[data-film-clock]");
  const phase = root?.querySelector<HTMLElement>("[data-film-phase]");
  if (!root || !video || !pin || !clock || !phase) return;
  const media = matchMedia(
    "(prefers-reduced-motion: reduce), (max-height: 540px)",
  );
  const connection = (
    navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }
  ).connection;
  const events = new AbortController();
  const { signal } = events;
  const holdStart = Number(root.dataset.holdStart);
  const holdEnd = Number(root.dataset.holdEnd);
  let near = false,
    visible = false,
    failed = false,
    frame = 0,
    target = 0;
  const allowed = () => !media.matches && !connection?.saveData && !failed;
  const enhance = () => {
    const active = allowed();
    if (root.hasAttribute("data-film-active") === active) return;
    const before = root.getBoundingClientRect();
    root.toggleAttribute("data-film-active", active);
    if (!active) root.removeAttribute("data-film-ready");
    if (before.bottom < 0) {
      const shift = root.getBoundingClientRect().bottom - before.bottom;
      if (shift) scrollBy({ top: shift, behavior: "instant" });
    }
  };
  const display = () => {
    if (!allowed() || !visible || video.readyState < 2) return;
    root.setAttribute("data-film-ready", "");
    const time = video.currentTime;
    const held = Math.max(0, Math.min(holdEnd, time) - holdStart);
    clock.firstChild!.textContent = `${held.toFixed(1).padStart(4, "0")} `;
    phase.textContent =
      time < holdStart
        ? "Lift"
        : time < holdEnd
          ? "Hold"
          : time < video.duration - 0.5
            ? "Lower"
            : "Landed · keep exploring ↓";
  };
  const seek = () => {
    if (
      !allowed() ||
      !visible ||
      document.hidden ||
      video.seeking ||
      video.readyState < 2
    )
      return;
    if (Math.abs(video.currentTime - target) > 1 / 30)
      video.currentTime = target;
    else display();
  };
  const update = () => {
    frame = 0;
    enhance();
    if (!allowed()) return;
    if (near && !video.getAttribute("src")) {
      video.preload = "auto";
      video.src = video.dataset.src!;
      video.load();
    }
    if (!visible || document.hidden || !Number.isFinite(video.duration)) return;
    const rect = root.getBoundingClientRect();
    const progress = Math.max(
      0,
      Math.min(1, -rect.top / Math.max(1, rect.height - pin.offsetHeight)),
    );
    target = progress * Math.max(0, video.duration - 1 / 24);
    root.style.setProperty("--film-progress", String(progress));
    seek();
  };
  const request = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  const loading = new IntersectionObserver(
    ([entry]) => {
      near = entry.isIntersecting;
      request();
    },
    { rootMargin: "600px" },
  );
  const viewing = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    request();
  });
  enhance();
  loading.observe(root);
  viewing.observe(pin);
  video.addEventListener("loadeddata", request, { signal });
  video.addEventListener(
    "seeked",
    () => {
      display();
      seek();
    },
    { signal },
  );
  video.addEventListener(
    "error",
    () => {
      failed = true;
      enhance();
    },
    { signal },
  );
  media.addEventListener("change", request, { signal });
  connection?.addEventListener("change", request, { signal });
  addEventListener("scroll", request, { passive: true, signal });
  addEventListener("resize", request, { passive: true, signal });
  document.addEventListener("visibilitychange", request, { signal });
  addEventListener("pageshow", request, { signal });
  addEventListener(
    "pagehide",
    (event) => {
      cancelAnimationFrame(frame);
      frame = 0;
      if (!event.persisted) {
        loading.disconnect();
        viewing.disconnect();
        events.abort();
      }
    },
    { signal },
  );
}
