const inquirer = require('inquirer')


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
    }
    {
        type: 'input',
        name: 'Table of Content',
        message: 'Table of Content',
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What does a user need to install to utilise your prject?',
    },
]

