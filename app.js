//const inquirer = require('inquirer');
import inquirer from "inquirer"

//list of questions for thr user to fill
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is your project about? Give a brief description of what your project does',
    },
    {
        type: 'input',
        name: 'Table of Content',
        message: 'Table of Content',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What does a user need to install to utilise your project?',
    },
    {
        type: 'input',
        name: 'Instructions',
        message: 'How should your app/software be used?',
    },
    {
        type: 'input',
        name: 'License',
        message: 'License to use',
    },
    {
        type: 'input',
        name: 'Contributions',
        message: 'Who contributed to this project?',
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'How will this project be tested?',
    },
    {
        type: 'input',
        name: 'Contact',
        message: 'What is you email? How can you be reached for inquiries?',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'What is your GitHub username?',
    },
]

//the 
function init() {
    return inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

init()