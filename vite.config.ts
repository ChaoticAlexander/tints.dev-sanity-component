import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "tints.dev-components",
      fileName: (format) => `tints-dev-components.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      input: {
        styles: "src/styles.css",
      },
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    cssCodeSplit: true,
  },
});
