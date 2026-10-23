import * as THREE from "three";
import { smoothstep } from "./shared";

/** A few folded paper-like wings; shared geometry, no particles or textures. */
export function createButterflies(root: THREE.Object3D) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 0);
  shape.bezierCurveTo(0.07, 0.15, 0.23, 0.16, 0.18, 0.02);
  shape.bezierCurveTo(0.27, -0.1, 0.09, -0.19, 0, -0.04);
  shape.closePath();
  const geometry = new THREE.ShapeGeometry(shape, 5);
  geometry.rotateX(-Math.PI / 2);
  const bodyGeometry = new THREE.SphereGeometry(1, 6, 4);
  const bodyMaterial = new THREE.MeshBasicMaterial({ color: 0x554d38 });
  const insects = [0xefc679, 0xd9916e, 0xeee5bd].map((color, i) => {
    const insect = new THREE.Group();
    insect.name = "island-butterfly";
    root.add(insect);
    const mat = new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide });
    const wings = [-1, 1].map((side) => {
      const hinge = new THREE.Group();
      const wing = new THREE.Mesh(geometry, mat);
      wing.scale.x = side;
      hinge.add(wing);
      insect.add(hinge);
      return hinge;
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(0.018, 0.018, 0.085);
    insect.add(body);
    return { insect, wings, phase: i * 2.1 };
  });
  return (time: number, progress: number, reduced: boolean) => {
    const reveal = smoothstep(0.96, 1, progress);
    insects.forEach(({ insect, wings, phase }, i) => {
      insect.visible = reveal > 0.001;
      if (!insect.visible) return;
      const t = reduced ? phase : time * 0.55 + phase;
      const centerX = i === 1 ? 2.3 : -1.8;
      insect.position.set(
        centerX + Math.cos(t) * 0.42,
        1.05 + i * 0.12 + Math.sin(t * 2.3) * 0.12,
        1.5 + Math.sin(t) * 0.38,
      );
      insect.rotation.set(
        0,
        Math.atan2(-Math.sin(t), Math.cos(t)),
        Math.sin(t * 1.7) * 0.12,
      );
      insect.scale.setScalar(reveal * 0.8);
      wings.forEach((wing, j) => {
        wing.rotation.z =
          (j ? 1 : -1) *
          (reduced ? 0.3 : 0.3 + (Math.sin(time * 12 + phase) + 1) * 0.5);
      });
    });
  };
}
