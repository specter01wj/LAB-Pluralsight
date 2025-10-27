const yargs = require('yargs');
const { add, subtract } = require('./calculator');

const options = yargs(process.argv);

console.log("Hello World");
console.log(add(5, 10));
console.log(subtract(10, 5));
