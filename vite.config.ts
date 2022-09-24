import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://karolis-vilpisauskas.github.io/car-control-v2/",
  plugins: [react()],
});
