const numSteps = require('./num-steps');

test('Given the binary representation of an integer as a string s, return the number of steps to reduce it to 1', () => {
  const s1 = '1101';
  const answer1 = 6;
  expect(numSteps(s1)).toBe(answer1);

  const s2 = '10';
  const answer2 = 1;
  expect(numSteps(s2)).toStrictEqual(answer2);

  const s3 = '1';
  const answer3 = 0;

  expect(numSteps(s3)).toStrictEqual(answer3);
});
