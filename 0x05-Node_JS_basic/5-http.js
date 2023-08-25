const http = require('http');
const fs = require('fs');

/*
 * countStudents function reads the database file and calculates the number of students
 * in each field, returning the formatted output as a string.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (error, data) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');

    const headers = lines[0].split(',');
    const fieldIndex = headers.indexOf('field');

    const fieldCounts = {};
    for (let i = 1; i < lines.length; i += 1) {
      const values = lines[i].split(',');
      const field = values[fieldIndex];
      if (!fieldCounts[field]) {
        fieldCounts[field] = {
          count: 0,
          names: [],
        };
      }
      fieldCounts[field].count += 1;
      fieldCounts[field].names.push(values[headers.indexOf('firstname')]);
    }

    const output = [`Number of students: ${lines.length - 1}`];
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        output.push(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
      }
    }

    resolve(output.join('\n')); // Return the formatted output as a string
  });
});

/*
 * Create an HTTP server using the http module to handle requests.
 */
const app = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('Error: Database path is missing\n');
      return;
    }
    countStudents(databasePath)
      .then((output) => {
        res.write('This is the list of our students\n');
        res.end(output);
      })
      .catch((error) => {
        res.write('This is the list of our students\n');
        res.end(error.message);
      });
  } else {
    res.end('Not found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});

module.exports = app;
