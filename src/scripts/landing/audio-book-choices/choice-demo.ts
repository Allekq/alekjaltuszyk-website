/*
 * The playable choice demo: a three-question walk through a sample story tree.
 *
 * Markup contract
 *   [data-choice-demo]                      root; carries --demo-progress and data-demo-state
 *     [data-demo-panel="<id>"]              one node; data-demo-kind is "choice" or "ending"
 *     [data-demo-answer="yes|no"]           button; data-demo-next points at the next panel id
 *     [data-demo-back]                      undo the last answer
 *     [data-demo-restart]                   return to the root
 *     [data-demo-path]                      list the answers are appended to
 *     [data-demo-head]                      the head glyph that nods or shakes
 *     [data-demo-step]                      "answered / total" readout
 *
 * Server-rendered markup already shows the root panel and an empty path, so a
 * visitor without JavaScript still reads a real scene instead of a blank box.
 */

const ROOT_ATTRIBUTE = "data-demo-root";
const GESTURE_MS = 760;

interface DemoElements {
  back: HTMLButtonElement | null;
  head: HTMLElement | null;
  panels: Map<string, HTMLElement>;
  path: HTMLElement | null;
  root: HTMLElement;
  rootPanelId: string;
  step: HTMLElement | null;
  totalSteps: number;
}

const collect = (root: HTMLElement): DemoElements | null => {
  const panels = new Map<string, HTMLElement>();

  root.querySelectorAll<HTMLElement>("[data-demo-panel]").forEach((panel) => {
    const id = panel.dataset.demoPanel;

    if (id) {
      panels.set(id, panel);
    }
  });

  const rootPanelId = root.getAttribute(ROOT_ATTRIBUTE) ?? "";

  if (!panels.size || !panels.has(rootPanelId)) {
    return null;
  }

  return {
    back: root.querySelector<HTMLButtonElement>("[data-demo-back]"),
    head: root.querySelector<HTMLElement>("[data-demo-head]"),
    panels,
    path: root.querySelector<HTMLElement>("[data-demo-path]"),
    root,
    rootPanelId,
    step: root.querySelector<HTMLElement>("[data-demo-step]"),
    totalSteps: Number.parseInt(root.dataset.demoSteps ?? "3", 10) || 3,
  };
};

const setupDemo = (elements: DemoElements) => {
  const { panels, root, rootPanelId } = elements;
  const trail: { answer: "yes" | "no"; label: string; panelId: string }[] = [];

  let currentId = rootPanelId;
  let gestureTimer = 0;
  let hasInteracted = false;
  /*
   * Whether the last activation came from a keyboard or assistive technology
   * rather than a finger. Both of those send a click with `detail === 0`.
   * Only they get focus moved into the new beat: a pointer tap that moves
   * focus onto a `tabindex="-1"` heading makes Safari paint a focus ring
   * around the question, which reads as an accidental text selection.
   */
  let activatedWithoutPointer = false;

  const showPanel = (id: string) => {
    const next = panels.get(id);

    if (!next) {
      return;
    }

    panels.forEach((panel, panelId) => {
      const isActive = panelId === id;

      panel.classList.toggle("is-active", isActive);
      panel.toggleAttribute("hidden", !isActive);
      panel.setAttribute("aria-hidden", isActive ? "false" : "true");
    });

    currentId = id;
    root.dataset.demoState = next.dataset.demoKind === "ending" ? "ended" : "playing";
    root.dataset.demoEnding = next.dataset.demoEndingKind ?? "";
    root.style.setProperty(
      "--demo-progress",
      (trail.length / Math.max(elements.totalSteps, 1)).toFixed(3),
    );

    if (elements.step) {
      elements.step.textContent = `${trail.length} / ${elements.totalSteps}`;
    }

    if (elements.back) {
      elements.back.disabled = trail.length === 0;
    }

    // Move focus into the new beat so keyboard and screen-reader users land on
    // it — but never on first paint, where that would yank the page around,
    // and never for a plain tap, which does not need it and shows a ring.
    if (hasInteracted && activatedWithoutPointer) {
      next.querySelector<HTMLElement>("[data-demo-focus]")?.focus({ preventScroll: true });
    }
  };

  const renderPath = () => {
    if (!elements.path) {
      return;
    }

    elements.path.replaceChildren(
      ...trail.map((entry) => {
        const item = document.createElement("li");

        item.className = "abc-player__token";
        item.dataset.answer = entry.answer;
        item.textContent = entry.label;

        return item;
      }),
    );

    elements.path.classList.toggle("is-empty", trail.length === 0);
  };

  const playGesture = (answer: "yes" | "no") => {
    const head = elements.head;

    if (!head || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.clearTimeout(gestureTimer);
    head.classList.remove("is-nodding", "is-shaking");
    // Force a reflow so the class can be re-applied back to back.
    void head.offsetWidth;
    head.classList.add(answer === "yes" ? "is-nodding" : "is-shaking");
    gestureTimer = window.setTimeout(() => {
      head.classList.remove("is-nodding", "is-shaking");
    }, GESTURE_MS);
  };

  root.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const answerButton = target.closest<HTMLElement>("[data-demo-answer]");

    hasInteracted = true;
    activatedWithoutPointer = event.detail === 0;

    if (answerButton) {
      const answer = answerButton.dataset.demoAnswer === "no" ? "no" : "yes";
      const next = answerButton.dataset.demoNext;

      if (!next || !panels.has(next)) {
        return;
      }

      trail.push({
        answer,
        label: answer === "yes" ? "Yes" : "No",
        panelId: currentId,
      });
      playGesture(answer);
      showPanel(next);
      renderPath();
      return;
    }

    if (target.closest("[data-demo-back]")) {
      const previous = trail.pop();

      if (!previous) {
        return;
      }

      showPanel(previous.panelId);
      renderPath();
      return;
    }

    if (target.closest("[data-demo-restart]")) {
      trail.length = 0;
      showPanel(rootPanelId);
      renderPath();
    }
  });

  root.dataset.demoReady = "true";
  showPanel(rootPanelId);
  renderPath();
};

export const setupChoiceDemo = () => {
  document.querySelectorAll<HTMLElement>("[data-choice-demo]").forEach((root) => {
    const elements = collect(root);

    if (elements) {
      setupDemo(elements);
    }
  });
};
