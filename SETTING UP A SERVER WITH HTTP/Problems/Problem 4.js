/*
Create a Node.js server that listens for HTTP requests on port 3000. When a request is received, the server should check 
the request URL and respond with different messages based on whether the URL contains the string "hello" or "bye".
*/

const http = require('http');

const server = http.createServer((req, res) => {
  const url = new URL(req.url,     `http://${req.headers.host}`);
  const  path  = url.pathname;
  
  if(path === 'hello') {
    res.setHeader('Content-Type' , 'text/plain');
    res.write('Hello World');
    res.end();
  } else if (path === 'bye') {
    res.setHeader('Content-Type' , 'text/plain');
    res.write('Goodbye World');
    res.end();
  } else {
    res.setHeader('Content-Type' , 'text/plain');
    res.write('Sorry, I don\'t understand that request.');
    res.end();
  }
})

server.listen(3000, () => {
  console.log('server running on port 3000');
});
