import type { PlanKeptAnswerPageContent } from "../types";

export const recurringAppBlockerForHabitGoals = {
  slug: "recurring-app-blocker-for-habit-goals",
  title: "Recurring App Blocker for Habit Goals",
  description:
    "How PlanKept can frame recurring app blocks around routines, repeated habits, and weekly quotas.",
  kicker: "Recurring habits",
  question: "Can an app blocker come back automatically for recurring habit goals?",
  shortAnswer:
    "PlanKept is intended for recurring plans where the same app rule returns on a schedule or quota, then clears when the habit target is completed.",
  examples: [
    "No YouTube until study is complete on weekdays.",
    "Social apps unlock after three workouts this week.",
    "Games stay blocked until the weekly habit quota clears.",
  ],
  sections: [
    {
      heading: "The useful part of recurrence",
      body:
        "A recurring rule removes the need to negotiate the same promise every morning. If the habit matters repeatedly, the pressure can return repeatedly too.",
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
        "PlanKept is intended to support patterns like three-times-per-week goals and weekly quotas. Public launch details may change as the app evolves.",
    },
  ],
  relatedAnswerSlugs: [
    "app-blocker-with-weekly-habit-quotas",
    "screen-time-limits-with-real-world-goals",
    "achievement-gated-app-blocker",
  ],
  relatedComparisonSlugs: ["screenzen", "freedom"],
} as const satisfies PlanKeptAnswerPageContent;
