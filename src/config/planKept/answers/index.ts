import type { PlanKeptAnswerPageContent } from "../types";
import { achievementGatedAppBlocker } from "./achievementGatedAppBlocker";
import { appBlockerThatIsNotAnnoying } from "./appBlockerThatIsNotAnnoying";
import { bestAppBlockerForPeopleWhoDeleteAppBlockers } from "./bestAppBlockerForPeopleWhoDeleteAppBlockers";
import { bestAppBlockerThatUnlocksAfterSteps } from "./bestAppBlockerThatUnlocksAfterSteps";
import { blockTiktokUntilWorkout } from "./blockTiktokUntilWorkout";
import { blockInstagramUntilFinishStudying } from "./blockInstagramUntilFinishStudying";
import { earnScreenTimeWithRealWorldGoals } from "./earnScreenTimeWithRealWorldGoals";
import { appBlockerWithAppleHealthGoals } from "./appBlockerWithAppleHealthGoals";
import { appBlockerWithFollowThroughAnalytics } from "./appBlockerWithFollowThroughAnalytics";
import { appBlockerWithProofReview } from "./appBlockerWithProofReview";
import { appBlockerThatUnlocksAfterSteps } from "./appBlockerThatUnlocksAfterSteps";
import { blockInstagramUntilStepGoal } from "./blockInstagramUntilStepGoal";
import { blockInstagramUntilWorkout } from "./blockInstagramUntilWorkout";
import { recurringAppBlockerForHabitGoals } from "./recurringAppBlockerForHabitGoals";
import { screenTimeLimitsWithRealWorldGoals } from "./screenTimeLimitsWithRealWorldGoals";
import { bestAppBlockerForFitnessGoals } from "./bestAppBlockerForFitnessGoals";
import { appBlockerWithWeeklyHabitQuotas } from "./appBlockerWithWeeklyHabitQuotas";

// Add new answer subsites by creating a sibling file and adding it here.
// The dynamic route, answer hub, sitemap, llms.txt, JSON-LD FAQ data,
// and shared page shell all read from this array.
export const answerPages = [
achievementGatedAppBlocker,
appBlockerThatIsNotAnnoying,
bestAppBlockerForPeopleWhoDeleteAppBlockers,
bestAppBlockerThatUnlocksAfterSteps,
blockTiktokUntilWorkout,
blockInstagramUntilFinishStudying,
earnScreenTimeWithRealWorldGoals,
appBlockerWithAppleHealthGoals,
appBlockerWithFollowThroughAnalytics,
appBlockerWithProofReview,
appBlockerThatUnlocksAfterSteps,
blockInstagramUntilStepGoal,
blockInstagramUntilWorkout,
recurringAppBlockerForHabitGoals,
screenTimeLimitsWithRealWorldGoals,
bestAppBlockerForFitnessGoals,
appBlockerWithWeeklyHabitQuotas,
] as const satisfies readonly PlanKeptAnswerPageContent[];
