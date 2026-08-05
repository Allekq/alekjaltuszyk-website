/*
 * A miniature, playable OverLit board.
 *
 * Cells light up, heat through warning into critical, and take a life when they
 * burn out. Tap a lit cell to clear it and score. It is a taste of the real
 * game's pressure loop, not a port of it — the app owns the actual rules,
 * levels, and tuning.
 *
 * Markup contract
 *   [data-board-demo]              root; carries data-board-state
 *     data-board-size="5"          grid edge length
 *     [data-board-grid]            cell container (cells are created here)
 *     [data-board-score]           score readout
 *     [data-board-best]            best-score readout
 *     [data-board-lives]           lives container of [data-board-life] pips
 *     [data-board-clock]           remaining seconds
 *     [data-board-start]           start / restart button
 *     [data-board-overlay]         idle + game-over panel
 *     [data-board-result]          game-over headline
 *
 * No score leaves the page: `best` lives in memory for the visit only.
 */

type CellPhase = "idle" | "lit" | "warning" | "critical";

interface Cell {
  button: HTMLButtonElement;
  index: number;
  phase: CellPhase;
  /** Milliseconds left before the cell escalates or burns out. */
  timer: number;
}

interface BoardConfig {
  criticalMs: number;
  litMs: number;
  runMs: number;
  spawnMs: number;
  warningMs: number;
}

const CONFIG: BoardConfig = {
  criticalMs: 900,
  litMs: 1500,
  runMs: 25_000,
  spawnMs: 900,
  warningMs: 1100,
};

const PHASE_MS: Record<Exclude<CellPhase, "idle">, number> = {
  lit: CONFIG.litMs,
  warning: CONFIG.warningMs,
  critical: CONFIG.criticalMs,
};

const PHASE_SCORE: Record<Exclude<CellPhase, "idle">, number> = {
  lit: 10,
  warning: 20,
  critical: 35,
};

const NEXT_PHASE: Record<Exclude<CellPhase, "idle">, CellPhase | null> = {
  lit: "warning",
  warning: "critical",
  critical: null,
};

const START_LIVES = 3;

/**
 * Attract mode: a few cells sit lit behind the start overlay, so the board reads
 * as a game rather than an empty panel before anyone presses anything. It is
 * also the whole board under reduced motion.
 */
const ATTRACT: { at: number; phase: Exclude<CellPhase, "idle"> }[] = [
  { at: 0.08, phase: "lit" },
  { at: 0.28, phase: "critical" },
  { at: 0.46, phase: "warning" },
  { at: 0.62, phase: "lit" },
  { at: 0.88, phase: "warning" },
];

/** Builds the cell buttons and returns them, without wiring any behaviour. */
const buildCells = (grid: HTMLElement, total: number) => {
  const cells: Cell[] = [];

  for (let index = 0; index < total; index += 1) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "overlit-board__cell";
    button.dataset.phase = "idle";
    button.setAttribute("aria-label", `Cell ${index + 1}`);
    grid.append(button);

    cells.push({ button, index, phase: "idle", timer: 0 });
  }

  return cells;
};

const applyAttract = (cells: Cell[], total: number) => {
  ATTRACT.forEach(({ at, phase }) => {
    const cell = cells[Math.floor(at * total)];

    if (cell) {
      cell.phase = phase;
      cell.button.dataset.phase = phase;
    }
  });
};

const setupBoard = (root: HTMLElement) => {
  const grid = root.querySelector<HTMLElement>("[data-board-grid]");
  const startButton = root.querySelector<HTMLButtonElement>("[data-board-start]");

  if (!grid || !startButton) {
    return;
  }

  const size = Number.parseInt(root.dataset.boardSize ?? "5", 10) || 5;
  const total = size * size;
  const scoreOut = root.querySelector<HTMLElement>("[data-board-score]");
  const bestOut = root.querySelector<HTMLElement>("[data-board-best]");
  const clockOut = root.querySelector<HTMLElement>("[data-board-clock]");
  const resultOut = root.querySelector<HTMLElement>("[data-board-result]");
  const lifePips = Array.from(root.querySelectorAll<HTMLElement>("[data-board-life]"));

  const cells = buildCells(grid, total);

  let running = false;
  let score = 0;
  let best = 0;
  let lives = START_LIVES;
  let remaining = CONFIG.runMs;
  let sinceSpawn = 0;
  let lastFrame = 0;
  let frameId = 0;

  const paint = (cell: Cell) => {
    cell.button.dataset.phase = cell.phase;
  };

  const setPhase = (cell: Cell, phase: CellPhase) => {
    cell.phase = phase;
    cell.timer = phase === "idle" ? 0 : PHASE_MS[phase];
    paint(cell);
  };

  const renderReadouts = () => {
    if (scoreOut) {
      scoreOut.textContent = String(score);
    }

    if (bestOut) {
      bestOut.textContent = String(best);
    }

    if (clockOut) {
      clockOut.textContent = `${(Math.max(remaining, 0) / 1000).toFixed(1)}s`;
    }

    lifePips.forEach((pip, index) => {
      pip.classList.toggle("is-spent", index >= lives);
    });

    root.style.setProperty("--board-heat", (1 - lives / START_LIVES).toFixed(3));
    root.style.setProperty(
      "--board-clock",
      (Math.max(remaining, 0) / CONFIG.runMs).toFixed(3),
    );
  };

  const stop = (reason: "time" | "lives") => {
    running = false;
    root.dataset.boardState = "over";
    best = Math.max(best, score);
    cells.forEach((cell) => setPhase(cell, "idle"));

    if (resultOut) {
      resultOut.textContent =
        reason === "lives"
          ? `The board went dark at ${score}.`
          : `Time. You held it at ${score}.`;
    }

    startButton.textContent = "Play again";
    renderReadouts();

    if (frameId !== 0) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
  };

  const loseLife = () => {
    lives -= 1;
    root.classList.add("is-hit");
    window.setTimeout(() => root.classList.remove("is-hit"), 320);

    if (lives <= 0) {
      stop("lives");
    }
  };

  const spawn = () => {
    const idle = cells.filter((cell) => cell.phase === "idle");

    if (!idle.length) {
      return;
    }

    const pick = idle[Math.floor(Math.random() * idle.length)];
    setPhase(pick, "lit");
  };

  const tick = (now: number) => {
    frameId = window.requestAnimationFrame(tick);

    if (!running) {
      return;
    }

    const delta = Math.min(now - lastFrame, 120);
    lastFrame = now;
    remaining -= delta;
    sinceSpawn += delta;

    // Spawns speed up as the clock runs down, so the last seconds bite.
    const urgency = 1 - Math.max(remaining, 0) / CONFIG.runMs;
    const spawnEvery = CONFIG.spawnMs * (1 - urgency * 0.55);

    if (sinceSpawn >= spawnEvery) {
      sinceSpawn = 0;
      spawn();
    }

    cells.forEach((cell) => {
      if (cell.phase === "idle") {
        return;
      }

      cell.timer -= delta;

      if (cell.timer > 0) {
        return;
      }

      const next = NEXT_PHASE[cell.phase];

      if (next) {
        setPhase(cell, next);
        return;
      }

      setPhase(cell, "idle");
      loseLife();
    });

    renderReadouts();

    if (remaining <= 0) {
      stop("time");
    }
  };

  const start = () => {
    running = true;
    score = 0;
    lives = START_LIVES;
    remaining = CONFIG.runMs;
    sinceSpawn = 0;
    lastFrame = performance.now();
    cells.forEach((cell) => setPhase(cell, "idle"));
    root.dataset.boardState = "playing";
    startButton.textContent = "Restart";
    renderReadouts();
    spawn();

    if (frameId === 0) {
      frameId = window.requestAnimationFrame(tick);
    }
  };

  grid.addEventListener("click", (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest<HTMLButtonElement>(".overlit-board__cell");

    if (!button) {
      return;
    }

    if (!running) {
      start();
      return;
    }

    const cell = cells.find((entry) => entry.button === button);

    if (!cell || cell.phase === "idle") {
      // Hitting a dead cell is a miss, but a cheap one: no life, just noise.
      button.classList.add("is-miss");
      window.setTimeout(() => button.classList.remove("is-miss"), 260);
      return;
    }

    score += PHASE_SCORE[cell.phase];
    button.classList.add("is-cleared");
    window.setTimeout(() => button.classList.remove("is-cleared"), 320);
    setPhase(cell, "idle");
    renderReadouts();
  });

  startButton.addEventListener("click", start);

  // Pause when the tab is hidden so a backgrounded page does not burn a run.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden && running) {
      stop("time");
    }
  });

  applyAttract(cells, total);
  root.dataset.boardState = "idle";
  renderReadouts();
};

/**
 * Reduced motion gets a board that is filled in and labelled rather than one
 * that flashes: same cells, same colours, no timers and no start button.
 */
const setupStaticBoard = (root: HTMLElement) => {
  const grid = root.querySelector<HTMLElement>("[data-board-grid]");

  if (!grid) {
    return;
  }

  const size = Number.parseInt(root.dataset.boardSize ?? "5", 10) || 5;
  const total = size * size;

  applyAttract(buildCells(grid, total), total);
  root.dataset.boardState = "static";
};

export const setupBoardDemo = () => {
  const isReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  document
    .querySelectorAll<HTMLElement>("[data-board-demo]")
    .forEach(isReduced ? setupStaticBoard : setupBoard);
};
