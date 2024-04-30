/**
 * @param {string} word
 * @return {number}
 */
const wonderfulSubstrings = (word) => {
  let freq = {};
  freq[0] = 1;
  let mask = 0;
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    let c = word[i];
    let bit = c.charCodeAt(0) - 97;

    mask ^= 1 << bit;

    if (freq[mask]) {
      result += freq[mask];
      freq[mask]++;
    } else {
      freq[mask] = 1;
    }

    for (let odd_char = 0; odd_char < 10; odd_char++) {
      if (freq[mask ^ (1 << odd_char)]) {
        result += freq[mask ^ (1 << odd_char)];
      }
    }
  }
  return result;
};

module.exports = wonderfulSubstrings;
