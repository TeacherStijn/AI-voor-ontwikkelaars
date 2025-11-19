# Summarize on multiple levels exercise
## Overzichten per module, architectuur, use cases, enzovoorts

### Voorbeeldprompt indien je -geen- script gebruikt:
> System prompt = Je schrijft kernachtige technische documentatie in Markdown. Nooit speculeren. Verwijs met relative links alleen als het doelbestand bestaat.";
>
> User prompt = Maak per module een sectie met:
>
> 1. Korte beschrijving
>
> 2. Belangrijkste beslissingen
>
> 3. Publieke API in 3 tot 7 bullets
>
> 4. Bekende beperkingen
>
> Baseer je uitsluitend op de meegeleverde bestanden.

### Open een command prompt (cmd)
> [windows-key]-[R]
>
> Cmd

### Navigeer naar je project directory 
```
cd <pad naar project>
```

### Prepareer de scripts in deze directory door te draaien:
> npm install

### Stel je OpenAI key in, let op: geen spatie voor of na het = teken ;)
> set OPENAI_API_KEY=JOUW_KEY

### Draai het changelog AI script
> node scripts\ai-summary.js

### Resultaat staat in: docs-ai\summary\overview.md

### Wil je bovenstaande als NPM commando toevoegen? Voeg aan scripts sectie in je 'package.json' toe:
> "docs:ai:summary": "node scripts/ai-summary.js"
>
> npm run docs:ai:summary

