/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let operations = 0,
    carry = 0;

  for (let i = s.length - 1; i > 0; i--) {
    let digit = parseInt(s[i]) + carry;

    if (digit % 2 === 1) {
      operations += 2;
      carry = 1;
    } else {
      operations += 1;
    }
  }

  return operations + carry;
};

module.exports = numSteps;
