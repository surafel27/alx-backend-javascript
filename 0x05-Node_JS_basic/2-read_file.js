const fs = require('fs');

const countStudents = (arg) => {
  try {
    const data = fs.readFileSync(`${arg}`, 'utf-8');
    const lines = data.split('\n').filter(line => line.trim() !== '');
    const headers = lines[0].split(',');
    
    console.log(data);
  } catch (err) {
    console.log('Cannot load the database');
  }
}

module.exports = countStudents;
