import * as THREE from "three";
import { landscapeHeight } from "../geometry";
import {
  block,
  cylinder,
  material,
  palette,
  stage,
  smoothstep,
  type SpatialModel,
} from "./shared";

export function createLandscape(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 0.3, 11.3),
    { root } = model;
  block(root, [6.5, 0.24, 6.5], [0, -0.15, 0], material(0xd4d4be), 0.12);
  block(root, [6.7, 0.1, 6.7], [0, -0.3, 0], material(0x939e87, 0.3), 0.1);
  const earth = [
    material(0x899b71),
    material(0x9cae81),
    material(0xb4bf94),
    material(0xc7cca7),
    material(0xdce0bd),
  ];
  const water = material(0x6c9e98, 0.35, 0.22),
    rock = material(0xbcbca4);
  const tiles: { mesh: THREE.Mesh; x: number; z: number }[] = [];
  const geo = new THREE.BoxGeometry(0.47, 1, 0.47);
  for (let x = -6; x <= 6; x++)
    for (let z = -6; z <= 6; z++) {
      const mesh = new THREE.Mesh(geo, earth[0].clone());
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      mesh.position.set(x * 0.49, 0, z * 0.49);
      root.add(mesh);
      tiles.push({ mesh, x, z });
    }
  const trees: { group: THREE.Group; x: number; z: number }[] = [];
  const trunk = material(0x6c674c),
    leaf = material(0x526b48);
  [
    [-4, -3],
    [-2, -4],
    [2, -2],
    [4, 1],
    [3, 4],
    [-4, 3],
    [-5, -1],
    [1, -4],
  ].forEach(([x, z]) => {
    const group = new THREE.Group();
    cylinder(group, 0.045, 0.4, [0, 0.15, 0], trunk);
    const crown = new THREE.Mesh(new THREE.IcosahedronGeometry(0.24, 1), leaf);
    crown.position.y = 0.49;
    crown.scale.set(0.8, 1.35, 0.8);
    crown.castShadow = true;
    group.add(crown);
    root.add(group);
    trees.push({ group, x, z });
  });
  const marker = new THREE.Group();
  root.add(marker);
  cylinder(marker, 0.025, 0.8, [0, 0.4, 0], material(palette.ink));
  block(
    marker,
    [0.3, 0.19, 0.025],
    [0.15, 0.71, 0],
    material(palette.red),
    0.01,
  );
  let seed = -1;
  const heights = new Map<string, { from: number; to: number }>();
  const appearance = (h: number) =>
    h < 0.15 ? water : h > 1.5 ? rock : earth[Math.min(4, Math.floor(h * 2.7))];
  return {
    ...model,
    update({ progress, pointerX, pointerY, action, reduced }) {
      const variant = Math.floor(action);
      if (seed !== variant) {
        seed = variant;
        tiles.forEach(({ x, z }) => {
          heights.set(`${x},${z}`, {
            from: landscapeHeight(x, z, seed),
            to: landscapeHeight(x, z, seed + 1),
          });
        });
      }
      const mix = smoothstep(0, 1, action - variant);
      const heightAt = (x: number, z: number) => {
        const h = heights.get(`${x},${z}`)!;
        return THREE.MathUtils.lerp(h.from, h.to, mix);
      };
      const growthAt = (x: number, z: number) =>
        reduced
          ? 1
          : 0.32 + 0.68 * smoothstep(0.08, 0.64, progress - (x + z) * 0.004);
      tiles.forEach(({ mesh, x, z }) => {
        const h = heights.get(`${x},${z}`)!;
        const from = appearance(h.from),
          to = appearance(h.to);
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.color.lerpColors(from.color, to.color, mix);
        mat.roughness = THREE.MathUtils.lerp(from.roughness, to.roughness, mix);
        mat.metalness = THREE.MathUtils.lerp(from.metalness, to.metalness, mix);
        const height = heightAt(x, z) * growthAt(x, z);
        mesh.scale.y = height;
        mesh.position.y = height / 2;
      });
      trees.forEach(({ group, x, z }) => {
        const h = heightAt(x, z),
          growth = growthAt(x, z);
        group.position.set(x * 0.49, h * growth, z * 0.49);
        const emergence = smoothstep(0.14, 0.3, h);
        group.visible = emergence > 0.001;
        group.scale.setScalar((0.8 + growth * 0.2) * emergence);
      });
      marker.position.set(-2.45, heightAt(-5, 1) * growthAt(-5, 1), 0.49);
      root.rotation.y =
        -0.2 + (reduced ? 0 : (progress - 0.5) * 0.66) + pointerX * 0.12;
      root.rotation.x = pointerY * 0.04;
    },
  };
}
