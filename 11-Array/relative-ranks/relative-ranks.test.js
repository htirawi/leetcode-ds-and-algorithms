const findRelativeRanks = require('./relative-ranks');

test('Find the answer of size n where answer[i] is the rank of the ith athlete.', () => {
  const score = [5, 4, 3, 2, 1];
  const answer = ['Gold Medal', 'Silver Medal', 'Bronze Medal', '4', '5'];

  expect(findRelativeRanks(score)).toStrictEqual(answer);

  const score2 = [10, 3, 8, 9, 4];
  const answer2 = ['Gold Medal', '5', 'Bronze Medal', 'Silver Medal', '4'];

  expect(findRelativeRanks(score2)).toStrictEqual(answer2);
});
