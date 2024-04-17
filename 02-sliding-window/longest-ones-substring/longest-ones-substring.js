function longestOnesSubstring(s) {
  let left = 0,
    currNumOfZeros = 0,
    answer = 0;
  for (let right = 0; right < s.length; right++) {
    if (s[right] === '0') {
      currNumOfZeros++;
    }
    while (currNumOfZeros > 1) {
      if (s[left] === '0') {
        currNumOfZeros -= 1;
      }
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

module.exports = longestOnesSubstring;
