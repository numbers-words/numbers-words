function btoNumber(number) {
  const words = {
    'zero': '0',
    'one': '1'
  };

  let negative = false;

  if (number.startsWith('negative')) {
    negative = true;
    number = number.slice(9).trim();
  }

  const binaryt2 = number.split(' ').map(word => words[word]).join('');

  if (!/^[01]+$/.test(binaryt2)) {
    throw new Error("Invalid binary word");
  }

  let result = parseInt(binaryt2, 2);

  if (negative) {
    result = -result;
  }

  return result;
}

module.exports = btoNumber;
