/*
Create a Node.js server that listens for HTTP requests on port 3000. When a request is received, 
the server should respond with an HTML page containing a heading.
*/

const http = require('http');

const server = http.createServer((req, res) => {
  const html = 
    `
    <html>
    <head></head>
    <body>
    <h1>Welcome to Nodejs</h1>
    </body>
    </html>
    `
  res.setHeader('Content-Type', `text/html`);
  res.write(html);
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
