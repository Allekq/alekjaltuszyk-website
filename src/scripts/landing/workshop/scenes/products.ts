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
  const screens: ((progress: number) => void)[] = [];
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
    update({ progress, pointerX, pointerY, action, reduced }) {
      const fan = reduced ? 0.8 : smoothstep(0.12, 0.76, progress);
      const activity = THREE.MathUtils.clamp(
        (progress - 0.12) / 0.76 + action * 0.4,
        0,
        1,
      );
      bodies.forEach((phone, i) => {
        const rise = reduced
          ? 0
          : Math.sin(progress * Math.PI + i * 0.65) * 0.28;
        phone.position.set(
          (i - 1) * (1.5 + fan * 0.42),
          0.25 + Math.sin(i * 1.7) * 0.4 + rise,
          (i - 1) * (-0.25 - fan * 0.4),
        );
        phone.rotation.set(
          reduced ? 0 : (i - 1) * 0.055 * fan,
          (i - 1) * (0.12 + fan * 0.2),
          reduced ? 0 : (i - 1) * 0.035 * fan,
        );
        screens[i](reduced ? 0.6 + action * 0.4 : activity);
      });
      root.rotation.set(
        pointerY * 0.05,
        -0.3 +
          pointerX * 0.15 +
          (reduced ? 0 : (progress - 0.5) * 0.48) +
          action * 0.3,
        -0.05,
      );
    },
  };
}
