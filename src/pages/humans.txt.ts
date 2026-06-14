import type { APIRoute } from "astro";
import { overLitConfig, planKeptConfig, siteConfig, takeMeSomewhereConfig } from "../config/site";
import { siteRoutes } from "../config/routes";
import { toAbsoluteSiteUrl } from "../lib/discovery";

export const prerender = true;

const body = `# ${siteConfig.identity.preferredName}

Full name: ${siteConfig.identity.fullName}
Alternate search names: ${siteConfig.aiDiscovery.nameVariants.join(", ")}

Bio:
${siteConfig.identity.shortBio}

Current products:
- PlanKept: ${planKeptConfig.aiDiscovery.summary}
- Voice of Self: internal product page under ${toAbsoluteSiteUrl(siteRoutes.apps.voiceOfSelf.path)}
- OverLit: ${overLitConfig.aiDiscovery.summary}
- Take Me Somewhere: ${takeMeSomewhereConfig.aiDiscovery.summary}

Key pages:
- Home: ${toAbsoluteSiteUrl(siteRoutes.home.path)}
- Apps: ${toAbsoluteSiteUrl(siteRoutes.apps.index.path)}
- PlanKept: ${toAbsoluteSiteUrl(siteRoutes.apps.planKept.path)}
- Voice of Self: ${toAbsoluteSiteUrl(siteRoutes.apps.voiceOfSelf.path)}
- OverLit: ${toAbsoluteSiteUrl(siteRoutes.apps.overLit.path)}
- Take Me Somewhere: ${toAbsoluteSiteUrl(siteRoutes.apps.takeMeSomewhere.path)}
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
