/*Write a Node.js script that reads a file called input.txt and writes the contents to a file called output.txt.*/

const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'input.txt');
const file2 = path.join(__dirname, 'output.txt');

fs.readFile(file1, 'utf-8', (err, data) => {
  if (err) throw err;

  fs.writeFile(file2, data, (err) => {
    if (err) throw err;
    console.log("file2 successfully written")
  })
});
