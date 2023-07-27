## 1. util.format()
Write a function called formatUserList that accepts an array of user objects and formats the data as a table that can be displayed in the console.
The function should use the util.format() function to generate the table,
and should include column headers and separators to make the table easy to read.

```
const util = require("util");

const userList = [
  { name: 'Alice', email: 'alice@example.com', phone: '555-1234' },
  { name: 'Bob', email: 'bob@example.com', phone: '555-5678' },
  { name: 'Charlie', email: 'charlie@example.com', phone: '555-9012' }
]; 

const formatUserlist = users => {
  const header = util.format("%s\t%s\t%s", "Name", "Email", "Phone");
  const seperator = "_".repeat(header.length);
  const rows = users.map(user => {
    const row = util.format("%s\t%s\t%s", user.name, user.email, user.phone);
    return row;
  })
  return `${header}\n${seperator}\n${rows.join("\n")}`
}

console.log(formatUserlist(userList))
```
## 2. util.inspect()
Write a function called searchBooks that accepts a search query string and returns an array of books that match the query. If no books match the query, the function should return an empty array.

In addition, the function should use the util.inspect() function to log the search result object to the console, including all of the book properties.

```
const util = require("util");

const bookList = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', description: 'A tragic love story set in the 1920s.' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', description: 'A story about racial injustice in the American South.' },
  { title: 'Pride and Prejudice', author: 'Jane Austen', description: 'A classic romance novel set in 19th century England.' }
];

//search books function
const searchBooks = query => {
  query = query.toLowerCase();
  
  const result = bookList.filter(book => {
    return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
|| book.description.toLowerCase().includes(query)
  })

  console.log(util.inspect(result));
}

searchBooks("Kill");
```
## 3. util.promisify()

Suppose you have a function called addNumbers that takes two numbers as arguments and returns the sum of the two numbers through a callback function. Write a function that uses util.promisify() to convert the addNumbers function into a promise-based function

```
//import util module
const util = require("util");

//defined function for adding two numbers and response with callback
function addNumbers(num1, num2, callback) {
  const sum = num1 + num2;
  callback(sum);
}

//convert normal calback function into promise
const addNumbersPromise = util.promisify(addNumbers);

//output using promise
addNumbersPromise(3, 5)
  .then(result => console.log(result))
  .catch(error => console.error(error));
```
## 4. util.inherit()

```
class Animal {
  constructor() {
    this.type = 'Unknown';
  }

  sayType() {
    console.log(`I am a ${this.type}`);
  }
}

class Dog extends Animal {
  constructor() {
    super();
    this.type = 'Dog';
  }
}

const dog = new Dog();
dog.sayType(); // Output: I am a Dog
```
