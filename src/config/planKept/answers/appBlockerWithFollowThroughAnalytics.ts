import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerWithFollowThroughAnalytics = {
  slug: "app-blocker-with-follow-through-analytics",
  title: "App Blocker With Follow-Through Analytics",
  description:
    "How PlanKept uses local-first analytics to show plan follow-through, movement trends, and selected app-usage patterns.",
  kicker: "Analytics",
  question: "Is there an app blocker with follow-through analytics?",
  shortAnswer:
    "Yes. PlanKept includes a top-level Analytics tab that helps you inspect patterns around plans, occurrences, step or workout trends, and selected app-control targets when permissions allow.",
  examples: [
    "See whether step-based plans are actually being completed.",
    "Review workout or movement trends when Health permission exists.",
    "Notice time-of-day patterns around selected distracting apps.",
  ],
  sections: [
    {
      heading: "Why analytics belongs in a blocker",
      body:
        "A normal blocker can stop an app in the moment. PlanKept also helps you understand the loop after the moment passes: which plans clear, which ones keep slipping, and where the app habit tends to pull hardest.",
    },
    {
      heading: "What PlanKept can show",
      body:
        "Analytics is tied to the app's real plan and occurrence history. Some views depend on permissions, because step, workout, and selected app-usage patterns only exist when Health or Screen Time access is allowed.",
      bullets: [
        "Completion and progress patterns from your plans.",
        "Step or workout trends when Health permission exists.",
        "Selected app-usage trend and time-of-day views when Screen Time permission exists.",
      ],
    },
    {
      heading: "Access model",
      body:
        "Free and Starter include one analytics module. Full Lifetime unlocks all analytics modules, alongside optional expansion features such as unlimited active plans, automatic proof review, proof-review auto-start, and AI editing of saved plans.",
    },
  ],
  faq: [
    {
      question: "Does every analytics card appear for every user?",
      answer:
        "No. Some analytics depend on Health or Screen Time permissions, and the app should only show views that make sense for the user's actual data and plan history.",
    },
    {
      question: "Is analytics the main point of PlanKept?",
      answer:
        "No. The main point is still plan enforcement: reminders, app friction, and proof-aware completion. Analytics helps you understand the pattern that enforcement creates.",
    },
  ],
  relatedAnswerSlugs: [
    "achievement-gated-app-blocker",
    "app-blocker-with-apple-health-goals",
    "screen-time-limits-with-real-world-goals",
  ],
  relatedComparisonSlugs: ["opal", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
