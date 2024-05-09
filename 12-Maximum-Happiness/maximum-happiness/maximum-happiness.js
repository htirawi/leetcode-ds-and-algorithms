/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
  happiness.sort((a, b) => b - a);

  let totalHappinessSum = 0;
  let turns = 0;

  while (k > 0 && totalHappinessSum < happiness.length) {
    happiness[totalHappinessSum] = Math.max(
      happiness[totalHappinessSum] - totalHappinessSum,
      0
    );

    turns += happiness[totalHappinessSum];
    totalHappinessSum++;
    k--;
  }

  return turns;
};

module.exports = maximumHappinessSum;
