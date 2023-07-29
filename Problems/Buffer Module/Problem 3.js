/* Suppose you have a string that you want to convert to a buffer, modify the contents of the buffer, and then convert the buffer back to a string. 
Your task is to write a Node.js function that takes a string text as input, converts it to a buffer using Buffer.from(), 
modifies the contents of the buffer, and then converts the buffer back to a string using Buffer.toString().*/

function modifyTextBuffer(text) {
    const buf = Buffer.from(text);
    buf.write("world", 6);
    return buf.toString();
}

const str = modifyTextBuffer("Hello,there!");
console.log(str);
