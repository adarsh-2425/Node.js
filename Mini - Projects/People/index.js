const http = require('http');
const { people, getAge } = require('./people');

const server = http.createServer(async(req, res) => {
  if(req.url === '/people') {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      const peopleData = people.map(person => ({
        name: person.name,
        age: getAge(person.dob),
        dob: person.dob.toISOString().slice(0, 10)
      }));

      res.writeHead(200, {'Content-Type':'application/json'});
      res.end(JSON.stringify(peopleData)); 
    } catch(err) {
      throw new Error(err);
    }
  } else {
    res.writeHead(404, {'Content-Type':'text/plain'});
    res.end('Error');
  }
});

server.listen(3000, ()=>{
  console.log('server listening on 3000');
});
