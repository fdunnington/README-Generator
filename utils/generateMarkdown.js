const renderLicenseBadge = (license) => {
    if (license !== "None") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
    }
    return;
}


// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ----

  ${renderLicenseBadge(data.license)}\n
  ${data.deployed}

  ## Description:

  ### Motivation
  ${data.motivation}

  ### Learnings
  ${data.learnings}

  ----

  ## Table of Contents:

  * [Installation](#installation)
  * [Application usage](#usage)
  * [License](#license)
  * [Contributing to the project](#contributing)
  * [How to test](#test)
  * [Questions](#questions)
  * [Credits](#credits)

  ----
  

  ## Installation:
  To install the application in a dev environment simply follow the instructions below: 
  \`\`\
  ${data.installation}
  \`\`\


  ## Usage
  ${data.usage}

  
  ![${data.altText}](${data.screenshot})


  ## License
  This project uses the ${renderLicenseBadge(data.license)} license.


  ## Contributing
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  We are happy for other developers to contribute to this project, and have adpoted the [Contributor Covenant](https://www.contributor-covenant.org/)


  ## Test
  To test the app run the following command from the app directory:
  ~~~
  ${data.test}
  ~~~

  ## Questions
  If you have any questions about the repo you can open an issue or contact me directly at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).


  ## Credits
  With thanks to ${data.credits}
`;

  
  
}

module.exports = generateMarkdown;
