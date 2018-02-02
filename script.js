/**
 * Script to run the functions defined in this project from CLI by passing
 * whichever input you choose. The syntax to call this script is as follows:
 *
 *  > node script.js [day] [part] [input]
 */

// `process.argv` contains the arguments passed to node in CLI
// We skip the first two because they're the path for Node and the script to run
const [ day, part, input ] = process.argv.slice(2);

try {
  let getResult = require(`./day${day}/part${part}`);
  console.log(`Result for input "${input}" in module ${day}.${part}:`);
  console.log(getResult(input));
} catch (error) {
  console.error(`You need to specify the following arguments:
    - [day] (must be a number between 1 and 25)
    - [part] (must be either 1 or 2)
    - [input] (the input for the corresponding module)
  `);
}
