#!/usr/bin/env node
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// CV-aimed Roam timeline variant.
// Keep this block aligned with the public portfolio version of the Roam entry.

const rootDir = path.dirname(fileURLToPath(import.meta.url));
const targetPath = path.join(
  rootDir,
  "src/components/landing/sections/home-profile-content.ts",
);
const startMarker = "  // ROAM_TIMELINE_ENTRY_START";
const endMarker = "  // ROAM_TIMELINE_ENTRY_END";

const roamTimelineEntry = `  // ROAM_TIMELINE_ENTRY_START
  {
    id: "roam-ai",
    label: "Roam AI",
    period: "2025-2026",
    title: "Roam AI text-to-game startup",
    role: "Core gameplay and AI systems contractor",
    summary:
      "I joined Roam as a core contractor on a small team building a text-to-game experience at the level where gameplay engineering and AI systems start overlapping.",
    highlights: [
      "Built player mechanics, enemy AI, networking, physics interactions, and world-building systems with the team.",
      "Selected for two company-supported San Francisco stays, spending four months there for direct in-person collaboration with the core team.",
      "Worked closely with teammates across gameplay development, internal tooling, product context, and urgent AI-driven problem solving.",
    ],
  },
  // ROAM_TIMELINE_ENTRY_END`;

const source = await readFile(targetPath, "utf8");
const start = source.indexOf(startMarker);
const end = source.indexOf(endMarker, start);

if (start === -1 || end === -1) {
  throw new Error(`Could not find Roam timeline markers in ${targetPath}`);
}

const replaceEnd = end + endMarker.length;
const nextSource =
  source.slice(0, start) + roamTimelineEntry + source.slice(replaceEnd);

if (nextSource === source) {
  console.log("Roam timeline CV variant is already applied.");
} else {
  await writeFile(targetPath, nextSource);
  console.log("Applied Roam timeline CV variant.");
}
