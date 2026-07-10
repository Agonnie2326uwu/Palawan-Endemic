import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      input: {
        index: "index.html",
        species: "species.html",
        map: "map.html",
        quiz: "quiz.html",
        rescue: "rescue.html",
        "404": "404.html",
      },
    },
  },
  server: {
    open: true,
  },
});
