// function to generate markdown for README
function generateMarkdown(data) {


  let tableOfContents = "";
  if (data.tableOfContents){
    tableOfContents = 
    `## Table of Contents
    
    * [Title](#Title)
    * [Description](#Description)
    * [Installation](#Installation)
    * [Usage](#Usage)
    * [License](#License)
    * [Contributors](#Contributors)
    * [Testing](#Testing)
    * [Questions](#Questions)   
    `
  }

  const issuesBadge = `[![GitHub issues](https://img.shields.io/github/issues/${data.userName}/${data.title})](https://github.com/${data.userName}/${data.title}/issues)`;

  const licenseBadge = `[![GitHub license](https://img.shields.io/github/license/${data.userName}/${data.title})](https://github.com/${data.userName}/${data.title})`;

  const profileImage = `![${data.userName}](https://github.com/${data.userName}.png?size=200)`;

  return `
  
  # ${data.title}

  ## Description

  ${data.description}

  ${tableOfContents}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${license}

  ## Badges

  ${issuesBadge}

  ## Contributors

  ${data.contributors}

  ## Testing

  ${data.testing}

  ## Questions

  ${data.questions}

  
`;
}

module.exports = generateMarkdown;