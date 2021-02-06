'use strict';
const fs = require('fs');
const http = require('http');

const json = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');
const laptopData = JSON.parse(json);
console.log(laptopData);

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('Here is the response you are looking for!');
  console.log(req.url);
});

server.listen(8000, '127.0.0.1', () => {
  console.log(
    "You're listening for incoming requests at port 8000:",
    'http://127.0.0.1:8000/'
  );
});
