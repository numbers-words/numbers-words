const maxNumber = require("../core/maxNumber.js");

function toRoot(number, root) {
  if (isNaN(number) || isNaN(root)) throw new Error("Expected numbers");
  if (root === 0) throw new Error("Root cannot be zero");
  const result = Math.pow(number, 1 / root);
  if (result > maxNumber) throw new Error("Result cannot be greater than " + maxNumber);
  return result;
}

module.exports = toRoot;
