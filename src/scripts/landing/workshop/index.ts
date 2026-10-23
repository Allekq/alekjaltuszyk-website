import { setupWorkshopGallery } from "./gallery";
import { setupChoreography } from "./choreography";

if (document.querySelector(".workshop")) {
  setupWorkshopGallery();
  setupChoreography();
  // Keep WebGL out of the app directory and keep all content independent of it.
  const saveData = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection?.saveData;
  if (document.querySelector("[data-spatial-scene]") && !saveData) {
    import("./spatial")
      .then(({ setupSpatialScenes }) => setupSpatialScenes())
      .catch(() => {});
  }
}
