/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let output = [[]];
  for (let num of nums) {
    let newSub = [];
    for (let current of output) {
      let temp = current.slice();
      temp.push(num);
      newSub.push(temp);
    }
    for (let current of newSub) {
      output.push(current);
    }
  }
  return output;
};

module.exports = subsets;
