/**
 * use procss.stdout
 * @param {*} arg
 * @returns string
 */

function displayMessage(arg){
  process.stdout.write(arg + '\n');
}

module.exports = displayMessage;
