const { maxNumber } = require("../core/maxNumber.js");

const lessThanTwenty = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
  'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

const tenthsLessThanHundred = [
  'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];

const largeNumbers = [
  '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'
];

function toNumbers(word) {
  if (typeof word !== 'string') {
    throw new Error(`Expected a string, got ${typeof word}`);
  }

  let words = word.toLowerCase().split(/\s+/);
  let total = 0;
  let current = 0;

  words.forEach((w) => {
    if (lessThanTwenty.includes(w)) {
      current += lessThanTwenty.indexOf(w);
    } else if (tenthsLessThanHundred.includes(w)) {
      current += tenthsLessThanHundred.indexOf(w) * 10;
    } else if (largeNumbers.includes(w)) {
      let multiplier = Math.pow(10, 3 * largeNumbers.indexOf(w));
      current *= multiplier;
      total += current;
      current = 0;
    } else if (w === 'hundred') {
      current *= 100;
    } else {
      throw new Error(`Unknown word: ${w}`);
    }
  });

  total += current;

  if (total > maxNumber) {
    throw new Error("Number is too big");
  }

  return total;
}

module.exports = toNumbers;
