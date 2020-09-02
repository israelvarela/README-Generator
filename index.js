

function init() {

    // Initializes the inquirer
    const inquirer = require('inquirer');

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
        name: "tableOfContents",
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
        name: "license",
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



inquirer.prompt(questions)
        .then(answers => {

            let fileName = `${answers.Title}.md`;
            console.log(answers)
            console.log(fileName)
            const generateMarkdown = require('./utils/generateMarkdown.js');

            // Generate markdown from the users answers
            const markdown = generateMarkdown(answers);

            writeToFile(fileName, markdown);
        })
        .catch(error => {
            if (error.isTtyError) {

            } else {
    
            }
        });

}

function writeToFile(fileName, data) {
    const fs = require('fs');

    fs.writeFile(fileName, data, (err) => {
        // If there is error writing to the file, return
        if (err) {
            console.error(err)
            return
        }

        console.log('Wrote README file successfully')
    })

}

init();
