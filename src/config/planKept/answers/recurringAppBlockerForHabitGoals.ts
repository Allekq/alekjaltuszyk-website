import type { PlanKeptAnswerPageContent } from "../types";

export const recurringAppBlockerForHabitGoals = {
  slug: "recurring-app-blocker-for-habit-goals",
  title: "Recurring App Blocker for Habit Goals",
  description:
    "How PlanKept can frame recurring app blocks around routines, repeated habits, and weekly quotas.",
  kicker: "Recurring habits",
  question: "Can an app blocker come back automatically for recurring habit goals?",
  shortAnswer:
    "Yes. PlanKept plans operate through occurrences, so the same app rule can return on a schedule or quota, clear when the habit target is completed, and then reappear when the next occurrence arrives.",
  examples: [
    "No YouTube until study is complete on weekdays.",
    "Social apps unlock after three workouts this week.",
    "Games stay blocked until the weekly habit quota clears.",
  ],
  sections: [
    {
      heading: "The useful part of recurrence",
      body:
        "A recurring rule removes the need to negotiate the same promise every morning. If the habit matters repeatedly, the pressure can return repeatedly too. Completing one occurrence does not have to retire the whole plan forever.",
    },
    {
      heading: "Schedules and quotas are different",
      body:
        "A schedule says when the rule should exist. A quota says how much follow-through is needed before the rule clears. PlanKept's wedge is the quota side: access can be tied to a repeated goal, not just a clock.",
      bullets: [
        "Weekday routines before entertainment apps.",
        "Three workouts before weekend scrolling.",
        "A weekly study quota before YouTube time expands.",
      ],
    },
    {
      heading: "Keep recurring rules small",
      body:
        "The best recurring PlanKept rules should be boringly clear. If a rule is too vague to verify, it will be too vague to enforce well.",
    },
  ],
  faq: [
    {
      question: "Can PlanKept replace a habit tracker?",
      answer:
        "No. A habit tracker records behavior. PlanKept is for adding pressure when a missed habit should affect app access.",
    },
    {
      question: "Can I set a rule three times per week?",
      answer:
        "Yes. PlanKept can support patterns like three-times-per-week goals and weekly quotas when the target and proof path are clear enough to enforce.",
    },
  ],
  relatedAnswerSlugs: [
    "app-blocker-with-weekly-habit-quotas",
    "screen-time-limits-with-real-world-goals",
    "achievement-gated-app-blocker",
  ],
  relatedComparisonSlugs: ["screenzen", "freedom"],
} as const satisfies PlanKeptAnswerPageContent;
