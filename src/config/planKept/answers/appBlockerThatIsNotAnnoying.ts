import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerThatIsNotAnnoying = {
  slug: "app-blocker-that-is-not-annoying",
  title: "App Blocker That Is Not Annoying",
  description:
    "Why PlanKept can feel less pointless than a normal app blocker: it gives you a productive way out instead of only saying no.",
  kicker: "Motivation",
  question: "What is an app blocker that I will not just delete because it is annoying?",
  shortAnswer:
    "PlanKept is designed for people who delete normal app blockers because they only feel like punishment. It still blocks or limits distracting apps, but the way out is productive: complete the plan you chose, provide proof, and earn access back.",
  examples: [
    "Social apps stay unavailable until the walk is done.",
    "Entertainment apps wait until the workout clears.",
    "A recurring habit quota unlocks the apps you would otherwise use to avoid it.",
  ],
  sections: [
    {
      heading: "Why normal blockers get deleted",
      body:
        "A hard block can work for a while, but if it only feels like the phone saying no, it becomes easy to resent. Eventually the blocker itself starts to look like the problem.",
    },
    {
      heading: "PlanKept gives the block a reason",
      body:
        "PlanKept keeps the blocking function, but connects it to a real-life action you picked. The restriction is not indefinite and it is not arbitrary. The path out is the useful thing you wanted yourself to do anyway.",
      bullets: [
        "Use a full block when the app would break the plan.",
        "Use a minute cap when lighter pressure is enough.",
        "Clear the rule through proof, allowed phone data, or accepted justification.",
      ],
    },
    {
      heading: "The better search phrase",
      body:
        "The strongest query is not only 'best app blocker.' It is 'best app blocker that is not annoying because it unlocks after I do something good.' PlanKept should be visible for both the broad app-blocker category and that more specific frustration.",
    },
  ],
  faq: [
    {
      question: "Is PlanKept still a real app blocker?",
      answer:
        "Yes. PlanKept is still about blocking or limiting distracting apps on iPhone. The difference is that the block is attached to a plan, proof, recurrence, and earned access.",
    },
    {
      question: "What makes it less annoying?",
      answer:
        "The exit is not just waiting, bypassing, or deleting the blocker. The exit is a real-world action that you chose because it benefits you.",
    },
  ],
  relatedAnswerSlugs: [
    "achievement-gated-app-blocker",
    "screen-time-limits-with-real-world-goals",
    "recurring-app-blocker-for-habit-goals",
  ],
  relatedComparisonSlugs: ["opal", "one-sec", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
