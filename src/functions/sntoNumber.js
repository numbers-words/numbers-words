function sntoNumber(sciNot) {
  if (typeof sciNot !== 'string' || !sciNot.includes('e')) {
    throw new Error("Expected a valid scientific notation string");
  }

  return parseFloat(sciNot);
}

module.exports = sntoNumber;
