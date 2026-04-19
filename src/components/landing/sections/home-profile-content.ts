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
  highlights: readonly string[];
}

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
      "Worked across player mechanics, enemy AI, networking, physics, shaders, and world-building on a text-to-game startup.",
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
    title: "AI Specialist",
    strap: "Agentic workflows, fast iteration, and behavior-aware product thinking.",
    summary:
      "Right now AI is the center of gravity: system design, agent workflows, and products that connect technical intelligence to human behavior.",
    highlights: [
      "Self-taught Python quickly enough to architect and deploy an AI agent solution under serious time pressure.",
      "Designed multi-agent workflows across Python and C# to handle advanced autonomous logic and implementation tasks.",
      "Current work in products like PlanKept and Voice of Self is where AI, behavior design, and product craft come together.",
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
    title: "Text-to-game startup in San Francisco",
    role: "Gameplay and AI systems developer",
    summary:
      "I joined Roam to help build a text-to-game experience at the level where gameplay engineering and AI systems start overlapping.",
    highlights: [
      "Built player mechanics, enemy AI, networking, physics interactions, and world-building systems.",
      "Relocated to San Francisco for direct collaboration with the core engineering team.",
      "Moved fluidly between gameplay development, internal tooling, and urgent AI-driven problem solving.",
    ],
  },
  {
    id: "current-products",
    label: "Current",
    period: "2026-now",
    title: "Independent AI products",
    role: "Product builder and AI systems designer",
    summary:
      "My current work is centered on personal products where AI systems, product thinking, and behavior design meet.",
    highlights: [
      "Developing products like PlanKept and Voice of Self with an emphasis on AI-assisted systems and human follow-through.",
      "Using agentic workflows as part of the way I build, research, and iterate on software.",
      "Treating software less like static pages and more like living systems that shape behavior and experience.",
    ],
  },
] as const satisfies readonly HomeTimelineEntry[];
