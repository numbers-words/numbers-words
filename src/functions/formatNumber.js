const maxNumber = require("../core/maxNumber.js");
function formatNumber(number, separator = ',') {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number > maxNumber) throw new Error("Number can nnot be greater than" + maxNumber);
  if (typeof separator !== 'string') {
    throw new Error("Separator must be a string");
  }

  let result;
  const splits = number.toString().split('.');
  result = Number(splits[0]).toLocaleString("en-US").replaceAll(",", separator);
  
  if (splits[1]) {
    result = result + '.' + splits[1];
  }
  
  return result;
}

module.exports = formatNumber
