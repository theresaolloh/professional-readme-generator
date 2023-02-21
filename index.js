import inquirer from "inquirer"
import fs from "fs"

import generateMarkdown from './generateMarkdown';

//list of questions for thr user to fill
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is your project about? Give a brief description of what your project does",
    },
    {
        type: "input",
        name: "tableOfContents",
        message: "Table of Contents",
    },
    {
        type: "input",
        name: "installation",
        message: "What does a user need to install to utilize your project?",
    },
    {
        type: "input",
        name: "instructions",
        message: "How should your app/software be used?",
    },
    {
        type: "input",
        name: "license",
        message: "License to use",
    },
    {
        type: "input",
        name: "contributions",
        message: "Who contributed to this project?",
    },
    {
        type: "input",
        name: "tests",
        message: "How will this project be tested?",
    },
    {
        type: "input",
        name: "contact",
        message: "What is your email? How can you be reached for inquiries?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
];

//this function writes the readme file
function generateREADME(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README file successfully generated`);
        }
    });
}

//this function initializes the app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeFile("README.md", generateMarkdown(data));
            console.log(data)
        })
}
init();
