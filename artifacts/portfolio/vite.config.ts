import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  base: "/DigitalProfile/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Modern way to define the path to your src folder
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  server: {
    port: 3000,
    host: true,
  },
});