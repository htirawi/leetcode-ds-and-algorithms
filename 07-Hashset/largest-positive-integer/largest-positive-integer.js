var largestPositiveInteger = function (nums) {
  // Initialize a set to store negative numbers
  let neg = new Set();

  for (let num of nums) {
    if (num < 0) {
      neg.add(num);
    }
  }

  let ans = -1;

  for (let num of nums) {
    if (num > ans && neg.has(-num)) {
      ans = num;
    }
  }

  return ans;
};

// time complexity: O(n)
// space complexity: O(n)

module.exports = largestPositiveInteger;
