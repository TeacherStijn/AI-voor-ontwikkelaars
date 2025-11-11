import fs from "node:fs";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
const scripts = Object.entries(pkg.scripts || {}).map(([k, v]) => `${k}: ${v}`).join("\n");
const readme = fs.existsSync("README.md") ? fs.readFileSync("README.md", "utf8") : "";
const compose = fs.existsSync("docker-compose.yml") ? fs.readFileSync("docker-compose.yml", "utf8") : "";
const envex = fs.existsSync(".env.example") ? fs.readFileSync(".env.example", "utf8") : "";

const user = `
Genereer twee documenten in Markdown:
1. Onboarding met prerequisites, installatie, eerste run, test draaien, debug in VS Code en WebStorm
2. Runbook met incident scenario's start niet, poort bezet, database down en hoe te verifiëren
Gebruik alleen de meegeleverde inhoud.
`;

const res = await client.responses.create({
  model: "gpt-4.1-mini",
  input: [
    { role: "user", content: user },
    { role: "user", content: `SCRIPTS\n${scripts}` },
    { role: "user", content: `README\n${readme}` },
    { role: "user", content: `COMPOSE\n${compose}` },
    { role: "user", content: `ENV_EXAMPLE\n${envex}` }
  ]
});

fs.mkdirSync("docs-ai/onboarding", { recursive: true });
fs.writeFileSync("docs-ai/onboarding/ONBOARDING.md", res.output_text ?? "", "utf8");
console.log("Onboarding en runbook geschreven naar docs-ai/onboarding/ONBOARDING.md");
