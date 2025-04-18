const maxNumber = require("../core/maxNumber.js");

function ntoBinary(number) {
  if (isNaN(number)) throw new Error("Expected a number");

  if (number > maxNumber) throw new Error("Number cannot be greater than " + maxNumber);

  if (number === 0) return 'zero';

  let negative = number < 0;
  if (negative) number = -number;

  const binaryt = number.toString(2);
  const binaryWords = {
    '0': 'zero',
    '1': 'one'
  };

  let result = binaryt.split('').map(digit => 
binaryWords[digit]).join(' ');

  if (negative) {
    result = 'negative ' + result;
  }

  return result;
}

module.exports = ntoBinary;
