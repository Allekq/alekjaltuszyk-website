const getHistoryJumpLinks = () =>
  Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-history-jump]"));

const getScrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export const setupHistoryJumps = () => {
  const links = getHistoryJumpLinks();

  if (!links.length) {
    return;
  }

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const historyTarget = link.dataset.historyTarget;
      const historySection = document.getElementById("history");

      if (!historyTarget || !historySection) {
        return;
      }

      const historyTab = historySection.querySelector<HTMLButtonElement>(
        `[data-panel-target="${historyTarget}"]`,
      );

      event.preventDefault();
      historyTab?.click();
      historySection.scrollIntoView({
        behavior: getScrollBehavior(),
        block: "start",
      });
    });
  });
};
