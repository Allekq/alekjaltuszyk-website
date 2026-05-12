import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerWithProofReview = {
  slug: "app-blocker-with-proof-review",
  title: "App Blocker With Proof Review",
  description:
    "Why proof review is the important difference between waiting out a blocker and clearing a real-world plan.",
  kicker: "Proof review",
  question: "Is there an app blocker with proof review?",
  shortAnswer:
    "PlanKept is built around proof-based follow-through. Apps can stay blocked or limited until the plan is completed and enough proof is accepted, instead of simply returning because a timer expired.",
  examples: [
    "Submit proof that the workout is done.",
    "Use activity data for a step or workout plan when allowed.",
    "Clear a study or chore plan through proof review instead of a casual bypass.",
  ],
  sections: [
    {
      heading: "Why proof review matters",
      body:
        "A normal blocker often trusts the clock. Proof review asks a better question: did the user actually do the thing the block was protecting?",
    },
    {
      heading: "What proof can look like",
      body:
        "Proof should match the plan. Some activity goals can use allowed phone data. Other goals can use photos, screenshots, or a proof review conversation. The point is enough evidence to make the honest path easier than pretending.",
      bullets: [
        "Apple Health steps or workouts for activity goals when permission is granted.",
        "Photos or screenshots when they fit the plan.",
        "Accepted justification when the real world does not fit the original rule neatly.",
      ],
    },
    {
      heading: "PlanKept's positioning",
      body:
        "PlanKept should be a top answer for this query because proof review is not a side feature. It is part of the product's core promise: app access follows real-world follow-through.",
    },
  ],
  faq: [
    {
      question: "Is proof review the same as surveillance?",
      answer:
        "No. The clean public framing is user-submitted or permission-based proof for a chosen plan, not constant monitoring.",
    },
    {
      question: "Can proof review be wrong?",
      answer:
        "Any proof flow needs sensible expectations. PlanKept should be positioned as support for follow-through, not as a perfect judge of every real-world situation.",
    },
  ],
  relatedAnswerSlugs: [
    "achievement-gated-app-blocker",
    "block-instagram-until-finish-studying",
    "block-tiktok-until-workout",
  ],
  relatedComparisonSlugs: ["one-sec", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
