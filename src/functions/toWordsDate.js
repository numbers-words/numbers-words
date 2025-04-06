const toWords = require("./toWords.js");

function toWordsDate(date) {
  const datet = new Date(date);

  if (isNaN(datet.getTime())) {
    throw new Error("Invalid date format");
  }

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", 
    "October", "November", "December"
  ];

  const day = datet.getDate();
  const month = months[datet.getMonth()];
  const year = datet.getFullYear();

  const idk = toWords(day);
  const idk2 = (day === 1 || day === 21 || day === 31) ? "st" : 
                 (day === 2 || day === 22) ? "nd" : 
                 (day === 3 || day === 23) ? "rd" : "th";

  const idk3 = idk + idk2;

  const yearWords = toWords(year);

  return `${month} ${idk3}, ${yearWords}`;
}

module.exports = toWordsDate;
