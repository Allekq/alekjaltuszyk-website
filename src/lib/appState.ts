import {
  appDirectory,
  type AppDirectoryItem,
  type AppPlatform,
} from "../config/routes";

/**
 * Derived facts about the app portfolio.
 *
 * `appDirectory` in `src/config/routes.ts` is the single source of truth for
 * which apps exist and which of them are actually released. Every count,
 * numeral, plural, and app-name list in public copy should come from here so
 * that adding or shipping an app updates the wording automatically.
 */

const numberWords = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
] as const;

/** Spells small numbers out, which is the house style for prose. */
export const spellNumber = (value: number) =>
  numberWords[value] ?? String(value);

export const capitalizeFirst = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

/** "A", "A and B", "A, B, and C" — Oxford comma, matching existing copy. */
export const formatNameList = (names: readonly string[]) => {
  if (names.length === 0) {
    return "";
  }

  if (names.length === 1) {
    return names[0];
  }

  if (names.length === 2) {
    return `${names[0]} and ${names[1]}`;
  }

  return `${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}`;
};

export const pluralize = (count: number, singular: string, plural: string) =>
  count === 1 ? singular : plural;

const toNames = (items: readonly AppDirectoryItem[]) =>
  items.map((item) => item.name);

export const releasedApps = appDirectory.filter(
  (item) => item.releaseStage === "released",
);
export const unreleasedApps = appDirectory.filter(
  (item) => item.releaseStage !== "released",
);

export const appCount = appDirectory.length;
export const releasedAppCount = releasedApps.length;
export const unreleasedAppCount = unreleasedApps.length;

export const appCountWord = spellNumber(appCount);
export const releasedAppCountWord = spellNumber(releasedAppCount);

export const appNames = toNames(appDirectory);
export const releasedAppNames = toNames(releasedApps);
export const unreleasedAppNames = toNames(unreleasedApps);

export const appNameList = formatNameList(appNames);
export const releasedAppNameList = formatNameList(releasedAppNames);
export const unreleasedAppNameList = formatNameList(unreleasedAppNames);

/**
 * Every platform the portfolio ships on, in the order the apps declare them,
 * with no repeats. Adding a platform to an `appDirectory` entry widens this on
 * its own.
 */
export const platformNames = appDirectory.reduce<AppPlatform[]>(
  (names, item) => {
    for (const platform of item.platforms) {
      if (!names.includes(platform)) {
        names.push(platform);
      }
    }

    return names;
  },
  [],
);

/** "iOS" / "iOS and Android" / "iOS, Android, and visionOS". */
export const platformNameList = formatNameList(platformNames);

/**
 * "iPhone apps" is only true while every app is iOS-only. As soon as one
 * ships elsewhere the copy widens to "mobile apps" on its own.
 */
const everyAppIsIOSOnly =
  platformNames.length === 1 && platformNames[0] === "iOS";

export const appNoun = pluralize(appCount, "app", "apps");
export const platformAppNoun = everyAppIsIOSOnly
  ? `iPhone ${appNoun}`
  : `mobile ${appNoun}`;

/** "Five apps" / "One app". */
export const appCountPhrase = `${appCountWord} ${appNoun}`;
/** "Five mobile apps" / "One iPhone app". */
export const platformAppCountPhrase = `${appCountWord} ${platformAppNoun}`;

/**
 * Directory chips plus an honest status chip. The status chip disappears on its
 * own once the app is marked released, so no card copy has to be edited.
 */
export const directoryChips = (item: AppDirectoryItem): readonly string[] =>
  item.releaseStage === "released"
    ? item.chips
    : [...item.chips, "Not released yet"];

/**
 * Honest one-sentence description of the released/unreleased split, e.g.
 * "Four are live on the App Store, and Audio Book Choices is not released yet."
 */
export const releaseStatusSentence = (() => {
  if (unreleasedAppCount === 0) {
    return `All ${appCountWord} are live on the App Store.`;
  }

  const releasedPart =
    releasedAppCount === 0
      ? "None are released yet"
      : `${capitalizeFirst(releasedAppCountWord)} ${pluralize(releasedAppCount, "is", "are")} live on the App Store`;

  return `${releasedPart}, and ${unreleasedAppNameList} ${pluralize(unreleasedAppCount, "is", "are")} not released yet.`;
})();
