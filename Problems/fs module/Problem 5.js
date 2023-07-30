//Write a Node.js script that reads a directory called mydir and logs the names of all the files and directories in the directory.

const fs = require('fs');
const path = require('path');

const myDir = path.join(__dirname, "views")

fs.readdir(myDir, (err, data) => {
  if (err) throw err;
  console.log(data);
});
