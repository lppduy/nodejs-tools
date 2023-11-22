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
  console.log('All images: ', images);
  return images;
}

module.exports = { searchImage };
