import type { APIRoute } from "astro";
import { planKeptContentHubs, planKeptUpdatePosts } from "../../../../config/planKeptContent";
import { planKeptConfig } from "../../../../config/site";
import { toAbsoluteSiteUrl } from "../../../../lib/discovery";

export const prerender = true;

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

const renderItem = (post: (typeof planKeptUpdatePosts)[number]) => {
  const link = toAbsoluteSiteUrl(post.path);
  const description = post.sections.map((section) => section.body).join("\n\n");

  return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid>${escapeXml(link)}</guid>
      <pubDate>${new Date(`${post.date}T00:00:00Z`).toUTCString()}</pubDate>
      <description>${escapeXml(description)}</description>
    </item>`;
};

const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(planKeptContentHubs.updates.title)}</title>
    <link>${escapeXml(toAbsoluteSiteUrl(planKeptContentHubs.updates.path))}</link>
    <description>${escapeXml(planKeptContentHubs.updates.description)}</description>
    <language>en</language>
    <managingEditor>${escapeXml(planKeptConfig.supportEmail)} (${escapeXml(planKeptConfig.name)})</managingEditor>
${planKeptUpdatePosts.map(renderItem).join("\n")}
  </channel>
</rss>
`;

export const GET: APIRoute = () =>
  new Response(body, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
