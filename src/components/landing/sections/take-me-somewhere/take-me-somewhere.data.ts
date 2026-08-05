/*
 * Take Me Somewhere page data.
 *
 * The product facts here follow the app repo's own concept notes: a time budget
 * plus a vibe produces a nearby walking route, guidance runs as either Compass
 * Mode or Route Mode, the destination can stay hidden until you arrive or ask,
 * and route geometry and ETA come from real map and routing data rather than
 * being invented.
 *
 * The distances below are illustrative reach figures at an unhurried walking
 * pace, not promises — the app's real numbers come from the routing engine.
 */

export interface TimeBudget {
  /** Rough one-way reach on foot, shown as a feel rather than a guarantee. */
  reach: string;
  id: string;
  label: string;
  minutes: number;
  /** 0..1, drives how far the reach ring opens in the preview. */
  spread: number;
}

export const timeBudgets: readonly TimeBudget[] = [
  { id: "t15", label: "15 min", minutes: 15, reach: "about 1 km out", spread: 0.34 },
  { id: "t30", label: "30 min", minutes: 30, reach: "about 2 km out", spread: 0.56 },
  { id: "t45", label: "45 min", minutes: 45, reach: "about 3 km out", spread: 0.78 },
  { id: "t60", label: "60 min", minutes: 60, reach: "about 4 km out", spread: 1 },
];

export interface Vibe {
  /** Short line the preview card shows when this vibe is picked. */
  blurb: string;
  hue: string;
  id: string;
  label: string;
  /** What the hidden destination is teased as. */
  teaser: string;
}

export const vibes: readonly Vibe[] = [
  {
    id: "cafe",
    label: "Cafe",
    hue: "sun",
    teaser: "Somewhere with a counter",
    blurb: "A walk with a reason to sit down at the end of it.",
  },
  {
    id: "green",
    label: "Green",
    hue: "sage",
    teaser: "Somewhere with trees",
    blurb: "Routed toward parks, gardens, and the quieter side of the map.",
  },
  {
    id: "quiet",
    label: "Quiet",
    hue: "sage",
    teaser: "Somewhere without traffic",
    blurb: "Fewer main roads. The version of the neighbourhood you can hear.",
  },
  {
    id: "scenic",
    label: "Scenic",
    hue: "sky",
    teaser: "Somewhere worth looking at",
    blurb: "The long way, on purpose, because the long way is the point.",
  },
  {
    id: "new",
    label: "New streets",
    hue: "sky",
    teaser: "Somewhere you have not been",
    blurb: "Pushed away from your usual lines, into the blank bits.",
  },
  {
    id: "surprise",
    label: "Surprise me",
    hue: "sun",
    teaser: "Somewhere. That is the deal.",
    blurb: "No filters, no preview, no idea. Follow the arrow and find out.",
  },
];

export interface RouteBeat {
  at: number;
  body: string;
  kicker: string;
  title: string;
}

export const routeBeats: readonly RouteBeat[] = [
  {
    at: 0.02,
    kicker: "You are here",
    title: "It starts wherever you are standing.",
    body: "No destination search, no address to type. The only input it needs is how long you have and roughly what you are in the mood for.",
  },
  {
    at: 0.28,
    kicker: "First turn",
    title: "The route is real, even when it is hidden.",
    body: "Geometry, distance and ETA come from actual map and routing data. Compass Mode hides the destination from you, not from the app.",
  },
  {
    at: 0.55,
    kicker: "Off course",
    title: "Wander and it quietly re-plans.",
    body: "Drift a little and nothing happens. Drift properly and it finds a better line without making a fuss about it.",
  },
  {
    at: 0.82,
    kicker: "Arrival",
    title: "Then it tells you where you have been walking to.",
    body: "The reveal lands when you are close, or the moment you ask for it. Some outings are better ruined early.",
  },
];

export interface GuidanceMode {
  bullets: readonly string[];
  description: string;
  id: "compass" | "route";
  name: string;
  tagline: string;
}

export const guidanceModes: readonly GuidanceMode[] = [
  {
    id: "compass",
    name: "Compass Mode",
    tagline: "Direction only",
    description:
      "An arrow, a sense of distance, and the occasional nudge. It points along the route rather than straight through buildings, and it smooths turns so the needle does not flicker.",
    bullets: [
      "Destination hidden or softened",
      "Points along the route, not the crow-flies bearing",
      "Simple hints: keep heading this way, you are close",
      "Reveal the place whenever you want it",
    ],
  },
  {
    id: "route",
    name: "Route Mode",
    tagline: "The whole picture",
    description:
      "The map, the line, the stops, the estimate. For when you want confidence rather than mystery, or you need to know whether you will be back in time.",
    bullets: [
      "Destination and any stops shown",
      "Route line and live progress",
      "Time estimate you can plan around",
      "Recalculates if you drift too far",
    ],
  },
];

export const groundTruth = [
  {
    title: "Real routing, not invented directions",
    body: "Route geometry, distance and ETA come from map and routing data. The app is opinionated about where to send you, not about how far it is.",
  },
  {
    title: "Walking first",
    body: "The first version is built for going outside on foot. Riding and driving are planned as later travel modes, using the same route model.",
  },
  {
    title: "Your location, for the thing you asked for",
    body: "Current location is used to work out where you can get to and to guide you there. Route history, if it ever arrives, is designed to be optional and local.",
  },
] as const;

export const heroChips = ["Live on the App Store", "iPhone", "Walking-first", "No account"] as const;
