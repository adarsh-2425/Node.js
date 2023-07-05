const http = require('http');
const { EventEmitter } = require('events');
const { Buffer } = require('buffer');
const { promisify } = require('util');
const { createReadStream } = require('fs');
const { pipeline } = require('stream');

//error dealing
const errorEmitter = new EventEmitter();
errorEmitter.on('error', (err) => {
  console.log(`Encountered error: ${err}`)
});

const streamFinished = promisify((stream, callback) => {
  stream.on('finish', callback);
});

const readStream = promisify((stream, callback) => {
  const chunks = [];

  stream.on('data', (chunk) => {
    chunks.push(chunk);
  });

  stream.on('end', () => {
    const data = Buffer.concat(chunks).toString();
    callback(null, data);
  });

  stream.on('error', callback);
});

//server logic
const server = http.createServer(async(req, res) => {
  if(req.method === 'POST' && req.url === '/uppercase') {
    try {
      const data = await readStream(req);
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end(data.toUpperCase());
    } catch(err) {
      errorEmitter.emit('error', err);
      res.writeHead(500, {'Content-Type':'text/plain'});
      res.end('Error processing request');
    }
  } else if (req.method === 'POST' && req.url === '/reverse') {
    try {
      const data = await readStream(req);
      res.writeHead(200, {'Content-Type':'text/plain'});
      res.end(data.split('').reverse().join(''));
    }
      catch (err) {
      errorEmitter.emit('error', err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error processing request');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
  });

//server port
server.listen(3000, () => {
  console.log('Server started, listening on port 3000');
});
