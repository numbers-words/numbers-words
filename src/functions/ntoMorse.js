const maxNumber = require("../core/maxNumber.js");

const morseCode = {
  '0': '-----',
  '1': '.----',
  '2': '..---',
  '3': '...--',
  '4': '....-',
  '5': '.....',
  '6': '-....',
  '7': '--...',
  '8': '---..',
  '9': '----.',
};

function ntoMorse(number) {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number > maxNumber) throw new Error("Number cannot be greater than " + maxNumber);
  
  const numberStr = number.toString();
  let morseStr = '';
  
  for (let digit of numberStr) {
    if (!morseCode[digit]) {
      throw new Error("Only digits are allowed.");
    }
    morseStr += morseCode[digit] + ' ';
  }

  return morseStr.trim();
}

module.exports = ntoMorse;
