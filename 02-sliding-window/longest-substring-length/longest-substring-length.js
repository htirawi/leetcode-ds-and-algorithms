function longestSubStringLength(s) {
  let left = 0,
    right = 0;
  const map = new Map();
  let answer = 0;

  while (right < s.length) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    answer = Math.max(answer, right - left + 1);
    right++;
  }
  return answer;
}

module.exports = longestSubStringLength;
