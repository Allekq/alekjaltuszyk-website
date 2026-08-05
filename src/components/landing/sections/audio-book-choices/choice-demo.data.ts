/*
 * Copy for the playable choice demo.
 *
 * This is a purpose-written sample, not an excerpt from a shipping book — the
 * point is to let someone feel the shape of the interaction (listen, get asked,
 * answer, land somewhere different) before the app exists to download.
 *
 * Three questions deep, so every run ends after three answers and every one of
 * the eight endings is reachable.
 */

export type DemoEndingKind = "win" | "death" | "neutral";

export interface DemoChoiceNode {
  id: string;
  /** Timecode shown on the fake transport, purely for texture. */
  stamp: string;
  line: string;
  prompt: string;
  yes: { label: string; next: string };
  no: { label: string; next: string };
}

export interface DemoEndingNode {
  emote: string;
  id: string;
  kind: DemoEndingKind;
  line: string;
  title: string;
}

export const demoBookTitle = "The Cave";
export const demoBookNote = "Sample story";
export const demoRootId = "q1";

export const demoChoiceNodes: readonly DemoChoiceNode[] = [
  {
    id: "q1",
    stamp: "00:41",
    line: "The torch gutters at the cave mouth. Behind you the forest has gone quiet in the way forests do when something is listening.",
    prompt: "Go in?",
    yes: { label: "Go in", next: "q2a" },
    no: { label: "Stay out", next: "q2b" },
  },
  {
    id: "q2a",
    stamp: "03:18",
    line: "Twenty paces in, the passage splits. One way breathes warm air. The other drips, steadily, from somewhere far below.",
    prompt: "Follow the warm air?",
    yes: { label: "Follow the warmth", next: "q3a" },
    no: { label: "Follow the water", next: "q3b" },
  },
  {
    id: "q2b",
    stamp: "02:55",
    line: "You back away. Halfway to the treeline you notice a second set of footprints in the mud, going in. They are small, and recent.",
    prompt: "Call out?",
    yes: { label: "Call out", next: "q3c" },
    no: { label: "Keep quiet", next: "q3d" },
  },
  {
    id: "q3a",
    stamp: "07:02",
    line: "The warm passage opens into a chamber lit from above — a crack in the rock, and daylight falling on something that was left here on purpose.",
    prompt: "Take it?",
    yes: { label: "Take it", next: "e1" },
    no: { label: "Leave it", next: "e2" },
  },
  {
    id: "q3b",
    stamp: "07:40",
    line: "The dripping leads to a ledge above black water. Something down there moves with the patience of a thing that has waited a long time.",
    prompt: "Climb down?",
    yes: { label: "Climb down", next: "e3" },
    no: { label: "Turn back", next: "e4" },
  },
  {
    id: "q3c",
    stamp: "06:12",
    line: "Your voice comes back to you three times, then a fourth that is not yours. It answers from inside the hill.",
    prompt: "Go after it?",
    yes: { label: "Go after it", next: "e5" },
    no: { label: "Run", next: "e6" },
  },
  {
    id: "q3d",
    stamp: "06:48",
    line: "You follow the small prints at a distance until they stop at a rockfall. There is a gap. There is also a way around, the long way, in the dark.",
    prompt: "Take the gap?",
    yes: { label: "Take the gap", next: "e7" },
    no: { label: "Take the long way", next: "e8" },
  },
];

export const demoEndingNodes: readonly DemoEndingNode[] = [
  {
    id: "e1",
    kind: "win",
    emote: "☀",
    title: "Daybreak",
    line: "You climb out through the crack with it under your coat. The forest is loud again, and it is morning, and nothing follows you home.",
  },
  {
    id: "e2",
    kind: "neutral",
    emote: "◐",
    title: "Even trade",
    line: "You leave it where it lies and walk back out the way you came. Years later you will still be deciding whether that was wisdom.",
  },
  {
    id: "e3",
    kind: "death",
    emote: "✕",
    title: "Cold water",
    line: "The ledge is wetter than it looked. The last thing you hear is your own torch hissing out somewhere above you.",
  },
  {
    id: "e4",
    kind: "neutral",
    emote: "◐",
    title: "Still there",
    line: "You turn back. The dripping follows you all the way to the entrance, and then, exactly at the threshold, stops.",
  },
  {
    id: "e5",
    kind: "win",
    emote: "☀",
    title: "Carried out",
    line: "You find the child four hundred metres in, cold and furious and alive. You carry her out. She does the talking.",
  },
  {
    id: "e6",
    kind: "death",
    emote: "✕",
    title: "The drop",
    line: "You run in the dark, which is a thing the hill has been counting on for a very long time.",
  },
  {
    id: "e7",
    kind: "neutral",
    emote: "◐",
    title: "Walked away",
    line: "The gap holds. Just. You come out on the far side into a different valley entirely, and you never do find the prints again.",
  },
  {
    id: "e8",
    kind: "win",
    emote: "☀",
    title: "Long way round",
    line: "The long way takes until dawn. It also takes you past the second entrance, the open one, and the two of you walk out together.",
  },
];

export const demoEndingKindLabels: Record<DemoEndingKind, string> = {
  win: "Win ending",
  death: "Death ending",
  neutral: "Neutral ending",
};
