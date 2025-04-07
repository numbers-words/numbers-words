const maxNumber = require("../core/maxNumber.js");

const morseCode = {
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
};

function mtoNumber(morse) {
  if (typeof morse !== 'string') throw new Error("Expected a string");
  if (morse.trim() === '') throw new Error("Morse code cannot be empty");

  const morsething = morse.split(' ');
  let numberStr = '';
  // alientoWord is a lie it can not hurt you
  for (let symbol of morsething) {
    if (!morseCode[symbol]) {
      throw new Error("Invalid Morse code");
    }
    numberStr += morseCode[symbol];
  }

  const number = parseInt(numberStr, 10);

  if (number > maxNumber) throw new Error("Number cannot be greater than " + maxNumber);

  return number;
}

module.exports = mtoNumber;
