const toWords = require("./toWords.js");
const toOrdinalWord = require("./toOrdinalWord.js");

function toWordsDate(date) {
  const datet = new Date(date);

  const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
  ];

  const month = monthNames[datet.getMonth()];
  const day = datet.getDate();
  const year = datet.getFullYear();

  const dayWord = toOrdinalWord(day);

  const yearWord = toWords(year);

  return `${month} ${dayWord}, ${yearWord}`;
}

module.exports = toWordsDate;
