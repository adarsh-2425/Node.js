//https://www.codecademy.com/courses/learn-node-js/lessons/node-js-essentials/exercises/the-timers-module
setImmediate(() => {
  console.log('I got called right away!');
})

setTimeout(() => {
  const buffer1 = Buffer.from('Lol');
  const buffer2 = Buffer.from(' happens');

  const arr = [buffer1, buffer2];
  const join = Buffer.concat(arr);

  const str = join.toString();
  console.log(str);
}, 3000);
