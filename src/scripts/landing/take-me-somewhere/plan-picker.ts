/*
 * The "pick a time, pick a vibe" preview.
 *
 * Note the deliberate split between `data-plan-*` on the buttons (values the
 * option carries) and `data-plan-out-*` on the card (slots the values are
 * written into). Sharing one name makes `querySelector` match a button and
 * silently rewrite its own label.
 *
 * Nothing is submitted anywhere — this is a static page. Choosing updates a
 * preview card so the two inputs the app actually asks for are something you
 * can feel rather than read about.
 *
 * Markup contract
 *   [data-plan]                       root; carries data-plan-vibe and --plan-spread
 *     [data-plan-option="time"]       button with data-plan-value, data-plan-reach,
 *                                     data-plan-spread, data-plan-minutes
 *     [data-plan-option="vibe"]       button with data-plan-value, data-plan-teaser,
 *                                     data-plan-blurb, data-plan-hue
 *     [data-plan-out-reach]           reach readout
 *     [data-plan-out-minutes]         minutes readout
 *     [data-plan-out-teaser]          hidden-destination teaser
 *     [data-plan-out-blurb]           one-line description of the pick
 *
 * The server renders a valid default selection, so the card reads correctly
 * before this ever runs.
 */

const selectGroup = (root: HTMLElement, group: string, button: HTMLElement) => {
  root.querySelectorAll<HTMLElement>(`[data-plan-option="${group}"]`).forEach((option) => {
    const isActive = option === button;

    option.classList.toggle("is-selected", isActive);
    option.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
};

const setupPlan = (root: HTMLElement) => {
  const reachOut = root.querySelector<HTMLElement>("[data-plan-out-reach]");
  const minutesOut = root.querySelector<HTMLElement>("[data-plan-out-minutes]");
  const teaserOut = root.querySelector<HTMLElement>("[data-plan-out-teaser]");
  const blurbOut = root.querySelector<HTMLElement>("[data-plan-out-blurb]");

  const applyTime = (button: HTMLElement) => {
    selectGroup(root, "time", button);
    root.style.setProperty("--plan-spread", button.dataset.planSpread ?? "0.6");

    if (reachOut) {
      reachOut.textContent = button.dataset.planReach ?? "";
    }

    if (minutesOut) {
      minutesOut.textContent = button.dataset.planMinutes ?? "";
    }
  };

  const applyVibe = (button: HTMLElement) => {
    selectGroup(root, "vibe", button);
    root.dataset.planVibe = button.dataset.planHue ?? "sun";

    if (teaserOut) {
      teaserOut.textContent = button.dataset.planTeaser ?? "";
    }

    if (blurbOut) {
      blurbOut.textContent = button.dataset.planBlurb ?? "";
    }
  };

  root.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest<HTMLElement>("[data-plan-option]");

    if (!button) {
      return;
    }

    root.classList.add("is-live");

    if (button.dataset.planOption === "time") {
      applyTime(button);
      return;
    }

    applyVibe(button);
  });

  root.dataset.planReady = "true";
};

export const setupPlanPicker = () => {
  document.querySelectorAll<HTMLElement>("[data-plan]").forEach(setupPlan);
};
