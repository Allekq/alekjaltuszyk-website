import type { PlanKeptAnswerPageContent } from "../types";

export const screenTimeLimitsWithRealWorldGoals = {
  slug: "screen-time-limits-with-real-world-goals",
  title: "Screen Time Limits With Real-World Goals",
  description:
    "Why PlanKept ties app limits to completed action instead of only relying on screen-time schedules.",
  kicker: "Screen Time",
  question: "Can screen-time limits depend on real-world goals?",
  shortAnswer:
    "That is the PlanKept idea: app limits should be able to respond to what you actually did, such as walking, working out, studying, or meeting a weekly quota.",
  examples: [
    "Social apps are blocked until the walk is done.",
    "Entertainment apps get a lighter cap after the study block clears.",
    "A weekly quota decides whether app access loosens.",
  ],
  sections: [
    {
      heading: "Timers are useful but incomplete",
      body:
        "A timer can stop an app at a certain hour. It cannot, by itself, know whether the real-world promise happened first. Goal-based limits add that missing condition.",
    },
    {
      heading: "PlanKept's useful distinction",
      body:
        "PlanKept treats app access as something connected to a plan. The device rule is a tool. The real product promise is follow-through.",
    },
    {
      heading: "Where it fits",
      body:
        "Goal-linked screen-time limits fit best when your distraction has a predictable relationship to a behavior you care about.",
      bullets: [
        "Scrolling before movement.",
        "Video apps before studying.",
        "Games before chores or routine tasks.",
        "Entertainment before a weekly quota is done.",
      ],
    },
  ],
  faq: [
    {
      question: "Can I still use simple minute caps?",
      answer:
        "Yes. A minute cap can be the right level of pressure. PlanKept's difference is that the cap can be part of a bigger proof-based plan.",
    },
    {
      question: "Does this require constant tracking?",
      answer:
        "No. The goal should decide the proof needed. Some plans may use allowed signals; others may use a direct proof review.",
    },
  ],
  relatedAnswerSlugs: [
    "achievement-gated-app-blocker",
    "recurring-app-blocker-for-habit-goals",
    "app-blocker-that-unlocks-after-steps",
  ],
  relatedComparisonSlugs: ["opal", "one-sec", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
