const http = require('http');

const port = process.env.PORT || 5000;
const hostname = process.env.hostname;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Beautiful World!\n');
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
