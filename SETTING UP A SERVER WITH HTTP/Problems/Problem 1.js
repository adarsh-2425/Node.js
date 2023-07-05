/*Problem:
Create a Node.js server that listens for HTTP requests on port 3000. When a request is received, the server should respond with a message that says "Hello, World!".
*/

const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello World lol ui');
  res.end();
});

server.listen(3000, () => {
  console.log('server running on port 3000');
});
