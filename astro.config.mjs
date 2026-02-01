import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import netlify from "@astrojs/netlify";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  integrations: [react()],
  server: {host: "127.0.0.1"},
  vite: {
    plugins: [tailwindcss()],
  }
});
