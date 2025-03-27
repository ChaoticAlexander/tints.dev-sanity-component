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
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
  // Development page configuration
  root: process.env.NODE_ENV === 'development' ? 'dev' : '.',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
});
