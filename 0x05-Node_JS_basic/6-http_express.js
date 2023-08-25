const express = require('express');

const PORT = 1245;
const app = express();

app.get('/', (req, res) => {
  req.send('Hello Holberton School!');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}\n`);
});

module.exports = app;
