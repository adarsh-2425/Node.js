const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

//read contents
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const words = data.split('');
  //length of contents
  const length = words.length;
  
//log
console.log('Length of contents is : ' + length);
});
