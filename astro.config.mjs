import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import rome from "astro-rome";
import sitemap from "@astrojs/sitemap";
import node from "@astrojs/node";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), compress(), rome(), sitemap()],
  output: "server",
  adapter: netlify()
});