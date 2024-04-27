const longestIdealString = require('./longest-ideal-subsequence');

test('Finding the longest ideal string', () => {
  const s1 = 'acfgbd';
  const k1 = 2;
  expect(longestIdealString(s1, k1)).toBe(4);

  const s2 = 'abcd';
  const k2 = 3;
  expect(longestIdealString(s2, k2)).toBe(4);
});
