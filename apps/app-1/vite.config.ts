import { defineConfig } from "vite";
import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [
    cloudflare({
      inspectorPort: false,
    }),
  ],
  server: {
    port: 5001,
  },
  clearScreen: false,
});
