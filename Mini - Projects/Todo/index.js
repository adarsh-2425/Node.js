const https = require('https');
const { EventEmitter } = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('completedTodos', (data) => {
  console.log(data);
});

https.get('https://jsonplaceholder.typicode.com/todos', (res) => {
  let data = '';
  // Concatenate the response data
  res.on('data', (chunk) => {
    data += chunk;
  })
  // Parse the completed todos from the response data
  res.on('end', () => {
    const todos = JSON.parse(data);
    const completedTodos = todos.filter(todo => todo.completed);

    // Emit the 'completedTodos' event with the completed todos as the argument
    myEmitter.emit('completedTodos', completedTodos);
  });
});

// Create an HTTP server to listen for requests
const server = https.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
});

//start server on port 3000
server.on(3000, () => {
  console.log('server running on port 3000');
});
