const getScrollPosition = () => window.scrollY + 180;

export const setupActiveSectionNav = () => {
  const roots = document.querySelectorAll<HTMLElement>("[data-nav-root]");

  roots.forEach((root) => {
    const pills = Array.from(root.querySelectorAll<HTMLElement>("[data-nav-pill]"));
    const highlight = root.querySelector<HTMLElement>("[data-nav-highlight]");

    if (!pills.length || !highlight) {
      return;
    }

    let activePill: HTMLElement | null = null;
    let frameId = 0;
    let forceSync = false;

    const setActive = (pill: HTMLElement | undefined, force = false) => {
      if (!pill || (!force && activePill === pill)) {
        return;
      }

      activePill = pill;
      pills.forEach((item) => {
        const isActive = item === pill;

        item.classList.toggle("is-active", isActive);
        if (isActive) {
          item.setAttribute("aria-current", "page");
        } else {
          item.removeAttribute("aria-current");
        }
      });

      highlight.style.width = `${pill.offsetWidth}px`;
      highlight.style.transform = `translateX(${pill.offsetLeft}px)`;
    };

    const syncFromScroll = (force = false) => {
      const scrollY = getScrollPosition();
      let active = pills[0];

      pills.forEach((pill) => {
        const sectionId = pill.dataset.sectionId;
        const section = sectionId ? document.getElementById(sectionId) : null;

        if (section && section.offsetTop <= scrollY) {
          active = pill;
        }
      });

      setActive(active, force);
      frameId = 0;
      forceSync = false;
    };

    const requestSync = (force = false) => {
      forceSync ||= force;

      if (frameId !== 0) {
        return;
      }

      frameId = window.requestAnimationFrame(() => syncFromScroll(forceSync));
    };

    pills.forEach((pill) => {
      pill.addEventListener("click", () => setActive(pill));
    });

    syncFromScroll(true);
    window.addEventListener("scroll", () => requestSync(), { passive: true });
    window.addEventListener("resize", () => requestSync(true));
  });
};
