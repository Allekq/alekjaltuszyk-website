import * as THREE from "three";
import {
  block,
  cylinder,
  line,
  material,
  palette,
  stage,
  smoothstep,
  type SpatialModel,
} from "./shared";

/** Illustrative gameplay diorama, not a claim to reproduce Roam's shipped UI. */
export function createWorld(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 0.65, 11.2),
    { root } = model;
  const stone = material(0xd9d8c3),
    grass = material(0x8e9f78),
    dark = material(0x465947),
    red = material(palette.red, 0.25);
  block(root, [6.6, 0.5, 5.3], [0, -0.06, 0], stone, 0.2);
  block(root, [6.25, 0.1, 4.95], [0, 0.24, 0], grass, 0.08);
  // A continuous path and stepping stones make the scene read as a playable space.
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.5, 0.34, 1.4),
    new THREE.Vector3(-1, 0.34, 1.4),
    new THREE.Vector3(0, 0.34, 0.6),
    new THREE.Vector3(0.7, 0.34, -0.7),
    new THREE.Vector3(1.85, 0.34, -1.5),
  ]);
  for (let i = 0; i < 24; i++) {
    const p = path.getPoint(i / 23);
    const tile = block(
      root,
      [0.42, 0.055, 0.36],
      [p.x, p.y, p.z],
      material(i % 3 ? 0xe4e0c8 : 0xc8ceb0),
      0.025,
    );
    tile.rotation.y = -0.3 + i * 0.06;
  }
  // Arched gateway, built from separate masonry pieces with honest occlusion.
  const arch = new THREE.Group();
  arch.position.set(-1.65, 0.3, 0.45);
  root.add(arch);
  block(arch, [0.34, 1.5, 0.48], [-0.75, 0.75, 0], stone);
  block(arch, [0.34, 1.5, 0.48], [0.75, 0.75, 0], stone);
  const archCurve = new THREE.EllipseCurve(
    0,
    1.5,
    0.75,
    0.75,
    0,
    Math.PI,
    false,
    0,
  );
  archCurve.getPoints(10).forEach((p, i) => {
    const brick = block(arch, [0.31, 0.34, 0.48], [p.x, p.y, 0], stone, 0.025);
    brick.rotation.z = (i / 10) * Math.PI;
  });
  // Tower, stairs, trees and a small physics prop.
  block(root, [1.15, 1.8, 1.1], [1.95, 1.2, -1.5], stone, 0.05);
  for (let x = 0; x < 3; x++)
    for (let z = 0; z < 3; z++)
      if (x !== 1 || z !== 1)
        block(
          root,
          [0.29, 0.28, 0.29],
          [1.55 + x * 0.4, 2.24, -1.9 + z * 0.4],
          stone,
          0.025,
        );
  block(root, [0.25, 0.6, 0.02], [1.95, 1.7, -0.94], dark, 0.025);
  for (let i = 0; i < 5; i++)
    block(
      root,
      [0.8, 0.15 + i * 0.14, 0.32],
      [1.8, 0.35 + i * 0.07, -0.5 + i * 0.32],
      stone,
      0.025,
    );
  [
    [-2.6, -1.4],
    [-0.9, -1.7],
    [2.6, 1.65],
  ].forEach(([x, z]) => {
    cylinder(root, 0.07, 0.8, [x, 0.65, z], material(0x6f7051));
    const foliage = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.48, 1),
      dark,
    );
    foliage.position.set(x, 1.25, z);
    foliage.scale.set(0.9, 1.4, 0.9);
    foliage.castShadow = true;
    root.add(foliage);
  });
  const crate = block(
    root,
    [0.5, 0.5, 0.5],
    [0.2, 0.57, 1.85],
    material(0xb18959),
    0.035,
  );
  line(
    root,
    [
      new THREE.Vector3(-2.75, 0.33, -2.15),
      new THREE.Vector3(-0.2, 0.33, -2.15),
      new THREE.Vector3(0.5, 0.33, -1.7),
    ],
    0x6a805e,
    0.025,
  );
  const player = new THREE.Group();
  root.add(player);
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.12, 0.27, 4, 12),
    red,
  );
  body.position.y = 0.32;
  body.castShadow = true;
  player.add(body);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 16, 12),
    material(0xf3dfb5),
  );
  head.position.y = 0.69;
  head.castShadow = true;
  player.add(head);
  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.26, 0.022, 6, 32),
    material(palette.red),
  );
  ring.rotation.x = -Math.PI / 2;
  ring.position.y = 0.02;
  player.add(ring);
  const flag = new THREE.Group();
  flag.position.set(1.95, 2.3, -1.5);
  root.add(flag);
  cylinder(flag, 0.018, 1, [0, 0.4, 0], dark);
  block(flag, [0.47, 0.28, 0.025], [0.23, 0.76, 0], red, 0.01);
  return {
    ...model,
    update({ progress, pointerX, pointerY, action, reduced }) {
      const p = reduced
        ? 0.35 + action * 0.4
        : THREE.MathUtils.clamp(
            smoothstep(0.05, 0.9, progress) * 0.7 + action * 0.25,
            0.02,
            0.95,
          );
      const point = path.getPoint(p);
      player.position.copy(point);
      const tangent = path.getTangent(p);
      player.rotation.y = Math.atan2(tangent.x, tangent.z);
      const stride = reduced ? 0 : Math.sin(p * 48);
      body.position.y = 0.32 + Math.abs(stride) * 0.018;
      head.position.y = 0.69 + Math.abs(stride) * 0.018;
      body.rotation.z = stride * 0.025;
      flag.rotation.y = reduced ? 0 : Math.sin(progress * 7) * 0.045;
      crate.rotation.y = reduced ? 0.3 : progress + action * 0.8;
      crate.rotation.z = reduced ? 0 : Math.sin(action * Math.PI) * 0.25;
      root.rotation.set(
        pointerY * 0.05,
        -0.3 + (reduced ? 0 : (progress - 0.5) * 0.3) + pointerX * 0.13,
        0,
      );
      arch.position.y =
        0.3 + (reduced ? 0 : (1 - smoothstep(0.05, 0.5, progress)) * 0.4);
    },
  };
}
