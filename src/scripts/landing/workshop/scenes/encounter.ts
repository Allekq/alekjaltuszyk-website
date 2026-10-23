import * as THREE from "three";
import { cylinder, material, palette, smoothstep } from "./shared";

type Pose = [number, number, number, number]; // x, height, z, side tilt
const ground = 0.34;
function actor(color: number) {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.CapsuleGeometry(0.13, 0.28, 4, 12),
    material(color),
  );
  body.position.y = 0.31;
  body.castShadow = true;
  const head = new THREE.Mesh(
    new THREE.SphereGeometry(0.15, 16, 12),
    material(0xf3dfb5),
  );
  head.position.y = 0.69;
  head.castShadow = true;
  group.add(body, head);
  return group;
}
function poseAt(frames: [number, Pose][], time: number): Pose {
  const next = frames.findIndex(([at]) => at > time);
  if (next < 0) return frames.at(-1)![1];
  if (next === 0) return frames[0][1];
  const [a, from] = frames[next - 1],
    [b, to] = frames[next];
  const p = smoothstep(a, b, time);
  return from.map((v, i) => THREE.MathUtils.lerp(v, to[i], p)) as Pose;
}
function place(group: THREE.Group, pose: Pose) {
  group.position.set(pose[0], pose[1], pose[2]);
  group.rotation.set(0, 0, pose[3]);
}

/** Short, deliberately toy-like choreography. Nobody is hurt; everyone gets back up. */
export function createEncounter(root: THREE.Group, player: THREE.Group) {
  const challenger = actor(0x557f91),
    spectator = actor(0xbba263);
  root.add(challenger, spectator);
  challenger.visible = spectator.visible = false;
  const dust = new THREE.Group();
  root.add(dust);
  const dustMat = material(0xe6d9b3);
  const puffs = Array.from({ length: 8 }, () => {
    const puff = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.09, 0),
      dustMat,
    );
    dust.add(puff);
    return puff;
  });
  const spark = new THREE.Group();
  root.add(spark);
  for (let i = 0; i < 5; i++) {
    const ray = cylinder(
      spark,
      0.018,
      0.16,
      [Math.cos(i * 1.256) * 0.23, Math.sin(i * 1.256) * 0.23, 0],
      material(palette.red),
    );
    ray.rotation.z = i * 1.256 - Math.PI / 2;
  }
  let previous = 0;
  const start = new THREE.Vector3();
  return (action: number, elapsed: number, reduced: boolean) => {
    dust.visible = spark.visible = false;
    challenger.visible = spectator.visible =
      action > 0 && (elapsed < 6.6 || reduced);
    if (!action || (elapsed >= 6.6 && !reduced)) return;
    if (action !== previous) {
      start.copy(player.position);
      previous = action;
    }
    const t = reduced ? 3 : elapsed;
    const kind = (action - 1) % 3;
    const red: [number, Pose][] = [
      [0, [start.x, ground, start.z, 0]],
      [1.25, [-0.65, ground, 0.95, 0]],
      [1.65, [-0.5, 0.55, 0.95, -0.12]],
      [2, [-0.65, ground, 0.95, 0]],
    ];
    const blue: [number, Pose][] = [
      [0, [1.6, ground, -1.1, 0]],
      [1.25, [0.65, ground, 0.95, 0]],
      [1.75, [0.5, 0.55, 0.95, 0.12]],
      [2.1, [0.65, ground, 0.95, 0]],
    ];
    if (kind === 0) {
      red.push(
        [2.55, [-0.15, 1, 0.95, -0.35]],
        [2.9, [0.1, ground, 0.95, 0]],
        [3.25, [-0.55, ground, 0.95, 0]],
        [3.55, [-1.1, 0.6, 0.95, 0.45]],
        [3.95, [-0.7, ground, 0.95, 0]],
      );
      blue.push(
        [2.55, [0.65, ground, 0.95, 0]],
        [2.9, [1.05, 0.55, 0.95, -0.35]],
        [3.25, [0.25, 1, 0.95, 0.35]],
        [3.55, [-0.15, ground, 0.95, 0]],
        [3.95, [0.6, ground, 0.95, 0]],
      );
    } else if (kind === 1) {
      red.push(
        [2.3, [-0.85, 0.3, 0.95, 0.25]],
        [2.75, [0, 1.25, 0.95, -1.35]],
        [3, [0.55, 0.7, 0.95, -1.5]],
        [3.5, [0.2, ground, 0.95, 0]],
        [4.1, [-0.7, ground, 0.95, 0]],
      );
      blue.push(
        [2.85, [0.65, ground, 0.95, 0]],
        [3.2, [1.6, 0.75, 0.95, -1.3]],
        [3.55, [1.9, ground, 0.95, -1.5]],
        [4.1, [0.7, ground, 0.95, 0]],
      );
    } else {
      red.push(
        [2.55, [-0.3, ground, 0.95, 0.2]],
        [2.95, [-0.3, 0.3, 0.95, -0.5]],
        [3.3, [-0.3, ground, 0.95, 0.2]],
        [4.1, [-0.7, ground, 0.95, 0]],
      );
      blue.push(
        [2.55, [0.05, ground, 0.95, 0.2]],
        [2.95, [-0.25, 1.35, 0.95, 1.5]],
        [3.3, [-1.2, 0.8, 0.95, 3.3]],
        [3.55, [-1.65, ground, 0.95, 4.7]],
        [4.1, [0.7, ground, 0.95, Math.PI * 2]],
      );
    }
    red.push(
      [4.5, [-0.65, 0.6, 0.95, 0]],
      [4.8, [-0.65, ground, 0.95, 0]],
      [5.1, [-0.65, ground, 0.95, 0]],
      [6.6, [player.position.x, ground, player.position.z, 0]],
    );
    blue.push(
      [4.5, [0.65, 0.6, 0.95, Math.PI * 2 * (kind === 2 ? 1 : 0)]],
      [4.8, [0.65, ground, 0.95, Math.PI * 2 * (kind === 2 ? 1 : 0)]],
      [5.1, [0.65, ground, 0.95, 0]],
      [6.6, [1.6, ground, -1.1, 0]],
    );
    place(player, poseAt(red, t));
    place(challenger, poseAt(blue, t));
    const entrance = smoothstep(0, 1.25, t) * (1 - smoothstep(5.25, 6.6, t));
    challenger.scale.setScalar(Math.max(0.001, entrance));
    spectator.scale.setScalar(Math.max(0.001, entrance * 0.85));
    spectator.position.set(
      -1.8,
      ground + (reduced ? 0 : Math.abs(Math.sin(t * 5)) * 0.1),
      1.45,
    );
    spectator.rotation.z = reduced ? 0.1 : Math.sin(t * 4) * 0.1;
    const impact = kind === 0 ? (t < 3.3 ? 2.85 : 3.5) : kind === 1 ? 3 : 3.45;
    const burst = (t - impact) / 0.55;
    if (burst >= 0 && burst < 1) {
      dust.visible = spark.visible = true;
      const x = kind === 2 ? -1.5 : kind === 1 ? 1.4 : t < 3.3 ? 0.6 : -0.6;
      dust.position.set(x, 0.37, 0.95);
      puffs.forEach((puff, i) => {
        const angle = (i * Math.PI) / 4;
        puff.position.set(
          Math.cos(angle) * burst * 0.7,
          Math.sin(burst * Math.PI) * 0.2,
          Math.sin(angle) * burst * 0.5,
        );
        puff.scale.setScalar(1 - burst);
      });
      spark.position.set(x, 1.35, 0.95);
      spark.scale.setScalar(Math.sin(burst * Math.PI));
    }
  };
}
