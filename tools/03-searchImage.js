const fs = require('fs');
const path = require('path');

function searchImage(folderPath) {
  const images = [];
  const allFiles = fs.readdirSync(folderPath);
  for (let file of allFiles) {
    const fileExt = path.extname(file).toLowerCase();
    if (
      fileExt === '.jpg' ||
      fileExt === '.png' ||
      fileExt === '.jpeg' ||
      fileExt === '.gif'
    )
      images.push(file);
  }
  return images;
}
function searchImage2(folderPath) {
  return files.filter(file => {
    const fileExtension = path.extname(file).toLowerCase();
    return ['.jpg', '.jpeg', '.png', '.gif'].includes(fileExtension);
  });
}

module.exports = { searchImage };
