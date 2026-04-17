import { setupRevealOnScroll } from "./reveal-on-scroll";

const boot = () => {
  try {
    setupRevealOnScroll();
  } catch (error) {
    console.error("[landing] reveal-on-scroll failed", error);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", boot, { once: true });
} else {
  boot();
}

