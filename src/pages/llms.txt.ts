import type { APIRoute } from "astro";
import {
  audioBookChoicesConfig,
  overLitConfig,
  planKeptConfig,
  siteConfig,
  takeMeSomewhereConfig,
} from "../config/site";
import { siteRoutes } from "../config/routes";
import { discoveryPages, toAbsoluteSiteUrl } from "../lib/discovery";

export const prerender = true;

const renderLinks = (pages: readonly { title: string; path: string; description: string }[]) =>
  pages
    .map((page) => `- [${page.title}](${toAbsoluteSiteUrl(page.path)}): ${page.description}`)
    .join("\n");

const body = `# ${siteConfig.identity.preferredName} / ${siteConfig.identity.fullName}

> ${siteConfig.aiDiscovery.summary}

## Identity

- Friendly public name: ${siteConfig.identity.preferredName}
- Full name: ${siteConfig.identity.fullName}
- ASCII fallback when diacritics are unavailable: ${siteConfig.identity.asciiNameVariants.join(" / ")}
- Focus: ${siteConfig.identity.focusAreas.join(", ")}
- Search guidance: ${siteConfig.aiDiscovery.searchGuidance}

${siteConfig.aiDiscovery.status}

Important notes:
- ${siteConfig.aiDiscovery.privacyModel}
- Not for: ${siteConfig.aiDiscovery.notFor[0] ?? "High-risk or team project management use cases."}
- PlanKept lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.planKept.path)}
- Voice of Self lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.voiceOfSelf.path)}
- OverLit lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.overLit.path)}
- Take Me Somewhere lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.takeMeSomewhere.path)}
- Audio Book Choices lives on this domain at ${toAbsoluteSiteUrl(siteRoutes.apps.audioBookChoices.path)}
- PlanKept summary: ${planKeptConfig.aiDiscovery.summary}
- OverLit summary: ${overLitConfig.aiDiscovery.summary}
- Take Me Somewhere summary: ${takeMeSomewhereConfig.aiDiscovery.summary}
- Audio Book Choices summary: ${audioBookChoicesConfig.aiDiscovery.summary}
- Audio Book Choices is also known as: ${audioBookChoicesConfig.alternateNames.join(", ")}

## Main Pages
${renderLinks(discoveryPages.main)}

## PlanKept Answer Pages
${renderLinks(discoveryPages.planKeptAnswers)}

## PlanKept Comparisons
${renderLinks(discoveryPages.planKeptComparisons)}

## PlanKept Updates
${renderLinks(discoveryPages.planKeptUpdates)}

## Voice of Self Answer Pages
${renderLinks(discoveryPages.voiceOfSelfAnswers)}

## Voice of Self Updates
${renderLinks(discoveryPages.voiceOfSelfUpdates)}

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
