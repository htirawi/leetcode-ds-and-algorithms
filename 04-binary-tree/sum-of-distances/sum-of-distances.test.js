const sumOfDistancesInTree = require('./sum-of-distances');

test('Finding the sum of the distances between the ith node in the tree and all other nodes', () => {
  const n1 = 6;
  const edges1 = [
    [0, 1],
    [0, 2],
    [2, 3],
    [2, 4],
    [2, 5],
  ];

  const result1 = sumOfDistancesInTree(n1, edges1);
  expect(sumOfDistancesInTree(n1, edges1)).toStrictEqual(result1);

  const n2 = 1;
  const edges2 = [];
  expect(sumOfDistancesInTree(n2, edges2)).toStrictEqual([0]);
});
