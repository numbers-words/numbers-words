const maxRoman = require("../core/maxNumber.js");
function ntoRoman(number) {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number < 1 || number > maxRoman) throw new Error("Number should be above 1 and below" + maxRoman);
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" }
  ];
  // Can someone fact check this rq
  let result = "";
  for (let i = 0; i < romanNumerals.length; i++) {
    while (number >= romanNumerals[i].value) {
      result += romanNumerals[i].symbol;
      number -= romanNumerals[i].value;
    }
  }
  return result;
}
module.exports = ntoRoman
