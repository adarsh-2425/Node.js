const http = require('http');
const getDateAndTime = require('./operation.js');

const server = http.createServer(async (req, res) => {
  if(req.url === '/datetime') {
    const { date, time } = await getDateAndTime();
    const html = 
      `
      <html>
      <head><title>Date and Time</title></head>
      <body>
      <h1>Date is ${date} and Time is ${time}</h1>
      </body>
      </html>
      `;
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(html);
    res.end();
  }
});

server.listen(3000, () => {
  console.log('server running on 3000');
});
