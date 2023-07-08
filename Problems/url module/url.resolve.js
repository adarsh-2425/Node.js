//Write a program that takes a base URL and a relative URL as input, and uses the url.resolve() method to combine them into a single URL.

const url = require('url');

const baseUrl = 'https://www.example.com';
const relativeUrl = '/path/to/resource';

const resolvedUrl = url.resolve(baseUrl, relativeUrl);
console.log(resolvedUrl);
