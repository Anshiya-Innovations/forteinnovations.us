import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    conditions: ['production'],
  },
  build: {
    sourcemap: true,
  },
});
