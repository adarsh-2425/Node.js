1. write a function called formatUserList that accepts an array of user objects and formats the data as a table that can be displayed in the console.
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
2. write a function called searchBooks that accepts a search query string and returns an array of books that match the query. If no books match the query, the function should return an empty array.

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
    return book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query) || book.description.toLowerCase().includes(query)
  })

  console.log(util.inspect(result));
}

searchBooks("Kill");
```
