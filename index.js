const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const util = require("util");
const Choices = require("inquirer/lib/objects/choices");
const writeFileAsync = util.promisify(fs.writeFile);
let License = " ";



// array of questions for user
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "Description",
        message: "Please provide a description of your project"
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "Please provide a Table of Contents"
    },
    {
        type: "input",
        name: "Installation",
        message: "How is it installed?"
    },
    {
        type: "input",
        name: "Usage",
        message: "Can you describe how the application is used?"
    },
    {
        type: "list",
        name: "License",
        message: "Does the application have or require a license?",
        choices: ["Apache 2.0", "MIT", "PERL"]
    },
    {
        type: "input",
        name: "Contributors",
        message: "Who all contributed to writing this application?"
    },
    {
        type: "input",
        name: "Testing",
        message: "What type of testing did you do?"
    },
    {
        type: "input",
        name: "Questions",
        message: "Any questions?"
    }

];


// function to initialize program
async function init() {

    const prompt =  await inquirer.prompt(questions);
    
    if(prompt.license === 'MIT') {
      licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if(prompt.license === 'Apache') {
     licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    } else if(prompt.license === 'gpl') {
      licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if(prompt.license === 'Unlicensed'){
      licenseBadge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
    
    const markdown = generateMarkdown(prompt, licenseBadge);
    await writeFileAsync("README.md", markdown);
    
     }
    // function call to initialize program
    init();

