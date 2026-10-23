/** Exact snapping is important: demand-driven rendering must eventually stop. */
export const approach = (
  current: number,
  target: number,
  seconds: number,
  reduced = false,
) => {
  if (reduced || Math.abs(target - current) < 0.0005) return target;
  return (
    current +
    (target - current) *
      (1 - Math.exp(-8 * Math.max(0, Math.min(seconds, 0.05))))
  );
};

export const sceneProgress = (top: number, height: number, viewport: number) =>
  Math.max(0, Math.min(1, (viewport - top) / (viewport + height)));

/** Stable terrain, with a winding river and continuous hills between fixed seeds. */
export const landscapeHeight = (x: number, z: number, variant: number) => {
  if (Math.abs(x - Math.sin(z * 0.55 + variant) * 1.7) < 0.9) return 0.12;
  return (
    0.24 +
    Math.max(
      0,
      Math.sin(x * 0.4 + variant * 0.8) * Math.cos(z * 0.38 + variant * 0.25),
    ) *
      1.55 +
    Math.sin(x * 1.8 + z) * 0.06
  );
};

export const galleryAvailability = (
  left: number,
  width: number,
  total: number,
) => ({
  previous: left > 2,
  next: left + width < total - 2,
});

/** A short native scroll track, independent of viewport or sticky element position. */
export const buildScrollProgress = (
  top: number,
  trackHeight: number,
  sceneHeight: number,
) => Math.max(0, Math.min(1, -top / Math.max(1, trackHeight - sceneHeight)));

/** Reduced motion shows the complete world; scrolling stays bounded. */
export const buildProgress = (scroll: number, reduced = false) =>
  reduced ? 1 : Math.max(0, Math.min(1, scroll));

/** Chapter starts are measured afresh so expanded details never desynchronise the rail. */
export function timelinePosition(starts: number[], readingLine: number) {
  if (!starts.length) return { active: -1, progress: 0 };
  let active = 0;
  starts.forEach((top, i) => {
    if (top <= readingLine) active = i;
  });
  const last = starts.length - 1;
  const between =
    active < last
      ? Math.max(
          0,
          Math.min(
            1,
            (readingLine - starts[active]) /
              Math.max(1, starts[active + 1] - starts[active]),
          ),
        )
      : 0;
  return {
    active,
    progress: last ? Math.min(1, (active + between) / last) : 1,
  };
}
