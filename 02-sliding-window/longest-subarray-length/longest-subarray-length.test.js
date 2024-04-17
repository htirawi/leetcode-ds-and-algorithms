const longestSubArrayLength = require('./longest-subarray-length');

test('Finding the length of the longest subarray whose sum is less than or equal to k', () => {
  const arr1 = [3, 1, 2, 7, 4, 2, 1, 1, 5];
  const k1 = 8;
  expect(longestSubArrayLength(arr1, k1)).toBe(4);

  const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
  const k2 = 15;
  expect(longestSubArrayLength(arr2, k2)).toBe(8);
});
