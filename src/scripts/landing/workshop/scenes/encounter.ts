import * as THREE from "three";
import { material, smoothstep } from "./shared";
import { createFighter, type Fighter } from "./fighter";

type Pose = [number, number, number, number, number, number, number]; // x, height, z, tilt, crouch, strike, kick
// The easing belongs to the arrival: fast strikes, held anticipation, soft recovery.
type Frame = [number, Pose, "linear"?];
export const encounterDuration = 6.2;
const ground = 0.34;
const at = (
  x: number,
  y = 0,
  tilt = 0,
  crouch = 0,
  strike = 0,
  kick = 0,
  z = 1.05,
): Pose => [x, y, z, tilt, crouch, strike, kick];
function sample(frames: Frame[], time: number): Pose {
  const next = frames.findIndex(([t]) => t > time);
  if (next < 0) return frames.at(-1)![1];
  if (next === 0) return frames[0][1];
  const [a, from] = frames[next - 1],
    [b, to, easing] = frames[next];
  const u = (time - a) / (b - a),
    p = easing === "linear" ? u : smoothstep(0, 1, u);
  return from.map((value, i) => THREE.MathUtils.lerp(value, to[i], p)) as Pose;
}
function place(actor: Fighter, p: Pose, facing: number, stride: number) {
  actor.group.position.set(p[0], ground + p[1], p[2]);
  actor.group.rotation.set(0, 0, p[3]);
  actor.pose(facing, p[4], p[5], p[6], stride);
}

export function createEncounter(root: THREE.Group, player: Fighter) {
  const challenger = createFighter(0x557f91, "challenger");
  root.add(challenger.group);
  challenger.group.visible = false;
  const dust = new THREE.Group();
  root.add(dust);
  const dustMat = material(0xe6d9b3);
  const puffs = Array.from({ length: 6 }, () => {
    const puff = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.055, 0),
      dustMat,
    );
    dust.add(puff);
    return puff;
  });
  const impact = new THREE.Group();
  root.add(impact);
  for (let i = 0; i < 5; i++) {
    const ray = new THREE.Mesh(
      new THREE.BoxGeometry(0.025, 0.15, 0.025),
      material(0xf5de9b),
    );
    const angle = (i * Math.PI * 2) / 5;
    ray.position.set(Math.cos(angle) * 0.19, Math.sin(angle) * 0.19, 0);
    ray.rotation.z = angle - Math.PI / 2;
    impact.add(ray);
  }
  let previous = 0,
    kind = -1,
    red: Frame[] = [],
    blue: Frame[] = [],
    impacts: number[] = [];
  let returnX = 0,
    returnZ = 0;
  return (action: number, elapsed: number, reduced: boolean) => {
    dust.visible = impact.visible = false;
    challenger.group.visible =
      action > 0 && (elapsed < encounterDuration || reduced);
    if (!challenger.group.visible) return;
    if (action !== previous) {
      previous = action;
      // Pick randomly from the other moves, so a second press always brings a new beat.
      kind =
        kind < 0
          ? Math.floor(Math.random() * 3)
          : (kind + 1 + Math.floor(Math.random() * 2)) % 3;
      returnX = player.group.position.x;
      returnZ = player.group.position.z;
      red = [
        [0, at(returnX, 0, 0, 0, 0, 0, returnZ)],
        [1.1, at(-0.72)],
        [1.45, at(-0.78, 0, 0.12, 0.5)],
      ];
      blue = [
        [0, at(1.65, 0, 0, 0, 0, 0, -1.1)],
        [1.1, at(0.72)],
        [1.45, at(0.72, 0, -0.06, 0.15)],
      ];
      if (kind === 0) {
        // A springing bean bump, recoil, then a reply that the player ducks.
        red.push(
          [1.72, at(-0.86, 0, 0.18, 0.6)],
          [1.94, at(0.07, 0.02, -0.4, 0.05, 1), "linear"],
          [2.03, at(0.07, 0.02, -0.4, 0.05, 1)],
          [2.35, at(-0.6, 0, 0, 0.1)],
          [2.72, at(-0.72, 0, 0.3, 1)],
          [3.04, at(-0.92, 0, 0.18, 0.75)],
          [3.5, at(-0.76)],
          [4.3, at(-0.76)],
        );
        blue.push(
          [1.94, at(0.62, 0, 0, 0.15)],
          [2.15, at(1.05, 0.06, -0.48, 0, 0), "linear"],
          [2.43, at(0.76, 0, -0.12, 0.6)],
          [2.82, at(0.12, 0, 0.2, 0.05, 1), "linear"],
          [3.02, at(0.12, 0, 0.15, 0.15, 0.6)],
          [3.5, at(0.72)],
          [4.3, at(0.72)],
        );
        impacts = [1.96];
      } else if (kind === 1) {
        // A low wind-up, a clean airborne kick, then separate landings and recovery.
        red.push(
          [1.68, at(-0.92, 0, 0.25, 0.85)],
          [1.98, at(-0.52, 0.72, 0.35, 0, 0.2, 0.4), "linear"],
          [2.15, at(0.2, 0.6, 0.85, 0, 0, 0.8), "linear"],
          [2.26, at(0.62, 0.28, 1.05, 0, 0, 1), "linear"],
          [2.32, at(0.64, 0.26, 1.05, 0, 0, 1)],
          [2.68, at(0.3, 0.08, 0.25, 0, 0, 0.4), "linear"],
          [2.8, at(0.2, 0, 0.08, 0.95)],
          [3.25, at(-0.36)],
          [4.3, at(-0.55)],
        );
        blue.push(
          [2.26, at(0.67, 0, -0.1, 0.3)],
          [2.48, at(1.28, 0.18, -0.85), "linear"],
          [2.76, at(1.55, 0.04, -1.25), "linear"],
          [3.05, at(1.55, 0.04, -1.25)],
          [3.38, at(1.4, 0, -0.55, 0.8)],
          [3.8, at(1.05)],
          [4.3, at(0.85)],
        );
        impacts = [2.26, 2.78];
      } else {
        // The attacker commits; the defender drops their hips, turns and throws.
        red.push(
          [1.8, at(-0.67, 0, 0, 0.1)],
          [2.08, at(-0.27, 0, 0.45, 0.85, 0.7)],
          [2.13, at(-0.27, 0, 0.45, 0.85, 0.7)],
          [2.22, at(-0.27, 0, 0.6, 0.7, 0.7)],
          [2.4, at(-0.32, 0, 0.4, 0.5, 0.75)],
          [2.62, at(-0.25, 0, 0.26, 0.2, 0.4)],
          [3.1, at(0.05)],
          [4.3, at(0.35)],
        );
        blue.push(
          [1.7, at(0.85, 0, -0.18, 0.6)],
          [2.08, at(-0.21, 0, 0.32, 0, 0.7, 0, 0.81), "linear"],
          [2.13, at(-0.21, 0, 0.32, 0, 0.7, 0, 0.81)],
          [2.22, at(-0.4, 0.27, 0.9, 0.2, 0.4, 0, 0.72), "linear"],
          [2.4, at(-0.65, 0.65, 1.8, 0.2, 0.4, 0, 0.72), "linear"],
          [2.52, at(-0.95, 0.85, 2.65, 0.3), "linear"],
          [2.8, at(-1.45, 0.14, 4.65, 0.4), "linear"],
          [3.15, at(-1.5, 0.04, 4.78)],
          [3.65, at(-1.3, 0, 5.9, 0.8)],
          [4.05, at(-1.1, 0, Math.PI * 2)],
          [4.3, at(-1.1, 0, Math.PI * 2)],
        );
        impacts = [2.82];
      }
      red.push(
        [5, at(returnX, 0, 0, 0, 0, 0, returnZ)],
        [encounterDuration, at(returnX, 0, 0, 0, 0, 0, returnZ)],
      );
      const endTilt = kind === 2 ? Math.PI * 2 : 0;
      blue.push(
        [5.6, at(1.5, 0, endTilt, 0, 0, 0, -0.9)],
        [encounterDuration, at(1.65, 0, endTilt, 0, 0, 0, -1.1)],
      );
    }
    const t = reduced ? 1.4 : elapsed;
    const walking = t < 1.1 || t > 4.3;
    const stride = walking && !reduced ? Math.sin(t * 18) * 0.6 : 0;
    place(player, sample(red, t), 1, stride);
    place(challenger, sample(blue, t), -1, -stride);
    const entrance = smoothstep(0, 0.35, t) * (1 - smoothstep(5.6, 6.2, t));
    challenger.group.scale.setScalar(Math.max(0.001, entrance));
    for (const hit of impacts) {
      const age = t - hit;
      if (age < 0 || age > 0.44) continue;
      const p = age / 0.44;
      dust.visible = true;
      dust.position.set(challenger.group.position.x, ground, 1.05);
      puffs.forEach((puff, i) => {
        const angle = (i * Math.PI) / 3;
        puff.position.set(
          Math.cos(angle) * (0.12 + p * 0.35),
          Math.sin(p * Math.PI) * 0.14,
          Math.sin(angle) * (0.12 + p * 0.35),
        );
        puff.scale.setScalar(1 - p);
      });
      if (age < 0.12) {
        impact.visible = true;
        impact.position.copy(challenger.group.position);
        impact.position.y += 0.45;
        impact.scale.setScalar(1 + age * 2);
      }
    }
  };
}
