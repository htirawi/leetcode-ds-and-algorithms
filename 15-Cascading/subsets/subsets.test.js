const subsets = require('./subsets');

test('Find all possible subsets (the power set).', () => {
  const nums1 = [1, 2, 3];
  const answer1 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];
  expect(subsets(nums1)).toStrictEqual(answer1);

  const nums2 = [0];
  const answer2 = [[], [0]];
  expect(subsets(nums2)).toStrictEqual(answer2);
});
