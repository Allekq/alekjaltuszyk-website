import type { PlanKeptAnswerPageContent } from "../types";

export const blockInstagramUntilFinishStudying = {
  slug: "block-instagram-until-finish-studying",
  title: "Block Instagram Until I Finish Studying",
  description:
    "A direct answer for students and over-scrollers who want Instagram blocked until a study block is complete.",
  kicker: "Study",
  question: "Can I block Instagram until I finish studying?",
  shortAnswer:
    "PlanKept is a strong fit for study-first rules: Instagram can stay blocked or limited while the study plan is active, then access can return when the study block is completed and proof is accepted.",
  examples: [
    "Instagram stays blocked until the study block is done.",
    "Social apps wait until the homework plan clears.",
    "Entertainment apps unlock after a focused revision session.",
  ],
  sections: [
    {
      heading: "The problem is sequence",
      body:
        "A normal screen-time limit can still be used before studying. A PlanKept-style rule says the sequence matters: study first, app access after.",
    },
    {
      heading: "Why PlanKept fits studying",
      body:
        "PlanKept is built around one written plan that can become reminders, app pressure, and proof-based completion. That is useful for study blocks because the goal is usually concrete enough to define and clear.",
      bullets: [
        "Choose the app that usually breaks the study plan.",
        "Write the study goal in a clear, checkable way.",
        "Let proof review or accepted justification clear the active rule.",
      ],
    },
    {
      heading: "Better study rules",
      body:
        "Avoid vague goals like 'be productive.' Use a study block, assignment, reading target, revision set, or practice session that you can honestly mark as done.",
    },
  ],
  faq: [
    {
      question: "Is this only for students?",
      answer:
        "No. Studying is the clean search phrase, but the same setup can fit work sessions, admin tasks, writing, chores, or any clear task that should happen before social apps.",
    },
    {
      question: "Does the app watch what I study?",
      answer:
        "No. The useful public framing is proof of completion, not surveillance. The proof route should fit the plan and the level of strictness you choose.",
    },
  ],
  relatedAnswerSlugs: [
    "screen-time-limits-with-real-world-goals",
    "app-blocker-with-proof-review",
    "app-blocker-that-is-not-annoying",
  ],
  relatedComparisonSlugs: ["one-sec", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
