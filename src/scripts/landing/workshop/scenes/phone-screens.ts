import * as THREE from "three";
import { canvasTexture } from "./shared";

/** Original interface studies, deliberately simpler than real app screenshots. */
export function interfaceStudy(
  phone: THREE.Group,
  id: string,
  geometry: THREE.BufferGeometry,
) {
  const styles: Record<string, [string, string, string, string]> = {
    plankept: ["#e8ecd9", "#50654a", "PLANKEPT", "Follow through."],
    "audio-book-choices": [
      "#e7deef",
      "#65527b",
      "AUDIOCHOICES",
      "Choose a path.",
    ],
    overlit: ["#24372e", "#c8e898", "OVERLIT", "Keep it alive."],
    "voice-of-self": ["#dfebe3", "#4c7968", "VOICE OF SELF", "Make space."],
    "take-me-somewhere": [
      "#eee5d4",
      "#826748",
      "TAKE ME SOMEWHERE",
      "Go a little further.",
    ],
  };
  const [paper, ink, name, title] = styles[id] ?? [
    "#e8ecd9",
    "#50654a",
    "AN EVERYDAY IDEA",
    "Make it useful.",
  ];
  const texture = canvasTexture(400, 800, (c) => {
    c.fillStyle = paper;
    c.fillRect(0, 0, 400, 800);
    c.fillStyle = ink;
    c.font = "19px monospace";
    c.fillText("9:41", 28, 44);
    c.fillRect(331, 31, 24, 11);
    c.fillRect(359, 34, 3, 5);
    c.font = "17px monospace";
    c.fillText(name, 28, 123);
    c.font = "45px Georgia";
    c.fillText(title, 27, 185, 350);
    c.strokeStyle = ink;
    c.lineWidth = 3;
    if (id === "plankept") {
      for (let i = 0; i < 4; i++) {
        c.strokeRect(32, 270 + i * 91, 32, 32);
        if (i < 2) {
          c.beginPath();
          c.moveTo(38, 284 + i * 91);
          c.lineTo(46, 294 + i * 91);
          c.lineTo(61, 272 + i * 91);
          c.stroke();
        }
        c.fillRect(94, 280 + i * 91, 218 - i * 24, 5);
      }
      c.globalAlpha = 0.2;
      c.fillRect(32, 687, 336, 9);
      c.globalAlpha = 1;
      c.fillRect(32, 687, 198, 9);
    } else if (id === "audio-book-choices") {
      c.lineWidth = 4;
      for (const [x, y, d] of [
        [200, 620, 100],
        [100, 490, 55],
        [300, 490, 55],
      ]) {
        c.beginPath();
        c.moveTo(x, y);
        c.lineTo(x, y - 55);
        c.lineTo(x - d, y - 130);
        c.moveTo(x, y - 55);
        c.lineTo(x + d, y - 130);
        c.stroke();
        c.beginPath();
        c.arc(x, y, 7, 0, Math.PI * 2);
        c.fill();
      }
      c.font = "18px monospace";
      c.fillText("YOUR NEXT CHAPTER", 75, 702);
    } else if (id === "overlit") {
      for (let i = 0; i < 25; i++) {
        c.fillStyle = [2, 6, 9, 12, 18, 20].includes(i) ? ink : "#3c5342";
        c.beginPath();
        c.roundRect(32 + (i % 5) * 69, 280 + Math.floor(i / 5) * 69, 58, 58, 9);
        c.fill();
      }
      c.fillStyle = ink;
    } else if (id === "voice-of-self") {
      for (let i = 0; i < 19; i++) {
        const h = 28 + Math.abs(Math.sin(i * 1.8)) * 150;
        c.beginPath();
        c.roundRect(32 + i * 18, 440 - h / 2, 8, h, 4);
        c.fill();
      }
      c.beginPath();
      c.arc(200, 650, 32, 0, Math.PI * 2);
      c.stroke();
      c.beginPath();
      c.arc(200, 650, 12, 0, Math.PI * 2);
      c.fill();
    } else {
      c.strokeStyle = "#d0c7b7";
      c.lineWidth = 11;
      for (const x of [60, 160, 290]) {
        c.beginPath();
        c.moveTo(x, 260);
        c.lineTo(x, 680);
        c.stroke();
      }
      for (const y of [310, 450, 590]) {
        c.beginPath();
        c.moveTo(20, y);
        c.lineTo(380, y);
        c.stroke();
      }
      c.strokeStyle = ink;
      c.lineWidth = 6;
      c.setLineDash([9, 8]);
      c.beginPath();
      c.moveTo(60, 640);
      c.lineTo(60, 450);
      c.lineTo(290, 450);
      c.lineTo(290, 310);
      c.stroke();
      c.setLineDash([]);
      for (const [x, y] of [
        [60, 640],
        [290, 310],
      ]) {
        c.beginPath();
        c.arc(x, y, 12, 0, Math.PI * 2);
        c.fill();
      }
    }
    c.fillRect(147, 766, 106, 5);
  });
  const screen = new THREE.Mesh(
    geometry,
    new THREE.MeshBasicMaterial({ map: texture }),
  );
  screen.rotation.x = -Math.PI / 2;
  screen.position.y = 0.116;
  phone.add(screen);
}
