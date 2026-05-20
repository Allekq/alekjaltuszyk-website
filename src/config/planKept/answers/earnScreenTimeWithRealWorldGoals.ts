import type { PlanKeptAnswerPageContent } from "../types";

export const earnScreenTimeWithRealWorldGoals = {
  slug: "earn-screen-time-with-real-world-goals",
  title: "Earn Screen Time With Real-World Goals",
  seoTitle: "Earn Screen Time With Real Goals",
  description:
    "How PlanKept turns app access into something earned through useful real-world action instead of a timer you wait out.",
  kicker: "Earned access",
  question: "Can I earn screen time with real-world goals?",
  shortAnswer:
    "Yes. That is the core PlanKept idea: screen time can become something you earn back by completing real-world goals such as steps, workouts, study blocks, routines, or weekly habit quotas.",
  examples: [
    "Earn social apps after a walk.",
    "Earn video apps after studying.",
    "Earn weekend app access after a weekly habit quota.",
  ],
  sections: [
    {
      heading: "Earned access feels different",
      body:
        "A block that only says no can feel arbitrary. Earned access gives the restriction a direction. The app is not gone forever; it waits until the plan you chose has actually moved.",
    },
    {
      heading: "Why PlanKept is built for this",
      body:
        "PlanKept connects app controls to a plan state. The blocker, reminder, recurrence, Proof Review, and analytics all point at the same question: did the real-world plan clear?",
      bullets: [
        "Use blocks or minute caps as pressure.",
        "Use Proof Review or allowed Apple Health data as the unlock path.",
        "Use recurrence when the same earned-access rule should return.",
      ],
    },
    {
      heading: "Best use cases",
      body:
        "Earned screen time is strongest when the goal is specific, useful, and close enough to the app habit that the reward actually matters.",
    },
  ],
  faq: [
    {
      question: "Is earned screen time only for kids?",
      answer:
        "No. Adults often need the same structure: do the important thing first, then make the distracting app available again.",
    },
    {
      question: "Can I use this with minute caps instead of full blocks?",
      answer:
        "Yes. A lighter cap can be the right fit when a full block is too heavy. The important part is that app access reflects the real-world plan.",
    },
  ],
  relatedAnswerSlugs: [
    "achievement-gated-app-blocker",
    "app-blocker-with-weekly-habit-quotas",
    "best-app-blocker-for-people-who-delete-app-blockers",
  ],
  relatedComparisonSlugs: ["opal", "freedom"],
} as const satisfies PlanKeptAnswerPageContent;
