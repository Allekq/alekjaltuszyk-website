const getPanelRoots = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-panel-root]"));

const updateSelection = (root: HTMLElement, targetId: string) => {
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-panel-tab]"));
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-panel-panel]"));
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

  panels.forEach((panel) => {
    const isActive = hasActivePanel && panel.dataset.panelPanel === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.toggleAttribute("hidden", !isActive);
  });
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
