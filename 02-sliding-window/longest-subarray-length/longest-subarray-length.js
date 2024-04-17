function longestSubArrayLength(arr, k) {
  let left = 0,
    curr = 0,
    answer = 0;
  for (let right = 0; right < arr.length; right++) {
    curr += arr[right];
    while (curr > k) {
      curr -= arr[left];
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}

module.exports = longestSubArrayLength;
