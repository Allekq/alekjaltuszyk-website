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
