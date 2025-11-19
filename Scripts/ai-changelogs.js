import { execSync } from "node:child_process";
import fs from "node:fs";
import OpenAI from "openai";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

function sh(cmd) { return execSync(cmd, { encoding: "utf8" }).trim(); }

const lastTag = sh("git describe --tags --abbrev=0");
const commits = sh(`git log ${lastTag}..HEAD --pretty=format:"%h %s"`);

const user = `
Groepeer deze commitregels in Features Fixes Docs Chore en markeer Breaking changes expliciet.
Schrijf release notes in helder Nederlands met een korte samenvatting bovenaan.
`;

const res = await client.responses.create({
  model: "gpt-4.1-mini",
  input: [{ role: "user", content: user }, { role: "user", content: commits }]
});

fs.mkdirSync("docs-ai/changelog", { recursive: true });
fs.writeFileSync("docs-ai/changelog/RELEASE_NOTES.md", res.output_text ?? "", "utf8");
console.log("Release notes naar docs-ai/changelog/RELEASE_NOTES.md");
