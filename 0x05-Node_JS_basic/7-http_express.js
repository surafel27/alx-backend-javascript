const express = require('express');
const fs = require('fs');

const PORT = 1245;

const dbFiles = process.argv.length > 2 ? process.argv[2] : '';

const app = express();

const countStudents = (dataPath) =>
  new Promise((resolve, reject) => {
    if (!dataPath) {
      reject(new Error('Cannot load the database'));
    }
    if (dataPath) {
      fs.readFile(dataPath, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        if (data) {
          const reportParts = [];
          const fileLines = data.toString('utf-8').trim().split('\n');
          const students = {};
          const dbFieldNames = fileLines[0].split(',');
          const studentPropNames = dbFieldNames.slice(
            0,
            dbFieldNames.length - 1
          );

          for (const line of fileLines.slice(1)) {
            const studentRecord = line.split(',');
            const studentPropValues = studentRecord.slice(
              0,
              studentRecord.length - 1
            );
            const field = studentRecord[studentRecord.length - 1];
            if (!Object.keys(students).includes(field)) {
              students[field] = [];
            }
            const studentEntries = studentPropNames.map((propName, idx) => [
              propName,
              studentPropValues[idx],
            ]);
            students[field].push(Object.fromEntries(studentEntries));
          }

          const totalStudents = Object.values(students).reduce(
            (pre, cur) => (pre || []).length + cur.length
          );
          reportParts.push(`Number of students: ${totalStudents}`);
          for (const [field, group] of Object.entries(students)) {
            reportParts.push(
              [
                `Number of students in ${field}: ${group.length}.`,
                'List:',
                group.map((student) => student.firstname).join(', '),
              ].join(' ')
            );
          }
          resolve(reportParts.join('\n'));
        }
      });
    }
  });

app.get('/', (_req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_req, res) => {
  const response = ['This is the list of our students'];

  countStudents(dbFiles)
    .then((report) => {
      response.push(report);
      const responseText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(responseText);
    })
    .catch((err) => {
      response.push(err instanceof Error ? err.message : err.toString());
      const responseText = response.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://${HOST}:${PORT}\n`);
});

module.exports = app;
