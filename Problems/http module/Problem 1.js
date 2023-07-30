//Create an HTTP server that returns the current date and time when a client makes a request.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type':'text/plain'});
  const now = new Date();
  res.end(`The current time is ${now.toLocaleTimeString}`);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`server running on port ${}`)
})
