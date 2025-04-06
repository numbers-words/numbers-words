const { maxNumber } = require("../core/maxNumber.js");

const oneTen = 10;
const oneHundred = 100;
const oneThousand = 1000;
const oneMillion = 1000000;
const oneBillion = 1000000000;
const oneTrillion = 1000000000000;
const oneQuadrillion = 1000000000000000;

const lessThanTwenty = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tenthsLessThanHundred = [
  'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

function toWords(number) {
  if (typeof number !== 'number') {
    throw new Error(`Expected a number, got ${typeof number}`);
  }

  if (number > maxNumber) {
    throw new Error("Number can not be greater than" + maxNumber);
  }

  return generateWords(number);
}

function generateWords(number) {
  let remainder, word;
  let words = [];

  if (number === 0) {
    return 'zero';
  }

  if (number < 0) {
    words.push('minus');
    number = Math.abs(number);
  }

  if (number < 20) {
    return lessThanTwenty[number];
  } else if (number < oneHundred) {
    remainder = number % oneTen;
    word = tenthsLessThanHundred[Math.floor(number / oneTen)];
    if (remainder) {
      word += '-' + lessThanTwenty[remainder];
    }
    return word;
  } else if (number < oneThousand) {
    remainder = number % oneHundred;
    word = generateWords(Math.floor(number / oneHundred)) + ' hundred';
    if (remainder) {
      word += ' ' + generateWords(remainder);
    }
    return word;
  } else if (number < oneMillion) {
    remainder = number % oneThousand;
    word = generateWords(Math.floor(number / oneThousand)) + ' thousand';
    if (remainder) {
      word += ' ' + generateWords(remainder);
    }
    return word;
  } else if (number < oneBillion) {
    remainder = number % oneMillion;
    word = generateWords(Math.floor(number / oneMillion)) + ' million';
    if (remainder) {
      word += ' ' + generateWords(remainder);
    }
    return word;
  } else if (number < oneTrillion) {
    remainder = number % oneBillion;
    word = generateWords(Math.floor(number / oneBillion)) + ' billion';
    if (remainder) {
      word += ' ' + generateWords(remainder);
    }
    return word;
  } else if (number < oneQuadrillion) {
    remainder = number % oneTrillion;
    word = generateWords(Math.floor(number / oneTrillion)) + ' trillion';
    if (remainder) {
      word += ' ' + generateWords(remainder);
    }
    return word;
  } else {
    throw new Error("Number is too big or too small");
  }
}

module.exports = toWords;
