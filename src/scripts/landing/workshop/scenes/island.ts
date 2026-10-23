import * as THREE from "three";
import {
  block,
  cylinder,
  line,
  material,
  smoothstep,
  stage,
  type SpatialModel,
} from "./shared";
import { buildProgress } from "../geometry";

/** An original miniature game world. Everything is local geometry, including the river. */
export function createIsland(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 0.65, 10.8);
  const { root, scene } = model;
  scene.environmentIntensity = 0.35;
  scene.traverse((object) => {
    if (object instanceof THREE.HemisphereLight) object.intensity = 0.95;
    if (object instanceof THREE.DirectionalLight)
      object.intensity = object.castShadow ? 2.4 : 0.85;
    if (
      object instanceof THREE.Mesh &&
      object.material instanceof THREE.ShadowMaterial
    )
      object.position.y = -1.5;
  });
  const mats = {
    rock: material(0x9b9d83, 0, 0.95),
    rockDark: material(0x777d69, 0, 0.95),
    grass: material(0x93aa77, 0, 0.9),
    grassLight: material(0xa7bb83, 0, 0.9),
    water: material(0x679f9b, 0.22, 0.24),
    foam: material(0xdceae0, 0, 0.4),
    cream: material(0xf0dfb5, 0, 0.8),
    wood: material(0x9d7950, 0, 0.8),
    woodLight: material(0xc2a478, 0, 0.8),
    red: material(0xc75a3b, 0, 0.7),
    roof: material(0xb94f36, 0, 0.7),
    ink: material(0x364840, 0, 0.7),
    leaf: material(0x6d8861, 0, 0.9),
    leafLight: material(0x94aa73, 0, 0.9),
    gold: material(0xefbd65, 0.2, 0.4),
    stone: material(0xd8cfb5, 0, 0.95),
  };
  type Part = {
    object: THREE.Object3D;
    start: number;
    end: number;
    lift: number;
    y: number;
  };
  const parts: Part[] = [];
  function assemble(
    object: THREE.Object3D,
    start: number,
    end: number,
    lift = 1.2,
  ) {
    parts.push({ object, start, end, lift, y: object.position.y });
    return object;
  }
  function group(x = 0, y = 0, z = 0) {
    const object = new THREE.Group();
    object.position.set(x, y, z);
    root.add(object);
    return object;
  }
  function polygon(
    points: number[][],
    bottom: number,
    depth: number,
    mat: THREE.Material,
    parent: THREE.Object3D = root,
    bevel = 0.08,
  ) {
    const shape = new THREE.Shape(
      points.map(([x, z]) => new THREE.Vector2(x, -z)),
    );
    const mesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shape, {
        depth,
        bevelEnabled: true,
        bevelSegments: 1,
        steps: 1,
        bevelSize: bevel,
        bevelThickness: bevel,
      }),
      mat,
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.y = bottom;
    mesh.castShadow = mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  const outline = [
    [-3.3, -2.3],
    [-2.1, -2.95],
    [1.9, -2.9],
    [3.35, -1.8],
    [3.65, 0.85],
    [2.45, 2.6],
    [0.6, 2.95],
    [-2.45, 2.65],
    [-3.65, 1.05],
  ];
  polygon(
    outline.map(([x, z]) => [x * 0.91, z * 0.91]),
    -1.1,
    0.38,
    mats.rockDark,
    root,
    0.18,
  );
  polygon(outline, -0.65, 0.55, mats.rock, root, 0.15);
  const riverX = (z: number) => -0.25 + Math.sin(z * 0.95) * 0.43;
  const west = [],
    east = [];
  for (let i = 0; i <= 18; i++) {
    const z = -2.87 + (i * 5.75) / 18;
    west.push([riverX(z) - 0.36, z]);
    east.push([riverX(z) + 0.36, z]);
  }
  polygon(
    [[-3.3, -2.3], [-2.1, -2.88], ...west, [-2.45, 2.65], [-3.65, 1.05]],
    -0.02,
    0.37,
    mats.grass,
  );
  polygon(
    [
      ...east.slice().reverse(),
      [1.9, -2.87],
      [3.35, -1.8],
      [3.65, 0.85],
      [2.45, 2.6],
    ],
    -0.02,
    0.37,
    mats.grassLight,
  );
  polygon(
    [...west, ...east.slice().reverse()],
    0.055,
    0.08,
    mats.water,
    root,
    0.015,
  );
  // Cut stone facets give the floating island an irregular, hand-made silhouette.
  const rockGeo = new THREE.IcosahedronGeometry(1, 0);
  function rock(
    parent: THREE.Object3D,
    x: number,
    y: number,
    z: number,
    scale: number,
    mat = mats.rock,
  ) {
    const mesh = new THREE.Mesh(rockGeo, mat);
    mesh.position.set(x, y, z);
    mesh.scale.set(scale, scale * 0.7, scale * 0.85);
    mesh.rotation.set(x, 0.4 * z, z);
    mesh.castShadow = mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }
  for (let i = 0; i < 9; i++) {
    const [x, z] = outline[i];
    rock(root, x * 0.95, -0.65, z * 0.95, 0.25 + (i % 3) * 0.08);
  }
  // A few existing pieces suggest a place to explore even before construction.
  rock(root, -2.95, 0.46, -1.5, 0.34);
  rock(root, -3.1, 0.44, -1.1, 0.2);
  rock(root, 0.85, 0.44, -2.55, 0.28);
  for (const x of [0.9, 2.7])
    for (const z of [-1.65, 0.05])
      block(root, [0.06, 0.2, 0.06], [x, 0.48, z], mats.woodLight, 0.01);
  line(
    root,
    [
      new THREE.Vector3(0.9, 0.46, 0.05),
      new THREE.Vector3(0.9, 0.46, -1.65),
      new THREE.Vector3(2.7, 0.46, -1.65),
      new THREE.Vector3(2.7, 0.46, 0.05),
    ],
    0xe7e4c6,
    0.016,
  );
  for (let i = 0; i < 3; i++)
    block(
      root,
      [0.58, 0.07, 0.11],
      [-2.35, 0.5 + i * 0.07, 1.18],
      mats.woodLight,
      0.02,
    );
  const waterfall = group(riverX(2.8), -0.4, 3.08);
  block(root, [0.59, 0.075, 0.35], [riverX(2.8), 0.1, 2.98], mats.water, 0.02);
  block(waterfall, [0.58, 1.18, 0.09], [0, 0, 0], mats.water, 0.035);
  for (let i = 0; i < 5; i++)
    block(
      waterfall,
      [0.018, 0.7 + (i % 2) * 0.17, 0.012],
      [-0.22 + i * 0.105, -0.04, 0.06],
      mats.foam,
      0.005,
    );
  const pool = group(riverX(2.8), -1.12, 3.18);
  polygon(
    [
      [-0.65, -0.25],
      [0.5, -0.24],
      [0.7, 0.12],
      [0.2, 0.5],
      [-0.65, 0.3],
    ],
    0,
    0.08,
    mats.water,
    pool,
    0.1,
  );
  for (let i = 0; i < 5; i++)
    rock(
      pool,
      Math.cos(i * 1.2) * 0.56,
      0.04,
      Math.sin(i * 1.2) * 0.34,
      0.13,
      mats.stone,
    );
  // Tiny current marks are static at rest; they move only with the visitor's scroll.
  const ripples: THREE.Mesh[] = [];
  for (let i = 0; i < 12; i++) {
    const z = -2.65 + i * 0.45;
    ripples.push(
      block(
        root,
        [0.09 + (i % 3) * 0.04, 0.012, 0.027],
        [riverX(z) + (i % 2 ? -0.15 : 0.1), 0.165, z],
        mats.foam,
        0.005,
      ),
    );
  }
  // Stone path leads from the near shore, over a timber bridge, to the workshop.
  const path = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-2.7, 0.46, 1.8),
    new THREE.Vector3(-1.65, 0.46, 1.25),
    new THREE.Vector3(-0.7, 0.58, 0.55),
    new THREE.Vector3(0.65, 0.58, 0.55),
    new THREE.Vector3(1.55, 0.46, 0.35),
    new THREE.Vector3(1.85, 0.46, -0.1),
  ]);
  for (let i = 0; i < 25; i++) {
    const p = path.getPoint(i / 24);
    if (Math.abs(p.x - riverX(p.z)) < 0.65) continue;
    const stone = block(
      root,
      [0.23, 0.07, 0.18],
      [p.x, p.y, p.z],
      mats.stone,
      0.05,
    );
    stone.rotation.y = i * 0.7;
    assemble(stone, 0.08 + i * 0.008, 0.24 + i * 0.008, 0.55);
  }
  const bridge = group(-0.02, 0.45, 0.55);
  for (let i = 0; i < 11; i++) {
    const x = -0.92 + i * 0.18,
      y = 0.13 * Math.sin((i / 10) * Math.PI);
    const plank = block(
      bridge,
      [0.165, 0.09, 0.75],
      [x, y, 0],
      i % 3 ? mats.woodLight : mats.wood,
      0.025,
    );
    assemble(plank, 0.16 + i * 0.012, 0.32 + i * 0.012, 1.5);
  }
  for (const z of [-0.44, 0.44]) {
    const railing = new THREE.Group();
    bridge.add(railing);
    for (const x of [-0.95, 0, 0.95])
      cylinder(railing, 0.034, 0.52, [x, 0.19, z], mats.wood);
    line(
      railing,
      [
        new THREE.Vector3(-0.95, 0.45, z),
        new THREE.Vector3(0, 0.5, z),
        new THREE.Vector3(0.95, 0.45, z),
      ],
      0x94744e,
      0.023,
    );
    assemble(railing, 0.32, 0.48, 0.65);
  }
  // A roof with a real gable and separate ridge/tiles, rather than a painted box.
  function roof(
    parent: THREE.Object3D,
    width: number,
    depth: number,
    y: number,
  ) {
    const shape = new THREE.Shape();
    shape.moveTo(-width / 2, 0);
    shape.lineTo(0, 0.62);
    shape.lineTo(width / 2, 0);
    shape.closePath();
    const mesh = new THREE.Mesh(
      new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false }),
      mats.roof,
    );
    mesh.position.set(0, y, -depth / 2);
    mesh.castShadow = mesh.receiveShadow = true;
    parent.add(mesh);
    for (const side of [-1, 1])
      for (let n = 1; n < 5; n++) {
        const beam = block(
          parent,
          [width * 0.53, 0.035, 0.035],
          [side * width * 0.25, y + 0.31, -depth / 2 + (n * depth) / 5],
          mats.red,
          0.008,
        );
        beam.rotation.z = -side * Math.atan2(0.62, width / 2);
      }
    block(parent, [0.1, 0.08, depth + 0.06], [0, y + 0.63, 0], mats.red, 0.025);
  }
  const home = group(1.8, 0.43, -0.8);
  const foundation = block(
    home,
    [1.96, 0.16, 1.75],
    [0, 0.03, 0],
    mats.stone,
    0.08,
  );
  assemble(foundation, 0.24, 0.4, 0.6);
  const walls = new THREE.Group();
  home.add(walls);
  block(walls, [1.64, 1.15, 1.4], [0, 0.66, 0], mats.cream, 0.025);
  for (const x of [-0.75, 0.75])
    block(walls, [0.08, 1.18, 0.07], [x, 0.66, 0.73], mats.wood, 0.01);
  block(walls, [1.7, 0.09, 0.06], [0, 0.26, 0.74], mats.wood, 0.01);
  block(walls, [0.42, 0.78, 0.065], [0.35, 0.48, 0.74], mats.ink, 0.045);
  block(walls, [0.3, 0.49, 0.035], [0.35, 0.62, 0.782], mats.gold, 0.025);
  cylinder(walls, 0.025, 0.05, [0.48, 0.38, 0.81], mats.gold).rotation.x =
    Math.PI / 2;
  for (const x of [-0.44]) {
    block(walls, [0.47, 0.47, 0.06], [x, 0.79, 0.75], mats.wood, 0.025);
    block(walls, [0.36, 0.35, 0.04], [x, 0.8, 0.79], mats.ink, 0.015);
    block(walls, [0.026, 0.35, 0.05], [x, 0.8, 0.815], mats.cream, 0.005);
    block(walls, [0.36, 0.026, 0.05], [x, 0.8, 0.815], mats.cream, 0.005);
  }
  block(walls, [0.05, 0.45, 0.53], [0.845, 0.8, -0.1], mats.wood, 0.025);
  block(walls, [0.035, 0.33, 0.4], [0.875, 0.8, -0.1], mats.gold, 0.02);
  assemble(walls, 0.34, 0.57, 1.4);
  const roofing = new THREE.Group();
  home.add(roofing);
  roof(roofing, 2.05, 1.85, 1.22);
  block(roofing, [0.28, 0.67, 0.29], [-0.43, 1.8, -0.4], mats.stone, 0.035);
  block(roofing, [0.35, 0.09, 0.35], [-0.43, 2.14, -0.4], mats.cream, 0.025);
  block(roofing, [0.22, 0.015, 0.22], [-0.43, 2.19, -0.4], mats.ink, 0.015);
  assemble(roofing, 0.49, 0.69, 1.8);
  const porch = new THREE.Group();
  home.add(porch);
  for (let i = 0; i < 3; i++)
    block(
      porch,
      [0.7, 0.1, 0.25],
      [0.35, -0.01 - i * 0.025, 0.9 + i * 0.21],
      mats.woodLight,
      0.025,
    );
  block(porch, [0.65, 0.1, 0.28], [-0.65, 0.31, 1.04], mats.wood, 0.02);
  for (const x of [-0.9, -0.4])
    block(porch, [0.06, 0.3, 0.06], [x, 0.13, 1.04], mats.ink, 0.01);
  assemble(porch, 0.62, 0.77, 0.8);
  // A small beacon gives the skyline a recognisable destination.
  const beacon = group(-2, 0.44, -1.35);
  const pedestal = cylinder(beacon, 0.51, 0.2, [0, 0.04, 0], mats.stone);
  assemble(pedestal, 0.23, 0.38, 0.8);
  const tower = new THREE.Group();
  beacon.add(tower);
  cylinder(tower, 0.37, 1.6, [0, 0.91, 0], mats.cream, 0.28);
  cylinder(tower, 0.34, 0.19, [0, 1.16, 0], mats.red, 0.33);
  block(tower, [0.15, 0.28, 0.04], [0, 0.86, 0.34], mats.ink, 0.045);
  cylinder(tower, 0.44, 0.1, [0, 1.72, 0], mats.wood);
  assemble(tower, 0.36, 0.58, 1.5);
  const lantern = new THREE.Group();
  beacon.add(lantern);
  cylinder(lantern, 0.24, 0.39, [0, 1.98, 0], mats.gold);
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    cylinder(
      lantern,
      0.025,
      0.43,
      [Math.cos(a) * 0.27, 1.98, Math.sin(a) * 0.27],
      mats.ink,
    );
  }
  cylinder(lantern, 0.4, 0.32, [0, 2.34, 0], mats.red, 0);
  cylinder(lantern, 0.025, 0.16, [0, 2.57, 0], mats.ink);
  assemble(lantern, 0.56, 0.74, 1.3);
  // Low-poly trees: shared geometry keeps this detailed scene inexpensive on phones.
  const leaves = new THREE.IcosahedronGeometry(1, 1),
    cone = new THREE.ConeGeometry(1, 1, 7);
  const trees = [
    [-2.85, -0.5, 0.72],
    [-2.7, -2, 0.85],
    [-1.05, -2.35, 0.68],
    [0.85, -2.45, 0.85],
    [2.9, -1.2, 0.72],
    [2.9, 0.45, 0.7],
    [2.35, 1.7, 0.55],
    [-2.7, 0.7, 0.58],
    [-1.3, 2.1, 0.55],
  ];
  trees.forEach(([x, z, size], i) => {
    const tree = group(x, 0.43, z);
    cylinder(tree, 0.06, 0.75, [0, 0.36, 0], mats.wood, 0.04);
    if (i % 3 === 0) {
      for (let j = 0; j < 3; j++) {
        const crown = new THREE.Mesh(cone, j % 2 ? mats.leafLight : mats.leaf);
        crown.position.y = 0.72 + j * 0.27;
        crown.scale.set(0.46 - j * 0.09, 0.72, 0.46 - j * 0.09);
        crown.castShadow = true;
        tree.add(crown);
      }
    } else {
      const crown = new THREE.Mesh(leaves, i % 2 ? mats.leaf : mats.leafLight);
      crown.position.set(0, 0.98, 0);
      crown.scale.set(0.47, 0.59, 0.43);
      crown.rotation.y = i;
      crown.castShadow = true;
      tree.add(crown);
      const side = new THREE.Mesh(leaves, mats.leafLight);
      side.position.set(0.23, 0.75, 0.08);
      side.scale.setScalar(0.27);
      side.castShadow = true;
      tree.add(side);
    }
    tree.children.forEach((o) => {
      o.position.multiplyScalar(size);
      o.scale.multiplyScalar(size);
    });
    if (i !== 1 && i !== 7)
      assemble(tree, 0.59 + i * 0.017, 0.76 + i * 0.017, 1.1);
  });
  for (let i = 0; i < 18; i++) {
    const a = i * 2.4,
      x = Math.cos(a) * (2.4 + (i % 3) * 0.15),
      z = Math.sin(a) * 2.2;
    if (Math.abs(x - riverX(z)) < 0.55) continue;
    const detail = group(x, 0.45, z);
    if (i % 3 === 0) rock(detail, 0, 0, 0, 0.13, mats.stone);
    else {
      for (let j = 0; j < 3; j++) {
        const leaf = new THREE.Mesh(cone, i % 2 ? mats.leaf : mats.gold);
        leaf.position.set((j - 1) * 0.07, 0.07, 0);
        leaf.scale.set(0.035, 0.16 + j * 0.03, 0.035);
        detail.add(leaf);
      }
    }
    assemble(detail, 0.72 + i * 0.008, 0.83 + i * 0.008, 0.3);
  }
  // A tiny red-coated visitor follows the connected path as the last pieces land.
  const traveller = group();
  const body = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.27, 8), mats.red);
  body.position.y = 0.27;
  body.castShadow = true;
  traveller.add(body);
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.085, 12, 8),
    mats.cream,
  );
  head.position.y = 0.46;
  traveller.add(head);
  cylinder(traveller, 0.11, 0.065, [0, 0.51, 0], mats.red, 0.08);
  const legs = [-0.045, 0.045].map((x) =>
    block(traveller, [0.045, 0.13, 0.055], [x, 0.09, 0], mats.ink, 0.012),
  );
  block(traveller, [0.13, 0.16, 0.07], [0, 0.29, -0.1], mats.wood, 0.03);
  const flag = group(2.95, 0.45, 1.4);
  cylinder(flag, 0.025, 0.9, [0, 0.45, 0], mats.wood);
  const pennant = polygon(
    [
      [0, 0],
      [0.43, 0.05],
      [0.3, 0.15],
      [0, 0.12],
    ],
    0,
    0.015,
    mats.red,
    flag,
    0.005,
  );
  pennant.rotation.set(0, 0, Math.PI / 2);
  pennant.position.set(0, 0.86, 0);
  assemble(flag, 0.81, 0.98, 0.8);
  return {
    ...model,
    update({ progress, pointerX, pointerY, reduced }) {
      const p = buildProgress(progress, reduced);
      for (const part of parts) {
        const t = smoothstep(part.start, part.end, p);
        part.object.visible = t > 0.001;
        part.object.scale.setScalar(Math.max(0.001, t));
        part.object.position.y = part.y + (1 - t) * (1 - t) * part.lift;
      }
      root.rotation.set(
        pointerY * 0.025,
        -0.18 + progress * 0.13 + pointerX * 0.065,
        0,
      );
      ripples.forEach((r, i) => {
        r.position.z = -2.65 + i * 0.45 + Math.sin(p * 5 + i) * 0.035;
      });
      const walk = smoothstep(0.78, 1, p) * 0.93;
      const pos = path.getPoint(walk),
        tangent = path.getTangent(walk);
      traveller.visible = p > 0.78;
      traveller.position.copy(pos);
      traveller.rotation.y = Math.atan2(tangent.x, tangent.z);
      legs.forEach(
        (leg, i) => (leg.rotation.x = Math.sin(walk * 70 + i * Math.PI) * 0.35),
      );
    },
  };
}
