const maxNumber = require("../core/maxNumber.js");

function toSciNot(number) {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number > maxNumber) throw new Error("Number can not be greater than" + maxNumber);
  if (number === 0) {
    return "0";
  }

  // Gng should I make the decimals customazible
  const scientificNotation = number.toExponential();
  
  return scientificNotation;
}

module.exports = toSciNot;
