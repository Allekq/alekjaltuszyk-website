import { setupFaqAccordion } from "./faq-accordion";
import { setupHomeHistoryTabs } from "./home-history-tabs";
import { setupRevealOnScroll } from "./reveal-on-scroll";

const safeSetup = (label: string, setup: () => void) => {
  try {
    setup();
  } catch (error) {
    console.error(`[landing] ${label} failed`, error);
  }
};

const boot = () => {
  safeSetup("reveal-on-scroll", setupRevealOnScroll);
  safeSetup("home-history-tabs", setupHomeHistoryTabs);
  safeSetup("faq-accordion", setupFaqAccordion);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}
