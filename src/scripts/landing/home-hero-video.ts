const heroVideo = document.querySelector<HTMLVideoElement>("[data-hero-video]");

const shouldSkipVideo = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

  return prefersReducedMotion || connection?.saveData === true;
};

const loadHeroVideo = () => {
  if (!heroVideo || shouldSkipVideo()) {
    return;
  }

  const source = heroVideo.querySelector<HTMLSourceElement>("source[data-src]");

  if (!source?.dataset.src || source.src) {
    return;
  }

  source.src = source.dataset.src;
  heroVideo.load();
  void heroVideo.play().catch(() => {
    /* Autoplay can be denied; the poster still carries the hero. */
  });
};

const scheduler = window as Window & {
  requestIdleCallback?: (callback: () => void, options?: { timeout?: number }) => number;
};

if (document.readyState === "complete") {
  scheduler.requestIdleCallback?.(loadHeroVideo, { timeout: 1600 }) ?? window.setTimeout(loadHeroVideo, 500);
} else {
  window.addEventListener(
    "load",
    () => {
      scheduler.requestIdleCallback?.(loadHeroVideo, { timeout: 1600 }) ??
        window.setTimeout(loadHeroVideo, 500);
    },
    { once: true },
  );
}
