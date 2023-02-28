const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: '🚀 Your Github username: '
    },
    {
        type: 'input',
        name: 'title',
        message: 'Project name: '
    },
    {
        type: 'input',
        name: 'deployed',
        message: 'Deployed project URL: '
    },
    {
        type: 'editor',
        name: 'motivation',
        message: 'Motivation for the project - why did you build it, & what problem does the project solve? '
    },
    {
        type: 'editor',
        name: 'learnings',
        message: 'What did you learn from the project? '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does the project use? ',
        choices: ["MIT", "APACHE2.0", "GPL","None",],
    },
    {
        type: 'editor',
        name: 'installation',
        message: 'What steps are required to install the project in a dev environment?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to test the application? ',
        default: 'node index.js'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Does the user need to know anything about using the repo? ',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'File path for app screenshot: ',
    },
    {
        type: 'input',
        name: 'altText',
        message: 'Screenshot alt text: ',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Is there anyone you would like to credit in this README? ',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Anyone with questions can contact you at: '
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log("Generating README...");
        writeToFile('README.md', generateMarkdown({...response}));
    });

}

// function call to initialize program
init();
