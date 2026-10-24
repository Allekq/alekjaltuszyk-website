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
  href?: string;
  linkLabel?: string;
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
 * Selected milestones for the top of the homepage.
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
  {
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
    label: "Asset Store customer reviews",
    detail:
      "Published Unity tools including Placer for level design and PRPC for parkour movement, with linked customer reviews.",
    historyId: "alek-games",
  },
  {
    id: "boulder",
    value: "7c",
    label: "max boulder grade",
    detail: "Two regional competition wins and multiple podium finishes.",
  },
] satisfies readonly HomeMilestone[];

/**
 * The stack, said plainly. `siteConfig.focusAreas` is the canonical list for
 * metadata; this list describes personal strengths rather than every toolchain
 * used by the apps.
 */
export const homeStack = [
  "C#",
  "Python",
  "Unity",
  "AI model integration",
] as const;

export const homeSkills = [
  {
    id: "unity",
    offset: "2.2rem",
    title: "Unity Programmer",
    strap: "Gameplay systems and tools for building worlds.",
    summary:
      "I learned programming by making Unity assets, then applied that experience to gameplay work at Roam AI.",
    highlights: [
      "Used Unity's scene and editor systems to build procedural worlds and level-design tools, including Placer.",
      "Built physics-based player controllers, including PRPC for parkour movement.",
      "Developed enemy and vehicle AI, including immersive enemy interactions for VR.",
      "Built camera systems and tuned controls and game feel.",
      "Used Unity DOTS in a separate enemy system to handle large groups efficiently.",
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
    strap: "Reusable components, readable code and practical optimization.",
    summary:
      "My C# experience spans published Unity assets and the game-management systems I worked on at Roam AI. I enjoy building the connections between systems, then making the code easier to understand, extend and maintain.",
    highlights: [
      "Built procedural world-generation tools in C#, including Placer, and contributed to Roam AI's generation systems.",
      "Built game managers and connected gameplay systems to backend services.",
      "Worked on networked collision handling, anti-cheat checks, and synchronized player and health state.",
      "Built physics-driven player and driving systems.",
      "Worked on shaders alongside the gameplay systems.",
      "Built reusable Unity tools and refactored and optimized existing systems, including AI-generated code.",
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
    strap: "Agentic workflows, Python backends and practical AI integration.",
    summary:
      "At Roam AI, my work was split between Unity gameplay engineering and building agentic AI workflows. I enjoy making AI features useful within a larger product.",
    highlights: [
      "Built multiple agentic AI workflows from the ground up and contributed to the Python backend at Roam AI.",
      "Worked with semantic databases and retrieval-augmented generation (RAG) to assemble large amounts of context for models.",
      "Built coding-agent harnesses and optimized agents used in a user-facing product.",
      "Developed a custom long-term memory system for small models in Voice of Self.",
      "Worked on small-model management in PlanKept, including on-device model handling and AI-assisted plan creation.",
    ],
    related: [
      { label: "Roam AI", historyId: "roam-ai" },
      { label: "Current products", historyId: "current-products" },
    ],
  },
  {
    id: "climber",
    offset: "6.4rem",
    title: "Climber",
    strap: "Bouldering, competition, and patient practice.",
    summary:
      "Climbing is a big part of how I stay sharp outside of software. My max boulder grade is 7c, I like slopers, and I have won two regional competitions alongside many more podium finishes.",
    highlights: [
      "Max boulder grade: 7c.",
      "Preferred climbing style: slopers.",
      "Won two regional competitions and placed on the podium in many others.",
      "Strength milestones: a one-arm pull-up, a front lever, and 42 consecutive pull-ups.",
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
      "Building these Unity assets and their earlier versions is how I learned programming. They remain on the Asset Store, though I no longer develop them.",
    href: "https://assetstore.unity.com/publishers/58188",
    linkLabel: "Explore Alek Games",
    highlights: [
      "Published level-design tools, a parkour player controller and character-AI tools under Alek Games.",
      "Learned to package reusable systems and expose useful controls in the Unity editor.",
      "Customer reviews highlight ease of use and developer support; selected examples are linked below.",
    ],
  },
  {
    id: "roam-ai",
    label: "Roam AI",
    period: "2025-2026",
    title: "Roam AI text-to-game startup",
    role: "Core gameplay and AI systems contractor",
    href: "https://roam.gg/",
    linkLabel: "Explore Roam",
    summary:
      "I joined San Francisco–based Roam AI as a core contractor on a small team building a text-to-game experience, working across gameplay engineering and large agentic workflows.",
    highlights: [
      "Built multiple agentic AI workflows from the ground up and contributed to the Python backend.",
      "Built player, camera, enemy, networking and physics systems with the team.",
      "Reviewed and optimized existing code, including AI-generated systems, to improve clarity and maintainability.",
      "Worked alongside AI researchers and educators, including researchers from Stanford University and teachers at LaSalle College in Montréal.",
      "Collaborated with AI-app founders and people who had built or led teams at Voodoo.",
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
          "Built voice-entry capture, AI reflections and ways to revisit earlier notes.",
          "Developed a custom long-term memory system for small models.",
          "Connected AI features with subscription access and identity handling.",
        ],
      },
      {
        title: "PlanKept",
        description: "Plan-enforcement and app-blocker product.",
        details: [
          "Built plan creation, recurring reminders, app limits and proof-review flows.",
          "Connected those flows to iOS system integrations and persisted plan state.",
          "Worked on small-model management and on-device model handling.",
        ],
      },
      {
        title: "OverLit",
        description: "Fast reflex arcade game.",
        details: [
          "Built grid-based reflex gameplay with cell pressure and level progression.",
          "Worked on difficulty, timing and feedback across different level patterns.",
        ],
      },
      {
        title: "Take Me Somewhere",
        description: "Route-discovery app for spontaneous outings.",
        details: [
          "Built route discovery around a time budget and outing preferences.",
          "Added Compass Mode and map-based route views.",
        ],
      },
      {
        title: "AudioChoices",
        description:
          "Branching audiobooks you can steer by nodding or shaking your head with supported iPhone headphones.",
        details: [
          "Built branching narration and a story tree that shows the listener's choices.",
          "Built hands-free Yes/No choices with AirPods or motion-capable Beats on iPhone, alongside screen taps and Android headphone buttons.",
        ],
      },
    ],
  },
] satisfies readonly HomeTimelineEntry[];
