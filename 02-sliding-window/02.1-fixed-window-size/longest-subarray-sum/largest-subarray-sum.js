function largestSubArraySum(arr, k) {
  let currentSum = 0;

  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  let answer = currentSum;

  for (let i = k; i < arr.length; i++) {
    currentSum += arr[i] - arr[i - k];
    answer = Math.max(answer, currentSum);
  }

  return answer;
}

module.exports = largestSubArraySum;
