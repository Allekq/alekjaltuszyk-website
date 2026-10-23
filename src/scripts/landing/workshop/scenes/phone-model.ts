import * as THREE from "three";
import { material } from "./shared";
import { interfaceStudy } from "./phone-screens";

// A rounded outline keeps the corners round even on a very thin phone.
function outline(width: number, height: number, r: number) {
  const x = -width / 2,
    y = -height / 2,
    shape = new THREE.Shape();
  shape.moveTo(x + r, y);
  shape.lineTo(x + width - r, y);
  shape.quadraticCurveTo(x + width, y, x + width, y + r);
  shape.lineTo(x + width, y + height - r);
  shape.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  shape.lineTo(x + r, y + height);
  shape.quadraticCurveTo(x, y + height, x, y + height - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);
  return shape;
}
export function createPhone(id: string, index: number) {
  const phone = new THREE.Group();
  phone.name = `phone-${id}`;
  const frame = new THREE.Mesh(
    new THREE.ExtrudeGeometry(outline(1.14, 2.28, 0.17), {
      depth: 0.1,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.012,
      bevelThickness: 0.012,
      curveSegments: 6,
    }),
    material(
      [0x849080, 0x9c91ac, 0x6e7b6b, 0x8ca99e, 0xb49a78][index % 5],
      0.7,
      0.28,
    ),
  );
  frame.rotation.x = -Math.PI / 2;
  frame.castShadow = frame.receiveShadow = true;
  phone.add(frame);
  const bezel = new THREE.Mesh(
    new THREE.ShapeGeometry(outline(1.106, 2.245, 0.156)),
    material(0x151c1a, 0.3, 0.2),
  );
  bezel.rotation.x = -Math.PI / 2;
  bezel.position.y = 0.113;
  phone.add(bezel);
  const screenGeometry = new THREE.ShapeGeometry(outline(1.035, 2.17, 0.13), 8);
  const uv = screenGeometry.getAttribute("uv"),
    vertices = screenGeometry.getAttribute("position");
  for (let i = 0; i < uv.count; i++)
    uv.setXY(i, vertices.getX(i) / 1.035 + 0.5, vertices.getY(i) / 2.17 + 0.5);
  interfaceStudy(phone, id, screenGeometry);
  const island = new THREE.Mesh(
    new THREE.ShapeGeometry(outline(0.27, 0.078, 0.039)),
    material(0x121815),
  );
  island.rotation.x = -Math.PI / 2;
  island.position.set(0, 0.12, -0.975);
  phone.add(island);
  const camera = new THREE.Mesh(
    new THREE.CircleGeometry(0.018, 12),
    material(0x263e4a, 0.65, 0.12),
  );
  camera.rotation.x = -Math.PI / 2;
  camera.position.set(0.086, 0.121, -0.975);
  phone.add(camera);
  for (const [x, z, length] of [
    [0.58, -0.35, 0.32],
    [-0.58, -0.3, 0.2],
    [-0.58, 0.02, 0.2],
  ]) {
    const button = new THREE.Mesh(
      new THREE.BoxGeometry(0.022, 0.04, length),
      material(0xadb5a9, 0.8),
    );
    button.position.set(x, 0.055, z);
    phone.add(button);
  }
  return phone;
}
