# Summarize on multiple levels exercise
# We gaan de commitregels groeperen en breaking changes laten markeren

# Voorbeeldprompt indien je -geen- script gebruikt:
Groepeer commitregels in Features, Fixes, Docs, Chore en markeer Breaking changes.
Schrijf heldere release notes in het Nederlands met een korte samenvatting bovenaan.

# Open Powershell (als administrator)
<windows-key>
Powershell
Run as administrator

# Navigeer naar je project directory 
cd <pad naar project>

# Zet een starttag zodat de tool weet waarvan tot waartoe:
git tag v0.0.0

# Prepareer de scripts in deze directory door te draaien:
npm install

# Maak wat veranderingen en commit die
echo testinhoud > notities.txt
git add .
git commit -m "Wijziging voor changelog"

# Stel je OpenAI key in, let op: geen spatie voor of na het = teken ;)
set OPENAI_API_KEY=JOUW_KEY

# Draai het changelog AI script
node scripts\ai-changelog.js

# Resultaat staat in: docs-ai\changelog\RELEASE_NOTES.md
Gelukt? Voer nu nog een wijziging door, zoals het aanpassen van de klassenaam in het project.

# Wil je bovenstaande als NPM commando toevoegen? Voeg aan scripts sectie in je 'package.json' toe:
"docs:ai:changelog": "node scripts/ai-changelog.js"
npm run docs:ai:changelog

