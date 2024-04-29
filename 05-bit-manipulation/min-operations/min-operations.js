var minOperations = function (nums, k) {
  let finalXor = 0;
  for (let n of nums) {
    finalXor ^= n;
  }

  return (finalXor ^ k)
    .toString(2)
    .split('')
    .filter((c) => c === '1').length;
};

// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var minOperations = function (nums, k) {
//   let finalXOR = 0;

//   for (let n of nums) {
//     finalXOR = finalXOR ^ n;
//   }

//   let count = 0;
//   while (k || finalXOR) {
//     if (k % 2 !== finalXOR % 2) {
//       count++;
//     }

//     k = Math.floor(k / 2);
//     finalXOR = Math.floor(finalXOR / 2);
//   }
//   return count;
// };

module.exports = minOperations;
