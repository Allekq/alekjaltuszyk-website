import * as THREE from "three";
import {
  block,
  canvasTexture,
  cylinder,
  label,
  line,
  material,
  palette,
  stage,
  smoothstep,
  type SpatialModel,
} from "./shared";

/** An exploded pocket tool: enclosure, circuitry, interface and a physical input. */
export function createDevice(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 1.35, 9.5);
  const { root } = model;
  const shell = material(palette.ink, 0.55, 0.27),
    edge = material(palette.metal, 0.8, 0.25);
  const copper = material(palette.copper, 0.65, 0.28);
  const layers = [new THREE.Group(), new THREE.Group(), new THREE.Group()];
  layers.forEach((layer) => root.add(layer));
  // Ceramic base and inset feet.
  block(layers[0], [3.15, 0.32, 4.65], [0, 0.05, 0], shell, 0.22);
  block(layers[0], [2.85, 0.05, 4.3], [0, 0.23, 0], edge, 0.18);
  block(
    layers[0],
    [2.62, 0.06, 4.05],
    [0, 0.27, 0],
    material(0x4b5750, 0.6),
    0.15,
  );
  for (const x of [-1.25, 1.25])
    for (const z of [-1.9, 1.9]) {
      cylinder(layers[0], 0.075, 0.09, [x, 0.31, z], copper);
      block(layers[0], [0.26, 0.16, 0.4], [x, -0.16, z], shell);
    }
  // A separate board, populated with real three-dimensional parts and copper traces.
  block(layers[1], [2.8, 0.1, 4.2], [0, 0, 0], material(0x647761, 0.25), 0.16);
  block(layers[1], [0.85, 0.16, 0.95], [-0.35, 0.15, -0.55], shell);
  label(layers[1], "MAKE", 0.65, 0.16, [-0.35, 0.235, -0.55]);
  for (let n = 0; n < 8; n++) {
    const z = -0.92 + n * 0.105;
    block(layers[1], [0.18, 0.035, 0.035], [-0.85, 0.13, z], copper, 0.007);
    block(layers[1], [0.18, 0.035, 0.035], [0.15, 0.13, z], copper, 0.007);
  }
  for (let n = 0; n < 6; n++) {
    const x = -0.95 + n * 0.36;
    line(
      layers[1],
      [
        new THREE.Vector3(x, 0.058, 1.6),
        new THREE.Vector3(x, 0.058, 0.6),
        new THREE.Vector3(x + 0.2, 0.058, 0.3),
      ],
      palette.copper,
      0.012,
    );
    block(
      layers[1],
      [0.2, 0.1, 0.35],
      [x, 0.11, -1.5],
      n % 2 ? shell : edge,
      0.015,
    );
  }
  block(layers[1], [1.9, 0.22, 0.7], [0, 0.18, 0.9], shell);
  label(layers[1], "CURIOSITY / 01", 1.6, 0.25, [0, 0.295, 0.9], "#9baa8a");
  for (const x of [-1.1, 1.1])
    cylinder(layers[1], 0.1, 0.2, [x, 0.16, -0.5], edge);
  // Warm off-white case, dark inset screen and a vermilion physical control.
  block(
    layers[2],
    [3.15, 0.29, 4.65],
    [0, 0, 0],
    material(palette.paper, 0.2, 0.29),
    0.23,
  );
  block(layers[2], [2.75, 0.08, 3.35], [0, 0.18, -0.4], shell, 0.18);
  const screen = canvasTexture(768, 960, (ctx) => {
    ctx.fillStyle = "#25342d";
    ctx.fillRect(0, 0, 768, 960);
    ctx.fillStyle = "#a9bc90";
    ctx.font = "22px monospace";
    ctx.fillText("A LITTLE WORK IN PROGRESS", 56, 80);
    ctx.fillStyle = "#f0f1d8";
    ctx.font = "76px Georgia";
    ctx.fillText("Make it", 54, 210);
    ctx.fillText("feel simple.", 54, 292);
    ctx.strokeStyle = "#a5bb8a";
    ctx.lineWidth = 2;
    for (let i = 0; i < 6; i++) {
      ctx.beginPath();
      ctx.ellipse(384, 555, 225 - i * 28, 130 - i * 15, -0.2, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.fillStyle = "#e7764e";
    ctx.beginPath();
    ctx.arc(525, 500, 26, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#a9bc90";
    ctx.font = "22px monospace";
    ctx.fillText("IDEA → SYSTEM → EXPERIENCE", 56, 835);
    ctx.fillStyle = "#657d58";
    ctx.fillRect(56, 877, 656, 4);
    ctx.fillStyle = "#d7e2b4";
    ctx.fillRect(56, 877, 435, 4);
  });
  const display = new THREE.Mesh(
    new THREE.PlaneGeometry(2.56, 3.14),
    new THREE.MeshBasicMaterial({ map: screen }),
  );
  display.rotation.x = -Math.PI / 2;
  display.position.set(0, 0.226, -0.4);
  layers[2].add(display);
  cylinder(
    layers[2],
    0.29,
    0.2,
    [0.93, 0.25, 1.64],
    material(palette.red, 0.3, 0.25),
  );
  cylinder(
    layers[2],
    0.23,
    0.02,
    [0.93, 0.36, 1.64],
    material(0xe76743, 0.2, 0.3),
  );
  label(
    layers[2],
    "IDEA / 001",
    1.35,
    0.24,
    [-0.4, 0.15, 1.64],
    "#59634f",
    "#f0eddf",
  );
  for (let i = 0; i < 5; i++)
    block(
      layers[2],
      [0.027, 0.02, 0.18],
      [-1.1 + i * 0.09, 0.16, 1.12],
      shell,
      0.005,
    );
  block(
    layers[2],
    [0.1, 0.14, 0.55],
    [1.59, -0.015, -0.8],
    material(palette.red, 0.2),
  );
  // Fasteners remain aligned through the exploded stack.
  const bolts: THREE.Mesh[] = [];
  for (const x of [-1.27, 1.27])
    for (const z of [-1.95, 1.95])
      bolts.push(cylinder(root, 0.055, 0.38, [x, 3.1, z], edge));
  const loop = line(
    root,
    [
      new THREE.Vector3(1.5, 0.15, 1.2),
      new THREE.Vector3(2.4, 0.1, 1.7),
      new THREE.Vector3(2.8, 0.3, 0.5),
      new THREE.Vector3(2.1, 0.5, -0.2),
      new THREE.Vector3(1.5, 0.15, 0.4),
    ],
    palette.red,
    0.047,
  );
  loop.castShadow = true;
  return {
    ...model,
    update({ progress, pointerX, pointerY, action, reduced }) {
      const assembly = action % 2;
      const gap =
        (1 - assembly) *
        (1 - (reduced ? 0 : smoothstep(0.55, 0.95, progress) * 0.8));
      layers[1].position.y = 0.4 + gap * 0.77;
      layers[2].position.y = 0.62 + gap * 1.65;
      bolts.forEach((b) => (b.position.y = 0.85 + gap * 2.15));
      root.rotation.set(
        pointerY * 0.08,
        -0.22 + pointerX * 0.18 + (reduced ? 0 : progress * 0.25),
        -0.08,
      );
      root.position.y = -0.15;
    },
  };
}
