const productsSubArrayLength = require('./products-subarray-length');

test('Finding the number of subarrays where the product of all the elements in the subarray is strictly less than k', () => {
  const arr1 = [10, 5, 2, 6];
  const k1 = 100;
  expect(productsSubArrayLength(arr1, k1)).toBe(8);
});
