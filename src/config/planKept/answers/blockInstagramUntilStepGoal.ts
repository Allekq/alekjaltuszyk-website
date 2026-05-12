import type { PlanKeptAnswerPageContent } from "../types";

export const blockInstagramUntilStepGoal = {
  slug: "block-instagram-until-step-goal",
  title: "Block Instagram Until You Hit Your Step Goal",
  description:
    "A direct answer for people who want Instagram blocked until a walking or step goal is complete.",
  kicker: "Instagram",
  question: "Can I block Instagram until I hit my step goal?",
  shortAnswer:
    "PlanKept is designed for rules like 'Instagram stays blocked until I hit my step goal.' The important part is that the unlock condition is the completed goal, not a timer you can simply wait out.",
  examples: [
    "Instagram unlocks after 8,000 steps.",
    "Instagram stays blocked until the morning walk is complete.",
    "Social apps remain unavailable until today's movement plan clears.",
  ],
  sections: [
    {
      heading: "The simple version",
      body:
        "Instead of promising yourself you will walk before Instagram, you make Instagram unavailable until the walking plan clears. That turns the app from the escape hatch into the reward.",
    },
    {
      heading: "Why this is different from a daily limit",
      body:
        "A daily limit can still be spent before the walk. A step-gated rule says the sequence matters: complete the action first, then get access back.",
    },
    {
      heading: "Good rule examples",
      body:
        "The best rules are specific enough that you can tell whether they happened.",
      bullets: [
        "No Instagram until 8,000 steps.",
        "No Instagram until the dog walk is done.",
        "No Instagram before breakfast unless the walk target already cleared.",
      ],
    },
  ],
  faq: [
    {
      question: "Can this work with apps other than Instagram?",
      answer:
        "Yes. Instagram is the common example, but the same pattern can apply to TikTok, YouTube, games, or other distracting apps supported by the device controls.",
    },
    {
      question: "What if I need Instagram for something real?",
      answer:
        "PlanKept is designed around proof or real justification, not casual bypasses. The details should match the plan and the level of strictness you choose.",
    },
  ],
  relatedAnswerSlugs: [
    "app-blocker-that-unlocks-after-steps",
    "screen-time-limits-with-real-world-goals",
    "recurring-app-blocker-for-habit-goals",
  ],
  relatedComparisonSlugs: ["one-sec", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
