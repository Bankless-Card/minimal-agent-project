// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  output: "server",
  adapter: cloudflare({
    // Plain <img> handling; avoids adding a Cloudflare Images binding.
    imageService: "passthrough",
  }),
  // No KV-backed sessions: keeps each client on Workers + D1 only.
  session: false,
});
