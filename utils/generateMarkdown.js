const renderLicenseBadge = (license) => {
    if (license !== "None") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg`
    }
    return;
}

renderLicenseLink = (license) => {
  if (license !== "None") {
    return `* [License](#license)`
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ### Description:
  ${data.description}

  ### Table of Contents:

  * [Installation](*installation)
  * [Usage](#usage)
  
  ${renderLicenseLink(data.license)}

  * [Contributing](*contributing)
  * [Test](*test)
  * [Questions](*questions)
  
  ### Installation:
  To install necessary dependencies, run the following command:

  \`\`\
  ${data.installation}
  \`\`\

  ## Usage
  ${data.usage}

  ## License
  This project uses the ${data.license} license.

  ## Contributing
  ${data.contributing}

  ## Tests

  To run test, run the following command:
  \`\`\
  ${data.test}
  \`\`\

  ### Questions
  If you have any questions about the repo you can open an issue, or contact me directly at ${data.email}.

  You can find more of my work at [${data.github}](https://github.com/${data.github}).

`;
}

module.exports = generateMarkdown;
