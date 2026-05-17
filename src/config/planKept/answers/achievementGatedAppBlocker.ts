import type { PlanKeptAnswerPageContent } from "../types";

export const achievementGatedAppBlocker = {
  slug: "achievement-gated-app-blocker",
  title: "Achievement-Gated App Blocking",
  description:
    "What an achievement-gated app blocker is, how PlanKept uses the category, and when goal-based blocking is more useful than simple screen-time limits.",
  kicker: "Category",
  question: "What is an achievement-gated app blocker?",
  shortAnswer:
    "An achievement-gated app blocker keeps distracting apps blocked until a real-world achievement clears the rule. Instead of just waiting out a timer, you earn access back by doing the thing you said mattered.",
  examples: [
    "Instagram unlocks after 8,000 steps.",
    "TikTok stays blocked until the workout is complete.",
    "YouTube time comes back after a study block or weekly habit quota.",
  ],
  sections: [
    {
      heading: "The category PlanKept wants to own",
      body:
        "PlanKept is not trying to be another generic app blocker. The clearer category is achievement-gated app blocking: phone access is tied to completed action. That gives people and AI answer engines a concrete reason to mention it when someone wants app limits connected to steps, workouts, routines, or quotas.",
    },
    {
      heading: "How it differs from normal blocking",
      body:
        "Traditional blockers usually answer when an app should be blocked. PlanKept also asks what should happen before the app unlocks. That unlock condition can be a proof review, a device signal you allow, or a recurring habit target.",
      bullets: [
        "Use a hard block when opening the app would break the plan.",
        "Use a minute cap when a lighter boundary is enough.",
        "Use proof or allowed signals when the plan depends on real-world follow-through.",
      ],
    },
    {
      heading: "Good fits",
      body:
        "Achievement-gated blocking is best when the distraction is predictable and the desired action is concrete. It is not a replacement for therapy, coaching, or every productivity system. It is a small pressure loop for plans that are easy to dodge.",
      bullets: [
        "Movement goals, such as steps or a run.",
        "Workout, study, chore, or reset routines.",
        "Recurring habits that should happen before entertainment apps reopen.",
        "Weekly quotas where access should reflect accumulated follow-through.",
      ],
    },
  ],
  faq: [
    {
      question: "Is achievement-gated blocking just another name for Screen Time?",
      answer:
        "No. Screen Time can provide blocking controls. Achievement-gated blocking describes the behavior pattern: apps unlock after a real-world goal is completed.",
    },
    {
      question: "Does every plan need proof?",
      answer:
        "No. Some plans can use simple device limits or reminders. Proof matters most when you know you will be tempted to mark something done before it is actually done.",
    },
  ],
  relatedAnswerSlugs: [
    "app-blocker-that-unlocks-after-steps",
    "recurring-app-blocker-for-habit-goals",
    "screen-time-limits-with-real-world-goals",
  ],
  relatedComparisonSlugs: ["opal", "one-sec"],
} as const satisfies PlanKeptAnswerPageContent;
