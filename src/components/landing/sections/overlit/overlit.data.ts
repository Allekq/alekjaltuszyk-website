/*
 * OverLit page data.
 *
 * Gameplay facts track the OverLit app repo's ArcadeFamilyCatalogV1,
 * CampaignAreaCatalogV2, DailyChallengeDefinitionV1 and
 * ApplicationDailyRewardCopyV1. Keep copy broad: daily slot counts, campaign
 * length and reward thresholds can change without changing the product shape.
 */

export type CellPhase = "idle" | "lit" | "warning" | "critical";

export interface PressureStep {
  body: string;
  label: string;
  phase: CellPhase | "gone";
}

export const pressureSteps: readonly PressureStep[] = [
  { phase: "idle", label: "Idle", body: "Dark cells can wait." },
  { phase: "lit", label: "Fresh", body: "A cell lights up. Tap to clear it." },
  { phase: "warning", label: "Warning", body: "Amber means time is running out." },
  { phase: "critical", label: "Critical", body: "Red means act now." },
  { phase: "gone", label: "Burnout", body: "Too late. The level decides the cost." },
];

export interface LevelTwist {
  detail: string;
  name: string;
}

export const levelTwists: readonly LevelTwist[] = [
  { name: "Goals and deadlines", detail: "Hit a score, survive the clock, or finish without a miss." },
  { name: "Patterns that move", detail: "Read lines, diagonals, Shape Shifter formations and the Ember Snake." },
  { name: "Mixed pressure", detail: "Random cells and patterns arrive together as the difficulty builds." },
  { name: "Stars and bosses", detail: "Aim beyond a clear with star targets and boss milestones." },
];

export interface ArcadeMode {
  description: string;
  id: string;
  name: string;
  rulesets: readonly string[];
}

export const arcadeModes: readonly ArcadeMode[] = [
  {
    id: "classic",
    name: "Classic",
    description: "A mix of pressure styles keeps you adapting as the run builds.",
    rulesets: ["Survival", "Time Attack"],
  },
  {
    id: "random",
    name: "Random",
    description: "Unpredictable cells appear across the grid. React before they burn out.",
    rulesets: ["Survival", "Time Attack"],
  },
  {
    id: "pattern",
    name: "Pattern",
    description: "Read lines and shapes, then find your route through them.",
    rulesets: ["Survival", "Time Attack"],
  },
  {
    id: "snake",
    name: "Snake",
    description: "Follow a moving pressure trail across the grid.",
    rulesets: ["Survival", "Time Attack"],
  },
];

export const gridSizes = ["4 × 4", "5 × 5", "6 × 6"] as const;

export const heroBadges = [
  "No sign-in",
  "Plays offline",
  "Short sessions",
  "Free with ads",
] as const;
