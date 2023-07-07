const fs = require('fs');

const computeSum = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, buffer) => {
      if (err) {
        reject(err);
      } else {
        let sum = 0;
        for(let i = 0; i < buffer.length; i += 4) {
          sum += buffer.readInt32LE(i);
        }
        resolve(sum);
      }
    })
  })
};

module.exports = { computeSum };
