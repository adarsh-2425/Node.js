//Write a program that takes a URL as input and uses the url.URL class to extract the hostname and protocol from the URL.

const { URL } = require('url');

function getHostnameAndProtocol(inputUrl) {
  const urlObject = new URL(inputUrl){
  return {
    hostname: urlObject.hostname,
    protocol: urlObject.protocol
  }
};

const inputUrl = 'https://www.example.com/path/to/resource?query=value';
const result = getHostnameAndProtocol(inputUrl);
console.log(result); //{ hostname: 'www.example.com', protocol: 'https:' }
