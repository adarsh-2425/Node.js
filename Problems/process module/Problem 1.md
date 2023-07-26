Suppose you're building a command-line application that needs to accept user input and display output to the console. 
You decide to use the process module in Node.js to handle user input and output.

Your task is to write a function called handleInput that accepts user input from the console and displays a welcome message with the user's name. 
The function should prompt the user to enter their name, 
and then use the process.stdin and process.stdout streams to read and write data to the console.

```
const handleInput = () => {
  process.stdin.write("Please Enter Your Name: ");

  //listening
  process.stdin.on('data', data => {
    const name = data.toString().trim();
    process.stdout.write(`Welcome, ${name}!\n`);
    process.exit();
  })
}

handleInput()

```
