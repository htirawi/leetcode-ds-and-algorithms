const sumOfDistancesInTree = require('.//sum-of-distances');

const n = 6;
const edges = [
  [0, 1],
  [0, 2],
  [2, 3],
  [2, 4],
  [2, 5],
];
const result = sumOfDistancesInTree(n, edges);

console.log(result);
