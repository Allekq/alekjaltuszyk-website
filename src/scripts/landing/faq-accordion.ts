interface FaqState {
  details: HTMLDetailsElement;
  summary: HTMLElement;
  content: HTMLElement;
  expanded: boolean;
  animation: Animation | null;
}

const settle = (state: FaqState) => {
  state.animation?.cancel();
  state.animation = null;
  state.details.open = state.expanded;
  state.content.style.height = state.expanded ? "auto" : "0px";
  state.content.style.opacity = state.expanded ? "1" : "0";
};

const toggle = (state: FaqState, reducedMotion: boolean) => {
  const { details, content, summary } = state;
  // Capture the current frame before cancelling so a quick second tap reverses
  // from where the answer is, rather than jumping back to an endpoint.
  const height = content.getBoundingClientRect().height;
  const style = getComputedStyle(content);
  const opacity = style.opacity;
  const duration = Number.parseFloat(style.getPropertyValue("--motion-standard")) || 280;
  state.animation?.cancel();
  state.expanded = !state.expanded;
  details.classList.toggle("is-expanded", state.expanded);
  summary.setAttribute("aria-expanded", String(state.expanded));
  details.open = true;

  const endHeight = state.expanded ? content.scrollHeight : 0;
  content.style.height = `${endHeight}px`;
  content.style.opacity = state.expanded ? "1" : "0";

  if (reducedMotion) {
    settle(state);
    return;
  }

  const animation = content.animate(
    [{ height: `${height}px`, opacity }, { height: `${endHeight}px`, opacity: content.style.opacity }],
    { duration, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
  );
  state.animation = animation;
  animation.onfinish = () => {
    if (state.animation === animation) {
      settle(state);
    }
  };
};

export const setupFaqAccordion = () => {
  const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (motionQuery.matches || !("animate" in Element.prototype)) {
    return;
  }

  const states: FaqState[] = Array.from(
    document.querySelectorAll<HTMLDetailsElement>("[data-faq-item]"),
  ).flatMap((details) => {
    const summary = details.querySelector<HTMLElement>("[data-faq-trigger]");
    const content = details.querySelector<HTMLElement>("[data-faq-content]");
    return summary && content
      ? [{ details, summary, content, expanded: details.open, animation: null }]
      : [];
  });

  if (!states.length) {
    return;
  }

  states.forEach((state) => {
    state.details.classList.add("is-enhanced");
    state.details.classList.toggle("is-expanded", state.expanded);
    state.summary.setAttribute("aria-expanded", String(state.expanded));
    settle(state);
    state.summary.addEventListener("click", (event) => {
      event.preventDefault();
      toggle(state, motionQuery.matches);
    });
  });

  motionQuery.addEventListener("change", () => {
    if (motionQuery.matches) {
      states.forEach(settle);
    }
  });
};
