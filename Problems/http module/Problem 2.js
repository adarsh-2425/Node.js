//Make an HTTP request to a remote server and log the response to the console.

const http = require('http');

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/',
  method: 'GET'
}

const req = http.request(options, (res) => {
  console.log(`Status code: ${res.statusCode}`);
  res.on('data', chunk => {
    console.log(`Received ${chunk.length} bytes of data`);
  });
});

req.on('error', err => {
  console.log('Error: ${err.message}');
});

req.end();
