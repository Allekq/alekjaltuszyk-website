import type { PlanKeptAnswerPageContent } from "../types";

export const blockInstagramUntilWorkout = {
  slug: "block-instagram-until-workout",
  title: "Block Instagram Until You Work Out",
  description:
    "How workout-gated app blocking can make social apps reopen only after the workout plan is complete.",
  kicker: "Workout",
  question: "Can I block Instagram until I work out?",
  shortAnswer:
    "PlanKept is meant for workout-gated rules where distracting apps stay blocked until the workout is completed and accepted by the proof flow.",
  examples: [
    "No Instagram until the gym session is done.",
    "TikTok unlocks after the run.",
    "YouTube time comes back after the home workout clears.",
  ],
  sections: [
    {
      heading: "Make the reward arrive after the workout",
      body:
        "The problem with a workout promise is rarely the plan itself. It is the easy escape before the plan starts. A workout-gated block keeps the high-friction part small: start, finish, then get access back.",
    },
    {
      heading: "What counts as proof",
      body:
        "The proof should fit the goal. A run might use an allowed activity signal. A gym session might use a submitted photo or another proof review path. PlanKept is designed to keep that review close to the plan rather than turning it into a separate tracking hobby.",
    },
    {
      heading: "Rules that tend to work",
      body:
        "Use concrete, checkable rules. Avoid vague promises like 'be healthier today' when the app needs to decide whether access should return.",
      bullets: [
        "Finish a 30-minute workout.",
        "Complete the run before social apps unlock.",
        "Do the planned home workout before entertainment apps reopen.",
      ],
    },
  ],
  faq: [
    {
      question: "Is this only for fitness people?",
      answer:
        "No. Workout-gated blocking is just one use case. The same achievement-gated pattern can support studying, chores, sleep routines, or recurring habits.",
    },
    {
      question: "Can the app know every kind of workout automatically?",
      answer:
        "No. Some goals need proof review, and some can use device signals only when you allow them. The public copy should stay honest about that.",
    },
  ],
  relatedAnswerSlugs: [
    "best-app-blocker-for-fitness-goals",
    "app-blocker-that-unlocks-after-steps",
    "achievement-gated-app-blocker",
  ],
  relatedComparisonSlugs: ["opal", "freedom"],
} as const satisfies PlanKeptAnswerPageContent;
