import * as THREE from "three";
import {
  block,
  canvasTexture,
  material,
  palette,
  stage,
  type SpatialModel,
} from "./shared";

export function createProducts(environment: THREE.Texture): SpatialModel {
  const model = stage(environment, 0.8, 10),
    { root } = model;
  const bodies: THREE.Group[] = [];
  // Interface studies: a plan, a waveform and a game, not fabricated screenshots.
  const styles = [
    { color: "#e2ead0", ink: "#4e6848" },
    { color: "#d9e8df", ink: "#507d6d" },
    { color: "#263c2c", ink: "#cde28a" },
  ];
  styles.forEach(({ color, ink }, i) => {
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
    const texture = canvasTexture(400, 800, (ctx) => {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, 400, 800);
      ctx.fillStyle = ink;
      ctx.font = "22px monospace";
      ctx.fillText("A LITTLE EVERYDAY", 32, 110);
      ctx.font = "55px Georgia";
      ctx.fillText(
        i === 0 ? "Follow through." : i === 1 ? "Make space." : "Keep going.",
        26,
        190,
        350,
      );
      if (i === 0) {
        for (let n = 0; n < 4; n++) {
          ctx.strokeStyle = ink;
          ctx.lineWidth = 2;
          ctx.strokeRect(32, 270 + n * 90, 35, 35);
          ctx.fillStyle = ink;
          ctx.fillRect(95, 282 + n * 90, 220 - n * 30, 5);
        }
        ctx.font = "30px sans-serif";
        ctx.fillText("✓", 36, 298);
      }
      if (i === 1) {
        for (let n = 0; n < 16; n++) {
          const h = 30 + Math.abs(Math.sin(n * 2.4)) * 140;
          ctx.fillStyle = ink;
          ctx.beginPath();
          ctx.roundRect(28 + n * 22, 440 - h / 2, 10, h, 5);
          ctx.fill();
        }
      }
      if (i === 2) {
        for (let n = 0; n < 16; n++) {
          ctx.fillStyle = [2, 5, 9, 14].includes(n) ? ink : "#436144";
          ctx.beginPath();
          ctx.roundRect(
            35 + (n % 4) * 85,
            280 + Math.floor(n / 4) * 85,
            65,
            65,
            8,
          );
          ctx.fill();
        }
      }
      ctx.fillStyle = ink;
      ctx.fillRect(140, 753, 120, 5);
    });
    const screen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.58, 3.17),
      new THREE.MeshBasicMaterial({ map: texture }),
    );
    screen.rotation.x = -Math.PI / 2;
    screen.position.y = 0.145;
    phone.add(screen);
    block(
      phone,
      [0.55, 0.016, 0.13],
      [0, 0.157, -1.45],
      material(0x242d29),
      0.06,
    );
  });
  return {
    ...model,
    update({ progress, pointerX, pointerY, action, reduced }) {
      bodies.forEach((phone, i) => {
        phone.position.set(
          (i - 1) * 1.72,
          0.25 + Math.sin(i * 1.7) * 0.4,
          (i - 1) * -0.45,
        );
        phone.rotation.set(0, (i - 1) * 0.2, 0);
        phone.position.y += reduced
          ? 0
          : Math.sin(progress * Math.PI + i * 0.8) * 0.22;
      });
      root.rotation.set(
        pointerY * 0.05,
        -0.3 +
          pointerX * 0.15 +
          (reduced ? 0 : (progress - 0.5) * 0.3) +
          action * 0.45,
        -0.05,
      );
    },
  };
}
