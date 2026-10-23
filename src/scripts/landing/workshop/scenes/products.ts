import * as THREE from "three";
import {
  block,
  material,
  palette,
  stage,
  smoothstep,
  type SpatialModel,
} from "./shared";

import { interfaceStudy } from "./phone-screens";

export function createProducts(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 0.8, 10),
    { root } = model;
  const bodies: THREE.Group[] = [];
  const screens: ((progress: number, variant?: number) => void)[] = [];
  // Three original studies represent everyday interactions, not actual app screenshots.
  for (let i = 0; i < 3; i++) {
    const phone = new THREE.Group();
    root.add(phone);
    bodies.push(phone);
    block(
      phone,
      [1.78, 0.19, 3.5],
      [0, 0, 0],
      material(palette.ink, 0.6, 0.22),
      0.19,
    );
    block(
      phone,
      [1.69, 0.04, 3.4],
      [0, 0.12, 0],
      material(0x939b8e, 0.7),
      0.19,
    );
    screens.push(interfaceStudy(phone, i));
    block(
      phone,
      [0.55, 0.016, 0.13],
      [0, 0.157, -1.45],
      material(0x242d29),
      0.06,
    );
  }
  return {
    ...model,
    actionDuration: 3.8,
    actionLabels: [
      "Shuffle the phones",
      "Deal another hand",
      "One more shuffle",
    ],
    update({ progress, pointerX, pointerY, action, elapsed, reduced }) {
      const fan = reduced ? 0.8 : smoothstep(0.12, 0.76, progress);
      const turn = reduced ? 1 : smoothstep(0.15, 3.4, elapsed);
      const playing = action > 0 && elapsed < 3.8 && !reduced;
      bodies.forEach((phone, i) => {
        const previousLane = ((i + Math.max(0, action - 1)) % 3) - 1;
        const lane = ((i + action) % 3) - 1;
        const sweep = action
          ? THREE.MathUtils.lerp(previousLane, lane, turn)
          : i - 1;
        const arc = playing ? Math.sin(turn * Math.PI) : 0;
        const rise = reduced
          ? 0
          : Math.sin(progress * Math.PI + i * 0.65) * 0.2;
        phone.position.set(
          sweep * (1.5 + fan * 0.42),
          0.25 +
            (Math.sin(i * 1.7) * 0.25 + rise) * (1 - arc) +
            arc * (0.5 + i * 0.65),
          sweep * (-0.25 - fan * 0.4) + arc * (i - 1) * 0.65,
        );
        phone.rotation.set(
          (reduced ? 0 : lane * 0.055 * fan) + arc * (i - 1) * 0.15,
          sweep * (0.12 + fan * 0.2) +
            (playing ? Math.sin(turn * Math.PI * 2) * 0.45 : 0),
          (reduced ? 0 : lane * 0.035 * fan) + arc * (i - 1) * 0.1,
        );
        const activity = action
          ? Math.min(
              1,
              reduced ? 0.8 : smoothstep(i * 0.35, 3 + i * 0.25, elapsed),
            )
          : THREE.MathUtils.clamp((progress - 0.12) / 0.76, 0, 1);
        screens[i](activity, action);
      });
      root.rotation.set(
        pointerY * 0.05,
        -0.3 + pointerX * 0.15 + (reduced ? 0 : (progress - 0.5) * 0.48),
        -0.05,
      );
    },
  };
}
