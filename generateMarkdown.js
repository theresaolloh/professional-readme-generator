function generateMarkdown(data) {
    return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  ${data.tableOfContents}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.instructions}
  
  ## License
  ${data.license}
  
  ## Contributions
  ${data.contributions}
  
  ## Tests
  ${data.tests}
  
  ## Contact
  For inquiries, please contact ${data.contact}.
  
  ## GitHub
  GitHub repository: https://github.com/${data.github}
  `;
}

export default generateMarkdown;