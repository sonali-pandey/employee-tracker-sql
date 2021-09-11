const db = require ('./config/connection');
const {promptUser} = require('./lib/Company');
const figlet = require('figlet');

console.log(`
==========================================================================================================================================
`);
console.log(figlet.textSync('Employee Tracker',{font: 'colossal'}));
console.log(`
==========================================================================================================================================
`);
promptUser();