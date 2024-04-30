const minOperations = require('./min-operations');

test('Finding the minimum number of operations required to make the bitwise XOR of all elements of the final array equal to k.', () => {
  const k1 = 1;
  const nums1 = [2, 1, 3, 4];

  expect(minOperations(nums1, k1)).toBe(2);

  const k2 = 0;
  const nums2 = [2, 0, 2, 0];

  expect(minOperations(nums2, k2)).toBe(0);
});
