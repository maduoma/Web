# JavaScript
All about JavaScript!

# How to create JavaScript Web Dev Starter files on Windows
1. Create a directory say: web-dev-starter
2. Change to the directory from your Command Prompt: cd web-dev-starter
3. Create a file say: index.html
4. Run: npm init and fill the required info or just hit Enter progressively to take the default and finally yes to create package.json file
5. Run: npm install lite-server --save-dev to install the required node_modules
6. Replace the content of "scripts" (ie "test": "echo \"Error: no test specified\" && exit 1") in package.json with "start": "lite-server"
7. Run: npm run start to open your index.html page in your default browser.
   
# Note
It is expected that you have installed NodeJS on your machine from which you get NPM for your development. It is also good you install git. To check if npm and git are installed run: npm --version and git --version respectively separately.

