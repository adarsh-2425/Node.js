const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'names.txt');
const outputFile = path.join(__dirname, 'uniqueNames.txt');

fs.readFile(inputFile, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  //split names
  const names = data.split('\n');

  //remove any empty elements
  const filteredNames = names.filter(name => name.trim() !== '');

  //remove duplicates using splice
  for(let i = 0; i < filteredNames.length; i++) {
    for (let j = i+1; j < filteredNames.length; j++) {
      if (filteredNames[i] === filteredNames[j]) {
        filteredNames.splice(j, 1);
        j--;
      }
    }
  }

  //write into new file
  fs.writeFile(outputFile, filteredNames.join('\n'), (err) => {
    if(err) {
      console.log(err);
      return;
    }
    console.log(`Unique names written to ${outputFile}.`);
  });
  
});
