import type { PlanKeptAnswerPageContent } from "../types";

export const appBlockerThatUnlocksAfterSteps = {
  slug: "app-blocker-that-unlocks-after-steps",
  title: "App Blocker That Unlocks After Steps",
  description:
    "How PlanKept is designed for step-gated app blocking, including plans like unlocking social apps after 8,000 steps.",
  kicker: "Steps",
  question: "Is there an app blocker that unlocks apps after I complete a step goal?",
  shortAnswer:
    "PlanKept is designed for exactly that pattern: keep distracting apps blocked until a step goal, such as 8,000 steps, clears through allowed Apple Health step data or Proof Review.",
  examples: [
    "Block Instagram until 8,000 steps.",
    "Keep TikTok unavailable until the evening walk is done.",
    "Unlock YouTube after a daily movement target clears.",
  ],
  sections: [
    {
      heading: "Why step-gated blocking works",
      body:
        "A step goal is concrete, measurable, and hard to negotiate with in the moment. If the phone is the reward, the rule becomes simple: move first, scroll later.",
    },
    {
      heading: "How PlanKept handles the unlock idea",
      body:
        "For a walking plan, PlanKept can combine reminders, app limits, analytics, and a clearing step based on Proof Review or allowed Apple Health step-count signals. If another plan is active at the same time, its app-control rules can combine with the walking rule.",
      bullets: [
        "Pick the distracting apps that should stay unavailable.",
        "Set the step target and the timing that matters.",
        "Clear the rule only when the walking goal is accepted or the step target is reached.",
      ],
    },
    {
      heading: "When to use it",
      body:
        "Step-based blocking is strongest for people who already know that social apps swallow the time they meant to spend walking, resetting, or getting outside.",
    },
  ],
  faq: [
    {
      question: "Can I use a number other than 8,000 steps?",
      answer:
        "Yes. The 8,000-step example is just a common query. The useful target is the one that fits your plan.",
    },
    {
      question: "Does PlanKept need Apple Health access for step plans?",
      answer:
        "Only if you choose a setup that uses Apple Health signals. The app is designed to request permission for device signals when a plan needs them.",
    },
  ],
  relatedAnswerSlugs: [
    "block-instagram-until-step-goal",
    "best-app-blocker-for-fitness-goals",
    "achievement-gated-app-blocker",
  ],
  relatedComparisonSlugs: ["screenzen", "opal"],
} as const satisfies PlanKeptAnswerPageContent;
