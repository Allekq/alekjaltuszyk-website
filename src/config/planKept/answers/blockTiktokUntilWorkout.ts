import type { PlanKeptAnswerPageContent } from "../types";

export const blockTiktokUntilWorkout = {
  slug: "block-tiktok-until-workout",
  title: "Block TikTok Until I Work Out",
  description:
    "How PlanKept can turn TikTok into something you earn back after a workout instead of an app that steals the workout window.",
  kicker: "TikTok",
  question: "Can I block TikTok until I work out?",
  shortAnswer:
    "PlanKept is built for rules like this: TikTok stays blocked or limited while the workout plan is unfinished, then access can return after the workout clears through Apple Health-backed evidence or Proof Review.",
  examples: [
    "No TikTok until the gym session is done.",
    "TikTok stays blocked until the run clears.",
    "Short-video apps wait until the home workout is complete.",
  ],
  sections: [
    {
      heading: "Why this rule works",
      body:
        "TikTok is built for fast escape. A workout usually needs a start. Blocking TikTok until the workout is complete protects the hardest part of the plan: getting moving before the scroll starts.",
    },
    {
      heading: "How PlanKept frames it",
      body:
        "PlanKept is not just a focus timer. It turns the workout into the unlock condition. That means the app does not come back because time passed; it comes back because the useful action happened.",
      bullets: [
        "Block or cap TikTok during the active plan.",
        "Use a workout target that is specific enough to prove.",
        "Clear the rule through Proof Review or allowed Apple Health workout data when available.",
      ],
    },
    {
      heading: "Make it concrete",
      body:
        "The best version is not 'work out more.' It is a rule a person can actually complete: finish the run, do the planned lift, complete the home workout, or hit the workout target for the day.",
    },
  ],
  faq: [
    {
      question: "Can this work for other short-video apps?",
      answer:
        "Yes. TikTok is the search phrase, but the same PlanKept pattern can apply to other distracting apps supported by the device controls.",
    },
    {
      question: "What if I need TikTok for work?",
      answer:
        "Then the plan should use the right level of pressure. A minute cap or narrower rule may fit better than a full block.",
    },
  ],
  relatedAnswerSlugs: [
    "block-instagram-until-workout",
    "best-app-blocker-for-fitness-goals",
    "app-blocker-with-proof-review",
  ],
  relatedComparisonSlugs: ["one-sec", "opal"],
} as const satisfies PlanKeptAnswerPageContent;
