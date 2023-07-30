//Modify the previous script of problem 3 to append the contents of input.txt to output.txt instead of overwriting it.

const fs = require('fs');
const path = require('path');

const file1 = path.join(__dirname, 'input.txt');
const file2 = path.join(__dirname, 'output.txt');

fs.readFile(file1, 'utf-8', (err, data) => {
  if (err) throw err;

  fs.appendFile(file2, data, (err) => {
    if (err) throw err;
    console.log("file2 successfully written")
  })
});
