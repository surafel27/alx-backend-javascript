const express = require('express');

const PORT = 1245;
const HOST = 'localhost';

const app = express();

app.get('/', (_req, res) => {
  req.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOST}:${PORT}\n`);
});

module.exports = app;
