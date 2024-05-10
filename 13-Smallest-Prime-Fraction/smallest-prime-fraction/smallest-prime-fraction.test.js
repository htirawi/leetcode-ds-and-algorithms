const kthSmallestPrimeFraction = require('./smallest-prime-fraction');

test('Find the kth smallest fraction considered.', () => {
  const arr1 = [1, 2, 3, 5];
  const k1 = 3;
  const answer1 = [2, 5];
  expect(kthSmallestPrimeFraction(arr1, k1)).toStrictEqual(answer1);

  const arr2 = [1, 7];
  const k2 = 1;
  const answer2 = [1, 7];
  expect(kthSmallestPrimeFraction(arr2, k2)).toStrictEqual(answer2);
});
