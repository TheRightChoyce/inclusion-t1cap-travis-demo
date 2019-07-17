var http = require('http');

const port = env.PORT || 1337;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Travis!\n');
}).listen(port, '127.0.0.1');

console.log(`Server running at http://127.0.0.1:${port}/`);

