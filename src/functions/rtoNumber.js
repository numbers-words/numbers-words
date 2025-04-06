function rtoNumber(roman) {
  if (typeof roman !== "string") throw new Error("Expected a string");
  
  const romans = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 }
  ];

  let result = 0;
  let i = 0;
  
  while (i < roman.length) {
    let found = false;
    for (let j = 0; j < romans.length; j++) {
      if (roman.substring(i, i + romans[j].symbol.length) === romans[j].symbol) {
        result += romans[j].value;
        i += romans[j].symbol.length;
        found = true;
        break;
      }
    }
    if (!found) {
      throw new Error("Invalid Roman numeral");
    }
  }

  return result;
}

module.exports = rtoNumber;
