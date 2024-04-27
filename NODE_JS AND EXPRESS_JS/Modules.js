// File
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

export { add, subtract };

const log = (message) => {
  console.log(message);
};

export default log;

import { add, subtract } from './math.js';
import customLogger from './logger.js';

console.log(add(5, 3));
console.log(subtract(5, 3));
customLogger('Hello, world!');

// HTTP 
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!\n');
});

server.listen(3000, () => {
  console.log('HTTP Server running at http://localhost:3000/');
});

// HTTPS 
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('public-cert.pem')
};

const secureServer = https.createServer(options, (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World Securely!\n');
});

secureServer.listen(443, () => {
  console.log('HTTPS Server running at https://localhost/');
});

// OS 
const os = require('os');

console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());
console.log('Total Memory:', os.totalmem());
console.log('User Info:', os.userInfo());