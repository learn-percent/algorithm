# NodeJS
In simple terms, NodeJS is a software that will read and execute JavaScript code without the need of a web browser. This open's a lot of usage oportunities for the language. We can execute any javascript code using `node path/to/code/javascript-code.js`

# NPM
As developers, it's really common for us to need solution that another developers already reached. Most languages have a way to share this solutions, and all the code of a solution is grouped as a "package".
NPM is software capable of publishing packages to the web, and installing packages to your project. It will manage everything that you project uses. We can find packages at [NPM page](https://www.npmjs.com/)

## Nice stuff to know
- NPM saves all packages in "node_modules" folder, at the root of your project;
- All the proejct configuration is saved on `package.json` file, including project dependencies;
- The file `package-lock.json` includes all dependencies, and dependencies of dependencies files;
- We can save a dependency using `npm install <dependency>` or `npm i <dependency>`;
- We can save a dependency as a `dev dependency` using `npm install -D <dependency>` or `npm i -D <dependency>`;
- We can predifine NPM commands changing the `package.json` file and run them using `npm run <command>`.

## NodeJS In-Built Modules
NodeJS already provide us with some modules that we can import with some projects, this modules are called In-Built Modules. A exemple of it is the readline.

# Glossary
| Term    | Description |
| ------- | ----------- |
| Root    | When you run any command via Terminal, you will be running inside a folder. This folder is called "Root Folder" |
