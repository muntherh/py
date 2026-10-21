import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Relative base so the built site works from any static host or sub-folder.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  worker: { format: "es" },
  build: {
    target: "es2022",
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        // Separate, cacheable chunks: framework, editor, and course content.
        manualChunks(id) {
          if (id.includes("node_modules/@codemirror") || id.includes("node_modules/@lezer") || id.includes("node_modules/@uiw")) return "editor";
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler") || id.includes("node_modules/react-router")) return "react";
          if (id.includes("/src/data/") && !id.includes("/src/data/exams/answers")) return "content";
          return undefined;
        },
      },
    },
  },
  server: { port: 5173 },
  preview: { port: 4173 },
});
