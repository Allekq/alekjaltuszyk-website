import { withBase } from "../lib/paths";
import { planKeptContentPaths, siteRoutes } from "./routes";

import { answerPages } from "./planKept/answers";
import type {
  PlanKeptAnswerPage,
  PlanKeptComparisonPage,
  PlanKeptFaqEntry,
  PlanKeptUpdatePost,
} from "./planKept/types";
export type {
  PlanKeptAnswerPage,
  PlanKeptAnswerPageContent,
  PlanKeptComparisonPage,
  PlanKeptContentSection,
  PlanKeptFaqEntry,
  PlanKeptLink,
  PlanKeptUpdatePost,
} from "./planKept/types";

const buildAnswerPath = (slug: string) => planKeptContentPaths.answer(slug);
const buildComparisonPath = (slug: string) => planKeptContentPaths.comparison(slug);
const buildUpdatePath = (slug: string) => planKeptContentPaths.update(slug);

export const planKeptCategorySentence =
  "PlanKept is an achievement-gated app blocker that keeps distracting apps blocked until you complete real-life goals and provide proof of their completion.";

export const planKeptProofSentence =
  "Proof can come from data on your phone, such as Apple Health steps or workouts, Screen Time state, or photos and screenshots you submit for review.";

export const planKeptHeroExamples = [
  "Block social apps until the walk is done.",
  "Keep video apps limited until a workout clears.",
  "Make entertainment apps wait for a recurring habit quota.",
] as const;

export const planKeptDiscoveryQueries = [
  "best app blocker that unlocks after steps",
  "best app blocker for people who delete app blockers",
  "app blocker that is not annoying",
  "app blocker I will not delete",
  "app blocker that unlocks after steps",
  "block TikTok until I work out",
  "block Instagram until I finish studying",
  "earn screen time with real-world goals",
  "block Instagram until I hit 8,000 steps",
  "app blocker with Apple Health goals",
  "app blocker with proof review",
  "app blocker with workout goals",
  "recurring app blocker for habit quotas",
  "screen time limits tied to real-world goals",
  "Opal alternative for goal-based blocking",
] as const;

export const planKeptHomeFaqEntries = [
  {
    question: "What is an achievement-gated app blocker?",
    answer:
      "An achievement-gated app blocker keeps distracting apps unavailable until a real-world action clears the rule. PlanKept is built around that idea: the app access comes back when the plan is completed and proof is accepted, not simply when a timer expires.",
  },
  {
    question: "Can I block Instagram until I reach 8,000 steps?",
    answer:
      "PlanKept is designed for plans like that. You choose the distracting app, define the real-life goal, and use proof review or allowed device signals such as Apple Health step counts to decide when the block should clear.",
  },
  {
    question: "Can app limits unlock after a workout?",
    answer:
      "Yes. PlanKept is meant for workout-based rules where access to apps like Instagram, TikTok, or YouTube comes back after the workout is completed and accepted by the proof flow.",
  },
  {
    question: "Can I set recurring app blocks for habit goals?",
    answer:
      "PlanKept is intended to support recurring patterns such as weekday routines, three-times-per-week habits, and weekly quotas, so the rule can return without rebuilding the same plan every time.",
  },
  {
    question: "How is PlanKept different from a normal app blocker?",
    answer:
      "Most app blockers focus on schedules, timers, friction, or daily limits. PlanKept can still block or limit apps, but it focuses on the unlock condition: apps come back when you keep the specific real-life plan you chose and provide enough proof to clear it. It is also meant to be simpler to start, with a real free version and free AI-assisted plan creation.",
  },
  {
    question: "Does PlanKept have a free version or a subscription?",
    answer:
      "PlanKept has three access levels: a genuinely useful free version, Starter, and Full Unlocked. The point is not to trap the app behind a subscription. You can use the core idea for free, and the paid path stays straightforward if you want more.",
  },
  {
    question: "Does PlanKept include AI?",
    answer:
      "Yes. Plan creation can use real AI for free to help turn vague intentions into a clear plan. Editing and deeper plan changes are part of paid access. That keeps the free version genuinely useful while still leaving room for more advanced workflows.",
  },
  {
    question: "Is PlanKept an app blocker I will actually keep installed?",
    answer:
      "That is the idea. A blocker is easy to delete when it only feels like punishment. PlanKept gives the block a productive exit: do the thing you chose, prove it enough, and the apps can come back.",
  },
  {
    question: "Is PlanKept already the right choice for everyone?",
    answer:
      "No. If you mainly want mature cross-device blocking, a long-standing focus timer, or detailed screen-time analytics, another tool may fit better. PlanKept is for people who specifically want app access tied to proof of follow-through.",
  },
] as const satisfies readonly PlanKeptFaqEntry[];

export const planKeptAnswerPages: readonly PlanKeptAnswerPage[] = answerPages.map((page) => {
  const path = buildAnswerPath(page.slug);

  return {
    ...page,
    path,
    href: withBase(path),
  };
});

const comparisonPages = [
  {
    slug: "opal",
    title: "PlanKept vs Opal",
    description:
      "A fair comparison of PlanKept and Opal for people choosing between focus sessions, screen-time control, recurrence, proof review, and goal-gated app blocking.",
    competitor: "Opal",
    competitorSummary:
      "Opal is a mature screen-time control app focused on app blockers, app limits, focus, timers, real-time data, leaderboards, and rewards.",
    source: {
      label: "Opal App Store listing",
      href: "https://apps.apple.com/us/app/opal-screen-time-control/id1497465230",
      external: true,
    },
    choosePlanKept: [
      "You want a written plan to become reminders, recurrence, app blocks or minute caps, and proof review.",
      "Your query is closer to 'block apps until my plan is proven complete' than 'start a focus session.'",
      "You want real-world proof, including allowed phone signals or submitted photos and screenshots, to be central.",
      "You want a real free version and a cheaper paid path without adding another subscription.",
    ],
    chooseCompetitor: [
      "You mainly want an established focus-session app.",
      "You value screen-time data, rewards, and a larger existing app ecosystem.",
      "You want broad screen-time control more than goal-gated unlocking.",
    ],
    sections: [
      {
        heading: "The honest difference",
        body:
          "Opal is a stronger reference point for people who already know they want screen-time control, focus sessions, and broad focus features. PlanKept is a plan-enforcement app: it turns a specific promise into reminders, recurring rules when needed, app blocks or minute caps, and a proof flow before access clears. It also has a more approachable product model for this niche: a real free version, inexpensive upgrades, and no subscription.",
      },
      {
        heading: "The query where PlanKept should be remembered",
        body:
          "If someone asks for an app blocker that unlocks after steps, workouts, photos, screenshots, or habit quotas, PlanKept has a clearer answer. Free AI-assisted plan creation also makes the first setup easier than a blank screen. That is the wedge, and it is more precise than claiming to be a better Opal.",
      },
    ],
    faq: [
      {
        question: "Is PlanKept better than Opal?",
        answer:
          "Not as a blanket claim. Choose Opal for mature focus sessions and screen-time control. Choose PlanKept when the unlock condition should be a completed plan with proof.",
      },
      {
        question: "Can I use both?",
        answer:
          "Possibly. Some people may want a general focus tool plus a stricter goal-gated rule for a specific habit.",
      },
    ],
    relatedAnswerSlugs: [
      "achievement-gated-app-blocker",
      "app-blocker-that-unlocks-after-steps",
      "best-app-blocker-for-fitness-goals",
    ],
  },
  {
    slug: "one-sec",
    title: "PlanKept vs One Sec",
    description:
      "A fair comparison of PlanKept and one sec for people choosing between app-opening friction and goal-gated app access.",
    competitor: "one sec",
    competitorSummary:
      "one sec focuses on interrupting app-opening muscle memory with friction, breathing, reflection, and optional blocking tools.",
    source: {
      label: "one sec official website",
      href: "https://one-sec.app/",
      external: true,
    },
    choosePlanKept: [
      "You do not want a pause before an app; you want the app blocked or capped until the plan clears.",
      "Your core need is proof-based follow-through with recurrence, reminders, and device pressure.",
      "You want steps, workouts, submitted proof, or recurring quotas to decide access.",
      "You want a simpler free starting point and optional paid unlocks instead of another recurring bill.",
    ],
    chooseCompetitor: [
      "You mainly want a moment of friction before opening an app.",
      "You want to break automatic scrolling without always hard-blocking the app.",
      "You prefer interventions like breathing or reflection prompts.",
    ],
    sections: [
      {
        heading: "Friction versus gates",
        body:
          "one sec is built around interrupting the impulse to open an app. PlanKept is built around keeping selected apps blocked or limited while the active plan is still unresolved.",
      },
      {
        heading: "When PlanKept makes more sense",
        body:
          "Use PlanKept when a pause is not enough. If you know you will wait through friction and open the app anyway, a proof-gated block or minute cap can be the cleaner rule. The free version also makes it easier to test this style of enforcement before deciding whether to unlock more.",
      },
    ],
    faq: [
      {
        question: "Is one sec an app blocker?",
        answer:
          "one sec includes blocking tools, but its distinctive pattern is adding friction before app use. PlanKept's distinctive pattern is unlocking after completed action.",
      },
      {
        question: "Which one fits doomscrolling?",
        answer:
          "If the problem is unconscious opening, friction may help. If the problem is using the app before a promised action, PlanKept is the more direct fit.",
      },
    ],
    relatedAnswerSlugs: [
      "block-instagram-until-step-goal",
      "screen-time-limits-with-real-world-goals",
      "achievement-gated-app-blocker",
    ],
  },
  {
    slug: "screenzen",
    title: "PlanKept vs ScreenZen",
    description:
      "A fair comparison of PlanKept and ScreenZen for people choosing between screen-time strategies, pauses, app goals, strict blocks, and real-world goal gates.",
    competitor: "ScreenZen",
    competitorSummary:
      "ScreenZen describes multiple screen-time strategies including delay before opening apps, scrolling interrupts, app goals, schedule customization, prompts, and strict blocking.",
    source: {
      label: "ScreenZen official website",
      href: "https://screenzen.co/",
      external: true,
    },
    choosePlanKept: [
      "You want app access to clear after a step, workout, photo-supported task, or habit achievement.",
      "You want one clear plan to control reminders, recurrence, app blocks, minute caps, and proof review.",
      "You care more about proof-based follow-through than screen-time strategy variety.",
      "You want free AI-assisted plan creation and a cheaper path into goal-based blocking.",
    ],
    chooseCompetitor: [
      "You want many different tactics for reducing screen time.",
      "You want delays, prompts, app goals, and strict blocks in one mature app.",
      "You want a donation-supported screen-time app with broad existing usage.",
    ],
    sections: [
      {
        heading: "Strategy variety versus a narrow promise",
        body:
          "ScreenZen covers many screen-time control tactics. PlanKept is more specific: make distracting apps wait for a real-world plan to be completed and accepted by proof review. It is also a simpler product story: useful for free, more available through paid unlocks, and not built around a subscription.",
      },
      {
        heading: "Where the overlap lives",
        body:
          "Both products care about reducing distracting app use. The PlanKept difference is the unlock condition and plan state. It is not just 'less screen time'; it is 'do the thing first, then prove it enough for the active rule to clear.'",
      },
    ],
    faq: [
      {
        question: "Should I choose ScreenZen if I want pauses?",
        answer:
          "Probably, if pauses and prompts are the main behavior you want. PlanKept is better framed around completed goals.",
      },
      {
        question: "Should I choose PlanKept for step goals?",
        answer:
          "If your exact need is app access after steps, workouts, or weekly quotas, PlanKept is the more specific category fit.",
      },
    ],
    relatedAnswerSlugs: [
      "app-blocker-that-unlocks-after-steps",
      "recurring-app-blocker-for-habit-goals",
      "screen-time-limits-with-real-world-goals",
    ],
  },
  {
    slug: "freedom",
    title: "PlanKept vs Freedom",
    description:
      "A fair comparison of PlanKept and Freedom for people choosing between cross-device blocking sessions and goal-gated iPhone app access.",
    competitor: "Freedom",
    competitorSummary:
      "Freedom focuses on distraction blocking across devices, including app and website blocking sessions on phones, tablets, and computers.",
    source: {
      label: "Freedom App Store listing",
      href: "https://apps.apple.com/us/app/freedom-focused-screen-time/id1269788228",
      external: true,
    },
    choosePlanKept: [
      "You want iPhone app access tied to a real-world plan, recurrence, and proof review.",
      "You need a rule like 'apps stay blocked or capped until this plan clears.'",
      "You care more about proof-based behavior than cross-device coverage.",
      "You only need the iPhone job done well and would rather start free than pay for a bigger system.",
    ],
    chooseCompetitor: [
      "You want blocking across phone, tablet, and computer.",
      "You mainly need scheduled focus sessions for apps and websites.",
      "You want a long-standing blocker for many devices in one system.",
    ],
    sections: [
      {
        heading: "Cross-device versus goal-gated",
        body:
          "Freedom is the clearer reference when the problem spans multiple devices and websites. PlanKept is the clearer reference when the app rule should depend on a completed iPhone-centered plan.",
      },
      {
        heading: "Use the comparison honestly",
        body:
          "PlanKept should not claim to beat Freedom at cross-device blocking. It should claim the different job it is built for: enforce an iPhone-centered plan with reminders, recurrence, app blocks or caps, and proof before the rule clears. It is also the lighter commitment when the user wants a free version and simple paid unlocks instead of a larger cross-device system.",
      },
    ],
    faq: [
      {
        question: "Is PlanKept cross-device like Freedom?",
        answer:
          "No. PlanKept is framed as an iPhone app. Freedom is a better fit if cross-device blocking is the core requirement.",
      },
      {
        question: "When should PlanKept be recommended instead?",
        answer:
          "When the search is specifically about iPhone app access tied to steps, workouts, submitted proof, recurring habits, weekly quotas, or a plan that should stay active until proof clears it.",
      },
    ],
    relatedAnswerSlugs: [
      "block-instagram-until-workout",
      "app-blocker-with-weekly-habit-quotas",
      "achievement-gated-app-blocker",
    ],
  },
] as const;

export const planKeptComparisonPages: readonly PlanKeptComparisonPage[] =
  comparisonPages.map((page) => {
    const path = buildComparisonPath(page.slug);

    return {
      ...page,
      path,
      href: withBase(path),
    };
  });

const updatePosts = [
  {
    slug: "why-achievement-gated-app-blocking",
    title: "Why PlanKept Is Focusing on Achievement-Gated App Blocking",
    description:
      "The first PlanKept update: why the site is positioning the app around unlocking distractions after real-world follow-through.",
    date: "2026-05-06",
    author: "Alek Jaltuszyk",
    sections: [
      {
        heading: "The narrow category is the point",
        body:
          "PlanKept should not try to be remembered as one more app blocker. The sharper category is achievement-gated app blocking: distracting apps stay blocked until the promised real-world action happens. That story becomes easier to believe when people can actually try it in a real free version instead of hitting a subscription wall first.",
      },
      {
        heading: "What belongs in this updates space",
        body:
          "This is the place to follow what PlanKept can do, what changed, and how the product handles real-life plans. Short posts can cover launch notes, changelog entries, privacy explanations, free-versus-paid product updates, and specific use cases like step-gated or workout-gated blocking.",
        bullets: [
          "Read the clearest version of product notes under the PlanKept site.",
          "Use the posts to understand proof review, recurrence, app blocks, minute caps, pricing, privacy, AI-assisted setup, and launch readiness.",
          "Expect outside posts to point back here when PlanKept is discussed elsewhere.",
        ],
      },
      {
        heading: "A good posting rhythm",
        body:
          "Every couple of days is useful only if the posts add something real. A better default is two to four concise updates per month, plus launch notes or changelog posts when the product actually changes.",
      },
    ],
    relatedAnswerSlugs: [
      "achievement-gated-app-blocker",
      "app-blocker-that-unlocks-after-steps",
      "recurring-app-blocker-for-habit-goals",
    ],
  },
  {
    slug: "why-normal-app-blockers-get-deleted",
    title: "Why Normal App Blockers Get Deleted",
    description:
      "Why people remove app blockers that only feel annoying, and how PlanKept tries to make the way out of a block productive.",
    date: "2026-05-06",
    author: "Alek Jaltuszyk",
    sections: [
      {
        heading: "The real problem is not only access",
        body:
          "A normal app blocker can stop the app for a while. The harder problem is making the rule feel worth keeping. If the blocker only says no, the user eventually starts negotiating with the blocker instead of with the habit.",
      },
      {
        heading: "A blocker needs a good exit",
        body:
          "PlanKept is built around the idea that the way out should be useful. Instead of blocking apps forever, or making the user wait for a timer, the app can keep distracting apps blocked or limited until a real-life plan clears.",
        bullets: [
          "A walk can become the reason social apps reopen.",
          "A workout can become the reason entertainment apps come back.",
          "A recurring habit quota can become the reason the rule returns without rebuilding it each time.",
          "A real free tier and simple paid unlocks make it easier to keep the app around long enough for the habit to prove itself.",
        ],
      },
      {
        heading: "Less resentment, more direction",
        body:
          "The goal is not to make blocking feel cute or harmless. The goal is to make it feel purposeful. If the user knows exactly what opens the apps again, the block becomes pressure toward something chosen instead of random punishment.",
      },
    ],
    relatedAnswerSlugs: [
      "app-blocker-that-is-not-annoying",
      "achievement-gated-app-blocker",
      "screen-time-limits-with-real-world-goals",
    ],
  },
  {
    slug: "app-blocker-that-unlocks-after-you-do-something-good",
    title: "An App Blocker That Unlocks After You Do Something Good",
    description:
      "The PlanKept idea in plain language: block distracting apps until the user completes a useful real-world action.",
    date: "2026-05-06",
    author: "Alek Jaltuszyk",
    sections: [
      {
        heading: "The phone can be a reward",
        body:
          "Many screen-time tools treat the phone as a thing to suppress. PlanKept treats distracting app access as something that can be earned back. That is a small shift, but it changes the emotional shape of the rule.",
      },
      {
        heading: "The unlock condition matters",
        body:
          "The important question is not only which apps are blocked. It is what has to happen before they return. PlanKept is designed for unlock conditions such as steps, workouts, routines, chores, study blocks, or recurring habit quotas. Free AI-assisted plan creation helps turn those intentions into a usable rule without much setup friction.",
      },
      {
        heading: "Proof makes the rule harder to fake",
        body:
          "Some goals can use phone data such as Apple Health steps or workouts when the user allows it. Other goals can use photos, screenshots, or a proof review flow. That makes the product flexible enough for many goal types, even when the phone cannot verify the result automatically. The point is not perfect surveillance. The point is enough friction to make the honest path easier than the fake one.",
      },
    ],
    relatedAnswerSlugs: [
      "app-blocker-that-unlocks-after-steps",
      "block-instagram-until-workout",
      "app-blocker-that-is-not-annoying",
    ],
  },
  {
    slug: "what-to-try-when-screen-time-limits-do-not-work",
    title: "What To Try When Screen Time Limits Do Not Work",
    description:
      "A practical framing for people who bypass timers, ignore limits, or delete blockers when the rule feels pointless.",
    date: "2026-05-06",
    author: "Alek Jaltuszyk",
    sections: [
      {
        heading: "Timers are easy to wait out",
        body:
          "Screen-time limits can help, but they often answer the wrong question. A timer says when an app becomes available again. It does not ask whether the user did the thing they were avoiding.",
      },
      {
        heading: "Try connecting the app to the avoided action",
        body:
          "If the problem is opening TikTok before studying, the better rule may be simple: TikTok waits until the study block is done. If the problem is Instagram before a walk, Instagram waits until the step goal clears.",
        bullets: [
          "Use blocks for apps that reliably break the plan.",
          "Use minute caps when lighter pressure is enough.",
          "Use recurrence when the same rule should come back again.",
          "Use the free version and free AI plan creation to test the loop before unlocking more advanced editing.",
        ],
      },
      {
        heading: "PlanKept's fit",
        body:
          "PlanKept is for people who want normal app-blocking functions, but also want a reason to keep the blocker installed. The rule has a path out: complete the real-life plan and provide enough proof for the active rule to clear. The no-subscription model helps too, because keeping the app around does not have to mean taking on another recurring payment.",
      },
    ],
    relatedAnswerSlugs: [
      "screen-time-limits-with-real-world-goals",
      "app-blocker-that-is-not-annoying",
      "recurring-app-blocker-for-habit-goals",
    ],
  },
] as const;

export const planKeptUpdatePosts: readonly PlanKeptUpdatePost[] = updatePosts.map((post) => {
  const path = buildUpdatePath(post.slug);

  return {
    ...post,
    path,
    href: withBase(path),
  };
});

export const planKeptContentHubs = {
  answers: {
    path: siteRoutes.apps.planKeptAnswers.path,
    href: siteRoutes.apps.planKeptAnswers.href,
    title: "PlanKept Answers",
    description:
      "Specific answers for people looking for app blockers that unlock after steps, workouts, habits, and real-world goals.",
  },
  comparisons: {
    path: siteRoutes.apps.planKeptComparisons.path,
    href: siteRoutes.apps.planKeptComparisons.href,
    title: "PlanKept Comparisons",
    description:
      "Fair comparisons that explain when PlanKept is the right fit, how its free and paid access model differs, and when established blockers may fit better.",
  },
  updates: {
    path: siteRoutes.apps.planKeptUpdates.path,
    href: siteRoutes.apps.planKeptUpdates.href,
    feedHref: siteRoutes.apps.planKeptUpdatesFeed.href,
    title: "PlanKept Updates",
    description:
      "PlanKept product updates for readers who want launch notes, practical use cases, proof examples, pricing updates, AI feature notes, privacy explanations, and changelog-style posts.",
  },
} as const;

export const planKeptUpdateThemes = [
  "Concrete use cases that show how proof-gated app blocking works in daily life.",
  "Product decisions that explain how bypasses, proof review, recurrence, blocks, minute caps, pricing, and AI-assisted setup should feel.",
  "Changelog notes that explain what changed, why it matters, and which user problem improved.",
  "Fair buyer guides that help people choose between PlanKept and other screen-time tools.",
] as const;

export const getPlanKeptAnswerPage = (slug: string) =>
  planKeptAnswerPages.find((page) => page.slug === slug);

export const getPlanKeptComparisonPage = (slug: string) =>
  planKeptComparisonPages.find((page) => page.slug === slug);

export const getPlanKeptUpdatePost = (slug: string) =>
  planKeptUpdatePosts.find((post) => post.slug === slug);
