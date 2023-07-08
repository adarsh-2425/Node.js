//Write a program that takes a hostname, a path, and a query string as input, and uses the url.format() method to create a new URL.

const url = require('url');

function createUrl(hostname, pathname, query) {
  const urlObject = {
    protocol: 'https',
    hostname,
    pathname,
    query
  };
  return url.format(urlObject);
};

const hostname = 'www.google.com';
const pathname = '/movies';
const query = {key1: 'Will Smith', key2: 'Independece Day'};

const newUrl = createUrl(hostname, pathname, query);
console.log(newUrl); //https://www.google.com/movies?key1=Will%20Smith&key2=Independece%20Day
