/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [];
  let firstIdx = words[0];

  firstIdx.split('').forEach((item) => {
    if (words.every((word) => word.includes(item))) {
      result.push(item);
      words = words.map((word) => word.replace(item, ''));
    }
  });

  return result;
};

module.exports = commonChars;
