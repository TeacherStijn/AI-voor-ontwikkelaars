import fs from "node:fs";
import path from "node:path";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function collect(dir, exts) {
  const out = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...collect(p, exts));
    else if (exts.includes(path.extname(e.name))) out.push(p);
  }
  return out;
}

const code = collect("src", [".js", ".ts", ".tsx"]).slice(0, 80);
const tests = fs.existsSync("test") ? collect("test", [".js", ".ts"]) : [];
const ref = fs.existsSync("docs") ? collect("docs", [".md", ".html"]) : [];
const corpus = [...code, ...tests, ...ref].map(f => `FILE ${f}\n${fs.readFileSync(f, "utf8")}`).join("\n\n");

const system = "Je schrijft kernachtige technische documentatie in Markdown. Nooit speculeren. Verwijs met relative links alleen als het doelbestand bestaat.";
const user = `
Maak per module een sectie met:
1. Korte beschrijving
2. Belangrijkste beslissingen
3. Publieke API in 3 tot 7 bullets
4. Bekende beperkingen
Baseer je uitsluitend op de meegeleverde bestanden.
`;

const res = await client.responses.create({
  model: "gpt-4.1-mini",
  input: [
    { role: "system", content: system },
    { role: "user", content: user },
    { role: "user", content: corpus.slice(0, 250000) }
  ]
});

fs.mkdirSync("docs-ai/summary", { recursive: true });
fs.writeFileSync("docs-ai/summary/overview.md", res.output_text ?? "", "utf8");
console.log("Samenvattingen geschreven naar docs-ai/summary");
