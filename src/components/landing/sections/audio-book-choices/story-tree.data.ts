/*
 * Geometry for the branching-story visuals.
 *
 * The app draws a book as a left-to-right binary tree that unveils as you
 * explore it, so the site draws the same shape. Layout is generated rather than
 * hand-placed: leaves sit on an even vertical grid, every parent sits at the
 * midpoint of its two children, and edges are cubic curves between columns.
 *
 * Each edge also carries its own scroll window (`at` .. `at + span`) plus the
 * reciprocal of that span, so the stylesheet can turn `--scene-progress` into a
 * per-edge 0..1 with multiplication only — no division inside `calc()`.
 */

export type BranchAnswer = "root" | "yes" | "no";
export type EndingKind = "win" | "death" | "neutral";

export interface StoryTreeNode {
  answer: BranchAnswer;
  at: number;
  depth: number;
  id: string;
  scale: number;
  x: number;
  y: number;
}

export interface StoryTreeEdge {
  answer: Exclude<BranchAnswer, "root">;
  at: number;
  d: string;
  depth: number;
  from: string;
  id: string;
  length: number;
  scale: number;
  to: string;
}

export interface StoryTreeEnding {
  at: number;
  emote: string;
  id: string;
  kind: EndingKind;
  label: string;
  scale: number;
  x: number;
  y: number;
}

export interface StoryTree {
  edges: StoryTreeEdge[];
  endings: StoryTreeEnding[];
  height: number;
  nodes: StoryTreeNode[];
  width: number;
}

type TreeRow = { answer: BranchAnswer; id: string; y: number }[];

interface TreeOptions {
  /** Number of choice levels. `depth` levels produce `2 ** depth` leaves. */
  depth: number;
  height: number;
  /** Fraction of the scene spent before the first edge starts drawing. */
  lead?: number;
  paddingX?: number;
  paddingY?: number;
  width: number;
}

/** Approximate arc length of the cubic used for a branch, good enough for dashing. */
const curveLength = (x1: number, y1: number, x2: number, y2: number) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  // The curve bulges horizontally, so it always runs a little longer than the
  // straight line between its ends.
  return Math.hypot(dx, dy) + Math.abs(dy) * 0.16;
};

const branchPath = (x1: number, y1: number, x2: number, y2: number) => {
  const bend = (x2 - x1) * 0.52;
  return `M${x1} ${y1} C${(x1 + bend).toFixed(1)} ${y1} ${(x2 - bend).toFixed(1)} ${y2} ${x2} ${y2}`;
};

const round = (value: number) => Number(value.toFixed(2));

export const buildStoryTree = ({
  depth,
  height,
  lead = 0.04,
  paddingX = 26,
  paddingY = 26,
  width,
}: TreeOptions): StoryTree => {
  const columns = depth + 1;
  const columnGap = (width - paddingX * 2) / Math.max(columns - 1, 1);
  const leafCount = 2 ** depth;
  const rowGap = (height - paddingY * 2) / Math.max(leafCount - 1, 1);

  // Level windows: every generation of branches gets an equal slice of the scene,
  // with the endings popping inside the final slice.
  const levelSpan = (1 - lead) / (depth + 1);

  const nodes: StoryTreeNode[] = [];
  const edges: StoryTreeEdge[] = [];
  const positions = new Map<string, { x: number; y: number }>();

  // Leaves first, then fold upward so each parent lands between its two children.
  let level: TreeRow = Array.from({ length: leafCount }, (_, index) => ({
    id: `d${depth}-${index}`,
    answer: index % 2 === 0 ? "yes" : "no",
    y: paddingY + index * rowGap,
  }));

  const levels: TreeRow[] = [level];

  for (let currentDepth = depth - 1; currentDepth >= 0; currentDepth -= 1) {
    const parents: TreeRow = [];

    for (let index = 0; index < level.length; index += 2) {
      const first = level[index];
      const second = level[index + 1] ?? first;
      const parentIndex = index / 2;

      parents.push({
        id: `d${currentDepth}-${parentIndex}`,
        answer: currentDepth === 0 ? "root" : parentIndex % 2 === 0 ? "yes" : "no",
        y: (first.y + second.y) / 2,
      });
    }

    level = parents;
    levels.unshift(parents);
  }

  levels.forEach((row, rowDepth) => {
    const x = paddingX + rowDepth * columnGap;
    // The root is already there when the scene starts — a negative window means
    // it reads as fully popped at progress 0 rather than fading in from nothing.
    const at = rowDepth === 0 ? -0.5 : lead + (rowDepth - 1) * levelSpan + levelSpan * 0.62;

    row.forEach((entry) => {
      positions.set(entry.id, { x, y: entry.y });
      nodes.push({
        answer: entry.answer,
        at: round(Math.min(at, 0.96)),
        depth: rowDepth,
        id: entry.id,
        scale: round(1 / Math.max(levelSpan * 0.5, 0.02)),
        x: round(x),
        y: round(entry.y),
      });
    });
  });

  levels.slice(0, -1).forEach((row, rowDepth) => {
    const at = lead + rowDepth * levelSpan;
    const span = levelSpan * 1.05;

    row.forEach((parent, parentIndex) => {
      const children = levels[rowDepth + 1].slice(parentIndex * 2, parentIndex * 2 + 2);
      const from = positions.get(parent.id);

      if (!from) {
        return;
      }

      children.forEach((child, childIndex) => {
        const to = positions.get(child.id);

        if (!to) {
          return;
        }

        edges.push({
          answer: childIndex === 0 ? "yes" : "no",
          at: round(at),
          d: branchPath(round(from.x), round(from.y), round(to.x), round(to.y)),
          depth: rowDepth,
          from: parent.id,
          id: `${parent.id}->${child.id}`,
          length: Math.ceil(curveLength(from.x, from.y, to.x, to.y)) + 2,
          scale: round(1 / span),
          to: child.id,
        });
      });
    });
  });

  // Endings sit on the final column. The app's three ending kinds are mixed so
  // no branch direction reads as "the safe one".
  const endingPlan: { kind: EndingKind; emote: string; label: string }[] = [
    { kind: "win", emote: "☀", label: "Daybreak" },
    { kind: "neutral", emote: "◐", label: "Even trade" },
    { kind: "death", emote: "✕", label: "The drop" },
    { kind: "win", emote: "☀", label: "Carried out" },
    { kind: "neutral", emote: "◐", label: "Still there" },
    { kind: "death", emote: "✕", label: "Cold water" },
    { kind: "win", emote: "☀", label: "Long way round" },
    { kind: "neutral", emote: "◐", label: "Walked away" },
  ];

  const leafNodes = nodes.filter((node) => node.depth === depth);
  const endings: StoryTreeEnding[] = leafNodes.map((node, index) => {
    const plan = endingPlan[index % endingPlan.length];

    return {
      at: round(Math.min(lead + depth * levelSpan + index * 0.012, 0.97)),
      emote: plan.emote,
      id: `end-${node.id}`,
      kind: plan.kind,
      label: plan.label,
      scale: round(1 / Math.max(levelSpan * 0.7, 0.02)),
      x: node.x,
      y: node.y,
    };
  });

  return { edges, endings, height, nodes, width };
};

/**
 * Ids of the edges walked by one root-to-leaf answer run, e.g.
 * `["yes", "no", "yes"]`. Used to light a single "your path" line through a tree.
 */
export const getBranchEdgeIds = (answers: readonly ("yes" | "no")[]) => {
  const ids: string[] = [];
  let index = 0;

  answers.forEach((answer, depth) => {
    const childIndex = index * 2 + (answer === "yes" ? 0 : 1);

    ids.push(`d${depth}-${index}->d${depth + 1}-${childIndex}`);
    index = childIndex;
  });

  return ids;
};

/**
 * Joins the given edges into one continuous path string. Consecutive edges share
 * an endpoint, so dropping every `M` after the first leaves a single stroke that
 * `offset-path` can move a marker along.
 */
export const joinEdgePath = (tree: StoryTree, edgeIds: readonly string[]) => {
  const byId = new Map(tree.edges.map((edge) => [edge.id, edge]));

  return edgeIds
    .map((id, index) => {
      const edge = byId.get(id);

      if (!edge) {
        return "";
      }

      return index === 0 ? edge.d : edge.d.replace(/^M[^C]*/, "");
    })
    .filter(Boolean)
    .join(" ")
    .trim();
};

/** Compact tree used behind the hero copy. */
export const heroStoryTree = buildStoryTree({
  depth: 3,
  height: 430,
  lead: 0.06,
  paddingX: 34,
  paddingY: 30,
  width: 520,
});

/** The full-size tree that draws itself across the pinned scroll scene. */
export const showcaseStoryTree = buildStoryTree({
  depth: 3,
  height: 520,
  lead: 0.05,
  paddingX: 44,
  paddingY: 44,
  width: 840,
});

/** The single run traced through the hero tree. */
export const heroBranchAnswers = ["yes", "no", "yes"] as const;
export const heroBranchEdgeIds = getBranchEdgeIds(heroBranchAnswers);
export const heroBranchPathD = joinEdgePath(heroStoryTree, heroBranchEdgeIds);
