import { setupProjectMotion } from "./project-motion";
import { setupWorkshopGallery } from "./gallery";
import { setupChoreography } from "./choreography";
import { setupScrollFilm } from "./scroll-film";

if (document.querySelector(".workshop")) {
  setupWorkshopGallery();
  setupProjectMotion();
  setupChoreography();
  setupScrollFilm();
  // Keep WebGL out of the app directory and keep all content independent of it.
  const saveData = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection?.saveData;
  if (document.querySelector("[data-spatial-scene]") && !saveData) {
    const navigation = performance.getEntriesByType("navigation")[0] as
      PerformanceNavigationTiming | undefined;
    const hash = location.hash;
    let followAnchor = Boolean(hash) && navigation?.type === "navigate";
    const arrival = new AbortController();
    for (const event of ["wheel", "touchstart", "pointerdown", "keydown"]) {
      addEventListener(
        event,
        () => {
          followAnchor = false;
        },
        {
          once: true,
          passive: true,
          signal: arrival.signal,
        },
      );
    }
    import("./spatial")
      .then(({ setupSpatialScenes }) => {
        setupSpatialScenes();
        // The sticky hero adds scroll distance. Resolve an arriving deep link
        // against the enhanced layout, unless the reader has taken control.
        requestAnimationFrame(() => {
          if (followAnchor && location.hash === hash) {
            document
              .getElementById(hash.slice(1))
              ?.scrollIntoView({ behavior: "instant" });
          }
          arrival.abort();
        });
      })
      .catch(() => {
        arrival.abort();
      });
  }
}
