const maxNumber = require("../core/maxNumber.js");

function toPower(base, exponent) {
  if (isNaN(base) || isNaN(exponent)) throw new Error("Expected numbers");
  const result = Math.pow(base, exponent);
  if (result > maxNumber) throw new Error("Result cannot be greater than " + maxNumber);
  return result;
}

module.exports = toPower;
