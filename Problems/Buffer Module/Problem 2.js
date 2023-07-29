/* Suppose you need to create a new buffer with some text content and then convert it to a JavaScript string. Your task is to write a Node.js function 
that takes a string text as input and returns a new buffer
containing the text, and then converts the buffer to a JavaScript string using Buffer.toString().*/

function createBuffer(value) {
    return Buffer.alloc(value.length, value);
}

//converting buffer to js string
function string(buffer) {
    return buffer.toString();
}

const buffer = createBuffer("Hello World");
const bufferString = string(buffer);

console.log(bufferString);
