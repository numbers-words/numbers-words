const maxNumber = require("../core/maxNumber.js");
function toOrdinal(number) {
  if (isNaN(number)) throw new Error("Expected a number");
  if (number > maxNumber) throw new Error("Number can not be greater than" + maxNumber);

  let idkWhatToName = number.toString();
  let lastDigit = idkWhatToName.slice(-1);
  let lastTwoDigits = idkWhatToName.slice(-2);

  if (["11", "12", "13"].includes(lastTwoDigits)) {
    return `${number}th`;
  }

  if (lastDigit === "1") return `${number}st`;
  if (lastDigit === "2") return `${number}nd`;
  if (lastDigit === "3") return `${number}rd`;
  return `${number}th`;
}

module.exports = toOrdinal
