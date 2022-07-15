function init () {

const inquirer = require('inquirer');
const fs = require('fs'); 
const generate = require('./utils/generateMarkdown.js');
const path = require('path');

inquirer
  .prompt([
    { 
      type: "input",
      message: "What is the title of this project?",
      name: "title",  
    },
    { 
      type: "input",
      message: "write a brief description of the project:",
      name: "description",  
    },
    {
       type: "input",
       message: "How is the application installed?",
       name: "installation",
    },
    {
        type: "input",
        message: "Are there any dependencies for this application?",
        name: "dependencies",
    },
    {
        type: "input",
        message: "How is this application used?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "What License are you using for this project?",
        choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
        name: "license",
    },
    {
        type: "input",
        message: "GitHub username?",
        name: "github"
    },
    {
        type: "input",
        message: "Email address?",
        name: "email"
    },
  ])
  .then((response) => {
    return fs.writeFileSync(path.join (process.cwd(), "README.md"), generate(response));
  });
}

init();
