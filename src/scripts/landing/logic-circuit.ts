/** Circuit state lives only in this page's memory. No storage or network calls. */
export function setupLogicCircuits() {
  const circuits = [...document.querySelectorAll<HTMLElement>("[data-logic-circuit]")];
  if (!circuits.length) return;
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const events = new AbortController();
  const { signal } = events;
  const clamp = (value: number) => Math.max(0, Math.min(1, value));
  let frame = 0;

  for (const circuit of circuits) {
    if (circuit.dataset.interactive !== "true") continue;
    const inputs = { a: true, b: true };
    const buttons = [...circuit.querySelectorAll<HTMLButtonElement>("[data-input]")];
    const render = () => {
      const and = inputs.a && inputs.b;
      const values = { ...inputs, and, out: !and };
      for (const [key, value] of Object.entries(values)) {
        circuit.querySelectorAll<SVGElement>(`[data-signal="${key}"]`).forEach((node) => {
          node.dataset.high = String(value);
        });
        const text = circuit.querySelector(`[data-value="${key}"]`);
        if (text) text.textContent = String(Number(value));
      }
      for (const button of buttons) {
        button.setAttribute("aria-pressed", String(inputs[button.dataset.input as "a" | "b"]));
      }
      const result = circuit.querySelector("[data-circuit-result]");
      if (result) result.textContent = `${Number(inputs.a)} AND ${Number(inputs.b)} = ${Number(and)}; NOT ${Number(and)} = ${Number(!and)}`;
    };
    for (const button of buttons) {
      button.addEventListener("click", () => {
        const key = button.dataset.input as "a" | "b";
        inputs[key] = !inputs[key];
        render();
      }, { signal });
    }
    circuit.querySelectorAll<HTMLElement>(".logic-circuit__controls, [data-circuit-hint]").forEach((node) => { node.hidden = false; });
    render();
  }

  function update() {
    frame = 0;
    for (const circuit of circuits) {
      const target = circuit.closest<HTMLElement>(".workshop-project") ?? circuit;
      const rect = target.getBoundingClientRect();
      const gallery = target.closest("[data-workshop-gallery]");
      const vertical = clamp((innerHeight - rect.top) / (innerHeight * 0.7));
      const horizontal = gallery ? clamp((innerWidth - rect.left) / (rect.width * 0.85)) : 1;
      const progress = motion.matches ? 1 : Math.min(vertical, horizontal);
      // Scroll affects the card's pose, never its logic or signal values.
      circuit.style.setProperty("--logic-progress", String(progress));
      circuit.style.setProperty("--logic-tilt", `${motion.matches ? 0 : (1 - progress) * 9}deg`);
    }
  }
  const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
  document.addEventListener("scroll", schedule, { passive: true, capture: true, signal });
  addEventListener("resize", schedule, { passive: true, signal });
  addEventListener("pageshow", schedule, { signal });
  motion.addEventListener("change", schedule, { signal });
  addEventListener("pagehide", (event) => {
    if (!event.persisted) { events.abort(); cancelAnimationFrame(frame); }
  }, { signal });
  update();
}
