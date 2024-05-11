const mincostToHireWorkers = require('./min-cost-to-hire-workers');

test('Find the least amount of money needed to form a paid group satisfying the above conditions.', () => {
  const quality1 = [10, 20, 5];
  const k1 = 2;
  const wage1 = [70, 50, 30];
  const answer1 = 105.0;
  expect(mincostToHireWorkers(quality1, wage1, k1)).toStrictEqual(answer1);

  const quality2 = [3, 1, 10, 10, 1];
  const k2 = 3;
  const wage2 = [4, 8, 2, 2, 7];
  const answer2 = 30.67;
  expect(mincostToHireWorkers(quality2, wage2, k2)).toStrictEqual(answer2);
});
