/*Let's say you have an array of buffers, each containing a chunk of data that you want to concatenate into a single buffer.
You call Buffer.concat() with the array of buffers to create a new buffer that contains all the data.*/

const buf1 = Buffer.from("hello");
const buf2 = Buffer.from("world");
const buf3 = Buffer.from("!");

const buffer = Buffer.concat([buf1, buf2, buf3]);
const bufferToString = buffer.toString();

console.log(bufferToString);
