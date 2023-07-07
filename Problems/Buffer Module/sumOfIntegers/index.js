const fs = require('fs');
const path = require('path');
const { computeSum } = require('./computeSum')

const binaryFile = path.join(__dirname, 'data.bin');

computeSum(binaryFile)
  .then(sum => console.log(sum))
  .catch(err => console.log(err));
