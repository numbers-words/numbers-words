const { maxNumber, allNumbers } = require("../core/numbers.js");  
function toWords(number) {  
  if (typeof number != "number") {  
    const type = typeof number;  
    throw new Error(`Expected a string got ${type}`);  
  };  
  if (number > maxNumber) {  
    throw new Error("Number is too big");  
  };  
  if (allNumbers[number] == undefined) {
    throw new Error("Number is too big or too small");
  };
  return allNumbers[number];
};

module.exports = toWords;
