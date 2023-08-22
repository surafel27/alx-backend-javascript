/**
 * use process.stdin.on
 * @param {*} name arg
 * @returns string
 */

console.log("Welcome to Holberton School, what is your name?" + '\n');
process.stdin.on('readable', function() {
  const name =  process.stdin.read();
  console.log("Your name is:" + name);
  console.log("This important software is now closing" + '\n');
})
