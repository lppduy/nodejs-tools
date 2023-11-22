const fs = require('fs');
const path = require('path');

function createIndexFile(dirPath) {
  const indexPath = path.join(dirPath, '../index.js');
  const fileContent = processDirectory(dirPath, dirPath);

  fs.writeFileSync(indexPath, fileContent);
  console.log(`Created index.js at ${indexPath}`);
}

function processDirectory(currentDir, dirPath) {
  let fileContent = '';

  const files = fs.readdirSync(currentDir);

  files.forEach(file => {
    const filePath = path.join(currentDir, file);
    const relativePath = path.relative(dirPath, filePath);

    if (fs.statSync(filePath).isDirectory()) {
      fileContent += processDirectory(filePath, dirPath);
    } else {
      const fileExtension = path.extname(filePath);
      const fileName = path.parse(file).name;

      if (fileExtension === '.js' || fileExtension === '.ts') {
        const importPath = `./src/${relativePath.replace(/\\/g, '/')}`;
        if (fileName !== 'index') {
          fileContent += `import '${importPath.replace(/\.ts$/, '')}';\n`;
        } else {
          fileContent += `import '${importPath}';\n`;
        }
      }
    }
  });

  return fileContent;
}

module.exports = { createIndexFile };
