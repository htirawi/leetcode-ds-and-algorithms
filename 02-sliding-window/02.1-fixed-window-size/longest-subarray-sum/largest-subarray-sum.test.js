const largestSubArraySum = require('./largest-subarray-sum');

test('Finding largest subarray sum using O(n) solution', () => {
  const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
  const k1 = 3;
  expect(largestSubArraySum(arr1, k1)).toBe(24);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 4;
  expect(largestSubArraySum(arr2, k2)).toBe(-11);
});
