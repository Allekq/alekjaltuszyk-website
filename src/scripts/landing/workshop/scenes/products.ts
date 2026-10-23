import * as THREE from "three";
import { stage, smoothstep, type SpatialModel } from "./shared";
import { createPhone } from "./phone-model";

export function createProducts(
  environment: THREE.Texture,
  appIds: string[],
): SpatialModel {
  const model = stage(environment, 0.9, 9.8),
    { root } = model;
  const orbit = new THREE.Group();
  root.add(orbit);
  // The whole formation turns rigidly around the middle phone's top edge.
  // Fixed spacing means the bodies cannot pass through one another at any angle.
  appIds.forEach((id, i) => {
    const phone = createPhone(id, i);
    const lane = i === 0 ? 0 : Math.ceil(i / 2) * (i % 2 ? -1 : 1);
    phone.position.set(
      lane * 1.43,
      Math.abs(lane) * 0.3,
      -Math.abs(lane) * 0.82 + 1.02,
    );
    phone.rotation.x = 0.44;
    orbit.add(phone);
  });
  return {
    ...model,
    actionDuration: 4.6,
    actionLabels: ["Take them for a spin", "One more spin"],
    update({ progress, pointerX, pointerY, action, elapsed, reduced }) {
      const active = action > 0 && elapsed < 4.6 && !reduced;
      const turn = active ? smoothstep(0.55, 4.05, elapsed) : 0;
      const lift = active
        ? smoothstep(0, 0.65, elapsed) * (1 - smoothstep(3.95, 4.6, elapsed))
        : 0;
      orbit.position.y = 0.27 + lift * 0.65;
      orbit.rotation.y = turn * Math.PI * 2;
      root.rotation.set(
        pointerY * 0.04,
        -0.3 + pointerX * 0.12 + (reduced ? 0 : (progress - 0.5) * 0.18),
        -0.04,
      );
    },
  };
}
