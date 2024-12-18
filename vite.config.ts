import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    environment: "happy-dom",
    setupFiles: "./src/vitest.setup.ts",

    // This is necessary for proper cleanup between each test
    // https://github.com/testing-library/vue-testing-library/issues/296
    globals: true,
  },
});
