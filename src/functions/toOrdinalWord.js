const toWords = require("./toWords.js");
const maxNumber = require("../core/maxNumber.js");

function toOrdinalWord(number) {
  const specialCases = {
    1: "first",
    2: "second",
    3: "third",
    4: "fourth",
    5: "fifth",
    6: "sixth",
    7: "seventh",
    8: "eighth",
    9: "ninth",
    10: "tenth",
    11: "eleventh",
    12: "twelfth",
    13: "thirteenth",
    14: "fourteenth",
    15: "fifteenth",
    16: "sixteenth",
    17: "seventeenth",
    18: "eighteenth",
    19: "nineteenth",
    20: "twentieth",
    30: "thirtieth",
    40: "fortieth",
    50: "fiftieth",
    60: "sixtieth",
    70: "seventieth",
    80: "eightieth",
    90: "ninetieth",
    100: "hundredth",
    1000: "thousandth",
    10000: "ten-thousandth",
    100000: "hundred-thousandth",
    1000000: "millionth",
    10000000: "ten-millionth",
    100000000: "hundred-millionth",
    1000000000: "billionth",
    10000000000: "ten-billionth",
    100000000000: "hundred-billionth",
    1000000000000: "trillionth",
    10000000000000: "ten-trillionth",
    100000000000000: "hundred-trillionth",
    1000000000000000: "quadrillionth"
  };
  if (number > maxNumber) throw new Error("Number can not be greater than" + maxNumber);
  if (specialCases[number]) {
    return specialCases[number];
  }

  const lastTwoDigits = number % 100;
  let suffix = "th";

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    suffix = "th";
  } else {
    const lastDigit = number % 10;
    const suffixes = ["th", "st", "nd", "rd"];
    suffix = suffixes[lastDigit] || "th";
  }

  const numberInWords = toWords(number);

  if (numberInWords.endsWith("one")) {
    return numberInWords.replace(/one$/, "first");
  }

  if (numberInWords.endsWith("two")) {
    return numberInWords.replace(/two$/, "second");
  }

  if (numberInWords.endsWith("three")) {
    return numberInWords.replace(/three$/, "third");
  }

  return numberInWords + suffix;
}

module.exports = toOrdinalWord;
