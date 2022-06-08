const inquirer = require('inquirer'); 
const fs = require('fs');
const util = require("util");
const writeFileAsync = util.promisify(writeToFile);

//Include packages needed for this application

const generateMarkdown = require('./utils/generateMarkdown.js');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        validate: (value) => {
            if (value) {
                return true;
            }else {
                return console.log("Please enter a valid GitHub username.");
            }
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: (value) => {
            if (value) {
                return true;
            }else {
                return console.log("Please enter a valid email address.");
            }
        }        
    },
    {
        type: 'input',
        message: "What is your GitHub repo name?",
        name: 'repo',
        validate: (value) => {
            if (value) {
                return true;
            }else {
                return console.log("Please enter a valid GitHub repo.");
            }
        } 
    },
    {
        type: 'input',
        message: "What is your project name?",
        name: 'title',
        validate: (value) => {
            if (value) {
                return true;
            }else {
                return console.log("Please enter a valid project title.");
            }
        }       
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: (value) => {
            if (value) {
                return true;
            }else {
                return console.log("Please enter a valid project description.");
            }
        }  
    },
    {
        type: 'input',
        message: "Please enter steps required to install your project",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Please enter a usage description.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please enter other contributors.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "Please enter steps to test this app",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: [
            'Apache',
            'Academic',
            'GNU',
            'ISC',
            'MIT',
            'Mozilla',
            'Open'],
        name: 'license'
    }

];

//Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>      
        err ? console.log(err) : console.log('Successfully created README.md!')
        );
}


//Create a function to initialize app
async function init() {
    try {
        const answer = await inquirer.prompt(questions);
        console.log(answer);
    
        const markdown = generateMarkdown(answer);
        console.log(markdown);
    
        await writeFileAsync('./exp/README.md', markdown);

    } catch (error) {
        console.log(error);
    }
};
    

//Function call to initialize app
init();
