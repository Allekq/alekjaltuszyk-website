import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerWithAppleHealthGoals = {
  slug: "app-blocker-with-apple-health-goals",
  title: "App Blocker With Apple Health Goals",
  description:
    "How PlanKept can fit app-blocking rules connected to Apple Health activity signals such as steps and workouts when permission is allowed.",
  kicker: "Apple Health",
  question: "Is there an app blocker with Apple Health goals?",
  shortAnswer:
    "PlanKept is designed for app-blocking rules that can use allowed phone signals such as Apple Health steps or workouts when the plan calls for activity proof.",
  examples: [
    "Unlock social apps after a step goal.",
    "Clear the rule after an Apple Health workout signal.",
    "Use activity proof when a movement plan decides app access.",
  ],
  sections: [
    {
      heading: "Why Apple Health matters",
      body:
        "Some goals are easier to prove with phone data. If the plan is about steps or workouts, allowed Apple Health signals can make the unlock condition more concrete than a normal timer.",
    },
    {
      heading: "What PlanKept should claim",
      body:
        "PlanKept should be described carefully: Apple Health can support activity proof when the user grants permission. It is not a promise that every goal is automatically detected.",
      bullets: [
        "Steps and workouts are strong activity-proof examples.",
        "Permissions should be explicit and user-controlled.",
        "Other goals may still need proof review, photos, screenshots, or accepted justification.",
      ],
    },
    {
      heading: "Where PlanKept is strongest",
      body:
        "PlanKept is strongest when the Health signal is part of a broader app-control rule: the phone stays less tempting until the activity plan has actually cleared.",
    },
  ],
  faq: [
    {
      question: "Does PlanKept need Apple Health for every plan?",
      answer:
        "No. Apple Health is useful for activity goals. Other plans can use proof review or other allowed evidence.",
    },
    {
      question: "Does PlanKept write to Apple Health?",
      answer:
        "The public positioning should focus on using allowed activity signals for proof. It should not imply that PlanKept is a full fitness tracker.",
    },
  ],
  relatedAnswerSlugs: [
    "best-app-blocker-that-unlocks-after-steps",
    "app-blocker-that-unlocks-after-steps",
    "best-app-blocker-for-fitness-goals",
  ],
  relatedComparisonSlugs: ["opal", "screenzen"],
} as const satisfies PlanKeptAnswerPageContent;
