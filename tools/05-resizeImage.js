const path = require('path');
const sharp = require('sharp');
const { searchImage } = require('./03-searchImage');

async function resizeImage(folderPath, percentage = 0.7) {
  try {
    const images = searchImage(folderPath);
    for (const img of images) {
      const inputPath = path.join(folderPath, img);
      const outputPath = path.join(folderPath, `resized_${img}`);

      const metadata = await sharp(inputPath).metadata();
      const newWidth = Math.round(metadata.width * percentage);
      const newHeight = Math.round(metadata.height * percentage);

      await sharp(inputPath).resize(newWidth, newHeight).toFile(outputPath);

      console.log(`Resized ${img} to ${percentage * 100}%`);
    }
    console.log('All images resized successfully.');
  } catch (err) {
    console.error('Error:', err);
  }
}

module.exports = { resizeImage };
