import * as THREE from "three";
import { canvasTexture, line, smoothstep } from "./shared";

/** Original interface studies. Scroll changes their state; no timer or remote content. */
export function interfaceStudy(phone: THREE.Group, index: number) {
  const style = [
    { paper: "#e2ead0", ink: "#4e6848" },
    { paper: "#d9e8df", ink: "#507d6d" },
    { paper: "#263c2c", ink: "#cde28a" },
  ][index];
  const texture = canvasTexture(400, 800, (ctx) => {
    ctx.fillStyle = style.paper;
    ctx.fillRect(0, 0, 400, 800);
    ctx.fillStyle = style.ink;
    ctx.font = "22px monospace";
    ctx.fillText("A LITTLE EVERYDAY", 32, 110);
    ctx.font = "55px Georgia";
    ctx.fillText(
      index === 0
        ? "Follow through."
        : index === 1
          ? "Make space."
          : "Keep going.",
      26,
      190,
      350,
    );
    if (index === 0)
      for (let n = 0; n < 4; n++) {
        ctx.strokeStyle = style.ink;
        ctx.lineWidth = 2;
        ctx.strokeRect(32, 270 + n * 90, 35, 35);
        ctx.fillRect(95, 282 + n * 90, 220 - n * 30, 5);
      }
    ctx.fillRect(140, 753, 120, 5);
  });
  const screen = new THREE.Mesh(
    new THREE.PlaneGeometry(1.58, 3.17),
    new THREE.MeshBasicMaterial({ map: texture }),
  );
  screen.rotation.x = -Math.PI / 2;
  screen.position.y = 0.145;
  phone.add(screen);
  const sx = 1.58 / 400,
    sz = 3.17 / 800;
  const point = (x: number, y: number) =>
    new THREE.Vector3((x - 200) * sx, 0.15, (y - 400) * sz);
  function rect(x: number, y: number, w: number, h: number, color: string) {
    const mesh = new THREE.Mesh(
      new THREE.PlaneGeometry(w * sx, h * sz),
      new THREE.MeshBasicMaterial({ color }),
    );
    mesh.rotation.x = -Math.PI / 2;
    mesh.position.copy(point(x + w / 2, y + h / 2));
    phone.add(mesh);
    return mesh;
  }
  const checks: THREE.Mesh[] = [];
  let fill: THREE.Mesh | undefined;
  const bars: THREE.Mesh[] = [];
  const cells: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>[] = [];
  if (index === 0) {
    for (let n = 0; n < 4; n++)
      checks.push(
        line(
          phone,
          [
            point(38, 288 + n * 90),
            point(45, 296 + n * 90),
            point(61, 278 + n * 90),
          ],
          new THREE.Color(style.ink).getHex(),
          0.007,
        ),
      );
    rect(32, 690, 310, 8, "#c4d0ae");
    fill = rect(32, 690, 310, 8, style.ink);
    // Keep the filling bar above its track without coplanar flicker.
    fill.position.y += 0.002;
  }
  if (index === 1)
    for (let n = 0; n < 16; n++)
      bars.push(rect(28 + n * 22, 420 - 50, 10, 100, style.ink));
  if (index === 2)
    for (let n = 0; n < 16; n++)
      cells.push(
        rect(
          35 + (n % 4) * 85,
          280 + Math.floor(n / 4) * 85,
          65,
          65,
          "#436144",
        ),
      );
  const bright = new THREE.Color(style.ink),
    dim = new THREE.Color("#436144");
  return (progress: number) => {
    checks.forEach((check, n) => {
      check.visible = progress >= n * 0.22;
    });
    if (fill) {
      const amount = 0.15 + progress * 0.85;
      fill.scale.x = amount;
      fill.position.x = (32 + (310 * amount) / 2 - 200) * sx;
    }
    bars.forEach((bar, n) => {
      bar.scale.y = 0.3 + Math.abs(Math.sin(n * 2.4 + progress * 5)) * 1.4;
    });
    const beat = progress * 3,
      step = Math.floor(beat),
      blend = smoothstep(0, 1, beat - step);
    cells.forEach((cell, n) => {
      const lit = (offset: number) =>
        [2, 5, 9, 14].includes((n + offset * 3) % 16) ? 1 : 0;
      cell.material.color.lerpColors(
        dim,
        bright,
        THREE.MathUtils.lerp(lit(step), lit(step + 1), blend),
      );
    });
  };
}
