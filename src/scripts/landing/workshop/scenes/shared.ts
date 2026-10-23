import * as THREE from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";

export interface SceneInput {
  progress: number;
  pointerX: number;
  pointerY: number;
  action: number;
  time: number;
  elapsed: number;
  reduced: boolean;
}
export interface SpatialModel {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  actionDuration?: number;
  actionLabels?: string[];
  update: (input: SceneInput) => void;
}
export const palette = {
  paper: 0xf0eddf,
  chalk: 0xe7e9d8,
  ink: 0x242d29,
  sage: 0x8b9a76,
  red: 0xc64b2d,
  metal: 0x8f9994,
  copper: 0xb58d58,
};
export const material = (color: number, metalness = 0, roughness = 0.45) =>
  new THREE.MeshStandardMaterial({ color, metalness, roughness });
export function block(
  parent: THREE.Object3D,
  size: [number, number, number],
  pos: [number, number, number],
  mat: THREE.Material,
  radius = 0.06,
) {
  const mesh = new THREE.Mesh(
    new RoundedBoxGeometry(
      ...size,
      2,
      Math.min(radius, Math.min(...size) * 0.45),
    ),
    mat,
  );
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function cylinder(
  parent: THREE.Object3D,
  radius: number,
  height: number,
  pos: [number, number, number],
  mat: THREE.Material,
  top = radius,
) {
  const mesh = new THREE.Mesh(
    new THREE.CylinderGeometry(top, radius, height, 32),
    mat,
  );
  mesh.position.set(...pos);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  parent.add(mesh);
  return mesh;
}
export function line(
  parent: THREE.Object3D,
  points: THREE.Vector3[],
  color: number,
  radius = 0.018,
) {
  const curve = new THREE.CatmullRomCurve3(points);
  const mesh = new THREE.Mesh(
    new THREE.TubeGeometry(
      curve,
      Math.max(16, points.length * 8),
      radius,
      6,
      false,
    ),
    material(color, 0.25),
  );
  parent.add(mesh);
  return mesh;
}
export function stage(
  environment: THREE.Texture,
  targetY = 0.7,
  distance = 10,
): SpatialModel & { root: THREE.Group } {
  const scene = new THREE.Scene();
  scene.environment = environment;
  scene.environmentIntensity = 0.5;
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 60);
  camera.position.set(distance * 0.64, distance * 0.72, distance);
  camera.lookAt(0, targetY, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xa0aa8b, 1.3));
  const key = new THREE.DirectionalLight(0xfff4dc, 2.7);
  key.position.set(-4, 9, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  key.shadow.camera.left = -7;
  key.shadow.camera.right = 7;
  key.shadow.camera.top = 7;
  key.shadow.camera.bottom = -7;
  key.shadow.normalBias = 0.035;
  key.shadow.bias = -0.0002;
  key.shadow.radius = 4;
  scene.add(key);
  const fill = new THREE.DirectionalLight(0xdfe9ff, 1.4);
  fill.position.set(6, 3, -5);
  scene.add(fill);
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(200, 200),
    new THREE.ShadowMaterial({ color: 0x394536, opacity: 0.15 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -0.39;
  floor.receiveShadow = true;
  scene.add(floor);
  const root = new THREE.Group();
  scene.add(root);
  return { scene, camera, root, update: () => {} };
}
export function canvasTexture(
  width: number,
  height: number,
  draw: (ctx: CanvasRenderingContext2D) => void,
) {
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  draw(ctx);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
export function label(
  parent: THREE.Object3D,
  text: string,
  width: number,
  height: number,
  pos: [number, number, number],
  color = "#dde4d4",
  background = "#28312a",
) {
  const texture = canvasTexture(512, 128, (ctx) => {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, 512, 128);
    ctx.fillStyle = color;
    ctx.font = "500 40px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 256, 64);
  });
  const mesh = new THREE.Mesh(
    new THREE.PlaneGeometry(width, height),
    new THREE.MeshBasicMaterial({ map: texture }),
  );
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.set(...pos);
  parent.add(mesh);
  return mesh;
}
export const smoothstep = (a: number, b: number, x: number) => {
  const t = THREE.MathUtils.clamp((x - a) / (b - a), 0, 1);
  return t * t * (3 - 2 * t);
};
