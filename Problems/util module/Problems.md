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
