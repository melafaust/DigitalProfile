import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const endpoint = env.VITE_AZURE_OPENAI_ENDPOINT ?? "";
  const apiKey = env.VITE_AZURE_OPENAI_KEY ?? "";
  const deployment = env.VITE_AZURE_OPENAI_DEPLOYMENT ?? "gpt-4o-mini";

  // Split the endpoint into origin + path prefix for the proxy target
  let proxyTarget = "https://melashii-resource.openai.azure.com";
  try {
    const u = new URL(endpoint);
    proxyTarget = u.origin;
  } catch {
    // fallback to default above
  }

  const chatPath = `/openai/deployments/${deployment}/chat/completions`;

  return {
    base: "/",
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "src"),
      },
    },
    server: {
      port: 3000,
      host: true,
      proxy: {
        "/api/azure-chat": {
          target: proxyTarget,
          changeOrigin: true,
          rewrite: (p) => `${chatPath}?${p.split("?")[1] ?? ""}`,
          headers: { "api-key": apiKey },
        },
      },
    },
  };
});