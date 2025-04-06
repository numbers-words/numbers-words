function unformatNumber(number) {
  if (typeof number != 'string') {
    throw new Error("Expected a string");
  }

  let numberActuallyTookAShower = number.replace(/[^0-9.-]/g, '');

  if (numberActuallyTookAShower.includes('-') && !numberActuallyTookAShower.startsWith('-')) {
    numberActuallyTookAShower = numberActuallyTookAShower.replace(/-/g, '');
  }

  const result = Number(numberActuallyTookAShower);

  if (isNaN(result)) {
    throw new Error("Invalid number format");
  }

  return result;
}

module.exports = unformatNumber;
