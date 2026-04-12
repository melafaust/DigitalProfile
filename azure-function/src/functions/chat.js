const { app } = require("@azure/functions");

const AZURE_KEY = process.env.AZURE_OPENAI_KEY;
const AZURE_ENDPOINT = process.env.AZURE_OPENAI_ENDPOINT;
const DEPLOYMENT = process.env.AZURE_OPENAI_DEPLOYMENT;
const API_VERSION = process.env.AZURE_OPENAI_API_VERSION;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN; // e.g. https://username.github.io

app.http("chat", {
  methods: ["GET", "POST", "OPTIONS"],
  authLevel: "anonymous",
  route: "chat",
  handler: async (request, context) => {
    const origin = request.headers.get("origin") ?? "";
    const isAllowed =
      origin === "http://localhost:3000" ||
      origin.endsWith(".github.io") ||
      (ALLOWED_ORIGIN && origin === ALLOWED_ORIGIN);

    const corsHeaders = {
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Vary": "Origin",
      ...(isAllowed ? { "Access-Control-Allow-Origin": origin } : {}),
    };

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return { status: 200, headers: corsHeaders, body: "" };
    }

    if (request.method !== "POST") {
      return { status: 405, headers: corsHeaders, jsonBody: { error: "Method not allowed" } };
    }

    if (!AZURE_KEY || !AZURE_ENDPOINT || !DEPLOYMENT || !API_VERSION) {
      context.error("Missing environment variables");
      return { status: 500, headers: corsHeaders, jsonBody: { error: "Server misconfigured" } };
    }

    try {
      const body = await request.json();
      const url = `${AZURE_ENDPOINT}/openai/deployments/${DEPLOYMENT}/chat/completions?api-version=${API_VERSION}`;

      const upstream = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": AZURE_KEY,
        },
        body: JSON.stringify(body),
      });

      const data = await upstream.json();
      return {
        status: upstream.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        jsonBody: data,
      };
    } catch (err) {
      context.error("Proxy error:", err);
      return { status: 502, headers: corsHeaders, jsonBody: { error: "Failed to reach Azure OpenAI" } };
    }
  },
});
