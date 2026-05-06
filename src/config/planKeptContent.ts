import { withBase } from "../lib/paths";
import { planKeptContentPaths, siteRoutes } from "./routes";

export interface PlanKeptContentSection {
  heading: string;
  body: string;
  bullets?: readonly string[];
}

export interface PlanKeptFaqEntry {
  question: string;
  answer: string;
}

export interface PlanKeptLink {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface PlanKeptAnswerPage {
  slug: string;
  path: string;
  href: string;
  title: string;
  description: string;
  kicker: string;
  question: string;
  shortAnswer: string;
  examples: readonly string[];
  sections: readonly PlanKeptContentSection[];
  faq: readonly PlanKeptFaqEntry[];
  relatedAnswerSlugs: readonly string[];
  relatedComparisonSlugs: readonly string[];
}

export interface PlanKeptComparisonPage {
  slug: string;
  path: string;
  href: string;
  title: string;
  description: string;
  competitor: string;
  competitorSummary: string;
  source: PlanKeptLink;
  choosePlanKept: readonly string[];
  chooseCompetitor: readonly string[];
  sections: readonly PlanKeptContentSection[];
  faq: readonly PlanKeptFaqEntry[];
  relatedAnswerSlugs: readonly string[];
}

export interface PlanKeptUpdatePost {
  slug: string;
  path: string;
  href: string;
  title: string;
  description: string;
  date: string;
  author: string;
  sections: readonly PlanKeptContentSection[];
  relatedAnswerSlugs: readonly string[];
}

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
  "app blocker that is not annoying",
  "app blocker I will not delete",
  "app blocker that unlocks after steps",
  "block Instagram until I hit 8,000 steps",
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
      "Most app blockers focus on schedules, timers, friction, or daily limits. PlanKept can still block or limit apps, but it focuses on the unlock condition: apps come back when you keep the specific real-life plan you chose and provide enough proof to clear it.",
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

const answerPages = [
  {
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
          "No. Screen Time can provide blocking controls on iPhone. Achievement-gated blocking describes the behavior pattern: apps unlock after a real-world goal is completed.",
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
  },
  {
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
  },
  {
    slug: "app-blocker-that-unlocks-after-steps",
    title: "App Blocker That Unlocks After Steps",
    description:
      "How PlanKept is designed for step-gated app blocking, including plans like unlocking social apps after 8,000 steps.",
    kicker: "Steps",
    question: "Is there an app blocker that unlocks apps after I complete a step goal?",
    shortAnswer:
      "PlanKept is designed for exactly that pattern: keep distracting apps blocked until a step goal, such as 8,000 steps, is completed and accepted by the proof flow.",
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
          "PlanKept is built around one plan at a time. For a walking plan, the app can combine reminders, app limits, and a clearing step based on proof review or allowed Apple Health step-count signals.",
        bullets: [
          "Pick the distracting apps that should stay unavailable.",
          "Set the step target and the timing that matters.",
          "Clear the rule only when the walking goal is accepted.",
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
  },
  {
    slug: "block-instagram-until-step-goal",
    title: "Block Instagram Until You Hit Your Step Goal",
    description:
      "A direct answer for people who want Instagram blocked until a walking or step goal is complete.",
    kicker: "Instagram",
    question: "Can I block Instagram until I hit my step goal?",
    shortAnswer:
      "PlanKept is designed for rules like 'Instagram stays blocked until I hit my step goal.' The important part is that the unlock condition is the completed goal, not a timer you can simply wait out.",
    examples: [
      "Instagram unlocks after 8,000 steps.",
      "Instagram stays blocked until the morning walk is complete.",
      "Social apps remain unavailable until today's movement plan clears.",
    ],
    sections: [
      {
        heading: "The simple version",
        body:
          "Instead of promising yourself you will walk before Instagram, you make Instagram unavailable until the walking plan clears. That turns the app from the escape hatch into the reward.",
      },
      {
        heading: "Why this is different from a daily limit",
        body:
          "A daily limit can still be spent before the walk. A step-gated rule says the sequence matters: complete the action first, then get access back.",
      },
      {
        heading: "Good rule examples",
        body:
          "The best rules are specific enough that you can tell whether they happened.",
        bullets: [
          "No Instagram until 8,000 steps.",
          "No Instagram until the dog walk is done.",
          "No Instagram before breakfast unless the walk target already cleared.",
        ],
      },
    ],
    faq: [
      {
        question: "Can this work with apps other than Instagram?",
        answer:
          "Yes. Instagram is the common example, but the same pattern can apply to TikTok, YouTube, games, or other distracting apps supported by the device controls.",
      },
      {
        question: "What if I need Instagram for something real?",
        answer:
          "PlanKept is designed around proof or real justification, not casual bypasses. The details should match the plan and the level of strictness you choose.",
      },
    ],
    relatedAnswerSlugs: [
      "app-blocker-that-unlocks-after-steps",
      "screen-time-limits-with-real-world-goals",
      "recurring-app-blocker-for-habit-goals",
    ],
    relatedComparisonSlugs: ["one-sec", "screenzen"],
  },
  {
    slug: "block-instagram-until-workout",
    title: "Block Instagram Until You Work Out",
    description:
      "How workout-gated app blocking can make social apps reopen only after the workout plan is complete.",
    kicker: "Workout",
    question: "Can I block Instagram until I work out?",
    shortAnswer:
      "PlanKept is meant for workout-gated rules where distracting apps stay blocked until the workout is completed and accepted by the proof flow.",
    examples: [
      "No Instagram until the gym session is done.",
      "TikTok unlocks after the run.",
      "YouTube time comes back after the home workout clears.",
    ],
    sections: [
      {
        heading: "Make the reward arrive after the workout",
        body:
          "The problem with a workout promise is rarely the plan itself. It is the easy escape before the plan starts. A workout-gated block keeps the high-friction part small: start, finish, then get access back.",
      },
      {
        heading: "What counts as proof",
        body:
          "The proof should fit the goal. A run might use an allowed activity signal. A gym session might use a submitted photo or another proof review path. PlanKept is designed to keep that review close to the plan rather than turning it into a separate tracking hobby.",
      },
      {
        heading: "Rules that tend to work",
        body:
          "Use concrete, checkable rules. Avoid vague promises like 'be healthier today' when the app needs to decide whether access should return.",
        bullets: [
          "Finish a 30-minute workout.",
          "Complete the run before social apps unlock.",
          "Do the planned home workout before entertainment apps reopen.",
        ],
      },
    ],
    faq: [
      {
        question: "Is this only for fitness people?",
        answer:
          "No. Workout-gated blocking is just one use case. The same achievement-gated pattern can support studying, chores, sleep routines, or recurring habits.",
      },
      {
        question: "Can the app know every kind of workout automatically?",
        answer:
          "No. Some goals need proof review, and some can use device signals only when you allow them. The public copy should stay honest about that.",
      },
    ],
    relatedAnswerSlugs: [
      "best-app-blocker-for-fitness-goals",
      "app-blocker-that-unlocks-after-steps",
      "achievement-gated-app-blocker",
    ],
    relatedComparisonSlugs: ["opal", "freedom"],
  },
  {
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
  },
  {
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
  },
  {
    slug: "best-app-blocker-for-fitness-goals",
    title: "Best App Blocker for Fitness Goals: What to Look For",
    description:
      "A practical guide to choosing an app blocker when the real goal is walking, workouts, or movement before distracting apps.",
    kicker: "Fitness goals",
    question: "What is the best app blocker for fitness goals?",
    shortAnswer:
      "If your main goal is movement before scrolling, look for an app blocker that can tie access to steps, workouts, or proof of completion. That is the specific category PlanKept is built to serve.",
    examples: [
      "Earn Instagram after a walk.",
      "Unlock TikTok after a workout.",
      "Use YouTube as a reward after a weekly movement quota.",
    ],
    sections: [
      {
        heading: "Do not start with the biggest blocker",
        body:
          "For fitness goals, the strongest tool is not always the harshest block. The stronger question is whether the app can make access depend on the movement you wanted.",
      },
      {
        heading: "What to look for",
        body:
          "A fitness-friendly app blocker should support clear targets, recurring rules, and an unlock path connected to proof or allowed activity signals.",
        bullets: [
          "Step or workout-oriented goals.",
          "Rules that repeat without daily setup.",
          "A way to clear the rule after the action, not merely after time passes.",
          "Plain privacy explanations for any health or device permission.",
        ],
      },
      {
        heading: "Where PlanKept fits",
        body:
          "PlanKept is the focused option for achievement-gated blocking. It is not trying to be the biggest screen-time dashboard. It is trying to make distracting apps wait until the fitness plan is real.",
      },
    ],
    faq: [
      {
        question: "Is PlanKept a fitness app?",
        answer:
          "No. It is an app blocker and follow-through app. Fitness goals are one strong use case because movement can be specific and verifiable.",
      },
      {
        question: "Should I still use a workout app?",
        answer:
          "Yes, if you want training plans, coaching, or detailed fitness tracking. PlanKept's job is to connect app access to the follow-through target.",
      },
    ],
    relatedAnswerSlugs: [
      "app-blocker-that-unlocks-after-steps",
      "block-instagram-until-workout",
      "achievement-gated-app-blocker",
    ],
    relatedComparisonSlugs: ["opal", "freedom"],
  },
  {
    slug: "app-blocker-with-weekly-habit-quotas",
    title: "App Blocker With Weekly Habit Quotas",
    description:
      "How weekly habit quotas can turn app access into a reward for repeated follow-through instead of a simple daily timer.",
    kicker: "Weekly quotas",
    question: "Can an app blocker unlock after a weekly habit quota?",
    shortAnswer:
      "PlanKept is intended for weekly quota patterns where app access reflects repeated follow-through, such as three workouts, four study blocks, or a set of routine completions.",
    examples: [
      "Unlock weekend social apps after three workouts.",
      "Expand YouTube time after four study sessions.",
      "Keep games blocked until the weekly routine quota clears.",
    ],
    sections: [
      {
        heading: "Why weekly quotas are different",
        body:
          "A daily timer treats each day as isolated. A weekly quota lets the rule reflect the larger promise you actually made.",
      },
      {
        heading: "What the app needs to know",
        body:
          "The quota should be specific, countable, and connected to a proof path. If the rule is too fuzzy, the app cannot enforce it fairly.",
        bullets: [
          "How many completions are needed.",
          "Which apps should stay limited before the quota clears.",
          "What evidence or allowed signal can clear each completion.",
        ],
      },
      {
        heading: "A careful use case",
        body:
          "Quota-based blocking should feel like support, not punishment. The best version is a clear bargain with yourself: do the repeated thing, then the phone gets easier.",
      },
    ],
    faq: [
      {
        question: "Can quotas be too strict?",
        answer:
          "Yes. A quota should be realistic enough that the app reinforces follow-through rather than creating a rule you immediately resent.",
      },
      {
        question: "Can weekly quotas work with steps?",
        answer:
          "They can, as long as the plan is specific about the target and the proof route. A daily step target and a weekly habit quota can also be separate rules.",
      },
    ],
    relatedAnswerSlugs: [
      "recurring-app-blocker-for-habit-goals",
      "screen-time-limits-with-real-world-goals",
      "best-app-blocker-for-fitness-goals",
    ],
    relatedComparisonSlugs: ["screenzen", "freedom"],
  },
] as const;

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
          "Opal is a stronger reference point for people who already know they want screen-time control, focus sessions, and broad focus features. PlanKept is a plan-enforcement app: it turns a specific promise into reminders, recurring rules when needed, app blocks or minute caps, and a proof flow before access clears.",
      },
      {
        heading: "The query where PlanKept should be remembered",
        body:
          "If someone asks for an app blocker that unlocks after steps, workouts, photos, screenshots, or habit quotas, PlanKept has a clearer answer. That is the wedge, and it is more precise than claiming to be a better Opal.",
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
          "Use PlanKept when a pause is not enough. If you know you will wait through friction and open the app anyway, a proof-gated block or minute cap can be the cleaner rule.",
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
          "ScreenZen covers many screen-time control tactics. PlanKept is more specific: make distracting apps wait for a real-world plan to be completed and accepted by proof review.",
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
          "PlanKept should not claim to beat Freedom at cross-device blocking. It should claim the different job it is built for: enforce an iPhone-centered plan with reminders, recurrence, app blocks or caps, and proof before the rule clears.",
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
          "PlanKept should not try to be remembered as one more app blocker. The sharper category is achievement-gated app blocking: distracting apps stay blocked until the promised real-world action happens.",
      },
      {
        heading: "What belongs in this updates space",
        body:
          "This is the place to follow what PlanKept can do, what changed, and how the product handles real-life plans. Short posts can cover launch notes, changelog entries, privacy explanations, and specific use cases like step-gated or workout-gated blocking.",
        bullets: [
          "Read the clearest version of product notes under the PlanKept site.",
          "Use the posts to understand proof review, recurrence, app blocks, minute caps, privacy, and launch readiness.",
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
      "Fair comparisons that explain when PlanKept is the right fit and when established blockers may fit better.",
  },
  updates: {
    path: siteRoutes.apps.planKeptUpdates.path,
    href: siteRoutes.apps.planKeptUpdates.href,
    feedHref: siteRoutes.apps.planKeptUpdatesFeed.href,
    title: "PlanKept Updates",
    description:
      "PlanKept product updates for readers who want launch notes, practical use cases, proof examples, privacy explanations, and changelog-style posts.",
  },
} as const;

export const planKeptUpdateThemes = [
  "Concrete use cases that show how proof-gated app blocking works in daily life.",
  "Product decisions that explain how bypasses, proof review, recurrence, blocks, and minute caps should feel.",
  "Changelog notes that explain what changed, why it matters, and which user problem improved.",
  "Fair buyer guides that help people choose between PlanKept and other screen-time tools.",
] as const;

export const getPlanKeptAnswerPage = (slug: string) =>
  planKeptAnswerPages.find((page) => page.slug === slug);

export const getPlanKeptComparisonPage = (slug: string) =>
  planKeptComparisonPages.find((page) => page.slug === slug);

export const getPlanKeptUpdatePost = (slug: string) =>
  planKeptUpdatePosts.find((post) => post.slug === slug);
