
//Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />
  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.installation}
  ## Usage 
  ${data.usage}
  ## License 
  ${data.license}
  ## Contributing 
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## Questions
  If you have any questions about this projects, please contact my <a href="https://${data.email}">Email</a> or <a href="https://github.com/${data.username}">Github</a>.

`;
}

module.exports = generateMarkdown;
