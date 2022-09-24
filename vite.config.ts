import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://karolis-vilpisauskas.github.io/car-control-v2",
  plugins: [react()],
});
