const fs = require('fs');
const path = require('path');

function createFolderPNG(folderSourcePath, folderTargetPath) {
  if (!folderTargetPath) {
    const sourceDirectoryName = path.basename(folderSourcePath);
    const parentDirectory = path.dirname(folderSourcePath);
    folderTargetPath = path.join(parentDirectory, `${sourceDirectoryName}_PNG`);
  }

  const pngImages = searchPNG(folderSourcePath);

  if (!fs.existsSync(folderTargetPath)) {
    fs.mkdirSync(folderTargetPath, { recursive: true });
    console.log('New folder created');
  } else {
    console.log('Folder already exists');
  }

  pngImages.forEach(image => {
    const sourceImagePath = image;
    const relativeImagePath = path.relative(folderSourcePath, image);
    const targetImagePath = path.join(folderTargetPath, relativeImagePath);

    if (!fs.existsSync(path.dirname(targetImagePath))) {
      fs.mkdirSync(path.dirname(targetImagePath), { recursive: true });
    }

    copyFile(sourceImagePath, targetImagePath);
  });

  console.log('All png images were moved into the new folder');
}

function copyFile(sourcePath, targetPath) {
  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`Copied ${sourcePath} to ${targetPath}`);
  } catch (err) {
    console.log(err);
  }
}

function searchPNG(folderPath) {
  let pngs = [];

  function searchInDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      if (fs.statSync(filePath).isDirectory()) {
        searchInDirectory(filePath);
      } else {
        const fileExt = path.extname(file).toLowerCase();
        if (fileExt === '.png') {
          pngs.push(filePath);
        }
      }
    });
  }
  searchInDirectory(folderPath);
  return pngs;
}

module.exports = { createFolderPNG, searchPNG, copyFile };
