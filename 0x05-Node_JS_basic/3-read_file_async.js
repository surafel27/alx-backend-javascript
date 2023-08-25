const fs = require('fs');

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

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].count}. List: ${fieldCounts[field].names.join(', ')}`);
      }
    }

    resolve();
  });
});

module.exports = countStudents;
