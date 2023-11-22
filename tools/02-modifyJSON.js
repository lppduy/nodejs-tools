const fs = require('fs');

function modifyJSON(jsonPath, key, value) {
  try {
    const jsonFile = fs.readFileSync(jsonPath, 'utf8');
    const jsonObj = JSON.parse(jsonFile);
    jsonObj[key] = value;
    const jsonConverted = JSON.stringify(jsonObj);
    fs.writeFileSync(jsonPath, jsonConverted);
    console.log('File was modified');
  } catch (err) {
    console.error(err);
  }
}

module.exports = { modifyJSON };
