/*
 * OverLit page data.
 *
 * Gameplay facts here track the app repo's own description of the game: levels
 * are the campaign, arcade families (Random, Pattern, Snake, Mixed) are
 * unlockable free-play spaces, rulesets are Survival and Time Attack, and grids
 * are 4x4 / 5x5 / 6x6. Keep them in step if the app's structure changes.
 */

export type CellPhase = "idle" | "lit" | "warning" | "critical";

export interface PressureStep {
  at: number;
  body: string;
  label: string;
  phase: CellPhase | "gone";
  title: string;
}

export const pressureSteps: readonly PressureStep[] = [
  {
    at: 0.02,
    phase: "idle",
    label: "Idle",
    title: "A cell sits dark.",
    body: "Nothing to do. Most of the board looks like this at the start of a level, and almost none of it does by the end.",
  },
  {
    at: 0.26,
    phase: "lit",
    label: "Lit",
    title: "It lights up. Now it is yours.",
    body: "This is the cheap window. Clear it here and you barely feel the cost — but there is always another one lighting somewhere else.",
  },
  {
    at: 0.5,
    phase: "warning",
    label: "Warning",
    title: "It starts to heat.",
    body: "Worth more, and worth more attention. The board is telling you which decision matters next, in the only language it has: colour.",
  },
  {
    at: 0.72,
    phase: "critical",
    label: "Critical",
    title: "Critical. Best points, worst timing.",
    body: "Always three or four of these at once, always on opposite corners. Reading which one to save is the whole game.",
  },
  {
    at: 0.9,
    phase: "gone",
    label: "Collapse",
    title: "Miss it and the board takes something.",
    body: "Not a scolding, just less room. Enough of those and the run is over — which is why you were never really playing for points.",
  },
];

export interface LevelTwist {
  detail: string;
  name: string;
}

export const levelTwists: readonly LevelTwist[] = [
  { name: "Score goals", detail: "Reach a number before the level lets go." },
  { name: "Survival goals", detail: "Just stay alive. The board decides how long that takes." },
  { name: "Deadlines", detail: "A clock that does not care how good the last run was." },
  { name: "No-miss pressure", detail: "One slip ends it. Levels that teach restraint." },
  { name: "Line patterns", detail: "Whole rows and columns arrive together." },
  { name: "Shape patterns", detail: "Formations that have to be read, not reacted to." },
  { name: "Snake behaviour", detail: "A crawler that moves through the grid while you work." },
  { name: "Mixed activation", detail: "Two spawn rules at once, disagreeing with each other." },
  { name: "Star targets", detail: "Three tiers per level, so clearing is never the ceiling." },
  { name: "Boss milestones", detail: "Set pieces that combine everything the run has taught you." },
];

export interface ArcadeMode {
  /** Cell activation order for the looping mini board, 0-based on a 4x4 grid. */
  cellOrder: readonly number[];
  description: string;
  id: string;
  name: string;
  rulesets: readonly string[];
}

/*
 * Each mini board is a 4x4 grid whose cells pulse in `cellOrder` position order.
 * Cells sharing an order value light together, which is how "Pattern" reads as
 * whole lines and "Snake" reads as a single travelling head.
 */
export const arcadeModes: readonly ArcadeMode[] = [
  {
    id: "random",
    name: "Random",
    description: "The plain one. Cells arrive wherever they like, and the only structure is the one you impose.",
    rulesets: ["Survival", "Time Attack"],
    cellOrder: [5, 0, 9, 3, 12, 7, 1, 14, 2, 11, 6, 15, 8, 4, 13, 10],
  },
  {
    id: "pattern",
    name: "Pattern",
    description: "Lines and shapes light as a unit. Clearing turns into route-planning rather than pure reaction.",
    rulesets: ["Survival", "Time Attack"],
    cellOrder: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3],
  },
  {
    id: "snake",
    name: "Snake",
    description: "A crawler works its way across the grid. You are chasing a moving problem instead of a scattered one.",
    rulesets: ["Survival", "Time Attack"],
    cellOrder: [0, 1, 2, 3, 7, 6, 5, 4, 8, 9, 10, 11, 15, 14, 13, 12],
  },
  {
    id: "mixed",
    name: "Mixed",
    description: "Two activation styles running at once. The board stops having a single tempo to lock onto.",
    rulesets: ["Survival", "Time Attack"],
    cellOrder: [0, 3, 1, 4, 3, 0, 4, 1, 1, 4, 0, 3, 4, 1, 3, 0],
  },
];

export const gridSizes = ["4 × 4", "5 × 5", "6 × 6"] as const;

export const heroBadges = [
  "No account",
  "Plays offline",
  "Local high scores",
  "Short sessions",
] as const;
