const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { searchImage } = require('./03-searchImage');

async function resizeImage(folderPath, percentage = 0.7) {
  try {
    const images = searchImage(folderPath);
    for (const img of images) {
      const inputPath = path.resolve(folderPath, img);

      if (fs.existsSync(inputPath)) {
        const metadata = await sharp(inputPath).metadata();
        const newWidth = Math.round(metadata.width * percentage);
        const newHeight = Math.round(metadata.height * percentage);

        await sharp(inputPath)
          .resize(newWidth, newHeight)
          .toBuffer((err, buffer) => {
            if (err) {
              console.error(`Error resizing ${img}:`, err);
              return;
            }

            fs.writeFile(inputPath, buffer, err => {
              if (err) {
                console.error(`Error writing ${img}:`, err);
                return;
              }
              console.log(`Resized ${img} to ${percentage * 100}%`);
            });
          });
      } else {
        console.log(`File does not exist: ${inputPath}`);
      }
    }
    console.log('All images resized successfully on original files.');
  } catch (err) {
    console.error('Error:', err);
  }
}

module.exports = { resizeImage };
