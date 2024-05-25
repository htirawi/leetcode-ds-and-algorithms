/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  const result = [];
  const words = new Set(wordDict);
  backtrack(s, words, [], result);
  return result;
};

const backtrack = (s, words, path, result) => {
  if (s.length === 0) {
    result.push(path.join(' '));
    return;
  }
  for (let i = 1; i <= s.length; i++) {
    const substring = s.substring(0, i);
    if (words.has(substring)) {
      path.push(substring);
      backtrack(s.slice(i), words, path, result);
      path.pop();
    }
  }
};

module.exports = wordBreak;
