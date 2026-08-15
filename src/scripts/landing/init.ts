import { setupActiveSectionNav } from "./active-section-nav";
import { setupAppShowcase } from "./app-showcase";
import { setupFaqAccordion } from "./faq-accordion";
import { setupHistoryJumps } from "./history-jumps";
import { setupAppLandingMotion } from "./motion";
import { setupPanelTabs } from "./panel-tabs";
import { setupPillRails } from "./pill-rails";
import { setupRevealOnScroll } from "./reveal-on-scroll";
import { setupSkillCards } from "./skill-cards";
import { setupStickyHeader } from "./sticky-header";

const safeSetup = (label: string, setup: () => void) => {
  try {
    setup();
  } catch (error) {
    console.error(`[landing] ${label} failed`, error);
  }
};

const boot = () => {
  // The scroll-motion engine the app landing pages use. Every module inside is
  // a no-op without its markup hook, so the home and /apps pages pay for it
  // only where they actually use `[data-scene]` or `[data-rise]`.
  safeSetup("app-landing-motion", setupAppLandingMotion);
  safeSetup("app-showcase", setupAppShowcase);
  safeSetup("reveal-on-scroll", setupRevealOnScroll);
  safeSetup("sticky-header", setupStickyHeader);
  safeSetup("active-section-nav", setupActiveSectionNav);
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
