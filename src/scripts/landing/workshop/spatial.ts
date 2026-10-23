import * as THREE from "three";
import { approach, sceneProgress } from "./geometry";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { createDevice } from "./scenes/device";
import { createLandscape } from "./scenes/terrain";
import { createWorld } from "./scenes/world";
import { createProducts } from "./scenes/products";
import type { SceneInput, SpatialModel } from "./scenes/shared";

const builders = {
  device: createDevice,
  terrain: createLandscape,
  world: createWorld,
  products: createProducts,
};
type SceneName = keyof typeof builders;
interface View {
  element: HTMLElement;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  model?: SpatialModel;
  name: SceneName;
  visible: boolean;
  action: number;
  x: number;
  y: number;
  current: SceneInput;
}

/** One GPU context serves every view. Offscreen scenes do not render; idle scenes stop scheduling frames. */
export function setupSpatialScenes() {
  const elements = [
    ...document.querySelectorAll<HTMLElement>("[data-spatial-scene]"),
  ];
  if (!elements.length) return;
  let renderer: THREE.WebGLRenderer;
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("webgl2", {
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
    if (!context) return;
    renderer = new THREE.WebGLRenderer({
      canvas,
      context,
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    });
  } catch {
    return;
  } // The authored illustration remains visible without WebGL.
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 0.95;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  const pmrem = new THREE.PMREMGenerator(renderer),
    room = new RoomEnvironment();
  const environment = pmrem.fromScene(room, 0.04);
  room.dispose();
  pmrem.dispose();
  const media = matchMedia("(prefers-reduced-motion: reduce)");
  const coarse = matchMedia("(pointer: coarse)");
  const events = new AbortController(),
    { signal } = events;
  let frame = 0,
    last = 0,
    failed = false,
    disposed = false;
  const views: View[] = elements.flatMap((element) => {
    const canvas = element.querySelector<HTMLCanvasElement>("canvas")!;
    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return [];
    return [
      {
        element,
        canvas,
        context,
        name: element.dataset.spatialScene as SceneName,
        visible: false,
        action: 0,
        x: 0,
        y: 0,
        current: {
          progress: 0.25,
          pointerX: 0,
          pointerY: 0,
          action: 0,
          time: 0,
          reduced: media.matches,
        },
      },
    ];
  });
  const request = () => {
    if (!frame && !document.hidden && !failed && !disposed)
      frame = requestAnimationFrame(render);
  };
  function showFallback() {
    failed = true;
    cancelAnimationFrame(frame);
    frame = 0;
    views.forEach(({ element }) => {
      element.classList.remove("is-rendered");
      const button = element.querySelector<HTMLButtonElement>("button");
      if (button) button.hidden = true;
    });
  }
  function render(now: number) {
    frame = 0;
    const dt = Math.min((now - last) / 1000 || 1 / 60, 0.05);
    last = now;
    let unsettled = false;
    for (const view of views) {
      if (!view.visible) continue;
      const rect = view.canvas.getBoundingClientRect();
      if (
        !rect.width ||
        !rect.height ||
        rect.bottom <= 0 ||
        rect.top >= innerHeight
      )
        continue;
      try {
        if (!view.model) view.model = builders[view.name](environment.texture);
        const progress = sceneProgress(rect.top, rect.height, innerHeight);
        const target = {
          progress: media.matches ? 0.6 : progress,
          pointerX: media.matches ? 0 : view.x,
          pointerY: media.matches ? 0 : view.y,
          action: view.action,
        };
        for (const key of [
          "progress",
          "pointerX",
          "pointerY",
          "action",
        ] as const) {
          const delta = target[key] - view.current[key];
          view.current[key] = approach(
            view.current[key],
            target[key],
            dt,
            media.matches,
          );
          if (Math.abs(delta) >= 0.0005) unsettled = true;
        }
        view.current.reduced = media.matches;
        view.current.time = now / 1000;
        view.model.update(view.current);
        const dpr = Math.min(
          devicePixelRatio || 1,
          coarse.matches ? 1.25 : 1.5,
        );
        const width = Math.round(rect.width * dpr),
          height = Math.round(rect.height * dpr);
        if (view.canvas.width !== width || view.canvas.height !== height) {
          view.canvas.width = width;
          view.canvas.height = height;
        }
        const size = renderer.getSize(new THREE.Vector2());
        if (size.x !== width || size.y !== height)
          renderer.setSize(width, height, false);
        view.model.camera.aspect = rect.width / rect.height;
        view.model.camera.updateProjectionMatrix();
        renderer.render(view.model.scene, view.model.camera);
        view.context.clearRect(0, 0, width, height);
        view.context.drawImage(renderer.domElement, 0, 0);
        view.element.classList.add("is-rendered");
        const button = view.element.querySelector<HTMLButtonElement>("button");
        if (button) button.hidden = false;
      } catch {
        showFallback();
        break;
      }
    }
    if (unsettled) request();
  }
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const view = views.find((view) => view.element === entry.target);
        if (view) view.visible = entry.isIntersecting;
      }
      request();
    },
    { rootMargin: "100px" },
  );
  const resize = new ResizeObserver(request);
  for (const view of views) {
    observer.observe(view.element);
    resize.observe(view.element);
    view.element.addEventListener(
      "pointermove",
      (event) => {
        if (event.pointerType !== "mouse" || media.matches) return;
        const rect = view.element.getBoundingClientRect();
        view.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        view.y = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        request();
      },
      { signal, passive: true },
    );
    view.element.addEventListener(
      "pointerleave",
      () => {
        view.x = 0;
        view.y = 0;
        request();
      },
      { signal },
    );
    const button = view.element.querySelector<HTMLButtonElement>("button");
    button?.addEventListener(
      "click",
      () => {
        view.action =
          view.name === "terrain" ? view.action + 1 : 1 - view.action;
        button.setAttribute("aria-pressed", String(view.action % 2 === 1));
        if (view.name === "device")
          button.querySelector("[data-action-label]")!.textContent = view.action
            ? "Take it apart"
            : "Put it together";
        request();
      },
      { signal },
    );
  }
  addEventListener("scroll", request, { passive: true, signal });
  addEventListener("resize", request, { passive: true, signal });
  media.addEventListener("change", request, { signal });
  document.addEventListener(
    "visibilitychange",
    () => {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else {
        last = performance.now();
        request();
      }
    },
    { signal },
  );
  renderer.domElement.addEventListener(
    "webglcontextlost",
    (event) => {
      event.preventDefault();
      showFallback();
    },
    { signal },
  );
  addEventListener("pageshow", request, { signal });
  addEventListener(
    "pagehide",
    (event) => {
      if (event.persisted) {
        cancelAnimationFrame(frame);
        frame = 0;
        return;
      }
      disposed = true;
      events.abort();
      observer.disconnect();
      resize.disconnect();
      cancelAnimationFrame(frame);
      const resources = new Set<{ dispose: () => void }>();
      views.forEach((view) =>
        view.model?.scene.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          resources.add(object.geometry);
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((mat) => {
            resources.add(mat);
            Object.values(mat).forEach((value) => {
              if (
                value instanceof THREE.Texture &&
                value !== environment.texture
              )
                resources.add(value);
            });
          });
        }),
      );
      resources.forEach((resource) => resource.dispose());
      environment.dispose();
      renderer.dispose();
    },
    { signal },
  );
  request();
}
