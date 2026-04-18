const getPanelRoots = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-panel-root]"));

const panelTimers = new WeakMap<HTMLElement, number>();
const PANEL_ANIMATION_MS = 320;

const updatePanelState = (root: HTMLElement, targetId: string) => {
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel-panel]"));
  const shouldAnimate = "panelAnimate" in root.dataset;
  const activePanel = panels.find(
    (panel) => panel.classList.contains("is-active") && !panel.classList.contains("is-leaving"),
  );
  const nextPanel = panels.find((panel) => panel.dataset.panelPanel === targetId);

  if (!shouldAnimate || !targetId || !nextPanel || !activePanel || activePanel === nextPanel) {
    panels.forEach((panel) => {
      const isActive = Boolean(targetId) && panel.dataset.panelPanel === targetId;
      panel.classList.remove("is-entering", "is-leaving");
      panel.classList.toggle("is-active", isActive);
      panel.toggleAttribute("hidden", !isActive);
    });

    return;
  }

  const existingTimer = panelTimers.get(root);

  if (existingTimer) {
    window.clearTimeout(existingTimer);
    panelTimers.delete(root);
  }

  panels.forEach((panel) => {
    if (panel !== activePanel && panel !== nextPanel) {
      panel.classList.remove("is-active", "is-entering", "is-leaving");
      panel.toggleAttribute("hidden", true);
    }
  });

  activePanel.classList.remove("is-active", "is-entering");
  activePanel.classList.add("is-leaving");
  activePanel.toggleAttribute("hidden", false);

  nextPanel.classList.add("is-active", "is-entering");
  nextPanel.classList.remove("is-leaving");
  nextPanel.toggleAttribute("hidden", false);

  const timer = window.setTimeout(() => {
    activePanel.classList.remove("is-leaving");
    activePanel.toggleAttribute("hidden", true);
    nextPanel.classList.remove("is-entering");
    panelTimers.delete(root);
  }, PANEL_ANIMATION_MS);

  panelTimers.set(root, timer);
};

const updateSelection = (root: HTMLElement, targetId: string) => {
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-panel-tab]"));
  const hasActivePanel = Boolean(targetId);

  root.classList.toggle("has-active-panel", hasActivePanel);

  if (hasActivePanel) {
    root.dataset.activeTarget = targetId;
  } else {
    delete root.dataset.activeTarget;
  }

  tabs.forEach((tab, index) => {
    const isActive = hasActivePanel && tab.dataset.panelTarget === targetId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive || (!hasActivePanel && index === 0) ? 0 : -1;
  });

  const activeTab = tabs.find((tab) => hasActivePanel && tab.dataset.panelTarget === targetId);
  const activeAnchor = activeTab?.dataset.panelAnchor;

  if (activeAnchor) {
    root.style.setProperty("--panel-anchor", activeAnchor);
  } else {
    root.style.removeProperty("--panel-anchor");
  }

  updatePanelState(root, targetId);
};

export const setupPanelTabs = () => {
  const roots = getPanelRoots();

  if (!roots.length) {
    return;
  }

  roots.forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-panel-tab]"));
    const allowCollapse = "panelAllowCollapse" in root.dataset;
    const defaultTarget = root.dataset.defaultTarget;

    if (!tabs.length) {
      return;
    }

    updateSelection(root, defaultTarget ?? "");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.panelTarget;

        if (!targetId) {
          return;
        }

        if (allowCollapse && root.dataset.activeTarget === targetId) {
          updateSelection(root, "");
          return;
        }

        updateSelection(root, targetId);
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowDown" && event.key !== "ArrowUp") {
          return;
        }

        event.preventDefault();

        const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        const targetId = nextTab.dataset.panelTarget;

        nextTab.focus();

        if (targetId) {
          updateSelection(root, targetId);
        }
      });
    });
  });
};
