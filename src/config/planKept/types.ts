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

export interface PlanKeptAnswerPageContent {
  slug: string;
  title: string;
  seoTitle?: string;
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

export interface PlanKeptAnswerPage extends PlanKeptAnswerPageContent {
  path: string;
  href: string;
}

export interface PlanKeptComparisonPage {
  slug: string;
  path: string;
  href: string;
  title: string;
  seoTitle?: string;
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
  seoTitle?: string;
  description: string;
  date: string;
  author: string;
  sections: readonly PlanKeptContentSection[];
  relatedAnswerSlugs: readonly string[];
}
