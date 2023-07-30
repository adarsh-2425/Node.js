//Modify the problem 5 to only log the names of the files in the directory, ignoring any directories.

const fs = require('fs');
const path = require('path');

const myDir = path.join(__dirname, "views")

fs.readdir(myDir, {withFileTypes: true}, (err, files) => {
  if (err) throw err;

  console.log("Files in directory are: ");
  
  files.forEach(file => {
    if (file.isFile()) {
      console.log(file.name);
    }
  })
});
