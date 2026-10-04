import { defineConfig } from "astro/config";
import { siteBasePath, siteOrigin } from "./site.config.mjs";
import responsiveTables from "./scripts/rehype-responsive-tables.mjs";

export default defineConfig({
  site: siteOrigin,
  base: siteBasePath,
  markdown: {
    rehypePlugins: [responsiveTables],
  },
  vite: {
    cacheDir: ".vite",
  },
});
