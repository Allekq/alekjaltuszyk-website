const getSkillCardRoots = () =>
  Array.from(document.querySelectorAll<HTMLElement>("[data-skill-cards-root]"));

const updateSkillSelection = (root: HTMLElement, targetId: string) => {
  const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-skill-card]"));

  cards.forEach((card) => {
    const isActive = card.dataset.skillId === targetId;
    const trigger = card.querySelector<HTMLButtonElement>("[data-skill-trigger]");
    const details = card.querySelector<HTMLElement>("[data-skill-details]");

    card.classList.toggle("is-active", isActive);
    trigger?.setAttribute("aria-expanded", String(isActive));
    details?.setAttribute("aria-hidden", String(!isActive));
  });

  if (targetId) {
    root.dataset.activeSkill = targetId;
  } else {
    delete root.dataset.activeSkill;
  }
};

export const setupSkillCards = () => {
  const roots = getSkillCardRoots();

  if (!roots.length) {
    return;
  }

  roots.forEach((root) => {
    const triggers = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-skill-trigger]"));

    updateSkillSelection(root, "");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const targetId = trigger.dataset.skillTarget;

        if (!targetId) {
          return;
        }

        if (root.dataset.activeSkill === targetId) {
          updateSkillSelection(root, "");
          return;
        }

        updateSkillSelection(root, targetId);
      });
    });
  });
};
