//https://www.codecademy.com/courses/learn-node-js/lessons/setting-up-a-server-with-http/exercises/the-http-module

const http = require('http');

const server = http.createServer((res) => {
  return res.end('Hello World');
});

server.listen(4001);
