import { setupFaqAccordion } from "./faq-accordion";
import { setupHistoryJumps } from "./history-jumps";
import { setupPanelTabs } from "./panel-tabs";
import { setupPillRails } from "./pill-rails";
import { setupRevealOnScroll } from "./reveal-on-scroll";
import { setupSkillCards } from "./skill-cards";

const safeSetup = (label: string, setup: () => void) => {
  try {
    setup();
  } catch (error) {
    console.error(`[landing] ${label} failed`, error);
  }
};

const boot = () => {
  safeSetup("reveal-on-scroll", setupRevealOnScroll);
  safeSetup("skill-cards", setupSkillCards);
  safeSetup("panel-tabs", setupPanelTabs);
  safeSetup("history-jumps", setupHistoryJumps);
  safeSetup("faq-accordion", setupFaqAccordion);
  safeSetup("pill-rails", setupPillRails);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
