import type { APIRoute } from "astro";
import { siteConfig } from "../config/site";
import { appDirectory, siteRoutes } from "../config/routes";
import { releaseStatusSentence } from "../lib/appState";
import { toAbsoluteSiteUrl } from "../lib/discovery";

export const prerender = true;

const currentProductLines = appDirectory
  .map(
    (item) =>
      `- ${item.name} (${item.releaseStage === "released" ? "released" : "not released yet"}): ${item.description}`,
  )
  .join("\n");

const body = `# ${siteConfig.identity.preferredName}

Full name: ${siteConfig.identity.fullName}
Alternate search names: ${siteConfig.aiDiscovery.nameVariants.join(", ")}

Bio:
${siteConfig.identity.shortBio}

Current products (${releaseStatusSentence}):
${currentProductLines}

Key pages:
- Home: ${toAbsoluteSiteUrl(siteRoutes.home.path)}
- Apps: ${toAbsoluteSiteUrl(siteRoutes.apps.index.path)}
- PlanKept: ${toAbsoluteSiteUrl(siteRoutes.apps.planKept.path)}
- Voice of Self: ${toAbsoluteSiteUrl(siteRoutes.apps.voiceOfSelf.path)}
- OverLit: ${toAbsoluteSiteUrl(siteRoutes.apps.overLit.path)}
- Take Me Somewhere: ${toAbsoluteSiteUrl(siteRoutes.apps.takeMeSomewhere.path)}
- AudioChoices: ${toAbsoluteSiteUrl(siteRoutes.apps.audioBookChoices.path)}
- PlanKept answers: ${toAbsoluteSiteUrl(siteRoutes.apps.planKeptAnswers.path)}
- PlanKept comparisons: ${toAbsoluteSiteUrl(siteRoutes.apps.planKeptComparisons.path)}
- PlanKept updates: ${toAbsoluteSiteUrl(siteRoutes.apps.planKeptUpdates.path)}
- LLM context: ${toAbsoluteSiteUrl(siteRoutes.llms.path)}
- Expanded LLM context: ${toAbsoluteSiteUrl(siteRoutes.llmsFull.path)}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
