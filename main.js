const path = require('path');
const samplePath = path.join(__dirname, 'sample');

const { createFolderPNG } = require('./tools/04-createFolderPNG');

createFolderPNG(samplePath);

// const { searchImage } = require('./tools/03-searchImage');
// const img = searchImage(samplePath);
// console.log(img);
