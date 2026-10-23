import * as THREE from "three";
import { material } from "./shared";

/** A bean and a head. Silhouette, weight and tilt do the acting. */
export function createFighter(color: number, name: string) {
  const group = new THREE.Group();
  group.name = name;
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.125, 0.28, 4, 12),
    material(color),
  );
  body.position.y = 0.32;
  body.castShadow = true;
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 12, 8),
    material(0xf0d9b0),
  );
  head.position.y = 0.7;
  head.castShadow = true;
  group.add(body, head);
  return {
    group,
    pose(facing: number, crouch = 0, strike = 0, airborne = 0, stride = 0) {
      const squash = crouch * 0.25 + airborne * 0.04;
      body.scale.set(
        1 + squash * 0.45,
        1 - squash + strike * 0.035,
        1 + squash * 0.45,
      );
      body.position.y = 0.32 - squash * 0.19;
      head.position.y = 0.7 - squash * 0.42;
      const lean = stride * 0.045 * facing;
      body.rotation.z = lean;
      head.position.x = -lean * 0.24;
    },
  };
}
export type Fighter = ReturnType<typeof createFighter>;
