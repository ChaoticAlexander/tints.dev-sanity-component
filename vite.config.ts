import { defineConfig } from "vite";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths(), libInjectCss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "tints.dev-components",
      fileName: (format) => `tints-dev-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
