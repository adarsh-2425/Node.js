const http = require('http');

const server = http.createServer((req, res) => {
  const { method, url } = req;
  res.write(`HTTP Method: ${method}\n`);
  res.write(`URL : ${url}`);
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
