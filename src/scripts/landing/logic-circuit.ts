/** Decorative scroll progression. Static, complete circuitry is the no-JS fallback. */
export function setupLogicCircuits() {
  const circuits = [...document.querySelectorAll<HTMLElement>("[data-logic-circuit]")];
  if (!circuits.length) return;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  const { signal } = events;
  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  let frame = 0;
  function update() {
    frame = 0;
    for (const circuit of circuits) {
      const target = circuit.closest<HTMLElement>(".workshop-project") ?? circuit;
      const rect = target.getBoundingClientRect();
      const gallery = target.closest("[data-workshop-gallery]");
      const vertical = clamp((innerHeight - rect.top) / (innerHeight * 0.7));
      const horizontal = gallery ? clamp((innerWidth - rect.left) / (rect.width * 0.85)) : 1;
      const progress = motion.matches ? 1 : Math.min(vertical, horizontal);
      circuit.style.setProperty("--logic-progress", String(progress));
      circuit.style.setProperty("--logic-input", String(clamp(progress * 1.7)));
      circuit.style.setProperty("--logic-output", String(clamp((progress - 0.4) / 0.6)));
      circuit.style.setProperty("--logic-tilt", `${motion.matches ? 0 : (1 - progress) * 9}deg`);
    }
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  // Capture includes the homepage's native horizontal gallery scroll.
  document.addEventListener("scroll", schedule, { passive: true, capture: true, signal });
  addEventListener("resize", schedule, { passive: true, signal });
  addEventListener("pageshow", schedule, { signal });
  motion.addEventListener("change", schedule, { signal });
  addEventListener("pagehide", (event) => {
    if (!event.persisted) { events.abort(); cancelAnimationFrame(frame); }
  }, { signal });
  update();
}
