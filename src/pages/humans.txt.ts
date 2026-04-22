import type { APIRoute } from "astro";
import { planKeptConfig, siteConfig } from "../config/site";
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
- Voice of Self: separate product website linked from ${toAbsoluteSiteUrl(siteRoutes.apps.index.path)}

Key pages:
- Home: ${toAbsoluteSiteUrl(siteRoutes.home.path)}
- Apps: ${toAbsoluteSiteUrl(siteRoutes.apps.index.path)}
- PlanKept: ${toAbsoluteSiteUrl(siteRoutes.apps.planKept.path)}
- LLM context: ${toAbsoluteSiteUrl(siteRoutes.llms.path)}
- Expanded LLM context: ${toAbsoluteSiteUrl(siteRoutes.llmsFull.path)}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
