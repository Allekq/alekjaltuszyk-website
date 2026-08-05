/*
 * Copy for the playable choice demo.
 *
 * This is written for this page. It is NOT an excerpt from a book in the
 * catalogue and must never be labelled as one: the shipped books run to dozens
 * of nodes, and quoting a real one here would either spoil it or misrepresent
 * its size. The job of this demo is to let someone feel the shape of the
 * interaction — listen, get asked, answer, land somewhere different — before the
 * app exists to download.
 *
 * Three questions deep, so every run ends after three answers and all eight of
 * its endings are reachable. Those eight are the demo's, not any book's.
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

export const demoLabel = "Sample";
export const demoNote = "Written for this page";
export const demoRootId = "q1";

export const demoChoiceNodes: readonly DemoChoiceNode[] = [
  {
    id: "q1",
    stamp: "00:41",
    line: "Lights out was forty minutes ago. The guard on the east landing has walked the same eleven paces all week, and tonight, for the first time, he has stopped.",
    prompt: "Go now?",
    yes: { label: "Go now", next: "q2a" },
    no: { label: "Wait a night", next: "q2b" },
  },
  {
    id: "q2a",
    stamp: "03:18",
    line: "The landing door gives. Two routes down: the laundry stair, warm and loud and full of people who owe you nothing, or the service shaft, cold and empty and a very long way.",
    prompt: "Take the stair?",
    yes: { label: "Take the stair", next: "q3a" },
    no: { label: "Take the shaft", next: "q3b" },
  },
  {
    id: "q2b",
    stamp: "02:55",
    line: "You lie still and let it pass. In the morning your cellmate is gone, his bunk stripped, and nobody will say to where. By evening a note is under your mattress in handwriting you know.",
    prompt: "Read it?",
    yes: { label: "Read it", next: "q3c" },
    no: { label: "Burn it", next: "q3d" },
  },
  {
    id: "q3a",
    stamp: "07:02",
    line: "The laundry is running. Steam, noise, and a man at the far door who sees you, and keeps folding, and does not look up again.",
    prompt: "Walk past him?",
    yes: { label: "Walk past him", next: "e1" },
    no: { label: "Ask what he wants", next: "e2" },
  },
  {
    id: "q3b",
    stamp: "07:40",
    line: "Four floors down the shaft, your torch finds a grille that was welded shut a long time ago — and, an arm's length beyond it, a draught that should not exist.",
    prompt: "Force the grille?",
    yes: { label: "Force it", next: "e3" },
    no: { label: "Climb back", next: "e4" },
  },
  {
    id: "q3c",
    stamp: "06:12",
    line: "Six words, a time, and a gate number. It is either the best thing anyone has ever done for you or the last mistake you will be allowed to make.",
    prompt: "Trust it?",
    yes: { label: "Trust it", next: "e5" },
    no: { label: "Hand it in", next: "e6" },
  },
  {
    id: "q3d",
    stamp: "06:48",
    line: "You burn it unread and sleep badly. Three days later the gate he meant comes up in conversation, casually, from a guard who has never once spoken to you.",
    prompt: "Answer him?",
    yes: { label: "Answer him", next: "e7" },
    no: { label: "Say nothing", next: "e8" },
  },
];

export const demoEndingNodes: readonly DemoEndingNode[] = [
  {
    id: "e1",
    kind: "win",
    emote: "☀",
    title: "Out through the noise",
    line: "You walk past him and out through the delivery bay, and by the time the steam clears there is nobody to describe. He never did look up.",
  },
  {
    id: "e2",
    kind: "neutral",
    emote: "◐",
    title: "A name for a name",
    line: "He wants one thing, and it is not money. You give it to him. You get out. Someone else does not, and you will carry that.",
  },
  {
    id: "e3",
    kind: "death",
    emote: "✕",
    title: "The draught",
    line: "The grille comes away easier than it should have. So does the floor behind it. The last thing you hear is your torch, falling for a long time.",
  },
  {
    id: "e4",
    kind: "neutral",
    emote: "◐",
    title: "Back in the bunk",
    line: "You climb back up and are in your bed before the count. Nothing happened. Nothing will. That is the whole of it.",
  },
  {
    id: "e5",
    kind: "win",
    emote: "☀",
    title: "Six words",
    line: "The gate is open at the time he said, held by a man who does not meet your eye. You never find out what it cost him.",
  },
  {
    id: "e6",
    kind: "death",
    emote: "✕",
    title: "Handed in",
    line: "They thank you for the note. They move you somewhere quieter for your own protection. It is very quiet indeed.",
  },
  {
    id: "e7",
    kind: "win",
    emote: "☀",
    title: "The long way out",
    line: "You answer, carefully, and keep answering for two months. When you finally walk out it is through the front, with paperwork, and it is somehow better.",
  },
  {
    id: "e8",
    kind: "neutral",
    emote: "◐",
    title: "Nothing said",
    line: "You say nothing, and the gate closes, and the guard stops speaking to you. Years later you will still be deciding whether that was wisdom.",
  },
];

export const demoEndingKindLabels: Record<DemoEndingKind, string> = {
  win: "Win ending",
  death: "Death ending",
  neutral: "Neutral ending",
};
