//Write a function that takes a URL string as input and returns an object containing the query parameters and their values.

//import url module
const url = require('url');

//function to convert
function queryToString(string) {
    const parsedUrl = url.parse(string, true);
    const query = parsedUrl.query;
    return  query ;
}

const urlString = 'https://www.example.com/path?query1=value1&query2=value2&query3=value3';
const query = queryToString(urlString);
console.log(query);  // 'www.example.com'
