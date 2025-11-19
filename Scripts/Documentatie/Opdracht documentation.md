# Generating basic HTML documentation

### Open commandline (als administrator)
> [windows-key]-[R]
>
> Cmd

### Navigeer naar je project directory 
```
cd <pad naar project>
```

### Installeer globaal de JSDoc documentatie tool
> npm install -g jsdoc

### Verwijder de node_modules directory voor nu (anders een JSDoc config document gebruiken)
rmdir /s /q "node_modules"

### Genereer je documentatie met JSDoc, dit commando maakt een out/ directory aan met de HTML pagina's erin
> jsdoc -c jsdoc-config.json

### Bekijk de documentatie:
> start "C:\Program Files\Microsoft\Edge\Application\msedge.exe" out\index.html


