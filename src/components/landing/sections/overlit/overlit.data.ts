/*
 * OverLit page data.
 *
 * Gameplay facts here track the app repo (`Docs/overlit-app-plan.md`, AGENTS.md)
 * and the shipped screenshots: levels are the campaign, arcade families are
 * unlockable free-play spaces, rulesets are Survival and Time Attack where they
 * fit, grids are 4x4 / 5x5 / 6x6, and a cell runs fresh → warning → critical →
 * burnout. Keep them in step if the app's structure changes.
 *
 * The four families below are the ones the shipped hub actually offers —
 * Classic, Random, Pattern, Snake — alongside Levels and the Daily Challenge.
 * They are not the whole story, which is why the section counts them as "many"
 * rather than naming a number that goes stale on the next release.
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
    label: "Fresh",
    title: "It ignites. Now it is yours.",
    body: "This is the cheap window. Clear it here and you barely feel the cost — but there is always another one lighting somewhere else.",
  },
  {
    at: 0.5,
    phase: "warning",
    label: "Warning",
    title: "It starts to heat.",
    body: "The board is telling you which decision matters next, in the only language it has at speed: colour.",
  },
  {
    at: 0.72,
    phase: "critical",
    label: "Critical",
    title: "Critical. The one you will misread.",
    body: "The engine caps how many cells can be live at once, and later levels lift the cap. Reading which of them to save is the whole game.",
  },
  {
    at: 0.9,
    phase: "gone",
    label: "Burnout",
    title: "Let it go and the board answers.",
    body: "Red to black, fast and loud, because you should see the failure happen rather than find a cell quietly gone. What that costs is the level's decision — the end of the run, or a hole in a no-miss streak.",
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
  { name: "Line and diagonal waves", detail: "Whole rows, columns and diagonals arrive together." },
  { name: "Shape Shifter", detail: "Weighted procedural formations that have to be read, not reacted to." },
  { name: "Ember Snake", detail: "A short-fuse crawler that works a path through the grid while you play." },
  { name: "Mixed pressure", detail: "Random cells combined with a readable pattern, disagreeing with each other." },
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
    id: "classic",
    name: "Classic",
    description: "Every pressure style in one endless run, so the board never settles into a single tempo.",
    rulesets: ["Survival", "Time Attack"],
    cellOrder: [0, 3, 1, 4, 3, 0, 4, 1, 1, 4, 0, 3, 4, 1, 3, 0],
  },
  {
    id: "random",
    name: "Random",
    description: "Scatter. Cells arrive wherever they like, and the only structure is the one you impose.",
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
];

/*
 * The pressure styles the families and levels are assembled from — each one is
 * a real activation strategy, grid mutation or run system in the app, not a
 * marketing adjective. The list is deliberately not exhaustive: the section
 * ends on "and more" so shipping another one costs no copy edit.
 */
export const pressureStyles = [
  "Random scatter",
  "Static patterns",
  "Full lines",
  "Short lines",
  "Diagonals",
  "Shape Shifter",
  "Ember Snake",
  "Mirror pairs",
  "Echo trails",
  "Mixed pressure",
  "Pressure clock",
  "Deadlines",
  "No-miss runs",
  "Daily Challenge",
] as const;

export const gridSizes = ["4 × 4", "5 × 5", "6 × 6"] as const;

export const heroBadges = [
  "No sign-in",
  "Plays offline",
  "Short sessions",
  "Free with ads",
] as const;
