/** Decorative scroll typing. Full code is the no-JS and reduced-motion fallback. */
class CodeWorkroomSketch extends HTMLElement {
  private dispose?: () => void;

  connectedCallback() {
    this.dispose?.();
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const tokens = Array.from(this.querySelectorAll<HTMLElement>('[data-code]'));
    const rows = Array.from(this.querySelectorAll<HTMLElement>('[data-line]'));
    const output = this.querySelector<HTMLElement>('[data-output]');
    const text = tokens.map(token => token.dataset.code ?? '');
    const total = text.reduce((length, value) => length + value.length, 0);
    let count = -1;
    let frame = 0;
    let complete = false;

    const draw = (next: number) => {
      if (next === count) return;
      count = next;
      let remaining = next;
      rows.forEach(row => row.removeAttribute('data-active'));
      let caret: HTMLElement | null = null;
      tokens.forEach((token, index) => {
        const visible = text[index].slice(0, Math.max(0, remaining));
        token.textContent = visible;
        if (visible.length) caret = token.closest<HTMLElement>('[data-line]');
        remaining -= text[index].length;
      });
      if (next < total && caret) (caret as HTMLElement).setAttribute('data-active', '');
      if (output) output.style.opacity = next === total ? '1' : '0';
    };
    const stop = () => {
      complete = true;
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
    };
    const update = () => {
      frame = 0;
      if (complete) return;
      const top = this.getBoundingClientRect().top + window.scrollY;
      const start = Math.max(0, top - window.innerHeight * .72);
      const distance = Math.min(240, window.innerHeight * .25);
      const progress = Math.max(0, Math.min(1, (window.scrollY - start) / distance));
      // Never erase finished letters when scrolling back or changing orientation.
      const next = Math.max(count, Math.round(8 + progress * (total - 8)));
      draw(next);
      if (next === total) stop();
    };
    const schedule = () => {
      if (!frame && !complete) frame = requestAnimationFrame(update);
    };
    const reduce = () => {
      if (motion.matches) { draw(total); stop(); }
    };

    this.dispose = () => { stop(); motion.removeEventListener('change', reduce); };
    if (motion.matches) { draw(total); return; }
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    motion.addEventListener('change', reduce);
    update();
  }

  disconnectedCallback() { this.dispose?.(); }
}

if (!customElements.get('cw-code-sketch')) customElements.define('cw-code-sketch', CodeWorkroomSketch);
