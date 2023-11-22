// const { readJSON } = require('./tools/01-readJSON');

// // readJSON('./test/sample.json');

// const { modifyJSON } = require('./tools/02-modifyJSON');

// // modifyJSON('./test/sample.json', 'anhKame', 'vip');

// const { searchImage } = require('./tools/03-searchImage');
// // const images = searchImage('./test');

// const { createFolderPNG, searchPNG } = require('./tools/04-createFolderPNG');
// // const pngs = searchPNG('./test');
// const folderSourcePath = './test';
// const folderTargetPath = './testPNG';
// createFolderPNG(folderSourcePath, folderTargetPath);

// const { resizeImage } = require('./tools/05-resizeImage');
// resizeImage('./test');
const { createIndexFile } = require('./tools/06-createIndexFile');
createIndexFile('./src');
