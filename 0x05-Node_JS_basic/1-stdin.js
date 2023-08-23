/**
 * use process.stdin.on
 * @param {*} name arg
 * @returns string
 */

console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('readable', function() {
  const name =  process.stdin.read();

  if (name) {
    process.stdout.write("Your name is:" + name)
  }
});

process.stdin.on('end', function() {
  console.log("This important software is now closing");
});
