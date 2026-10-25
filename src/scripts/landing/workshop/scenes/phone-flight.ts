import * as THREE from "three";
import { material, smoothstep } from "./shared";

export const flightDuration = 7.2;

/** A folded paper opponent, built from faces rather than an image or model download. */
function paperPlane() {
  const group = new THREE.Group();
  const nose = [0, 0, -0.9],
    tail = [0, -0.12, 0.68];
  const faces = [
    { points: [...nose, -1.05, 0.05, 0.6, ...tail], color: 0xda7656 },
    { points: [...nose, ...tail, 1.05, 0.05, 0.6], color: 0xf3ab80 },
    { points: [...nose, 0, 0.23, 0.5, ...tail], color: 0xa9442e },
  ];
  faces.forEach(({ points, color }) => {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(points, 3),
    );
    geometry.computeVertexNormals();
    const surface = material(color, 0, 0.7);
    surface.side = THREE.DoubleSide;
    const face = new THREE.Mesh(geometry, surface);
    face.castShadow = true;
    group.add(face);
  });
  return group;
}

function planePosition(t: number, out: THREE.Vector3) {
  const approach = smoothstep(0.7, 3.5, t);
  const escape = smoothstep(3.5, 6.1, t);
  return out.set(
    7 - approach * 7.5 - escape * 6.8,
    1.65 + Math.sin(approach * Math.PI) * 0.3 + escape * 1.6,
    -3.7 + approach * 0.4 - escape * 1.3,
  );
}

export function createPhoneFlight(
  root: THREE.Group,
  formation: THREE.Group,
  phones: THREE.Group[],
) {
  const plane = paperPlane();
  root.add(plane);
  const glow = new THREE.MeshBasicMaterial({ color: 0xf6c778 });
  const exhaustMaterial = new THREE.MeshBasicMaterial({
    color: 0x9acac3,
    transparent: true,
    opacity: 0.65,
  });
  const exhausts = phones.map((phone) => {
    const exhaust = new THREE.Mesh(
      new THREE.ConeGeometry(0.1, 0.7, 10),
      exhaustMaterial,
    );
    exhaust.rotation.x = Math.PI / 2;
    exhaust.position.set(0, 0.03, 1.45);
    phone.add(exhaust);
    return exhaust;
  });
  const shots = phones.map((phone, i) => {
    const hit = 2.35 + i * 0.23;
    const pulse = new THREE.Mesh(
      new THREE.CapsuleGeometry(0.04, 0.28, 3, 6),
      glow,
    );
    root.add(pulse);
    const sparks = new THREE.Group();
    for (let j = 0; j < 5; j++) {
      const spark = new THREE.Mesh(new THREE.SphereGeometry(0.048, 6, 4), glow);
      sparks.add(spark);
    }
    root.add(sparks);
    return {
      phone,
      hit,
      pulse,
      sparks,
      target: planePosition(hit, new THREE.Vector3()),
    };
  });
  const source = new THREE.Vector3(),
    direction = new THREE.Vector3();
  const up = new THREE.Vector3(0, 1, 0);
  return (t: number, active: boolean, lift: number) => {
    const entering = smoothstep(0.7, 1.15, t);
    const leaving = 1 - smoothstep(5.5, 6.1, t);
    plane.visible = active && t >= 0.7 && t <= 6.1;
    planePosition(t, plane.position);
    plane.scale.setScalar(1.05 * entering * leaving);
    const escape = smoothstep(3.5, 6.1, t);
    plane.rotation.set(
      -0.08 - escape * 0.3,
      1.35 + escape * 0.75,
      -0.18 - escape * Math.PI * 2,
    );
    exhausts.forEach((exhaust, i) => {
      exhaust.visible = active && lift > 0;
      exhaust.scale.set(1, lift * (0.8 + Math.sin(t * 15 + i) * 0.12), 1);
    });
    formation.updateMatrix();
    for (const { phone, hit, pulse, sparks, target } of shots) {
      const travel = (t - (hit - 0.38)) / 0.38;
      pulse.visible = active && travel >= 0 && travel <= 1;
      if (pulse.visible) {
        phone.updateMatrix();
        source
          .set(0, 0.16, -1.1)
          .applyMatrix4(phone.matrix)
          .applyMatrix4(formation.matrix);
        pulse.position.copy(source).lerp(target, travel);
        direction.subVectors(target, source).normalize();
        pulse.quaternion.setFromUnitVectors(up, direction);
      }
      const burst = (t - hit) / 0.32;
      sparks.visible = active && burst >= 0 && burst <= 1;
      if (sparks.visible) {
        sparks.position.copy(target);
        sparks.children.forEach((spark, i) => {
          const angle = (i * Math.PI * 2) / sparks.children.length;
          spark.position.set(
            Math.cos(angle) * burst * 0.42,
            Math.sin(angle) * burst * 0.42,
            burst * 0.1,
          );
          spark.scale.setScalar(1 - burst);
        });
      }
    }
  };
}
