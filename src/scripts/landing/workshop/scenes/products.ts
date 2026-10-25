import * as THREE from "three";
import { stage, smoothstep, type SpatialModel } from "./shared";
import { createPhone } from "./phone-model";
import { createPhoneFlight, flightDuration } from "./phone-flight";

export function createProducts(
  environment: THREE.Texture,
  appIds: string[],
): SpatialModel {
  const model = stage(environment, 0.9, 10.5),
    { root } = model;
  const formation = new THREE.Group();
  root.add(formation);
  const phones = appIds.map((id, i) => {
    const phone = createPhone(id, i);
    const lane = i === 0 ? 0 : Math.ceil(i / 2) * (i % 2 ? -1 : 1);
    phone.position.set(
      lane * 1.43,
      Math.abs(lane) * 0.3,
      -Math.abs(lane) * 0.82 + 1.02,
    );
    phone.rotation.x = 0.44;
    formation.add(phone);
    return phone;
  });
  const flight = createPhoneFlight(root, formation, phones);
  return {
    ...model,
    actionDuration: flightDuration,
    actionLabels: ["Launch the squadron", "Fly again"],
    update({ progress, pointerX, pointerY, action, elapsed, reduced }) {
      const active = action > 0 && elapsed < flightDuration && !reduced;
      const t = active ? elapsed : 0;
      const lift = active
        ? smoothstep(0, 1.15, t) * (1 - smoothstep(5.2, flightDuration, t))
        : 0;
      const bank = Math.sin(smoothstep(0.9, 5.5, t) * Math.PI * 2) * lift;
      // The group moves as a squadron: its fixed spacing keeps every phone clear.
      formation.position.set(bank * 0.35, 0.27 + lift * 0.72, -lift * 0.65);
      formation.rotation.set(-lift * 0.12, bank * 0.08, bank * 0.12);
      flight(t, active, lift);
      root.rotation.set(
        pointerY * 0.04,
        -0.3 + pointerX * 0.12 + (reduced ? 0 : (progress - 0.5) * 0.18),
        -0.04,
      );
    },
  };
}
