const fs = require('fs');
const path = require('path');

function createFolderPNG(folderSourcePath, folderTargetPath) {
  const pngImages = searchPNG(folderSourcePath);

  if (!fs.existsSync(folderTargetPath)) {
    fs.mkdirSync(folderTargetPath);
    console.log('New folder created');
  } else {
    console.log('Folder already exists');
  }

  pngImages.forEach(image => {
    const sourceImagePath = path.join(folderSourcePath, image);
    const targetImagePath = path.join(folderTargetPath, image);
    copyFile(sourceImagePath, targetImagePath);
  });
  console.log('All png images were moved into the new folder');
}

function searchPNG(folderPath) {
  const pngs = [];
  const allFiles = fs.readdirSync(folderPath);
  for (let file of allFiles) {
    const fileExt = path.extname(file).toLowerCase();
    if (fileExt === '.png') pngs.push(file);
  }
  console.log('All PNG files: ', pngs);
  return pngs;
}

function copyFile(sourcePath, targetPath) {
  try {
    fs.copyFileSync(sourcePath, targetPath);
  } catch (err) {
    console.log(err);
  }
}

module.exports = { createFolderPNG, searchPNG, copyFile };
