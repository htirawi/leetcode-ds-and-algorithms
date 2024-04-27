/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestIdealString = function (s, k) {
  let n = s.length;
  let dp = new Array(26).fill(0);
  let result = 0;

  for (let i = 0; i < n; i++) {
    let current = s.charCodeAt(i) - 'a'.charCodeAt(0);
    let best = 0;

    for (let prev = 0; prev < 26; prev++) {
      if (Math.abs(prev - current) <= k) {
        best = Math.max(best, dp[prev]);
      }
    }
    dp[current] = Math.max(dp[current], best + 1);
    result = Math.max(result, dp[current]);
  }
  return result;
};

module.exports = longestIdealString;
