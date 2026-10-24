import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the built site works from any static host or sub-folder.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    target: "es2022",
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler") || id.includes("node_modules/react-router")) return "react";
          if (id.includes("/src/data/")) return "content";
          return undefined;
        },
      },
    },
  },
  server: { port: 5174 },
  preview: { port: 4174 },
});
