// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When VERCEL=1 (Vercel build), disable the Cloudflare plugin and emit a
// static SPA shell so `dist/client/index.html` exists for static hosting.
// In the Lovable sandbox / Cloudflare build the original SSR setup is kept.
const isVercel = !!process.env.VERCEL;

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: isVercel
    ? {
        spa: {
          enabled: true,
          // Write the SPA shell as dist/client/index.html (default is /_shell)
          prerender: { outputPath: "/index" },
        },
      }
    : { server: { entry: "server" } },
});
