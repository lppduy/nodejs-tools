const fs = require('fs');

function readJSON(jsonPath) {
  try {
    const jsonFile = fs.readFileSync(jsonPath, 'utf8');
    const jsonObj = JSON.parse(jsonFile);
    console.log(jsonObj);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { readJSON };
