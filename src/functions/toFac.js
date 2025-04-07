const maxNumber = require("../core/maxNumber.js");

function toFac(number) {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number < 0) throw new Error("Factorial is not defined for negative numbers");
  if (number > maxNumber) throw new Error("Number cannot be greater than " + maxNumber);

  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }

  return factorial;
}

module.exports = toFac;
