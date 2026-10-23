import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      server: { entry: "server" },
      pages: [
        { path: "/" },
        { path: "/servicios" },
        { path: "/aviso-legal" },
        { path: "/politica-privacidad" },
        { path: "/politica-cookies" },
      ],
      prerender: {
        enabled: true,
        autoStaticPathsDiscovery: false,
        crawlLinks: false,
        failOnError: true,
      },
    }),
    // Node is used only to render HTML during the build. Pages serves dist/ statically.
    nitro({ preset: "node-server" }),
    react(),
    {
      name: "afrodita:export-static",
      enforce: "post",
      buildApp: {
        order: "post",
        async handler(builder) {
          const client = builder.environments['client'];
          if (!client) throw new Error("Static export requires the client build environment.");
          const { exportStaticSite } = await import("./scripts/export-static.mjs");
          await exportStaticSite(client.config.build.outDir);
        },
      },
    },
  ],
  resolve: { dedupe: ["react", "react-dom"] },
  server: { host: "::", port: 8080, strictPort: true, allowedHosts: true },
  preview: { host: "::", port: 4173 },
});
