import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Counter from "./src/form/Counter";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        task: "task.html",
        hello: "hello-world.html",
        counter: "counter.html",
        note: "note.html",
        tugas2: "tugas2.html",
        profile: "profile.html",
      },
    },
  },
});
