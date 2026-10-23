/** Seek a short, silent recording with native scroll; the real photo is the fallback. */
export function setupScrollFilm() {
  const root = document.querySelector<HTMLElement>("[data-scroll-film]");
  const video = root?.querySelector<HTMLVideoElement>("video");
  if (!root || !video) return;
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  const connection = (
    navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }
  ).connection;
  const events = new AbortController();
  const { signal } = events;
  let near = false,
    visible = false,
    failed = false,
    frame = 0,
    target = 0;
  const allowed = () => !media.matches && !connection?.saveData && !failed;

  const seek = () => {
    if (
      !allowed() ||
      !visible ||
      document.hidden ||
      video.seeking ||
      !Number.isFinite(video.duration)
    )
      return;
    if (Math.abs(video.currentTime - target) > 1 / 30)
      video.currentTime = target;
  };
  const update = () => {
    frame = 0;
    if (!allowed()) {
      root.removeAttribute("data-film-ready");
      return;
    }
    if (near && !video.getAttribute("src")) {
      video.preload = "auto";
      video.src = video.dataset.src!;
      video.load();
    }
    if (!visible || document.hidden || video.readyState < 2) return;
    const rect = root.getBoundingClientRect();
    const progress = Math.max(
      0,
      Math.min(
        1,
        (innerHeight * 0.8 - rect.top) /
          (innerHeight * 0.5 + rect.height * 0.5),
      ),
    );
    target = progress * Math.max(0, video.duration - 1 / 24);
    root.style.setProperty("--film-progress", String(progress));
    seek();
    if (!video.seeking && Math.abs(video.currentTime - target) <= 1 / 30)
      root.setAttribute("data-film-ready", "");
  };
  const request = () => {
    if (!frame) frame = requestAnimationFrame(update);
  };
  const loading = new IntersectionObserver(
    ([entry]) => {
      near = entry.isIntersecting;
      request();
    },
    { rootMargin: "180px" },
  );
  const viewing = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    request();
  });
  loading.observe(root);
  viewing.observe(root);
  video.addEventListener("loadeddata", request, { signal });
  video.addEventListener(
    "seeked",
    () => {
      if (allowed() && visible && !document.hidden)
        root.setAttribute("data-film-ready", "");
      seek();
    },
    { signal },
  );
  video.addEventListener(
    "error",
    () => {
      failed = true;
      root.removeAttribute("data-film-ready");
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
