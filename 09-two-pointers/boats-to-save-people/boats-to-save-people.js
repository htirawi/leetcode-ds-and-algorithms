/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var boatsToSavePeople = function (people, limit) {
  const sortedPeople = people.sort((a, b) => a - b);

  let i = 0;
  j = sortedPeople.length - 1;

  let answer = 0;

  while (i <= j) {
    answer += 1;
    if (sortedPeople[i] + sortedPeople[j] <= limit) {
      i += 1;
    }
    j -= 1;
  }
  return answer;
};

module.exports = boatsToSavePeople;
