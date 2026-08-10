import {
  appCount,
  appNameList,
  appCountWord,
  capitalizeFirst,
  platformAppNoun,
  platformNameList,
  releaseStatusSentence,
} from "../../../lib/appState";

export interface HomeSkill {
  id: string;
  offset: string;
  title: string;
  strap: string;
  summary: string;
  highlights: readonly string[];
  related: readonly HomeSkillRelatedLink[];
}

export interface HomeSkillRelatedLink {
  label: string;
  historyId: string;
}

export interface HomeTimelineEntry {
  id: string;
  label: string;
  period: string;
  title: string;
  role: string;
  summary: string;
  highlights: readonly HomeTimelineHighlight[];
}

export type HomeTimelineHighlight = string | HomeTimelineProjectHighlight;

export interface HomeTimelineProjectHighlight {
  title: string;
  description: string;
  details: readonly string[];
}

export interface HomeMilestone {
  id: string;
  value: string;
  label: string;
  detail: string;
  /** History panel this milestone came from, so the card can jump to it. */
  historyId?: string;
}

/**
 * Whether the site talks about the company-funded stays in the United States.
 *
 * This is the single switch. Flip it and both the Roam AI timeline entry and
 * the milestone row change together — there is nothing else to edit and no
 * script to run.
 *
 *   "omitted"  the site says nothing about travel at all, and the Roam entry
 *              stands on the engineering work. This is the default.
 *   "named"    the stays are described the way a CV would describe them.
 *
 * Default is "omitted" on purpose: the trips were company-funded personal
 * travel rather than work performed abroad, and a public page is a bad place
 * to have to make that distinction.
 */
export type TravelMention = "omitted" | "named";
export const travelMention: TravelMention = "omitted";

const namesTravel = (travelMention as TravelMention) === "named";

/**
 * The CV in four numbers, for the top of the homepage.
 *
 * Every one of these is a restatement of something already in `homeTimeline` or
 * `homeSkills` below — nothing new is claimed here. The app count is derived so
 * it cannot drift from `appDirectory`.
 */
export const homeMilestones = [
  {
    id: "apps",
    value: capitalizeFirst(appCountWord),
    label: `${platformAppNoun} built and shipped`,
    detail: releaseStatusSentence,
    historyId: "current-products",
  },
  namesTravel
    ? {
        id: "roam",
        value: "4",
        label: "months in San Francisco",
        detail:
          "Two company-supported stays with the Roam AI core team.",
        historyId: "roam-ai",
      }
    : {
        id: "roam",
        value: "2025→26",
        label: "core contractor at Roam AI",
        detail:
          "Player mechanics, enemy AI, networking, physics and world-building on a text-to-game startup.",
        historyId: "roam-ai",
      },
  {
    id: "assets",
    value: "5★",
    label: "Unity assets on the Asset Store",
    detail:
      "Procedural placement systems and VR-oriented frameworks, used by thousands of developers.",
    historyId: "alek-games",
  },
  {
    id: "boulder",
    value: "7c",
    label: "max boulder grade",
    detail: "Two regional wins, plus a one-arm pull-up and a front lever.",
  },
] satisfies readonly HomeMilestone[];

/**
 * The stack, said plainly. `siteConfig.focusAreas` is the canonical list for
 * metadata; this is the same story in the order a reader wants it, with the two
 * mobile toolchains the shipped apps are actually written in.
 */
export const homeStack = [
  "Swift & SwiftUI",
  "Unity",
  "C#",
  "Kotlin Multiplatform",
  "Python",
  "AI product systems",
] as const;

export const homeSkills = [
  {
    id: "unity",
    offset: "2.2rem",
    title: "Unity Programmer",
    strap: "Gameplay, tools, physics, and systems built to ship.",
    summary:
      "Unity is still a major part of my work, from polished developer tools to fast-moving gameplay systems.",
    highlights: [
      "Built highly rated Unity assets used by thousands of developers, including procedural placement systems and VR-oriented frameworks.",
      "Contributed across player mechanics, enemy AI, networking, physics, shaders, and world-building as part of a small text-to-game startup team.",
      "Care deeply about making complex systems feel intuitive, reusable, and pleasant to work with.",
    ],
    related: [
      { label: "Alek Games", historyId: "alek-games" },
      { label: "Roam AI", historyId: "roam-ai" },
    ],
  },
  {
    id: "csharp",
    offset: "5rem",
    title: "C# Systems",
    strap: "Modular architecture with performance and clarity in mind.",
    summary:
      "C# is the language I return to for real production systems: gameplay logic, internal frameworks, and integrations that need to hold up.",
    highlights: [
      "Used C# as the backbone for production Unity tools, interactive systems, and gameplay architecture.",
      "Integrated third-party systems into internal frameworks without breaking performance or workflow.",
      "Prefer structural, modular designs that stay understandable as projects become more ambitious.",
    ],
    related: [
      { label: "Alek Games", historyId: "alek-games" },
      { label: "Roam AI", historyId: "roam-ai" },
    ],
  },
  {
    id: "ai",
    offset: "1.15rem",
    title: "AI Product Systems",
    strap: "Memory, structured outputs, and product behavior that feels reliable.",
    summary:
      "My AI work is strongest when the model output becomes real product state: remembered context, validated structure, and useful behavior inside the app.",
    highlights: [
      "Built Voice of Self around reflection memory: recurring worries, resolved worries, personal growth, and AI outputs that remain useful over time.",
      "Built PlanKept flows where AI-assisted plan creation becomes durable reminders, app rules, quotas, and proof-review state.",
      "Prefer schema-validated outputs, deterministic persistence, and product-specific memory over loose chatbot text.",
    ],
    related: [
      { label: "Current products", historyId: "current-products" },
      { label: "Roam AI", historyId: "roam-ai" },
    ],
  },
  {
    id: "climber",
    offset: "6.4rem",
    title: "Climber",
    strap: "I stay motivated by pushing my body as hard as I push my mind.",
    summary:
      "Climbing is a big part of how I stay sharp outside of software. My max boulder grade is 7c, I like slopers, and I have won two regional competitions alongside many more podium finishes.",
    highlights: [
      "Max boulder grade: 7c.",
      "Preferred climbing style: slopers.",
      "Won two regional competitions and placed on the podium in many others.",
      "Strength achievements include a one-arm pull-up, a front lever, and 42 pull-ups in a row.",
    ],
    related: [],
  },
] as const satisfies readonly HomeSkill[];

export const homeTimeline = [
  {
    id: "alek-games",
    label: "Alek Games",
    period: "2022-2025",
    title: "Unity asset development",
    role: "Unity programmer and tool builder",
    summary:
      "Before the current AI-heavy phase, I spent years building Unity assets and frameworks that reached a large audience of developers.",
    highlights: [
      "Created 5-star Unity assets, including tools for procedural level design and physics-reactive VR NPCs.",
      "Learned how to package advanced systems so they are understandable, documented, and genuinely useful.",
      "Turned the Asset Store from a learning platform into a profitable technical business with strong user feedback.",
    ],
  },
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
      /* The only travel-dependent line on the site. `travelMention` above owns
         it; nothing else in the entry refers to where the work happened. */
      ...(namesTravel
        ? [
            "Selected for two company-supported San Francisco stays, spending four months there with the core team.",
          ]
        : []),
      "Worked closely with teammates across gameplay development, internal tooling, product context, and urgent AI-driven problem solving.",
    ],
  },
  {
    id: "current-products",
    label: "Current",
    period: "2026-now",
    title: `Building ${appCount} ${platformAppNoun}`,
    role: `Independent ${platformNameList} product builder`,
    summary: `I developed ${appCountWord} separate ${platformAppNoun}: ${appNameList}. ${releaseStatusSentence}`,
    highlights: [
      {
        title: "Voice of Self",
        description: "Voice-first reflection app.",
        details: [
          "Built staged AI analysis and reflection memory for recurring worries, resolved worries, and personal growth.",
          "Built managed subscription services and account flows.",
          "Designed voice-first UX for capturing, processing, and reviewing reflections.",
        ],
      },
      {
        title: "PlanKept",
        description: "Plan-enforcement and app-blocker product.",
        details: [
          "Shaped careful UX for reminders, app limits or blocks, recurrence, quotas, and proof review.",
          "Solved local image-processing and memory-management issues for proof review.",
          "Worked on on-device model handling, durable state machines, and Apple/iOS integrations.",
        ],
      },
      {
        title: "OverLit",
        description: "Fast reflex arcade game.",
        details: [
          "Designed easy-to-learn, hard-to-master gameplay around simple mechanics with large gameplay impact.",
          "Tuned variable difficulty, pressure states, level pacing, and easing so runs stayed fun without becoming too easy or too punishing.",
          "Built an ad-supported monetization path.",
        ],
      },
      {
        title: "Take Me Somewhere",
        description: "Route-discovery app for spontaneous outings.",
        details: [
          "Shipped a smooth UX around quick decisions and time-boxed local exploration.",
          "Built Compass Mode and a low-friction route-discovery flow.",
        ],
      },
      {
        title: "AudioChoices",
        description: "Interactive 'choose your story' audiobook app.",
        details: [
          "Designed branching story trees where Yes or No choices open new paths through a book.",
          "Built choice input that works by tapping the screen or nodding with AirPods.",
          "Kept listening progress, settings, and the self-declared age on the device, with no sign-up and no analytics.",
        ],
      },
    ],
  },
] satisfies readonly HomeTimelineEntry[];
