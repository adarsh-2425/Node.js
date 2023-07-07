//Write a program that reads a file called sample.txt, adds the string "Hello World!" to the end of the file, and then logs the contents of the file to the console.
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'sample.txt');

//readfile
fs.readFile(filePath, 'utf-8', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }

//new data
const updatedData = data + 'Hello World!';

//update file
fs.writeFile(filePath, updatedData, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }


//show file on console
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
});
});
