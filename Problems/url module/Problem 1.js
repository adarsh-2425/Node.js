//Write a function that takes a URL string as input and returns the domain name of the URL in its ASCII representation.

//import url module
const url = require('url');

//function to convert
function getAsciiDomainName(string) {
    const parsedUrl = url.parse(string);
    const asciiDomainName = url.domainToASCII(parsedUrl.hostname);
    return asciiDomainName;
}

const urlString = 'https://www.example.com/path?query=value#fragment';
const asciiDomainName = getAsciiDomainName(urlString);
console.log(asciiDomainName);  // 'www.example.com'
