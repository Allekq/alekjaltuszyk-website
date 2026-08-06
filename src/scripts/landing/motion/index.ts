import { setupParallax } from "./parallax";
import { setupPointerTilt } from "./pointer-tilt";
import { setupRise } from "./rise";
import { setupScrollScenes } from "./scroll-scene";

const safeSetup = (label: string, setup: () => void) => {
  try {
    setup();
  } catch (error) {
    console.error(`[motion] ${label} failed`, error);
  }
};

/**
 * Shared scroll-motion layer for the app landing pages. Every module is a no-op
 * when its markup hook is absent, so this is safe to boot from any page.
 */
export const setupAppLandingMotion = () => {
  safeSetup("rise", setupRise);
  safeSetup("scroll-scene", setupScrollScenes);
  safeSetup("parallax", setupParallax);
  safeSetup("pointer-tilt", setupPointerTilt);
};
