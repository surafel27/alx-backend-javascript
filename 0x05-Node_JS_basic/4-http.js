const http = require('http');

const port = 1245;
const hostname = 'localhost'
const app = http.createServer();

app.on('request', (req, res) => {
  const resMessage = 'Hello Holberton School!';
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', resMessage.length);
  res.statusCode = 200;
  res.write(resMessage);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
