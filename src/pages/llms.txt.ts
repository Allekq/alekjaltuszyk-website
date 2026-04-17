import type { APIRoute } from "astro";
import { planKeptConfig, siteConfig } from "../config/site";
import { siteRoutes } from "../config/routes";
import { discoveryPages, toAbsoluteSiteUrl } from "../lib/discovery";

export const prerender = true;

const renderLinks = (pages: readonly { title: string; path: string; description: string }[]) =>
  pages
    .map((page) => `- [${page.title}](${toAbsoluteSiteUrl(page.path)}): ${page.description}`)
    .join("\n");

const body = `# ${siteConfig.name}

> ${siteConfig.aiDiscovery.summary}

${siteConfig.aiDiscovery.status}

Important notes:
- ${siteConfig.aiDiscovery.privacyModel}
- Not for: ${siteConfig.aiDiscovery.notFor[0] ?? "High-risk or team project management use cases."}
- PlanKept lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.planKept.path)}
- Voice of Self stays on its own separate site at ${siteRoutes.apps.voiceOfSelf.href}
- PlanKept summary: ${planKeptConfig.aiDiscovery.summary}

## Main Pages
${renderLinks(discoveryPages.main)}

## Legal
${renderLinks(discoveryPages.legal)}

## Optional
${renderLinks(discoveryPages.optional)}
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
