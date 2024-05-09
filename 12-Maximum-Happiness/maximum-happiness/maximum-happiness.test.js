const maximumHappinessSum = require('./maximum-happiness');

test('Find the maximum sum of the happiness values of the selected children you can achieve by selecting k children.', () => {
  const happiness1 = [5, 4, 3, 2, 1];
  const k1 = 2;
  const answer1 = 8;
  expect(maximumHappinessSum(happiness1, k1)).toBe(answer1);

  const happiness2 = [1, 1, 1, 1];
  const k2 = 2;
  const answer2 = 1;
  expect(maximumHappinessSum(happiness2, k2)).toBe(answer2);

  const happiness3 = [2, 3, 4, 5];
  const k3 = 1;
  const answer3 = 5;
  expect(maximumHappinessSum(happiness3, k3)).toBe(answer3);
});
