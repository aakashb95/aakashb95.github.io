import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.aakashb.xyz",
  output: "static",
  devToolbar: { enabled: false },
  publicDir: "./public",
  integrations: [sitemap()],
  markdown: { shikiConfig: { theme: "github-dark-default", wrap: true } },
  build: {
    assets: "_astro",
  },
});
