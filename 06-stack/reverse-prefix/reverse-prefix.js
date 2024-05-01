/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
  let stack = [],
    result = [],
    index = 0;

  while (index < word.length) {
    stack.push(word[index]);
    if (word[index] === ch) {
      while (stack.length > 0) {
        result.push(stack.pop());
      }
      index++;

      while (index < word.length) {
        result.push(word[index]);
        index++;
      }
      return result.join('');
    }
    index++;
  }
  return word;
};
module.exports = reversePrefix;
