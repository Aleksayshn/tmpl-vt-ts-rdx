import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development, production, etc.)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(), // React plugin to support JSX and React-specific optimizations
      tsconfigPaths(), // Plugin to automatically resolve paths based on tsconfig.json
    ],
    base: "/tmpl-vt-ts-rdx/",
    // Resolve options for module paths
    resolve: {
      alias: {
        // Define aliases here, for example:
        // 'components': resolve(__dirname, 'src/components'),
        "@": resolve("./src"),
      },
    },

    // Build options
    build: {
      outDir: "dist", // Change if you want a different folder for build outputs
      sourcemap: true, // Generate source maps for debugging
      // Additional Rollup options can be specified here
      rollupOptions: {
        // Configuration for external resources and code splitting can go here
      },
    },

    // Development server options
    server: {
      port: 3000, // Set your preferred port
      open: true, // Automatically open the app in the browser
      proxy: {
        // Proxy settings if you need to proxy API requests
        // '/api': 'http://localhost:4000',
      },
    },

    // Define global constants to be replaced during build
    // define: {
    //   __APP_ENV__: JSON.stringify(env.APP_ENV),
    // },

    // Dependency optimization options
    optimizeDeps: {
      include: [
        // Specify dependencies to pre-bundle here
      ],
    },

    // Options for static analysis and code transformation
    esbuild: {
      // Configuration for esbuild, like minification settings
    },

    // Options for SSR (Server-Side Rendering) if needed
    ssr: {
      // Configuration for SSR
    },
  };
});
