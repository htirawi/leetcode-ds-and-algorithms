const largestPositiveInteger = require('./largest-positive-integer');

test('find the largest positive integer k such that -k also exists in the array', () => {
  const nums1 = [-1, 2, -3, 3];
  const result1 = 3;

  expect(largestPositiveInteger(nums1)).toBe(result1);

  const nums2 = [-1, 10, 6, 7, -7, 1];
  const result2 = 7;

  expect(largestPositiveInteger(nums2)).toBe(result2);

  const nums3 = [-10, 8, 6, 7, -2, -3];
  const result3 = -1;

  expect(largestPositiveInteger(nums3)).toBe(result3);
});
