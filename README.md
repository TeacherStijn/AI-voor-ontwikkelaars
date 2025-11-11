# AI-voor-ontwikkelaars
Opdrachten en scripts voor de A.I. voor ontwikkelaars training

# Setup
In this course we will work from a Windows 10 / Windows 11 virtual machine.
To your preference you use either of the installed IDE’s:
- Visual Studio Community
- Visual Studio Code
Or install any of your preferred IDE’s. Our advice is to minimally use an editor with syntax highlighting like Notepad++, but preferably a tool that has the ability to add an A.I. coding assistant.

### Languages 
We will mostly be using JavaScript in a NodeJS environment for our code samples. 
Please install NodeJS using a Windows Installer (.msi) file from this URL: 
https://nodejs.org/en/download

### Repositories
For our repositories, you will need a Github account. 
You can create one using the lab e-mail or your personal e-mail. 
Then we need to install Github Desktop from: https://desktop.github.com/download/

### OpenAI API
Make sure you have a paid ChatGPT account, so you can use the ChatGPT API.

When configuring the use of the API, set a maximum budget, and configure a new project (or use the default).
Set the budget on €5 or €10 for now, we will by far not reach that amount.

Make sure you enable the model you want to use in your project from the 'Project settings'>'Limits' screen:
https://platform.openai.com/settings/

### API testing
To test API calls during this course, if not already installed in commandline, 
install the commandline tool ‘curl’ from: https://curl.se/windows/

### Documentation generator
In this project our tooling will generate an HTML file containing the documentation. 
The tool that will be used here is JSDoc; which can be found at: https://jsdoc.app/about-getting-started. 
Installation of JSDoc can be done from the commandline (globally) using: 
> npm install –g jsdoc
or, if you want to locally add it to a project:
> npm install --save jsdoc

To run JSDoc after local install, use:	
> ./node_modules/.bin/jsdoc yourJavaScriptFile.js
 
To run JSDoc after global install, use:	 
> jsdoc yourJavaScriptFile.js

For testing our project, we will use the node’s builtin node:test and assert through:
> npm test