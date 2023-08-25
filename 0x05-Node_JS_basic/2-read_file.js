const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf-8');
  const lines = data.split('\n').filter((line) => line.trim() !== '');

  const headers = lines[0].split(',');

  const fieldCounts = {};
  for (let i = 1; i < lines.length; i += 1) {
    const values = lines[i].split(',');
    const field = values[headers.indexOf('field')];

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
}

module.exports = countStudents;
