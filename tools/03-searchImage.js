const fs = require('fs');
const path = require('path');

function searchImage(folderPath) {
  let images = [];

  function searchInDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        searchInDirectory(filePath);
      } else {
        const fileExt = path.extname(file).toLowerCase();
        if (['.jpg', '.jpeg', '.png', '.gif'].includes(fileExt)) {
          images.push(filePath);
        }
      }
    });
  }

  searchInDirectory(folderPath);
  return images;
}

module.exports = { searchImage };
