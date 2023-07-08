//Write a program that takes a base URL and a relative URL as input, and uses the URL class to combine them into a single URL.
const { URL } = require('url');

function combineUrl(baseUrl, relativeUrl) {
  const baseUrlObject = new URL(baseUrl);
  //relativeurl must be passed as first argument when combining
  const combinedUrlObject = new URL(relativeUrl, baseUrlObject);
  return combinedUrlObject.toString();
};

const baseUrl = 'https://www.example.com';
const relativeUrl = '/path/resources';

const result = combineUrl(baseUrl, relativeUrl);
console.log(result); // 'https://www.example.com/path/to/resource'
