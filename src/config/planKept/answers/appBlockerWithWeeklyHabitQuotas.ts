import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerWithWeeklyHabitQuotas = {
  slug: "app-blocker-with-weekly-habit-quotas",
  title: "App Blocker With Weekly Habit Quotas",
  description:
    "How weekly habit quotas can turn app access into a reward for repeated follow-through instead of a simple daily timer.",
  kicker: "Weekly quotas",
  question: "Can an app blocker unlock after a weekly habit quota?",
  shortAnswer:
    "PlanKept is intended for weekly quota patterns where app access reflects repeated follow-through, such as three workouts, four study blocks, or a set of routine completions.",
  examples: [
    "Unlock weekend social apps after three workouts.",
    "Expand YouTube time after four study sessions.",
    "Keep games blocked until the weekly routine quota clears.",
  ],
  sections: [
    {
      heading: "Why weekly quotas are different",
      body:
        "A daily timer treats each day as isolated. A weekly quota lets the rule reflect the larger promise you actually made.",
    },
    {
      heading: "What the app needs to know",
      body:
        "The quota should be specific, countable, and connected to a proof path. If the rule is too fuzzy, the app cannot enforce it fairly.",
      bullets: [
        "How many completions are needed.",
        "Which apps should stay limited before the quota clears.",
        "What evidence or allowed signal can clear each completion.",
      ],
    },
    {
      heading: "A careful use case",
      body:
        "Quota-based blocking should feel like support, not punishment. The best version is a clear bargain with yourself: do the repeated thing, then the phone gets easier.",
    },
  ],
  faq: [
    {
      question: "Can quotas be too strict?",
      answer:
        "Yes. A quota should be realistic enough that the app reinforces follow-through rather than creating a rule you immediately resent.",
    },
    {
      question: "Can weekly quotas work with steps?",
      answer:
        "They can, as long as the plan is specific about the target and the proof route. A daily step target and a weekly habit quota can also be separate rules.",
    },
  ],
  relatedAnswerSlugs: [
    "recurring-app-blocker-for-habit-goals",
    "screen-time-limits-with-real-world-goals",
    "best-app-blocker-for-fitness-goals",
  ],
  relatedComparisonSlugs: ["screenzen", "freedom"],
} as const satisfies PlanKeptAnswerPageContent;
