/*Suppose you need to create a new buffer with a fixed size and initialize its contents with a specific value. Your task is to write a Node.js function 
that takes an integer size and a string value as inputs and returns a new buffer of size size with its contents initialized to value.*/

function createBuffer(size, value) {
  return Buffer.alloc(size, value);
}

const buf = createBuffer(10, 'a');
console.log(buf); // Output: <Buffer 61 61 61 61 61 61 61 61 61 61>
