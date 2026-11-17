import { defineConfig } from "astro/config";
import { siteBasePath, siteOrigin } from "./site.config.mjs";
import responsiveTables from "./scripts/rehype-responsive-tables.mjs";
import codeWorkroomMasthead from "./scripts/remark-code-workroom-masthead.mjs";

export default defineConfig({
  site: siteOrigin,
  base: siteBasePath,
  markdown: {
    remarkPlugins: [codeWorkroomMasthead],
    rehypePlugins: [responsiveTables],
  },
  vite: {
    cacheDir: ".vite",
  },
});
