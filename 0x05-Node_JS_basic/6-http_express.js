const express = require('express');

const app = express();
const PORT = 1245;
const HOST = 'localhost';

app.get('/', (req, res) => {
  req.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOST}:${PORT}\n`);
});
