const http = require('http');
const events  = require('events');
const readline = require('readline');

//creating server
const server = http.createServer((req, res) => {
  req.url = '/datetime';
  if(req.url === '/datetime') {
    const date = new Date();
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.end(date.toString());
  } else {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end('404 Not Found');
  }
});

const eventEmitter = new events.EventEmitter();

server.on('error', (err) => {
  console.log(`Server Error: ${err}`);
  eventEmitter.emit('stop');
});

eventEmitter.on('start', () => {
  server.listen(3000, () => {
    console.log('server listening on port 3000');
  })
});

eventEmitter.on('stop', () => {
  server.close(() => {
    console.log('server stopped');
});
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Please enter any key to start server', () => {
  eventEmitter.emit('start');

  setTimeout(() => {
  eventEmitter.emit('stop');
  rl.close;
}, 5000);
  
});

