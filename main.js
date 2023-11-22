const fs = require('fs');
const path = require('path');

const basicPath = path.join(__dirname, 'basic');

const { readJSON } = require('./tools/01-readJSON');
const sample1 = path.join(__dirname, 'test', 'sample1.json');
// readJSON(sample1);

const { modifyJSON } = require('./tools/02-modifyJSON');
const sample2 = path.join(__dirname, 'test', 'sample2.json');
const key = 'age';
const value = 24;
// modifyJSON(sample2, key, value);

const { searchImage } = require('./tools/03-searchImage');
const image = searchImage(basicPath);
// console.log(image);

const { createFolderPNG } = require('./tools/04-createFolderPNG');
// createFolderPNG(basicPath);

const { resizeImage } = require('./tools/05-resizeImage');
// resizeImage(path.join(__dirname, 'test'));

const { createIndexFile } = require('./tools/06-createIndexFile');
// const srcPath = path.join(__dirname, 'src');
// createIndexFile(srcPath);
