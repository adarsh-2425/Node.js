//get domain name from url
const url = require('url');

const getDomainName = (urlString) => {
  const parsedUrl = url.parse(urlString);
  const hostName = parsedUrl.host.split('.');
  const domain = hostName.slice(2).join('.');
  console.log(domain);
}

getDomainName('https://www.example.com/path/to/resource');
