const getHistoryRoots = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-history-root]"));

const updateSelection = (root: HTMLElement, targetId: string) => {
  const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-history-tab]"));
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-history-panel]"));

  tabs.forEach((tab) => {
    const isActive = tab.dataset.historyTarget === targetId;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
    tab.tabIndex = isActive ? 0 : -1;
  });

  panels.forEach((panel) => {
    const isActive = panel.dataset.historyPanel === targetId;
    panel.classList.toggle("is-active", isActive);
    panel.toggleAttribute("hidden", !isActive);
  });
};

export const setupHomeHistoryTabs = () => {
  const roots = getHistoryRoots();

  if (!roots.length) {
    return;
  }

  roots.forEach((root) => {
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-history-tab]"));

    if (!tabs.length) {
      return;
    }

    updateSelection(root, tabs[0].dataset.historyTarget ?? "");

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.historyTarget;

        if (!targetId) {
          return;
        }

        updateSelection(root, targetId);
      });

      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
          return;
        }

        event.preventDefault();

        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        const nextTab = tabs[nextIndex];
        const targetId = nextTab.dataset.historyTarget;

        nextTab.focus();

        if (targetId) {
          updateSelection(root, targetId);
        }
      });
    });
  });
};
