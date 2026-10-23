/** A forward-only story: the camera follows one branch while new forks grow ahead. */
export function createStoryTree(object: HTMLElement) {
  const world = object.querySelector<SVGGElement>(".audio-tree__world")!;
  const svg = object.querySelector<SVGSVGElement>(".audio-tree")!;
  const ns = "http://www.w3.org/2000/svg";
  const dot = object.querySelector<SVGCircleElement>(".audio-tree__reader")!;
  svg.append(dot); // The reader stays near the centre while the world moves behind it.
  dot.style.transform = "none";
  const trail = document.createElementNS(ns, "path");
  trail.setAttribute("class", "audio-tree__trail");
  let seed = 73;
  const random = () => {
    seed = (seed * 16807) % 2147483647;
    return seed / 2147483647;
  };
  const points = [{ x: 90, y: 94 }];
  let time = 0,
    frame = 0,
    last = 0,
    drawnLevel = -1,
    playing = false;
  const extend = (level: number) => {
    while (points.length <= level + 4) {
      const previous = points.at(-1)!;
      points.push({
        x: previous.x + (random() > 0.5 ? 32 : -32),
        y: previous.y - 38,
      });
    }
  };
  const branch = (d: string) => {
    const path = document.createElementNS(ns, "path");
    path.setAttribute("d", d);
    world.append(path);
  };
  function draw() {
    const progress = time / 3300,
      level = Math.floor(progress),
      phase = progress - level;
    extend(level);
    if (drawnLevel !== level) {
      drawnLevel = level;
      world.replaceChildren();
      for (let i = Math.max(0, level - 2); i < level + 4; i++) {
        const p = points[i];
        for (const direction of [-1, 1]) {
          const x = p.x + direction * 32,
            y = p.y - 38;
          branch(`M${p.x} ${p.y}C${p.x} ${p.y - 20} ${x} ${y + 20} ${x} ${y}`);
          // An unchosen fork has its own possibilities, fading into the distance.
          if (x !== points[i + 1].x) {
            branch(`M${x} ${y}l-15 -22M${x} ${y}l15 -22`);
          }
          const node = document.createElementNS(ns, "circle");
          node.setAttribute("cx", String(x));
          node.setAttribute("cy", String(y));
          node.setAttribute("r", "2.5");
          world.append(node);
        }
      }
      world.append(trail);
    }
    const a = points[level],
      b = points[level + 1];
    // Same cubic curve as the fork; the dot follows it without ever retracing a branch.
    const one = 1 - phase;
    const x =
      a.x * (one * one * one + 3 * one * one * phase) +
      b.x * (3 * one * phase * phase + phase * phase * phase);
    const y =
      one ** 3 * a.y +
      3 * one * one * phase * (a.y - 20) +
      3 * one * phase * phase * (b.y + 20) +
      phase ** 3 * b.y;
    const drift = Math.sin(phase * Math.PI) * Math.sign(b.x - a.x) * 4;
    world.setAttribute("transform", `translate(${90 - x + drift} ${76 - y})`);
    dot.setAttribute("cx", String(90 + drift));
    dot.setAttribute("cy", "76");
    trail.setAttribute(
      "d",
      `M${a.x} ${a.y}C${a.x} ${a.y - 20} ${b.x} ${b.y + 20} ${b.x} ${b.y}`,
    );
    trail.setAttribute("pathLength", "1");
    trail.style.strokeDasharray = "1";
    trail.style.strokeDashoffset = String(1 - phase);
  }
  function tick(now: number) {
    if (!playing) return;
    if (!last) last = now;
    if (now - last >= 1000 / 30) {
      time += Math.min(100, now - last);
      last = now;
      draw();
    }
    frame = requestAnimationFrame(tick);
  }
  draw();
  const pause = () => {
    playing = false;
    cancelAnimationFrame(frame);
    frame = 0;
    last = 0;
  };
  return {
    play() {
      if (!playing) {
        playing = true;
        frame = requestAnimationFrame(tick);
      }
    },
    pause,
    reset() {
      pause();
      time = 0;
      drawnLevel = -1;
      draw();
    },
    cancel: pause,
  };
}
