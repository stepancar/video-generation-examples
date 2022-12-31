const fs = require('fs');
const jpeg = require('jpeg-js');

// Read in the image
const imageBuffer = fs.readFileSync('img.jpeg');
const imageData = jpeg.decode(imageBuffer);

// Get the desired number of intensity levels from the user
const numLevels = 64;

// Convert the image to an integer type with the desired number of levels
const levelShift = 8 - Math.log2(numLevels);
const imageDataInt = imageData.data.map(x => x << levelShift);
const imageDataFinal = {
  data: imageDataInt,
  width: imageData.width,
  height: imageData.height
};

// Write the resulting image to a file
const imageBufferFinal = jpeg.encode(imageDataFinal, 90);
fs.writeFileSync('image_final.jpg', imageBufferFinal.data);