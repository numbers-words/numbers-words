const sntoNumber = require('../src/functions/sntoNumber.js');
const ntoSciNot = require('../src/functions/ntoSciNot.js');

let r1 = ntoSciNot(1000);
let r2 = sntoNumber(r1);
console.log(r1);
console.log(r2);
