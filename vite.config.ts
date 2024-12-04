import { defineConfig } from "vite";
import { brillarPlugin } from "./src/vite-plugin-brillar";

export default defineConfig({
  plugins: [brillarPlugin()],
});
