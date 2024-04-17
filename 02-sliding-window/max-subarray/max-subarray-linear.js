function maxSubarraySum(arr, k) {
  let currentSum = 0;
  let maxSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  currentSum = maxSum;

  // Calculate the sum of the remaining elements
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    // Log the update for visualization
    console.log(`${currentSum} - ${arr[i - k]} + ${arr[i]}`);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;
