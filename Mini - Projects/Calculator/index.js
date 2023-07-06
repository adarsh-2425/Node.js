const http = require('http');
const { EventEmitter } = require('events');
const readline = require('readline');
const { add, sub, mul, div } = require('./math');

//eventemitter
const myEmitter = new EventEmitter();

myEmitter.on('add', (num1, num2) => {
  console.log(add(num1, num2));
});

myEmitter.on('sub', (num1, num2) => {
  console.log(sub(num1, num2));
})

myEmitter.on('mul', (num1, num2) => {
  console.log(mul(num1, num2));
})

myEmitter.on('div', (num1, num2) => {
  console.log(div(num1, num2));
})

//readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//get numbers
const getTwoNumbers = (callback) => {
  rl.question('Enter two numbers separated by a space: ', (input) => {
    const [num1, num2] = input.split(' ');
    callback(Number(num1), Number(num2));
  });
};


//calculator
const calculator = (req, res) => {
  const operation = req.url;
  switch(operation){
    case '/add': {
      getTwoNumbers((num1, num2) => {
        myEmitter.emit('add', num1, num2);
        res.end();
      });
      break;
    }
    case '/sub': {
      getTwoNumbers((num1, num2) => {
        myEmitter.emit('sub', num1, num2);
        res.end();
      })
      break;
    }
    case '/mul': {
      getTwoNumbers((num1, num2) => {
        myEmitter.emit('mul', num1, num2);
        res.end();
      })
      break;
    }
    case '/div': {
      getTwoNumbers((num1, num2) => {
        myEmitter.emit('div', num1, num2);
        res.end();
      })
      break;
    }
  }
};

//server
const server = http.createServer(calculator);

server.listen(3000, () => {
  console.log('server runnning on 3000');
})
